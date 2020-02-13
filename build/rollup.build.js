const fs = require('fs');
const { formatTypeList, addons, esDir } = require('../config/rollup.build.config.js');
const { styleOutputPath } = require('../config/index');
const { build } = require('./rollup.createConfig');
const { resolve, getAssetsPath, getComponentEntries } = require('./utils');
fs.mkdirSync(resolve());
fs.mkdirSync(getAssetsPath(styleOutputPath));
if ([...formatTypeList, ...addons].some((item) => item.format === esDir)) {
  fs.mkdirSync(getAssetsPath(esDir))
}
let pkg = [
  {input: 'src/index.js', output: 'index'}
];
const libList = getComponentEntries('packages');
formatTypeList.forEach(({ format, min, suffix } = {}) => {
  Object.keys(libList).forEach((moduleName) => {
    pkg.push({ input: libList[moduleName], output: moduleName })
  });
});
pkg = pkg.concat(addons);

build(pkg);
// pkg.forEach(build)
