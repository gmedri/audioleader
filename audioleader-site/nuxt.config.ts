// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'AudioLeader - Amplificadores Profissionais de Alta Potência',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AudioLeader é referência em amplificadores profissionais no Brasil. Oferecemos amplificadores de alta potência com excelente custo-benefício para sonorização profissional. Linhas AL, ALK, ALS, SLIM e INBOX.' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'keywords', content: 'amplificadores profissionais, amplificador de potência, AudioLeader, amplificador brasil, sonorização profissional, amplificador AL, amplificador ALS, amplificador SLIM, amplificador INBOX, equipamentos de áudio, som profissional' },
        { name: 'author', content: 'AudioLeader' },
        { name: 'language', content: 'pt-BR' },
        { name: 'geo.region', content: 'BR' },
        { name: 'geo.placename', content: 'Brasil' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'AudioLeader - Amplificadores Profissionais de Alta Potência' },
        { property: 'og:description', content: 'Referência em amplificadores profissionais no Brasil. Alta potência com excelente custo-benefício para sonorização profissional.' },
        { property: 'og:site_name', content: 'AudioLeader' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'AudioLeader - Amplificadores Profissionais' },
        { name: 'twitter:description', content: 'Amplificadores de alta potência para sonorização profissional' },
        { name: 'theme-color', content: '#1a1a1a' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://audioleader.com.br' }
      ]
    }
  },

  nitro: {
    preset: 'vercel',
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
        }
      },
      '/produtos/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    }
  }
})
