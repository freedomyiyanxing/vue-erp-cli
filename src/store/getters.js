const getters = {
  tag: (state) => state.tags.tag,
  config: (state) => state.common.config,
  userInfo: (state) => state.user.userInfo,
  tagList: (state) => state.tags.tagList,
  tagWel: (state) => state.tags.tagWel,
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
  permission: (state) => state.user.permission,
  menu: (state) => state.user.menu,
  menuAll: (state) => state.user.menuAll,
};
export default getters;
