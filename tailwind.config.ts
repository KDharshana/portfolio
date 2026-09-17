import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1224px",
      },
      colors: {
        aa: {
          black: "#000000",
          white: "#ffffff",
          accent: "#424242",
          support1: "#7f7f7f",
          support2: "#7c7c7c",
          muted: "#b4b4b4",
          light: "#bcbcbc",
          darkGrey: "#9b9b9b",
          paper: "#fafafa",
          card: "#ffffff",
        },
      },
      fontFamily: {
        display: ["var(--font-titan)", "cursive", "sans-serif"],
        sans: ["var(--font-heebo)", "sans-serif"],
      },
      borderRadius: {
        aa: "8px",
      },
      borderWidth: {
        aa: "2px",
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #000000",
        "brutal-lg": "6px 6px 0px 0px #000000",
        "brutal-sm": "2px 2px 0px 0px #000000",
        "brutal-active": "1px 1px 0px 0px #000000",
      },
    },
  },
  plugins: [],
};
export default config;
