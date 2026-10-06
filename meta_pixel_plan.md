# Plan tích hợp Meta Pixel — `tram-huong-chu-bo-doi`

## 1. Phân tích source hiện tại

| Hạng mục | Hiện trạng |
|---|---|
| Framework | Next.js `^16.2.4` (App Router), React 19, deploy Vercel (v0) |
| Routing | Chỉ có [app/[locale]/layout.tsx](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/app/%5Blocale%5D/layout.tsx) làm root layout; i18n `vi / en / zh` qua [proxy.ts](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/proxy.ts) |
| Tracking hiện có | GA4 `G-592NV8D2JQ` (script thô trong `<head>`), AdSense, Vercel Analytics. **Chưa có hàm `track()` dùng chung, chưa có event nào** |
| Env | Chưa có `.env*`; ID được hard-code |
| CSP | Không có trong [next.config.mjs](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/next.config.mjs) → không cần whitelist thêm domain |
| Giỏ hàng / Checkout | **Không có.** Khách đặt hàng qua Messenger / Zalo / gọi điện |
| Dữ liệu sản phẩm | [data/products.json](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/data/products.json): `id`, `sku`, `name{vi,en,zh}`, `originalPrice`, `salePrice?`, `categorySlug` (VND) |

### Các điểm chuyển đổi (conversion) tìm được

| Điểm chạm | File | Hành vi |
|---|---|---|
| Xem chi tiết sản phẩm | [product-detail-client.tsx](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/components/product/product-detail-client.tsx) | Render client |
| Nút "Đặt hàng qua Messenger" (kèm SL, giá) | `product-detail-client.tsx` L305 | Link `m.me` / `fb-messenger://` |
| Hotline trên trang sản phẩm | `product-detail-client.tsx` L359 | `tel:` |
| Yêu thích (wishlist) | [product-card.tsx](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/components/product-card.tsx) L90, `product-detail-client.tsx` L95 | `toggleWishlist` |
| Gửi wishlist qua Messenger | [wishlist-drawer.tsx](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/components/wishlist-drawer.tsx) L142 | Link `m.me` |
| Nút nổi Gọi / Messenger / Zalo | [contact-buttons.tsx](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/components/contact-buttons.tsx) | Toàn site |
| Hotline header (desktop + mobile) | [header.tsx](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/components/header.tsx) L236, L384 | `tel:` |
| Tìm kiếm sản phẩm | `header.tsx` (live search + click kết quả) | Client-side |
| Form liên hệ | [contact-page-client.tsx](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/components/contact/contact-page-client.tsx) L44 | **Giả lập** (setTimeout, không gửi đi đâu) |
| Đăng ký bản tin | [footer.tsx](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/components/footer.tsx) L35 | Mở `mailto:` |
| Popup livestream "Theo dõi" | [live-stream-popup.tsx](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/components/live-stream-popup.tsx) L45 | Mở fanpage |

> [!WARNING]
> Vấn đề cần lưu ý:
> - **SPA navigation**: `fbevents.js` mặc định tự bắn `PageView` khi `history.pushState` → dễ bị **đếm trùng** nếu ta cũng bắn thủ công. Sẽ đặt `fbq.disablePushState = true` và tự bắn qua `usePathname`.
> - **Deep link mobile** `fb-messenger://` rời trang ngay → event có thể mất. Gọi `fbq` đồng bộ trong `onClick` trước khi điều hướng; CAPI (Phase 3) giúp tăng độ tin cậy.
> - `next.config.mjs` đang để `ignoreBuildErrors: true` → lỗi type tracking sẽ không chặn build; sẽ chạy `tsc --noEmit` thủ công để kiểm tra.

---

## 2. Event mapping đề xuất

| Meta event | Kích hoạt khi | Params |
|---|---|---|
| `PageView` | Load lần đầu + mỗi lần đổi route | — |
| `ViewContent` | Mount trang chi tiết sản phẩm | `content_ids:[sku]`, `content_type:'product'`, `content_name`, `content_category`, `value`, `currency:'VND'` |
| `AddToWishlist` | Toggle **thêm** wishlist (card + detail) | như trên |
| `InitiateCheckout` | Click "Đặt hàng qua Messenger" (detail) & "Gửi wishlist" (drawer) | `content_ids`, `num_items`, `value = giá × SL`, `currency` |
| `Contact` | Click `tel:` / Zalo / Messenger chung | `{ method: 'phone' \| 'zalo' \| 'messenger', placement }` |
| `Search` | Submit hoặc click kết quả tìm kiếm (debounce) | `search_string`, `content_ids` |
| `Lead` | Gửi form liên hệ / đăng ký bản tin | `{ form: 'contact' \| 'newsletter' }` — **không gửi PII** |
| `trackCustom('FollowFanpage')` | Click "Theo dõi" ở popup livestream | — |
| `trackCustom('ViewCategory')` *(tuỳ chọn)* | Mount trang danh mục | `content_category` |

> [!NOTE]
> Dùng `sku` làm `content_ids` để sau này khớp với **Meta Catalog** (Dynamic Product Ads / Advantage+ Catalog). Nếu đã có catalog dùng `id`, cần thống nhất lại.

---

## 3. Kiến trúc

```
lib/analytics/
  meta-pixel.ts        # fbq typing, pageview(), track(), trackCustom(), guard SSR/no-ID
  events.ts            # track helpers nghiệp vụ: trackViewContent(product), trackContact(method, placement)...
                       # → gọi đồng thời Meta Pixel + GA4 gtag (1 nơi duy nhất)
components/analytics/
  meta-pixel.tsx       # 'use client': <Script id="meta-pixel" strategy="afterInteractive"> + <noscript> img
                       # + listener usePathname/useSearchParams bắn PageView (bọc <Suspense>)
```

- Pixel ID qua `NEXT_PUBLIC_META_PIXEL_ID`; chỉ render khi có ID **và** `VERCEL_ENV === 'production'` (preview/dev không bắn, hoặc bật qua flag `NEXT_PUBLIC_META_PIXEL_DEBUG`).
- Mount `<MetaPixel />` trong `app/[locale]/layout.tsx` (body, cạnh `<Analytics />`).
- Mọi component chỉ import từ `lib/analytics/events.ts` — không gọi `window.fbq` rải rác.
- Tiện thể chuyển GA4 sang `next/script` + env `NEXT_PUBLIC_GA_ID` *(tuỳ chọn, không bắt buộc)*.

---

## 4. Các phase triển khai

### Phase 1 — Base Pixel + PageView
1. Tạo `.env.example` với `NEXT_PUBLIC_META_PIXEL_ID`, thêm vào Vercel env (Production).
2. Tạo `lib/analytics/meta-pixel.ts` + `components/analytics/meta-pixel.tsx`.
3. Mount vào layout; `fbq.disablePushState = true`; tự bắn `PageView` khi đổi route.
- ✅ Kiểm tra: Meta Pixel Helper báo đúng 1 `PageView` mỗi lần đổi trang (không trùng); build pass.

### Phase 2 — Standard events
1. `ViewContent` trong `product-detail-client.tsx` (useEffect theo `product.id`).
2. `InitiateCheckout` cho nút Messenger (detail + wishlist drawer).
3. `AddToWishlist` trong `product-card.tsx` & `product-detail-client.tsx` (chỉ khi thêm).
4. `Contact` cho `contact-buttons.tsx`, `header.tsx`, hotline trang sản phẩm & trang liên hệ.
5. `Search` trong `header.tsx`; `Lead` cho footer newsletter + form liên hệ; `FollowFanpage` cho popup.
- ✅ Kiểm tra: Events Manager → **Test Events** thấy đủ event với params đúng (value VND, content_ids = sku).

### Phase 3 — Conversions API (khuyến nghị, tuỳ chọn)
1. Route handler `app/api/meta/events/route.ts` (Node runtime) gửi Graph API `/{PIXEL_ID}/events` với `META_CAPI_ACCESS_TOKEN` (server-only env).
2. Client tạo `event_id` (UUID) → gửi cho cả `fbq(..., { eventID })` và CAPI để **dedup**.
3. Gửi `client_ip_address`, `client_user_agent`, `fbp`/`fbc` cookie, `event_source_url`; validate bằng zod, rate-limit nhẹ, **không log PII**.
4. `proxy.ts` đã loại trừ `/api` → không bị redirect locale.
- ✅ Kiểm tra: Events Manager hiển thị "Browser & Server", deduplication OK, Event Match Quality hợp lý.

### Phase 4 — Consent & hoàn thiện (tuỳ chọn)
- Banner đồng ý cookie (Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân): `fbq('consent','revoke')` mặc định → `grant` khi đồng ý.
- Cập nhật [chinh-sach-bao-mat](file:///Users/longnguyen/Documents/home/home/tram-huong/tram-huong-chu-bo-doi/app/%5Blocale%5D/chinh-sach-bao-mat/page.tsx) đề cập Meta Pixel.
- Đồng bộ Meta Catalog từ `products.json` (feed `/api/catalog.csv`) nếu chạy quảng cáo động.

---

## 5. Câu hỏi cần bạn xác nhận

1. **Pixel ID** (và Access Token nếu làm CAPI)?
2. Phạm vi lần này: chỉ **Phase 1 + 2**, hay làm luôn **CAPI (Phase 3)**?
3. Có cần **banner đồng ý cookie** ngay không, hay bắn Pixel mặc định?
4. Nút "Đặt hàng qua Messenger" map thành `InitiateCheckout` (đề xuất) hay `Lead` / `Purchase`? (Không nên dùng `Purchase` vì chưa chắc chắn đơn đã chốt.)
5. Có muốn gộp luôn GA4 vào cùng helper `events.ts` để track song song không?
