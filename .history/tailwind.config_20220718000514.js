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
        btn: 'rgba(201, 97, 222, 1)
        rgba(41, 84, 163, 1)'
      }
    },
  },
  plugins: [],
}
