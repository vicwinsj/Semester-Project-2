/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./auth/**/*.html",
    "./profile/**/*.html",
    "./listing/**/*.html",
  ],
  safelist: [
    {
      pattern: /bg-\[url\('.*?'\)\]/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        tinos: ["Tinos", "serif"],
      },
      colors: {
        primaryBlue: "#001E9F",
        hoverBlue: "#5A6FCB",
        focusBlue: "#001053",
        inputBg: "#F4F4F4",
        skyBlue: "#E2EBF2",
        salmonRed: "#FF7B7B",
        textGray: "#7B7B7B",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
