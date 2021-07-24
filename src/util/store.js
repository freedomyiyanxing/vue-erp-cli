import { validateNull } from '@/util/validate';
import config from '@/config/index';

const keyName = `${config.key}-`;
/**
 * 存储localStorage
 */
export const setStore = (params = Object.create(null)) => {
  const { name, content, type } = params;
  const key = keyName + name;
  const obj = {
    dataType: typeof content,
    content,
    type,
    datetime: new Date().getTime(),
  };
  if (type) window.sessionStorage.setItem(key, JSON.stringify(obj));
  else window.localStorage.setItem(key, JSON.stringify(obj));
};

/**
 * 获取localStorage
 */
export const getStore = (params = {}) => {
  const { name, debug } = params;
  const key = keyName + name;
  let obj = window.sessionStorage.getItem(key);

  if (validateNull(obj)) {
    obj = window.localStorage.getItem(key);
  }
  if (validateNull(obj)) {
    return obj;
  }
  try {
    obj = JSON.parse(obj);
  } catch (e) {
    return obj;
  }
  if (debug) {
    return obj;
  }
  switch (obj.dataType) {
    case 'string':
      return obj.content;
    case 'number':
      return Number(obj.content);
    case 'boolean':
      return obj.content;
    default:
      return obj.content;
  }
};

/**
 * 删除localStorage
 */
export const removeStore = (params = {}) => {
  const { name, type } = params;
  const key = keyName + name;
  if (type) {
    window.sessionStorage.removeItem(key);
  } else {
    window.localStorage.removeItem(key);
  }
};

/**
 * 获取全部localStorage
 */
export const getAllStore = (params = {}) => {
  const list = [];
  const { type } = params;
  if (type) {
    for (let i = 0; i <= window.sessionStorage.length; i += 1) {
      list.push({
        name: window.sessionStorage.key(i),
        content: getStore({
          name: window.sessionStorage.key(i),
          type: 'session',
        }),
      });
    }
  } else {
    for (let i = 0; i <= window.localStorage.length; i += 1) {
      list.push({
        name: window.localStorage.key(i),
        content: getStore({
          name: window.localStorage.key(i),
        }),
      });
    }
  }
  return list;
};

/**
 * 清空全部localStorage
 */
export const clearStore = (params = {}) => {
  const { type } = params;
  if (type) {
    window.sessionStorage.clear();
  } else {
    window.localStorage.clear();
  }
};
