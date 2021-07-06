import request from '@/util/http';

export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-system/device/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}
export const getAllDeviceList = (userId) => {
  return request({
    url: '/api/blade-system/device/allList',
    method: 'get',
    params: {
      userId
    },
  })
}

export const saveUserDevices = (userId,deviceIds) => {
  return request({
    url: '/api/blade-system/device/saveUserDevices',
    method: 'post',
    params: {
      userId,
      deviceIds,
    }
  })
}

export const disable = (deviceIds) => {
  return request({
    url: '/api/blade-system/device/disable',
    method: 'post',
    params: {
      deviceIds,
    }
  })
}

export const enable = (deviceIds) => {
  return request({
    url: '/api/blade-system/device/enable',
    method: 'post',
    params: {
      deviceIds,
    }
  })
}

export const auth = (deviceIds) => {
  return request({
    url: '/api/blade-system/device/auth',
    method: 'post',
    params: {
      deviceIds,
    }
  })
}
