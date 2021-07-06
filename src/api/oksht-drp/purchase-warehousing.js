/**
 * 采购入库
 */
import request from '@/util/http';

// 查询采购入库列表
export const getPurchaseWhPage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/indepotorder/page',
    method: 'get',
    params,
  });
  return data.data;
}

// 新建入库单选择采购订单
export const getPurchaseOrderList = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/purchaseorder/list/inDepot',
    method: 'get',
    params,
  });
  return data.data;
}

// 退换货选择入库单
export const getPurchaseReturnList = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/indepotorder/list/return',
    method: 'get',
    params,
  });
  return data.data;
}

// 新增入库提交
export const savePurchaseWh = async (url, data) => new Promise((resolve) => {
  request({
    url,
    method: 'post',
    data,
  }).then((e) => {
    resolve(e);
  }).catch(() => {
    resolve(false)
  })
});

// 查询采购入库详情
export const getPurchaseWhDetails = async (params) => {
  const { data } = await request.get('/api/oksht-drp/indepotorder/detail', {
    params,
  });
  return data.data;
}

//出库仓库
export const getDepot = async (params) => {
  const { data } = await request.get('/api/oksht-inventory/depot', {
    params,
  });
  return data.data;
}

// 改变订单状态
export const dispatchPurchaseWhDoWaste = async (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/indepotorder/status',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
});


// 更改审批状态
export const dispatchPurchaseWhExamineOrder = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/indepotorder/approve',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
});

// 取消入库
export const dispatchCancelPurchaseWh = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/indepotorder/cancel',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
})
