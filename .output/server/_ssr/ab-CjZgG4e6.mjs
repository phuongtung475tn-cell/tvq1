import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as objectType, t as enumType } from "../_libs/zod.mjs";
import { _ as relayWebhook, s as createSsrRpc } from "./use-site-config-DOhv-5qs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ab-CjZgG4e6.js
/**
* AUTOMATED EMAIL SEQUENCER (auto-responder).
* Gửi email cảm ơn ngay sau khi khách đăng ký. Chạy phía server.
* API key lấy từ payload (Admin nhập trong UI) hoặc env var nếu có.
*/
var schema = objectType({
	provider: enumType(["resend", "gmail"]).default("resend"),
	to: stringType().email(),
	from: stringType().email(),
	subject: stringType().min(1),
	text: stringType().min(1),
	html: stringType().optional(),
	resendApiKey: stringType().optional(),
	gmailClientId: stringType().optional(),
	gmailClientSecret: stringType().optional(),
	gmailRefreshToken: stringType().optional()
});
var checkEmailConfig = createServerFn({ method: "GET" }).handler(createSsrRpc("5dd11d22fa873a9491cd5c93fc3d45224e628a4cc8d4b35c4fa8cccd1e4b748c"));
var sendLeadEmail = createServerFn({ method: "POST" }).validator((data) => schema.parse(data)).handler(createSsrRpc("cb38c81a85e3a70622346fb76fc7e69378a0178a9259e78f65da0c163f1f406e"));
var sendTestEmail = createServerFn({ method: "POST" }).validator((data) => schema.parse(data)).handler(createSsrRpc("d732dbd0324b5de3cd27374b91a2d4196cd6a42ec4166af82f02cfbf6319a58a"));
var FIRST_TOUCH_KEY = "lp_utm_first_v4";
var LAST_TOUCH_KEY = "lp_utm_last_v4";
/** Khoá cũ — vẫn đọc để không mất dữ liệu khách đã ghé trước đây */
var LEGACY_KEYS = ["lp_utm_first_v3", "lp_utm_v2"];
var UNKNOWN_SOURCE = "unknown_inapp_or_referral";
var UTM_KEYS = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term"
];
/**
* Smart fallback: mẫu nhận diện theo TÊN tham số (và cả giá trị).
* Xếp theo thứ tự ưu tiên từ trên xuống.
*/
var PARAM_PATTERNS = [
	{
		test: /^(gclid|gbraid|wbraid|gad|gclsrc|s_kwcid)/i,
		source: "google",
		medium: "cpc"
	},
	{
		test: /^dclid/i,
		source: "google",
		medium: "display"
	},
	{
		test: /^msclkid/i,
		source: "bing",
		medium: "cpc"
	},
	{
		test: /^(fbclid|fb_|fbadid|fb$)/i,
		source: "facebook",
		medium: "social"
	},
	{
		test: /^(ttclid|tt_|ttadid|tiktok)/i,
		source: "tiktok",
		medium: "social"
	},
	{
		test: /^(zar|zalo|zl_|zns)/i,
		source: "zalo",
		medium: "social"
	},
	{
		test: /^(igshid|ig_|instagram)/i,
		source: "instagram",
		medium: "social"
	},
	{
		test: /^(twclid|tw_|twitter)/i,
		source: "twitter",
		medium: "social"
	},
	{
		test: /^(li_fat_id|li_|linkedin)/i,
		source: "linkedin",
		medium: "social"
	},
	{
		test: /^(epik|pin_|pinterest)/i,
		source: "pinterest",
		medium: "social"
	},
	{
		test: /^(sccid|scid|snap)/i,
		source: "snapchat",
		medium: "social"
	},
	{
		test: /^(shopee|sp_atk)/i,
		source: "shopee",
		medium: "referral"
	},
	{
		test: /^(yt_|youtube)/i,
		source: "youtube",
		medium: "social"
	},
	{
		test: /^(tg_|telegram)/i,
		source: "telegram",
		medium: "social"
	}
];
/** Từ khoá nhận diện trong GIÁ TRỊ tham số (ví dụ ?ref=zalo, ?src=fb) */
var VALUE_PATTERNS = [
	[/zalo|zns/i, {
		source: "zalo",
		medium: "social"
	}],
	[/facebook|fb\b|messenger/i, {
		source: "facebook",
		medium: "social"
	}],
	[/tiktok|douyin/i, {
		source: "tiktok",
		medium: "social"
	}],
	[/instagram|\big\b/i, {
		source: "instagram",
		medium: "social"
	}],
	[/google/i, {
		source: "google",
		medium: "cpc"
	}],
	[/youtube/i, {
		source: "youtube",
		medium: "social"
	}],
	[/shopee/i, {
		source: "shopee",
		medium: "referral"
	}],
	[/telegram/i, {
		source: "telegram",
		medium: "social"
	}]
];
var REFERRER_MAP = [
	[/facebook\.com|fb\.me|fbcdn|m\.facebook|mbasic\.facebook/i, "facebook"],
	[/messenger\.com|fb\.com\/messages/i, "messenger"],
	[/tiktok\.com|t\.tiktok|bytedance/i, "tiktok"],
	[/zalo\.me|zaloapp|zalo\.com/i, "zalo"],
	[/google\./i, "google"],
	[/bing\.com/i, "bing"],
	[/coccoc\.com/i, "coccoc"],
	[/instagram\.com|instagr\.am/i, "instagram"],
	[/t\.co|twitter\.com|x\.com/i, "twitter"],
	[/t\.me|telegram\.org|telegram/i, "telegram"],
	[/youtube\.com|youtu\.be/i, "youtube"],
	[/linkedin\.com|lnkd\.in/i, "linkedin"],
	[/pinterest\.com|pin\.it/i, "pinterest"],
	[/reddit\.com/i, "reddit"],
	[/snapchat\.com/i, "snapchat"],
	[/shopee\./i, "shopee"],
	[/lazada\./i, "lazada"],
	[/wechat|weixin/i, "wechat"],
	[/whatsapp\.com/i, "whatsapp"],
	[/viber/i, "viber"],
	[/yahoo\.|duckduckgo\.com/i, "search"]
];
/** In-app browser (webview) -> nguồn */
var IN_APP_UA_MAP = [
	[/FBAN|FBAV|FB_IAB|FBIOS|FBDV|Facebook/i, "facebook"],
	[/Messenger|MessengerLite/i, "messenger"],
	[/Zalo|ZaloTheme/i, "zalo"],
	[/TikTok|BytedanceWebview|musical_ly|Trill/i, "tiktok"],
	[/Instagram/i, "instagram"],
	[/Shopee/i, "shopee"],
	[/Line\//i, "line"],
	[/MicroMessenger/i, "wechat"],
	[/Telegram/i, "telegram"],
	[/Viber/i, "viber"],
	[/Twitter|TwitterAndroid/i, "twitter"],
	[/LinkedInApp/i, "linkedin"],
	[/Snapchat/i, "snapchat"],
	[/Pinterest/i, "pinterest"]
];
var EMPTY_RECORD = {
	utm_source: "",
	utm_medium: "",
	utm_campaign: "",
	utm_content: "",
	utm_term: "",
	params: {},
	click_ids: {},
	raw_query: "",
	landing_url: "",
	referrer: "",
	user_agent: "",
	detected_by: "",
	captured_at: ""
};
var PLACEHOLDER_VALUES = /* @__PURE__ */ new Set([
	"",
	"direct",
	"none",
	"null",
	"undefined",
	"(direct)",
	"(none)",
	"unknown"
]);
/** Tham số điều hướng nội bộ — không coi là tín hiệu nguồn */
var IGNORED_PARAMS = /^(page|p|q|search|tab|id|sort|filter|lang|locale|_rsc)$/i;
function isBrowser() {
	return typeof window !== "undefined";
}
function isMeaningful(value) {
	return typeof value === "string" && !PLACEHOLDER_VALUES.has(value.trim().toLowerCase());
}
function clean(value) {
	if (typeof value !== "string") return "";
	const trimmed = value.trim().slice(0, 500);
	return isMeaningful(trimmed) ? trimmed : "";
}
function getStore(kind) {
	return kind === "local" ? window.localStorage : window.sessionStorage;
}
function safeRead(kind, key) {
	if (!isBrowser()) return null;
	try {
		const raw = getStore(kind).getItem(key);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object") return null;
		return {
			...EMPTY_RECORD,
			...parsed,
			params: parsed.params || {},
			click_ids: parsed.click_ids || {}
		};
	} catch {
		return null;
	}
}
function safeWrite(kind, key, value) {
	if (!isBrowser()) return;
	try {
		getStore(kind).setItem(key, JSON.stringify(value));
	} catch {}
}
function detectReferrerSource(referrer) {
	if (!referrer) return "";
	try {
		for (const [regex, name] of REFERRER_MAP) if (regex.test(referrer)) return name;
		const host = new URL(referrer).hostname.replace(/^www\./, "");
		if (!host) return "referral";
		if (isBrowser() && host === window.location.hostname) return "";
		return host;
	} catch {
		return "referral";
	}
}
function detectInAppSource(userAgent) {
	const ua = userAgent ?? (isBrowser() ? navigator.userAgent : "");
	if (!ua) return "";
	try {
		for (const [regex, name] of IN_APP_UA_MAP) if (regex.test(ua)) return name;
	} catch {}
	return "";
}
/**
* CATCH-ALL COLLECTOR — duyệt mọi tham số trên URL, không bỏ sót cái nào.
* Trả về object { tên_tham_số: giá_trị } + chuỗi query thô.
*/
function collectAllQueryParams() {
	const params = {};
	let rawQuery = "";
	if (!isBrowser()) return {
		params,
		rawQuery
	};
	try {
		const search = window.location.search || "";
		const hash = window.location.hash || "";
		const hashQuery = hash.includes("?") ? hash.slice(hash.indexOf("?")) : "";
		rawQuery = [search.replace(/^\?/, ""), hashQuery.replace(/^\?/, "")].filter(Boolean).join("&").slice(0, 2e3);
		const absorb = (qs) => {
			try {
				new URLSearchParams(qs).forEach((value, key) => {
					const name = String(key).trim().slice(0, 100);
					if (!name) return;
					if (name in params) return;
					params[name] = String(value ?? "").trim().slice(0, 500);
				});
			} catch {
				for (const pair of qs.split("&")) {
					if (!pair) continue;
					const idx = pair.indexOf("=");
					const key = (idx >= 0 ? pair.slice(0, idx) : pair).slice(0, 100);
					const value = idx >= 0 ? pair.slice(idx + 1).slice(0, 500) : "";
					if (key && !(key in params)) try {
						params[decodeURIComponent(key)] = decodeURIComponent(value);
					} catch {
						params[key] = value;
					}
				}
			}
		};
		absorb(search.replace(/^\?/, ""));
		absorb(hashQuery.replace(/^\?/, ""));
	} catch {}
	return {
		params,
		rawQuery
	};
}
/** Bóc tách toàn bộ tín hiệu attribution trên URL hiện tại */
function parseCurrentUrl() {
	if (!isBrowser()) return {
		...EMPTY_RECORD,
		params: {},
		click_ids: {}
	};
	const record = {
		...EMPTY_RECORD,
		params: {},
		click_ids: {},
		captured_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	try {
		const { params, rawQuery } = collectAllQueryParams();
		record.params = params;
		record.raw_query = rawQuery;
		record.referrer = document.referrer || "";
		record.user_agent = navigator.userAgent || "";
		record.landing_url = (window.location.href || "").split("#")[0] ?? "";
		const lowerMap = {};
		for (const [key, value] of Object.entries(params)) {
			lowerMap[key.toLowerCase()] = value;
			if (!/^utm_/i.test(key) && !IGNORED_PARAMS.test(key) && value !== void 0) record.click_ids[key] = value;
		}
		for (const key of UTM_KEYS) record[key] = clean(lowerMap[key]);
		if (record.utm_source) record.detected_by = "url";
		if (!record.utm_source) for (const [key] of Object.entries(record.click_ids)) {
			const hit = PARAM_PATTERNS.find((p) => p.test.test(key));
			if (hit) {
				record.utm_source = hit.source;
				record.utm_medium = record.utm_medium || hit.medium;
				record.detected_by = `param:${key}`;
				break;
			}
		}
		if (!record.utm_source) for (const [key, value] of Object.entries(record.click_ids)) {
			if (!value) continue;
			const hit = VALUE_PATTERNS.find(([regex]) => regex.test(value));
			if (hit) {
				record.utm_source = hit[1].source;
				record.utm_medium = record.utm_medium || hit[1].medium;
				record.detected_by = `param:${key}`;
				break;
			}
		}
		if (!record.utm_source) {
			const fromReferrer = detectReferrerSource(record.referrer);
			if (fromReferrer) {
				record.utm_source = fromReferrer;
				record.utm_medium = record.utm_medium || "referral";
				record.detected_by = "referrer";
			}
		}
		if (!record.utm_source) {
			const inApp = detectInAppSource(record.user_agent);
			if (inApp) {
				record.utm_source = inApp;
				record.utm_medium = record.utm_medium || "social";
				record.detected_by = "in_app";
			}
		}
		if (!record.utm_source && Object.keys(record.click_ids).length > 0) {
			record.utm_source = UNKNOWN_SOURCE;
			record.utm_medium = record.utm_medium || "unknown";
			record.detected_by = "unknown";
		}
	} catch {}
	return record;
}
/** Trộn bản ghi mới vào bản ghi cũ — chỉ ghi đè bằng giá trị CÓ nghĩa */
function merge(base, next) {
	const prev = base ?? {
		...EMPTY_RECORD,
		params: {},
		click_ids: {}
	};
	const out = {
		...prev,
		params: {
			...prev.params,
			...next.params
		},
		click_ids: {
			...prev.click_ids,
			...next.click_ids
		}
	};
	for (const key of UTM_KEYS) if (next[key]) out[key] = next[key];
	if (next.raw_query) out.raw_query = next.raw_query;
	if (next.landing_url && !prev.landing_url) out.landing_url = next.landing_url;
	if (next.referrer && !prev.referrer) out.referrer = next.referrer;
	if (next.user_agent) out.user_agent = next.user_agent;
	if (next.utm_source && next.detected_by) out.detected_by = next.detected_by;
	out.captured_at = next.captured_at || prev.captured_at;
	return out;
}
/** Đọc dữ liệu từ các phiên bản lưu trữ cũ để không mất nguồn */
function readLegacy() {
	if (!isBrowser()) return null;
	for (const key of LEGACY_KEYS) try {
		const raw = window.localStorage.getItem(key);
		if (!raw) continue;
		const parsed = JSON.parse(raw);
		const record = {
			...EMPTY_RECORD,
			params: {},
			click_ids: parsed["click_ids"] || {}
		};
		for (const k of UTM_KEYS) record[k] = clean(parsed[k]);
		if (record.utm_source || record.utm_campaign) {
			record.detected_by = "stored";
			return record;
		}
	} catch {}
	return null;
}
var cached = null;
function hasSignal(record) {
	return Boolean(record.utm_source || record.utm_campaign || Object.keys(record.click_ids).length > 0);
}
/**
* Đọc URL, thu gom, lưu first-touch (localStorage) + last-touch (sessionStorage).
* Gọi bao nhiêu lần cũng an toàn.
*/
function captureUtm(force = false) {
	const blank = () => ({
		first: {
			...EMPTY_RECORD,
			params: {},
			click_ids: {}
		},
		last: {
			...EMPTY_RECORD,
			params: {},
			click_ids: {}
		}
	});
	if (!isBrowser()) return blank();
	if (cached && !force) return cached;
	try {
		const current = parseCurrentUrl();
		const storedFirst = safeRead("local", FIRST_TOUCH_KEY) ?? readLegacy();
		const storedLast = safeRead("session", LAST_TOUCH_KEY);
		const first = storedFirst ? merge(storedFirst, {
			...current,
			utm_source: storedFirst.utm_source ? "" : current.utm_source,
			utm_medium: storedFirst.utm_medium ? "" : current.utm_medium,
			utm_campaign: storedFirst.utm_campaign ? "" : current.utm_campaign,
			utm_content: storedFirst.utm_content ? "" : current.utm_content,
			utm_term: storedFirst.utm_term ? "" : current.utm_term
		}) : current;
		const last = Object.keys(current.click_ids).length > 0 || !!current.raw_query ? merge(storedLast, current) : storedLast && storedLast.utm_source ? storedLast : merge(storedLast, current);
		if (hasSignal(first)) safeWrite("local", FIRST_TOUCH_KEY, first);
		safeWrite("session", LAST_TOUCH_KEY, last);
		cached = {
			first,
			last
		};
		return cached;
	} catch {
		const fallback = blank();
		cached = fallback;
		return fallback;
	}
}
/** Dữ liệu UTM đã chuẩn hoá (mặc định: last-touch) */
function getUtm(model = "last") {
	const { first, last } = captureUtm();
	const primary = model === "first" ? first : last;
	const backup = model === "first" ? last : first;
	return {
		...primary,
		utm_source: primary.utm_source || backup.utm_source,
		utm_medium: primary.utm_medium || backup.utm_medium,
		utm_campaign: primary.utm_campaign || backup.utm_campaign,
		utm_content: primary.utm_content || backup.utm_content,
		utm_term: primary.utm_term || backup.utm_term,
		params: {
			...backup.params,
			...primary.params
		},
		click_ids: {
			...backup.click_ids,
			...primary.click_ids
		},
		raw_query: primary.raw_query || backup.raw_query,
		landing_url: primary.landing_url || backup.landing_url,
		referrer: primary.referrer || backup.referrer,
		user_agent: primary.user_agent || backup.user_agent,
		detected_by: primary.detected_by || backup.detected_by || "direct"
	};
}
/** Nguồn gọn: luôn trả về chuỗi dùng được */
function getUtmSource(model = "last") {
	return getUtm(model).utm_source || "direct";
}
/**
* Payload phẳng, sạch để đính vào form / webhook.
* Bao gồm TẤT CẢ tham số thu gom được (tên gốc giữ nguyên) + raw query.
*/
function getUtmPayload(model = "last") {
	const utm = getUtm(model);
	const payload = {};
	for (const [key, value] of Object.entries(utm.click_ids)) if (typeof value === "string") payload[key] = value;
	payload["utm_source"] = utm.utm_source || "direct";
	payload["utm_medium"] = utm.utm_medium;
	payload["utm_campaign"] = utm.utm_campaign;
	payload["utm_content"] = utm.utm_content;
	payload["utm_term"] = utm.utm_term;
	payload["raw_query"] = utm.raw_query;
	payload["landing_url"] = utm.landing_url;
	payload["referrer"] = utm.referrer;
	payload["attribution_model"] = model;
	payload["attribution_detected_by"] = utm.detected_by;
	payload["fbclid"] = payload["fbclid"] || "";
	payload["ttclid"] = payload["ttclid"] || "";
	payload["gclid"] = payload["gclid"] || "";
	return payload;
}
function pushDataLayer(event) {
	if (typeof window === "undefined") return;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(event);
}
/** Khách bắt đầu tương tác với ô input đầu tiên */
function trackFormStart(enabled = true) {
	if (!enabled) return;
	pushDataLayer({ event: "form_start" });
}
function trackInteraction(eventName, payload = {}) {
	if (typeof window === "undefined") return;
	pushDataLayer({
		event: eventName,
		...payload
	});
	try {
		window.fbq?.("trackCustom", eventName, payload);
	} catch (e) {
		console.warn(`fbq ${eventName} failed`, e);
	}
	try {
		window.ttq?.track("ClickButton", {
			event_name: eventName,
			...payload
		});
	} catch (e) {
		console.warn(`ttq ${eventName} failed`, e);
	}
	try {
		window.gtag?.("event", eventName, payload);
	} catch (e) {
		console.warn(`gtag ${eventName} failed`, e);
	}
}
/**
* Chỉ gọi SAU khi dữ liệu đã gửi thành công.
* `adsId` lấy trực tiếp từ config.tracking.ga4Id (một nguồn ID duy nhất);
* chỉ bắn conversion Google Ads khi ID có dạng AW-xxx.
*/
function trackLead(payload, events, adsId) {
	if (typeof window === "undefined") return;
	if (events?.lead === false) return;
	pushDataLayer({
		event: "lead_conversion",
		nganh_hoc: payload?.["content_name"] ?? ""
	});
	try {
		window.fbq?.("track", "Lead", payload);
	} catch (e) {
		console.warn("fbq lead failed", e);
	}
	try {
		if (events?.completeRegistration !== false) window.ttq?.track("CompleteRegistration", payload);
		window.ttq?.track("SubmitForm", payload);
	} catch (e) {
		console.warn("ttq event failed", e);
	}
	const sendTo = adsId?.trim();
	if (sendTo?.startsWith("AW-")) try {
		window.gtag?.("event", "conversion", { send_to: sendTo });
	} catch (e) {
		console.warn("gtag conversion failed", e);
	}
}
/**
* Bắn một sự kiện thử tới tất cả kênh tracking đang hoạt động
* và trả về nhật ký trạng thái để hiển thị trong Admin.
*/
function fireTestEvent() {
	const logs = [];
	if (typeof window === "undefined") return logs;
	const payload = {
		test: true,
		content_name: "admin_test_event",
		value: 0,
		currency: "VND"
	};
	if (typeof window.fbq === "function") try {
		window.fbq("trackCustom", "LovableTestEvent", payload);
		logs.push({
			channel: "Meta Pixel",
			ok: true,
			detail: "Đã gửi LovableTestEvent"
		});
	} catch (e) {
		logs.push({
			channel: "Meta Pixel",
			ok: false,
			detail: String(e)
		});
	}
	else logs.push({
		channel: "Meta Pixel",
		ok: false,
		detail: "Chưa nạp (thiếu Pixel ID?)"
	});
	if (window.ttq && typeof window.ttq.track === "function") try {
		window.ttq.track("ClickButton", payload);
		logs.push({
			channel: "TikTok Pixel",
			ok: true,
			detail: "Đã gửi ClickButton"
		});
	} catch (e) {
		logs.push({
			channel: "TikTok Pixel",
			ok: false,
			detail: String(e)
		});
	}
	else logs.push({
		channel: "TikTok Pixel",
		ok: false,
		detail: "Chưa nạp (thiếu Pixel ID?)"
	});
	if (typeof window.gtag === "function") try {
		window.gtag("event", "lovable_test_event", payload);
		logs.push({
			channel: "Google Analytics 4",
			ok: true,
			detail: "Đã gửi lovable_test_event"
		});
	} catch (e) {
		logs.push({
			channel: "Google Analytics 4",
			ok: false,
			detail: String(e)
		});
	}
	else logs.push({
		channel: "Google Analytics 4",
		ok: false,
		detail: "Chưa nạp (thiếu GA4 ID?)"
	});
	if (Array.isArray(window.dataLayer)) {
		pushDataLayer({
			event: "lovable_test_event",
			...payload
		});
		logs.push({
			channel: "GTM dataLayer",
			ok: true,
			detail: `${window.dataLayer.length} sự kiện trong hàng đợi`
		});
	} else logs.push({
		channel: "GTM dataLayer",
		ok: false,
		detail: "Chưa có dataLayer"
	});
	const scripts = [
		"fb-pixel",
		"tiktok-pixel",
		"ga4-init",
		"gtm-init",
		"custom-head",
		"custom-body",
		"custom-footer"
	].filter((id) => document.getElementById(id));
	logs.push({
		channel: "Mã đã chèn vào trang",
		ok: scripts.length > 0,
		detail: scripts.length ? scripts.join(", ") : "Chưa có mã nào được chèn"
	});
	return logs;
}
var TIMEOUT_MS = 4e3;
var RETRIES = 1;
var MAX_PAYLOAD_BYTES = 6e4;
function validUrl(value) {
	try {
		const url = new URL(value);
		return url.protocol === "https:" || url.hostname === "localhost";
	} catch {
		return false;
	}
}
function compactPayload(payload) {
	const serialized = JSON.stringify(payload);
	if (new TextEncoder().encode(serialized).byteLength <= MAX_PAYLOAD_BYTES) return payload;
	const compact = { ...payload };
	delete compact.visitor_behavior_payload;
	return compact;
}
function webhookConfigurationWarning(endpoint, config) {
	const value = endpoint.url.trim();
	if (!value) return "Chưa nhập URL endpoint";
	if (!validUrl(value)) return "URL phải dùng HTTPS (localhost có thể dùng HTTP)";
	if (endpoint.type === "telegram" && !value.includes("/bot")) return "URL Telegram cần có dạng /bot<TOKEN>/sendMessage?chat_id=...";
	if (endpoint.type === "telegram" && !new URL(value).searchParams.get("chat_id")) return "URL Telegram đang thiếu chat_id";
	if (endpoint.type === "supabase" && (!config.admin.supabaseUrl || !config.admin.supabaseAnonKey)) return "Cần cấu hình Supabase URL và anon key trong Storage trước";
}
async function requestWithRetry(endpoint, init) {
	let detail = "Không thể kết nối";
	for (let attempt = 1; attempt <= 2; attempt += 1) {
		const controller = new AbortController();
		const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS);
		try {
			const response = await fetch(endpoint, {
				...init,
				signal: controller.signal
			});
			window.clearTimeout(timer);
			if (response.ok || response.status < 500) {
				if (!response.ok) detail = (await response.text().catch(() => "")).trim().slice(0, 180) || `HTTP ${response.status}`;
				return {
					response,
					attempts: attempt,
					detail
				};
			}
			detail = `HTTP ${response.status}`;
		} catch (error) {
			window.clearTimeout(timer);
			detail = error instanceof DOMException && error.name === "AbortError" ? "Timeout" : error.message;
		}
		if (attempt <= RETRIES) await new Promise((resolve) => window.setTimeout(resolve, attempt * 300));
	}
	return {
		attempts: 2,
		detail
	};
}
function telegramBody(url, payload) {
	const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
	const text = Object.entries(payload).map(([k, v]) => `${escapeHtml(k)}: ${escapeHtml(String(v ?? ""))}`).join("\n");
	const u = new URL(url);
	const chatId = u.searchParams.get("chat_id") || "";
	u.searchParams.delete("chat_id");
	return {
		endpoint: u.toString(),
		body: {
			chat_id: chatId,
			text,
			parse_mode: "HTML"
		}
	};
}
async function postOne(ep, payload, supabase) {
	try {
		let endpoint = ep.url;
		let body = payload;
		let headers = { "Content-Type": "application/json" };
		if (ep.type === "telegram") {
			const t = telegramBody(ep.url, payload);
			endpoint = t.endpoint;
			body = t.body;
		} else if (ep.type === "supabase" && supabase.url && supabase.key) {
			endpoint = `${supabase.url.replace(/\/$/, "")}/rest/v1/${ep.url.replace(/^\//, "") || "leads"}`;
			headers = {
				...headers,
				apikey: supabase.key,
				Authorization: `Bearer ${supabase.key}`,
				Prefer: "return=minimal"
			};
			body = [payload];
		}
		if (!validUrl(endpoint)) return {
			label: ep.label || ep.type,
			ok: false,
			attempts: 0,
			detail: "URL không hợp lệ hoặc không dùng HTTPS"
		};
		try {
			if ((await Promise.race([relayWebhook({ data: {
				endpoint,
				body,
				headers
			} }), new Promise((resolve) => window.setTimeout(() => resolve(null), TIMEOUT_MS))]))?.ok) return {
				label: ep.label || ep.type,
				ok: true,
				attempts: 1,
				detail: "server_relay"
			};
		} catch {}
		const result = await requestWithRetry(endpoint, {
			method: "POST",
			headers,
			body: JSON.stringify(body),
			keepalive: true
		});
		if (!result.response?.ok) return {
			label: ep.label || ep.type,
			ok: false,
			attempts: result.attempts,
			detail: result.detail || `HTTP ${result.response?.status}`
		};
		return {
			label: ep.label || ep.type,
			ok: true,
			attempts: result.attempts
		};
	} catch (err) {
		return {
			label: ep.label || ep.type,
			ok: false,
			attempts: 0,
			detail: err.message
		};
	}
}
async function testWebhookEndpoint(endpoint, config) {
	return postOne(endpoint, {
		test: true,
		event: "webhook_test",
		sent_at: (/* @__PURE__ */ new Date()).toISOString()
	}, {
		url: config.admin.supabaseUrl,
		key: config.admin.supabaseAnonKey
	});
}
/**
* Gửi lead đi mọi kênh. Khi đã cấu hình nhiều kênh, chỉ coi là thành công
* khi tất cả kênh đều nhận được dữ liệu; không cấu hình kênh nào vẫn hợp lệ.
*/
async function dispatchLead(config, payload) {
	payload = compactPayload(payload);
	const endpoints = [];
	const primary = config.form.webhookUrl?.trim();
	if (primary && primary.startsWith("http") && !primary.includes("REPLACE")) endpoints.push({
		id: "primary",
		label: "Webhook chính",
		url: primary,
		enabled: true,
		type: "make"
	});
	endpoints.push(...config.webhooks.filter((w) => w.enabled && w.url.trim()));
	const uniqueEndpoints = endpoints.filter((endpoint, index, all) => all.findIndex((candidate) => candidate.url.trim() === endpoint.url.trim()) === index);
	if (uniqueEndpoints.length === 0) return {
		ok: true,
		results: []
	};
	const supabase = {
		url: config.admin.supabaseUrl,
		key: config.admin.supabaseAnonKey
	};
	const results = await Promise.all(uniqueEndpoints.map((ep) => postOne(ep, payload, supabase)));
	const failed = results.filter((r) => !r.ok);
	if (failed.length > 0 && typeof navigator !== "undefined" && navigator.sendBeacon) for (const ep of uniqueEndpoints) {
		if (results.find((r) => r.label === (ep.label || ep.type))?.ok) continue;
		if (ep.type === "telegram" || ep.type === "supabase") continue;
		try {
			const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
			navigator.sendBeacon(ep.url, blob);
		} catch {}
	}
	return {
		ok: failed.length === 0 || results.some((r) => r.ok),
		results,
		failedCount: failed.length
	};
}
/**
* A/B Split Testing — Traffic Splitter.
* Gán biến thể cho khách lần đầu vào trang và ghi nhớ ở localStorage
* để lần sau vẫn thấy đúng biến thể đó.
*/
var KEY_PREFIX = "funnel_ab_variant_v2";
function getVariant(enabled, splitToB) {
	if (typeof window === "undefined" || !enabled) return "A";
	const split = Math.min(100, Math.max(0, Number(splitToB) || 0));
	const key = `${KEY_PREFIX}_${split}`;
	try {
		const saved = window.localStorage.getItem(key);
		if (saved === "A" || saved === "B") return saved;
		const variant = Math.random() * 100 < split ? "B" : "A";
		window.localStorage.setItem(key, variant);
		return variant;
	} catch {
		return "A";
	}
}
function resetVariant(splitToB) {
	if (typeof window === "undefined") return;
	try {
		if (splitToB === void 0) Object.keys(window.localStorage).filter((key) => key.startsWith(`${KEY_PREFIX}_`)).forEach((key) => window.localStorage.removeItem(key));
		else {
			const split = Math.min(100, Math.max(0, Number(splitToB) || 0));
			window.localStorage.removeItem(`${KEY_PREFIX}_${split}`);
		}
	} catch {}
}
function utmSource() {
	if (typeof window === "undefined") return "direct";
	try {
		return getUtmSource("last");
	} catch {
		return "direct";
	}
}
//#endregion
export { getUtm as a, resetVariant as c, testWebhookEndpoint as d, trackFormStart as f, webhookConfigurationWarning as g, utmSource as h, fireTestEvent as i, sendLeadEmail as l, trackLead as m, checkEmailConfig as n, getUtmPayload as o, trackInteraction as p, dispatchLead as r, getVariant as s, captureUtm as t, sendTestEmail as u };
