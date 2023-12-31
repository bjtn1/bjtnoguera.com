/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    screens: {
      "sm": "640px",
      "md": "853px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    colors: {
      "black": "#16161e",
      "search-bg": "rgba(255,255,255,.08)",
      "white": "#c8d3f5",
      "white-50": "#c8d3f580",
      "blue": "#82aaff",
      "cyan": "#86e1fc",
      "purple": "#fca7ea",
      "magenta": "#c099ff",
      "orange": "#ff966c",
      "yellow": "#ffc777",
      "green": "#c3e88d",
      "red": "#ff757f",
      "teal": "#4fd6be",
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

