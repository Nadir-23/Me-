import type { Config } from "tailwindcss";

/**
 * Every color is driven by a CSS custom property (see app/globals.css).
 * Switching `html.light` swaps the whole palette — no !important hacks,
 * and alpha variants (`bg-panel/50`) keep working in both themes.
 */
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "rgb(var(--bg-void) / <alpha-value>)",
        surface: "rgb(var(--bg-surface) / <alpha-value>)",
        panel: "rgb(var(--bg-panel) / <alpha-value>)",
        border: "rgb(var(--bg-line) / <alpha-value>)",
        accent: {
          violet: "rgb(var(--accent-violet) / <alpha-value>)",
          blue: "rgb(var(--accent-blue) / <alpha-value>)",
          cyan: "rgb(var(--accent-cyan) / <alpha-value>)",
          amber: "rgb(var(--accent-amber) / <alpha-value>)",
        },
        cta: {
          from: "rgb(var(--cta-from) / <alpha-value>)",
          to: "rgb(var(--cta-to) / <alpha-value>)",
        },
        ink: {
          primary: "rgb(var(--ink-1) / <alpha-value>)",
          muted: "rgb(var(--ink-2) / <alpha-value>)",
          faint: "rgb(var(--ink-3) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgb(var(--grid-line) / 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--grid-line) / 0.07) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgb(var(--glow-a) / 0.16), transparent 60%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 9s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 92, 255, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
