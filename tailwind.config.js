/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'noise': 'noiseFadeout 1s 0s forwards'
      },
      keyframes: {
        'noiseFadeout': {
          '0%': { background: 'url("noise.gif")' },
          '100%': { background: 'none' },
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

