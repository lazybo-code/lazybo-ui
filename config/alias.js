const utils = require('../build/utils');
module.exports = {
  resolve: ['.js', '.vue', '.json'],
  alias: {
    '@s': utils.resolve('../src'),
    '@p': utils.resolve('../packages'),
    '@': utils.resolve('../examples')
  }
};
