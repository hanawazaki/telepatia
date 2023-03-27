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
        '46': '46px',
      },
      spacing: {
        '14': '14px',
        '21': '6rem',
        '23': '23px',
        '30': '30px',
        '45': '45px',
        '50': '50px',
        '70': '70px',
        '100': '100px',
        '120': '120px',
        '240': '240px',
        '297': '297px',
        '310': '310px',
        '316': '316px',
        '366': '366px',
        '-2': '-2rem',
        '-025': '-0.25rem;'
      },
      lineHeight: {
        '30': '30px',
        '60': '60px',
      },
      borderRadius: {
        '10': '10px',
        '14': '14px'
      },
      boxShadow: {
        '3xl': '4px 6px 30px rgba(0, 0, 0, 0.05);'
      }
    },
  },
  plugins: [],
}
