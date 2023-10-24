/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
      },
    },
    extend: {
      colors:{
        gray:"#7F7F7F",
        purple:"#574B9A",
        whitelight:"#EDF0F5",
        blue:"#221C47",
        greenlight:"#F0EDFF"
      }
    },
  },
  plugins: [],
}