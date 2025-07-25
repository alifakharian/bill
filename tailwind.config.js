/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      smd: "100px",
    },
    container: {
      center: true,
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({});
    },
  ],
};
