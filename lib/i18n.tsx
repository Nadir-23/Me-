"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import * as enData from "./data";
import * as frData from "./data.fr";
import { projects as enProjects, projectCategories as enCategories } from "./projects";
import {
  projects as frProjects,
  projectCategories as frCategories,
} from "./projects.fr";
import { ui, type Lang, type UI } from "./ui";

type Data = typeof enData;

type I18nValue = Data & {
  lang: Lang;
  setLang: (lang: Lang) => void;
  ui: UI;
  projects: typeof enProjects;
  projectCategories: string[];
};

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "lang";

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "fr" ? "fr" : "en";
  } catch {
    return "en";
  }
}

/**
 * Single source of the active language. Everything the sections render —
 * copy, projects, labels — is chosen here, so switching one value
 * re-renders the whole page in the new language.
 */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // hydrate from localStorage after mount (SSR always renders English)
  useEffect(() => {
    setLangState(readStoredLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* private mode — language just won't persist */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo<I18nValue>(() => {
    const data: Data = lang === "fr" ? frData : enData;
    const projects = lang === "fr" ? frProjects : enProjects;
    const projectCategories = lang === "fr" ? frCategories : enCategories;
    const strings: UI = lang === "fr" ? ui.fr : ui.en;
    return {
      ...data,
      lang,
      setLang,
      ui: strings,
      projects,
      projectCategories,
    };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

export type { Lang };
