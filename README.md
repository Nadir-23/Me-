# Boukrioui Nadir — Portfolio

A modern, responsive, animated personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Design direction: a dark, futuristic AI/data-science aesthetic — deep void background, violet → blue → cyan gradients, monospace data labels, and a signature animated **neural field** (a canvas of connected, mouse-reactive nodes) standing in for generic particle effects.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, theme provider, metadata
  page.tsx           # Assembles all sections
  globals.css         # Design tokens, base styles, utilities
components/
  Navbar.tsx          # Sticky nav with mobile menu + theme toggle
  Hero.tsx             # Hero with NeuralField signature background
  NeuralField.tsx       # Animated canvas node network (signature element)
  About.tsx              # About + interest chips + animated stats
  StatCounter.tsx         # Animated number counter
  EducationTimeline.tsx    # Vertical scroll-animated timeline
  TechStack.tsx              # Tech categories with animated progress bars
  Projects.tsx                 # Filterable project cards
  Experience.tsx                # Current internship
  SkillsPanel.tsx                 # Technical/soft skills, languages, interests
  GithubStats.tsx                  # Live GitHub stats + top languages
  Contact.tsx                       # Contact form (mailto) + contact cards
  Footer.tsx                         # Footer with social links
  ScrollToTop.tsx                     # Floating scroll-to-top button
  ThemeToggle.tsx                      # Dark/light toggle (next-themes)
  ThemeProvider.tsx                     # next-themes wrapper
  SectionHeading.tsx                     # Reusable eyebrow/title/description
lib/
  data.ts             # Single source of truth for all content
public/
  cv/                 # Put your downloadable CV PDF here
```

## Editing content

All text, projects, skills, education, and links live in **`lib/data.ts`**. Update that file to change the site's content without touching component code.

To enable the "Download CV" button, drop your PDF into `public/cv/` and name it `Boukrioui_Nadir_CV.pdf` (or update `profile.cvPath` in `lib/data.ts`).

## Features

- Fully responsive (mobile → desktop)
- Dark/light theme toggle (`next-themes`), dark by default
- Scroll-triggered reveal animations (Framer Motion)
- Animated neural-network canvas background in the hero
- Animated stat counters and skill progress bars
- Filterable project grid (All / AI & Data / Web / Systems)
- Live GitHub stats + top-languages cards
- Working contact form (opens the visitor's mail client via `mailto:`)
- Scroll-to-top button
- Accessible focus states, `prefers-reduced-motion` support
- SEO metadata via the Next.js Metadata API

## Deploying

This is a standard Next.js app — deploy directly to Vercel, Netlify, or any Node host:

```bash
npm run build
npm run start
```

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [lucide-react](https://lucide.dev/) icons
