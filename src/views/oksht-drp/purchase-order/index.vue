<!--
 * @Description: 采购订单
 * @author Freedom.yi
 * @date
 *
-->
<template>
  <basicContainer>
    <drp-search-comp :searchData="searchData" @searchSubmit="getData">
      <el-button type="primary" @click="handleAddOrder" size="mini" v-if="permissionList.addBtn">新建订单</el-button>
    </drp-search-comp>

    <el-table
      border
      size="mini"
      height="700"
      v-loading="loading"
      :data="tableData"
      style="width: 100%"
      @cell-dblclick="dblclick"
    >
      <el-table-column fixed type="index" label="序号" width="45" align="center" />
      <el-table-column fixed prop="purchaseOrderSn" label="采购订单号" width="180" align="center">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="handleToDetails(scope.row)">
            {{ scope.row.purchaseOrderSn }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="supplierContractNo"
        label="供应商合同号"
        width="160"
        align="center"
        show-overflow-tooltip
      />
      <el-table-column prop="supplierName" label="供应商名称" width="200" align="center" show-overflow-tooltip />
      <el-table-column prop="buyer" label="采购员" width="100" align="center" />
      <el-table-column prop="billingDate" label="开单日期" width="140" align="center" />
      <el-table-column prop="currency" label="货币" width="60" align="center" />
      <el-table-column prop="taxRate" label="税率" width="60" align="center" />
      <el-table-column prop="exchangeRate" label="汇率" width="100" align="center" />
      <el-table-column prop="priceAmount" label="货品总金额" width="150" align="center" />
      <el-table-column prop="discountPriceAmount" label="折算总金额" width="150" align="center" />
      <el-table-column prop="createTime" label="录入日期" width="140" align="center" />
      <el-table-column prop="createUser" label="录入人" width="80" align="center" />
      <el-table-column prop="updateTime" label="最后修改日期" width="140" align="center" />
      <el-table-column prop="updateUser" label="最后修改人" width="80" align="center" />
      <el-table-column prop="approveDate" label="审批日期" width="140" align="center" />
      <el-table-column prop="approvePerson" label="审批人" width="100" align="center" />
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[15, 30, 50]"
      :current-page="pages.current"
      :page-size="pages.size"
      :total="pages.total"
      layout="total, sizes, prev, pager, next, jumper"
      style="display: flex; justify-content: flex-end; width: 100%; margin-top: 20px"
    />
  </basicContainer>
</template>

<script>
import { mapGetters } from 'vuex';
import { validateData } from '@/util/validate';
import { getPurchasePage } from '@/api/oksht-drp/purchase-order';
// import XEUtils from "xe-utils";
// import { v4 as uuidv4 } from 'uuid';

let searchObjs = Object.create(null);
export default {
  name: 'inventory-out',
  components: {
    'drp-search-comp': () => import('@/components/drp-search-comp/index'),
  },
  computed: {
    ...mapGetters(['dicts', 'tissue', 'userInfo', 'permission']),
    permissionList() {
      return {
        addBtn: validateData(this.permission.purchase_order_add, false),
      };
    },
  },
  data() {
    return {
      searchData: [
        {
          type: 'tenant',
        },
        {
          type: 'select',
          key: 'approveStatus',
          placeholder: '审批状态',
          options: { 0: '待提交审核', 1: '待审核', 2: '审核驳回', 3: '审核通过' },
        },
        {
          type: 'select',
          key: 'status',
          placeholder: '订单状态',
          options: { 0: '订单正常', 2: '订单作废', 3: '订单完成' },
        },
        {
          type: 'buyer',
        },
        {
          type: 'select',
          key: 'dateType',
          placeholder: '时间类型',
          value: '0',
          options: { 0: '开单日期', 1: '录入日期', 2: '审批日期' },
        },
        {
          type: 'daterange',
        },
        {
          type: 'input',
          key: 'model',
          placeholder: '请输入型号',
        },
        {
          type: 'input',
          key: 'keyword',
          placeholder: '请输入采购订单号、供应商合同号、供应商名称关键字查询',
        },
      ],

      loading: false,
      date: [],
      tableData: [],
      buyerOptions: [],
      pages: {
        current: 1,
        total: 0,
        size: 15,
      },
    };
  },
  watch: {
    async $route() {
      if (this.$route.name === '采购订单') {
        await this.getData();
      }
    },
  },
  created() {
    this.getData();
  },
  methods: {
    dblclick(row) {
      this.$router.push({
        path: '/oksht-drp/purchase-order/details',
        query: { id: row.id },
      });
    },
    async getData(objs) {
      if (objs) {
        searchObjs = objs;
        this.pages.current = 1;
      }
      this.loading = true;
      const result = await getPurchasePage({ ...this.pages, ...searchObjs });
      this.tableData = result.records;
      this.pages.current = result.current;
      this.pages.total = result.total;
      this.loading = false;
    },

    // 打开详情
    async handleToDetails(row) {
      await this.$router.push({
        path: '/oksht-drp/purchase-order/details',
        query: { id: row.id },
      });
    },

    // 新增
    handleAddOrder() {
      // this.$router.push({
      //   path: '/oksht-drp/purchase-order/increment',
      //   query: { uuid: uuidv4() }
      // })
    },

    // 编辑
    async handleEdit(row) {
      this.$refs['form'].handleOpen('edit', row);
    },

    handleSizeChange(val) {
      this.pages.size = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.pages.current = val;
      this.getData();
    },
  },
};
</script>
