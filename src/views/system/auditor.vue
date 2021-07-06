<template>
  <!-- 设置审批人 -->
  <basicContainer class="main">
    <div class="shell">

      <el-table :data="tableData" style="width: 100%" size="mini" border v-loading="loading">
        <el-table-column type="index" width="50" label="序号" align="center"> </el-table-column>
        <el-table-column prop="moduleName" label="审批模块名称" align="center">
        </el-table-column>
        <el-table-column prop="person" label="审批人" align="center">
          <template slot-scope="scope">
            <span v-for="(item, index) in scope.row.approveModulePersonList" :key="index">{{ item.person + "，" }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="isAuto" label="自动审批" align="center">
          <template slot-scope="scope">{{
          scope.row.isAuto == 0 ? "否" : "是"
        }}</template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="edit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block" style="margin-top: 30px">
        <Pagination :pages="query" @pageChange="init(query)" />
      </div>

      <el-dialog title="编辑审批人" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" size="mini">
          <el-form-item label="审批模块名称：">
            <span>{{ ruleForm.moduleName }}</span>
          </el-form-item>
          <el-form-item label="自动审批：">
            <el-radio-group v-model="ruleForm.isAuto">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="审批人：">
            <div class="tab_box_add_box">
              <el-button class="add_son" type="success" @click="addRow">新 增</el-button>
              <el-table :data="approveModulePersonList" style="width: 100%" size="mini">
                <el-table-column type="index" width="50" label="序号" align="center">
                </el-table-column>
                <el-table-column label="* 审批人" align="center">
                  <template slot-scope="scope">
                    <el-select filterable v-model="scope.row.person" placeholder="请选择" value-key="id"
                      @change="personChange(scope.$index, scope.row)">
                      <el-option v-for="item in assistantOptions" :key="item.realName" :label="item.realName"
                        :value="item">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="* 负责公司" align="center">
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.tenantId" filterable placeholder="请选择" size="mini"
                      style="width: 100%;" @change="tenantChange(scope.$index, scope.row)">
                      <el-option v-for="item in organizationChartOptions" :key="item.id" :label="item.tenantName"
                        :value="item.id">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                  <template slot-scope="scope">
                    <el-button type="danger" size="mini" @click="del(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
          <el-button type="primary" @click="save" size="mini">确 定</el-button>
        </span>
      </el-dialog>

    </div>
  </basicContainer>
</template>
<script>
import { getList } from "@/api/system/tenant";
import { getUserList } from "@/api/system/user";
import { getApprovemodule, updateApprovemodule, } from "@/api/oksht-drp/approvemodule";

export default {
  data() {
    return {
      approveModulePersonList: [],
      loading: false,
      assistantOptions: [],
      organizationChartOptions: [],
      ruleForm: {},
      dialogVisible: false,
      query: {
        current: 1,
        size: 15,
        total: 0,
      },
      tableData: [],
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    del(i) {
      this.ruleForm.approveModulePersonList.splice(i, 1);
      this.approveModulePersonList.splice(i, 1);
      this.$message({
        message: "删除成功",
        type: "success",
      });
    },
    personChange(i, val) {
      this.ruleForm.approveModulePersonList[i].person = val.person.name;
      this.ruleForm.approveModulePersonList[i].personId = val.person.id;
    },
    tenantChange(i, val) {
      this.ruleForm.approveModulePersonList[
        i
      ].tenantId = val.tenantId.toString();
    },
    addRow() {
      let res = false;
      this.approveModulePersonList.forEach((item, index) => {
        if (!item.person || !item.tenantId) {
          this.$message.error(`请填写完整，第${index + 1}行数据`);
          res = true;
        }
      });
      if (res) return;
      this.approveModulePersonList.push({});
      this.ruleForm.approveModulePersonList.push({
        tenant: "",
        person: "",
        moduleCode: this.ruleForm.moduleCode,
      });
    },
    save() {
      let res = false;
      this.approveModulePersonList.forEach((item, index) => {
        if (!item.person || !item.tenantId.length) {
          this.$message.error(`请填写完整，第${index + 1}行数据`);
          res = true;
        }
      });
      // if (this.approveModulePersonList.length == 0) {
      //   this.$message.error("审批人列表不能为空");
      //   res = true;
      // }
      if (res) return;
      updateApprovemodule(this.ruleForm).then((res) => {
        if (res.data.success) {
          this.$message({
            message: "修改成功",
            type: "success",
          });
          this.init(this.query);
          this.dialogVisible = false;
        }
      });
    },
    handleClose(done) {
      done();
    },
    edit(row) {
      this.approveModulePersonList = JSON.parse(
        JSON.stringify(row.approveModulePersonList)
      );
      this.approveModulePersonList.forEach((i) => {
        i.tenantId = i.tenantId.split(",");
        i.tenantId = i.tenantId.map((n) => {
          return Number(n);
        });
      });
      this.ruleForm = JSON.parse(JSON.stringify(row));
      this.dialogVisible = true;
      // 客户所属公司
      getList("", "").then((res) => {
        if (res.data.data) {
          this.organizationChartOptions = res.data.data.records;
        }
      });
    },
    handleSizeChange(val) {
      this.query.size = val;
      this.init(this.query);
    },
    handleCurrentChange(val) {
      this.query.current = val;
      this.init(this.query);
    },
    init(query) {
      this.loading = true;
      getApprovemodule(query).then((res) => {
        if (res.data.success) {
          this.loading = false;
          this.tableData = res.data.data.records;
          this.query.total = res.data.data.total;
        }
      });
    },
  },
  created() {
    this.init(this.query);
    getUserList().then((res) => {
      console.log(res)
      if (res.data.data) {
        this.assistantOptions = res.data.data;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.block {
  text-align: right;
}
.tab_box_add_box {
  position: relative;
  .add_son {
    z-index: 99;
    position: absolute;
    top: 3px;
    right: 8px;
  }
}
</style>
