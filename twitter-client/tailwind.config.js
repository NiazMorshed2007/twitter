/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D9BF0",
        gray: "#71767B",
        borderColor: "rgb(47, 51, 54)",
        hoverColor: "rgb(47 51 54 / 0.4)"
      }
    },
  },
  plugins: [],
}