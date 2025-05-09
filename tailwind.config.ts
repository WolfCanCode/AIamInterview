import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'futuristic-bg': '#0a0f1a',
        'futuristic-accent': '#00ffe7',
        'futuristic-purple': '#7f00ff',
      },
      animation: {
        'gradient-slow': 'gradient 15s linear infinite',
        aurora: 'aurora 20s linear infinite',
        'aurora-reverse': 'aurora-reverse 25s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'subtle-slide': 'subtle-slide 15s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
        aurora: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'aurora-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'subtle-slide': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'conic/[in_oklch_longer_hue]':
          'conic-gradient(var(--tw-gradient-stops))',
        'radial-[at_center]':
          'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-futuristic': 'linear-gradient(90deg, #00ffe7, #7f00ff)',
        'gradient-futuristic-dark': 'linear-gradient(90deg, #00ffe7, #7f00ff)',
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(8px)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
    },
  },
  plugins: [],
};

export default config;
