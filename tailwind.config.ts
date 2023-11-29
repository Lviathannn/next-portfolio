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
        secondary: "#55a471",
        accent_1: "#c8dbb6",
        accent_2: "#586856",
        accent_3: "#314abb",
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
          "0%, 100%": { transform: "scale(1)", opacity: 0.6 },
          "50%": { transform: "scale(1.2) ", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scale: "scaleUp 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
