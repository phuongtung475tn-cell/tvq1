//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-SwdlihR5.js
var manifest = {
	"59299230b1dcbdf2a6bf7bd85cf72e0921cd318d99fd9be43df2d046cebba28a": {
		functionName: "saveConfigWithSupabaseAuth_createServerFn_handler",
		importer: () => import("./_ssr/config.functions-DJz-tWxs.mjs")
	},
	"5dd11d22fa873a9491cd5c93fc3d45224e628a4cc8d4b35c4fa8cccd1e4b748c": {
		functionName: "checkEmailConfig_createServerFn_handler",
		importer: () => import("./_ssr/email.functions-srT-jqbE.mjs")
	},
	"95e6712f6ffd450a883eaa218493fa3addd9c46fc4e357a506533ee0a8508e68": {
		functionName: "relayWebhook_createServerFn_handler",
		importer: () => import("./_ssr/webhook.functions-BC7BBL84.mjs")
	},
	"cb38c81a85e3a70622346fb76fc7e69378a0178a9259e78f65da0c163f1f406e": {
		functionName: "sendLeadEmail_createServerFn_handler",
		importer: () => import("./_ssr/email.functions-srT-jqbE.mjs")
	},
	"d732dbd0324b5de3cd27374b91a2d4196cd6a42ec4166af82f02cfbf6319a58a": {
		functionName: "sendTestEmail_createServerFn_handler",
		importer: () => import("./_ssr/email.functions-srT-jqbE.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { __commonJSMin as n, __toESM as r, getServerFnById as t };
