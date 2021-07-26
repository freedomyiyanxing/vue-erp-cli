<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input
        size="small"
        @keyup.enter.native="handleLogin"
        v-model="loginForm.username"
        auto-complete="off"
        placeholder="请输入账号"
      >
        <i slot="prefix" class="icon-yonghu" />
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        size="small"
        auto-complete="off"
        placeholder="请输入密码"
        v-model="loginForm.password"
        @keyup.enter.native="handleLogin"
        :type="passwordType ? 'password' : 'text'"
      >
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword" />
        <i slot="prefix" class="icon-mima" />
      </el-input>
    </el-form-item>
    <el-form-item prop="code" class="box">
      <el-input
        size="small"
        @keyup.enter.native="handleLogin"
        v-model="loginForm.code"
        auto-complete="off"
        placeholder="请输入验证码"
      >
        <i slot="prefix" class="icon-yanzhengma icon" />
      </el-input>
      <div class="login-code">
        <img :src="loginForm.image" class="login-code-img" @click="refreshCode" alt="code" />
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { getCaptcha } from '@/api/user';

export default {
  name: 'UserLogin',
  data() {
    return {
      loginForm: {
        // 组织ID
        tenantId: '1',
        // 用户名
        username: 'admin',
        // 密码
        password: 'oksht3030',
        // 账户类型
        type: 'account',
        // 验证码的值
        code: '',
        // 验证码的索引
        key: '',
        // 预加载白色背景
        image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, message: '密码长度最少为6位', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 5, message: '无效的验证码', trigger: 'blur' },
        ],
      },
      passwordType: true,
    };
  },
  created() {
    this.refreshCode();
  },
  methods: {
    refreshCode() {
      getCaptcha().then((res) => {
        const { data } = res.data;
        this.loginForm.key = data.key;
        this.loginForm.image = data.image;
      });
    },
    showPassword() {
      this.passwordType = !this.passwordType;
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: '登录中,请稍后。。。',
            spinner: 'el-icon-loading',
          });
          this.$store
            .dispatch('LoginByUsername', this.loginForm)
            .then(() => {
              this.$router.push({ path: '/wel/index' });
              loading.close();
            })
            .catch(() => {
              loading.close();
            });
        }
      });
    },
  },
};
</script>
