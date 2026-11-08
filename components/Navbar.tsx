"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/lib/data";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-void/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6"
      >
        <a href="#top" className="focus-ring font-display text-lg font-semibold tracking-tight">
          <span className="text-gradient">N.</span>
          <span className="text-ink-primary">Boukrioui</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`focus-ring relative font-mono text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-accent-cyan"
                      : "text-ink-muted hover:text-ink-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent-cyan"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="focus-ring hidden rounded-full border border-accent-violet/40 bg-accent-violet/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink-primary transition-colors hover:bg-accent-violet/20 sm:block"
          >
            Let&rsquo;s talk
          </a>
          <button
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex flex-col gap-1 border-t border-border bg-void/95 px-5 pb-6 pt-2 backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`focus-ring block py-2.5 font-mono text-sm uppercase tracking-wider transition-colors ${
                    isActive ? "text-accent-cyan" : "text-ink-muted hover:text-ink-primary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </motion.ul>
      )}
    </motion.header>
  );
}
