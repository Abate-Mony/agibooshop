/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
    fontFamily:{
    "manrope":["Manrope",'sans-serif'],
    "poppins":["Poppins",'sans-serif'],
    "montserrat":["Montserrat",'sans-serif'],
    "bricolage":["Bricolage Grotesque",'sans-serif'],
    
    }
    },
  },
  plugins: [],
  darkMode:"class"
}

