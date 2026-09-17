# Hướng dẫn triển khai (Deploy Guide)

Landing page "Du học nghề Trung Quốc" + hệ thống Admin Funnel Builder.
Dự án dùng **TanStack Start (React + Vite)**. Có 2 cách chạy:

- **A. Vercel (khuyến nghị)** — chạy full SSR + Server Function (email tự động).
- **B. Hosting tĩnh (cPanel / DirectAdmin / VPS Nginx)** — chạy bản build tĩnh; email tự động qua Server Function sẽ không hoạt động (thay bằng webhook).

---

## 0. Yêu cầu

- Node.js 18+ và npm.
- Tài khoản Supabase Cloud và biến môi trường `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.
- (Tùy chọn) Khóa Resend `RESEND_API_KEY` nếu muốn gửi email tự động.

Cài dependency và chạy thử local:

```bash
npm install
npm run dev      # xem thử tại http://localhost:3000
npm run build    # tạo bản build production
```

---

## A. Deploy lên Vercel

1. Push code lên GitHub (v0 đã đồng bộ sẵn repo này).
2. Vào Vercel → **New Project** → chọn repo → framework tự nhận **TanStack Start**.
3. Thêm biến môi trường (Project → Settings → Environment Variables):
   - `RESEND_API_KEY` — nếu bật Auto Email.
   - `VITE_SUPABASE_URL` — URL public của project Supabase.
   - `VITE_SUPABASE_ANON_KEY` — publishable/anon key, không dùng service role key.
   - `VITE_SUPABASE_ADMIN_EMAIL` — email của user quản trị đã tạo trong Supabase Auth.
4. Bấm **Deploy**. Xong.

> Form lead, CRM cloud và webhook relay cần deployment có SSR như Vercel.
> Không dùng bản static cho production nếu cần nhận lead tập trung.

Ưu điểm: Server Function `sendLeadEmail` chạy được, không lộ API key ra trình duyệt.

---

## B. Deploy bản tĩnh lên cPanel / DirectAdmin / VPS Nginx

> Lưu ý: bản tĩnh **không** chạy được Server Function gửi email, relay webhook
> hoặc relay CRM. In-app browser có thể chặn request trực tiếp tới webhook.
> Khuyến nghị dùng Vercel SSR cho production.

1. Build:

   ```bash
   npm run build
   ```

   Thư mục kết quả nằm ở `dist/` (hoặc `.output/public` tùy cấu hình — kiểm tra log build).

2. **cPanel / DirectAdmin:**
   - Mở **File Manager** → vào `public_html`.
   - Upload toàn bộ nội dung thư mục build.
   - File `public/.htaccess` đã kèm sẵn: ép HTTPS, SPA rewrite, Gzip, cache, security headers.

3. **VPS Nginx:** thêm block sau (thay `root` bằng đường dẫn thật):
   ```nginx
   server {
     listen 80;
     server_name duhoctq.example.com;
     root /var/www/duhoctq;
     index index.html;

     # SPA fallback
     location / {
       try_files $uri $uri/ /index.html;
     }

     # Cache tài nguyên tĩnh
     location ~* \.(css|js|webp|png|jpe?g|svg|woff2)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
     }
   }
   ```
   Sau đó cài SSL bằng `certbot --nginx`.

---

## C. Kết nối Supabase Cloud (Database Mode)

Dùng để cấu hình, lead và analytics đồng bộ nhiều thiết bị. Database Mode không ghi dữ liệu nghiệp vụ vào localStorage.

1. Tạo project tại [supabase.com](https://supabase.com).
2. Trong SQL Editor, chạy `supabase/funnel_configs.sql` và `supabase/visitor_tracking.sql`.
   Nếu cần nhập tay, tối thiểu tạo các bảng `funnel_configs`, `leads`, `visitor_sessions`
   với các cột tracking/CRM tương ứng để Database Mode lưu được lead + phiên truy cập.
3. Tạo user quản trị trong Supabase Auth, bật RLS và chạy đúng policy trong SQL ở trên. Các thao tác quản trị cấu hình/analytics phải chạy bằng Supabase Auth (`authenticated`); không mở lại policy ghi cho `anon`.
4. Cấu hình `VITE_SUPABASE_URL` và `VITE_SUPABASE_ANON_KEY` trong môi trường build rồi deploy lại. Không lưu service role key ở frontend.

---

## D. Cloud Cron-job (sao lưu định kỳ)

Admin hỗ trợ lịch backup (`daily` / `weekly` / `off`) trong mục **📂 Cloud Cron & Backup**.
Với Vercel, endpoint `/api/backup` đã được cấu hình trong `vercel.json` và được gọi hằng ngày lúc 02:00 UTC. Endpoint tự kiểm tra `cronSchedule`; lịch `weekly` chỉ gửi vào thứ Hai.

Thêm các biến môi trường Production trên Vercel:

- `SUPABASE_URL` — URL project Supabase.
- `SUPABASE_SERVICE_ROLE_KEY` — chỉ đặt trên server, không đưa vào frontend.
- `RESEND_API_KEY` — API key Resend.
- `BACKUP_FROM_EMAIL` — email đã xác minh trên Resend.
- `BACKUP_CRON_TOKEN` — tùy chọn, dùng khi gọi thủ công ngoài Vercel Cron.

Sau đó nhập email nhận backup trong Admin, chọn `daily` hoặc `weekly`, bấm **LƯU THAY ĐỔI**, rồi deploy lại.

Gọi thủ công để kiểm tra:

```bash
curl -i "https://tqv10.vercel.app/api/backup?token=$BACKUP_CRON_TOKEN"
```

Phải nhận HTTP `200 Backup sent`. Nếu nhận `503`, kiểm tra đủ biến môi trường; nếu `401`, kiểm tra token hoặc gọi từ Vercel Cron.

---

## E. Checklist sau khi deploy

- [ ] Trang chủ mở được qua HTTPS.
- [ ] Gửi thử form → kiểm tra lead xuất hiện trong **Admin → 📋 Quản Lý Lead**.
- [ ] Webhook (Make/Telegram/Sheets) nhận được dữ liệu.
- [ ] Pixel Facebook/TikTok/GA4 bắn sự kiện `PageView` và `Lead`.
- [ ] Đổi mật khẩu & đường dẫn Admin (mục **🔑 Đổi Link Admin**) khỏi giá trị mặc định.
- [ ] Cập nhật `public/sitemap.xml` và `public/robots.txt` theo domain thật.
