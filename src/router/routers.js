import { isURL } from "@/util/validate";

let RouterPlugin = function () {
  this.$router = null;
  this.$store = null;

};

const getPath = ({ first, oMenu, propsDefault }) => {
  if (first) {
    return oMenu[propsDefault.path].replace('/index', '')
  } else {
    return oMenu[propsDefault.path]
  }
}

const setRedirect = (isChild, first, path) => {
  if (!isChild && first && !isURL(path)) {
    return `${path}/index`
  }
  return null;
}

const setFirstRouter = ({ first, path, oMenu, propsDefault, component, icon, name, meta }) => {
  if (!first) {
    return [];
  }

  if (!isURL(path)) {
    oMenu[propsDefault.path] = `${path}/index`;
  }
  return [{
    component(resolve) {
      require([`../${component}.vue`], resolve)
    },
    icon: icon,
    name: name,
    meta: meta,
    path: 'index'
  }]
};


function objToForm(obj) {
  let result = [];
  Object.keys(obj).forEach(ele => {
    result.push(`${ele}=${obj[ele]}`);
  })
  return result.join('&');
}

RouterPlugin.install = function (Vue, router, store) {
  this.$router = router;
  this.$store = store;


  this.$router.$shtRouter = {
    safe: this,
    routerList: [],
    //全局配置
    $config: this.$store.getters.config,
    meta: Object.create(null),

    // 设置标题
    //正则处理路由
    // setTitle: (title) => {
    //   document.title = title;
    // },
    // closeTag: (value) => {
    //   let tag = value || this.$store.getters.tag;
    //   if (typeof value === 'string') {
    //     tag = this.$store.getters.tagList.filter(ele => ele.value === value)[0]
    //   }
    //   this.$store.commit('DEL_TAG', tag)
    // },
    // validatePath: function (list, path) {
    //   let result = false;
    //   list.forEach(ele => {
    //     if (new RegExp("^" + ele + ".*", "g").test(path)) {
    //       result = true
    //     }
    //   })
    //   return result;
    // },
    //处理路由
    getPath: function (params) {
      let { src } = params;
      let result = src || '/';
      // 处理 path 已 http 和 https 开头的
      if (src.includes("http") || src.includes("https")) {
        result = `/myiframe/urlPath?${objToForm(params)}`;
      }
      return result;
    },

    //设置路由值
    getValue: function (route) {
      let value;
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

        if (this.routerList.includes(oMenu[propsDefault.path])) {
          return;
        }
        const path = getPath({ first, oMenu, propsDefault });

        //特殊处理组件
        const component = 'views' + oMenu.path,
          name = oMenu[propsDefault.label],
          icon = oMenu[propsDefault.icon],
          children = oMenu[propsDefault.children],
          meta = oMenu[propsDefault.meta] || Object.create(null);

        const isChild = children.length !== 0;
        // console.log(name, ': -- ', children.length)
        const oRouter = {
          path: path,
          name: name,
          icon: icon,
          meta: meta,
          redirect: setRedirect(isChild, first, path),
          component(resolve) {
            // 判断是否为首路由
            if (first) {
              // console.log(name);
              console.log('-------', path)
              require(['../page/index'], resolve);
              return
            }
            // 判断是否为多层路由
            if (isChild && !first) {
              console.log('*******', path);
              require(['../page/index/layout'], resolve)
              return
            }
            // 判断是否为最终的页面视图
            require([`../${component}.vue`], resolve)
          },
          // 处理是否为一级路由
          children:
            !isChild
              ? setFirstRouter({ first, path, oMenu, propsDefault, component, icon, name, meta })
              : this.formatRoutes(children, false)
        }
        // console.log(oRouter);
        SHTRouter.push(oRouter)
      }

      if (first) {
        if (!this.routerList.includes(SHTRouter[0][propsDefault.path])) {
          SHTRouter.forEach(i => this.safe.$router.addRoute(i))
          this.routerList.push(SHTRouter[0][propsDefault.path])
        }
      } else {
        console.log(SHTRouter, '*************');
        return SHTRouter
      }
    }
  }
}
export default RouterPlugin;
