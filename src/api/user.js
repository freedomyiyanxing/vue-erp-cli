import request from '@/util/http';
import config from "@/config";

export const loginByUsername = (tenantId, account, password, type, key, code) => request({
  url: '/api/blade-auth/token',
  method: 'post',
  headers: {
    'Captcha-Key': key,
    'Captcha-Code': code,
  },
  params: {
    grantType: (config.captchaMode ? "captcha" : "password"),
    tenantId,
    account,
    password,
    type
  }
});

export const getButtons = () => request({
  url: '/api/blade-system/menu/buttons',
  method: 'get'
});

export const getUserInfo = () => request({
  url: '/user/getUserInfo',
  method: 'get'
});

export const refeshToken = () => request({
  url: '/user/refesh',
  method: 'post'
})

export const getMenu = () => request({
  url: '/api/blade-system/menu/routes',
  method: 'get'
});

export const getCaptcha = () => request({
  url: '/api/blade-auth/captcha',
  method: 'get'
});

export const getTopMenu = () => request({
  url: '/user/getTopMenu',
  method: 'get'
});

export const sendLogs = (list) => request({
  url: '/user/logout',
  method: 'post',
  data: list
})

export const logout = () => request({
  url: '/user/logout',
  method: 'get'
})
