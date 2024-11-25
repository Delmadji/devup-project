/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgrnd: "#EEFBFA",
        "blue-F": "#0F2650",
        "blue-S": "#0F2650",
      },
    },
  },
  plugins: [],
};
