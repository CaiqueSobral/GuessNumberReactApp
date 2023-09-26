/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#3b021f',
      secondary: '#ddb52f',
      primaryShade: '#72063c',
      primaryText: '#f9fafb',
    },
    extend: {},
  },
  plugins: [],
};
