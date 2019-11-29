module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-action': {
          '900': '#0030FE',
          '700': '#4B6DFF',
          '500': '#B1C0FF',
          '000': '#fff',
        },
        'secondary-action': {
          '900': '#fff',
          '700': '#B1C0FF',
          '500': '#4B6DFF',
          '000': '#0030FE',
        },
        'danger-action': {
          '900': '#e00',
          '700': '#fa4f31',
          '500': '#ff9b80',
          '000': '#fff',
        },
        'sidebar': {
          '900': '#000c3f',
          '000': '#fff'
        },
        'navbar': {
          '900': '#000932'
        }
      },
    },
    // @tailwindcss-transitions overrides
    transitionDuration: {
      'default': '180ms',
      '0': '0ms',
      '180': '160ms',
      '200': '200ms',
      '240': '240ms',
      '320': '320ms',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions')(),
  ]
};
