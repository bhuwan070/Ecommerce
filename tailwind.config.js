/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sd: "580px",
      
      sm: "640px",
      // => @media (min-width: 640px) { ... }


      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      hx: "1420px"

    },
    extend: {
      colors: {
        primary: "#3BB77E",
      },
    },
  },
  plugins: [],
};
