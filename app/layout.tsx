import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import CursorGlow from "@/components/CursorGlow";
import { profile } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadirboukrioui.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06060c" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7fb" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  title: {
    default: "Nadir Boukrioui — AI Engineer · Full-Stack · Data Science",
    template: "%s · Nadir Boukrioui",
  },
  description:
    "Portfolio of Nadir Boukrioui, second-year AI & Data Science engineering student at ENSIASD, Morocco. I build intelligent systems that ship — from Darija TTS models to full-stack platforms.",
  keywords: [
    "Nadir Boukrioui",
    "AI Engineer",
    "Data Science",
    "Full-Stack Developer",
    "Morocco",
    "ENSIASD",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Nadir Boukrioui", url: siteUrl }],
  creator: "Nadir Boukrioui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nadir Boukrioui",
    title: "Nadir Boukrioui — AI Engineer · Full-Stack · Data Science",
    description:
      "AI engineer in the making. I build intelligent systems that ship — Darija TTS, multi-agent research tools, and full-stack platforms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nadir Boukrioui — AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadir Boukrioui — AI Engineer",
    description:
      "AI engineer in the making. I build intelligent systems that ship.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI & Data Science Engineering Student",
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.github, profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tangier-Tetouan",
    addressCountry: "MA",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "ENSIASD — National School of Artificial Intelligence and Data Sciences",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Full-Stack Development",
    "Data Science",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nadir Boukrioui",
  url: siteUrl,
  description:
    "Portfolio of Nadir Boukrioui — AI engineer building intelligent systems that ship.",
  author: { "@type": "Person", name: profile.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <noscript>
          <style>{`[style*="opacity"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MotionConfig reducedMotion="user">
            <CursorGlow />
            {children}
            <ScrollToTop />
          </MotionConfig>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
