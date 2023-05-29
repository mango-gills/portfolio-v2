25;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vividRed: {
          900: "#FF3131",
        },
      },
      dropShadow: {
        "vividRed-lg": "-2px 3px 0px rgba(255, 49, 49, 0.80)",
        "dark-lg": "-3px 4px 0px rgba(0, 0, 0, .80)",
      },
    },
  },
  plugins: [],
};
