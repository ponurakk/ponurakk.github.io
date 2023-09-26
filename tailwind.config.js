/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'noise': 'noiseFadeout 1s 0s forwards',
        'bounce-fade': 'bounceFade 1s ease-in-out infinite'
      },
      keyframes: {
        'noiseFadeout': {
          '0%': { background: 'url("/noise.gif")' },
          '100%': { background: 'none' },
        },
        'bounceFade': {
          '0%': {
            transform: 'translateY(0px)',
            opacity: 0
          },
          '50%': {
            opacity: 1
          },
          '100%': {
            transform: 'translateY(15px)',
          }
        }
      },
      colors: {
        select: '#5c5c64'
      },
      flex: {
        '10a': '1 0 auto'
      }
    },
  },
  plugins: [],
}

