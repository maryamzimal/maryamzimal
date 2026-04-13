// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/mdc',
    '@nuxt/ui',
    '@nuxthub/core',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  ui: { content: true },
  compatibilityDate: '2026-04-13',
  eslint: { config: { stylistic: true } },
  icon: {
    serverBundle: {
      collections: ['lucide', 'simple-icons']
    }
  },
})
