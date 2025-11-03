import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0C0C0C',
          gold: '#D4AF37',
        },
        text: {
          light: '#F3F0E9',
        },
        accent: {
          'gold-light': 'rgba(212, 175, 55, 0.1)',
        },
        success: {
          green: '#10B981',
        },
        error: {
          red: '#EF4444',
        },
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'almarai': ['Almarai', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'arabic': ['Cairo', 'Almarai', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2rem, 5vw, 3rem)',
        'heading': 'clamp(1.5rem, 3vw, 2rem)',
        'body': 'clamp(1rem, 2vw, 1.125rem)',
        'small': 'clamp(0.875rem, 1.5vw, 1rem)',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '40px',
        'component': '24px',
        'form-field': '16px',
      },
      animation: {
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config