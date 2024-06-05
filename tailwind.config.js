/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #c79081 0%, #dfa579 100%);',
      },
      fontFamily: {
        'mukta': ['Mukta', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'kalam': ['Kalam', 'cursive'],
        'sanss': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

