import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0B172D',
          accent: '#00E0FF',
          purple: '#6A57F5',
          cyber: '#00FFC6',
          surface: {
            DEFAULT: '#121F36',
            60: 'rgba(18, 31, 54, 0.6)',
          },
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0AEC0',
        },
      },
      fontFamily: {
        futura: ['system-ui', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        particle: 'particle 20s linear infinite',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
        hologram: 'hologram 3s ease-in-out infinite',
        orbit: 'orbit 10s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 224, 255, 0.4)' },
          '100%': {
            boxShadow:
              '0 0 40px rgba(0, 224, 255, 0.8), 0 0 60px rgba(0, 224, 255, 0.4)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        particle: {
          '0%': {
            transform: 'translateX(-100px) translateY(100px)',
            opacity: '0',
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': {
            transform:
              'translateX(calc(100vw + 100px)) translateY(-100px)',
            opacity: '0',
          },
        },
        'neon-pulse': {
          '0%': {
            textShadow: '0 0 10px rgba(0, 224, 255, 0.8)',
          },
          '100%': {
            textShadow:
              '0 0 20px rgba(0, 224, 255, 1), 0 0 30px rgba(0, 224, 255, 0.8)',
          },
        },
        hologram: {
          '0%, 100%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          },
          '25%': {
            transform: 'perspective(1000px) rotateX(5deg) rotateY(-2deg)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(2deg)',
          },
          '75%': {
            transform: 'perspective(1000px) rotateX(-2deg) rotateY(0deg)',
          },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(150px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(150px) rotate(-360deg)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config