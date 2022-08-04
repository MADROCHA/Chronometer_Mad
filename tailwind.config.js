/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './index.html',

],
  theme: {
    colors: {
      'colorBackBlack': '#0B0014',
      'colorYellow': '#FCD581',
      'colorRed': '#773344',
      'colorWhite': '#FFF8E8',
    },
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
    },
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0.0deg)' },

          '10%': { transform: 'rotate(36deg)' },
          '20%': { transform: 'rotate(72deg)' },
          '30%': { transform: 'rotate(108.0deg)' },
          '40%': { transform: 'rotate(144.0deg)' },

          '49%': { transform: 'rotate(180.0deg)' },
          '50%': { transform: 'rotate(0.0deg)' },

          '60%': { transform: 'rotate(-36.0deg)' },
          '70%': { transform: 'rotate(-72.0deg)' },
          '80%': { transform: 'rotate(-108.0deg)' },
          '90%': { transform: 'rotate(-144.0deg)' },
          '99%': { transform: 'rotate(-180.0deg)' },

          '100%': { transform: 'rotate(0.0deg)' },

          
        },
      },
      animation: {
        'spin': 'spin 10s  infinite',
    },
    },
  },
  plugins: [],
}