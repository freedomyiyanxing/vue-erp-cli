import request from '@/util/http';

// 仓库盘点核价
export const getInventoryCheckPricing = data => {
  return request({
    url: '/api/oksht-inventory/inventoryCheckPricing/page',
    method: 'get',
    params: { ...data }
  })
}

// 仓库盘点核价详情
export const getInventoryCheckPricingDetail = data => {
  return request({
    url: '/api/oksht-inventory/inventoryCheckPricingDetail/page',
    method: 'get',
    params: { ...data }
  })
}

// 修改
export const editInventoryCheckPricing = data => {
  return request({
    url: '/api/oksht-inventory/inventoryCheckPricing',
    method: 'post',
    data: { ...data }
  })
}

// 更新状态
export const status = data => {
  return request({
    url: '/api/oksht-inventory/inventoryCheckPricing/status',
    method: 'put',
    data: { ...data }
  })
}

// 盘点人
export const getCheckerUser = data => {
  return request({
    url: '/api/oksht-inventory/inventoryCheckPricing/user',
    method: 'get',
    params: { ...data }
  })
}
