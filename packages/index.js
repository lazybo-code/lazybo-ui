import LaReaderBook from './reader-book/index';
// 所有组件列表
const components = [
  LaReaderBook,
];

// 定义 install 方法，接收 Vue 作为参数
const install = (Vue, opt = {}) => {
  // 判断是否安装，安装过就不继续往下执行
  components.forEach(component => Vue.component(component.name, component));
  // 下面这个写法也可以
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  LaReaderBook
};
