# Getting started with the Thea template

1. Install all dependencies

```shell
npm install
```

2. Build the CSS

```shell
npm run build
```

3. Serve

```
npm run serve
```



## Notes

### Purging:

Thea purges your css by default. This improves load time as the css file size reduces quite a bit!

To disable this replace your tailwind.config.js with:

```js
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: false, // or 'false' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        teal:colors.teal,
        orange:colors.orange,
        rose:colors.rose,
        fuchsia:colors.fuchsia,
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
```



## License

See our [website](https://easyui.dev/license)