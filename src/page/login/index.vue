<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <div class="login-time">
          {{time}}
        </div>
        <img class="img" src="/img/logo.png" alt="">
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">登录</h4>
          <userLogin v-if="activeName==='user'"></userLogin>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import day from 'dayjs';
  import { mapGetters } from "vuex";
  import { validateNull } from "@/util";
  import userLogin from "./userlogin";

  export default {
    name: "login",
    components: {
      userLogin,
    },
    data() {
      return {
        time: "",
        activeName: "user"
      };
    },
    watch: {
      $route() {
        const params = this.$route.query;
        this.socialForm.state = params.state;
        this.socialForm.code = params.code;
        if (!validateNull(this.socialForm.state)) {
          const loading = this.$loading({
            lock: true,
            text: this.socialForm.state === "WX" ? "微信" : "QQ" + '登录中,请稍后。。。',
            spinner: "el-icon-loading"
          });
          setTimeout(() => {
            loading.close();
          }, 2000);
        }
      }
    },
    created() {
      this.getTime();
      setInterval(() => {
        this.getTime();
      }, 1000);
    },
    mounted() {
    },
    computed: {
      ...mapGetters(["config"])
    },
    props: [],
    methods: {
      getTime() {
        this.time = day().format('YYYY-MM-DD HH:mm:ss')
      }
    }
  };
</script>

<style lang="scss">
  @import "~@/assets/styles/login.scss";
</style>
