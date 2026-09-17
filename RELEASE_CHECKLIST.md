# Release checklist

Checklist này dùng cho mỗi lần phát hành landing page và admin funnel.

## 1. Trước khi phát hành

- [ ] Xác nhận branch và diff chỉ chứa thay đổi dự kiến: `git status`.
- [ ] Không có `.env`, secret, service-role key, backup dữ liệu hoặc lead thật.
- [ ] Nội dung, số điện thoại, link liên hệ, domain và CTA đã được kiểm tra.
- [ ] Biến môi trường production đã có trong Vercel; `VITE_*` trỏ đúng Supabase.
- [ ] Schema/RLS Supabase đã được áp dụng nếu release có thay đổi dữ liệu.

## 2. Kiểm tra local

```bash
npm ci
npm run lint
npm run build
npx playwright test
```

- [ ] Landing page mở được ở `/`.
- [ ] Form tạo lead thành công và có UTM nếu chạy với Supabase.
- [ ] `/admin` đăng nhập được bằng tài khoản Auth đã bật trong `admin_users`.
- [ ] Admin đọc được lead, lưu cấu hình và analytics không trả về 401/403.
- [ ] Kiểm tra responsive trên mobile và desktop.

## 3. Phát hành

- [ ] Deploy lên Vercel hoặc môi trường SSR tương thích.
- [ ] Redeploy sau khi thêm hoặc đổi environment variables.
- [ ] Kiểm tra production `/`, `/admin`, form lead và webhook/email.
- [ ] Kiểm tra cron backup nếu tính năng backup được bật.
- [ ] Kiểm tra domain, HTTPS, `robots.txt`, sitemap và các header bảo mật.

## 4. Sau phát hành

- [ ] Xem log deploy và server function, không có lỗi mới.
- [ ] Xác nhận lead thử nghiệm đã được xử lý/xóa theo quy trình dữ liệu.
- [ ] Ghi lại commit, thời điểm deploy và thay đổi schema nếu có.
- [ ] Chỉ giữ mã nguồn, tài liệu và migration trong Git; không commit `.output/`,
  `.wrangler/`, `dist/`, `test-results/` hoặc file nén release.
