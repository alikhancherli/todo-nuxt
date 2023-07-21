// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon','@pinia/nuxt','@formkit/nuxt'],
  components:['~/components'],
  runtimeConfig:{
    public:{
      userAccessTokenKey : 'token',
      apiBaseUrl :'http://localhost:5125/api/'
    }
  },
  dirs: [
    // Scan top-level modules
    'composables'
  ]
})
