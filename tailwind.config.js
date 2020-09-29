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
        '0': '0',
        '16': '4rem',
        '17': '4.25rem',
        '64': '16rem',
        'none': 'none',
      },
      colors: {
        dark: "#1b1b1e",
        light: "#f4f5f6",
        primary: "#226ce0",
        primaryDark: "#0953c7",
        secondary: "#0fa3b1",
        secondaryDark: "#008a98",
        accent: "#faa916",
        accentDark: "#e19000",
        twitter: "#1da1f2",
        linkedin: "#0077b5"
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'title': ['Ubuntu', ...defaultTheme.fontFamily.sans],
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
      width: {
        '1/2-i': '50% !important'
      },
      inset: {
        '2': '.5rem'
      },
      screens: {
        'xs': {'raw': '(min-height: 795px) and (min-width: 350px)'}
      }
    },
  },
  variants: {
    inset: ['responsive', 'hover'],
  },
  plugins: [],
}
