<template>
  <div class="login-container">
    <div class="login-left">
      <img class="img" src="/img/login-bg.webp" alt="sht logo" />
    </div>
    <div class="login-right">
      <div class="login-main">
        <img class="img" src="/img/logo.png" alt="logo" />
        <h4 class="login-title">火种智能交易系统</h4>
        <UserLogin />
        <p class="login-text">信息引领企业数据转化价值</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import UserLogin from './userlogin';

export default {
  name: 'login',
  components: {
    UserLogin,
  },
  computed: {
    ...mapGetters(['config']),
  },
};
</script>

<style lang="scss">
@import '~@/assets/styles/login.scss';
</style>
