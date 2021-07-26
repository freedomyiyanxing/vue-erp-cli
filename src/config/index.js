/**
 * 全局配置文件
 */
export default {
  title: 'SHT 业务管理平台',
  indexTitle: 'SHT 业务管理平台',
  clientId: 'saber', // 客户端id
  clientSecret: 'saber_secret', // 客户端密钥
  captchaMode: true, // 是否开启验证码模式
  key: 'saber', // 配置主键,目前用于存储
  tokenTime: 6000,
  // http的status默认放行不才用统一处理的,
  statusWhiteList: [],
  // 配置首页不可关闭
  isFirstPage: false,
  fistPage: {
    label: '首页',
    value: '/wel/index',
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard',
    },
    group: [],
    close: true,
  },
};

export const propsDefault = {
  label: 'name',
  path: 'path',
  icon: 'icon',
  children: 'children',
};
