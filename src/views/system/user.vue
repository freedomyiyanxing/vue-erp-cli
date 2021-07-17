<template>
  <basic-container>
    <SearchForm :configs="configs" @handleDispose="handleDispose" />

    <el-table
      v-loading="loading"
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 100%; margin-bottom: 30px"
      height="720"
      stripe
      border
      size="small"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center" />
      <el-table-column fixed type="index" label="序号" width="55" align="center" />
      <el-table-column prop="account" label="登录账号" min-width="110" align="center" show-overflow-tooltip />
      <el-table-column prop="tenantName" label="所属组织" min-width="210" align="center">
        <template slot-scope="scope">
          <el-popover placement="right" trigger="hover" v-if="scope.row.tenantName.split(',').length > 1">
            <p v-for="(item, index) in scope.row.tenantName.split(',')" :key="index" style="line-height: 10px">
              {{ item }}
            </p>
            <span slot="reference" class="line-limit-length" style="">{{ scope.row.tenantName }}</span>
          </el-popover>
          <span v-else>{{ scope.row.tenantName }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="realName" label="用户姓名" min-width="100" align="center" show-overflow-tooltip />
      <el-table-column prop="roleName" label="所属角色" min-width="110" align="center">
        <template slot-scope="scope">
          <el-popover placement="right" trigger="hover" v-if="scope.row.roleName.split(',').length > 1">
            <p v-for="(item, index) in scope.row.roleName.split(',')" :key="index" style="line-height: 10px">
              {{ item }}
            </p>
            <span slot="reference" class="line-limit-length" style="">{{ scope.row.roleName }}</span>
          </el-popover>
          <span v-else>{{ scope.row.roleName }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="deptName" label="所属部门" min-width="110" align="center">
        <template slot-scope="scope">
          <el-popover placement="right" trigger="hover" v-if="scope.row.deptName.split(',').length > 1">
            <p v-for="(item, index) in scope.row.deptName.split(',')" :key="index" style="line-height: 10px">
              {{ item }}
            </p>
            <span slot="reference" class="line-limit-length" style="">{{ scope.row.deptName }}</span>
          </el-popover>
          <span v-else>{{ scope.row.deptName }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号码" min-width="120" align="center" show-overflow-tooltip />
      <el-table-column prop="email" label="电子邮箱" min-width="180" align="center" show-overflow-tooltip />
      <el-table-column fixed="right" label="操作" min-width="220" align="center">
        <template slot-scope="scope">
          <el-button @click="handleLook(scope.row)" type="primary" size="mini">查看</el-button>
          <el-button @click="handleEdit(scope.row)" type="primary" size="mini">编辑</el-button>
          <el-button @click="handleDel(scope.row)" type="danger" plain size="mini">删除</el-button>
        </template>
      </el-table-column>
      <template slot="empty">
        <Empty />
      </template>
    </el-table>

    <Pagination :pages="pages" @pageChange="getData(query)" />

    <!-- 新增 or 编辑 or 查看 -->
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible2"
      @close="resetForm"
      width="900px"
      top="20px"
      :close-on-click-modal="false"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="padding: 20px 20px 20px 0"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="登录账号" prop="account">
              <el-input :disabled="title === '查看'" v-model="ruleForm.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所属组织" prop="tenantName">
              <el-popover
                placement="bottom"
                trigger="hover"
                v-if="title === '查看' && ruleForm.tenantName.split(',').length > 1"
              >
                <p v-for="(item, index) in ruleForm.tenantName.split(',')" :key="index" style="line-height: 10px">
                  {{ item }}
                </p>
                <el-input
                  slot="reference"
                  class="line-limit-length"
                  :disabled="title === '查看'"
                  v-model="ruleForm.tenantName"
                ></el-input>
              </el-popover>
              <el-input
                v-else
                :disabled="title === '查看'"
                v-model="ruleForm.tenantName"
                @focus="selectDialogClick('tenant', ruleForm.tenantId)"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="用户姓名" prop="realName">
              <el-input :disabled="title === '查看'" v-model="ruleForm.realName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所属角色" prop="roleName">
              <el-popover
                placement="bottom"
                trigger="hover"
                v-if="title === '查看' && ruleForm.roleName.split(',').length > 1"
              >
                <p v-for="(item, index) in ruleForm.roleName.split(',')" :key="index" style="line-height: 10px">
                  {{ item }}
                </p>
                <el-input
                  slot="reference"
                  class="line-limit-length"
                  :disabled="title === '查看'"
                  v-model="ruleForm.roleName"
                ></el-input>
              </el-popover>

              <el-input
                v-else
                :disabled="title === '查看'"
                v-model="ruleForm.roleName"
                @focus="selectDialogClick('role', ruleForm.roleId)"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="所属部门" prop="deptName">
              <el-popover
                placement="bottom"
                trigger="hover"
                v-if="title === '查看' && ruleForm.deptName.split(',').length > 1"
              >
                <p v-for="(item, index) in ruleForm.deptName.split(',')" :key="index" style="line-height: 10px">
                  {{ item }}
                </p>
                <el-input
                  slot="reference"
                  class="line-limit-length"
                  :disabled="title === '查看'"
                  v-model="ruleForm.deptName"
                ></el-input>
              </el-popover>
              <el-input
                v-else
                :disabled="title === '查看'"
                v-model="ruleForm.deptName"
                @focus="selectDialogClick('dept', ruleForm.deptId)"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号码" prop="phone">
              <el-input :disabled="title === '查看'" v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="电子邮箱" prop="email">
              <el-input :disabled="title === '查看'" v-model="ruleForm.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户性别" prop="sex">
              <el-select :disabled="title === '查看'" v-model="ruleForm.sex" style="width: 100%">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
                <el-option label="未知" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="用户生日" prop="birthday">
              <!--              <el-input :disabled="title === '查看'" v-model="ruleForm.birthday"></el-input>-->
              <el-date-picker
                :disabled="title === '查看'"
                style="width: 100%"
                v-model="ruleForm.birthday"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm" size="mini">取 消</el-button>
        <el-button type="primary" @click="submitForm" size="mini" v-if="title !== '查看'">确 定</el-button>
      </span>
    </el-dialog>

    <!--    数据选择弹框-->
    <el-dialog
      :title="selectTitle"
      :visible.sync="selectDialogShou"
      @close="selectCancel"
      width="500px"
      top="20px"
      :show-close="false"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
      <el-input placeholder="输入关键字进行过滤" v-model="selectInputData"></el-input>
      <div class="treeBox">
        <el-tree
          class="filter-tree"
          v-show="selectType === 'tenant'"
          ref="treeTenant"
          :data="tenantTree"
          :props="props"
          node-key="id"
          show-checkbox
          :check-strictly="true"
          :filter-node-method="filterNode"
          @check="handleCheckChange"
        >
        </el-tree>
        <el-tree
          v-show="selectType === 'role'"
          ref="treeRole"
          :data="roleTree"
          :props="props"
          node-key="id"
          show-checkbox
          :check-strictly="true"
          :default-expand-all="true"
          :filter-node-method="filterNode"
          @check="handleCheckChange"
        >
        </el-tree>
        <el-tree
          v-show="selectType === 'dept'"
          ref="treeDept"
          :data="deptTree"
          :props="props"
          node-key="id"
          show-checkbox
          :check-strictly="true"
          :default-expand-all="true"
          :filter-node-method="filterNode"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="selectCancel" size="mini">取 消</el-button>
        <el-button type="primary" @click="selectConfirm" size="mini">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="登录设备管理" :visible.sync="dialogVisible">
      <el-select v-model="deviceSelected" multiple filterable placeholder="请选择">
        <el-option v-for="item in allDeviceList" :key="item.id" :label="item.name + '-' + item.mac" :value="item.id">
        </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitBtn2">确 定</el-button>
      </span>
    </el-dialog>
  </basic-container>
</template>

<script>
import { getList, remove, update, add, resetPassword } from '@/api/system/user';
import { getDeptTree } from '@/api/system/dept';
import { getRoleTree } from '@/api/system/role';
import { getAllDeviceList, saveUserDevices } from '@/api/system/device';
import { mapGetters } from 'vuex';
import day from 'dayjs';
// import website from '@/config/website';
import { listAll } from '@/api/system/tenant';

const title = {
  add: '新增',
  edit: '编辑',
  look: '查看',
};

export default {
  data() {
    return {
      query: {},
      loading: false,
      title: '新增',
      pages: {
        current: 1,
        size: 15,
        total: 0,
      },
      configs: {
        condition: [
          {
            element: 'el-input',
            label: '登录账号',
            prop: 'account',
            placeholder: '请输入登录账号',
          },
          {
            element: 'el-select',
            label: '所属组织',
            prop: 'tenantId',
            placeholder: '所属组织',
            axiosUrl: '/api/blade-system/tenant/list/select',
            props: {
              label: 'tenantName',
              value: 'id',
            },
          },
          {
            element: 'el-input',
            label: '用户姓名',
            prop: 'realName',
            placeholder: '请输入用户姓名',
          },
        ],
        butList: [
          {
            element: 'el-button',
            label: '查 询',
            prop: 'search',
            type: 'primary',
            icon: 'el-icon-search',
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
          {
            element: 'el-button',
            label: '密码重置',
            prop: 'passwordReset',
            type: 'primary',
            plain: true,
            // disabled:
          },
          {
            element: 'el-button',
            label: '登录设备配置',
            prop: 'Device',
            type: 'success',
            plain: true,
            // disabled:
          },
        ],
      },
      tableData: [],
      dialogVisible: false,
      dialogVisible2: false,
      ruleForm: {
        account: '',
        tenantName: '',
        tenantId: '',
        realName: '',
        roleName: '',
        roleId: '',
        deptName: '',
        deptId: '',
        phone: '',
        email: '',
        sex: '',
        birthday: '',
      },
      rules: {
        account: { required: true, message: '请输入' },
        tenantName: { required: true, message: '请输入' },
        realName: { required: true, message: '请输入' },
        roleName: { required: true, message: '请输入' },
        deptName: { required: true, message: '请输入' },
      },
      selection: [],
      // 选择弹框
      tenantTree: [],
      deptTree: [],
      roleTree: [],
      selectTitleData: {
        tenant: '选择所属组织',
        role: '选择所属角色',
        dept: '选择所属部门',
      },
      selectType: '',
      selectTitle: '',
      props: {
        children: 'children',
        label: 'title',
        value: 'key',
      },
      count: 1,
      selectTreeData: {},
      treeData: [],
      selectInputData: '',
      selectDialogShou: false,
      allDeviceList: [],
      deviceSelected: [],
    };
  },
  watch: {
    selectInputData(val) {
      // console.log(val);
      switch (this.selectType) {
        case 'tenant':
          this.$refs.treeTenant.filter(val);
          break;
        case 'role':
          this.$refs.treeRole.filter(val);
          break;
        case 'dept':
          this.$refs.treeDept.filter(val);
          break;
        default:
          break;
      }
    },
  },
  computed: {
    ...mapGetters(['permission']),
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleDispose(type, form) {
      this.query = form;
      if (type === 'search') {
        this.pages.current = 1;
        this.getData();
      } else if (type === 'reset') {
        this.pages = { current: 1, size: 15, total: 0 };
        this.getData();
      } else if (type === 'add') {
        this.title = title.add;
        this.dialogVisible2 = true;
      } else if (type === 'passwordReset') {
        this.passwordReset();
      } else if (type === 'Device') {
        this.handleDevice2();
      }
    },
    // 请求列表数据
    getData(params = {}) {
      getList(this.pages.current, this.pages.size, Object.assign(params, this.query)).then((res) => {
        const { data } = res.data;
        this.pages.total = data.total;
        this.tableData = data.records;
      });
      getDeptTree().then((res) => {
        // console.log('dept',res.data.data);
        this.deptTree = res.data.data;
      });
      getRoleTree().then((res) => {
        // console.log('role',res.data.data);
        this.roleTree = res.data.data;
      });
      listAll().then((res) => {
        // console.log('tenant',res.data.data);
        const tenantTreeList = [];
        res.data.data.forEach((item) => {
          tenantTreeList.push({
            title: item.tenantName,
            key: item.id,
            id: item.id,
          });
        });
        this.tenantTree = tenantTreeList;
      });
    },
    // 查看
    handleLook(row) {
      this.title = title.look;
      this.dialogVisible2 = true;
      this.ruleForm = {
        ...row,
        sex: JSON.stringify(row.sex),
      };
    },
    // 编辑
    handleEdit(row) {
      this.title = title.edit;
      this.dialogVisible2 = true;
      this.ruleForm = {
        ...row,
        sex: JSON.stringify(row.sex),
      };
    },
    // 删除
    handleDel(row) {
      this.$confirm('确定将选择数据删除?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return remove(row.id);
        })
        .then(() => {
          this.getData();
          this.$message({
            type: 'success',
            message: '操作成功!',
          });
        });
    },
    // 新增
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.ruleForm.birthday !== '') {
            this.ruleForm.birthday = `${day(this.ruleForm.birthday).format('YYYY-MM-DD')} 00:00:00`;
          }
          if (this.title === '新增') {
            add(this.ruleForm).then(() => {
              // console.log(res);
              this.resetForm();
              this.getData();
              this.$message({
                type: 'success',
                message: '操作成功!',
              });
            });
            return;
          }
          update(this.ruleForm).then(() => {
            // console.log(res);
            this.resetForm();
            this.getData();
            this.$message({
              type: 'success',
              message: '操作成功!',
            });
          });
        }
      });
    },
    // 取消
    resetForm() {
      this.ruleForm = {
        account: '',
        tenantName: '',
        tenantId: '',
        realName: '',
        roleName: '',
        roleId: '',
        deptName: '',
        deptId: '',
        phone: '',
        email: '',
        sex: '',
        birthday: '',
      };
      this.$refs.ruleForm.resetFields();
      this.dialogVisible2 = false;
    },
    // 选择列表数据
    handleSelectionChange(selection) {
      this.selection = selection;
    },
    // 树状数据过滤
    filterNode(value, data) {
      // console.log(value, data);
      if (!value) return true;
      return data.title.indexOf(value) !== -1;
    },
    // 选择弹框树被选择
    handleCheckChange(data, dataArr) {
      // console.log('选择弹框树被选择',dataArr,data);
      this.selectTreeData = dataArr;
    },
    // 打开弹框树
    selectDialogClick(type, id = '') {
      // console.log(type,id);
      this.selectType = type;
      this.selectTitle = this.selectTitleData[type];
      this.treeData = type === 'tenant' ? this.tenantTree : type === 'role' ? this.roleTree : this.deptTree;
      this.selectDialogShou = true;
      // 如果有初始数据
      setTimeout(() => {
        if (id !== '') {
          let ids = id.split(',');
          ids = ids.map(Number);
          // console.log(ids);
          if (type === 'tenant') {
            this.$refs.treeTenant.setCheckedKeys(ids);
            this.selectTreeData.checkedKeys = this.$refs.treeTenant.getCheckedKeys();
            this.selectTreeData.checkedNodes = this.$refs.treeTenant.getCheckedNodes();
            // console.log('this.$refs.tree1.getCheckedKeys()',this.$refs.treeTenant.getCheckedKeys());
            // console.log('this.$refs.tree1.getCheckedNodes()',this.$refs.treeTenant.getCheckedNodes());
          } else if (type === 'role') {
            this.$refs.treeRole.setCheckedKeys(ids);
            this.selectTreeData.checkedKeys = this.$refs.treeRole.getCheckedKeys();
            this.selectTreeData.checkedNodes = this.$refs.treeRole.getCheckedNodes();
            // console.log('this.$refs.tree2.getCheckedKeys()',this.$refs.treeRole.getCheckedKeys());
            // console.log('this.$refs.tree2.getCheckedNodes()',this.$refs.treeRole.getCheckedNodes());
          } else if (type === 'dept') {
            this.$refs.treeDept.setCheckedKeys(ids);
            this.selectTreeData.checkedKeys = this.$refs.treeDept.getCheckedKeys();
            this.selectTreeData.checkedNodes = this.$refs.treeDept.getCheckedNodes();
            // console.log('this.$refs.tree3.getCheckedKeys()',this.$refs.treeDept.getCheckedKeys());
            // console.log('this.$refs.tree3.getCheckedNodes()',this.$refs.treeDept.getCheckedNodes());
          }
        }
      }, 300);
    },
    // 提交选择树信息
    selectConfirm() {
      const roleNameList = [];
      const tenantNameList = [];
      const deptNameList = [];

      // checkedKeys
      // checkedNodes
      // console.log(this.selectType,JSON.stringify(this.selectTreeData));
      switch (this.selectType) {
        case 'tenant':
          if (JSON.stringify(this.selectTreeData) === '{}' || this.selectTreeData.checkedKeys.length === 0) {
            this.ruleForm.tenantId = '';
            this.ruleForm.tenantName = '';
            break;
          }
          this.ruleForm.tenantId = this.selectTreeData.checkedKeys.join(',');
          this.selectTreeData.checkedNodes.forEach((item) => {
            tenantNameList.push(item.title);
          });
          this.ruleForm.tenantName = tenantNameList.join(' / ');
          break;
        case 'role':
          if (JSON.stringify(this.selectTreeData) === '{}' || this.selectTreeData.checkedKeys.length === 0) {
            this.ruleForm.roleId = '';
            this.ruleForm.roleName = '';
            break;
          }
          this.ruleForm.roleId = this.selectTreeData.checkedKeys.join(',');
          this.selectTreeData.checkedNodes.forEach((item) => {
            roleNameList.push(item.title);
          });
          this.ruleForm.roleName = roleNameList.join(' / ');
          break;
        case 'dept':
          if (JSON.stringify(this.selectTreeData) === '{}' || this.selectTreeData.checkedKeys.length === 0) {
            this.ruleForm.deptId = '';
            this.ruleForm.deptName = '';
            break;
          }
          this.ruleForm.deptId = this.selectTreeData.checkedKeys.join(',');
          this.selectTreeData.checkedNodes.forEach((item) => {
            deptNameList.push(item.title);
          });
          this.ruleForm.deptName = deptNameList.join(' / ');
          break;
        default:
          break;
      }
      this.selectCancel();
      // .replace(/\//g, ',');
    },
    // 关闭选择树弹框
    selectCancel() {
      this.$refs.treeTenant.setCheckedKeys([]);
      this.$refs.treeRole.setCheckedKeys([]);
      this.$refs.treeDept.setCheckedKeys([]);
      this.selectTreeData = {};
      this.selectInputData = '';
      this.selectDialogShou = false;
    },
    // 密码重置
    passwordReset() {
      if (this.selection.length === 0) {
        this.$message.warning('请选择至少一条数据');
        return;
      }
      this.$confirm('确定将选择账号密码重置为123456?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          let ids = [];
          this.selection.forEach((ele) => {
            ids.push(ele.id);
          });
          ids = ids.join(',');
          return resetPassword(ids);
        })
        .then(() => {
          this.getData();
          this.$message({
            type: 'success',
            message: '操作成功!',
          });
        });
    },
    // 登录设备配置
    handleDevice2() {
      if (this.selection.length !== 1) {
        this.$message.warning('只能选择一条数据');
        return;
      }
      // console.log('ids :' + this.ids)
      this.dialogVisible = true;
      getAllDeviceList(this.selection[0].id).then((res) => {
        this.allDeviceList = res.data.data.deviceList;
        const checkDeviceList = [];
        for (let i = 0; i < res.data.data.checkDeviceList.length; i += 1) {
          checkDeviceList.push(res.data.data.checkDeviceList[i].id);
        }
        this.deviceSelected = checkDeviceList;
      });
    },
    // 登录设备管理提交
    submitBtn2() {
      saveUserDevices(this.selection[0].id, this.deviceSelected.join(',')).then(() => {
        this.getData();
        this.dialogVisible = false;
        this.$message({
          type: 'success',
          message: '操作成功!',
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.line-limit-length {
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
}

.treeBox {
  max-height: 550px;
  width: 100%;
  overflow: auto;
}
</style>
