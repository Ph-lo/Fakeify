/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DDDDDD",
        secondary: "#222831",
        appBlue: "#30475E",
        appRed: "#F05454",
      },
    },
  },
  plugins: [],
};
