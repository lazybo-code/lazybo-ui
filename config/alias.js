const utils = require('../build/utils')
module.exports = {
  resolve: ['.js', '.vue', '.json'],
  alias: {
    '@p': utils.resolve('../packages'),
    '@': utils.resolve('../examples')
  }
}
