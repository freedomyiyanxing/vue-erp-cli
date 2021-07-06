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
import PageRouter from './page/';
import SHTRouter from './routers';
import store from '../store/';
import { mockRouters } from "@/router/test-routers";

let Router = new VueRouter({
  routes: PageRouter,
});

SHTRouter.install(Vue, Router, store);
Router.$avueRouter.formatRoutes(mockRouters, true);
export default Router;
