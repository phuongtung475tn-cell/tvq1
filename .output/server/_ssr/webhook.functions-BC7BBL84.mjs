import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as unknownType, i as stringType, n as objectType, r as recordType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/webhook.functions-BC7BBL84.js
var relaySchema = objectType({
	endpoint: stringType().url(),
	body: unknownType(),
	headers: recordType(stringType(), stringType()).optional()
});
function isAllowedEndpoint(value) {
	try {
		const url = new URL(value);
		return url.protocol === "https:" || url.hostname === "localhost";
	} catch {
		return false;
	}
}
var relayWebhook_createServerFn_handler = createServerRpc({
	id: "95e6712f6ffd450a883eaa218493fa3addd9c46fc4e357a506533ee0a8508e68",
	name: "relayWebhook",
	filename: "src/services/webhook.functions.ts"
}, (opts) => relayWebhook.__executeServer(opts));
var relayWebhook = createServerFn({ method: "POST" }).validator((data) => relaySchema.parse(data)).handler(relayWebhook_createServerFn_handler, async ({ data }) => {
	if (!isAllowedEndpoint(data.endpoint)) return {
		ok: false,
		status: 400,
		detail: "invalid_endpoint"
	};
	try {
		const response = await fetch(data.endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...data.headers
			},
			body: JSON.stringify(data.body)
		});
		return {
			ok: response.ok,
			status: response.status,
			detail: response.ok ? void 0 : (await response.text()).trim().slice(0, 180)
		};
	} catch (error) {
		return {
			ok: false,
			status: 502,
			detail: error instanceof Error ? error.message : "relay_failed"
		};
	}
});
//#endregion
export { relayWebhook_createServerFn_handler };
