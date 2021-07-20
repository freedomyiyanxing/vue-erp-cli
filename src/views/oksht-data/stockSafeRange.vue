<template>
  <basicContainer>
    <h2>34--"库存安全范围"</h2>
    <p>{{ index }}</p>
    <button @click="add">点击</button>
  </basicContainer>
</template>

<script>
export default {
  name: 'StockSafeRange',
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    add() {
      this.index += 1;
    },
  },
};
</script>
