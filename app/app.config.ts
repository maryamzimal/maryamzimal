export default defineAppConfig({
  footer: {
    credits: `© ${new Date().getFullYear()} Maryam Zimal. All rights reserved.`,
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-instagram',
      to: 'https://go.nuxt.com/discord',
      target: '_blank',
      'aria-label': 'Nuxt on Discord'
    }, {
      icon: 'i-simple-icons-whatsapp',
      to: 'https://go.nuxt.com/x',
      target: '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  }
})
