import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import Router from '@/router';
import '@/router/intercept';
import store from './store';
import App from './App.vue';
import BasicContainer from '@/components/basic-container';
import Pagination from "@/components/pagination";
import SearchForm from "@/components/search-form";
import Empty from "@/components/empty/index";
import 'element-ui/lib/theme-chalk/index.css';
import 'nprogress/nprogress.css';
import '@/assets/styles/common.scss';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Element);
Vue.use(VueAxios, axios);

//注册全局容器
Vue.component('basicContainer', BasicContainer);
Vue.component("Pagination", Pagination); // 分页
Vue.component("Empty", Empty); // 表格空白
Vue.component("SearchForm", SearchForm); // 搜索组件

new Vue({
  store,
  router: Router,
  render: h => h(App),
}).$mount('#app')
