import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      brand: { DEFAULT: "#35707F", dark: "#2B5C68", light: "#618F9B" },
      accent: { DEFAULT: "#D9789C", dark: "#B26280", light: "#E196B2" },
      canvas: "#FBF6F8",
    },
    fontFamily: {
      display: ["var(--font-display)", "Georgia", "serif"],
      sans: ["var(--font-body)", "system-ui", "sans-serif"],
    },
  } },
  plugins: [],
}
export default config
