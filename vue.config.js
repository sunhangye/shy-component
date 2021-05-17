module.exports = {
 pages: {
   index: {
     // 入口
     entry: 'examples/main.js',
     template: 'public/index.html',
     fileName: 'index.html'
   }
 },
 chainWebpack: config => {
   config.module
    .rule('js')
    .include
      .add('/packages')
      .end()
    .use('babel')
      .loader('babel-loader')
    .tap(options => options)
 }
}