import config from './web.config'

const theme = require('./themes/' + config.theme)

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/**/*.html',
      'src/**/*.scss',
      'src/**/*.vue',
    ],
    options: {
      safelist: [
        /^bg-/i,
        /^text-/i,
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...theme.colors,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
