module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-action': {
          '900': '#000',
          '700': '#262626',
          '500': '#8c8c8c',
          '000': '#fff',
        },
        'secondary-action': {
          '900': '#fff',
          '700': '#d9d9d9',
          '500': '#a6a6a6',
          '000': '#000',
        },
        'danger-action': {
          '900': '#e00',
          '700': '#fa4f31',
          '500': '#ff9b80',
          '000': '#fff',
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
