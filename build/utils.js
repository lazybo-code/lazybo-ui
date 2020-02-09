const path = require('path');
const join = path.join;
const resolve = (dir) => path.join(__dirname, '../', dir);
const fs = require('fs');
const { outputPath } = require('../config/index');
const chalk = require('chalk');

module.exports = {
  getAssetsPath(_path = '.') {
    return path.posix.join(outputPath, _path)
  },
  resolve(_path) {
    return _path ? path.resolve(__dirname, _path) : path.resolve(__dirname, '..', outputPath)
  },
  isProduct: ['production', 'prod'].includes(process.env.NODE_ENV),
  env: process.env.NODE_ENV,
  chalkConsole: {
    success: () => {
      console.log(chalk.green(`～～～～～～～～～～～～～～～～～～～～～～～～～`));
      console.log(chalk.green(`～～～～～～～       打包成功!      ～～～～～～～`));
      console.log(chalk.green(`～～～～～～～～～～～～～～～～～～～～～～～～～`))
    },
    building: (index, total) => {
      console.log(chalk.blue(`打包第${index}/${total}个文件...`))
    }
  },
  fsExistsSync: (_path) => {
    try {
      fs.accessSync(_path, fs.F_OK)
    } catch (e) {
      return false
    }
    return true
  },
  getComponentEntries(path) {
    let files = fs.readdirSync(resolve(path));
    const componentEntries = files.reduce((ret, item) => {
      const itemPath = join(path, item);
      const isDir = fs.statSync(itemPath).isDirectory();
      if (isDir) {
        ret[item] = join(itemPath, 'index.js');
      } else {
        const [name] = item.split('.');
        ret[name] = itemPath;
      }
      return ret
    }, {});
    console.dir(componentEntries);
    return componentEntries
  },
};

