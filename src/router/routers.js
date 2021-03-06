import { isURL } from '@/util/validate';
import { propsDefault } from '@/config';

function RouterPlugin() {
  this.$router = null;
  this.$store = null;
}

const getPath = ({ first, oMenu }) => {
  if (first) {
    return oMenu[propsDefault.path].replace('/index', '');
  }
  return oMenu[propsDefault.path];
};

const setRedirect = (isChild, first, path) => {
  if (!isChild && first && !isURL(path)) {
    return `${path}/index`;
  }
  return null;
};

// const setFirstRouter = ({ first, path, oMenu, propsDefault, component, icon, name, meta }) => {
//   console.log('222==', path);
//
//   if (!first) {
//     return [];
//   }
//
//   if (!isURL(path)) {
//     oMenu[propsDefault.path] = `${path}/index`;
//   }
//   return [
//     {
//       component(resolve) {
//         require([`../${component}.vue`], resolve);
//       },
//       icon,
//       name,
//       meta,
//       path: 'index',
//     },
//   ];
// };

function objToForm(obj) {
  const result = [];
  Object.keys(obj).forEach((ele) => {
    result.push(`${ele}=${obj[ele]}`);
  });
  return result.join('&');
}

RouterPlugin.install = function install(Vue, router, store) {
  this.$router = router;
  this.$store = store;

  this.$router.$shtRouter = {
    safe: this,
    routerList: [],
    meta: Object.create(null),

    // 设置标题
    // 正则处理路由
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
    // 处理路由
    getPath(params) {
      const { src } = params;
      let result = src || '/';
      // 处理 path 已 http 和 https 开头的
      if (src.includes('http') || src.includes('https')) {
        result = `/myiframe/urlPath?${objToForm(params)}`;
      }
      return result;
    },

    // 设置路由值
    getValue(route) {
      let value;
      if (route.query.src) {
        value = route.query.src;
      } else {
        value = route.path;
      }
      return value;
    },

    // 动态路由
    formatRoutes(menu = [], first) {
      const SHTRouter = [];
      // const propsConfig = this.$config.menu.props;
      // const propsDefault = {
      //   label: propsDefault.label || 'name',
      //   path: propsDefault.path || 'path',
      //   icon: propsConfig.icon || 'icon',
      //   children: propsConfig.children || 'children',
      //   meta: propsConfig.meta || 'meta',
      // };
      if (menu.length === 0) {
        return [];
      }

      for (let i = 0; i < menu.length; i += 1) {
        const oMenu = menu[i];

        if (this.routerList.includes(oMenu[propsDefault.path])) {
          return [];
        }
        const path = getPath({ first, oMenu, propsDefault });

        // 特殊处理组件
        const component = `views${oMenu.path}`;
        const name = oMenu[propsDefault.label];
        const icon = oMenu[propsDefault.icon];
        const children = oMenu[propsDefault.children];
        const meta = oMenu[propsDefault.meta] || Object.create(null);

        const isChild = children.length !== 0;
        // console.log(name, ': -- ', children.length)
        const oRouter = {
          path,
          name,
          icon,
          meta,
          redirect: setRedirect(isChild, first, path),
          component: () => {
            // 判断是否为首路由
            if (first) {
              return import('../page/index');
            }
            // 判断是否为多层路由
            if (isChild && !first) {
              return import('../page/index/layout');
            }
            // 判断是否为最终的页面视图
            return import(`../${component}.vue`);
          },
          // 处理是否为一级路由
          children: !isChild
            ? [] // setFirstRouter({ first, path, oMenu, propsDefault, component, icon, name, meta })
            : this.formatRoutes(children, false),
        };
        SHTRouter.push(oRouter);
      }

      if (first) {
        if (!this.routerList.includes(SHTRouter[0][propsDefault.path])) {
          SHTRouter.forEach((i) => this.safe.$router.addRoute(i));
          this.routerList.push(SHTRouter[0][propsDefault.path]);
        }
      }
      return SHTRouter;
    },
  };
};
export default RouterPlugin;
