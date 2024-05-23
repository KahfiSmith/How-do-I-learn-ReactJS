/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(15, 23, 42)",
        primary: "rgb(30, 41, 59)",
        secondary: "rgb(43, 55, 73)",
        icon: "rgb(45, 212, 194)",
        color: "rgb(203, 213, 225)",
        border: "rgb(76, 90, 110)",
        tag: "rgb(25, 51, 64)",
        soft: "rgb(22, 32, 50)",
        light: "rgb(248, 250, 252)",
      },
    },
  },
  plugins: [],
};
