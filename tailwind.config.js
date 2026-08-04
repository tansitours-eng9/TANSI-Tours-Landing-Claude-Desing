/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1A237E',
        accent: '#F59E0B',
        accentHover: '#D97706',
        softOffWhite: '#F8FAFC',
        darkText: '#1E293B',
        lightText: '#64748B',
      },
      boxShadow: {
        premium: '0 20px 40px -10px rgba(26, 35, 126, 0.08)',
        'premium-hover': '0 25px 50px -12px rgba(26, 35, 126, 0.15)',
      },
    },
  },
  plugins: [],
};
