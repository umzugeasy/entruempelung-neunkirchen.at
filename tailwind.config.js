// const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/**/*.{html,njk,svg}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          DEFAULT: '#072D23',
          'soft':'#072D230F',
          'border': '#072D2338'
        },
        'mint': {
          DEFAULT: '#A3F18E',
          'soft': '#A3F18E0F',
          'border':'#A3F18E47'
        },
        'moss':{
          DEFAULT: '#527947'
        },
        'green': {
          DEFAULT: '#16A34A'
        },
      },
      fontFamily: {
        redHatDisplay: ['Red Hat Display', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      },
    },
  },
  plugins: [

  ],
};
