<template>
  <div class="menu-wrapper">
    <template v-for="item in menu">
      <!-- 没有子级路由 -->
      <el-menu-item
        v-if="validateNull(item[childrenKey]) && validateRoles(item)"
        :index="item[pathKey]"
        @click="open(item)"
        :key="item[labelKey]"
        :class="{ 'is-active': validateActive(item) }"
      >
        <i :class="item[iconKey]"></i>
        <span slot="title" :alt="item[pathKey]">
          {{ generateTitle(item) }}
        </span>
      </el-menu-item>

      <el-submenu
        v-else-if="!validateNull(item[childrenKey]) && validateRoles(item)"
        :index="item[pathKey]"
        :key="item[labelKey]"
      >
        <template slot="title">
          <i :class="item[iconKey]"></i>
          <span slot="title" :class="{ 'el-menu--display': collapse && first }"> 00 {{ generateTitle(item) }} </span>
        </template>
        <template v-for="(child, cIndex) in item[childrenKey]">
          <el-menu-item
            @click="open(child)"
            :index="child[pathKey]"
            :key="child[labelKey]"
            v-if="validateNull(child[childrenKey]) && !filterDetailsAdd(child.path)"
            :class="{ 'is-active': validateActive(child) }"
          >
            <i :class="child[iconKey]"></i>
            <span slot="title">{{ generateTitle(child) }}</span>
          </el-menu-item>
          <sidebar-item
            v-else-if="!filterDetailsAdd(child.path)"
            :menu="[child]"
            :key="cIndex"
            :props="props"
            :screen="screen"
            :collapse="collapse"
          />
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { validateNull } from '@/util/validate';
import config from './config.js';

export default {
  name: 'sidebarItem',
  data() {
    return {
      config,
    };
  },
  props: {
    menu: {
      type: Array,
    },
    screen: {
      type: Number,
    },
    first: {
      type: Boolean,
      default: false,
    },
    props: {
      type: Object,
      default: () => {
        return {};
      },
    },
    collapse: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters(['roles']),
    labelKey() {
      return this.props.label || this.config.propsDefault.label;
    },
    pathKey() {
      return this.props.path || this.config.propsDefault.path;
    },
    iconKey() {
      return this.props.icon || this.config.propsDefault.icon;
    },
    childrenKey() {
      return this.props.children || this.config.propsDefault.children;
    },
    nowTagValue() {
      return this.$router.$shtRouter.getValue(this.$route);
    },
  },
  methods: {
    // 过滤详情页面 新增页面
    filterDetailsAdd(path) {
      return path.endsWith('/details') || path.endsWith('/add');
    },
    generateTitle(item) {
      return item[this.labelKey];
    },
    validateActive(item) {
      const groupFlag = (item.group || []).some((ele) => this.$route.path.includes(ele));
      return this.nowTagValue === item[this.pathKey] || groupFlag;
    },
    validateRoles(item) {
      return item.meta?.roles ? item.meta.roles.includes(this.roles) : true;
    },
    validateNull(val) {
      return validateNull(val);
    },
    open(item) {
      // eslint-disable-next-line no-console
      console.log('item====', item.path, this.screen);
      if (this.screen <= 1) {
        this.$store.commit('SET_COLLAPSE');
      }
      this.$router.$shtRouter.group = item.group;
      this.$router.$shtRouter.meta = item.meta;

      const path = this.$router.$shtRouter.getPath({
        name: item[this.labelKey],
        src: item[this.pathKey],
      });

      this.$router.push({
        path,
        query: item.query,
      });
    },
  },
};
</script>
