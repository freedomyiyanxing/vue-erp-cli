import request from '@/util/http';

// 调拨申请查询
export const getTransferorder = (data) => {
  return request({
    url: '/api/oksht-drp/transferorder/page',
    method: 'get',
    params: { ...data },
  });
};

// 新增调拨申请
export const addTransferorder = (data) => {
  return request({
    url: '/api/oksht-drp/transferorder/save',
    method: 'post',
    data: { ...data },
  });
};

// 调拨详情
export const getTransferorderDetail = (data) => {
  return request({
    url: '/api/oksht-drp/transferorder/detail',
    method: 'get',
    params: { ...data },
  });
};

// 修改调拨申请
export const updateTransferorder = (data) => {
  return request({
    url: '/api/oksht-drp/transferorder/update',
    method: 'post',
    data: { ...data },
  });
};

// 修改审核状态
export const approveTransferorder = (data) => {
  return request({
    url: '/api/oksht-drp/transferorder/approve',
    method: 'post',
    data: { ...data },
  });
};

// 改变订单状态
export const statusTransferorder = (data) => {
  return request({
    url: '/api/oksht-drp/transferorder/status',
    method: 'post',
    data: { ...data },
  });
};

// 汇率
export const getExchangerate = (data) => {
  return request({
    url: '/api/oksht-drp/exchangerate/list',
    method: 'get',
    params: { ...data },
  });
};
