<!--icon-->
<template>
  <el-dialog
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="dialogVisible"
    append-to-body
    center
    width="40%"
  >
    <el-tabs>
      <el-tab-pane :key="index" :label="i.label" style="padding: 10px" v-for="(i, index) in iconList">
        <el-row>
          <el-col :key="index" :span="2" v-for="(b, index) in i.list">
            <i :class="b" @click="iconClick(b)" class="icon"></i>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script>
import iconList from '@/config/iconList';

export default {
  name: 'iconList',
  data() {
    return {
      form: {},
      rules: {
        name: [{ message: '*必填项', required: true, trigger: ['change', 'blur'] }],
      },
      title: '',
      dialogVisible: false,
      iconList,
    };
  },
  methods: {
    handleOpen() {
      this.dialogVisible = true;
    },
    iconClick(icon) {
      this.$emit('sendIcon', icon);
      this.dialogVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 40px;
  height: 40px;
  font-size: 22px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon:hover {
  transform: scale(1.5);
}
</style>
