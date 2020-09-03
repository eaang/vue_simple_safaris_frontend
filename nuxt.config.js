
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Simple Safaris',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Importing Proxima Nova Bold
      {
        rel: "stylesheet", 
        href: "https://use.typekit.net/oqp4bki.css"
      },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "~/plugins/vue-formulate"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    ['@nuxtjs/tailwindcss'],
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
    'nuxt-webfontloader',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: ' AIzaSyDKw5pDEPNd1xc8NYfsACVmv05bgV7fgtM ',
          authDomain: 'simplesafaris-3a35c.web.app',
          databaseURL: '',
          projectId: 'simplesafaris-3a35c',
          storageBucket: '',
          messagingSenderId: '',
          appId: '1:862428878222:web:0dceb4846f985fa8b000df',
          measurementId: ''
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  webfontloader: {
    google: {
      families: ['Noto+Sans+KR:100,300,400,500,700,900'] //Loads Lato font with weights 400 and 700
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
  },
  srcDir: 'src/',
  buildDir: 'functions/.nuxt',
}
