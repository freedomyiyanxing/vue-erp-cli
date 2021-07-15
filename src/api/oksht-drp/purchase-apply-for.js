// 采购申请
import request from '@/util/http';

export const getPurchaseApplyForPage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/purchaserequestorder/page',
    method: 'get',
    params,
  });
  return data.data;
};

// 提交采购申请单
export const postAddApplyFor = async (obj) => {
  return request.post('/api/oksht-drp/purchaserequestorder/saveBatch', obj);
};

// 新增采购订单选择采购申请单
export const getPurchaseApplyForList = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/purchaserequestorder/list/purchase',
    method: 'get',
    params,
  });
  return data.data;
};

// 编辑采购申请单
export const postEditApplyFor = async (obj) => {
  return request.post('/api/oksht-drp/purchaserequestorder/update', obj);
};

// 查询销售订单
export const getSalesOrderInfoList = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/salesOrder/salesOrderAndInfos',
    method: 'get',
    params,
  });
  return data.data;
};

// 更改订单状态
export const dispatchOutDoWaste = async (data) =>
  new Promise((resolve) => {
    request({
      url: '/api/oksht-drp/purchaserequestorder/invalid',
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
export const dispatchExamineOrder = (data) =>
  new Promise((resolve) => {
    request({
      url: '/api/oksht-drp/purchaserequestorder/approve',
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

// 采购申请详情
export const getPurchaserequestorderDetail = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/purchaserequestorder/detail',
    method: 'get',
    params,
  });
  return data.data;
};
