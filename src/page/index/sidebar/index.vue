<template>
  <div class="avue-sidebar">
    <Logo />
    <el-scrollbar style="height: 100%">
      <el-menu unique-opened mode="vertical" :show-timeout="200" :collapse="false" :default-active="nowTagValue">
        <sidebar-item first :menu="mockRouters" :collapse="false" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mockRouters } from '@/router/test-routers';
import SidebarItem from './sidebarItem';
import Logo from '../logo';

export default {
  name: 'sidebar',
  components: { SidebarItem, Logo },
  data() {
    return {
      mockRouters,
    };
  },
  created() {
    // this.$store.dispatch("GetMenu").then(data => {
    //   this.$router.$shtRouter.formatRoutes(data, true);
    // });
  },
  computed: {
    ...mapGetters(['menu']),
    // 获取激活的导航栏
    nowTagValue() {
      if (
        this.$route.path.includes('/oksht-drp/purchase-order/details') ||
        this.$route.path.includes('/oksht-drp/purchase-order/add')
      ) {
        console.log(this.$route.path, '---');
        return '/oksht-drp/purchase-order/index';
      }
      return this.$router.$shtRouter.getValue(this.$route);
    },
  },
};
</script>
