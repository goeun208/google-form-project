/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // backgroundColor: {
        //   'black': '#000000',
        // },
        bdbottom: {
          '0%': {left: '50%', width: '0%'},
          '100%': {left: '0%', width: '100%'},
        },
        label: {
          '0%': {opacity: '0'},
          '50%': {opacity: '0.5'},
          '100%': {opacity: '1'},
        }
      },
      animation: {
        bdbottom: 'bdbottom 0.25s ease-in-out forwards',
        label: 'label 5s ease-linear'
      },
    },
  },
  plugins: [],
}