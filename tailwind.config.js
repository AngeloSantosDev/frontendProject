/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        backgroundText: "#E7E7E7",
      },

      fontFamily: {
        sans: ["Popins", "sans-serif"],
        handwriting: ["Marienda", "cursive"],
      },
      
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      }
    },
  },
  plugins: [],
}