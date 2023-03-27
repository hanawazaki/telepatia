/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cstDarkBlue': '#02044A',
        'cstPurple1': '#563AD6',
        'cstPurple2': '#6B52DB',
        'cstPurple3': '#B19FFF',
        'cstGrey': '#9B9CB7',
        'cstGreyDark': '#777790',
        'cstGreyLight': '#EAEBF4',
        'cstGreyWhite': '#F9F9FB',
      },
      fontSize: {
        '22': '22px',
      },
      spacing: {
        '30': '30px',
        '45': '45px',
        '100': '100px'
      }
    },
  },
  plugins: [],
}
