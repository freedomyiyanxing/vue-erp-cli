import request from '@/util/http';

export const getSngeneraterules = (snGenerateRules) => {
  return request({
    url: '/api/oksht-drp/sngeneraterules/list',
    method: 'get',
    params: snGenerateRules,
  });
};

export const addSngeneraterules = (save) => {
  return request({
    url: '/api/oksht-drp/sngeneraterules/save',
    method: 'post',
    data: save,
  });
};

export const updateSngeneraterules = (update) => {
  return request({
    url: '/api/oksht-drp/sngeneraterules/update',
    method: 'post',
    data: update,
  });
};
