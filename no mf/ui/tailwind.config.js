/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wells Fargo color scheme
        'wells-fargo-red': '#CC0000',
        'wells-fargo-gray': '#F2F2F2',
        'wells-fargo-dark-gray': '#333333',
      },
    },
  },
  plugins: [],
};
