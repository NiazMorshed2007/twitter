/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D9BF0",
        gray: "#71767B",
        borderColor: "rgb(47, 51, 54)",
        hoverColor: "rgb(47 51 54 / 0.4)"
      },
      keyframes: {
        'fadeIn' : {
          '0%' : {opacity: 0},
          '100%' : {opacity: 1}
        }
      },
      animation: {
        'fade-in' : 'fadeIn 500ms ease forwards',
        'slower-fade-in' : 'fadeIn 750ms 500ms ease forwards'
      },
      height: {
        '9/10': '90%',
      }
    },
  },
  plugins: [],
}

