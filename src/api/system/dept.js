import request from '@/util/http';

export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-system/dept/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}
export const remove = (ids) => {
  return request({
    url: '/api/blade-system/dept/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const getDepotList = params => {
  return request({
    url: '/api/blade-user/user/depotId',
    method: 'get',
    params: params
  })
}

export const add = (row) => {
  return request({
    url: '/api/blade-system/dept/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/blade-system/dept/submit',
    method: 'post',
    data: row
  })
}

export const getDept = (id) => {
  return request({
    url: '/api/blade-system/dept/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
export const getDeptTree = (tenantId) => {
  return request({
    url: '/api/blade-system/dept/tree',
    method: 'get',
    params: {
      tenantId,
    }
  })
}

export const listTenantByDept = (ids) => {
  return request({
    url: '/api/blade-system/dept/listTenantByDept',
    method: 'get',
    params: {
      ids,
    }
  })
}

