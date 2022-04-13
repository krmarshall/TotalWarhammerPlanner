/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        CaslonAntique: 'CaslonAntique',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
