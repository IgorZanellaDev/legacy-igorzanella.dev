const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    extend: {
      maxHeight: {
        '0': '0'
      },
      colors: {
        dark: "#1b1b1e",
        light: "#f4f5f6",
        primary: "#226ce0",
        secondary: "#0fa3b1",
        accent: "#faa916",
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'serif': [...defaultTheme.fontFamily.serif],
        'mono': [...defaultTheme.fontFamily.mono]
      }
    },
  },
  variants: {},
  plugins: [],
}
