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
        'africa-primary': 'var(--color-primary)',
        'africa-secondary': 'var(--color-secondary)',
        'africa-accent': 'var(--color-accent)',
        'africa-dark': 'var(--color-dark)',
        'africa-light': 'var(--color-light)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}

export default config