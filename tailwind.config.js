/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    colors: {
      'dark-blue': '#2B3945',
      'darker-blue': '#202C37',
      'darkest-blue': '#111517',
      'dark-gray': '#858585',
      'light-gray': '#FAFAFA',
      white: '#FFFFF',
      black: '#00000',
    },
    extend: {},
  },
  plugins: [],
};
