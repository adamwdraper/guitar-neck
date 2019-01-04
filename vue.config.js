// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/guitar-neck/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/base.scss";`
      }
    }
  }
}
