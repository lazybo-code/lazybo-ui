module.exports = {
  title: 'LazyboUI',
  description: '基于 vue-cli3 的 UI 组件',
  dest: './dist',
  searchMaxSuggestions: 10,
  themeConfig: {
    smoothScroll: true,
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/lazybo-code/lazybo-ui',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
    nav: [
      {text: '主页', link: '/'},
      {text: '组件文档', link: '/components/'},
    ],
    sidebarDepth: 0,
    sidebarWidth: 120,
    sidebar: [
      {
        title: '开发指南',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/components/dev-guide/installation', '安装'],
          ['/components/dev-guide/quickstart', '快速上手'],
          ['/components/dev-guide/transition', '内置过渡动画'],
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/components/guide/button', '按钮'],
          ['/components/guide/reader-book', '分页阅读器'],
        ]
      },
    ]
  }
};
