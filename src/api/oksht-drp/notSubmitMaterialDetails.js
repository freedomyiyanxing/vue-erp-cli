/**
 * 未交物料明细
 */
import request from '@/util/http';

// 查询未交物料明细列表
export const getSelectUnpaidMaterialDetailsPage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/purchaseorder/selectUnpaidMaterialDetails',
    method: 'get',
    params,
  });
  return data.data;
};

// 导出
export const exportUnpaidMaterialDetailsExcel = (data) => {
  return request({
    url: '/api/oksht-drp/purchaseorder/exportUnpaidMaterialDetailsExcel',
    method: 'post',
    responseType: 'arraybuffer',
    data,
  });
};
