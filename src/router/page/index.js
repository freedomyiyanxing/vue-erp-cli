import Layout from '@/page/index/';

export default [

  {
    path: '/',
    name: '主页',
    redirect: '/wel'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/page/error/404'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/wel',
    component: Layout,
    redirect: '/wel/index',
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('@/views/home')
      }]
  },
  {
    path: '/login',
    name: '登录页',
    component: () => import('@/page/login/index'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
      path: 'index',
      name: '个人信息',
      component: () => import('@/views/user/info')
    }]
  },
  {
    path: '*',
    redirect: '/404',
  },
]
