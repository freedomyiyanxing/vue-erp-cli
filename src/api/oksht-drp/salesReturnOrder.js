import request from '@/util/http';

export const getSalesReturnOrder = salesReturnOrder => {
  return request({
    url: '/api/oksht-drp/salesReturnOrder/page',
    method: 'get',
    params: salesReturnOrder
  })
}

export const getCustomerInfo = name => {
  return request({
    url: '/api/oksht-crm/enterpriseCustomer/name',
    method: 'get',
    params: {
      customerStatus_0: 1,
      name_4: name
    }
  })
}

export const addSalesReturnOrder = salesReturnOrder => {
  return request({
    url: '/api/oksht-drp/salesReturnOrder/save',
    method: 'post',
    data: salesReturnOrder
  })
}

export const getCustomerDetails = id => {
  return request({
    url: `/api/oksht-crm/enterpriseCustomer/${id}`,
    method: 'get',
  })
}

export const getAddressList = data => {
  return request({
    url: '/api/oksht-crm/enterpriseCustomerDeliveryAddress',
    method: 'get',
    params: data
  })
}

export const getSalesReturnOrderDetails = details => {
  return request({
    url: '/api/oksht-drp/salesReturnOrder/detail',
    method: 'get',
    params: details
  })
}

export const updateSalesReturnOrder = update => {
  return request({
    url: '/api/oksht-drp/salesReturnOrder/update',
    method: 'post',
    data: update
  })
}

export const updateOrderStatus = updateOrderStatus => {
  return request({
    url: '/api/oksht-drp/salesReturnOrder/updateOrderStatus',
    method: 'post',
    data: updateOrderStatus
  })
}

export const submitApprove = approve => {
  return request({
    url: '/api/oksht-drp/salesReturnOrder/approve',
    method: 'post',
    data: approve
  })
}

export const getModelVO = vos => {
  return request({
    url: '/api/oksht-inventory/inventory/modelVO',
    method: 'post',
    data: vos
  })
}
