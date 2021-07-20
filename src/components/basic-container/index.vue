<!--
 * @Description: 全家容器
 * @author Freedom.yi
 * @date 2021/7/19
 *
-->
<template>
  <div class="basic-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BasicContainer',
};
</script>

<style lang="scss">
.basic-container {
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
}
</style>
