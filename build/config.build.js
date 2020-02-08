const {resolve, getComponentEntries} = require('./utils');
const pub = require('./config.pub');

module.exports = {
  productionSourceMap:false,
  outputDir: resolve('lib'),
  configureWebpack: {
    entry: {
      ...getComponentEntries('packages'),
    },
    output: {
      filename: '[name].js',
      libraryTarget: 'umd',
      libraryExport: 'default',
      library: 'LazyboUI',
    },
    resolve: pub.resolve,
  },
  css: {
    sourceMap: true,
    extract: {
      filename: 'theme/[name].css'
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
    config.plugins.delete('copy');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('html');
    config.plugins.delete('hmr');
    config.entryPoints.delete('app');

    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(option => {
        option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]';
        return option
      })
  }
};
