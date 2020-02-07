import LaReaderBook from './reader-book/index';
// 所有组件列表
const components = [
  LaReaderBook,
];
// 定义 install 方法，接收 Vue 作为参数
// @ts-ignore
const install = (Vue) => {
  // 判断是否安装，安装过就不继续往下执行
  // @ts-ignore
  if (install.installed) { return; }
  // @ts-ignore
  install.installed = true;
  // 遍历注册所有组件
  // @ts-ignore
  components.map(component => Vue.component(component.name, component));
  // 下面这个写法也可以
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  install(window.Vue);
}

export {
  LaReaderBook
};

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ...components
};
