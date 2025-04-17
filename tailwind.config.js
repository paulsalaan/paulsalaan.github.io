/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        linkedin: "#04042D",
        iceblack: "#01010B",
        snowwhite: "#F8F8FF",
        lightgray: "#9E9E9E",
        mediumgray: "#464646",
        darkgray: "#1F1F1F",
        blackgray: "#0F0F0F",
        darkgreen: "#041A08",
      },
    },
  },
  plugins: [],
};
