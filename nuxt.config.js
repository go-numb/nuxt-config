const pkg = require('./package')


module.exports = {
  mode: 'universal',
  server: {
    port: 3333, // デフォルト: 3000
    host: '0.0.0.0', // デフォルト: localhost
  },
  devServer: {
    port: 5000,
    host: 'localhost',
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'robots', name: 'robots', content: 'index' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/xx.ico' } 
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['cookie-universal-nuxt', { parseJSON: false }],
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/axios',
  ],

  axios: {
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  generate: {
    // dist to ../static
    // 上階層にgenerate
    dir: "../static"
  }
}

