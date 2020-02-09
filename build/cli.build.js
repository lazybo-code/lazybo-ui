const { run } = require('runjs');
const { addons } = require('../config/rollup.build.config.js');
const { getAssetsPath, chalkConsole, resolve, fsExistsSync, getComponentEntries } = require('./utils');
const { styleOutputPath } = require('../config/index');
const { move, fileDisplay } = require('../script/file-handle');
const rimraf = require('rimraf');
const fs = require('fs');
const chalk = require('chalk');
const cssFiles = [];
function build({ input, output } = {}, index, arr) {
  chalkConsole.building(index + 1, arr.length);
  run(
    `vue-cli-service build --target lib --no-clean  --name ${output} --dest ${getAssetsPath()} ${input}`
  );
  cssFiles.push(`${output}.css`)
}

let pkg = [
  { input: 'src/index.js', output: 'index' }
];
let libList = getComponentEntries('packages');
Object.keys(libList).forEach((moduleName) => {
  pkg.push({ input: libList[moduleName], output: moduleName })
});
pkg = pkg.concat(addons);
pkg.forEach(build);
console.log(chalk.green(`～～～～～～～～～～～～～～～～～～～～～～～～～`));
console.log(chalk.green(`* 删除多余文件`));
rimraf(getAssetsPath('./demo.html'), function() {});
console.log(chalk.green(`* 创建样式文件夹`));
fs.mkdirSync(getAssetsPath(styleOutputPath));
console.log(chalk.green(`* 拷贝css文件到单独目录`));
cssFiles.forEach((cssFile) => {
  fsExistsSync(getAssetsPath(cssFile)) &&
    move(getAssetsPath(cssFile), getAssetsPath(styleOutputPath + '/' + cssFile))
});
console.log(chalk.green(`* 重命名common文件`));
fileDisplay(getAssetsPath(), (file) => {
  const reg = /.common/;
  if (reg.test(file)) {
    file = `../${file}`;
    move(resolve(file), resolve(file.replace(reg, '')))
  }
});
console.log(chalk.green(`* 删除umd文件`));
fileDisplay(getAssetsPath(), (file) => {
  const reg = /.umd/;
  if (reg.test(file)) {
    file = `../${file}`;
    rimraf(resolve(file), function() {});
  }
});
chalkConsole.success();
