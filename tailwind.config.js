/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Impact', 'Arial Black', 'sans-serif'],
      },
      colors: {
        orange: {
          400: '#f97316',
          500: '#ea580c',
          600: '#dc2626',
        },
        yellow: {
          400: '#eab308',
          500: '#ca8a04',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};