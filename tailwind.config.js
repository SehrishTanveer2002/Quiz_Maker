/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        customBlue: '#181E4E',
        customYellow: '#FFC145',
        customBlueLight: '#0066BA',
        customSkyBlue: '#0066ba',
        customlightseagreen: 'lightseagreen',
        customred: 'rgb(207, 51, 51)',
        customgray: '#DFE0E4',
        customlightGrayishBlue: '#f8f8ff',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        DMSans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        'base-lg': '1.5rem',
        '2.3rem': '2.3rem',
        '1.325rem': '1.325rem',
      },

      fontWeight: {
        '550': '550',
      },

      letterSpacing: {
        '7px': '7px',
        '1px' : '1px',
        '34px': '34px',
        'custom': '.1em',
      },

      margin: {
        '5px': '5px',
      },
    },
  },
  plugins: [],
}

