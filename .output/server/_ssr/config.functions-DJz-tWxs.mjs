import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as unknownType, i as stringType, n as objectType, r as recordType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/config.functions-DJz-tWxs.js
var saveSchema = objectType({
	url: stringType().url(),
	anonKey: stringType().min(1),
	email: stringType().email(),
	password: stringType().min(1),
	config: recordType(stringType(), unknownType())
});
function stripSecrets(config) {
	const copy = structuredClone(config);
	const admin = copy["admin"] || {};
	admin["supabaseAnonKey"] = "";
	admin["password"] = "";
	admin["backupCronToken"] = "";
	copy["admin"] = admin;
	const emailAutomation = copy["emailAutomation"] || {};
	for (const key of [
		"resendApiKey",
		"gmailClientId",
		"gmailClientSecret",
		"gmailRefreshToken"
	]) emailAutomation[key] = "";
	copy["emailAutomation"] = emailAutomation;
	const tracking = copy["tracking"] || {};
	tracking["tiktokAccessToken"] = "";
	copy["tracking"] = tracking;
	return copy;
}
var saveConfigWithSupabaseAuth_createServerFn_handler = createServerRpc({
	id: "59299230b1dcbdf2a6bf7bd85cf72e0921cd318d99fd9be43df2d046cebba28a",
	name: "saveConfigWithSupabaseAuth",
	filename: "src/services/config.functions.ts"
}, (opts) => saveConfigWithSupabaseAuth.__executeServer(opts));
var saveConfigWithSupabaseAuth = createServerFn({ method: "POST" }).validator((input) => saveSchema.parse(input)).handler(saveConfigWithSupabaseAuth_createServerFn_handler, async ({ data }) => {
	const serviceUrl = processModule.env["SUPABASE_URL"]?.replace(/\/$/, "") || data.url.replace(/\/$/, "");
	const serviceKey = processModule.env["SUPABASE_SERVICE_ROLE_KEY"];
	if (!serviceUrl || !serviceKey) return {
		ok: false,
		reason: "missing_server_supabase_env"
	};
	if (serviceUrl !== data.url.replace(/\/$/, "")) return {
		ok: false,
		reason: "url_mismatch"
	};
	const authResponse = await fetch(`${data.url.replace(/\/$/, "")}/auth/v1/token?grant_type=password`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			apikey: data.anonKey
		},
		body: JSON.stringify({
			email: data.email,
			password: data.password
		})
	});
	if (!authResponse.ok) return {
		ok: false,
		reason: "auth_failed"
	};
	const authPayload = await authResponse.json();
	if (!authPayload.access_token) return {
		ok: false,
		reason: "auth_failed"
	};
	if (!(await fetch(`${serviceUrl}/rest/v1/funnel_configs?on_conflict=id`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			apikey: serviceKey,
			Authorization: `Bearer ${serviceKey}`,
			Prefer: "resolution=merge-duplicates,return=minimal"
		},
		body: JSON.stringify([{
			id: 1,
			data: stripSecrets(data.config),
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}])
	})).ok) return {
		ok: false,
		reason: "config_write_failed"
	};
	return {
		ok: true,
		accessToken: authPayload.access_token
	};
});
//#endregion
export { saveConfigWithSupabaseAuth_createServerFn_handler };
