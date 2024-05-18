/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carro-background': "url('/carrobg.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('rippleui'),
    require('@sira-ui/tailwind')({
      prefix: 'sira-',
      excludedThemes: ['dark', 'light', 'whateverTheme'],
    }),
  ],

  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
    darkTheme: 'light',
    prefix: 'daisy-',
  },
};

//https://www.ripple-ui.com/docs/get-started/installation
//https://daisyui.com/docs/install
//https://sira.riazer.com/docs/guide/installation
