import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: "475px",
      },
      colors: {
        background: {
          DEFAULT: "#f4f4f4",
          dark: "#15171b",
        },
        text: {
          DEFAULT: "#070b28",
          dark: "#ededed",
        },
        nav: {
          DEFAULT: "#ededed",
          dark: "#1a2230",
        },
        border: {
          DEFAULT: "#e8e8e8",
          dark: "#29282e",
        },
        link: {
          DEFAULT: "#4479e2",
        },
        linkShade: {
          DEFAULT: "#4654a5",
        },
        bluebg: {
          DEFAULT: "#ededed",
          dark: "#1a2230",
        },
        textSecondary: {
          DEFAULT: "#4f576c",
          dark: "#98a1b6",
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
