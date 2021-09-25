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
      },
      boxShadow: {
        'offset-teal': '4px 4px #14B8A6'
      },
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
