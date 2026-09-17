import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        foreground: "#f4f4f6",
        obsidian: {
          950: "#050608",
          900: "#08090d",
          850: "#0d0f15",
          800: "#131620",
          700: "#1c202e",
          600: "#272c3f",
        },
        luxe: {
          gold: "#d0ab86",
          amber: "#e5a968",
          bronze: "#ab8749",
          muted: "#948b78",
        },
        surface: {
          base: "rgba(13, 15, 21, 0.75)",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.04)",
          highlight: "rgba(208, 171, 134, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-gradient-glow": "radial-gradient(circle at 50% 0%, rgba(208, 171, 134, 0.12) 0%, rgba(8, 9, 13, 0) 70%)",
        "radial-subtle-cyan": "radial-gradient(circle at 100% 50%, rgba(56, 189, 248, 0.06) 0%, rgba(8, 9, 13, 0) 60%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
