const ACCESS_TOKEN_KEY = "funnel_supabase_access_token_v1";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getSupabaseAccessToken(): string {
  if (!isBrowser()) return "";
  try {
    return window.sessionStorage.getItem(ACCESS_TOKEN_KEY) || "";
  } catch {
    return "";
  }
}

export function clearSupabaseAccessToken(): void {
  if (!isBrowser()) return;
  try {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  } catch {
    /* storage may be blocked */
  }
}

export async function signInWithSupabase(
  url: string,
  anonKey: string,
  email: string,
  password: string,
): Promise<boolean> {
  if (!url || !anonKey || !email || !password || !isBrowser()) return false;
  try {
    const response = await fetch(
      `${url.replace(/\/$/, "")}/auth/v1/token?grant_type=password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: anonKey,
        },
        body: JSON.stringify({ email, password }),
      },
    );
    if (!response.ok) return false;
    const payload = (await response.json()) as { access_token?: unknown };
    if (typeof payload.access_token !== "string" || !payload.access_token) {
      return false;
    }
    window.sessionStorage.setItem(ACCESS_TOKEN_KEY, payload.access_token);
    return true;
  } catch {
    return false;
  }
}
