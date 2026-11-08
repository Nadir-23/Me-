"use client";

import { useI18n } from "@/lib/i18n";

/** First focusable element on the page; label follows the active language. */
export default function SkipLink() {
  const { ui } = useI18n();
  return (
    <a href="#main-content" className="skip-link">
      {ui.skip}
    </a>
  );
}
