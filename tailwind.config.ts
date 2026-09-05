import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F33',
        'dark-navy': '#07131F',
        'off-white': '#F7F5EF',
        emerald: '#0E8F73',
        mint: '#DDF4EA',
        amber: '#F3B562',
        'slate-muted': '#667085',
        'border-light': '#D9E1E7',
        error: '#D95C5C',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        arabic: [
          'IBM Plex Sans Arabic',
          'Noto Sans Arabic',
          'Tahoma',
          'sans-serif',
        ],
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};

export default config;
