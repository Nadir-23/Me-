import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Boukrioui Nadir — AI & Data Sciences Engineer",
  description:
    "Portfolio of Boukrioui Nadir, an AI & Data Sciences engineering student and full-stack developer from Morocco, building intelligent and scalable solutions.",
  keywords: [
    "Boukrioui Nadir",
    "AI Engineer",
    "Data Sciences",
    "Full-Stack Developer",
    "Morocco",
    "ENSIASD",
    "Machine Learning",
  ],
  authors: [{ name: "Boukrioui Nadir" }],
  openGraph: {
    title: "Boukrioui Nadir — AI & Data Sciences Engineer",
    description:
      "AI & Data Sciences engineering student and full-stack developer building intelligent, scalable solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
