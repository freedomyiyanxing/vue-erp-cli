<!--suppress JSUnusedGlobalSymbols -->
<template>
  <basicContainer>
    <h2>34--数据合作供应商</h2>
    <p>{{ index }}</p>
    <button @click="add">点击</button>
  </basicContainer>
</template>

<script>
export default {
  name: 'MaterialInfo',
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
