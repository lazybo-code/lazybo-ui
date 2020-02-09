/* * Copyright © 2019-2020 chenwenbin * Released under the MIT License. */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'la-reader-book',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    clearance: {
      type: Number,
      default: 16
    },
    fontSize: {
      type: Number,
      default: 1.125
    },
    className: {
      type: String,
      default: ''
    },
    animationSeconds: {
      type: Number,
      default: 0.3
    },
    noLeftRightClick: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      pageTotal: 0,
      pageCurrent: 0,
      translateX: 0
    };
  },
  computed: {
    slotData: function slotData() {
      return {
        page: {
          total: this.pageTotal,
          current: this.pageCurrent + 1
        },
        title: this.title
      };
    },
    readerBook: function readerBook() {
      return this.content.split(/\n/g);
    }
  },
  methods: {
    created: function created() {
      this.calculateTotalPage();
    },
    previousPage: function previousPage() {
      if (this.noLeftRightClick) return;

      if (this.pageCurrent <= 0) {
        this.onToEnd(0);
        return;
      }

      this.pageCurrent--;
      this.calculateTranslateX();

      if (this.pageCurrent - 1 === 0) {
        this.onToEnd(1);
      }
    },
    nextPage: function nextPage() {
      if (this.noLeftRightClick) return;

      if (this.calculatePage(this.pageCurrent)) {
        this.onToEnd(3);
        return;
      }

      this.pageCurrent++;
      this.calculateTranslateX();

      if (this.pageCurrent + 1 === this.pageCurrent) {
        this.onToEnd(2);
      }
    },
    calculateTotalPage: function calculateTotalPage() {
      var _this = this;

      this.$nextTick(function () {
        var pageCount = 0;

        while (!_this.calculatePage(pageCount)) {
          pageCount++;
        }

        _this.pageTotal = pageCount + 1;
      });
    },
    onToEnd: function onToEnd(type) {
      this.$emit('onToEnd', type);
    },
    onCenter: function onCenter() {
      this.$emit('onCenter');
    },
    calculateTranslateX: function calculateTranslateX() {
      this.translateX = -(this.$refs.readerBook.offsetWidth + this.clearance) * this.pageCurrent;
    },
    calculatePage: function calculatePage(page) {
      var number = this.$refs.readerBook.offsetWidth * (page + 1);
      return this.$refs.readerBook.scrollWidth - number <= this.$refs.readerBook.offsetWidth;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */ var __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "lazy-reader", class: _vm.className }, [
    _c("content", { staticClass: "lazy-page-read-content" }, [
      _c(
        "article",
        {
          staticClass: "lazy-read-article",
          style: { margin: "0 " + _vm.clearance + "px" }
        },
        [
          _c(
            "section",
            {
              ref: "readerBook",
              staticClass: "lazy-reader-book",
              style: {
                transform: "translateX(" + _vm.translateX + "px)",
                transition: "all " + _vm.animationSeconds + "s ease",
                fontSize: _vm.fontSize + "rem"
              }
            },
            [
              _vm.title ? _c("h3", [_vm._v(_vm._s(_vm.title))]) : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.readerBook, function(item, index) {
                return _c("p", { key: index }, [_vm._v(_vm._s(item))])
              })
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "lazy-reader-cover" }, [
      _c("div", { staticClass: "lazy-cover-top" }, [
        _vm.pageCurrent > 0
          ? _c(
              "h1",
              { staticClass: "lazy-read-book-name" },
              [
                _vm._t("cover-top", [_vm._v(_vm._s(_vm.title))], {
                  data: _vm.slotData
                })
              ],
              2
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "lazy-cover-left",
        on: { click: _vm.previousPage }
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "lazy-cover-centre",
        on: { click: _vm.onCenter }
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "lazy-cover-right",
        on: { click: _vm.nextPage }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "lazy-cover-bottom" }, [
        _c(
          "span",
          { staticClass: "lazy-page-statistical" },
          [
            _vm._t(
              "cover-bottom-left",
              [
                _vm._v(
                  _vm._s(_vm.pageCurrent + 1) + "/" + _vm._s(_vm.pageTotal)
                )
              ],
              { data: _vm.slotData }
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "lazy-more" },
          [_vm._t("cover-bottom-right", null, { data: _vm.slotData })],
          2
        )
      ])
    ])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = "data-v-09a9bba0";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

__vue_component__.install = function (vue) {
  vue.component(name, __vue_component__);
};

//
//
//
//
//
//
var script$1 = {
  name: 'la-button',
  props: {},
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
};

/* script */ var __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "lazy-button" }, [
    _vm._v("\n  lazy-button\n")
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = "data-v-6d71e8b1";
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

__vue_component__$1.install = function (vue) {
  vue.component(name, __vue_component__$1);
};

var version = "1.0.0";

var components = [__vue_component__];

var install = function install(Vue) {
  // 判断是否安装
  if (install.installed) {
    return;
  }

  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  version: version,
  install: install,
  Button: __vue_component__$1,
  ReaderBook: __vue_component__
};

export default index;
