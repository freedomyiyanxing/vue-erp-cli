<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
