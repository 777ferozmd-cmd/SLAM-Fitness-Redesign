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
        'slam-bg':       '#0D0D0D',
        'slam-section':  '#141414',
        'slam-card':     '#1A1A1A',
        'slam-accent':   '#FF1A1A',
        'slam-accent-hover': '#CC0000',
        'slam-border':   '#2A2A2A',
        'slam-text':     '#FFFFFF',
        'slam-body':     '#B0B0B0',
        'slam-muted':    '#6B6B6B',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        'slam-sm':  '8px',
        'slam-md':  '12px',
        'slam-lg':  '16px',
        'slam-xl':  '24px',
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
