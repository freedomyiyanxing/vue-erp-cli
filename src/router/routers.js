let RouterPlugin = function () {
  this.$router = null;
  this.$store = null;

};
RouterPlugin.install = function (Vue, router, store) {
  this.$router = router;
  this.$store = store;

  function isURL(s) {
    return /^http[s]?:\/\/.*/.test(s)
  }

  function objToform(obj) {
    let result = [];
    Object.keys(obj).forEach(ele => {
      result.push(`${ele}=${obj[ele]}`);
    })
    return result.join('&');
  }

  this.$router.$avueRouter = {
    //全局配置
    $config: this.$store.getters.config,
    routerList: [],
    group: '',
    meta: {},
    safe: this,
    // 设置标题
    setTitle: (title) => {
      document.title = title;
    },
    closeTag: (value) => {
      let tag = value || this.$store.getters.tag;
      if (typeof value === 'string') {
        tag = this.$store.getters.tagList.filter(ele => ele.value === value)[0]
      }
      this.$store.commit('DEL_TAG', tag)
    },

    //处理路由
    getPath: function (params) {
      let { src } = params;
      let result = src || '/';
      // 处理 path 已 http 和 https 开头的
      if (src.includes("http") || src.includes("https")) {
        result = `/myiframe/urlPath?${objToform(params)}`;
      }
      return result;
    },
    //正则处理路由
    vaildPath: function (list, path) {
      let result = false;
      list.forEach(ele => {
        if (new RegExp("^" + ele + ".*", "g").test(path)) {
          result = true
        }
      })
      return result;
    },
    //设置路由值
    getValue: function (route) {
      let value = "";
      if (route.query.src) {
        value = route.query.src;
      } else {
        value = route.path;
      }
      return value;
    },
    //动态路由
    formatRoutes: function (menu = [], first) {
      const SHTRouter = []
      const propsConfig = this.$config.menu.props;
      const propsDefault = {
        label: propsConfig.label || 'name',
        path: propsConfig.path || 'path',
        icon: propsConfig.icon || 'icon',
        children: propsConfig.children || 'children',
        meta: propsConfig.meta || 'meta',
      }
      if (menu.length === 0) return;

      for (let i = 0; i < menu.length; i++) {
        const oMenu = menu[i];
        // console.log(oMenu.name + ':------------' + oMenu.path);
        //
        if (this.routerList.includes(oMenu[propsDefault.path])) {
          return;
        }
        const path = (() => {
            if (first) {
              return oMenu[propsDefault.path].replace('/index', '')
            } else {
              return oMenu[propsDefault.path]
            }
          })(),

          //特殊处理组件
          component = 'views' + oMenu.path,
          name = oMenu[propsDefault.label],
          icon = oMenu[propsDefault.icon],
          children = oMenu[propsDefault.children],
          meta = oMenu[propsDefault.meta] || {};

        // console.log('-->', path);

        const isChild = children.length !== 0;
        const oRouter = {
          path: path,
          component(resolve) {
            // 判断是否为首路由
            if (first) {
              // console.log(name);
              require(['../page/index'], resolve)
              return
            }
            // 判断是否为多层路由
            if (isChild && !first) {
              require(['../page/index/layout'], resolve)
              return
            }
            // 判断是否为最终的页面视图
            require([`../${component}.vue`], resolve)
          },
          name: name,
          icon: icon,
          meta: meta,
          redirect: (() => {
            if (!isChild && first && !isURL(path)) {
              return `${path}/index`
            }
            return '';
          })(),
          // 处理是否为一级路由
          children: !isChild ? (() => {
            if (first) {
              if (!isURL(path)) oMenu[propsDefault.path] = `${path}/index`;
              return [{
                component(resolve) {
                  require([`../${component}.vue`], resolve)
                },
                icon: icon,
                name: name,
                meta: meta,
                path: 'index'
              }]
            }
            return [];
          })() : (() => {
            // console.log('执行了么');
            return this.formatRoutes(children, false)
          })()
        }
        // console.log(oRouter);
        SHTRouter.push(oRouter)
      }

      if (first) {
        if (!this.routerList.includes(SHTRouter[0][propsDefault.path])) {
          // console.log(SHTRouter, '&&&&&&&')
          SHTRouter.forEach(i => this.safe.$router.addRoute(i))
          this.routerList.push(SHTRouter[0][propsDefault.path])
        }
      } else {
        // console.log(SHTRouter, '*************');
        return SHTRouter
      }
    }
  }
}
export default RouterPlugin;
