/**
 * @Description: 正则表达式
 * @author Freedom.yi
 * @date 2021/7/8
 *
 */

// uri
export const uri = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

// 邮箱
export const email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;

// 手机
export const phone = /^1[0-9]{10}$/;

// 座机
export const landline = /^([0-9]{3,4}-)?[0-9]{7,8}$/;

// url
export const url = /^http[s]?:\/\/.*/;

// name
export const name = /^[\u4e00-\u9fa5]{2,4}$/;
