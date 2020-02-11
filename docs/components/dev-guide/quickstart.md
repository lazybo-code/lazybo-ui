# 快速上手

本节将介绍如何在项目中使用 LazyboUI。

## 使用 vue-cli@3
我们为新版的 vue-cli 准备了相应的 LazyboUI 插件，你可以用它们快速地搭建一个基于 LazyboUI 的项目。

## 引入 LazyboUI
你可以引入整个 LazyboUI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 LazyboUI。

## 完整引入
在 main.js 中写入以下内容：
```javascript
import Vue from 'vue';
import LazyboUI from 'lazybo-ui';
import 'lazybo-ui/lib/theme/index.css';
import App from './App.vue';

Vue.use(LazyboUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了 LazyboUI 的引入。需要注意的是，样式文件需要单独引入。

## 按需引入
```javascript
import Vue from 'vue';
import LaButton from 'lazybo-ui/lib/button.js';
import 'lazybo-ui/lib/theme/button.css';
import App from './App.vue';

Vue.use(LaButton);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
