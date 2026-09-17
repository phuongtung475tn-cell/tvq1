import { r as __toESM, t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Cdal7T4f.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as unknownType, i as stringType, n as objectType, r as recordType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-site-config-BGGYc72d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_CONFIG = {
	admin: {
		adminPath: "admin",
		password: "",
		storageMode: "database",
		supabaseUrl: "https://trkdtkrnukfvvcopiwlp.supabase.co",
		supabaseAnonKey: "sb_publishable_hajPAFQZ0SiziA8IdANyGw_2oXBlZST",
		supabaseAdminEmail: "phuongtung475.tn@gmail.com",
		backupEmail: "",
		cronSchedule: "off",
		backupCronToken: ""
	},
	pages: [{
		id: "home",
		title: "Trang chủ",
		path: "",
		kind: "landing",
		enabled: true,
		showInMenu: true,
		menuOrder: 0,
		heading: "",
		description: "",
		ctaLabel: "",
		ctaHref: "#dang-ky",
		sectionIds: []
	}, {
		id: "thank-you",
		title: "Cảm ơn",
		path: "cam-on",
		kind: "thankYou",
		enabled: true,
		showInMenu: false,
		menuOrder: 1,
		heading: "Cảm ơn bạn đã đăng ký!",
		description: "Thông tin đã được ghi nhận. Tư vấn viên sẽ liên hệ với bạn trong thời gian sớm nhất.",
		ctaLabel: "Về trang chủ",
		ctaHref: "/",
		sectionIds: []
	}],
	tracking: {
		facebookPixelId: "",
		tiktokPixelId: "DAILRC3C77U3EDHHCGUG",
		tiktokAccessToken: "",
		ga4Id: "",
		gtmId: "",
		googleVerification: "",
		customHead: "",
		customBody: "",
		customFooter: "",
		events: {
			pageView: true,
			formStart: true,
			lead: true,
			completeRegistration: true,
			click: true,
			scroll: true
		}
	},
	seo: {
		title: "Du học nghề Trung Quốc 2026 — Học bổng miễn phí KTX, cam kết Visa",
		description: "Chương trình du học nghề Trung Quốc trọn gói: học bổng miễn 100% KTX, vừa học vừa làm lương 15-25 triệu/tháng, cam kết Visa 100%. Đăng ký tư vấn miễn phí.",
		keywords: "du học nghề trung quốc, học bổng trung quốc, du học vừa học vừa làm",
		ogImage: "/og-image.jpg",
		faviconUrl: "/favicon.ico",
		schemaType: "EducationalOrganization"
	},
	theme: {
		primary: "#c0392b",
		gold: "#d4af37",
		fontHeading: "Be Vietnam Pro",
		fontBody: "Be Vietnam Pro"
	},
	landing: {
		sectionsArray: [
			{
				id: "hero",
				type: "hero",
				label: "Hero",
				enabled: true,
				order: 0
			},
			{
				id: "stats",
				type: "stats",
				label: "Stats",
				enabled: true,
				order: 1
			},
			{
				id: "pains",
				type: "pains",
				label: "Pain points",
				enabled: true,
				order: 2
			},
			{
				id: "benefits",
				type: "benefits",
				label: "Benefits",
				enabled: true,
				order: 3
			},
			{
				id: "majors",
				type: "majors",
				label: "Ngành học",
				enabled: true,
				order: 4
			},
			{
				id: "experts",
				type: "experts",
				label: "Chuyên gia",
				enabled: true,
				order: 5
			},
			{
				id: "gallery",
				type: "gallery",
				label: "Gallery",
				enabled: true,
				order: 6
			},
			{
				id: "testimonials",
				type: "testimonials",
				label: "Testimonials",
				enabled: true,
				order: 7
			},
			{
				id: "steps",
				type: "steps",
				label: "Lộ trình",
				enabled: true,
				order: 8
			},
			{
				id: "faq",
				type: "faq",
				label: "FAQ",
				enabled: true,
				order: 9
			},
			{
				id: "finalCta",
				type: "finalCta",
				label: "CTA cuối",
				enabled: true,
				order: 10
			}
		],
		brandName: "Trung tâm Hướng nghiệp & Phát triển Sự nghiệp Quốc tế",
		showLogo: true,
		logoUrl: "",
		heroEyebrow: "Tuyển sinh kỳ tháng 3 & tháng 9",
		heroTitle: "5 năm nữa bạn vẫn muốn đứng ở vị trí",
		heroHighlight: "công nhân lặp đi lặp lại?",
		heroDescription: "Du học nghề Trung Quốc: học phí 0Đ, vừa học vừa làm lương 15-30 triệu/tháng, ra trường có bằng Cao đẳng chính quy quốc tế và tay nghề công nghệ cao.",
		heroMediaMode: "image",
		heroImageUrl: "",
		heroSliderImages: [],
		heroSliderIntervalMs: 4500,
		galleryImageUrls: [
			"",
			"",
			"",
			""
		],
		expertImageUrls: [
			"",
			"",
			""
		],
		heroTrustItems: [
			"Không chứng minh tài chính",
			"Không cần tiếng Hán trước",
			"Xét hồ sơ tốt nghiệp THPT",
			"Hỗ trợ trọn gói tới khi nhập học"
		],
		heroCtaLabel: "Đăng ký nhận lộ trình 0Đ",
		stats: [
			{
				value: "100%",
				label: "Học viên có việc làm khi thực tập"
			},
			{
				value: "15-30tr",
				label: "Thu nhập mỗi tháng khi vừa học vừa làm"
			},
			{
				value: "8",
				label: "Ngành công nghệ đang khát nhân lực"
			},
			{
				value: "0Đ",
				label: "Học phí trong toàn bộ khóa học"
			}
		],
		painHeading: "Nếu bạn đang gặp một trong ba điều này, bạn cần đọc tiếp",
		pains: [
			"Làm công nhân 10-12 tiếng/ngày, lương không tăng, tay nghề không lên.",
			"Không có bằng cấp quốc tế nên mãi không thoát khỏi vị trí lao động phổ thông.",
			"Muốn đi nước ngoài nhưng sợ chi phí hàng trăm triệu và rủi ro môi giới."
		],
		benefitsHeading: "4 lợi ích vàng của chương trình",
		benefits: [
			{
				stat: "0Đ",
				title: "Học phí bằng 0",
				text: "Doanh nghiệp Trung Quốc tài trợ toàn bộ học phí theo chương trình liên kết đào tạo nhân lực."
			},
			{
				stat: "80%",
				title: "80% thực hành",
				text: "Chỉ 20% lý thuyết. Bạn làm việc trực tiếp trên dây chuyền, máy móc và công nghệ mới nhất."
			},
			{
				stat: "15-30tr",
				title: "Lương cứng mỗi tháng",
				text: "Vừa học vừa làm, thu nhập 15-30 triệu/tháng, đủ chi phí sinh hoạt và gửi về gia đình."
			},
			{
				stat: "Bằng",
				title: "Cao đẳng chính quy quốc tế",
				text: "Bằng Cao đẳng chính quy được công nhận quốc tế, mở đường ở lại làm việc hoặc học tiếp."
			}
		],
		majorsHeading: "8 ngành nghề phát triển trong 5-20 năm tới",
		majorsDescription: "Các lựa chọn bám sát chuyển dịch công nghệ, sản xuất và thương mại giữa Việt Nam – Trung Quốc.",
		majorNames: [
			"Công nghệ Ô tô điện",
			"Công nghệ Drone (UAV)",
			"Thương mại điện tử",
			"Logistics & Chuỗi cung ứng",
			"Kỹ thuật Điện tử",
			"IoT - Internet vạn vật",
			"Cơ khí tự động hóa",
			"Hán ngữ thương mại"
		],
		majorIcons: [
			"🚗",
			"🛸",
			"🛒",
			"🚚",
			"🔌",
			"📡",
			"⚙️",
			"🀄"
		],
		majorDescriptions: [
			"Đón đầu xu hướng điện hóa giao thông, pin thế hệ mới và hệ sinh thái xe thông minh.",
			"Phát triển cùng nhu cầu UAV trong nông nghiệp, vận chuyển, khảo sát và cứu hộ.",
			"Mở rộng theo thương mại xuyên biên giới, bán hàng đa kênh và vận hành bằng dữ liệu.",
			"Giữ vai trò cốt lõi khi chuỗi cung ứng khu vực ngày càng tự động hóa và kết nối sâu.",
			"Là nền tảng cho thiết bị thông minh, năng lượng sạch, robot và sản xuất công nghệ cao.",
			"Kết nối nhà máy, đô thị và thiết bị thông minh trong nền kinh tế số tương lai.",
			"Thúc đẩy nhà máy thông minh, robot cộng tác và dây chuyền sản xuất ít phụ thuộc lao động tay chân.",
			"Tạo lợi thế trong thương mại, dịch vụ và hợp tác doanh nghiệp Việt Nam – Trung Quốc."
		],
		expertsHeading: "Đội ngũ chuyên gia tư vấn",
		expertsDescription: "Đồng hành từ lúc chọn ngành, chuẩn bị hồ sơ đến khi học viên sẵn sàng nhập học.",
		experts: [
			{
				name: "Ths. Nguyễn Thu Hương",
				role: "Chuyên gia định hướng ngành học",
				bio: "Tập trung đánh giá năng lực, sở thích và mục tiêu dài hạn để giúp học viên chọn ngành phù hợp.",
				experience: "Kinh nghiệm tư vấn lộ trình học nghề quốc tế và định hướng nghề nghiệp sau tốt nghiệp."
			},
			{
				name: "Ông Lê Quang Vinh",
				role: "Chuyên gia hồ sơ & tuyển sinh",
				bio: "Đồng hành cùng học viên từ bước rà soát điều kiện đến hoàn thiện hồ sơ nhập học và visa.",
				experience: "Kinh nghiệm xử lý hồ sơ tuyển sinh, thủ tục du học và chuẩn bị trước khi xuất cảnh."
			},
			{
				name: "Cô Phạm Minh Anh",
				role: "Chuyên gia đồng hành học viên",
				bio: "Hỗ trợ học viên chuẩn bị ngôn ngữ, kỹ năng thích nghi và kế hoạch học tập tại Trung Quốc.",
				experience: "Kinh nghiệm đào tạo kỹ năng tiền du học và hỗ trợ học viên trong quá trình hòa nhập."
			}
		],
		galleryHeading: "Hình ảnh thực tế: visa, trường học & ký túc xá",
		galleryDescription: "Ảnh từ các khóa học viên đã bay và trường đối tác tại Trung Quốc.",
		galleryCaptions: [
			"Visa du học sinh đã được cấp cho học viên khóa gần nhất",
			"Khuôn viên trường Cao đẳng nghề đối tác tại Trung Quốc",
			"Phòng ký túc xá trong trường — miễn 100% phí ở",
			"Học viên lên đường nhập học kỳ tháng 9"
		],
		testimonialsHeading: "Học viên đi trước nói gì",
		testimonials: [
			{
				name: "Nguyễn Văn Hùng",
				meta: "Ngành Ô tô điện · Quảng Châu · khóa tháng 9",
				text: "Trước em làm xưởng gỗ 7 triệu/tháng. Sang đây vừa học vừa làm được hơn 20 triệu, tháng nào cũng gửi về nhà 10 triệu. Tay nghề lên hẳn vì được làm trên xe thật.",
				avatarUrl: ""
			},
			{
				name: "Trần Thị Ngọc",
				meta: "Ngành Thương mại điện tử · Nghĩa Ô",
				text: "Em không biết tiếng Hán, được học nền tảng trước khi bay nên sang không bị choáng. Giờ em phụ trách livestream cho một shop, thu nhập ổn định.",
				avatarUrl: ""
			},
			{
				name: "Lê Đình Phúc",
				meta: "Ngành Drone (UAV) · Thâm Quyến",
				text: "Nhà em không đủ tiền cho đi du học tự túc. Chương trình 0Đ giúp em học ngành công nghệ mà chi phí ban đầu rất nhẹ. Ra trường có bằng Cao đẳng chính quy.",
				avatarUrl: ""
			}
		],
		stepsHeading: "Lộ trình 4 bước đơn giản",
		steps: [
			{
				number: "01",
				title: "Đăng ký & tư vấn 1:1",
				description: "Điền form, chuyên viên gọi lại trong 30 phút, gửi lộ trình chi tiết."
			},
			{
				number: "02",
				title: "Chọn ngành & xét hồ sơ",
				description: "Chọn 1 trong 8 ngành hot, hoàn thiện hồ sơ theo hướng dẫn từng bước."
			},
			{
				number: "03",
				title: "Học tiếng Hán & định hướng",
				description: "Đào tạo tiếng Hán nền tảng và kỹ năng trước khi bay."
			},
			{
				number: "04",
				title: "Nhập học & bắt đầu kiếm tiền",
				description: "Sang trường đối tác, học nghề và làm việc có lương ngay từ kỳ đầu."
			}
		],
		faqHeading: "Câu hỏi thường gặp",
		faqs: [
			{
				slug: "hoc_phi",
				question: "Du học nghề Trung Quốc học phí 0Đ có thật không?",
				answer: "Có. Học phí được doanh nghiệp Trung Quốc tài trợ theo chương trình liên kết đào tạo nhân lực. Học viên chỉ cần chuẩn bị chi phí hồ sơ, vé máy bay và sinh hoạt ban đầu; phần này được tư vấn minh bạch trước khi đăng ký."
			},
			{
				slug: "tieng_trung",
				question: "Điều kiện tham gia gồm những gì?",
				answer: "Tốt nghiệp THPT (hoặc tương đương), độ tuổi 18-28, sức khỏe tốt. Không cần chứng minh tài chính và không yêu cầu biết tiếng Hán trước — học viên được đào tạo tiếng Hán nền tảng trước khi bay."
			},
			{
				slug: "luong_thuc_tap",
				question: "Vừa học vừa làm thì lương bao nhiêu và có đủ sống không?",
				answer: "Thu nhập thực tập tại doanh nghiệp đối tác thường 15-30 triệu đồng/tháng tùy ngành và ca làm. Mức này đủ trang trải sinh hoạt, ký túc xá và còn dư gửi về gia đình."
			},
			{
				slug: "bang_cap",
				question: "Bằng tốt nghiệp có được công nhận không?",
				answer: "Học viên nhận bằng Cao đẳng chính quy của trường tại Trung Quốc, được công nhận quốc tế, có thể ở lại làm việc, học liên thông lên Đại học hoặc về Việt Nam làm cho doanh nghiệp FDI."
			},
			{
				slug: "thoi_gian",
				question: "Thời gian nhập học và quy trình mất bao lâu?",
				answer: "Có hai kỳ nhập học mỗi năm: tháng 3 và tháng 9. Từ lúc đăng ký tới khi bay thường 3-5 tháng, gồm xét hồ sơ, học tiếng Hán và làm thủ tục visa."
			},
			{
				slug: "nganh_hoc",
				question: "Ngành nào đang cần nhiều nhân lực nhất?",
				answer: "Công nghệ ô tô điện, công nghệ drone (UAV), IoT và logistics là các ngành tuyển nhiều nhất, đồng thời có mức lương thực tập cao nhất trong 8 ngành của chương trình."
			}
		],
		finalCtaHeading: "Đổi 30 giây hôm nay cho 5 năm tới của bạn",
		finalCtaDescription: "Nhận lộ trình chi tiết, danh sách trường và mức lương thực tế theo từng ngành — hoàn toàn 0Đ."
	},
	fomo: {
		enabled: true,
		source: "recentLeads",
		respectReducedMotion: true,
		names: [
			"Trần Văn Nam",
			"Nguyễn Thị Hà",
			"Lê Minh Quân",
			"Phạm Thu Trang",
			"Hoàng Văn Dũng",
			"Đỗ Thị Mai",
			"Vũ Đức Anh",
			"Bùi Thanh Tùng",
			"Ngô Thị Lan",
			"Đặng Hữu Phước"
		],
		cities: [
			"Bình Dương",
			"Hà Nội",
			"Bắc Giang",
			"Nghệ An",
			"Thanh Hóa",
			"Hải Phòng",
			"Đồng Nai",
			"Thái Nguyên",
			"Cần Thơ",
			"Đắk Lắk"
		],
		minDelaySec: 10,
		maxDelaySec: 18,
		displaySec: 5,
		position: "left",
		template: "{name} ({city}) vừa đăng ký nhận tư vấn"
	},
	countdown: {
		enabled: true,
		slotsLeft: 12,
		autoDecrement: true,
		headline: "suất học bổng miễn 100% KTX tháng này",
		endMode: "endOfMonth",
		endDate: ""
	},
	floatingContact: {
		enabled: true,
		hotline: "0900000000",
		zalo: "https://zalo.me/0900000000",
		messenger: "",
		animateHotline: true,
		animateMessenger: true
	},
	trafficStats: {
		enabled: true,
		position: "footer",
		title: "Thống kê truy cập thông minh",
		helperText: "Dữ liệu truy cập được gom từ cùng một kho tracking để đồng bộ giữa Analytics, Mini-CRM và Webhook."
	},
	footer: {
		logoUrl: "",
		menuLabel: "Liên kết nhanh",
		menuLinks: [{
			label: "Đăng ký tư vấn",
			href: "#dang-ky-cuoi"
		}, {
			label: "Câu hỏi thường gặp",
			href: "#faq"
		}]
	},
	form: {
		headline: "Đăng ký nhận tư vấn miễn phí",
		ctaLabel: "ĐĂNG KÝ NGAY",
		webhookUrl: "https://hook.us2.make.com/jtwmjkp2t8wrlr4f080ppgc84u3e53aa",
		redirectUrl: "",
		rateLimitCount: 3,
		rateLimitWindowMin: 5,
		fields: [
			{
				name: "name",
				label: "Họ và tên",
				placeholder: "Nguyễn Văn A",
				type: "text",
				required: true
			},
			{
				name: "phone",
				label: "Số điện thoại",
				placeholder: "09xx xxx xxx",
				type: "tel",
				required: true
			},
			{
				name: "email",
				label: "Email (không bắt buộc)",
				placeholder: "email@example.com",
				type: "email",
				required: false
			},
			{
				name: "city",
				label: "Tỉnh/Thành phố",
				placeholder: "Chọn tỉnh/thành",
				type: "select",
				required: true
			},
			{
				name: "major",
				label: "Ngành học quan tâm",
				placeholder: "Chọn ngành",
				type: "select",
				required: true
			}
		]
	},
	aiAdvisor: {
		enabled: true,
		vipDeviceRegex: "iPhone (13|14|15|16) Pro|Pro Max|Galaxy S(22|23|24)|Fold|Flip",
		keyRegions: "Nghệ An|Hà Tĩnh|Quảng Bình|Thanh Hóa|Quảng Ninh|Hải Phòng",
		fastFillThresholdSec: 4,
		vipTimeOnPageSec: 80,
		vipScrollPercent: 70,
		weightDevice: 20,
		weightRegion: 15,
		weightFastFill: 15,
		weightTimeOnPage: 20,
		weightScroll: 15,
		weightReturnVisit: 15,
		callScriptTemplate: "Chào {name}, em gọi từ chương trình du học nghề Trung Quốc. Em thấy anh/chị ở {city}, quan tâm ngành {major}. Dựa trên hành vi online, em đánh giá khách là {ai_rank} (score {ai_score}). Gợi ý: {sale_advice}"
	},
	webhooks: [],
	emailAutomation: {
		enabled: false,
		provider: "resend",
		fromEmail: "",
		notifyEmail: "",
		resendApiKey: "",
		gmailClientId: "",
		gmailClientSecret: "",
		gmailRefreshToken: "",
		subject: "Cảm ơn {name} đã đăng ký tư vấn du học nghề Trung Quốc",
		body: "Chào {name},\n\nCảm ơn bạn đã để lại thông tin. Đội ngũ tư vấn sẽ liên hệ số {phone} trong thời gian sớm nhất.\n\nTrân trọng.",
		notifySubject: "[Lead mới] {name} — {phone} — {city}",
		notifyBody: "Lead mới vừa đăng ký:\n\nHọ tên: {name}\nSĐT: {phone}\nTỉnh: {city}\nNgành: {major}\nAI Score: {ai_score}\nNguồn: {source}"
	},
	abTest: {
		enabled: false,
		split: 50,
		variantALabel: "Variant A",
		variantBLabel: "Variant B",
		variantAHeadline: "",
		variantBHeadline: "",
		variantACta: "",
		variantBCta: ""
	}
};
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var relaySchema = objectType({
	endpoint: stringType().url(),
	body: unknownType(),
	headers: recordType(stringType(), stringType()).optional()
});
var relayWebhook = createServerFn({ method: "POST" }).validator((data) => relaySchema.parse(data)).handler(createSsrRpc("95e6712f6ffd450a883eaa218493fa3addd9c46fc4e357a506533ee0a8508e68"));
var ACCESS_TOKEN_KEY = "funnel_supabase_access_token_v1";
function tokenIsExpired(token) {
	try {
		const payload = token.split(".")[1];
		if (!payload) return false;
		const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
		const claims = JSON.parse(atob(normalizedPayload.padEnd(Math.ceil(normalizedPayload.length / 4) * 4, "=")));
		return typeof claims.exp === "number" && claims.exp <= Math.floor(Date.now() / 1e3);
	} catch {
		return false;
	}
}
function isBrowser$1() {
	return typeof window !== "undefined";
}
function getSupabaseAccessToken() {
	if (!isBrowser$1()) return "";
	try {
		const token = window.sessionStorage.getItem(ACCESS_TOKEN_KEY) || "";
		if (token && tokenIsExpired(token)) {
			window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
			return "";
		}
		return token;
	} catch {
		return "";
	}
}
function clearSupabaseAccessToken() {
	if (!isBrowser$1()) return;
	try {
		window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
	} catch {}
}
async function signInWithSupabase(url, anonKey, email, password) {
	if (!url || !anonKey || !email || !password || !isBrowser$1()) return false;
	try {
		const response = await fetch(`${url.replace(/\/$/, "")}/auth/v1/token?grant_type=password`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				apikey: anonKey
			},
			body: JSON.stringify({
				email,
				password
			})
		});
		if (!response.ok) return false;
		const payload = await response.json();
		if (typeof payload.access_token !== "string" || !payload.access_token) return false;
		const userResponse = await fetch(`${url.replace(/\/$/, "")}/auth/v1/user`, { headers: {
			apikey: anonKey,
			Authorization: `Bearer ${payload.access_token}`
		} });
		if (!userResponse.ok) return false;
		const user = await userResponse.json();
		if (typeof user.id !== "string" || !user.id) return false;
		const adminResponse = await fetch(`${url.replace(/\/$/, "")}/rest/v1/admin_users?user_id=eq.${encodeURIComponent(user.id)}&enabled=eq.true&select=user_id&limit=1`, { headers: {
			apikey: anonKey,
			Authorization: `Bearer ${payload.access_token}`
		} });
		if (!adminResponse.ok) return false;
		const admins = await adminResponse.json();
		if (!Array.isArray(admins) || admins.length === 0) return false;
		window.sessionStorage.setItem(ACCESS_TOKEN_KEY, payload.access_token);
		return true;
	} catch {
		return false;
	}
}
var saveSchema = objectType({
	url: stringType().url(),
	anonKey: stringType().min(1),
	email: stringType().email(),
	password: stringType().min(1),
	config: recordType(stringType(), unknownType())
});
var saveConfigWithSupabaseAuth = createServerFn({ method: "POST" }).validator((input) => saveSchema.parse(input)).handler(createSsrRpc("59299230b1dcbdf2a6bf7bd85cf72e0921cd318d99fd9be43df2d046cebba28a"));
/**
* HYBRID STORAGE ADAPTER
* ----------------------
* - LOCAL MODE: đọc/ghi cấu hình qua localStorage, chỉ dành cho phát triển.
* - DATABASE MODE: dữ liệu nghiệp vụ và cấu hình chỉ nằm trên Supabase.
*
* Toàn bộ hệ thống chỉ gọi qua adapter này nên có thể đổi backend mà không sửa UI.
*/
var CONFIG_KEY = "funnel_site_config_v1";
var LEADS_KEY = "funnel_leads_v1";
var ANALYTICS_KEY = "funnel_analytics_v1";
var BACKUP_KEY = "funnel_backup_snapshots_v1";
var LEAD_CREATED_EVENT = "funnel:lead-created";
var ANALYTICS_UPDATED_EVENT = "funnel:analytics-updated";
var CLOUD_CONFIG_TABLE = "funnel_configs";
var CLOUD_ANALYTICS_TABLE = "funnel_analytics";
var LOCAL_MIGRATION_KEY = "funnel_supabase_migrated_leads_v1";
var REMOTE_LEAD_TIMEOUT_MS = 3e3;
var REMOTE_DUPLICATE_TIMEOUT_MS = 1500;
function bearer(key) {
	return getSupabaseAccessToken() || key;
}
var browserCacheKeys = [
	...[
		CONFIG_KEY,
		LEADS_KEY,
		ANALYTICS_KEY,
		BACKUP_KEY,
		LOCAL_MIGRATION_KEY
	],
	"lp_visitor_id_v2",
	"lp_utm_first_v4",
	"lp_utm_last_v4",
	"lp_utm_first_v3",
	"lp_utm_v2",
	"lp_visit_counters_v2",
	"lp_submission_counters_v2",
	"lp_rate",
	"funnel_ab_variant_v2_A",
	"funnel_ab_variant_v2_B"
];
function configuredSupabase() {
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
	return {
		url: env["VITE_SUPABASE_URL"]?.trim().replace(/\/$/, "") || "",
		key: env["VITE_SUPABASE_ANON_KEY"]?.trim() || ""
	};
}
function clearClientCache() {
	if (!isBrowser()) return;
	for (const key of browserCacheKeys) try {
		window.localStorage.removeItem(key);
		window.sessionStorage.removeItem(key);
	} catch {}
	if ("caches" in window) window.caches.keys().then((keys) => Promise.all(keys.map((key) => window.caches.delete(key))));
}
function isRecord(value) {
	return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
/** Deep-merge dữ liệu đã lưu lên mặc định để config luôn đủ trường khi nâng cấp. */
function mergeConfig(base, override) {
	if (!override) return structuredClone(base);
	const compatibleOverride = structuredClone(override);
	if (compatibleOverride.landing?.sections && !compatibleOverride.landing.sectionsArray) {
		compatibleOverride.landing.sectionsArray = compatibleOverride.landing.sections.map((section, order) => ({
			...section,
			type: section.type || section.id,
			order
		}));
		delete compatibleOverride.landing.sections;
	}
	const merge = (baseValue, overrideValue) => {
		if (overrideValue && typeof overrideValue === "object" && !Array.isArray(overrideValue) && baseValue && typeof baseValue === "object" && !Array.isArray(baseValue)) {
			const result = { ...baseValue };
			for (const [key, value] of Object.entries(overrideValue)) result[key] = merge(result[key], value);
			return result;
		}
		return overrideValue === void 0 ? baseValue : overrideValue;
	};
	return merge(structuredClone(base), compatibleOverride);
}
function isBrowser() {
	return typeof window !== "undefined";
}
function preserveLocalSecrets(merged, local) {
	const env = configuredSupabase();
	merged.admin.supabaseUrl = env.url || local.admin.supabaseUrl;
	merged.admin.supabaseAnonKey = env.key || local.admin.supabaseAnonKey;
	merged.admin.supabaseAdminEmail = merged.admin.supabaseAdminEmail || local.admin.supabaseAdminEmail;
	merged.admin.password = "";
	merged.admin.storageMode = "database";
	merged.admin.backupCronToken = local.admin.backupCronToken;
	merged.emailAutomation.resendApiKey = local.emailAutomation.resendApiKey;
	merged.emailAutomation.gmailClientId = local.emailAutomation.gmailClientId;
	merged.emailAutomation.gmailClientSecret = local.emailAutomation.gmailClientSecret;
	merged.emailAutomation.gmailRefreshToken = local.emailAutomation.gmailRefreshToken;
	merged.tracking.tiktokAccessToken = local.tracking.tiktokAccessToken;
	return merged;
}
function loadConfig() {
	if (!isBrowser()) return structuredClone(DEFAULT_CONFIG);
	try {
		const raw = window.localStorage.getItem(CONFIG_KEY);
		const parsed = raw ? JSON.parse(raw) : null;
		const config = mergeConfig(DEFAULT_CONFIG, isRecord(parsed) ? parsed : null);
		const env = configuredSupabase();
		clearClientCache();
		config.admin.storageMode = "database";
		config.admin.supabaseUrl = env.url || config.admin.supabaseUrl;
		config.admin.supabaseAnonKey = env.key || config.admin.supabaseAnonKey;
		return config;
	} catch {
		return structuredClone(DEFAULT_CONFIG);
	}
}
/** Nạp cấu hình landing từ Supabase khi Database Mode được bật. */
async function loadCloudConfig(config) {
	if (!isBrowser() || config.admin.storageMode !== "database" || !config.admin.supabaseUrl || !config.admin.supabaseAnonKey) return null;
	try {
		const response = await fetch(`${config.admin.supabaseUrl.replace(/\/$/, "")}/rest/v1/${CLOUD_CONFIG_TABLE}?id=eq.1&select=data`, { headers: {
			apikey: config.admin.supabaseAnonKey,
			Authorization: `Bearer ${bearer(config.admin.supabaseAnonKey)}`
		} });
		if (!response.ok) return null;
		const rows = await response.json();
		if (!Array.isArray(rows) || !isRecord(rows[0])) return null;
		const data = rows[0]["data"];
		if (!isRecord(data)) return null;
		const hydrated = preserveLocalSecrets(mergeConfig(config, data), config);
		clearClientCache();
		return hydrated;
	} catch {
		return null;
	}
}
async function saveConfig(config) {
	if (!isBrowser()) return false;
	if (config.admin.storageMode !== "database") {
		clearClientCache();
		console.error("Local storage mode is disabled; configure Supabase first.");
		return false;
	}
	if (config.admin.storageMode === "database") {
		clearClientCache();
		if (config.admin.supabaseUrl && config.admin.supabaseAnonKey) return await syncConfigToSupabase(config);
		else console.error("Database mode requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
		return false;
	}
	return false;
}
async function saveConfigWithCredentials(config, password) {
	if (!isBrowser() || !config.admin.supabaseUrl || !config.admin.supabaseAnonKey) return {
		ok: false,
		reason: "missing_config"
	};
	try {
		const result = await saveConfigWithSupabaseAuth({ data: {
			url: config.admin.supabaseUrl,
			anonKey: config.admin.supabaseAnonKey,
			email: config.admin.supabaseAdminEmail,
			password,
			config
		} });
		if (result.ok) try {
			window.sessionStorage.setItem("funnel_supabase_access_token_v1", result.accessToken);
		} catch {}
		return result;
	} catch {
		return {
			ok: false,
			reason: "server_unavailable"
		};
	}
}
function resetConfig() {
	clearClientCache();
	return structuredClone(DEFAULT_CONFIG);
}
function exportConfigFile(config) {
	if (!isBrowser()) return;
	const exportConfig = structuredClone(config);
	exportConfig.admin.supabaseAnonKey = "";
	exportConfig.admin.password = "";
	exportConfig.admin.backupCronToken = "";
	exportConfig.emailAutomation.resendApiKey = "";
	exportConfig.emailAutomation.gmailClientId = "";
	exportConfig.emailAutomation.gmailClientSecret = "";
	exportConfig.emailAutomation.gmailRefreshToken = "";
	exportConfig.tracking.tiktokAccessToken = "";
	const content = `// AUTO-GENERATED — dán đè vào src/config/site-config.ts (phần DEFAULT_CONFIG)\nexport const DEFAULT_CONFIG = ${JSON.stringify(exportConfig, null, 2)};\n`;
	const blob = new Blob([content], { type: "text/javascript" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "site-config.export.js";
	a.click();
	URL.revokeObjectURL(url);
}
function sqlJson(value) {
	return `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
}
function exportSupabaseSql(config) {
	if (!isBrowser()) return;
	const cloudConfig = structuredClone(config);
	cloudConfig.admin.supabaseAnonKey = "";
	cloudConfig.admin.password = "";
	cloudConfig.admin.backupCronToken = "";
	cloudConfig.emailAutomation.resendApiKey = "";
	cloudConfig.emailAutomation.gmailClientId = "";
	cloudConfig.emailAutomation.gmailClientSecret = "";
	cloudConfig.emailAutomation.gmailRefreshToken = "";
	cloudConfig.tracking.tiktokAccessToken = "";
	const analytics = loadAnalytics();
	const sql = `-- Generated by Funnel Builder. Secrets are intentionally omitted.
create extension if not exists pgcrypto;

create table if not exists public.funnel_configs (id bigint primary key, data jsonb not null, updated_at timestamptz not null default now());
alter table public.funnel_configs enable row level security;
drop policy if exists "funnel configs can be read" on public.funnel_configs;
create policy "funnel configs can be read" on public.funnel_configs for select using (true);
drop policy if exists "funnel configs can be written" on public.funnel_configs;
create policy "funnel configs can be written" on public.funnel_configs for insert to authenticated with check (id = 1);
drop policy if exists "funnel configs can be updated" on public.funnel_configs;
create policy "funnel configs can be updated" on public.funnel_configs for update to authenticated using (id = 1) with check (id = 1);

create table if not exists public.funnel_analytics (id bigint primary key, data jsonb not null, updated_at timestamptz not null default now());
alter table public.funnel_analytics enable row level security;
drop policy if exists "funnel analytics can be read" on public.funnel_analytics;
create policy "funnel analytics can be read" on public.funnel_analytics for select to authenticated;
drop policy if exists "funnel analytics can be written" on public.funnel_analytics;
create policy "funnel analytics can be written" on public.funnel_analytics for insert to authenticated with check (id = 1);
drop policy if exists "funnel analytics can be updated" on public.funnel_analytics;
create policy "funnel analytics can be updated" on public.funnel_analytics for update to authenticated using (id = 1) with check (id = 1);

create table if not exists public.leads (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), name text, phone text, email text, city text, major text, ai_score int, ai_rank text, risk_level text, risk_reasons text[], recommended_action text, behavior_summary text, sale_advice text, device_tech_info text, traffic_ads_source text, network_provider text, network_label text, current_session int, visits_today int, visits_month int, utm_source text, utm_medium text, utm_campaign text, utm_content text, utm_term text, fbclid text, ttclid text, gclid text, raw_query text, referrer text, attribution_model text, attribution_detected_by text, utm_params jsonb, variant text, landing_url text, device_manufacturer text, device_family text, device_model text, operating_system text, browser text, visitor_behavior_payload jsonb);
alter table public.leads enable row level security;
drop policy if exists "leads can be created by public form" on public.leads;
create policy "leads can be created by public form" on public.leads for insert with check (true);

create table if not exists public.visitor_sessions (id text primary key, visitor_id text not null, visited_day date not null, visited_month text not null, source text, medium text, campaign text, content text, device_model text, device_kind text, os text, browser text, created_at timestamptz not null default now());
alter table public.visitor_sessions enable row level security;
drop policy if exists "visitor sessions can be created by public form" on public.visitor_sessions;
create policy "visitor sessions can be created by public form" on public.visitor_sessions for insert with check (true);
drop policy if exists "visitor sessions can be counted by public form" on public.visitor_sessions;
create policy "visitor sessions can be counted by public form" on public.visitor_sessions for select to authenticated;

insert into public.funnel_configs (id, data, updated_at) values (1, ${sqlJson(cloudConfig)}, now()) on conflict (id) do update set data = excluded.data, updated_at = excluded.updated_at;
insert into public.funnel_analytics (id, data, updated_at) values (1, ${sqlJson(analytics)}, now()) on conflict (id) do update set data = excluded.data, updated_at = excluded.updated_at;
`;
	const blob = new Blob([sql], { type: "application/sql;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = `supabase-funnel-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.sql`;
	anchor.click();
	URL.revokeObjectURL(url);
}
/**
* Kiểm tra & chuẩn hoá cấu hình tải lên (JSON thuần hoặc file .js đã export).
* Trả về null nếu nội dung không phải một SiteConfig hợp lệ.
*/
function parseImportedConfig(raw) {
	const jsonText = raw.trim().startsWith("{") ? raw : raw.match(/\{[\s\S]*\}/)?.[0] ?? "";
	if (!jsonText) return null;
	try {
		const parsed = JSON.parse(jsonText);
		if (!isRecord(parsed) || !isRecord(parsed["admin"]) || !isRecord(parsed["landing"]) || !isRecord(parsed["tracking"]) || !isRecord(parsed["seo"])) return null;
		return mergeConfig(DEFAULT_CONFIG, parsed);
	} catch {
		return null;
	}
}
function loadLeads() {
	if (!isBrowser()) return [];
	if (loadConfig().admin.storageMode === "database") return [];
	try {
		return JSON.parse(window.localStorage.getItem(LEADS_KEY) || "[]");
	} catch {
		return [];
	}
}
async function loadCloudLeads(config) {
	if (!isBrowser() || config.admin.storageMode !== "database" || !config.admin.supabaseUrl || !config.admin.supabaseAnonKey) return [];
	try {
		const response = await fetch(`${config.admin.supabaseUrl.replace(/\/$/, "")}/rest/v1/leads?select=*&order=created_at.desc&limit=500`, { headers: {
			apikey: config.admin.supabaseAnonKey,
			Authorization: `Bearer ${bearer(config.admin.supabaseAnonKey)}`
		} });
		if (!response.ok) return [];
		return (await response.json()).map((row) => ({
			id: String(row["id"] || ""),
			at: String(row["created_at"] || ""),
			name: String(row["name"] || ""),
			phone: String(row["phone"] || ""),
			email: String(row["email"] || ""),
			city: String(row["city"] || ""),
			major: String(row["major"] || ""),
			aiScore: typeof row["ai_score"] === "number" ? row["ai_score"] : void 0,
			aiRank: String(row["ai_rank"] || ""),
			riskLevel: row["risk_level"],
			riskReasons: row["risk_reasons"],
			recommendedAction: String(row["recommended_action"] || ""),
			behaviorSummary: String(row["behavior_summary"] || ""),
			saleAdvice: String(row["sale_advice"] || ""),
			currentSession: Number(row["current_session"] || 0),
			visitsToday: Number(row["visits_today"] || 0),
			visitsMonth: Number(row["visits_month"] || 0),
			utmSource: String(row["utm_source"] || ""),
			utmMedium: String(row["utm_medium"] || ""),
			variant: String(row["variant"] || ""),
			deviceModel: String(row["device_model"] || ""),
			operatingSystem: String(row["operating_system"] || ""),
			browser: String(row["browser"] || ""),
			storage: "database"
		}));
	} catch {
		return [];
	}
}
function cacheLeadLocally(record) {
	if (!isBrowser()) return;
	try {
		const leads = loadLeads();
		leads.unshift(record);
		window.localStorage.setItem(LEADS_KEY, JSON.stringify(leads.slice(0, 500)));
		window.dispatchEvent(new CustomEvent(LEAD_CREATED_EVENT, { detail: record }));
	} catch {}
}
/** Trùng lặp: cùng số điện thoại đã gửi trong 24 giờ gần nhất. */
function isDuplicateLead(phone) {
	if (loadConfig().admin.storageMode === "database") return false;
	const cutoff = Date.now() - 864e5;
	return loadLeads().some((l) => l.phone === phone && new Date(l.at).getTime() > cutoff);
}
/** Trùng lặp từ xa: kiểm tra Supabase trong Database Mode. */
async function isDuplicateLeadRemote(phone, config) {
	if (!isBrowser() || config?.admin.storageMode !== "database" || !config.admin.supabaseUrl || !config.admin.supabaseAnonKey) return false;
	try {
		const cutoff = (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString();
		const controller = new AbortController();
		const timer = window.setTimeout(() => controller.abort(), REMOTE_DUPLICATE_TIMEOUT_MS);
		const url = `${config.admin.supabaseUrl.replace(/\/$/, "")}/rest/v1/leads?phone=eq.${encodeURIComponent(phone)}&created_at=gte.${cutoff}&select=id`;
		try {
			const res = await fetch(url, {
				headers: {
					apikey: config.admin.supabaseAnonKey,
					Authorization: `Bearer ${bearer(config.admin.supabaseAnonKey)}`
				},
				signal: controller.signal
			});
			if (!res.ok) {
				console.warn(`isDuplicateLeadRemote: Supabase returned ${res.status}`);
				return false;
			}
			const rows = await res.json();
			return Array.isArray(rows) && rows.length > 0;
		} finally {
			window.clearTimeout(timer);
		}
	} catch (err) {
		console.warn("isDuplicateLeadRemote: network error, allowing submit", err.message);
		return false;
	}
}
function clearLeads() {
	if (!isBrowser()) return;
	window.localStorage.removeItem(LEADS_KEY);
}
/**
* Lưu lead vào kho đang hoạt động. Luôn ghi bản sao ở máy để Mini-CRM hiển thị
* ngay; ở Database Mode sẽ đẩy thêm lên bảng `leads` của Supabase.
*/
async function saveLead(lead, config) {
	const mode = config?.admin.storageMode === "database" ? "database" : "local";
	const record = {
		...lead,
		storage: mode
	};
	if (mode === "local") cacheLeadLocally(record);
	if (mode === "database" && config) {
		if (!await pushLeadToSupabase(record, config.admin.supabaseUrl, config.admin.supabaseAnonKey)) record.storage = "local";
	}
	return record;
}
async function pushLeadToSupabase(lead, url, key) {
	const controller = new AbortController();
	const timer = window.setTimeout(() => controller.abort(), REMOTE_LEAD_TIMEOUT_MS);
	try {
		const endpoint = `${url.replace(/\/$/, "")}/rest/v1/leads`;
		const headers = {
			"Content-Type": "application/json",
			apikey: key,
			Authorization: `Bearer ${bearer(key)}`,
			Prefer: "return=minimal"
		};
		const row = {
			name: lead.name,
			phone: lead.phone,
			email: lead.email ?? null,
			city: lead.city ?? null,
			major: lead.major ?? null,
			ai_score: lead.aiScore ?? null,
			ai_rank: lead.aiRank ?? null,
			risk_level: lead.riskLevel ?? null,
			risk_reasons: lead.riskReasons ?? null,
			recommended_action: lead.recommendedAction ?? null,
			behavior_summary: lead.behaviorSummary ?? null,
			sale_advice: lead.saleAdvice ?? null,
			device_tech_info: lead.deviceTechInfo ?? null,
			traffic_ads_source: lead.trafficAdsSource ?? null,
			network_provider: lead.networkProvider ?? null,
			network_label: lead.networkLabel ?? null,
			current_session: lead.currentSession ?? null,
			visits_today: lead.visitsToday ?? null,
			visits_month: lead.visitsMonth ?? null,
			utm_source: lead.utmSource ?? null,
			utm_medium: lead.utmMedium ?? null,
			utm_campaign: lead.utmCampaign ?? null,
			utm_content: lead.utmContent ?? null,
			utm_term: lead.utmTerm ?? null,
			fbclid: lead.fbclid ?? null,
			ttclid: lead.ttclid ?? null,
			gclid: lead.gclid ?? null,
			raw_query: lead.rawQuery ?? null,
			referrer: lead.referrer ?? null,
			attribution_model: lead.attributionModel ?? null,
			attribution_detected_by: lead.attributionDetectedBy ?? null,
			utm_params: lead.utmParams ?? null,
			variant: lead.variant ?? null,
			landing_url: lead.landing_url ?? null,
			device_manufacturer: lead.deviceManufacturer ?? null,
			device_family: lead.deviceFamily ?? null,
			device_model: lead.deviceModel ?? null,
			operating_system: lead.operatingSystem ?? null,
			browser: lead.browser ?? null,
			visitor_behavior_payload: lead.visitorBehaviorPayload ?? null,
			created_at: lead.at
		};
		if ((await relayWebhook({ data: {
			endpoint,
			body: [row],
			headers
		} })).ok) return true;
		const res = await fetch(endpoint, {
			method: "POST",
			headers,
			keepalive: true,
			signal: controller.signal,
			body: JSON.stringify([row])
		});
		if (!res.ok && res.status >= 400 && res.status < 500) {
			const legacy = { ...row };
			delete legacy["utm_term"];
			delete legacy["fbclid"];
			delete legacy["gclid"];
			delete legacy["raw_query"];
			delete legacy["referrer"];
			delete legacy["attribution_model"];
			delete legacy["attribution_detected_by"];
			delete legacy["utm_params"];
			return (await fetch(endpoint, {
				method: "POST",
				headers,
				keepalive: true,
				signal: controller.signal,
				body: JSON.stringify([legacy])
			})).ok;
		}
		return res.ok;
	} catch {
		return false;
	} finally {
		window.clearTimeout(timer);
	}
}
function exportLeadsCsv(leads) {
	if (!isBrowser()) return;
	const headers = [
		"at",
		"name",
		"phone",
		"email",
		"city",
		"major",
		"aiScore",
		"aiRank",
		"riskLevel",
		"riskReasons",
		"recommendedAction",
		"behaviorSummary",
		"saleAdvice",
		"deviceTechInfo",
		"trafficAdsSource",
		"networkProvider",
		"networkLabel",
		"currentSession",
		"visitsToday",
		"visitsMonth",
		"utmSource",
		"utmMedium",
		"utmCampaign",
		"utmContent",
		"ttclid",
		"variant",
		"landing_url",
		"deviceManufacturer",
		"deviceFamily",
		"deviceModel",
		"operatingSystem",
		"browser"
	];
	const rows = leads.map((l) => headers.map((h) => `"${String(l[h] ?? "").replace(/"/g, "\"\"")}"`).join(","));
	const csv = [headers.join(","), ...rows].join("\n");
	const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `leads-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
	a.click();
	URL.revokeObjectURL(url);
}
var cloudAnalyticsState = null;
function emptyAnalytics() {
	return {
		visits: 0,
		leads: 0,
		bySource: {},
		bySourceStats: {},
		byVariant: {}
	};
}
function cleanSource(source) {
	return source.trim().slice(0, 100) || "direct";
}
function normalizeAnalytics(value) {
	const result = emptyAnalytics();
	result.visits = Number.isFinite(value?.visits) ? Math.max(0, Number(value?.visits)) : 0;
	result.leads = Number.isFinite(value?.leads) ? Math.max(0, Number(value?.leads)) : 0;
	for (const [source, count] of Object.entries(value?.bySource || {})) if (Number.isFinite(count)) result.bySource[cleanSource(source)] = Math.max(0, Number(count));
	for (const [source, stats] of Object.entries(value?.bySourceStats || {})) {
		if (!stats) continue;
		result.bySourceStats[cleanSource(source)] = {
			visits: Number.isFinite(stats.visits) ? Math.max(0, Number(stats.visits)) : 0,
			leads: Number.isFinite(stats.leads) ? Math.max(0, Number(stats.leads)) : 0
		};
	}
	for (const [source, visits] of Object.entries(result.bySource)) result.bySourceStats[source] = result.bySourceStats[source] || {
		visits,
		leads: 0
	};
	for (const [variant, stats] of Object.entries(value?.byVariant || {})) {
		if (!stats) continue;
		result.byVariant[variant] = {
			visits: Number.isFinite(stats.visits) ? Math.max(0, Number(stats.visits)) : 0,
			leads: Number.isFinite(stats.leads) ? Math.max(0, Number(stats.leads)) : 0
		};
	}
	return result;
}
function loadAnalytics() {
	if (!isBrowser()) return emptyAnalytics();
	if (loadConfig().admin.storageMode === "database") return cloudAnalyticsState ? structuredClone(cloudAnalyticsState) : emptyAnalytics();
	try {
		return normalizeAnalytics(JSON.parse(window.localStorage.getItem(ANALYTICS_KEY) || "{}"));
	} catch {
		return emptyAnalytics();
	}
}
function saveAnalytics(state) {
	if (!isBrowser()) return;
	const config = loadConfig();
	if (config.admin.storageMode === "database") {
		window.dispatchEvent(new CustomEvent(ANALYTICS_UPDATED_EVENT, { detail: state }));
		syncAnalyticsToSupabase(state, config);
		return;
	}
	window.localStorage.setItem(ANALYTICS_KEY, JSON.stringify(state));
	window.dispatchEvent(new CustomEvent(ANALYTICS_UPDATED_EVENT, { detail: state }));
}
async function syncAnalyticsToSupabase(state, config) {
	try {
		return (await fetch(`${config.admin.supabaseUrl.replace(/\/$/, "")}/rest/v1/rpc/upsert_funnel_analytics`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				apikey: config.admin.supabaseAnonKey,
				Authorization: `Bearer ${bearer(config.admin.supabaseAnonKey)}`
			},
			body: JSON.stringify({ p_data: state })
		})).ok;
	} catch {
		return false;
	}
}
async function loadCloudAnalytics(config) {
	if (!isBrowser() || config.admin.storageMode !== "database" || !config.admin.supabaseUrl || !config.admin.supabaseAnonKey) return null;
	try {
		const response = await fetch(`${config.admin.supabaseUrl.replace(/\/$/, "")}/rest/v1/${CLOUD_ANALYTICS_TABLE}?id=eq.1&select=data`, { headers: {
			apikey: config.admin.supabaseAnonKey,
			Authorization: `Bearer ${bearer(config.admin.supabaseAnonKey)}`
		} });
		if (!response.ok) return null;
		const rows = await response.json();
		if (!Array.isArray(rows) || !isRecord(rows[0])) return null;
		cloudAnalyticsState = normalizeAnalytics(rows[0]["data"]);
		return structuredClone(cloudAnalyticsState);
	} catch {
		return null;
	}
}
function trackVisit(source, variant) {
	const a = loadAnalytics();
	a.visits += 1;
	const normalizedSource = cleanSource(source);
	a.bySource[normalizedSource] = (a.bySource[normalizedSource] || 0) + 1;
	a.bySourceStats[normalizedSource] = a.bySourceStats[normalizedSource] || {
		visits: 0,
		leads: 0
	};
	a.bySourceStats[normalizedSource].visits += 1;
	if (variant) {
		a.byVariant[variant] = a.byVariant[variant] || {
			visits: 0,
			leads: 0
		};
		a.byVariant[variant].visits += 1;
	}
	saveAnalytics(a);
}
function trackConversion(source, variant) {
	const a = loadAnalytics();
	a.leads += 1;
	const normalizedSource = cleanSource(source);
	a.bySource[normalizedSource] = a.bySource[normalizedSource] || 0;
	a.bySourceStats[normalizedSource] = a.bySourceStats[normalizedSource] || {
		visits: 0,
		leads: 0
	};
	a.bySourceStats[normalizedSource].leads += 1;
	if (variant) {
		a.byVariant[variant] = a.byVariant[variant] || {
			visits: 0,
			leads: 0
		};
		a.byVariant[variant].leads += 1;
	}
	saveAnalytics(a);
}
function clearAnalytics() {
	if (!isBrowser()) return;
	if (loadConfig().admin.storageMode === "database") return;
	window.localStorage.removeItem(ANALYTICS_KEY);
	window.dispatchEvent(new CustomEvent(ANALYTICS_UPDATED_EVENT, { detail: emptyAnalytics() }));
}
/** Ghi config vào bảng `site_config` (id=1) qua Supabase REST. Best-effort. */
async function syncConfigToSupabase(config) {
	const controller = new AbortController();
	const timer = window.setTimeout(() => controller.abort(), 5e3);
	try {
		const { supabaseUrl, supabaseAnonKey } = config.admin;
		const cloudConfig = structuredClone(config);
		cloudConfig.admin.supabaseAnonKey = "";
		cloudConfig.admin.backupCronToken = "";
		cloudConfig.emailAutomation.resendApiKey = "";
		cloudConfig.emailAutomation.gmailClientId = "";
		cloudConfig.emailAutomation.gmailClientSecret = "";
		cloudConfig.emailAutomation.gmailRefreshToken = "";
		cloudConfig.tracking.tiktokAccessToken = "";
		const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/${CLOUD_CONFIG_TABLE}?on_conflict=id`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Prefer: "resolution=merge-duplicates",
				apikey: supabaseAnonKey,
				Authorization: `Bearer ${bearer(supabaseAnonKey)}`
			},
			body: JSON.stringify([{
				id: 1,
				data: cloudConfig,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			}]),
			signal: controller.signal
		});
		if (!response.ok) console.warn(`Supabase config sync failed [${response.status}]`);
		return response.ok;
	} catch (err) {
		console.warn("Supabase config sync failed:", err.message);
		return false;
	} finally {
		window.clearTimeout(timer);
	}
}
/** Đẩy config và các lead LocalStorage lên Supabase, không xóa dữ liệu local. */
async function migrateLocalDataToSupabase(config) {
	const result = {
		configSynced: false,
		analyticsSynced: false,
		leadsFound: 0,
		leadsUploaded: 0,
		leadsSkipped: 0,
		leadsFailed: 0
	};
	if (!isBrowser() || config.admin.storageMode !== "database" || !config.admin.supabaseUrl || !config.admin.supabaseAnonKey) return result;
	result.configSynced = (await fetch(`${config.admin.supabaseUrl.replace(/\/$/, "")}/rest/v1/${CLOUD_CONFIG_TABLE}?on_conflict=id`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Prefer: "resolution=merge-duplicates,return=minimal",
			apikey: config.admin.supabaseAnonKey,
			Authorization: `Bearer ${bearer(config.admin.supabaseAnonKey)}`
		},
		body: JSON.stringify([{
			id: 1,
			data: (() => {
				const cloudConfig = structuredClone(config);
				cloudConfig.admin.supabaseAnonKey = "";
				cloudConfig.admin.backupCronToken = "";
				cloudConfig.emailAutomation.resendApiKey = "";
				cloudConfig.emailAutomation.gmailClientId = "";
				cloudConfig.emailAutomation.gmailClientSecret = "";
				cloudConfig.emailAutomation.gmailRefreshToken = "";
				cloudConfig.tracking.tiktokAccessToken = "";
				return cloudConfig;
			})(),
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}])
	})).ok;
	result.analyticsSynced = await syncAnalyticsToSupabase(loadAnalytics(), config);
	const migrated = /* @__PURE__ */ new Set();
	try {
		const raw = window.localStorage.getItem(LOCAL_MIGRATION_KEY);
		for (const id of raw ? JSON.parse(raw) : []) if (typeof id === "string") migrated.add(id);
	} catch {}
	const leads = loadLeads();
	result.leadsFound = leads.length;
	for (const lead of leads) {
		if (migrated.has(lead.id)) {
			result.leadsSkipped += 1;
			continue;
		}
		if (await pushLeadToSupabase(lead, config.admin.supabaseUrl, config.admin.supabaseAnonKey)) {
			migrated.add(lead.id);
			result.leadsUploaded += 1;
		} else result.leadsFailed += 1;
	}
	try {
		window.localStorage.setItem(LOCAL_MIGRATION_KEY, JSON.stringify([...migrated].slice(-1e3)));
	} catch {}
	return result;
}
async function testSupabaseConnection(url, key) {
	const normalizedUrl = url.trim().replace(/\/$/, "");
	const normalizedKey = key.trim();
	if (!/^https:\/\/[^/]+\.supabase\.co$/i.test(normalizedUrl)) return {
		ok: false,
		reason: "invalid_url"
	};
	if (!normalizedKey) return {
		ok: false,
		reason: "unauthorized"
	};
	try {
		const res = await fetch(`${normalizedUrl}/rest/v1/${CLOUD_CONFIG_TABLE}?select=id&limit=1`, { headers: {
			apikey: normalizedKey,
			Authorization: `Bearer ${bearer(normalizedKey)}`
		} });
		if (res.ok) return {
			ok: true,
			schemaReady: true
		};
		if (res.status === 404) {
			if ((await res.text().catch(() => "")).includes("PGRST205")) return {
				ok: true,
				schemaReady: false,
				reason: "missing_schema"
			};
		}
		if (res.status === 401 || res.status === 403) return {
			ok: false,
			reason: "unauthorized"
		};
		return {
			ok: false,
			reason: "network"
		};
	} catch {
		return {
			ok: false,
			reason: "network"
		};
	}
}
var SiteConfigContext = (0, import_react.createContext)(null);
function SiteConfigProvider({ children }) {
	const [config, setConfig] = (0, import_react.useState)(DEFAULT_CONFIG);
	const [dirty, setDirty] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const localConfig = loadConfig();
		setConfig(localConfig);
		loadCloudConfig(localConfig).then((cloudConfig) => {
			if (cloudConfig) setConfig(cloudConfig);
		}).finally(() => setReady(true));
	}, []);
	const update = (0, import_react.useCallback)((patch) => {
		setConfig((prev) => {
			const draft = structuredClone(prev);
			patch(draft);
			return draft;
		});
		setDirty(true);
	}, []);
	const save = (0, import_react.useCallback)(async () => {
		const saved = await saveConfig(config);
		if (saved) setDirty(false);
		return saved;
	}, [config]);
	const reset = (0, import_react.useCallback)(() => {
		setConfig(resetConfig());
		setDirty(false);
	}, []);
	const resetLanding = (0, import_react.useCallback)(() => {
		setConfig((current) => ({
			...current,
			landing: structuredClone(DEFAULT_CONFIG.landing)
		}));
		setDirty(true);
	}, []);
	const exportFile = (0, import_react.useCallback)(() => {
		setConfig((current) => {
			exportConfigFile(current);
			return current;
		});
	}, []);
	const importConfig = (0, import_react.useCallback)((raw) => {
		const parsed = parseImportedConfig(raw);
		if (!parsed) return false;
		saveConfig(parsed);
		setConfig(parsed);
		setDirty(false);
		return true;
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		config,
		update,
		save,
		reset,
		resetLanding,
		exportFile,
		importConfig,
		dirty,
		ready
	}), [
		config,
		update,
		save,
		reset,
		resetLanding,
		exportFile,
		importConfig,
		dirty,
		ready
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteConfigContext.Provider, {
		value,
		children
	});
}
function useSiteConfig() {
	const ctx = (0, import_react.useContext)(SiteConfigContext);
	if (!ctx) throw new Error("useSiteConfig must be used within SiteConfigProvider");
	return ctx;
}
//#endregion
export { signInWithSupabase as C, useSiteConfig as D, trackVisit as E, saveLead as S, trackConversion as T, loadCloudLeads as _, clearAnalytics as a, relayWebhook as b, createSsrRpc as c, exportSupabaseSql as d, getSupabaseAccessToken as f, loadCloudAnalytics as g, loadAnalytics as h, SiteConfigProvider as i, exportConfigFile as l, isDuplicateLeadRemote as m, DEFAULT_CONFIG as n, clearLeads as o, isDuplicateLead as p, LEAD_CREATED_EVENT as r, clearSupabaseAccessToken as s, ANALYTICS_UPDATED_EVENT as t, exportLeadsCsv as u, loadLeads as v, testSupabaseConnection as w, saveConfigWithCredentials as x, migrateLocalDataToSupabase as y };
