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
import PageRouter from './page/'
import SHTRouter from './routers';
import store from '../store/';
import { mockRouters } from "@/router/test-routers";

let router = new VueRouter({
  routes: PageRouter,
});

console.log(router, VueRouter);

SHTRouter.install(Vue, router, store);
router.$avueRouter.formatRoutes(mockRouters, true);
// PageRouter.forEach((i) => router.addRoute(i));
export default router;
