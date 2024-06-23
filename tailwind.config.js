/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#d8ff00'
      },
      screens: {
       'sm': '640px',
       'md': '768px',
        'lg': '1024px',
        'xl': '1260px',
        '2xl': '1400px'
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1536px'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

