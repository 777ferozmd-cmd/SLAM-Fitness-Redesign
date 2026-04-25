import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ferous-bg':       '#0D0D0D',
        'ferous-section':  '#141414',
        'ferous-card':     '#1A1A1A',
        'ferous-accent':   '#FF1A1A',
        'ferous-accent-hover': '#CC0000',
        'ferous-border':   '#2A2A2A',
        'ferous-text':     '#FFFFFF',
        'ferous-body':     '#B0B0B0',
        'ferous-muted':    '#6B6B6B',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        'ferous-sm':  '8px',
        'ferous-md':  '12px',
        'ferous-lg':  '16px',
        'ferous-xl':  '24px',
      },
      maxWidth: {
        'container': '1200px',
      },
      animation: {
        'pulse-whatsapp': 'pulse-whatsapp 2.5s ease-in-out infinite',
        'fade-up':        'fade-up 0.6s ease forwards',
      },
      keyframes: {
        'pulse-whatsapp': {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(0,0,0,0.4)' },
          '50%':       { boxShadow: '0 4px 32px rgba(37,211,102,0.3)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
