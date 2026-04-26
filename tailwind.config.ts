import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0A",
          elevated: "#141414",
        },
        hairline: "#1F1F1F",
        gold: {
          DEFAULT: "#C9A961",
          primary: "#C9A961",
          bright: "#E0C088",
          muted: "#8A7544",
        },
        ink: {
          primary: "#EDEDED",
          secondary: "#888888",
          tertiary: "#555555",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-serif)",
          "Playfair Display",
          "Bodoni Moda",
          "Georgia",
          "serif",
        ],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        mono: "0.2em",
        widest2: "0.3em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
