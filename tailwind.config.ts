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
        primary: {
          50: '#fef2f7',
          100: '#fde6f0',
          200: '#fccce1',
          300: '#faa2c8',
          400: '#f768a5',
          500: '#ed3e85',
          600: '#db2069',
          700: '#be154e',
          800: '#9d1543',
          900: '#85163b',
        },
      },
    },
  },
  plugins: [],
}
export default config
