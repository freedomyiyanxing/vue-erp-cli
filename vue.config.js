module.exports = {
  lintOnSave: 'default',
  productionSourceMap: true,
  devServer: {
    // 端口配置
    port: 7001,
    disableHostCheck: true,
    // 反向代理配置
    proxy: {
      '/api': {
        target: "http://wms-api.bomman.com",
        // target: "http://192.168.1.254:9000",
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.2.248:9000',
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // },
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
