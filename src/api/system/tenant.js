import request from '@/util/http';

export const getTissue = () => {
  return request({
    url: '/api/blade-system/tenant/list/user',
    method: 'get',
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/blade-system/tenant/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/blade-system/tenant/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/blade-system/tenant/submit',
    method: 'post',
    data: row
  })
}
export const listAll = () => {
  return request({
    url: '/api/blade-system/tenant/list/select',
    method: 'get'
  })
}

export const getList = (params) => {
  return request({
    url: '/api/blade-system/tenant/list',
    method: 'get',
    params
  })
}

export const submit = (row) => {
  return request({
    url: '/api/blade-system/tenant/submit',
    method: 'post',
    data: row
  })
}

