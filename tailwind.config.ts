import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0D1B2A',
        ocean: '#1B3A57',
        mint: '#16C79A',
        sand: '#F4F6F8'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(8, 20, 39, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
