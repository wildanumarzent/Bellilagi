/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true, // to generate utilities as !important
  content: [
    // add the paths to all of your template files
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/**/*.{js,ts,jsx,tsx,scss}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        Tokopedia: {
          primary: '#ffffff',
          secondary: '#181a2a',
          accent: '#67cba0',
          neutral: '#181a2a',
          'base-100': '#ffffff',
          info: '#ffffff',
          success: '#c9a036',
          warning: '#fbbd23',
          error: '#f87272',

          '--rounded': '2rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '2rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
        Belilagi: {
          primary: '#ffffff',
          secondary: '#181a2a',
          accent: '#67cba0',
          neutral: '#181a2a',
          'base-100': '#ffffff',
          info: '#ffffff',
          success: '#c9a036',
          warning: '#fbbd23',
          error: '#f87272',

          '--rounded': '2rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '2rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
        Shopee: {
          primary: '#ee4d2d',
          secondary: '#ffffff',
          accent: '#ffffff',
          neutral: '#181a2a',
          'base-100': '#ffffff',
          info: '#ee4d2d',
          success: '#ff7337',
          warning: '#fbbd23',
          error: '#f87272',

          '--rounded': '2rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '2rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
        MeteorNextJs: {
          primary: '#f40b13',
          secondary: '#ffffff',
          accent: '#ffffff',
          neutral: '#111827',
          'base-100': '#ffffff',
          info: '#f40b13',
          success: '#f40b13',
          warning: '#fde68a',
          error: '#f40b13',
          header_color: '#f40b13',

          'color-scheme': 'light',
          '--rounded': '2rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '2rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--rounded-box': '2rem',

          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
        Meteor: {
          primary: '#ff0000',
          secondary: '#6AC5EF',
          accent: '#97d159',
          neutral: '#262438',
          'base-100': '#FFFFFF',
          info: '#6EB8D4',
          success: '#76EFD7',
          warning: '#D1710A',
          error: '#E34A78',

          'color-scheme': 'light',
          '--rounded': '2rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '2rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  },
};
