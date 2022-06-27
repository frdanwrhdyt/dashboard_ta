// const defaultTheme = require('tailwindcss/defaultConfig');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // important: true,
  theme: {
    // ...defaultTheme,
    // colors:{
    //   ...defaultTheme.colors,
    //   primary:'',
    //   white:'#ffffff'
    // },
    extend: {},
  },
  plugins: [],
};
