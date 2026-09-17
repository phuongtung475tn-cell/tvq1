import { r as __toESM } from "../__23tanstack-start-server-fn-resolver-hZzAbtud.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { E as useSiteConfig } from "./use-site-config-CCuN-Fru.mjs";
import { n as useAdmin } from "./use-admin-B9NKVHad.mjs";
import { C as Lock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminLoginPage-BO8B-Rue.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Màn hình đăng nhập quản trị — dùng cho /admin và đường dẫn tuỳ chỉnh. */
function AdminLoginPage() {
	const { authed, login } = useAdmin();
	const { config, ready: configReady } = useSiteConfig();
	const [password, setPassword] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)(config.admin.supabaseAdminEmail);
	const [error, setError] = (0, import_react.useState)(false);
	const passwordInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setEmail(config.admin.supabaseAdminEmail);
	}, [config.admin.supabaseAdminEmail]);
	async function handleSubmit() {
		const nextPassword = passwordInputRef.current?.value ?? password;
		if (await login(nextPassword, config.admin.password, config.admin.supabaseUrl, config.admin.supabaseAnonKey, email)) window.location.assign("/");
		else setError(true);
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
						children: "Funnel Builder — Bảng điều khiển"
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
					children: "Vào trang & bật chế độ Admin"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					config.admin.storageMode === "database" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						value: email,
						onChange: (e) => {
							setEmail(e.target.value);
							setError(false);
						},
						placeholder: "Email Supabase Auth",
						autoComplete: "username",
						className: "w-full rounded-lg bg-neutral-800 px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-white/30"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: passwordInputRef,
						type: "password",
						onChange: (e) => {
							setPassword(e.target.value);
							setError(false);
						},
						placeholder: "Mật khẩu quản trị",
						autoFocus: true,
						onKeyDown: (event) => {
							if (event.key === "Enter") handleSubmit();
						},
						className: "w-full rounded-lg bg-neutral-800 px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-white/30"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-red-400",
						children: "Mật khẩu không đúng."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handleSubmit,
						disabled: !configReady,
						className: "w-full rounded-lg bg-white py-2.5 text-sm font-bold text-neutral-900 transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60",
						children: configReady ? "Đăng nhập" : "Đang tải cấu hình..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-[11px] text-white/40",
						children: "Đổi mật khẩu & đường dẫn trong công cụ “Đổi Link Admin”."
					})
				]
			})]
		})
	});
}
//#endregion
export { AdminLoginPage as t };
