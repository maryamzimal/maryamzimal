// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxthub/core',
    '@nuxt/image',
    'nuxt-icon',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ui: { content: true },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  compatibilityDate: '2025-07-15',
  eslint: { config: { stylistic: true } },
})
