<!--
 * @Description:
 * @author Freedom.yi
 * @date
 *
-->
<template>
  <div>
    <header class="sht-header">
      <!-- 顶部标签卡 -->
      <tags />
      <!-- 顶部导航栏 -->
      <top />
    </header>

    <section class="sht-layout">
      <div class="sht-left">
        <!-- 左侧导航栏 -->
        <sidebar />
      </div>
      <div class="sht-main">
        <!-- 主体视图层 -->
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </section>
  </div>
</template>

<script>
import tags from './tags';
import top from './top';
import sidebar from './sidebar';

export default {
  components: {
    top,
    tags,
    sidebar,
  },
  name: 'index',
};
</script>
