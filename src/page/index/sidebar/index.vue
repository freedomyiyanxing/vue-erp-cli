<template>
  <div class="avue-sidebar">
    <Logo />
    <el-scrollbar style="height:100%">
      <el-menu
        unique-opened
        mode="vertical"
        :show-timeout="200"
        :collapse="keyCollapse"
        :default-active="nowTagValue"
      >
        <sidebar-item
          first
          :screen="screen"
          :menu="mockRouters"
          :props="config.menu.props"
          :collapse="keyCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import { mockRouters } from "@/router/test-routers";
  import Logo from "../logo";
  import SidebarItem from "./sidebarItem";

  export default {
    name: "sidebar",
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
      ...mapGetters(['config', 'menu', 'keyCollapse', 'screen']),
      // 获取激活的导航栏
      nowTagValue: function () {
        if (this.$route.path.includes('/oksht-drp/purchase-order/details')){
          console.log(this.$route.path, '---');
          return '/oksht-drp/purchase-order/index';
        }
        return this.$router.$shtRouter.getValue(this.$route);
      }
    },
  };
</script>

