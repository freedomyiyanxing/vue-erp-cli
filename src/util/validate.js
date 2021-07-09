/**
 * @Description: 校验
 * @author Freedom.yi
 * @date 2021/7/8
 *
 */
import { uri, url, name, email, phone, landline } from './regexp-pattern';

export function isValidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
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
export const isLandline = (s) => landline.test(s)

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
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 大写字母
 * @param str
 * @return {boolean}
 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * 大小写字母
 * @param str
 * @return {boolean}
 */
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 验证pad还是pc
 * @return {boolean}
 */
export const validatePc = function () {
  const userAgentInfo = navigator.userAgent;
  const Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"
  ];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * 判断身份证号码
 */
export function cardId(code) {
  let list = [];
  let result = true;
  let msg = '';
  let city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江 ",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外 "
  };
  if (!validateNull(code)) {
    if (code.length === 18) {
      if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
        msg = "证件号码格式错误";
      } else if (!city[code.substr(0, 2)]) {
        msg = "地址编码错误";
      } else {
        //18位身份证需要验证最后一位校验位
        code = code.split('');
        //∑(ai×Wi)(mod 11)
        //加权因子
        const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验位
        const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x'];
        let sum = 0;
        let ai = 0;
        let wi = 0;
        for (let i = 0; i < 17; i++) {
          ai = code[i];
          wi = factor[i];
          sum += ai * wi;
        }
        if (parity[sum % 11] !== code[17]) {
          msg = "证件号码校验位错误";
        } else {
          result = false;
        }

      }
    } else {
      msg = "证件号码长度不为18位";
    }

  } else {
    msg = "证件号码不能为空";
  }
  list.push(result);
  list.push(msg);
  return list;
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
  if (typeof val == 'boolean') {
    return false;
  }
  if (typeof val == 'number') {
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
