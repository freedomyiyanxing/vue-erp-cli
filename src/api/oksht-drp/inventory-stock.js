import request from '@/util/http';

export const getStock = depotVO => {
  return request({
    url: '/api/oksht-inventory/depot/page',
    method: 'get',
    params: depotVO
  })
}

export const getInventoryBatch = inventoryBatchVO => {
  return request({
    url: '/api/oksht-inventory/inventoryBatch/page',
    method: 'get',
    params: inventoryBatchVO
  })
}

export const getInventory = inventoryVO => {
  return request({
    url: '/api/oksht-inventory/inventory',
    method: 'get',
    params: inventoryVO
  })
}



export const getTransfer = data => {
  return request({
    url: '/api/oksht-inventory/inventory/inventory/transfer',
    method: 'get',
    params: data
  })
}

export const getSummary = inventoryVO => {
  return request({
    url: '/api/oksht-inventory/inventory/summary/page',
    method: 'get',
    params: inventoryVO
  })
}

export const getBuyerLockNumByPoiId = id => {
  return request({
    url: '/api/oksht-drp/purchaseorder/getBuyerLockNumByPoiId',
    method: 'get',
    params: { id }
  })
}

export const getStockNameList = depotVO => {
  return request({
    url: '/api/oksht-inventory/depot',
    method: 'get',
    params: depotVO
  })
}

export const inStockLock = ControlLockVO => {
  return request({
    url: '/api/oksht-inventory/lock/control',
    method: 'post',
    data: ControlLockVO
  })
}

export const getOnPassageDetail = onPassageDetailVO => {
  return request({
    url: '/api/oksht-inventory/onPassageDetail/page',
    method: 'get',
    params: onPassageDetailVO
  })
}

export const exportIcnetStatZyExcel = inventoryBatchVO => {
  return request({
    url: '/api/oksht-inventory/inventoryBatch/export',
    method: 'get',
    responseType: "blob",
    params: inventoryBatchVO
  })
}

export const controlLock = purchaseOrder => {
  return request({
    url: '/api/oksht-drp/purchaseorder/controlLock',
    method: 'post',
    data: purchaseOrder
  })
}

export const unlock = unlock => {
  return request({
    url: '/api/oksht-drp/purchaseorder/unlock',
    method: 'post',
    data: unlock
  })
}

export const getDepotPositions = depotPositionsVO => {
  return request({
    url: '/api/oksht-inventory/depotPositions/page',
    method: 'get',
    params: depotPositionsVO
  })
}

export const getDepot = depotVO => {
  return request({
    url: '/api/oksht-inventory/depot',
    method: 'get',
    params: depotVO
  })
}

export const getLockDetail = params => {
  return request({
    url: '/api/oksht-inventory/lock/detail',
    method: 'get',
    params: params
  })
}

export const getDepotAdmin = params => {
  return request({
    url: '/api/oksht-inventory/depot/admin',
    method: 'get',
    params: params
  })
}

// 导出货品库存

export const exportStockMessage = inventoryBatchVO => {
  return request({
    url: '/api/oksht-inventory/inventory/summary/page/export',
    method: 'get',
    responseType: "blob",
    params: inventoryBatchVO
  })
}
