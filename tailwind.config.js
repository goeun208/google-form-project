/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bdbottom: {
          '0%': {left: '50%', width: '0%'},
          '100%': {left: '0%', width: '100%'},
        }
      },
      animation: {
        bdbottom: 'bdbottom 0.25s ease-in-out forwards'
      },
    },
  },
  plugins: [],
}