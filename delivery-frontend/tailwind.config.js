/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "delivery-red": "#ff2e2e",
        "delivery-green": "#00d100",
        "delivery-yellow": "#FFFF00",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
