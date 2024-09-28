/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        primary: '#0ea5e9',
        secondary: {
          
          100:'#7c3aed',
          200:'#ec4899',
        }
      },
      fontSize:{
        pro: '10rem',
      },
      fontFamily: {
      nunitro: 'Nunito'
      
      },

    },
  },
  plugins: [],
}

