import request from '@/util/http';
export const getExchangerate = exchangeRateLog => {
    return request({
      url: '/api/oksht-drp/exchangerate/list',
      method: 'get',
      params: exchangeRateLog
    })
  }

  export const updateExchangeRenew = renew => {
    return request({
      url: '/api/oksht-drp/exchangerate/renew',
      method: 'post',
      data: renew
    })
  }

  export const addExchangeRenew = save => {
    return request({
      url: '/api/oksht-drp/exchangerate/save',
      method: 'post',
      data: save
    })
  }
