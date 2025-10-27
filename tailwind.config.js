/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: '#8A9A5B',
        sage: '#AFC8A6',
        beige: '#F2E8CF',
        cloud: '#E8E8E4',
        charcoal: '#27313B',
        tealnight: '#2C4A52'
      },
      fontFamily: {
        sans: ['"Poppins"', '"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 45px -15px rgba(39, 49, 59, 0.25)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
