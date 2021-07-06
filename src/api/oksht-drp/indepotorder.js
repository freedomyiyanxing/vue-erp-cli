import request from '@/util/http';

export const getSalesReturnInDepotPage = salesReturnInDepotPage => {
    return request({
      url: '/api/oksht-drp/indepotorder/salesReturnInDepotPage',
      method: 'get',
      params: salesReturnInDepotPage
    })
  }

  export const getSalesReturnInDepotPageDetail = Detail => {
    return request({
      url: '/api/oksht-drp/indepotorder/salesReturnInDepotDetail',
      method: 'get',
      params: Detail
    })
  }
