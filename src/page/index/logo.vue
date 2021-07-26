<template>
  <div class="avue-logo">
    <div class="avue-logo_title">
      <div><img src="img/logo.jpg" width="80" alt="img" />{{ config.indexTitle }}</div>
    </div>
    <!--    </transition-group>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'logo',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['config']),
  },
};
</script>

<style lang="scss">
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-active {
  transition: opacity 2.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.avue-logo {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 64px;
  line-height: 64px;
  background-color: #20222a;
  font-size: 20px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.8);
  z-index: 1024;

  &_title {
    display: block;
    text-align: center;
    font-weight: 300;
    font-size: 16px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      img {
        margin-right: 5px;
      }
    }
  }

  &_subtitle {
    padding-top: 10px;
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
}
</style>
