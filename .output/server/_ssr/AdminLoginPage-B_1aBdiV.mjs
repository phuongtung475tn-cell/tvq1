import { r as __toESM } from "../__23tanstack-start-server-fn-resolver-Cdal7T4f.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { D as useSiteConfig } from "./use-site-config-BTNvPCtv.mjs";
import { n as useAdmin } from "./use-admin-52-_iFoV.mjs";
import { C as Lock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminLoginPage-B_1aBdiV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLoginPage() {
	const { authed, login } = useAdmin();
	const { config, ready: configReady } = useSiteConfig();
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const passwordInputRef = (0, import_react.useRef)(null);
	const env = {
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
	};
	const supabaseUrl = env["VITE_SUPABASE_URL"]?.trim() || config.admin.supabaseUrl;
	const supabaseKey = env["VITE_SUPABASE_ANON_KEY"]?.trim() || config.admin.supabaseAnonKey;
	const email = env["VITE_SUPABASE_ADMIN_EMAIL"]?.trim() || config.admin.supabaseAdminEmail;
	(0, import_react.useEffect)(() => setError(""), [configReady]);
	async function handleSubmit() {
		if (await login(passwordInputRef.current?.value ?? password, "", supabaseUrl, supabaseKey, email)) window.location.assign("/");
		else setError("Đăng nhập thất bại. Kiểm tra Supabase Auth và quyền trong admin_users.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center bg-neutral-950 px-4 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-2xl bg-neutral-900 p-6 ring-1 ring-white/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-lg font-bold",
						children: "Đăng nhập quản trị"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-white/50",
						children: "Funnel Builder — Supabase Auth"
					})
				]
			}), authed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-emerald-400",
					children: "Đã đăng nhập."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "block w-full rounded-lg bg-white py-2.5 text-sm font-bold text-neutral-900",
					children: "Vào trang quản trị"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: passwordInputRef,
						type: "password",
						value: password,
						onChange: (event) => {
							setPassword(event.target.value);
							setError("");
						},
						placeholder: "Mật khẩu Supabase Auth",
						autoComplete: "current-password",
						autoFocus: true,
						onKeyDown: (event) => {
							if (event.key === "Enter") handleSubmit();
						},
						className: "w-full rounded-lg bg-neutral-800 px-3 py-2.5 text-sm outline-none ring-1 ring-white/10"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-red-400",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void handleSubmit(),
						disabled: !configReady || !email || !supabaseUrl || !supabaseKey,
						className: "w-full rounded-lg bg-white py-2.5 text-sm font-bold text-neutral-900 disabled:opacity-60",
						children: configReady ? "Đăng nhập" : "Đang tải cấu hình..."
					})
				]
			})]
		})
	});
}
//#endregion
export { AdminLoginPage as t };
