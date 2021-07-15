import request from '@/util/http';

export const getSalesOrderLock = (salesOrderLock) => {
  return request({
    url: '/api/oksht-drp/salesOrderLock/salesOrderLockPage',
    method: 'get',
    params: salesOrderLock,
  });
};
