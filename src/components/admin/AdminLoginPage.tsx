import { Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useAdmin } from "@/lib/use-admin";
import { useSiteConfig } from "@/lib/use-site-config";

/** Màn hình đăng nhập quản trị — dùng cho /admin và đường dẫn tuỳ chỉnh. */
export function AdminLoginPage() {
  const { authed, login } = useAdmin();
  const { config, ready: configReady } = useSiteConfig();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(config.admin.supabaseAdminEmail);
  const [supabaseUrl, setSupabaseUrl] = useState(config.admin.supabaseUrl);
  const [supabaseKey, setSupabaseKey] = useState(config.admin.supabaseAnonKey);
  const [error, setError] = useState("");
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEmail(config.admin.supabaseAdminEmail);
    setSupabaseUrl(config.admin.supabaseUrl);
    setSupabaseKey(config.admin.supabaseAnonKey);
  }, [
    config.admin.supabaseAdminEmail,
    config.admin.supabaseUrl,
    config.admin.supabaseAnonKey,
  ]);

  async function handleSubmit() {
    const nextPassword = passwordInputRef.current?.value ?? password;
    if (
      await login(
        nextPassword,
        config.admin.password,
        supabaseUrl,
        supabaseKey,
        email,
      )
    ) {
      window.location.assign("/");
    } else {
      setError(
        "Không xác thực được. Hãy kiểm tra user Supabase Auth; mật khẩu local duhoc2026 chỉ mở phiên bootstrap và chưa cấp quyền ghi cloud.",
      );
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 text-white">
      <div className="w-full max-w-sm rounded-2xl bg-neutral-900 p-6 ring-1 ring-white/10">
        <div className="mb-5 flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="text-lg font-bold">Đăng nhập quản trị</h1>
          <p className="mt-1 text-xs text-white/50">
            Funnel Builder — Bảng điều khiển
          </p>
        </div>

        {authed ? (
          <div className="space-y-3 text-center">
            <p className="text-sm text-emerald-400">Đã đăng nhập.</p>
            <a
              href="/"
              className="block w-full rounded-lg bg-white py-2.5 text-sm font-bold text-neutral-900"
            >
              Vào trang &amp; bật chế độ Admin
            </a>
          </div>
        ) : (
          <div className="space-y-3">
            {config.admin.storageMode === "database" && (
              <>
                <input
                  type="url"
                  value={supabaseUrl}
                  onChange={(e) => setSupabaseUrl(e.target.value)}
                  placeholder="https://your-project.supabase.co"
                  autoComplete="url"
                  className="w-full rounded-lg bg-neutral-800 px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-white/30"
                />
                <input
                  type="password"
                  value={supabaseKey}
                  onChange={(e) => setSupabaseKey(e.target.value)}
                  placeholder="Supabase publishable/anon key"
                  autoComplete="off"
                  className="w-full rounded-lg bg-neutral-800 px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-white/30"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Email Supabase Auth"
                  autoComplete="username"
                  className="w-full rounded-lg bg-neutral-800 px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-white/30"
                />
              </>
            )}
            <input
              ref={passwordInputRef}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Mật khẩu quản trị"
              autoFocus
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSubmit();
              }}
              className="w-full rounded-lg bg-neutral-800 px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-white/30"
            />
            {error && <p className="text-xs text-red-400">{error}</p>}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!configReady}
              className="w-full rounded-lg bg-white py-2.5 text-sm font-bold text-neutral-900 transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
            >
              {configReady ? "Đăng nhập" : "Đang tải cấu hình..."}
            </button>
            <p className="text-center text-[11px] text-white/40">
              Đổi mật khẩu &amp; đường dẫn trong công cụ “Đổi Link Admin”.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
