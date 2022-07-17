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
        lightB: '#1C1C65',
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'spin-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}
