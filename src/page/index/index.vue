<!--
 * @Description:
 * @author Freedom.yi
 * @date
 *
-->
<template>
  <div>
    <div class="avue-header">
      <!-- 顶部标签卡 -->
      <tags />
      <!-- 顶部导航栏 -->
      <top />
    </div>

    <div class="avue-layout">
      <div class="avue-left">
        <!-- 左侧导航栏 -->
        <sidebar />
      </div>
      <div class="avue-main">
        <!-- 主体视图层 -->
        <keep-alive>
          <router-view class="avue-view" />
        </keep-alive>
        <!-- <router-view class="avue-view" v-if="!$route.meta.keepAlive" />-->
      </div>
    </div>
    <!-- <div class="avue-shade" @click="showCollapse">哈哈哈</div>-->
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
  // methods: {
  // showCollapse() {
  //   this.$store.commit("SET_COLLAPSE");
  // },
  // }
};
</script>
