/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Space : ['Space Grotesk', 'sans-serif'],
        Oxygen : [ 'Oxygen', 'sans-serif'],
        Dosis : ['Dosis', 'sans-serif'],
        Lilita :  ['Lilita One','cursive'],
        Cabin: ['Cabin', 'sans-serif']
        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
