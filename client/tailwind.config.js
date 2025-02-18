/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        primary: "#ff7f7f",
        secondary: "#D1D5D8",
        primarydark: "#Ff0000",
        primarylight: "Ff8164",
      },
    },
  },
  plugins: [],
};
