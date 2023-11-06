/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    colors: {
      "golden-yellow": "#F9B53A",
      white: "#FFFFFF",
      "primary-theme": "#131414",
      border: "#26292D",
      "card-border": "#3D3D3D",
      "card-bg": "#1F1F21",
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h3: ["34px", "40px"],
      },
      screens: {
        sm: "750px",
      },
    },
  },
  plugins: [],
};
