import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const saveSchema = z.object({
  url: z.string().url(),
  anonKey: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(1),
  config: z.record(z.string(), z.unknown()),
});

function stripSecrets(config: Record<string, unknown>) {
  const copy = structuredClone(config);
  const admin = (copy["admin"] || {}) as Record<string, unknown>;
  admin["supabaseAnonKey"] = "";
  admin["password"] = "";
  admin["backupCronToken"] = "";
  copy["admin"] = admin;
  const emailAutomation = (copy["emailAutomation"] || {}) as Record<
    string,
    unknown
  >;
  for (const key of [
    "resendApiKey",
    "gmailClientId",
    "gmailClientSecret",
    "gmailRefreshToken",
  ])
    emailAutomation[key] = "";
  copy["emailAutomation"] = emailAutomation;
  const tracking = (copy["tracking"] || {}) as Record<string, unknown>;
  tracking["tiktokAccessToken"] = "";
  copy["tracking"] = tracking;
  return copy;
}

export const saveConfigWithSupabaseAuth = createServerFn({ method: "POST" })
  .validator((input) => saveSchema.parse(input))
  .handler(async ({ data }) => {
    const serviceUrl =
      process.env["SUPABASE_URL"]?.replace(/\/$/, "") ||
      data.url.replace(/\/$/, "");
    const serviceKey = process.env["SUPABASE_SERVICE_ROLE_KEY"];
    if (!serviceUrl || !serviceKey) {
      return { ok: false, reason: "missing_server_supabase_env" } as const;
    }
    if (serviceUrl !== data.url.replace(/\/$/, "")) {
      return { ok: false, reason: "url_mismatch" } as const;
    }

    const authResponse = await fetch(
      `${data.url.replace(/\/$/, "")}/auth/v1/token?grant_type=password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: data.anonKey },
        body: JSON.stringify({ email: data.email, password: data.password }),
      },
    );
    if (!authResponse.ok) return { ok: false, reason: "auth_failed" } as const;
    const authPayload = (await authResponse.json()) as {
      access_token?: string;
    };
    if (!authPayload.access_token)
      return { ok: false, reason: "auth_failed" } as const;

    const response = await fetch(
      `${serviceUrl}/rest/v1/funnel_configs?on_conflict=id`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          Prefer: "resolution=merge-duplicates,return=minimal",
        },
        body: JSON.stringify([
          {
            id: 1,
            data: stripSecrets(data.config),
            updated_at: new Date().toISOString(),
          },
        ]),
      },
    );
    if (!response.ok)
      return { ok: false, reason: "config_write_failed" } as const;
    return { ok: true, accessToken: authPayload.access_token } as const;
  });
