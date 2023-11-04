/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        'primary-blue' : '#0C2360',
        'button-color' : '#1CD2A1',
        'light-blue' : '#F6FEFF'
      }
    },
  },
  plugins: [],
}