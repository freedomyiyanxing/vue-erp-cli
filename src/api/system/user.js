import request from '@/util/http';

export const getList = (current, size, params) => {
  return request({
    url: "/api/blade-user/list",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};
export const remove = ids => {
  return request({
    url: "/api/blade-user/remove",
    method: "post",
    params: {
      ids
    }
  });
};

export const add = row => {
  return request({
    url: "/api/blade-user/submit",
    method: "post",
    data: row
  });
};

export const update = row => {
  return request({
    url: "/api/blade-user/update",
    method: "post",
    data: row
  });
};

export const getUser = id => {
  return request({
    url: "/api/blade-user/detail",
    method: "get",
    params: {
      id
    }
  });
};

export const getUserInfo = () => {
  return request({
    url: "/api/blade-user/info",
    method: "get"
  });
};

export const resetPassword = userIds => {
  return request({
    url: "/api/blade-user/reset-password",
    method: "post",
    params: {
      userIds
    }
  });
};

export const updatePassword = (oldPassword, newPassword, newPassword1) => {
  return request({
    url: "/api/blade-user/update-password",
    method: "post",
    params: {
      oldPassword,
      newPassword,
      newPassword1
    }
  });
};

export const getUserNamesByDept = roleName => {
  return request({
    url: "/api/blade-user/nameList",
    method: "get",
    params: { roleName }
  });
};

export const getUserList = roleId => {
  return request({
    // url: "/api/blade-user/user-list"
    url: "/api/blade-user/user/list",
    method: "get",
    params: {
      roleId
    }
  });
};

export const getUserLists = roleId => {
  return request({
    url: "/api/blade-user/user/list",
    method: "get",
    params: {
      roleId
    }
  });
};

export const getDimUserLists = (roleId,name) => {
  return request({
    url: "/api/blade-user/user/roleId/name",
    method: "get",
    params: {
      roleId,
      name
    }
  });
};
