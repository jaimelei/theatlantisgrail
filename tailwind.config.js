/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          950: '#030712',
          900: '#0a0f1e',
          800: '#111936',
          700: '#1a2550',
          400: '#6b7cb5',
        },
        parchment: {
          50: '#fdfaf3',
          100: '#f8f1e2',
          200: '#f0e4cc',
          300: '#e0cfa8',
          600: '#8a7350',
        },
        wine: {
          700: '#6b001e',
          600: '#8b0a2d',
          500: '#a81237',
          400: '#c93a5e',
        },
        royal: {
          700: '#09449e',
          600: '#1a5bc4',
          500: '#3b76de',
        },
        gold: {
          500: '#c89a30',
          400: '#e8b84a',
          300: '#f0cf72',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        editorial: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(232, 184, 74, 0.15)',
        lift: '0 8px 30px rgba(0, 0, 0, 0.3)',
        soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'grail-pulse': 'grailPulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'progress-fill': 'progressFill 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        grailPulse: {
          '0%, 100%': { opacity: '0.85', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.08)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        progressFill: {
          from: { width: '0%' },
          to: { width: 'var(--progress-width)' },
        },
      },
    },
  },
  plugins: [],
}