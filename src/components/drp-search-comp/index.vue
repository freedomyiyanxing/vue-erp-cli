<!-- 进销存搜索封装组件 -->
<template>
  <el-form size="mini" inline :model="searchForm" class="demo-form-inline">
    <el-form-item v-for="(item, index) of searchData" :key="index">
      <el-select
        v-if="item.type === 'tenant'"
        size="mini"
        clearable
        v-model="searchForm.tenantId"
        filterable
        placeholder="请选择所属组织"
      >
        <el-option v-for="item in userInfo.tenantList" :key="item.id" :label="item.tenantName" :value="item.id" />
      </el-select>
      <el-select
        v-if="item.type === 'buyer'"
        size="mini"
        v-model="searchForm.buyerId"
        filterable
        placeholder="请选择采购员"
        clearable
      >
        <el-option v-for="item in buyerOptions" :key="item.id" :label="item.realName" :value="item.id" />
      </el-select>

      <el-select
        v-if="item.type === 'seller'"
        size="mini"
        v-model="searchForm.sellerId"
        filterable
        clearable
        placeholder="业务员"
      >
        <el-option v-for="item in sellerOptions" :key="item.id" :label="item.realName" :value="item.id" />
      </el-select>

      <el-select
        v-if="item.type === 'sellerAssistant'"
        size="mini"
        v-model="searchForm.sellerAssistantId"
        clearable
        filterable
        placeholder="业务员助理"
      >
        <el-option v-for="item in sellerOptions" :key="item.id" :label="item.realName" :value="item.id" />
      </el-select>

      <el-select
        v-if="item.type === 'request'"
        size="mini"
        v-model="searchForm[item.key]"
        :placeholder="item.placeholder"
        clearable
      >
        <el-option :key="item.id" :value="item.id" :label="item.name" v-for="item in outboundWarehouse" />
      </el-select>

      <el-select
        v-if="item.type === 'select'"
        size="mini"
        v-model="searchForm[item.key]"
        :placeholder="item.placeholder"
        clearable
      >
        <el-option :key="key" :value="key" :label="label" v-for="(label, key) of item.options" />
      </el-select>

      <el-date-picker
        v-if="item.type === 'daterange'"
        size="mini"
        :default-time="['00:00:00', '23:59:59']"
        v-model="date"
        type="daterange"
        clearable
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd HH:mm:ss"
      />

      <el-input
        v-if="item.type === 'input'"
        clearable
        size="mini"
        v-model="searchForm[item.key]"
        :placeholder="item.placeholder"
        :style="`width: ${item.width || 300}px`"
      />
    </el-form-item>
    <el-form-item>
      <el-button size="mini" type="primary" @click="onSubmit">查询</el-button>
      <el-button size="mini" type="primary" @click="resetForm">重置</el-button>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex';
import { getUserList } from '@/api/system/user';
import { getDepot } from '@/api/oksht-drp/purchase-warehousing';

export default {
  name: 'drp-search-comp',
  computed: {
    ...mapGetters(['userInfo']),
  },
  props: {
    searchData: {
      type: Array,
      default: null,
    },
  },
  data() {
    const form = Object.create(null);
    this.searchData.forEach((item) => {
      if (item.key) {
        form[item.key] = item.value || null;
      }
      if (item.type === 'tenant') {
        // form['tenantId'] = this.$store.state.user.tissue.id;
      }
      if (item.type === 'seller') {
        this.getSellerInfo();
      }
      if (item.type === 'request') {
        this.getOutboundWarehouse();
      }
      if (item.type === 'buyer') {
        this.getBuyerInfo();
      }
    });
    return {
      buyerOptions: [],
      sellerOptions: [],
      date: [],
      searchForm: form,
      outboundWarehouse: [],
    };
  },

  methods: {
    onSubmit() {
      if (this.date) {
        this.searchForm.startTime = this.date ? this.date[0] : null;
        this.searchForm.endTime = this.date ? this.date[1] : null;
      } else {
        this.searchForm.startTime = null;
        this.searchForm.endTime = null;
      }
      this.$emit('searchSubmit', this.searchForm, 'onSubmit');
    },

    // 重置
    resetForm() {
      Object.keys(this.searchForm).forEach((key) => {
        this.searchForm[key] = null;
      });
      this.date = [];
      this.$emit('searchSubmit', this.searchForm, 'resetForm');
    },

    // 查询采购员
    async getBuyerInfo() {
      const {
        data: { data },
      } = await getUserList('3');
      this.buyerOptions = data;
    },

    // 查询销售员
    async getSellerInfo() {
      const {
        data: { data },
      } = await getUserList('4');
      this.sellerOptions = data;
    },

    async getOutboundWarehouse() {
      this.outboundWarehouse = await getDepot({ type: 4 });
    },
  },
};
</script>

<style scoped lang="scss">
.demo-form-inline {
  display: flex;
  flex-wrap: wrap;

  > div {
    margin-bottom: 10px;
  }
}
</style>
