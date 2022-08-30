/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brandWhite: '#fff',
        brandBg: '#042044',
        brandPink: '#FB63C3',
        brandViolet: '#546EFB',
        dogcatcherRed: '#EA2A69',
        ouruniverseWhite: '#F6F8FF',
        ouruniversePurple: '#170326'
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px'
      },
      fontFamily: {
        montserrat: ['Montserrat']
      },

      screens: {
        xs: '380px',
        xss: '460px'
      }
    }
  },
  plugins: []
}
