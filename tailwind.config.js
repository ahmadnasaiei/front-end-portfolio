/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bg': '#2C3639',
      'primary': '#3F4E4F',
      'primary-variant': '#395B64',
      'ascent': '#A27B5C',
      'black': '#000',
      'light': '#B5B5B5',
      'red': '#CF1D1D',
    },
    fontFamily: {
      consolas: ['Inconsolata', 'monospace'],
      rockSalt: ['Rock Salt', 'cursive']
    }
  },
  plugins: [],
}
