"use client";

import { useI18n } from "@/lib/i18n";

/**
 * EN/FR pill for the navbar. Shows the language you would switch TO,
 * labelled in the language you are currently reading.
 */
export default function LangToggle() {
  const { lang, setLang, ui } = useI18n();
  const next = lang === "en" ? "fr" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={ui.nav.langToggle}
      aria-pressed={lang === "fr"}
      className="focus-ring flex h-9 items-center rounded-full border border-border bg-panel/60 px-3 font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
    >
      {lang === "en" ? "FR" : "EN"}
    </button>
  );
}
