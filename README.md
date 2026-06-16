# Blazing Burger — Premium Restaurant Website

A world-class, premium restaurant website for **Blazing Burger** in Debrecen, Hungary.

Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, and React i18next.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run preview
```

---

## Asset Setup

The website uses a placeholder system for customer-provided assets. Follow these steps before launch.

### Restaurant Logo

Place your logo here:

```
public/assets/logo.png
```

- **Format:** PNG (transparent or dark background)
- **Recommended:** Square, at least 256×256px
- The site auto-trims excess padding and scales for navbar/footer
- If missing, an elegant text placeholder is shown

### Menu Images

Place menu photos here:

```
public/assets/menu/
```

**Example:**

```
public/assets/menu/menu-1.jpg
public/assets/menu/menu-2.jpg
public/assets/menu/menu-3.jpg
```

- **Naming:** `menu-1.jpg`, `menu-2.jpg`, … up to `menu-30`
- **Formats:** `.jpg`, `.jpeg`, `.png`, `.webp`
- Images are **automatically detected** at runtime — no code changes needed
- If no images exist, an elegant placeholder message is displayed

### Gallery Images

Place food photos and promotional graphics here:

```
public/assets/gallery/
```

**Example:**

```
public/assets/gallery/gallery-01.jpg
public/assets/gallery/gallery-02.jpg
```

- **Naming:** `gallery-1.jpg` or `gallery-01.jpg` (both work)
- Food photos, deals, and promo graphics are all supported
- Images are auto-detected and shown in the Gallery page

### Facebook Photos

The site links to your [Facebook photos page](https://www.facebook.com/blazingburgerdebrecen/photos) from the Gallery and Contact pages.

**Automatic Facebook sync is not included** — Facebook requires the Meta Graph API with a Page Access Token. To add new Facebook photos to the site:

1. Download photos from your Facebook page
2. Save them to `public/assets/gallery/` as `gallery-19.jpg`, etc.
3. They will appear automatically — no code changes needed

---

## Features

- **5 pages:** Home, Menu, About, Gallery, Contact
- **Bilingual:** Hungarian (default) + English with smooth switching
- **Premium design:** Fire-inspired palette, cinematic hero, scroll animations
- **Menu lightbox:** Zoom viewer with keyboard navigation
- **Gallery:** Masonry layout with lightbox
- **SEO:** Meta tags, Open Graph, structured Restaurant schema
- **Performance:** Code splitting, lazy loading, optimized bundle
- **Accessibility:** Skip link, ARIA labels, keyboard navigation, reduced motion support

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| React Router | Client-side routing |
| React i18next | Internationalization |
| React Helmet Async | SEO meta tags |

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout
│   ├── sections/     # Home page sections
│   └── ui/           # Reusable UI components
├── config/           # Site configuration
├── hooks/            # Custom React hooks
├── i18n/             # i18next setup
├── lib/              # Utilities
├── locales/
│   ├── hu/           # Hungarian translations
│   └── en/           # English translations
└── pages/            # Route pages
```

---

## Languages

- **Hungarian (hu)** — Default
- **English (en)**

All content is stored in translation files. No hardcoded text.

Language preference is saved in `localStorage` and persists across visits.

---

## Business Information

| Field | Value |
|---|---|
| Name | Blazing Burger |
| Address | Köntösgát sor 3, 4031 Debrecen, Hungary |
| Phone | +36 20 501 5736 |
| Rating | 4.9/5 (499+ reviews) |
| Price Range | Ft 2,000–4,000 |

---

## Customization

### Site Config

Edit `src/config/site.ts` for:
- Contact details
- Opening hours
- Google Maps embed URL
- Unsplash placeholder images
- Social media links

### Translations

Edit files in `src/locales/hu/` and `src/locales/en/`.

### Colors

Brand colors are defined in `src/index.css` under `@theme`:
- Primary: `#FF5A1F`
- Secondary: `#F59E0B`
- Dark: `#0B0B0B`
- Surface: `#121212`
- Accent: `#FFE082`

---

## SEO

- Per-page meta titles and descriptions (translated)
- Open Graph and Twitter Card tags
- JSON-LD Restaurant structured data
- `public/robots.txt` and `public/sitemap.xml`

Update the domain `https://blazingburger.hu` in SEO files when deploying.

---

## Deployment

Build the project and deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

Ensure:
1. Logo is placed at `public/assets/logo.png`
2. Menu images are in `public/assets/menu/`
3. Update domain in `sitemap.xml`, `robots.txt`, and `src/components/SEO.tsx`

---

## License

Private — Blazing Burger © All rights reserved.
