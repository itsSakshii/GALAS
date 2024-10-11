/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss}"],
  theme: {
    extend: {
      fontFamily:{
        body: ["AzeretMono", "sans-serif"],
        heading: ["Chillax", "serif"],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        customGray: '#151515',
      },
    },
  },
  plugins: [],
}

