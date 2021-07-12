<!--
 * @Description: 系统菜单
 * @author Freedom.yi
 * @date 2021/7/12
 *
-->
<template>
  <basic-container>
    <SearchForm :configs="configs" @handleDispose="handleDispose" />
    <el-table
      border
      stripe
      size="mini"
      row-key="id"
      height="750"
      style="width: 100%"
      :data="tableData"
      default-expand-all
      v-loading="loading"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column align="center" fixed label="序号" type="index" width="50" />
      <el-table-column align="left" label="菜单名称" prop="name" min-width="200" />
      <el-table-column align="center" label="路由地址" min-width="300" prop="path" />
      <el-table-column align="center" label="菜单图标" prop="source" width="150">
        <template slot-scope="scope"><i :class="scope.row.source" class="iconfont"></i></template>
      </el-table-column>
      <el-table-column align="center" label="菜单编号" min-width="200" prop="code" />
      <el-table-column align="center" label="菜单别名" prop="alias" min-width="200" />
      <el-table-column align="center" label="菜单排序" prop="sort" width="80" />
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" size="mini" type="primary">编辑</el-button>
          <el-button @click="del(scope.row.id)" size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <MenuAdd @update="getData" ref="add" />
  </basic-container>
</template>

<script>
import { getList, remove } from '@/api/system/menu';

export default {
  components: {
    MenuAdd: () => import('./components/add'),
  },
  name: 'index',
  data() {
    return {
      configs: {
        // 搜索配置
        condition: [
          {
            element: 'el-input',
            label: '菜单名称',
            prop: 'name',
            placeholder: '菜单名称',
          },
          {
            element: 'el-input',
            label: '菜单编号',
            prop: 'code',
            placeholder: '菜单编号',
          },
        ],
        butList: [
          {
            element: 'el-button',
            label: '查 询',
            prop: 'search',
            type: 'primary',
            icon: 'el-icon-search',
            isPermission: true,
          },
          {
            element: 'el-button',
            label: '重 置',
            prop: 'reset',
            type: 'primary',
            isPermission: true,
          },
          {
            element: 'el-button',
            label: '新 增',
            prop: 'add',
            type: 'primary',
            isPermission: true,
          },
        ],
      },
      params: {},
      pages: {
        current: 1,
        size: 15,
        total: 0,
      },
      tableData: [],
      loading: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async del(id) {
      await this.$confirm('此操作将永久删除该菜单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      });
      const res = await remove(id);
      if (res.data.success) {
        await this.getData();
      }
    },
    edit(id) {
      this.$refs['add'].getInfo(id);
    },
    handleDispose(type, form) {
      this.params = { ...this.params, ...form };
      if (type === 'search') {
        this.getData();
      }
      if (type === 'reset') {
        this.resetForm();
      }
      if (type === 'add') {
        this.$refs['add'].handleOpen();
      }
    },
    async getData() {
      this.loading = true;
      const res = await getList(this.pages.current, this.pages.size, this.params);
      this.loading = false;
      this.tableData = res.data.data;
      this.pages.current = res.data.data.current;
      this.pages.total = res.data.data.total;
    },
    // 重置
    resetForm() {
      Object.keys(this.params).forEach((i) => {
        this.params[i] = null;
      });
      this.pages.current = 1;
      this.getData();
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-table {
  .el-table__body-wrapper {
    overflow-y: auto;
  }
}
</style>
