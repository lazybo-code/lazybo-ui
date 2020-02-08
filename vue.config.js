const devConfig = require('./build/config.dev');
const buildConfig = require('./build/config.build');

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;
// module.exports = {
//   publicPath: '/',
//   outputDir: 'lib',
//   productionSourceMap: false,
//   configureWebpack: {
//     performance: {
//       hints: false
//     }
//   },
//   pages: {
//     index: {
//       entry: 'examples/main.ts',
//       template: 'public/index.html',
//       filename: 'index.html',
//     }
//   },
// };
