/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F7BF6',
          light: '#5AA0FF',
          soft: '#E6F0FF'
        },
        accent: {
          pink: '#F76AA6',
          purple: '#8B5CF6'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F5F7FB'
        }
      },
      boxShadow: {
        card: '0 18px 45px rgba(15, 23, 42, 0.08)'
      },
      borderRadius: {
        card: '28px'
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        lora: ['Lora', 'serif']
      }
    }
  },
  plugins: []
}

