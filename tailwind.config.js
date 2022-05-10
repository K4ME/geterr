module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#ff4d4f',
          500: '#f5222d'
        }
      },
      borderRadius: {
        md: '4px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')]
}
