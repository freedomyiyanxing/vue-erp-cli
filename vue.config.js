module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: () => {
    // config.resolve.alias.set('~', '/src/assets/styles');
    //忽略的打包文件 在index.html中使用cnd
    // config.externals({
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'vuex': 'Vuex',
    //   'axios': 'axios',
    //   'element-ui': 'ELEMENT',
    // })
    // const entry = config.entry('app')
    // entry
    //   .add('babel-polyfill')
    //   .end()
    // entry
    //   .add('classlist-polyfill')
    //   .end()
    // entry
    //   .add('@/mock')
    //   .end()
  },
  devServer: {
    // 端口配置
    port: 7001,
    disableHostCheck: true,
    // 反向代理配置
    proxy: {
      '/api': {
        target: "http://wms-api.bomman.com",
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.2.248:9000',
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  }
}
