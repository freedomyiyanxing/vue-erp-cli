$
<template>
    <basic-container>测试页warehouse</basic-container>
</template>

<script>

  //import {List} from '@/api/'
  export default {

    name: "info",
    data() {
      return {
        form: {},
        rules: {
          name: [{message: "*必填项", required: true, trigger: ["change", "blur"]}]
        }
      };
    },
    created() {

    },
    methods: {}
  };
</script>

<style scoped lang='scss'>

</style>
