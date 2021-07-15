import request from '@/util/http';

export const relieveLock = (dtos) => {
  return request({
    url: '/api/oksht-inventory/lock/web/unlock',
    method: 'post',
    data: dtos,
  });
};

export const getInventory = (inventoryVO) => {
  return request({
    url: '/api/oksht-inventory/inventory/page',
    method: 'get',
    params: inventoryVO,
  });
};

export const preciseLock = (LockVO) => {
  return request({
    url: '/api/oksht-inventory/lock/precise',
    method: 'post',
    data: LockVO,
  });
};

export const outOrderSn = (dto) => {
  return request({
    url: '/api/oksht-inventory/lock/out/unlock',
    method: 'put',
    data: dto,
  });
};
