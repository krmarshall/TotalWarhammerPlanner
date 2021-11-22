/* eslint-disable no-undef */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        CaslonAntique: 'CaslonAntique',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
      grayscale: ['hover'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
