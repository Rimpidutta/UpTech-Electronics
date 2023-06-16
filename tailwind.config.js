/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary : "#20B2AA",
    
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
