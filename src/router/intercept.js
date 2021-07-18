/**
 * @Description: 全站权限配置
 * @author Freedom.yi
 * @date 2021/7/5
 */

import NProgress from 'nprogress';
import store from '@/store/index';
import { validateNull } from '@/util/validate';
import { getToken } from '@/util/auth';
import router from './index';

NProgress.configure({ showSpinner: false });
// const lockPage = store.getters.website.lockPage; //锁屏页

/* eslint no-param-reassign: "error" */

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0 && to.fullPath.indexOf('?sec') === -1) {
    next(`${to.path}?sec`);
    window.location.reload();
  } else {
    next();
  }
  // 缓冲设置
  if (to.meta.keepAlive === true && store.state.tags.tagList.some((ele) => ele.value === to.fullPath)) {
    to.meta.$keepAlive = true;
  } else {
    // NProgress.start()
    to.meta.$keepAlive = !!(to.meta.keepAlive === true && validateNull(to.meta.$keepAlive));
  }
  const meta = to.meta || {};
  if (getToken()) {
    // if (store.getters.isLock && to.path !== lockPage) { //如果系统激活锁屏，全部跳转到锁屏页
    //   next({ path: lockPage })
    // }else
    if (to.path === '/login') {
      // 如果登录成功访问登录页跳转到主页
      next({ path: '/' });
    } else {
      // 如果用户信息为空则获取用户信息，获取用户信息失败，跳转到登录页
      if (store.getters.token.length === 0) {
        store.dispatch('FedLogOut').then(() => {
          next({ path: '/login' });
        });
        return;
      }
      const value = to.query.src || to.fullPath;
      const label = to.query.name || to.name;
      const metas = to.meta || router.$shtRouter.meta || Object.create(null);
      const { i18n } = to.query;
      if (metas.isTab !== false && !validateNull(value) && !validateNull(label)) {
        store.commit('ADD_TAG', {
          label,
          value,
          params: to.params,
          query: to.query,
          meta: (() => {
            if (!i18n) {
              return metas;
            }
            return {
              i18n,
            };
          })(),
          group: router.$shtRouter.group || [],
        });
      }
      next();
    }
  } else {
    // 判断是否需要认证，没有登录访问去登录页
    if (meta.isAuth === false) {
      next();
      return;
    }
    next('/login');
  }
});

router.afterEach(() => {
  // console.log('路由，，， router');
  // NProgress.done();
  // let title = store.getters.tag.label;
  // let i18n = store.getters.tag.meta.i18n;
  // title = router.$shtRouter.generateTitle(title, i18n)
  // 根据当前的标签也获取label的值动态设置浏览器标题
  // router.$shtRouter.setTitle(title);
});
