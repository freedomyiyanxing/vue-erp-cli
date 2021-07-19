/**
 * @Description: 校验
 * @author Freedom.yi
 * @date 2021/7/8
 *
 */
import { uri, url, name, email, phone, landline } from './regexp-pattern';

export function isValidUsername(str) {
  return ['admin', 'editor'].indexOf(str.trim()) >= 0;
}

/**
 * 合法uri
 * @param textVal
 * @return {boolean}
 */
export const validateURL = (textVal) => uri.test(textVal);

/**
 * 邮箱
 * @param {*} s
 */
export const isEmail = (s) => email.test(s);

/**
 * 手机号码
 * @param {*} s
 */
export const isPhone = (s) => phone.test(s);

/**
 * 座机电话号码
 * @param {*} s
 */
export const isLandline = (s) => landline.test(s);

/**
 * URL地址
 * @param {*} s
 */
export const isURL = (s) => url.test(s);

/**
 * 小写字母
 * @param str
 * @return {boolean}
 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 大写字母
 * @param str
 * @return {boolean}
 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 大小写字母
 * @param str
 * @return {boolean}
 */
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * 验证pad还是pc
 * @return {boolean}
 */
export const validatePc = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let flag = true;
  for (let v = 0; v < Agents.length; v += 1) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

/**
 * validate email
 * @param emailArg
 * @returns {boolean}
 */
export function validateEmail(emailArg) {
  const re =
    /^(([^<>()\\[\].,;:\s@"]+(\.[^<>()\\[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailArg);
}

/**
 * 判断姓名是否正确
 * @param val
 * @return {boolean}
 */
export const validateName = (val) => name.test(val);

/**
 * 判断是否为整数
 * @param num
 * @param type
 * @return {boolean}
 */
export function validateNum(num, type) {
  let regName = /[^\d.]/g;
  if (type === 1) {
    if (!regName.test(num)) return false;
  } else if (type === 2) {
    regName = /[^\d]/g;
    if (!regName.test(num)) return false;
  }
  return true;
}

/**
 * 判断是否为小数
 * @param num
 * @param type
 * @return {boolean}
 */
export function validateNumOrd(num, type) {
  let regName = /[^\d.]/g;
  if (type === 1) {
    if (!regName.test(num)) return false;
  } else if (type === 2) {
    regName = /[^\d.]/g;
    if (!regName.test(num)) return false;
  }
  return true;
}

/**
 * 判断是否为空
 * @param val
 * @return {boolean}
 */
export function validateNull(val) {
  if (typeof val === 'boolean') {
    return false;
  }
  if (typeof val === 'number') {
    return false;
  }
  if (val instanceof Array) {
    return val.length === 0;
  }
  if (val instanceof Object) {
    return JSON.stringify(val) === '{}';
  }
  return val === 'null' || val == null || val === 'undefined' || val === '';
}

/**
 * 验证是否存在true/false
 */
export const validateData = (val, shtDefault) => {
  if (typeof val === 'boolean') {
    return val;
  }
  return !validateNull(val) ? val : shtDefault;
};
