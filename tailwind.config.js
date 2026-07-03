// const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/**/*.{html,njk,svg}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': {
          DEFAULT: '#ffead2',
          'soft': '#ffead20f',
          'border': '#ffead238'
        },
        'coral': {
          DEFAULT: '#f87854',
          'soft': '#f878540f',
          'border': '#f8785447'
        },
        'charcoal':{
          DEFAULT: '#2B2A28'
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
