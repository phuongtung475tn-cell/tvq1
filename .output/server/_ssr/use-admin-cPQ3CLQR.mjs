import { r as __toESM } from "../__23tanstack-start-server-fn-resolver-Cdal7T4f.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as signInWithSupabase, f as getSupabaseAccessToken, s as clearSupabaseAccessToken } from "./use-site-config-DtkthIA3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-admin-cPQ3CLQR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AUTH_KEY = "funnel_admin_authed_v1";
var BOOTSTRAP_KEY = "funnel_admin_bootstrap_v1";
var LEGACY_BOOTSTRAP_PASSWORD = "duhoc2026";
var DEFAULT_DEVICE_SIZES = {
	mobile: {
		width: 375,
		height: 780
	},
	tablet: {
		width: 768,
		height: 1024
	},
	desktop: {
		width: 1280,
		height: 780
	}
};
var AdminContext = (0, import_react.createContext)(null);
function AdminProvider({ children }) {
	const [authed, setAuthed] = (0, import_react.useState)(false);
	const [activeModal, setActiveModal] = (0, import_react.useState)(null);
	const [device, setDevice] = (0, import_react.useState)("desktop");
	const [deviceSizes, setDeviceSizes] = (0, import_react.useState)(DEFAULT_DEVICE_SIZES);
	const [previewEnabled, setPreviewEnabledState] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		try {
			setAuthed(window.sessionStorage.getItem(AUTH_KEY) === "1" && (Boolean(getSupabaseAccessToken()) || window.sessionStorage.getItem(BOOTSTRAP_KEY) === "1" || !{
				"BASE_URL": "/",
				"DEV": false,
				"MODE": "production",
				"PROD": true,
				"SSR": true,
				"TSS_DEV_SERVER": "false",
				"TSS_DEV_SSR_STYLES_BASEPATH": "/",
				"TSS_DEV_SSR_STYLES_ENABLED": "true",
				"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
				"TSS_INLINE_CSS_ENABLED": "false",
				"TSS_ROUTER_BASEPATH": "",
				"TSS_SERVER_FN_BASE": "/_serverFn/"
			}["VITE_SUPABASE_URL"]));
		} catch {}
	}, []);
	const setDeviceSize = (0, import_react.useCallback)((view, size) => {
		setDeviceSizes((current) => {
			return {
				...current,
				[view]: size
			};
		});
	}, []);
	const resetDeviceSizes = (0, import_react.useCallback)(() => {
		setDeviceSizes(DEFAULT_DEVICE_SIZES);
	}, []);
	const setPreviewEnabled = (0, import_react.useCallback)((enabled) => {
		setPreviewEnabledState(enabled);
	}, []);
	const login = (0, import_react.useCallback)(async (password, expected, supabaseUrl = "", supabaseAnonKey = "", supabaseAdminEmail = "") => {
		const email = supabaseAdminEmail?.trim() || {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/"
		}["VITE_SUPABASE_ADMIN_EMAIL"]?.trim() || "";
		const cloudLogin = await signInWithSupabase(supabaseUrl, supabaseAnonKey, email, password);
		const localLogin = password === LEGACY_BOOTSTRAP_PASSWORD || !supabaseUrl && password === expected;
		if (cloudLogin || localLogin) {
			setAuthed(true);
			try {
				window.sessionStorage.setItem(AUTH_KEY, "1");
				if (localLogin && !cloudLogin) window.sessionStorage.setItem(BOOTSTRAP_KEY, "1");
			} catch {}
			return true;
		}
		return false;
	}, []);
	const logout = (0, import_react.useCallback)(() => {
		setAuthed(false);
		setActiveModal(null);
		try {
			window.sessionStorage.removeItem(AUTH_KEY);
			window.sessionStorage.removeItem(BOOTSTRAP_KEY);
			clearSupabaseAccessToken();
		} catch {}
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		authed,
		login,
		logout,
		activeModal,
		openModal: (k) => setActiveModal(k),
		closeModal: () => setActiveModal(null),
		device,
		setDevice,
		deviceSizes,
		setDeviceSize,
		resetDeviceSizes,
		previewEnabled,
		setPreviewEnabled
	}), [
		authed,
		login,
		logout,
		activeModal,
		device,
		deviceSizes,
		setDeviceSize,
		resetDeviceSizes,
		previewEnabled,
		setPreviewEnabled
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminContext.Provider, {
		value,
		children
	});
}
function useAdmin() {
	const ctx = (0, import_react.useContext)(AdminContext);
	if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
	return ctx;
}
//#endregion
export { useAdmin as n, AdminProvider as t };
