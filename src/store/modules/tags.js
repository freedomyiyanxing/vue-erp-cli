import { setStore, getStore } from '@/util/store';
import { diff } from '@/util';
import config from '@/config';

const { isFirstPage } = config;
const tagWel = config.fistPage;
const tagObj = {
  label: '', // 标题名称
  value: '', // 标题的路径
  params: '', // 标题的路径参数
  query: '', // 标题的参数
  meta: {}, // 额外参数
  group: [], // 分组
};

// 处理首个标签
function setFistTag(list) {
  if (list.length === 1) {
    list[0].close = false;
  } else {
    list.forEach((ele) => {
      ele.close = !(ele.value === tagWel.value && isFirstPage === false);
    });
  }
}

const navs = {
  state: {
    tagList: getStore({ name: 'tagList' }) || [],
    tag: getStore({ name: 'tag' }) || tagObj,
    tagWel,
  },
  actions: {},
  mutations: {
    ADD_TAG: (state, action) => {
      state.tag = action;
      setStore({ name: 'tag', content: state.tag, type: 'session' });
      if (state.tagList.some((ele) => diff(ele, action))) return;
      state.tagList.push(action);
      setFistTag(state.tagList);
      setStore({ name: 'tagList', content: state.tagList, type: 'session' });
    },
    DEL_TAG: (state, action) => {
      state.tagList = state.tagList.filter((item) => {
        return !diff(item, action);
      });
      setFistTag(state.tagList);
      setStore({ name: 'tagList', content: state.tagList, type: 'session' });
    },
    DEL_ALL_TAG: (state) => {
      state.tagList = [state.tagWel];
      setStore({ name: 'tagList', content: state.tagList, type: 'session' });
    },
    DEL_TAG_OTHER: (state) => {
      state.tagList = state.tagList.filter((item) => {
        if (item.value === state.tag.value) {
          return true;
        }
        return !config.isFirstPage && item.value === config.fistPage.value;
      });
      setFistTag(state.tagList);
      setStore({ name: 'tagList', content: state.tagList, type: 'session' });
    },
  },
};
export default navs;
