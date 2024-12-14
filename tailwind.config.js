/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'inset 0px 0px 20px 5px rgb(255 255 255 / .1)'
      },
      fontFamily: {
        anta: ['Anta', 'sans-serif']
      }
    },
  },
  plugins: [],
} 