// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon','@pinia/nuxt'],
  components:['~/components'],
  runtimeConfig:{
    public:{
      userAccessTokenKey : 'token',
      apiBaseUrl :'https://localhost:7112/api/'
    }
  },
  dirs: [
    // Scan top-level modules
    'composables'
  ]
})
