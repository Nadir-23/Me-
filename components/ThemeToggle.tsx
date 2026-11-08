"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { ui } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = theme !== "light";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? ui.nav.toLight : ui.nav.toDark}
      className="focus-ring group relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-panel/60 text-ink-muted transition-colors hover:text-accent-cyan"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
}
