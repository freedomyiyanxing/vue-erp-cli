import request from '@/util/http';

export const getOutDepotOrderAndInfo = (outDepotOrder) => {
  return request({
    url: '/api/oksht-drp/outDepotOrder/getOutDepotOrderAndInfo',
    method: 'get',
    params: outDepotOrder,
  });
};
export const getDepotInfo = (name) => {
  return request({
    url: '/api/oksht-inventory/depot',
    method: 'get',
    params: {
      name_4: name,
    },
  });
};

// 销售其他出库单list
export const getList = (data) => {
  return request({
    url: '/api/oksht-drp/otherOutDepotOrder/otherOutDepotOrderPage',
    method: 'get',
    params: data,
  });
};

// 销售其他出库新增
export const add = (data) => {
  return request({
    url: '/api/oksht-drp/otherOutDepotOrder/saveOtherOutDepotOrder',
    method: 'post',
    data,
  });
};

// 销售其他出库单详情
export const otherDetail = (data) => {
  return request({
    url: '/api/oksht-drp/otherOutDepotOrder/otherDetail',
    method: 'get',
    params: data,
  });
};

// 销售其他出库修改审批状态
export const approve = (data) => {
  return request({
    url: '/api/oksht-drp/otherOutDepotOrder/approve',
    method: 'post',
    data,
  });
};

// 销售其他出库修改审批状态
export const updateOutDepotOrderStatus = (data) => {
  return request({
    url: '/api/oksht-drp/otherOutDepotOrder/updateOutDepotOrderStatus',
    method: 'post',
    data,
  });
};

// 销售其他出库单解锁
export const unlock = (data) => {
  return request({
    url: '/api/oksht-inventory/lock/out/unlock',
    method: 'PUT',
    data,
  });
};
