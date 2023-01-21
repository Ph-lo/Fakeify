/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
    },
    extend: {
      colors: {
        primary: "#DDDDDD",
        secondary: "#222831",
        appBlue: "#30475E",
        appRed: "#F05454",
      },
      boxShadow: {
        shadowBottom: "O 4px 4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
