<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <div class="login-time">{{ time }}</div>
        <img class="img" src="/img/logo.png" alt="sht logo" />
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">登录</h4>
          <userLogin />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import day from 'dayjs';
import { mapGetters } from 'vuex';
import userLogin from './userlogin';

export default {
  name: 'login',
  components: {
    userLogin,
  },
  data() {
    return {
      time: '',
    };
  },
  created() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  computed: {
    ...mapGetters(['config']),
  },
  methods: {
    getTime() {
      this.time = day().format('YYYY-MM-DD HH:mm:ss');
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/styles/login.scss';
</style>
