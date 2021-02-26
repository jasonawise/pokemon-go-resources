
module.exports = {
  purge: [ `./src/**/*.{js,jsx,ts,tsx}`, `./public/index.html` ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: `var( --color-primary )`
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
