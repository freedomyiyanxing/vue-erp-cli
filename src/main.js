import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import router from './router';
import store from './store';
import App from './App.vue';
import BasicContainer from '@/components/basic-container';
import '@/assets/styles/common.scss';
import 'element-ui/lib/theme-chalk/index.css';
import 'nprogress/nprogress.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Element);
Vue.use(VueAxios, axios);

//注册全局容器
Vue.component('basicContainer', BasicContainer)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
