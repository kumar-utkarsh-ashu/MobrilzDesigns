/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        mobrilz: {
          navy: '#09143f',
          darkbg: '#060d28',
          surfaceDark: '#0b1647',
          blue: '#3779cb',
          cobalt: '#275599',
          royal: '#18346b',
          highlight: '#9abbe3',
          canvasLight: '#fbfcfd',
          cardLight: '#ffffff',
          borderLight: '#e2e8f0',
          borderDark: 'rgba(55, 121, 203, 0.25)',
        }
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        wide: '0.04em',
        wider: '0.08em',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-ping': 'radarPulse 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        radarPulse: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
};
