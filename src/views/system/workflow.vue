<!--工作流-->
<template>
  <basic-container>
    <el-row :gutter="22">
      <el-col :span="4">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="#fff"
        >
          <el-menu-item @click="handleOpen(1)" index="1">
            <i class="el-icon-sell"></i>
            <span slot="title">销售开票申请</span>
          </el-menu-item>
          <el-menu-item @click="handleOpen(2)" index="2">
            <i class="el-icon-money"></i>
            <span slot="title">付款申请</span>
          </el-menu-item>
          <el-menu-item @click="handleOpen(3)" index="3">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">采购发票录入</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <el-button @click="add" size="mini" type="primary">新增</el-button>
        <el-table
          :data="tableData"
          border
          height="700"
          show-summary
          size="mini"
          stripe
          style="width: 100%; margin-top: 10px"
          v-loading="loading"
        >
          <el-table-column fixed type="selection" width="55" />
          <el-table-column align="center" fixed label="序号" type="index" width="45" />
          <el-table-column align="center" label="流程名称" prop="processName" width="200" />
          <el-table-column align="center" label="创建人" prop="createBy" width="200" />
          <el-table-column align="center" label="创建时间" prop="createTime" width="200" />
          <el-table-column align="left" fixed="right" label="操作" min-width="150">
            <template slot-scope="scope">
              <el-button @click="btnClick('edit', scope.row)" size="mini" type="primary">编辑</el-button>
              <el-button @click="btnClick('look', scope.row)" size="mini" type="primary">预览</el-button>
              <el-button @click="btnClick('del', scope.row)" size="mini" type="primary">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :current-page="pages.current"
          :page-size="pages.size"
          :page-sizes="[15, 30, 50, 100]"
          :total="pages.total"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          layout="total, sizes, prev, pager, next, jumper"
          style="display: flex; justify-content: flex-end; width: 100%; margin-top: 20px"
        />
      </el-col>
    </el-row>
    <Increment :params="params" @getList="getList" ref="increment" />
  </basic-container>
</template>

<script>
import { getList } from '@/api/system/workflow';
import Increment from './components/workflow/increment';

export default {
  components: {
    Increment,
  },
  name: 'workflow',
  data() {
    return {
      loading: false,
      tableData: [],
      pages: {
        current: 1,
        total: 0,
        size: 15,
      },
      params: {
        processType: 1,
      },
    };
  },
  created() {},
  methods: {
    async getList() {
      this.loading = true;
      const data = { processType: this.params.processType, ...this.pages };
      const res = await getList(data);
      this.loading = false;
      this.tableData = res.data.data.records;
      this.pages.current = res.data.data.current;
      this.pages.total = res.data.data.total;
    },
    handleOpen(key) {
      this.params.processType = key;
      this.getList();
    },
    btnClick(type, row) {
      const state = {
        edit: () => {
          this.$refs.increment.handleOpen(row.processDynamicDefinitionId);
        },
        look: () => {},
        del: () => {},
      };
      state[type].call();
    },
    // 分页
    handleSizeChange(val) {
      this.pages.size = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.pages.current = val;
      this.getList();
    },
    add() {
      this.$refs.increment.handleOpen();
    },
  },
};
</script>

<style lang="scss" scoped></style>
