/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Rainbow colors
        'rainbow-red': '#FF3B30',
        'rainbow-orange': '#FF9500',
        'rainbow-yellow': '#FFCC00',
        'rainbow-green': '#4CD964',
        'rainbow-cyan': '#5AC8FA',
        'rainbow-blue': '#007AFF',
        'rainbow-purple': '#5856D6',
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'rainbow-gradient': 'rainbow 15s ease infinite',
      },
      keyframes: {
        rainbow: {
          '0%': { 'background-position': '0%' },
          '100%': { 'background-position': '200%' },
        }
      }
    },
  },
  plugins: [],
}