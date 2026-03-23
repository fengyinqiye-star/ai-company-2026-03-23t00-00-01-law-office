import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          dark: '#0F1B33',
          light: '#2A3F6A',
        },
        gold: {
          DEFAULT: '#C4A265',
          light: '#D4B87A',
          dark: '#A88B50',
        },
        cta: {
          DEFAULT: '#D4763C',
          hover: '#C06830',
          light: '#E08A52',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#CCCCCC',
          400: '#999999',
          500: '#666666',
          600: '#4A4A4A',
          700: '#333333',
          800: '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['var(--font-noto-serif-jp)', 'serif'],
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.4', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
