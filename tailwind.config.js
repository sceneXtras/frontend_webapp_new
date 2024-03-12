/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      animation: {
        borderGlow: 'borderGlow 2.6s infinite linear',
        pop: 'pop 0.5s ease-out forwards',
        shine: 'shine 1s linear infinite',
      },
      keyframes: {
        borderGlow: {
          '0%': { borderColor: 'rgba(255, 255, 255, 0)' },
          '100%': { borderColor: 'rgba(255, 255, 255, 0)' },
          '50%': { borderColor: 'hsl(32, 100%, 50%)' },
        },
        pop: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
          '80%': { transform: 'scale(1.1)' },
        },
        shine: {
          '0%': { backgroundPosition: '-100px 0' },
          '100%': { backgroundPosition: '100px 0' },
        },
      },
    },
  },
};
