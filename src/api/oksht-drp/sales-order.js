/**
 * 新增销售订单
 */
import request from '@/util/http';

// 查询询价信息
export const getSalesOrderPage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/salesOrder/page',
    method: 'get',
    params,
  });
  return data.data;
};

// 查询询价信息
export const getInquiryPage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-data/inquiries/drpCustomerInquiry',
    method: 'get',
    params,
  });
  return data.data;
};

// 查询报价信息
export const getOfferPage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-data/inquiries/drpSellerQuote',
    method: 'get',
    params,
  });
  return data.data;
};

// 根据型号品牌数量获取所在阶梯价格数据
export const getGradientPrice = async (params) => {
  const { data } = await request({
    url: '/api/oksht-customer/finalPriceLadder/getPriceByModelAndNum',
    method: 'get',
    params,
  });
  return data.data;
};

// 检验库存
export const verificationStock = async (data) =>
  new Promise((resolve) => {
    request({
      url: '/api/oksht-inventory/lock/check',
      method: 'post',
      data,
    }).then((res) => {
      resolve(res.data.data);
    });
  });

// 新增入库提交
export const postAddSalesOrder = async (url, data) =>
  new Promise((resolve) => {
    request({
      url,
      method: 'post',
      data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch(() => {
        resolve(false);
      });
  });

// 查询销售订单详情
export const getDetailsData = async (params) => {
  const { data } = await request.get('/api/oksht-drp/salesOrder/detail', { params });
  return data.data;
};

// 查询汇率
export const getRateData = async (params) => {
  const { data } = await request.get('/api/oksht-drp/exchangerate/list', { params });
  return data.data;
};

// 更改订单状态
export const dispatchSalesOrderStatus = async (data) =>
  new Promise((resolve) => {
    request({
      url: '/api/oksht-drp/salesOrder/updateOrderStatus',
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
      url: '/api/oksht-drp/salesOrder/approve',
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

// 销售订单全部解锁
export const dispatchSalesUnlock = (data) =>
  new Promise((resolve) => {
    request({
      url: '/api/oksht-inventory/lock/seller/order',
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

// 根据销售订单号查询采购明细
export const getStockList = async (salesOrderSn) => {
  const { data } = await request.get(`/api/oksht-drp/purchaserequestorder/list/salesSn?salesOrderSn=${salesOrderSn}`);
  return data.data;
};

// 根据发货地查询仓库
export const getDepotList = async (params) => {
  const { data } = await request({
    url: '/api/oksht-inventory/depot',
    method: 'get',
    params,
  });
  return data.data;
};

// 根据型号品牌查询采购员
export const getBuyerList = async (params) => {
  const { data } = await request
    .get('/api/oksht-data/buyerGroupConfig/drpGetBuyerByBrand', {
      params,
    })
    .catch(() => {
      return { data: { data: [] } };
    });
  return data.data;
};
