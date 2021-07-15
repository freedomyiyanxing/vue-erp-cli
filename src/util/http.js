/**
 * 全站http配置
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from 'axios';
import NProgress from 'nprogress';
import { Message } from 'element-ui';
import store from '@/store';
import router from '@/router';
import { serialize } from '@/util';
import { getToken } from '@/util/auth';
import config from '@/config';

axios.defaults.timeout = 50000; // 设置超时时长

// 返回其他状态吗
axios.defaults.validateStatus = (status) => status >= 200 && status <= 500; // 默认的

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress Configuration
NProgress.configure({
  showSpinner: true,
});

// HTTP Request拦截
axios.interceptors.request.use(
  (request) => {
    NProgress.start(); // start progress bar
    const meta = request.meta || {};
    const isToken = meta.isToken === false;
    request.headers.Authorization = 'Basic c2FiZXI6c2FiZXJfc2VjcmV0';
    if (getToken() && !isToken) {
      request.headers['Blade-Auth'] = `bearer ${getToken()}`; // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    }
    // headers中配置serialize为true开启序列化
    if (request.method === 'post' && meta.isSerialize === true) {
      request.data = serialize(request.data);
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// HTTP Response拦截
axios.interceptors.response.use(
  (res) => {
    NProgress.done();
    const status = res.data.code || 200;
    const statusWhiteList = config.statusWhiteList || [];
    const message = res.data.msg || '未知错误';
    // 如果在白名单里则自行catch逻辑处理
    if (statusWhiteList.includes(status)) return Promise.reject(res);
    // 如果是401则跳转到登录页面
    if (status === 401) {
      store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }));
    }
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
      Message({
        message,
        type: 'error',
      });
      return Promise.reject(new Error(message));
    }
    return res;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(new Error(error));
  },
);

export default axios;
