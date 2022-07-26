/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},  
    screens: {
      'sm': '375px',
      'lg': '1440px'
    },
    colors: {
      'primary-soft-red': '#EC755D',
      'primary-cyan': '#76B5BC',
      'neutral-very-pale-orange': ' #FF9B86',
      'neutral-dark-brown': '#382314',
      'neutral-medium-brown': '#92857A',
      'neutral-cream': '#F8E9DD',
      'neutral-card-white': '#FFFBF6',
      'neutral-white': '#FFFFFF',
    },
    fontSize: {
      'xs': '15px',
      'sm': '18px',
      'base': '18px',
      'lg': '32px',
      'xl': '48px',
    }
  },
  plugins: [],
};
