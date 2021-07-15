import request from '@/util/http';

export const getList = (params) => {
  return request({
    url: '/api/oksht-workflow/process/definitioin',
    method: 'get',
    params,
  });
};
export const getInfo = (id) => {
  return request({
    url: `/api/oksht-workflow/process/definitioin/${id}`,
    method: 'get',
  });
};

export const Add = (data) => {
  return request({
    url: '/api/oksht-workflow/process/definitioin',
    method: 'post',
    data,
  });
};

export const Edit = (data) => {
  return request({
    url: '/api/oksht-workflow/process/definitioin',
    method: 'put',
    data,
  });
};
export const Del = (id) => {
  return request({
    url: `/api/oksht-workflow/process/definitioin/${id}`,
    method: 'delete',
  });
};

export const deptList = () => {
  return request({
    url: '/api/blade-system/dept/deptList',
    method: 'get',
  });
};

export const roleList = () => {
  return request({
    url: '/api/blade-system/role/roleList',
    method: 'get',
  });
};

export const personList = () => {
  return request({
    url: '/api/blade-user/user-list',
    method: 'get',
  });
};
