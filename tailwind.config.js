/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        blue: '#2F80ED',
        darkgray: '#4F4F4F',
        midgray: '#828282',
        lightgray: '#E0E0E0',
      },
      indicator: {
        orange: '#F8B76B',
        purple: '#8785FF',
        red: '#EB5757',
        yellow: '#F2C94C',
      },
      chats: {
        50: '#FCEED3',
        100: '#E5A443',
        150: '#EEDCFF',
        200: '#9B51E0',
        250: '#D2F2EA',
        300: '#43B78D',
      },
      sticker: {
        50: '#E9F3FF',
        100: '#FDCFA4',
        150: '#F9E9C3',
        200: '#AFEBDB',
        250: '#CBF1C2',
        300: '#CFCEF9',
        450: '#F9E0FD',
      },
    },
    extend: {},
  },
  plugins: [],
};