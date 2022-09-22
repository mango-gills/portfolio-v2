25;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "2560px",
      // => @media (min-width: 1536px) { ... }
    },
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
