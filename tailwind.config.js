/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Source Sans Pro', 'sans-serif'], 
        'subheading': ['Poppins', 'sans-serif'],      
        'body': ['Open Sans', 'sans-serif'],          
      },
    },
  },
  plugins: [],
}

