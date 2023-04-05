/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow' : '0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.141), 0 1px 3px 0 rgba(0,0,0,0.122)'
      },
      colors: {
        'google-form-purple': "#673ab7",
        'google-form-light-purple': "#f0ebf8",
      },
      animation: {
        'fade-in-bottom': 'fadeInBottom 0.5s linear forwards',
        'show-underbar': 'showUnderbar 0.25s ease-in-out forwards',
        'ripple-effect' : 'rippleEffect 0.7s linear forwards',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      padding: {
        '1.5': '0.375rem',
      },
      screens: {
        xs : '560px'
      },
      keyframes: {
        fadeInBottom: {
          '70%': { transform: 'scale(0)', bottom: "1rem" },
          '100%': { transform: 'scale(1)', bottom: '-1.3rem' },
        },
        showUnderbar : {
          '0%' : {width: "0",},
          '100%' : {width: "100%"},
        },
        rippleEffect : {
          '0%' : {transform: 'scale(1)'},
          '50%' : {transform: 'scale(70)'},
          '80%' : {transform: 'scale(70)', opacity: 1},
          '100%' : {transform: 'scale(70)', opacity: 0,}
        }
      }
    },
  },
  plugins: [],
}
