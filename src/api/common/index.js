import request from '@/util/http';

// 区域城市接口url
export const getCityUrl = '/api/oksht-customer/area/list?pid=';
export const getDetailsCityUrl = '/api/oksht-customer/area/list?id=';

// 上传图片接口
export const resourceUpload = '/api/blade-resource/oss/upload';

// /**
//  * 通过url获取数据
//  * @param url
//  * @param data
//  */
// export const byUrlGetData = (url, data) => {
//   return request({
//     url: url,
//     method: 'get',
//     params: {
//       ...data
//     }
//   }).then((res) => {
//     if (res.data.code === 200) {
//       let dictObj = {
//         map: {},
//         source: []
//       }
//       if (res.data.data) {
//         res.data.data.forEach((n) => {
//           dictObj.map[n['id']] = n['tenantName'];
//         });
//         dictObj.source = res.data.data;
//       }
//
//       return dictObj;
//     }
//   })
// }
//
// /**
//  * 根据字段类型code获取数据
//  * @param code
//  */
// export const getDictionary = (code) => {
//   return request({
//     url: '/api/blade-system/dict/dictionary?code=' + code,
//     method: 'get'
//   }).then((res) => {
//     if (res.data.code === 200) {
//       let dictObj = {
//         map: {},
//         source: []
//       }
//       if (res.data.data) {
//         res.data.data.forEach((n, i) => {
//           dictObj.map[n['dictKey']] = n['dictValue'];
//         });
//         dictObj.source = res.data.data;
//       }
//
//       return dictObj;
//     }
//   })
// }
//
//
// /**
//  * 根据字段pid获取子级区域数据
//  * @param pid
//  */
// export const getCityList = (pid) => {
//   return request({
//     url: getCityUrl + pid,
//     method: 'get'
//   }).then((res) => {
//     if (res.data.code === 200) {
//       let dictObj = {
//         map: {},
//         source: []
//       }
//       if (res.data.data) {
//         res.data.data.forEach((n, i) => {
//           dictObj.map[n['id']] = n['name'];
//         });
//         dictObj.source = res.data.data;
//       }
//       return dictObj;
//     }
//   })
// }
//
// /**
//  * 根据字段id获取子级区域数据
//  * @param id
//  */
// export const getDetailsCityList = (id) => {
//   return request({
//     url: getDetailsCityUrl + id,
//     method: 'get'
//   }).then((res) => {
//     if (res.data.code === 200) {
//       let dictObj = {
//         map: {},
//         source: []
//       }
//       if (res.data.data) {
//         res.data.data.forEach((n) => {
//           dictObj.map[n['id']] = n['name'];
//         });
//         dictObj.source = res.data.data;
//       }
//
//       return dictObj;
//     }
//   })
// }

// 搜索组件，获取下拉数据
export const getData = (url, data) => {
  return request({
    url,
    method: 'get',
    params: data,
  });
};
