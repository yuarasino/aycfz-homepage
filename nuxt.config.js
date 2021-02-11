export default {
  target: "static",

  srcDir: "src",

  head: {
    titleTemplate: (pageTitle) => {
      if (!pageTitle) {
        return "AYCFZ/えーゆーちごふれずも"
      }
      return `${pageTitle} | AYCFZ/えーゆーちごふれずも`
    },
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap",
      },
    ],
  },

  css: ["modern-css-reset/dist/reset.min.css", "@/assets/styles/global.styl"],

  plugins: [],

  components: true,

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api",
    "@nuxtjs/style-resources",
  ],

  modules: ["@nuxt/content"],

  build: {},

  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },

  generate: {
    interval: 1000,
  },

  styleResources: {
    stylus: ["@/assets/styles/import.styl"],
  },
}
