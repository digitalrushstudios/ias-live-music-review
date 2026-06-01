/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#050506',
        surface:   '#101014',
        surface2:  '#16161C',
        text:      '#F5F5F5',
        muted:     '#9B9BA3',
        stroke:    '#24242A',
      },
      fontFamily: {
        sans:      ['Inter', 'sans-serif'],
        editorial: ['"Instrument Serif"', 'serif'],
      },
      backgroundImage: {
        'accent-gradient':   'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
        'accent-gradient-v': 'linear-gradient(180deg, #8B5CF6 0%, #38BDF8 100%)',
      },
      animation: {
        'marquee':    'marquee 30s linear infinite',
        'marquee2':   'marquee2 30s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
