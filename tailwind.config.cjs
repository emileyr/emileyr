/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-1": "fadeIn1 4s ease-in",
        "fade-in-2": "fadeIn2 4s ease-in",
        "fade-in-3": "fadeIn3 4s ease-in",
      },
      keyframes: (theme) => ({
        fadeIn1: {
          "0%": { opacity: 0 },
          "25%": { opacity: 0 },
          "37.5%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
        fadeIn2: {
          "0%": { opacity: 0 },
          "62.5%": { opacity: 0 },
          "75%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
        fadeIn3: {
          "0%": { opacity: 0 },
          "75%": { opacity: 0 },
          "87.5%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
