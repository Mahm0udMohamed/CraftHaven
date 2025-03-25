/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7f5',
          100: '#e6ebe6',
          200: '#c5d3c5',
          300: '#9db49d',
          400: '#708f70',
          500: '#4A704A', // Main primary color
          600: '#3d5c3d',
          700: '#334d33',
          800: '#2b402b',
          900: '#243024',
          950: '#0d110d',
        },
        craft: {
          light: {
            bg: '#faf6f1',
            text: '#2d2416',
            accent: '#8b6f4e'
          },
          dark: {
            bg: '#1A1A1A',
            text: '#FFFFFF',
            accent: '#4A704A'
          }
        }
      },
      fontFamily: {
        display: ['Lora', 'serif'],
        body: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};