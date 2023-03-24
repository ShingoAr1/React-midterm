/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'item':' -2px 2px 0 0 rgba(2,133,199,0.6)'
      }
    },
  },
  plugins: [],
}
