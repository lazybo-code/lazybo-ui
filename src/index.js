import ReaderBook from '../packages/reader-book/index.js'
import Button from '../packages/button/index.js'
import ButtonGroup from '../packages/button-group/index.js'
import { version } from '../package.json'

const components = [
  ReaderBook,
  Button,
  ButtonGroup
];

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) {
    return
  }
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install,
  ReaderBook,
  Button,
  ButtonGroup
}
