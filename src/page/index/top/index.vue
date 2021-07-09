<template>
  <div class="avue-top">

    <!--    <div class="top-bar__left">-->
    <!--      <div-->
    <!--        v-if="showCollapse"-->
    <!--        class="avue-breadcrumb"-->
    <!--        :class="[{ 'avue-breadcrumb&#45;&#45;active': isCollapse }]"-->
    <!--      >-->
    <!--        <i class="icon-navicon" @click="setCollapse" />-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="top-bar__right">
      <el-tooltip
        effect="dark"
        placement="bottom"
        v-if="showFullScren"
        :content="isFullScren ? '退出全屏' : '全屏'"
      >
        <div class="top-bar__item">
          <i :class="isFullScren ? 'icon-tuichuquanping' : 'icon-quanping'" @click="handleScreen" />
        </div>
      </el-tooltip>

      <img class="top-bar__img" :src="userInfo.avatar" alt="avatar" />

      <el-dropdown>
        <span class="el-dropdown-link">
          {{userInfo.userName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/info/index">个人信息</router-link>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapState } from "vuex";
  import { fullscreenToggel, listenfullscreen } from "@/util";

  export default {
    name: "top",
    data() {
      return {};
    },
    components: {},
    created() {
    },
    mounted() {
      listenfullscreen(this.setScreen);
    },
    computed: {
      ...mapState({
        showDebug: state => state.common.showDebug,
        showTheme: state => state.common.showTheme,
        showLock: state => state.common.showLock,
        showFullScren: state => state.common.showFullScren,
        showCollapse: state => state.common.showCollapse,
        showSearch: state => state.common.showSearch,
        showMenu: state => state.common.showMenu,
        showColor: state => state.common.showColor
      }),
      ...mapGetters([
        "userInfo",
        "isFullScren",
        "tagWel",
        "tagList",
        "isCollapse",
        "tag",
        "logsLen",
        "logsFlag"
      ])
    },
    methods: {
      handleScreen() {
        fullscreenToggel();
      },
      setCollapse() {
        this.$store.commit("SET_COLLAPSE");
      },
      setScreen() {
        this.$store.commit("SET_FULLSCREN");
      },
      logout() {
        this.$confirm('退出系统, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: "warning"
        }).then(() => {
          this.$store.dispatch("LogOut").then(() => {
            this.$router.push({ path: "/login" });
          });
        });
      }
    }
  };
</script>
