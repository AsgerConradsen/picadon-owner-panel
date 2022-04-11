module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    //require('@tailwindcss/aspect-ratio'),
    //require('@tailwindcss/typography'),
  ],
}