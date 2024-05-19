import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>> {
  content: [
    './components/**/*.{vue,js}',  
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './middleware/**/*.{js,ts}',
    './*.vue'
  ],
  safelist: [
    'scroll-pt-20',
    'md:scroll-pt-36'
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fdf3f3',
          '100': '#fbe5e5',
          '200': '#f8d0d0',
          '300': '#f2afaf',
          '400': '#e88181',
          '500': '#db5858',
          '600': '#cc4e4e',
          '700': '#a72e2e',
          '800': '#8a2a2a',
          '900': '#732929',
        },
        'secondary': {
          '50': '#fffdeb',
          '100': '#fef9c7',
          '200': '#fdf28a',
          '300': '#fce64d',
          '400': '#fbd624',
          '500': '#f5b80e',
          '600': '#d98e06',
          '700': '#b46509',
          '800': '#924e0e',
          '900': '#78400f',
        },      
      }
    },
  },
  plugins: [],
}
