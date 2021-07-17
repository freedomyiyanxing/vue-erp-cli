<!--新增菜单-->
<template>
  <el-dialog
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="dialogVisible"
    append-to-body
    center
    width="30%"
  >
    <el-form :model="form" :rules="rules" label-width="100px" ref="form" size="mini">
      <el-form-item label="上级菜单">
        <el-button @click="superior" size="mini" style="width: 100%">
          <span v-if="!parentName">点击选择上级菜单</span>
          <span v-if="parentName">{{ parentName }}</span>
        </el-button>
      </el-form-item>
      <el-form-item label="菜单名称" prop="name">
        <el-input clearable v-model="form.name" />
      </el-form-item>
      <el-form-item label="路由地址" prop="path">
        <el-input clearable v-model="form.path" />
      </el-form-item>

      <el-form-item label="菜单编号" prop="code">
        <el-input clearable v-model="form.code" />
      </el-form-item>
      <el-form-item label="菜单别名" prop="alias">
        <el-input clearable v-model="form.alias" />
      </el-form-item>
      <el-form-item label="菜单排序" prop="sort">
        <el-input autocomplete="off" clearable v-model.number="form.sort" />
      </el-form-item>
      <el-form-item label="菜单图标" prop="source">
        <el-button @click="iconClick" size="mini" style="width: 100%">
          <span v-if="!icon">点击选择菜单图标</span>
          <span v-if="icon"><i :class="icon"></i></span>
        </el-button>
      </el-form-item>
      <el-form-item label="新窗口" prop="isOpen">
        <el-radio-group v-model="form.isOpen">
          <el-radio class="w50" :label="0">否</el-radio>
          <el-radio class="w50" :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="菜单类型" prop="category" size="mini">
        <el-radio-group v-model="form.category">
          <el-radio class="w50" :label="1">菜单</el-radio>
          <el-radio class="w50" :label="2">按钮</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="按钮功能" prop="action">
        <el-radio-group v-model="form.action">
          <el-radio class="w50" :label="0">工具栏</el-radio>
          <el-radio class="w50" :label="1">操作栏</el-radio>
          <el-radio class="w50" :label="2">工具操作栏</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <span class="dialog-footer" slot="footer">
      <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
      <el-button @click="sure" size="mini" type="primary">确 定</el-button>
    </span>
    <Tree @sendData="sendData" ref="tree" />
    <iconList @sendIcon="sendIcon" ref="iconList" />
  </el-dialog>
</template>

<script>
import { add, getMenu } from '@/api/system/menu';

export default {
  name: 'MenuAdd',
  components: {
    Tree: () => import('./menuTree'),
    iconList: () => import('./iconList'),
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        sort: 0,
        action: 0,
        alias: '菜单别名',
        category: 1,
        code: '编号',
        isOpen: 0,
        name: '菜单名称',
        parentId: '',
        path: '路由地址',
        remark: '',
        source: 'iconfont iconicon_task_done',
        id: null,
      },
      rules: {
        sort: [
          { message: '*必填项', required: true, trigger: ['change', 'blur'] },
          {
            type: 'number',
            message: '排序必须为数字值',
          },
        ],
        name: [{ message: '*必填项', required: true, trigger: ['change', 'blur'] }],
        path: [{ message: '*必填项', required: true, trigger: ['change', 'blur'] }],
        source: [{ message: '*必填项', required: true, trigger: ['change', 'blur'] }],
        category: [{ message: '*必填项', required: true, trigger: ['change', 'blur'] }],
        alias: [{ message: '*必填项', required: true, trigger: ['change', 'blur'] }],
        action: [{ message: '*必填项', required: true, trigger: ['change', 'blur'] }],
        code: [{ message: '*必填项', required: true, trigger: ['change', 'blur'] }],
      },
      title: '',
      icon: '',
      parentName: '',
    };
  },
  created() {},
  methods: {
    getInfo(id) {
      this.title = '编辑菜单';
      this.dialogVisible = true;
      getMenu(id).then((res) => {
        this.form = res.data.data;
        this.parentName = res.data.data.parentName;
        this.icon = res.data.data.source;
      });
    },
    handleOpen() {
      this.title = '新增菜单';
      this.dialogVisible = true;
      Object.keys(this.form).forEach((key) => {
        this.form[key] = null;
      });
      this.parentName = '';
      this.icon = '';
    },
    superior() {
      this.$refs.tree.handleOpen();
    },
    iconClick() {
      this.$refs.iconList.handleOpen();
    },
    sendData(data) {
      this.parentName = data.title;
      this.form.parentId = data.key;
    },
    sendIcon(data) {
      this.icon = data;
      this.form.source = data;
    },
    sure() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          add(this.form).then(() => {
            this.$message({
              type: 'success',
              message: '操作成功!',
            });
            this.dialogVisible = false;
            this.$emit('update');
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.w50 {
  width: 50px;
}
</style>
