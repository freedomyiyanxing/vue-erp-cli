/**
 * 公共请求方法
 * */

import request from '@/util/http';

/** 销售 采购
 * 根据型号名称集合精准搜索库存数量 根据型号名称集合搜索库存数量以及型号基础库
 * @param params 型号名称集合
 * @param url url
 * @param userId 业务员id
 * @return AxiosPromise  '/api/oksht-inventory/inventory/model/brnads'
 */
export const getStockList = async (url, params, userId) => {
  const { data } = await request({
    url,
    method: 'post',
    data: params.map((item) => ({ ...item, userId })),
  });
  return data.data;
};

// 模糊查询品牌
export const getAllBrand = async (query) => {
  const { data } = await request.get(`/api/oksht-data/buyerGroupConfig/getDrpBrandsDTOByBrand?brand=${query}`);
  return data.data;
};

// 查找批次
export const getBatchList = async (params) => {
  const { data } = await request.get('/api/oksht-inventory/inventoryBatch', { params });
  return data.data;
};

// 权限
export const getCurrentRoles = async (params) => {
  const { data } = await request.get('/api/blade-system/role/getRoles', { params });
  return data.data;
};

// 查询打印模板
export const getPrintTemplateList = async (params) => {
  const { data } = await request.get('/api/oksht-drp/printtemplate/all', { params });
  return data;
};

// 打印
export const templateExport = (params) => {
  return request({
    url: '/api/oksht-drp/export',
    method: 'get',
    responseType: 'arraybuffer',
    params,
  });
};
