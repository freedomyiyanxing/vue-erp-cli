<template>
  <basicContainer>
    <h2>采购订单详情</h2>
    <p>{{ name }}</p>
  </basicContainer>
</template>

<script>
export default {
  name: 'PurchaseOrderDetails',
  watch: {
    $route(to, form) {
      console.log(to.query.id, form);
      this.name = to.query.id;
    },
  },
  data() {
    console.log(this.$route.query.id);
    return {
      name: this.$route.query.id,
    };
  },
};
</script>
