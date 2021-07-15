<!--分页组件-->
<template>
  <el-pagination
    background
    :total="pages.total"
    :page-size="pages.size"
    :page-sizes="[15, 30, 50, 100]"
    :current-page="pages.current"
    @size-change="sizeChange"
    @current-change="currentChange"
    layout="total,  prev, pager, next,sizes, jumper"
    style="text-align: right; margin-top: 10px"
  />
</template>
<script>
export default {
  name: 'pagination',
  props: { pages: {} },
  methods: {
    currentChange(current) {
      this.pages.current = current;
      this.emit();
    },
    sizeChange(size) {
      this.pages.size = size;
      this.pages.current = 1;
      this.emit();
    },
    emit() {
      this.$emit('pageChange', this.pages);
    },
  },
};
</script>
