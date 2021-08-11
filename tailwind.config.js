module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Calibri"', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '10xl': '9rem',
        '11xl': '10rem',
        '12xl': '11rem',
        '13xl': '12rem',
        '14xl': '13rem',
        '15xl': '14rem',
      },
      colors: {
        background: '#FFFBF7',
        'p-blue': '#005885',
        'p-blue-dark': '#023E5D',
        'p-brown-light': '#FAF2ED',
        'p-brown': '#DFBBA6',
        'p-brown-dark': '#CE9D81',
        'p-gray': '#EDEBE9',
        'p-gray-dark': '#85959D',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [require('tailwindcss-dir')()],
};
