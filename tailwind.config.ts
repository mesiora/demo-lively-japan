import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        'noto-sans-japanese': [
          'Noto Sans Japanese',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      colors: {
        dark: '#1c1b22',
      },
    },
  },
}
