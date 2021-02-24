const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.vue'],
  theme: {
    fontFamily: {
      serif: ['Rokkitt', 'serif'],
      sans: ['Raleway', 'sans-serif'],
    },
    minWidth: {
      '0': '0',
      '10': '10rem',
      'full': '100%',
    },
    triangles: { // defaults to {}
      'left': {
        direction: 'left',      // one of 'left', 'right', 'up', 'down', 'left-up', 'left-down', 'right-up', and 'right-down'
        color: "#762b32",
        size: '1.3rem',            // defaults to defaultSize
        height: '1.2rem',        // defaults to half the size; has no effect on the diagonal directions (e.g. 'left-up')
      },
    },
    extend: {
      colors: {
        ...colors,
        primary: "#201a1f",
        secondary: "#762b32",
        accent: "#efc153"
      },
      container: {
        center: true,
        padding: {
          default: '0.5rem',
          sm: '1rem',
          lg: '8rem',
          xl: '12rem',
        },
      },
      keyframes: {
        zoom: {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'},
        }
      },
      animation: {
        'zoom-in': 'zoom 1s ease-in-out',
      }
    },
  },
  variants: {
    triangles: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-triangles')({
      componentPrefix: 'c-',        // defaults to 'c-'
      defaultSize: '1em',           // defaults to '1em'
      defaultColor: '#efc153', // defaults to 'currentColor'
    }),
  ],
}
