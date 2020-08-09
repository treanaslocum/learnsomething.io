/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Work Sans', 'sans-serif'],
      body: ['Work Sans', 'sans-serif'],
    },
    opacity: {
      20: '.2',
      30: '.3',
      40: '.4',
      50: '.5'
    },
    colors: {
      white: '#ffffff',

      red: {
        500: '#F56565',
      },
      orange: {
        900: '#FF6600',
      },
      blue: {
        900: '#2F2E41',
        800: '#585766',
      },
      black: {
        900: '#464648',
        800: '#6a6a6c',
      },
      purple: {
        600: '#847ee5',
        500: '#938DFF',
        400: '#9d98ff',
      },
      grey: {
        100: '#D4D1FF',
        200: '#EFEFEF',
        300: '#938DFF40',
        400: '#dcdaff',
        500: '#EFEEFF',
        600: '#938DFF66',
        700: '#BABABA',
        800: '#E1E0F1',
        900: '#E8E8E8',
      },
      green: {
        300: '#B9EA6A',
      },
    },
  },
  variants: {},
  plugins: []
}
