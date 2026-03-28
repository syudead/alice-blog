import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0a0e1a",
          900: "#0d1224",
          800: "#121a35",
          700: "#1a2548",
        },
        rose: {
          dusty: "#c4879a",
          muted: "#a86b7d",
          pale: "#e8c4cc",
        },
        cream: {
          DEFAULT: "#f5ede0",
          dark: "#e8d9c8",
        },
        ink: "#2a1f2e",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif"],
        serif: ["var(--font-serif)", "Hiragino Mincho ProN", "Yu Mincho", "serif"],
        display: ["var(--font-display)", "serif"],
      },
      backgroundImage: {
        "paper": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23121a35'/%3E%3Crect x='0' y='0' width='1' height='1' fill='%23131b37' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
