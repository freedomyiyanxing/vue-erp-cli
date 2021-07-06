/**
 * 采购订单
 */
import request from '@/util/http';

// 查询采购订单列表
export const getPurchasePage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/purchaseorder/page',
    method: 'get',
    params,
  });
  return data.data;
}

// 模糊查询供应商名称
export const getSupplierName = async (query) => {
  const { data } = await request.get(`/api/oksht-customer/supplier/listSelect?keyword=${query}`);
  return data.data;
}

// 更改审批状态
export const dispatchExamineOrder = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/salesOrder/approve',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
})

// 模糊查询品牌
export const getAllBrand = async (query) => {
  const { data } = await request.get(`/api/oksht-customer/brandnormal/getAllBrand?brand=${query}`);
  return data.data;
}

// 新增提交
export const savePurchaseOrder = async (url, data) => new Promise((resolve) => {
  request({
    url, method: 'post', data,
  }).then((res) => {
    resolve(res);
  }).catch(() => {
    resolve(false)
  })
});

// 客户询价模块获取供应商报价(选择报价信息)
export const getCusInquiryBuyerQuotePage = async (params) => {
  const { data } = await request.get('/api/oksht-data/buyerQuoteRecord/getDrpBuyerQuotePage', {
    params,
  });
  return data.data;
}

// 查询采购订单详情
export const getPurchaseDetails = async (params) => {
  const { data } = await request.get('/api/oksht-drp/purchaseorder/detail', {
    params,
  });
  return data.data;
}

// 改变订单状态
export const dispatchPurchaseDoWaste = async (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/purchaseorder/status',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
});

// 更改审批状态
export const dispatchPurchaseExamineOrder = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/purchaseorder/approve',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
});

// 取消采购数量
export const dispatchCancelPurchase = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/purchaseorder/cancel',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
});

// 关联采购申请单
export const dispatchRelatedPurchase = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/purchaseorder/associate',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
})

// 解除锁定数量
export const dispatchUnlockPurchase = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/purchaseorder/unlock',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
})

// 采购控货锁定
export const dispatchControlUnlock = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/purchaseorder/controlLock',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
})


// 查询采购订单详情
export const getPurchaseLockDetail = async (params) => {
  const { data } = await request.get('/api/oksht-drp/purchaseorder/lockDetail', {
    params,
  });
  return data.data;
}

// 商品整包提示
export const checkIsWholePackage = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/purchaseorder/checkIsWholePackage',
    method: 'post',
    data,
  }).then((res) => {
    resolve(res.data);
  }).catch(() => {
    resolve(false)
  })
})
