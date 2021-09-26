const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: [
    './docs/**/*.html',
    './docs/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'false' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.sky,
        cyan: colors.cyan,
        teal:colors.teal,
        orange:colors.orange,
        rose:colors.rose,
        fuchsia:colors.fuchsia,
        gray:colors.gray,
      },
      boxShadow: {
        'offset-teal': '4px 4px #14B8A6'
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme('colors.gray.100'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.600'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.700'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
