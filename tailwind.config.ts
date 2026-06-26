import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#071642",
          green: "#2f9424",
          bright: "#43b02a",
          soft: "#f4faf3",
          ink: "#0a1538",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(7, 22, 66, 0.08)",
        card: "0 12px 34px rgba(7, 22, 66, 0.075)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

