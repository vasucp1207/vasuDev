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
      darkMode: 'class',
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ...],
        'serif': ['ui-serif', 'Georgia', ...],
        'mono': ['ui-monospace', 'SFMono-Regular', ...],
        'display': ['Oswald', ...],
        'body': ['"Open Sans"', ...],
      }
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [],
}
