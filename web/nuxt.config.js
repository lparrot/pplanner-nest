const isDev = process.env.NODE_ENV === 'development'
import config from './web.config'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: config.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@/assets/styles/all.scss',
  ],

  static: {
    prefix: false,
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/app.plugin',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '@/components/',
    { path: '@/components/pplanner/', global: true },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    prefix: '/api',
    proxy: true,
  },

  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: false,
    },
  },

  auth: {
    cookie: false,
    strategies: {
      local: {
        token: {
          property: 'access_token',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          user: { url: '/auth/profile', method: 'get' },
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/',
    },
  },

  publicRuntimeConfig: {
    app: config,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,

    quiet: !isDev,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
    },

    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false,
        },
      },
    },
  },
}
