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
    extend: {
      // This is how to define custom colors for tailwindcss' "prose" class
      // I don't know what the square brackets are for
      // So far, I'm deleting the square brackets to "enable" the custom colors on any tag with the prose class
      // To use these colors, you do 
      // <div class="prose prose-maincolors">{{ markdown }}</div>
      typography: ({ theme }) => ({
        maincolors: {
          css: {
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-headings': theme('colors.white-50'),
            // '--tw-prose-lead': theme('colors.white[700]'),
            '--tw-prose-links': theme('colors.blue'),
            // '--tw-prose-bold': theme('colors.white[900]'),
            // '--tw-prose-counters': theme('colors.white[600]'),
            // '--tw-prose-bullets': theme('colors.white[400]'),
            // '--tw-prose-hr': theme('colors.white[300]'),
            // '--tw-prose-quotes': theme('colors.white[900]'),
            // '--tw-prose-quote-borders': theme('colors.white[300]'),
            // '--tw-prose-captions': theme('colors.white[700]'),
            // '--tw-prose-code': theme('colors.white[900]'),
            // '--tw-prose-pre-code': theme('colors.white[100]'),
            // '--tw-prose-pre-bg': theme('colors.white[900]'),
            // '--tw-prose-th-borders': theme('colors.white[300]'),
            // '--tw-prose-td-borders': theme('colors.white[200]'),
            // '--tw-prose-invert-body': theme('colors.white[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.white[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.white[400]'),
            // '--tw-prose-invert-bullets': theme('colors.white[600]'),
            // '--tw-prose-invert-hr': theme('colors.white[700]'),
            // '--tw-prose-invert-quotes': theme('colors.white[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.white[700]'),
            // '--tw-prose-invert-captions': theme('colors.white[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.white[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.white[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.white[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

