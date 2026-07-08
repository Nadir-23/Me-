import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#06060c",
        surface: "#0c0c18",
        "surface-2": "#12122238",
        panel: "#12101f",
        border: "#232238",
        indigo: {
          deep: "#1e1b4b",
        },
        accent: {
          violet: "#7c5cff",
          blue: "#4a7dff",
          cyan: "#35e0d0",
          amber: "#f0b74a",
        },
        ink: {
          primary: "#eef0fb",
          muted: "#9295b8",
          faint: "#5c5f80",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(124,92,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,92,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(124,92,255,0.16), transparent 60%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 92, 255, 0.25)",
        "glow-cyan": "0 0 40px rgba(53, 224, 208, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
