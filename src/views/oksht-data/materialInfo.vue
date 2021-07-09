<template>
  <div>
    <h2> 34--数据合作供应商</h2>
    <p>{{index}}</p>
    <button @click="add">点击</button>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        index: 0,
      }
    },
    methods: {
      add() {
        this.index += 1;
      },
    },
  }
</script>
