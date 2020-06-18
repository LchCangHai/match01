
module.exports = {
  devServer: {
    /* 自动打开浏览器 */
    open: false,
    // host: "192.168.0.137",
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/foo': {
        target: 'http://chatroom.mr-lin.site',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/foo': ''
        }
      },
      '/too': {
        target: 'http://sms.mr-lin.site',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/foo': ''
        }
      }
    },
    before: () => {}
  },
}
