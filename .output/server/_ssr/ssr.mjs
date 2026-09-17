import processModule from "node:process";
import { Buffer } from "node:buffer";
//#region node_modules/.nitro/vite/services/ssr/index.js
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var BACKUP_TABLES = [
	"funnel_configs",
	"funnel_analytics",
	"leads",
	"visitor_sessions"
];
function isBackupRequest(request) {
	return new URL(request.url).pathname === "/api/backup";
}
function isAuthorizedBackupRequest(request) {
	const token = processModule.env["BACKUP_CRON_TOKEN"];
	return request.headers.get("x-vercel-cron") === "1" || Boolean(token) && new URL(request.url).searchParams.get("token") === token || Boolean(token) && request.headers.get("x-backup-token") === token;
}
async function handleBackupRequest(request) {
	if (!isAuthorizedBackupRequest(request)) return new Response("Unauthorized", { status: 401 });
	const supabaseUrl = processModule.env["SUPABASE_URL"]?.replace(/\/$/, "");
	const serviceKey = processModule.env["SUPABASE_SERVICE_ROLE_KEY"];
	const resendKey = processModule.env["RESEND_API_KEY"];
	const fromEmail = processModule.env["BACKUP_FROM_EMAIL"];
	const missing = [
		!supabaseUrl && "SUPABASE_URL",
		!serviceKey && "SUPABASE_SERVICE_ROLE_KEY",
		!resendKey && "RESEND_API_KEY",
		!fromEmail && "BACKUP_FROM_EMAIL"
	].filter((value) => Boolean(value));
	if (missing.length > 0) return new Response(`Backup environment is incomplete: ${missing.join(", ")}`, { status: 503 });
	const headers = {
		apikey: serviceKey,
		Authorization: `Bearer ${serviceKey}`
	};
	const configResponse = await fetch(`${supabaseUrl}/rest/v1/funnel_configs?id=eq.1&select=data`, { headers });
	if (!configResponse.ok) return new Response("Cannot read backup configuration", { status: 502 });
	const admin = (await configResponse.json())[0]?.data?.admin;
	const recipient = admin?.backupEmail?.trim();
	const schedule = admin?.cronSchedule || "off";
	if (!recipient || schedule === "off") return new Response("Backup disabled");
	if (schedule === "weekly" && (/* @__PURE__ */ new Date()).getUTCDay() !== 1) return new Response("Weekly backup is not due");
	const tables = await Promise.all(BACKUP_TABLES.map(async (table) => {
		const response = await fetch(`${supabaseUrl}/rest/v1/${table}?select=*${table === "leads" || table === "visitor_sessions" ? "&limit=5000" : ""}`, { headers });
		return [table, response.ok ? await response.json() : []];
	}));
	const backup = JSON.stringify({
		generated_at: (/* @__PURE__ */ new Date()).toISOString(),
		tables: Object.fromEntries(tables)
	}, null);
	const emailResponse = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${resendKey}`
		},
		body: JSON.stringify({
			from: fromEmail,
			to: [recipient],
			subject: `[Backup${new URL(request.url).searchParams.get("test") === "1" ? " Test" : ""}] ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`,
			text: "Bản backup dữ liệu Supabase được đính kèm.",
			attachments: [{
				filename: `backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`,
				content: Buffer.from(backup, "utf8").toString("base64")
			}]
		})
	});
	if (!emailResponse.ok) {
		console.error("Backup email failed", await emailResponse.text());
		return new Response("Backup email failed", { status: 502 });
	}
	return new Response("Backup sent");
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-CaBgmH9y.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		if (isBackupRequest(request)) return await handleBackupRequest(request);
		const normalized = await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
		const headers = new Headers(normalized.headers);
		headers.set("Cache-Control", "no-store, max-age=0");
		headers.set("Pragma", "no-cache");
		headers.set("X-Content-Type-Options", "nosniff");
		headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
		return new Response(normalized.body, {
			status: normalized.status,
			statusText: normalized.statusText,
			headers
		});
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
