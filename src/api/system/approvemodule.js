import request from '@/util/http';

export const getApprovemodule = (moduleCode) => {
  return request({
    url: '/api/blade-system/approvemodule/approveModulePerson',
    method: 'get',
    params: moduleCode,
  });
};
