/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        VeryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        LightGrayishBlue: "hsl(233, 11%, 84%)",
        DarkGrayishBlue: "hsl(236, 9%, 61%)",
        VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        purple_gradient: "#8968e3",
        blue_gradient: "#7e9df8",
        Very_Dark_Blue: "hsl(235, 21%, 11%)",
        Very_Dark_Desaturated_Blue: "hsl(235, 24%, 19%)",
        task_default_light: "#585764",
        task_completed: "#c6c5cb",
        feature: "#a9a9aa",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
