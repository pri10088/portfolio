/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#FFD700',
        'neon-dark': '#B8860B',
        'dark-bg': '#0A0A0A',
        'dark-card': '#1A1A1A',
        'dark-border': '#333333',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};