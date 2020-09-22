const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    extend: {
      fontSize:{
        '7xl': '5rem'
      },
      maxHeight: {
        '0': '0'
      },
      colors: {
        dark: "#1b1b1e",
        light: "#f4f5f6",
        primary: "#226ce0",
        primaryDark: "#0953c7",
        secondary: "#0fa3b1",
        secondaryDark: "#008a98",
        accent: "#faa916",
        accentDark: "#e19000"
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'title': ['Raleway', ...defaultTheme.fontFamily.sans],
        'serif': [...defaultTheme.fontFamily.serif],
        'mono': [...defaultTheme.fontFamily.mono]
      },
      height: {
        'hscreen': '50vh',
        '1/2': '50%',
        '5/6': '83.333333%',
        '72': '18rem',
        '80': '22rem'
      },
      inset: {
        '2': ".5rem"
      }
    },
  },
  variants: {
    inset: ['responsive', 'hover'],
  },
  plugins: [],
}
