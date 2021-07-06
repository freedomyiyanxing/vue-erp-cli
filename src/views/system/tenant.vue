<template>
  <basic-container>
    <SearchForm :configs="configs" @handleDispose="handleDispose" />
    <el-table
        v-loading="loading"
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%;margin-bottom: 30px"
        height="650"
        stripe
        border
        size="small"
    >
      <el-table-column fixed type="index" label="序号" width="55" align="center" show-overflow-tooltip/>
      <el-table-column prop="tenantId" label="组织ID" min-width="120" align="center" show-overflow-tooltip />
      <el-table-column prop="tenantName" label="组织名称" min-width="200" align="center" show-overflow-tooltip />
      <el-table-column prop="linkman" label="联系人" min-width="120" align="center" show-overflow-tooltip />
      <el-table-column prop="contactNumber" label="联系电话" min-width="140" align="center" show-overflow-tooltip >
        <template slot-scope="scope">
          {{scope.row.contactNumber||'-'}}
        </template>
      </el-table-column>
      <el-table-column prop="address" label="联系地址" min-width="250" align="center" show-overflow-tooltip >
        <template slot-scope="scope">
          {{scope.row.address||'-'}}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="220" align="center">
        <template slot-scope="scope">
          <el-button @click="handleLook(scope.row)" type="primary" size="mini">查看</el-button>
          <el-button @click="handleEdit(scope.row)" type="primary" size="mini">编辑</el-button>
          <el-button @click="rowDel(scope.row)" type="danger" plain size="mini">删除</el-button>
        </template>
      </el-table-column>
      <template slot="empty">
        <Empty />
      </template>
    </el-table>

    <Pagination :pages="pages" @pageChange="init(pages,query)" />

    <!-- 新增 or 编辑 or 查看 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" @close="resetForm" width="50%" top="20px" >
      <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          size="mini"
          class="demo-ruleForm"
          style="padding: 20px 20px 20px 0"
      >
        <el-form-item label="组织名称" prop="tenantName">
          <el-input :disabled="title === '查看'" v-model="ruleForm.tenantName"></el-input>
        </el-form-item>
        <el-form-item label="联系人" prop="linkman">
          <el-input :disabled="title === '查看'" v-model="ruleForm.linkman"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="contactNumber">
          <el-input :disabled="title === '查看'" v-model="ruleForm.contactNumber"></el-input>
        </el-form-item>
        <el-form-item label="联系地址" prop="address">
          <el-input
              :disabled="title === '查看'"
              placeholder="请输入联系地址"
              maxlength="300"
              show-word-limit
              type="textarea"
              v-model="ruleForm.address" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm" size="mini">取 消</el-button>
        <el-button type="primary" @click="submitForm" size="mini" v-if="title !== '查看'">确 定</el-button>
      </span>
    </el-dialog>
  </basic-container>
</template>

<script>
  import {getList, remove, submit} from "@/api/system/tenant";
  import {mapGetters} from "vuex";

  const title = {
    add: '新增',
    edit: '编辑',
    look: '查看'
  };


  export default {
    data() {
      return {
        query: {},
        title:'新增',
        pages: {
          current: 1,
          size: 15,
          total: 0,
        },
        configs: {
          condition: [
            {
              element: 'el-input',
              label: '组织ID',
              prop: 'tenantId',
              placeholder: '请输入组织ID'
            },
            {
              element: 'el-input',
              label: '组织名称',
              prop: 'tenantName',
              placeholder: '请输入组织ID',
            },
            {
              element: 'el-input',
              label: '联系人',
              prop: 'linkman',
              placeholder: '请输入联系人',
            },
          ],
          butList: [
            {
              element: 'el-button',
              label: '查 询',
              prop: 'search',
              type: 'primary',
              icon: "el-icon-search",
            },
            {
              element: 'el-button',
              label: '重 置',
              prop: 'reset',
              type: 'primary',
            },
            {
              element: 'el-button',
              label: '新 增',
              prop: 'add',
              type: 'primary',
              // disabled:
            },
          ]
        },
        loading: false,
        total: 0,
        tableData: [],
        dialogVisible:false,
        ruleForm:{},
        rules: {
          tenantName: { required: true, message: '请输入', trigger: 'blur' },
          linkman: { required: true, message: '请输入', trigger: 'blur' },
        },
      };
    },
    computed: {
      ...mapGetters(["permission"]),
    },
    mounted() {
      this.init();
    },
    methods: {
      handleDispose(type, form) {
        console.log(1,form);
        this.query = form;
        if (type == 'search') {
          this.pages.current = 1;
          this.init()
        } else if (type == 'reset') {
          this.pages={current: 1, size: 15, total: 0}
          this.init()
        } else if (type == 'add') {
          this.title = title['add'];
          this.dialogVisible = true;
        }
      },
      // 获取数据
      init(params = {}){
        this.loading=true;
        params={
          current:this.pages.current,
          size:this.pages.size,
          ...this.query
        }
        getList(params).then(res => {
          this.loading=false;
          const data = res.data.data;
          this.pages.total = data.total;
          this.pages.current = data.current;
          this.tableData = data.records;
        });
      },
      //新增组织
      submitForm(){
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            submit(this.ruleForm).then(res => {
              if (res.data.success) {
                this.$message({
                  type: "success",
                  message: "操作成功!"
                });
                this.resetForm();
                this.pages={current: 1, size: 15, total: 0}
                this.init();
              }
            })
          }
        });
      },
      //取消新增
      resetForm(){
        this.ruleForm = {};
        this.dialogVisible = false;
        this.$refs['ruleForm'].resetFields();
      },
      //查看
      handleLook(row){
        this.title = title['look'];
        this.dialogVisible = true;
        this.ruleForm=row;
      },
      //编辑
      handleEdit(row){
        this.title = title['edit'];
        this.dialogVisible = true;
        this.ruleForm=row;
      },
      //分页
      handleSizeChange(val) {
        this.pages.size = val;
        this.init();
      },
      handleCurrentChange(val) {
        this.pages.current = val;
        this.init();
      },
      rowDel(row) {
        this.$confirm("确定将选择数据删除?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          return remove(row.id);
        }).then(() => {
          this.pages={current: 1, size: 15, total: 0}
          this.init();
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        });
      },
    }
  };
</script>

<style>
</style>
