/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // TODO: Move colors to consts
    colors: {
      'text-link': 'rgba(31, 92, 237, 1)',
      color1: 'rgba(249, 250, 252, 1)',
      color2: 'rgba(250, 250, 250, 1)',
      'text-primary': 'rgba(34, 36, 37, 1)',
      tertiary: 'rgba(76, 76, 76, 1)',
      white: 'rgba(255, 255, 255, 1)',
      'border-static': 'rgba(232, 233, 255, 1)',
    },
    extend: {},
  },
  plugins: [],
};
