<template>
  <div class="avue-sidebar">
    <logo />
    <el-scrollbar style="height:100%">
      <!--      <div class="avue-sidebar&#45;&#45;tip">没有发现菜单</div>-->
      <el-menu
        unique-opened
        :default-active="nowTagValue"
        mode="vertical"
        :show-timeout="200"
        :collapse="keyCollapse"
      >
        <sidebar-item
          first
          :menu="mockRouters"
          :screen="screen"
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
  import logo from "../logo";
  import sidebarItem from "./sidebarItem";

  export default {
    name: "sidebar",
    components: { sidebarItem, logo },
    data() {
      return {
        mockRouters,
      };
    },
    created() {
      this.$store.dispatch("GetMenu").then(data => {
        if (data.length === 0) {
          return
        }
        this.$router.$avueRouter.formatRoutes(mockRouters, true);
      });
    },
    computed: {
      ...mapGetters(['config', 'menu', 'tag', 'keyCollapse', 'screen']),
      nowTagValue: function () {
        console.log(',,,,', this.$router.$avueRouter.getValue(this.$route));
        return this.$router.$avueRouter.getValue(this.$route);
      }
    },
  };
</script>
<style lang="scss" scoped>
</style>

