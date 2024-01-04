/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        background: "#131200",
        primary: "#78BC61",
        secondary: "#CFFCFF"
      },
      fontFamily: {
        agbalumo: ["agbalumo"],
        zodiac: ["zodiac"]
      }
    },
  },
  plugins: [],
}

