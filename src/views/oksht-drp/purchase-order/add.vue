<template>
  <div>
    <h1>新增页面</h1>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'add',

  watch: {
    $route(to) {
      this.name = to.query.id;
    },
  },
  data() {
    return {
      name: this.$route.query.id,
    };
  },
};
</script>
