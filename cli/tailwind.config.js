/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'snow-falling': "url('/src/images/snow-falling.gif')",
        'snow-ground': "url('/src/images/snow-ground.png')",
      },
    },
    fontFamily: {
      body: ['tahoma', 'fangsong', 'sans-serif'],
      sans: ['fangsong', 'Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
