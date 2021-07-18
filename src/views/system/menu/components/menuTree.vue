<!--菜单tree-->
<template>
  <el-dialog
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="dialogVisible"
    append-to-body
    center
    width="25%"
  >
    <el-input clearable size="mini" style="margin: 15px 0" placeholder="输入关键字进行过滤" v-model="filterText" />
    <el-tree
      :data="list"
      :filter-node-method="filterNode"
      :props="defaultProps"
      @node-click="nodeClick"
      class="filter-tree"
      default-expand-all
      ref="tree"
      style="height: 600px; overflow: auto"
    >
    </el-tree>
  </el-dialog>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  name: 'menuTree',
  data() {
    return {
      filterText: '',
      dialogVisible: false,
      list: [],
      defaultProps: {
        children: 'children',
        label: 'title',
      },
      title: '',
    };
  },
  created() {
    // this.getTree();
  },
  methods: {
    getTree() {
      // tree().then(res => {
      //   this.list = res.data.data;
      // });
    },
    handleOpen() {
      this.dialogVisible = true;
    },
    filterNode(value, data) {
      if (!value) {
        return true;
      }
      return data.title.indexOf(value) !== -1;
    },
    nodeClick(data) {
      this.$emit('sendData', data);
      this.dialogVisible = false;
    },
  },
};
</script>
