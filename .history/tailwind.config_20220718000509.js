/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkB: 'rgba(15, 16, 63, 1)',
        btn: liner
      }
    },
  },
  plugins: [],
}
