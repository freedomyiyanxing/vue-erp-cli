import request from '@/util/http';

export const getApprovemodule = approveModule => {
  return request({
    url: '/api/blade-system/approvemodule/list',
    method: 'get',
    params: approveModule
  })
}

export const updateApprovemodule = updateData => {
  return request({
    url: '/api/blade-system/approvemodule/update',
    method: 'post',
    data: updateData
  })
}
