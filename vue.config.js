const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    port: 1903
  },
  publicPath: IS_PROD ? '/vue-datepicker-ui/' : '/',
  pages: {
    index: {
      // entry for the page
      entry: './development/main.js',
      // the source template
      template: './development/public/index.html',
      title: 'VUE DATEPICKER UI - EXAMPLES'
    }
  }
}