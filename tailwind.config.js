/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4299e1', // Lighter sky blue
          dark: '#3182ce',   // Medium sky blue
          light: '#63b3ed',  // Very light sky blue
        },
        secondary: '#f0f9ff', // Lightest blue background
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      blur: {
        '2xl': '40px',
        '3xl': '60px',
      },
    },
  },
  plugins: [],
  safelist: [
    'blur-2xl',
    'blur-3xl',
    'backdrop-blur-sm'
  ]
}
