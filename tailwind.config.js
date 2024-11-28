/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./auth/**/*.html",
    "./profile/**/*.html",
    "./listing/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primaryBlue: "#001E9F",
        inputBg: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
