/** @type {import('tailwindcss').Config} */


const { fontFamily } = require('tailwindcss/defaultTheme');
const brandColors = require('./src/lib/colors');


module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: brandColors,
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      backgroundImage: {
        brandGradient: `linear-gradient(120deg, ${brandColors.primary} 0%, ${brandColors.primaryDark} 100%)`,
        brandGradientText: `linear-gradient(100deg, ${brandColors.primary} 10%, ${brandColors.primaryDark} 55%, ${brandColors.primary} 90%)`,
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}

