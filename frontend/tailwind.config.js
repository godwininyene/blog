/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        'dark':"#222",
        'primary':'#228B22',
        'primary-light':'#50C878',
      },
      boxShadow:{
        white:'0px,0px,0px,4px,rgba(255,255,255,0.5)',
      },
    },
  },
  plugins: [],
}

