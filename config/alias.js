const utils = require('../build/utils')
module.exports = {
  resolve: ['.ts', '.js', '.vue', '.json'],
  alias: {
    '@': utils.resolve('../examples'),
    '@p': utils.resolve('../packages'),
  }
}
