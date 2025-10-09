/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mediterranean: '#0077B6',
        sand: '#F4E1C1',
        midnight: '#023E8A'
      },
      fontFamily: {
        sans: ['\"Poppins\"', '\"Inter\"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
