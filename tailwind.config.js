/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // include other paths as needed
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: "#ffe5ec",
          100: "#fbb8c9",
          200: "#f28aa6",
          300: "#ea5c83",
          400: "#e12e60",
          500: "#D2003F", // Your main color
          600: "#a60032",
          700: "#7a0026",
          800: "#4e0019",
          900: "#23000c",
        },
      },
    },
  },
  plugins: [],
};
