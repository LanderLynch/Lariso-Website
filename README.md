# Lariso — Keripik Tempe Sagu

Landing page untuk brand **Lariso**, produk keripik tempe sagu yang sudah berdiri sejak 1996.

Website ini awalnya di-clone dari template Webflow **More Nutrition** (produk matcha latte), lalu di-rebranding total menjadi Lariso: warna, logo, copywriting, gambar produk, dan metode pembayaran semuanya sudah diganti.

---

## 🚀 Cara Menjalankan (Localhost)

Project ini website statis (HTML + CSS + JS), jadi tinggal di-serve lewat server lokal.

```bash
cd "C:\Users\Jona\Documents\GitHub\Lariso Website"

# Opsi 1: pakai npx serve
npx serve .

# Opsi 2: pakai Node http-server
npx http-server .

# Opsi 3: server Node sederhana
node server.js
```

Lalu buka `http://localhost:8080` di browser.

> **Penting:** Jangan buka `index.html` langsung via `file://`. Beberapa browser memblokir fetch file lokal (canvas animation & video), jadi harus lewat server lokal.

---

## 📁 Struktur Folder

```
Lariso Website/
├── index.html                  # Halaman utama (semua markup)
├── assets/
│   ├── *.css                   # Stylesheet (Webflow shared + custom)
│   ├── *.js                    # GSAP, jQuery, app.js (animasi/scroll)
│   ├── *.svg                   # Icon, logo, dekorasi
│   ├── *.webp / *.png          # Gambar produk & background
│   ├── *.woff2                 # Font "Founders Grotesk Condensed"
│   ├── *.mp4                   # Video testimoni
│   ├── img/                    # 223 frame animasi canvas (seq_0_*.webp, seq_1_*.webp)
│   ├── lariso-package/         # Gambar produk Lariso (4 varian + mockup)
│   └── payment/                # Logo metode pembayaran (SVG)
```

---

## 🎨 Identitas Brand (Brand Guideline)

Berdasarkan guideline resmi Lariso:

### Warna

| Nama | Hex | RGB | Keterangan |
|------|-----|-----|------------|
| Red | `#c14d26` | (193, 77, 38) | Warna utama/aksen |
| Plum | `#5e1d27` | (99, 36, 44) | Warna gelap/teks |
| Cream | `#f9f4e7` | (249, 244, 231) | Background |

> Warna cream ditambahkan saat rebranding sebagai background pengganti hijau template asli.

### Font

- **Johnson Black Regular** (by BBA Key) — font utama logo & brand (belum di-embed di web, masih pakai fallback).
- **Founders Grotesk Condensed** — font yang dipakai template untuk body/heading (sudah di-embed via `.woff2`).

### Logo

- Logo utama: tulisan **"Lariso"** (script) + tagline **"sejak 1996"** + ilustrasi chef.
- Aturan: logo & simbol harus dipakai bersama, tidak boleh dipisah.
- Logo tidak boleh dibuat putih (kecuali versi "inverted" di background merah).

---

## 🔄 Yang Sudah Dikerjakan (Changelog)

1. **Clone website** — Download semua asset dari `more-nutrition.webflow.io` (HTML, CSS, JS, gambar, font, video, 223 frame animasi canvas).
2. **Hapus watermark Webflow** — badge "Made in Webflow" di pojok kanan bawah sudah dihilangkan (via CSS `display:none` + ubah `data-wf-domain`).
3. **Rebrand warna** — hijau template diganti ke palette Lariso (cream + red + plum).
4. **Rebrand konten** — title, meta description, hero, heading section, copywriting diterjemahkan ke Bahasa Indonesia dan disesuaikan ke produk keripik tempe sagu.
5. **Ganti logo** — logo "More" (lottie animation) diganti teks logo "Lariso" (lottie asli tetap di-keep tersembunyi supaya script tidak crash).
6. **Ganti gambar produk** — gambar matcha diganti 4 varian Lariso:
   - Balado Pedas
   - Jagung Bakar
   - Keju Gurih
   - Telur Asin
7. **Ganti metode pembayaran** — logo kartu internasional (Amex, Mastercard, PayPal, Apple Pay, Google Pay, Visa, Klarna) diganti 5 metode lokal:
   - Dana
   - GoPay
   - ShopeePay
   - OVO
   - BCA
8. **Hapus badge pengiriman** — "3-5 Days Delivery" dan "Free Shipping over £40" dihapus.
9. **Perbaiki aksesibilitas warna** — teks plum di atas background merah diganti putih (hero paragraph & statement card), subline produk di atas cream diganti plum agar kontrasnya lolos WCAG.
10. **Perbaiki posisi logo** — logo Lariso di tabel perbandingan benefits sekarang sejajar (bottom-aligned) dengan teks "Keripik Biasa".
11. **Tambah popup Changelog** — di footer dekat "Site Credits" ada tombol "Changelog" yang memunculkan popup animasi berisi riwayat perubahan (scrollable), otomatis tertutup saat klik di luar box.

---

## 💳 Metode Pembayaran

Logo SVG resmi diambil dari library open-source [idn-finlogos](https://github.com/hafidznoor/idn-finlogos), disimpan lokal di `assets/payment/`.

| Metode | File | Ukuran tampilan |
|--------|------|-----------------|
| Dana | `dana.svg` | 6.2em |
| GoPay | `gopay.svg` | 7em |
| ShopeePay | `shopeepay.svg` | 5.6em |
| OVO | `ovo.svg` | 4.2em (persegi) |
| BCA | `bca.svg` | 6.4em |

> Ukuran diatur per-logo di CSS (class `is-dana`, `is-gopay`, dst.) karena rasio aspek tiap logo berbeda (OVO persegi, sisanya wide).

---

## ⚠️ Catatan Penting

- **Link produk & sosial media** (Instagram, TikTok, YouTube, tombol "Buy now", footer links) masih menunjuk ke domain **morenutrition.co.uk** — belum diganti karena belum ada URL resmi Lariso. Tinggal replace kalau sudah ada.
- **File logo Lariso** yang sebenarnya (PNG/SVG logo script + chef) belum di-embed; saat ini pakai teks logo. Kalau ada file logo aslinya, bisa drop ke `assets/lariso-package/` dan direferensikan.
- **Font Johnson Black Regular** belum di-embed (format aslinya di folder `lariso-project` sebagai `.zip`). Web masih pakai font fallback template.

---

## 🛠️ Teknologi

- **HTML/CSS/JS** statis
- **GSAP** (ScrollTrigger, SplitText, CustomEase, DrawSVGPlugin, InertiaPlugin) — animasi scroll
- **Swiper** — slider produk
- **Lottie** — animasi logo
- **Lenis** — smooth scroll

---

## 📝 Sumber Logo

- [idn-finlogos — Indonesian fintech logos](https://github.com/hafidznoor/idn-finlogos)
