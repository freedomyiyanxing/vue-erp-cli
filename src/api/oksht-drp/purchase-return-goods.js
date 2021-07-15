/**
 * 采购退货
 */
import request from '@/util/http';

// 查询采购退货列表
export const getPurchaseReturnPage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/purchasereturnorder/page',
    method: 'get',
    params,
  });
  return data.data;
};

// 新增入库提交
export const savePurchaseReturnGoods = async (url, data) =>
  new Promise((resolve) => {
    request({
      url,
      method: 'post',
      data,
    })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });

// 采购退货详情
export const getPurchaseReturnDetails = async (params) => {
  const { data } = await request.get('/api/oksht-drp/purchasereturnorder/detail', {
    params,
  });
  return data.data;
};

// 改变订单状态
export const dispatchPurchaseReturnDoWaste = async (data) =>
  new Promise((resolve) => {
    request({
      url: '/api/oksht-drp/purchasereturnorder/status',
      method: 'post',
      data,
    })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });

// 更改审批状态
export const dispatchPurchaseReturnExamineOrder = (data) =>
  new Promise((resolve) => {
    request({
      url: '/api/oksht-drp/purchasereturnorder/approve',
      method: 'post',
      data,
    })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
