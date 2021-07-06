import request from '@/util/http';

export const getPage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/outDepotOrder/page',
    method: 'get',
    params,
  });
  return data.data;
}

// 模糊搜素客户 /oksht-crm/enterpriseCustomer
export const getCustomerInfo = async (name) => {
  const { data } = await request.get('/api/oksht-crm/enterpriseCustomer/name', {
    params: {
      name_4: name,
      customerStatus_0: 1, // 正式客户
    }
  });
  return data.data;
}

// 根据客户id 查询 客户详细信息
export const getCustomerDetails = async (id) => {
  const { data } = await request.get(`/api/oksht-crm/enterpriseCustomer/${id}`);
  return data.data;
}

// 模糊搜素仓库 /oksht-inventory/depot
export const getDepotInfo = async (name, type, tenantId_0) => {
  const { data } = await request.get('/api/oksht-inventory/depot', {
    params: {
      name_4: name,
      type: type,
      tenantId_0
    }
  });
  return data.data;
}

// 查询出库详情
export const getOutDepotOrderDetail = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/outDepotOrder/detail',
    method: 'get',
    params,
  });
  return data.data;
}

// 新增出库订单
export const dispatchAddOutOrder = (params) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/outDepotOrder/saveOutDepotOrder',
    method: 'post',
    data: params,
  }).then((res) => {
    resolve(res);
  }).catch(() => {
    resolve(false)
  })
});


// 查询收货地址列表
export const getAddressList = async (params) => {
  const { data } = await request({
    url: '/api/oksht-crm/enterpriseCustomerDeliveryAddress',
    method: 'get',
    params,
  });
  return data.data;
}

// 更改订单状态
export const dispatchOutDoWaste = async (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/outDepotOrder/updateOutDepotOrderStatus',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
});

// 更改审批状态
export const dispatchExamineOrder = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-drp/outDepotOrder/approve',
    method: 'post',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
});


// 销售订单全部解锁
export const dispatchExamineUnlock = (data) => new Promise((resolve) => {
  request({
    url: '/api/oksht-inventory/lock/out/unlock',
    method: 'put',
    data,
  }).then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false)
  })
})
