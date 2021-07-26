<template>
  <div class="menu-wrapper">
    <template v-for="item in menu">
      <!-- 没有子级路由 -->
      <el-menu-item
        v-if="validateNull(item[propsDefault.children]) && validateRoles(item)"
        :index="item[propsDefault.path]"
        @click="open(item)"
        :key="item[propsDefault.label]"
        :class="{ 'is-active': validateActive(item) }"
      >
        <i :class="item[propsDefault.icon]"></i>
        <span slot="title" :alt="item[propsDefault.path]">
          {{ generateTitle(item) }}
        </span>
      </el-menu-item>

      <el-submenu
        v-else-if="!validateNull(item[propsDefault.children]) && validateRoles(item)"
        :index="item[propsDefault.path]"
        :key="item[propsDefault.label]"
      >
        <template slot="title">
          <i :class="item[propsDefault.icon]"></i>
          <span slot="title" :class="{ 'el-menu--display': false }"> {{ generateTitle(item) }} </span>
        </template>
        <template v-for="(child, cIndex) in item[propsDefault.children]">
          <el-menu-item
            @click="open(child)"
            :index="child[propsDefault.path]"
            :key="child[propsDefault.label]"
            :class="{ 'is-active': validateActive(child) }"
            v-if="validateNull(child[propsDefault.children]) && !filterDetailsAdd(child.path)"
          >
            <i :class="child[propsDefault.icon]"></i>
            <span slot="title">{{ generateTitle(child) }}</span>
          </el-menu-item>
          <sidebar-item v-else-if="!filterDetailsAdd(child.path)" :menu="[child]" :key="cIndex" :props="propsDefault" />
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { validateNull } from '@/util/validate';
import { propsDefault } from '@/config';

export default {
  name: 'sidebarItem',
  data() {
    return {
      propsDefault,
    };
  },
  props: {
    menu: {
      type: Array,
    },
    first: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(['roles']),
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
      return item[this.propsDefault.label];
    },
    validateActive(item) {
      const groupFlag = (item.group || []).some((ele) => this.$route.path.includes(ele));
      return this.nowTagValue === item[this.propsDefault.path] || groupFlag;
    },
    validateRoles(item) {
      return item.meta?.roles ? item.meta.roles.includes(this.roles) : true;
    },
    validateNull(val) {
      return validateNull(val);
    },
    open(item) {
      console.log('item====', item.path);
      this.$router.$shtRouter.group = item.group;
      this.$router.$shtRouter.meta = item.meta;

      const path = this.$router.$shtRouter.getPath({
        name: item[this.propsDefault.label],
        src: item[this.propsDefault.path],
      });

      this.$router.push({
        path,
        query: item.query,
      });
    },
  },
};
</script>
