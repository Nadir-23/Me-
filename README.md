# Nadir Boukrioui — Portfolio

Modern single-page portfolio: **innovation** (AI at the edge) + **productivity** (systems that ship). Dark by default, light-mode toggle, EN/FR language switch, bento layout, animated counters, and a neural-network hero background.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS 3 · Framer Motion · TypeScript

> The brief allowed React + Vite *or* Next.js. This project uses **Next.js** because the existing repo already ran on it, and it gives you free SEO (metadata API, OG tags, JSON-LD) with zero extra setup.

---

## Setup

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

**Requirements:** Node 18.18+ (tested on Node 24).

---

## Editing content

Almost everything you'll want to change lives in **two files** — plus their French mirrors if you keep the EN/FR switch in sync.

### 1. Projects — `lib/projects.js`

Single source of truth for every case study. Each entry:

```js
{
  slug: "darija-voice-ai",          // unique id
  title: "DarijaVoice AI",
  category: "AI",                   // "AI" | "Full-Stack" | "Research"
  year: "2026",
  role: "Final-year project · ML & product",
  tagline: "One-line hook.",
  problem: "…",                     // 1–2 sentences
  solution: "…",                    // 2–3 sentences
  stack: ["Python", "PyTorch", …],
  metric: { value: "0.9s", label: "median synthesis latency" },
  highlights: ["…", "…", "…"],      // 3 bullets
  live: null,                       // or "https://demo.example.com"
  github: "https://github.com/Nadir-23",
  featured: true,                   // true = full-width card
}
```

- **Add a project** → append an object to `projects`.
- **Add a filter category** → add the string to `projectCategories`, then use it as `category` on a project. The filter buttons render from this array automatically (translate the display label in `categoryLabels` in both `lib/ui.ts` language blocks).
- **Show a live demo** → set `live` to a URL (renders a “Live demo” link; `null` shows “Demo on request”).

### 2. Everything else — `lib/data.ts`

| Export | What it controls |
|---|---|
| `profile` | Name, headline, subtext, rotating hero words, email, links, CV path |
| `about` | About paragraphs + the four quick-facts bento cards |
| `skillGroups` | Skills section (icon key + item list). Icons: `brain`, `server`, `layout`, `database`, `wrench` |
| `timeline` | Journey section — experience & education entries (`type: "work" \| "education"`) |
| `stats` | Animated counters on the Impact strip |
| `workflow` | “How I work” cards (plan → prototype → ship → iterate) |
| `navLinks` | Navbar links — keep `href` matching a section `id` |

### 3. Other files you may touch

| File | Purpose |
|---|---|
| `public/cv/CV_Boukrioui_Nadir.pdf` | Replace with your latest CV (filename must match `profile.cvPath`) |
| `public/og-image.png` | 1200×630 Open Graph image — regenerate or drop in your own |
| `app/layout.tsx` | Meta title/description, `siteUrl` (set `NEXT_PUBLIC_SITE_URL`), JSON-LD structured data |
| `tailwind.config.ts` | Accent colors, fonts, glows |

---

## Internationalization (EN / FR)

The navbar pill toggles the whole page between English and French. One React
context (`lib/i18n.tsx`) owns the active language; every section reads copy,
projects and labels through `useI18n()`.

| File | Purpose |
|---|---|
| `lib/ui.ts` | All component-level strings for **both** languages (headings, buttons, labels, a11y text). Sentences with dynamic values are functions, e.g. `rights(year)` |
| `lib/data.fr.ts` | French mirror of `lib/data.ts` — same exports, same shapes |
| `lib/projects.fr.js` | French mirror of `lib/projects.js` — same slugs, same `category` keys (`AI` stays `AI`; only the display label is translated) |
| `lib/i18n.tsx` | `I18nProvider` + `useI18n()`; persists to `localStorage("lang")`, sets `document.documentElement.lang` |
| `components/LangToggle.tsx` | Navbar EN/FR pill (labels the *next* language, in the current one) |

**To edit copy:** change English in `lib/data.ts` / `lib/projects.js` / the
`en` block of `lib/ui.ts`, then mirror the French in `lib/data.fr.ts` /
`lib/projects.fr.js` / the `fr` block. TypeScript enforces that both data
mirrors keep the same shape (`const data: typeof enData = …`), and
`UI = typeof ui.en` keeps the string dictionaries aligned.

**To add a language:** add a `Lang` value in `lib/ui.ts`, a `lib/data.<lang>.ts`
+ `lib/projects.<lang>.js` mirror, and extend the two ternaries in
`lib/i18n.tsx`.

---

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # fonts, metadata, OG, JSON-LD, theme, i18n, cursor glow
│   ├── page.tsx          # section order
│   └── globals.css       # tokens, light-mode overrides, utilities
├── components/
│   ├── Navbar.tsx        # sticky, active-section underline, mobile menu
│   ├── Hero.tsx          # headline, typing line, CTAs, NeuralField
│   ├── NeuralField.tsx   # canvas neural-network background (respects reduced-motion)
│   ├── CursorGlow.tsx    # pointer glow (fine pointers only)
│   ├── About.tsx         # prose + quick-facts bento
│   ├── Projects.tsx      # filters + case-study cards + hover preview
│   ├── Skills.tsx        # grouped tech grid + certifications
│   ├── Journey.tsx       # vertical experience/education timeline
│   ├── Impact.tsx        # animated stats + “How I work”
│   ├── Contact.tsx       # form (mailto) + links + closing CTA
│   ├── Footer.tsx
│   ├── SectionHeading.tsx
│   ├── ScrollToTop.tsx
│   ├── SkipLink.tsx      # a11y skip link (localized)
│   ├── LangToggle.tsx    # EN/FR pill
│   ├── ThemeToggle.tsx / ThemeProvider.tsx
│   └── ...
├── lib/
│   ├── projects.js       # ← edit projects (EN) here
│   ├── projects.fr.js    # ← French projects mirror
│   ├── data.ts           # ← edit everything else (EN) here
│   ├── data.fr.ts        # ← French content mirror
│   ├── ui.ts             # ← component strings, EN + FR
│   └── i18n.tsx          # language context (I18nProvider / useI18n)
└── public/
    ├── og-image.png
    └── cv/
```

---

## Deploy

### Vercel

1. Push the repo to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework preset: **Next.js** (auto-detected). No build overrides needed.
4. *Optional:* add env var `NEXT_PUBLIC_SITE_URL` = your production URL (used in meta/OG/JSON-LD).
5. Deploy.

```bash
# or from the CLI
npx vercel
```

### Netlify

1. Push to GitHub → [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
2. Build command: `npm run build` · Publish directory: `.next`
3. Add the **Next.js runtime** (Netlify auto-suggests it on import).
4. Set `NEXT_PUBLIC_SITE_URL` and deploy.

> Easiest path on Netlify: use the “Deploy to Netlify” button after connecting the repo — the Next runtime is detected automatically.

---

## Accessibility & performance notes

- Semantic landmarks, labelled form controls, visible `focus-ring`, `aria-current` on the active nav link.
- `prefers-reduced-motion`: typing line renders statically, canvas draws one frame, counters snap to final value, CSS animations are neutralised.
- Fonts self-hosted via `next/font/local` with `display: swap` (no layout shift, no external request at runtime; builds never depend on fonts.googleapis.com).
- Images: OG is the only raster asset; the hero background is a single lightweight canvas.
- Contrast: ink tokens checked for WCAG AA in both dark and light modes.

---

## Optional enhancements (not included)

- **Real contact backend** — the form currently opens the visitor’s mail client. Swap `handleSubmit` in `components/Contact.tsx` for a route handler (`app/api/contact/route.ts`) calling Resend, Formspree, etc.
