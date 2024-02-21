/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#0c0d11",
        dark: "#1a1b20 ",
      },
      gridTemplateColumns: {
        "bento-lg": "1fr 1fr 1fr 1fr 0.5fr",
        "bento-md": "1fr 1fr 1fr 1fr 2fr",
        "bento-sm": "1fr 1fr 1fr 1fr 2.5fr",
      },
      fontFamily: {
        firacode: ["var(--firaCode)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        scaleUp: {
          "0%, 100%": { transform: "scale(1)", opacity: 0.2 },
          "50%": { transform: "scale(1.2) ", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scale: "scaleUp 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
