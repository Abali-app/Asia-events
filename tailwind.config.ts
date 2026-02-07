import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        ar: ["var(--font-arabic)", "Cairo", "sans-serif"],
        en: ["var(--font-latin)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
