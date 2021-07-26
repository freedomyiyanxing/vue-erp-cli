<template>
  <div class="avue-top">
    <div class="top-bar__right">
      <img class="top-bar__img" :src="userInfo.avatar" alt="avatar" />

      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userInfo.userName }}
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
import { mapGetters } from 'vuex';
import { fullscreenToggel } from '@/util';

export default {
  name: 'top',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    handleScreen() {
      fullscreenToggel();
    },
    logout() {
      this.$confirm('退出系统, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push({ path: '/login' });
        });
      });
    },
  },
};
</script>
