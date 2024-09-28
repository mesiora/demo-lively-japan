// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  nitro: {
    static: true,
  },

  app: {
    head: {
      titleTemplate: '%s - Discover the Vibrant Heart of JAPAN ',
      title: 'Demo',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A demo Nuxt.js project',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: ['@nuxt/ui', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Lato: [400, 900],
      'Source Code Pro ': [600],
    },
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-hexrgba': {},
      'postcss-import': {},
    },
  },
})
