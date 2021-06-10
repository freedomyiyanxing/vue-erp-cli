<template>
  <el-form class="login-form"
           status-icon
           :rules="loginRules"
           ref="loginForm"
           :model="loginForm"
           label-width="0">
    <el-form-item v-if="tenantMode" prop="tenantId" style="display: none">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.tenantId"
                auto-complete="off">
        <i slot="prefix"
           class="icon-quanxian"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="username">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.username"
                auto-complete="off">
        <i slot="prefix"
           class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                :type="passwordType"
                v-model="loginForm.password"
                auto-complete="off">
        <i class="el-icon-view el-input__icon"
           slot="suffix"
           @click="showPassword"></i>
        <i slot="prefix"
           class="icon-mima"></i>
      </el-input>
    </el-form-item>
    <el-form-item v-if="captchaMode" prop="code">
      <el-row :span="24">
        <el-col :span="16">
          <el-input size="small"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.code"
                    auto-complete="off">
            <i slot="prefix" class="icon-yanzhengma" />
          </el-input>
        </el-col>
        <el-col :span="8">
          <div class="login-code">
            <img :src="loginForm.image" class="login-code-img" @click="refreshCode" />
          </div>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button
        size="small"
        type="primary"
        class="login-submit"
        @click.native.prevent="handleLogin"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import config from '@/config';
  import { getCaptcha } from "@/api/user";

  export default {
    name: "userlogin",
    data() {
      return {
        tenantMode: config.tenantMode,
        captchaMode: config.captchaMode,
        loginForm: {
          //组织ID
          tenantId: "000000",
          //用户名
          username: "admin",
          //密码
          password: "oksht3030",
          //账户类型
          type: "account",
          //验证码的值
          code: "",
          //验证码的索引
          key: "",
          //预加载白色背景
          image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        },
        loginRules: {
          tenantId: [
            { required: false, message: "请输入组织ID", trigger: "blur" }
          ],
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" }
          ],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 1, message: "密码长度最少为6位", trigger: "blur" }
          ]
        },
        passwordType: "password"
      };
    },
    created() {
      this.refreshCode();
    },
    methods: {
      refreshCode() {
        getCaptcha().then(res => {
          const data = res.data.data;
          this.loginForm.key = data.key;
          this.loginForm.image = data.image;
        })
      },
      showPassword() {
        this.passwordType === ""
          ? (this.passwordType = "password")
          : (this.passwordType = "");
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            const loading = this.$loading({
              lock: true,
              text: '登录中,请稍后。。。',
              spinner: "el-icon-loading"
            });
            this.$store.dispatch("LoginByUsername", this.loginForm).then(() => {
              this.$router.push({ path: '/wel/index' });
              loading.close();
            }).catch(() => {
              loading.close()
            });
          }
        });
      }
    }
  };
</script>

<style>
</style>
