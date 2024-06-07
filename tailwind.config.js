const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class",
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
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
