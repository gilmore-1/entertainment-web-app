/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      color: {
        tartOrange: "#FC4747",
        chineseBlack: "#10141E",
        uclaBlue: "#5A698F",
        darkGunmetal: "#161D2F",
        white: "#FFFFFF",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
