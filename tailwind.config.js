/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#f7f2e8',
          base: '#eee6d8',
          dark: '#dfd4c0',
        },
        ink: {
          light: '#2e2b26',
          base: '#1b1916',
          deep: '#0f0e0c',
        },
        comic: {
          red: '#ef4444',
          crimson: '#dc2626',
          orange: '#f97316',
          yellow: '#facc15',
          gold: '#eab308',
          cyan: '#06b6d4',
          blue: '#2563eb',
          purple: '#8b5cf6',
          emerald: '#10b981',
          lime: '#84cc16',
        },
        darkbg: {
          950: '#090a0f',
          900: '#0f111a',
          850: '#151824',
          800: '#1c2030',
          700: '#282d42',
        }
      },
      fontFamily: {
        display: ['Impact', 'Arial Black', 'Trebuchet MS', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'ink-sm': '3px 3px 0px 0px rgba(0, 0, 0, 1)',
        'ink': '5px 5px 0px 0px rgba(0, 0, 0, 1)',
        'ink-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'ink-xl': '12px 12px 0px 0px rgba(0, 0, 0, 1)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'glow-orange': '0 0 20px rgba(249, 115, 22, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
