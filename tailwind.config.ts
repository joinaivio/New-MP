import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-white': '#FFFFFF',
        'brand-brown': {
          DEFAULT: '#6B4A2F',
          light: '#A0744B',
        },
        'brand-dark': '#121212',
      },
      borderRadius: {
        'smooth': '14px',
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(0,0,0,0.08)',
        'soft-hover': '0 12px 28px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
export default config
