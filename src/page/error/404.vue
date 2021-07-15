<template>
  <div class="error-page">
    <div class="img">
      <img src="/img/404.svg'" alt="" />
    </div>
    <div class="content">
      <h1>404</h1>
      <div class="desc">抱歉，你访问的页面不存在</div>
      <div class="actions">
        <router-link :to="{ path: '/' }">
          <el-button type="primary">返回首页</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error-404',
};
</script>
