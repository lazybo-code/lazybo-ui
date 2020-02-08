const utils = require('./utils');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'examples': utils.resolve('examples'),
      'packages': utils.resolve('packages'),
      'lazybo-ui': utils.resolve('packages/index.ts'),
    }
  },
};
