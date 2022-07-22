const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      red: '#F73A3C',
      pink: '#FF00E4',
      purple: '#7B61FF',
      success: '#28FFBF',
      blackAstro: '#05010D',
      white: colors.white,
      transparent: colors.transparent,
      black: colors.black,
      'black-10': '#1E1A25',
      'cod-gray': '#121212',
    },
    extend: {
      fontSize: {
        'heading-1': ['2.5rem', '2.9375rem'],
        'heading-2': ['2rem', '2.375rem'],
        xxs: ['0.625rem', '0.875rem'],
      },
      spacing: {
        100: '25rem',
        30: '7.5rem',
        7.5: '1.875rem',
        15: '3.75rem',
      },
      borderRadius: {
        10: '0.625rem',
      },
      fontFamily: {
        'noto-sans': 'Noto Sans',
        raleway: 'Raleway',
      },
    },
  },
  plugins: [],
}
