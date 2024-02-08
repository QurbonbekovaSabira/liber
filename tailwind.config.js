/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1340px",
        },
      },
    },
    screens: {
      sm: "560px",
      md: "920px",
      lg: "1340px",
    },
    colors: {
      primary: "#3F51B5",
      secondary: "#EEF4FF",
      grey:"#E1E1E1",
      Snow: "#F8F8F8",
      darkPurple: "#11142D",
      "liberty-blue": "#10182c",
      white: "#FFFFFF",
      black: "#000",
    },
  },
  plugins: [],
};
