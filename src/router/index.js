/**
 * 全站路由配置
 *
 * meta参数说明
 * keepAlive是否缓冲页面
 * isTab是否加入到tag导航
 * isAuth是否需要授权
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/';
import PageRouter from './page/index';
import SHTRouter from './routers';
import { mockRouters } from './test-routers';

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const Router = new VueRouter({
  routes: PageRouter,
});

SHTRouter.install(Vue, Router, store);
Router.$shtRouter.formatRoutes(mockRouters, true);
export default Router;
