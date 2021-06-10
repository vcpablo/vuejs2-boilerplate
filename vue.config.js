const path = require('path')

const {
  CheckEsVersionPlugin
} = require('@bitjourney/check-es-version-webpack-plugin')

/**
 * Custom environment variables
 *
 * - requires VUE_APP_ prefix
 * - requires application restart
 */
process.env.VUE_APP_API_BASE_URL

// Here you set the path of the application if it is different on production
process.env.VUE_APP_PUBLIC_PATH =
  process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  productionSourceMap: false,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  configureWebpack: {
    plugins: [
      new CheckEsVersionPlugin({
        esVersion: 5
      })
    ],
    resolve: {
      modules: [path.resolve(__dirname, './node_modules')],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  transpileDependencies: ['bootstrap-vue', 'vue-loader', 'dom-serializer']
}
