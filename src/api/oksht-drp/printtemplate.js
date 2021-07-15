import request from '@/util/http';

export const getPrinttemplate = (snGenerateRules) => {
  return request({
    url: '/api/oksht-drp/printtemplate/list',
    method: 'get',
    params: snGenerateRules,
  });
};

export const addPrinttemplate = (save) => {
  return request({
    url: '/api/oksht-drp/printtemplate/save',
    method: 'post',
    data: save,
  });
};

export const updatePrinttemplate = (update) => {
  return request({
    url: '/api/oksht-drp/printtemplate/update',
    method: 'post',
    data: update,
  });
};

export const editStatus = (status) => {
  return request({
    url: '/api/oksht-drp/printtemplate/status',
    method: 'post',
    data: status,
  });
};
