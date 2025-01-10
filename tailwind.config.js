/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#749B3F",
        secondary: "#212337",
      },
      backgroundColor: {
        primary: "#749B3F",
        secondary: "#212337",
      },
    },
  },
  plugins: [],
};
