/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c2410c", // Your orange from header
        dark: "#111827",
      },
    },
  },
  plugins: [],
}