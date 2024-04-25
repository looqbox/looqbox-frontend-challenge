/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-default': 'linear-gradient(to right, #307dd4, #ffeb3b 300%)',
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        scroll: 'scroll 1.4s ease',
      },
    },
  },
  plugins: [],
};
