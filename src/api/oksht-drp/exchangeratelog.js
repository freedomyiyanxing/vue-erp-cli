import request from '@/util/http';
export const getExchangeratelog = exchangeRateLog => {
    return request({
      url: '/api/oksht-drp/exchangeratelog/list',
      method: 'get',
      params: exchangeRateLog
    })
  }
