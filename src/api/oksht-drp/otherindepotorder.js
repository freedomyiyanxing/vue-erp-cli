import request from '@/util/http';

// 采购其他入库list
export const otherindepotorder = (data) => {
  return request({
    url: '/api/oksht-drp/otherindepotorder/page',
    method: 'get',
    params: data,
  });
};

// 采购其他入库add
export const saveOtherindepotorder = (data) => {
  return request({
    url: '/api/oksht-drp/otherindepotorder/save',
    method: 'post',
    data,
  });
};

// 采购其他入库edit
export const update = (data) => {
  return request({
    url: '/api/oksht-drp/otherindepotorder/update',
    method: 'post',
    data,
  });
};

// 采购其他入库详情
export const detail = (data) => {
  return request({
    url: '/api/oksht-drp/indepotorder/detail',
    method: 'get',
    params: data,
  });
};

// 采购其他入库改变审核状态
export const approve = (data) => {
  return request({
    url: '/api/oksht-drp/indepotorder/approve',
    method: 'post',
    data,
  });
};

// 采购其他入库改变订单状态
export const status = (data) => {
  return request({
    url: '/api/oksht-drp/indepotorder/status',
    method: 'post',
    data,
  });
};
