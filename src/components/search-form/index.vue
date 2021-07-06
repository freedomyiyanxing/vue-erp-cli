<template>
  <!-- 列表搜索组件 -->
  <el-form :model="form" class="demo-ruleForm" inline ref="form" size="mini">
    <el-form-item :key="data.prop" v-for="(data,index) in configs.condition || []">
      <!-- el-input -->
      <el-input :placeholder="data.placeholder" :disabled="data.disabled || false" clearable
        :style="`width:${data.width || 200}px`" v-if="data.element === 'el-input'" v-model="form[data.prop]" />
      <!-- el-select -->
      <el-select :placeholder="data.placeholder" clearable :disabled="data.disabled || false"
        @change="(e) => handleChange(e, index, data)" :style="`width:${data.width || 200}px;`"
        v-if="data.element === 'el-select'" v-model="form[data.prop]">
        <el-option :key="selectItem.value" :label="selectItem.label" :value="selectItem.value"
          v-for="selectItem in data.list || []">
        </el-option>
      </el-select>
      <!-- el-autocomplete -->
      <el-autocomplete :fetch-suggestions="querySearchAsync" :disabled="data.disabled || false"
        :placeholder="data.placeholder" @focus="(e) => autocompleteFocus(e, index)"
        @select="(e) => handleSelect(e, index)" clearable :style="`width:${data.width || 200}px`"
        v-if="data.element === 'el-autocomplete'" v-model="form[data.prop]">
        <template slot-scope="{ item }">
          <span>{{ item[data.props.label] }}</span>
        </template>
      </el-autocomplete>
      <!--  el-input-select-->
      <el-input :placeholder="data.placeholder" :disabled="data.disabled || false"
        v-if="data.element === 'el-input-select' && data.isPermission" v-model="form[data.prop]">
        <el-select placeholder="请选择" slot="prepend" :style="`width:${data.width || 100}px`"
          v-model="form[data.select.prop]">
          <el-option :label="i.label" :value="i.value" v-for="i in data.select.options || []" :key="i.value" />
        </el-select>
      </el-input>
      <!-- el-date-picker -->
      <el-date-picker v-if="data.element === 'el-date-picker'" v-model="form[data.prop]" value-format="yyyy-MM-dd"
        :disabled="data.disabled || false" type="daterange" range-separator="至" start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <!-- 按钮 -->
    <el-form-item :key="index" v-for="(data,index) in configs.butList || []">
      <el-button :icon="data.icon" :type="data.type" @click="onSubmit(data)" size="mini"
        :disabled="data.disabled || false" v-if="data.isPermission" :plain="data.plain || false">
        {{data.label}}
      </el-button>
    </el-form-item>
    <!-- 展开、收起 -->
    <el-form-item v-if="isUnfold">
      <el-button @click="unfold" class="but" icon="el-icon-arrow-down" size="mini" type="text"
        v-if="iOpenUpName === '展开'">
        {{iOpenUpName}}
      </el-button>
      <el-button @click="unfold" class="but" icon="el-icon-arrow-up" size="mini" type="text" v-else>
        {{iOpenUpName}}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { getData } from "@/api/common/index.js";
// 匹配key
const matchingKey = (item, options) => {
  return options.map(item1 => {
    for (let key in item1) {
      if (key === item.props.label || key === item.props.value) {
        return { // 拿到对应的key、value
          label: item1[item.props.label],
          value: item1[item.props.value],
        };
      }
    }
  });
}
export default {
  props: {
    // 组件配置
    configs: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isExecute: false, // 确保mounted、activated钩子不会同时执行init方法
      isUnfold: false, // 是否需要折叠
      form: {}, // 表单数据
      list: [], // 存储展开删除的数据，
      oldList: [], // 存储未删除的数据，
      conditionList: [...[], ...this.configs.condition || []], // 储存配置的数据
      iOpenUpName: "展开",
      index: null // autocomplete模式下，在获取焦点时拿到当前点击输入框的index，为了避免发送全部的搜索请求
    };
  },
  created() {
    //初始化权限都为真
    if (this.configs.butList) this.configs.butList.map(i => i.isPermission = true)
    if (this.configs.condition) this.configs.condition.map(i => i.isPermission = true)
  },
  // 超过2级路由的页面
  mounted() {
    this.isExecute = true;
    if (this.isExecute) this.init();
  },
  // 页面有被缓存所以切换不会重新获取宽度,使用activated进入获取
  activated() {
    if (!this.isExecute) this.init();
    this.isExecute = false;
  },
  methods: {
    async init() {
      await this.getDataSetKey(); // 初始化数据
      await this.calculateWidth(this.$refs['form'].$el.clientWidth); // 是否需要折叠
      await this.checkingScreenWidth(); // 获取屏幕变化
    },
    // 获取数据并处理key
    getDataSetKey() {
      if (this.configs.condition) {
        this.configs.condition.forEach((item) => {
          if (item.axiosUrl) {
            getData(item.axiosUrl, item.params).then(res => { // 请求获取options
              item.list = matchingKey(item, res.data.data);
              this.$forceUpdate();
            });
          } else {
            if (item.options) { // 手动配置options
              item.list = matchingKey(item, item.options);
            }
          }
        });
      }
    },
    // 获取屏幕变化
    checkingScreenWidth() {
      const that = this
      window.onresize = () => {
        return (() => {
          that.calculateWidth(that.$refs['form'].$el.clientWidth);
        })()
      }
    },
    // 是否需要折叠,计算超过最大宽度去掉搜索框
    calculateWidth(formWidth) {
      if (this.configs.condition) {
        this.oldList = [];
        this.list = [];
        var sum = 0;
        for (var i = 0; i < this.conditionList.length; i++) {
          var width = this.conditionList[i].width || 210;
          sum += width;
          if (sum > formWidth) {
            this.isUnfold = true;
            this.list.push(this.conditionList[i]);
            this.iOpenUpName = "展开";
          } else {
            this.oldList.push(this.conditionList[i]);
            this.configs.condition = [...[], ...this.oldList];
            this.isUnfold = false;
            this.iOpenUpName = "收起";
          }
        }
      }
    },
    // input 远程搜索
    querySearchAsync(queryString, cb) {
      this.configs.condition.forEach((item, index1) => {
        if (item.element === "el-autocomplete" && index1 === this.index) {
          for (let key in item.params) {
            item.params[key] = queryString || item.params[key];
            getData(item.axiosUrl, item.params).then(res => {
              cb(res.data.data);
            }).catch(() => {
              cb([]);
            });
          }
        }
      });
    },
    // 获取index
    autocompleteFocus(item, index) {
      this.index = index;
    },
    // 远程搜索Select
    handleSelect(item, index) {
      this.configs.condition.forEach((item1, index1) => {
        if (index === index1) {
          this.form[item1.prop] = item[item1.props.label];
        }
      });
    },
    // 下拉handleChange
    handleChange(val, index, item) {
      this.configs.condition.forEach((item1) => { // 处理时间控件，可选择和禁止
        if (item.isRelevance === item1.prop) { // 找到关联的下拉和时间控件
          for (let key in this.form) {
            if (item.prop === key) { // 找出form中对应的key
              if (this.form[key]) { // 如果关联的下拉有数据，解除时间控件限制
                item1.disabled = false;
              } else { // 清空下拉值则清空时间
                item1.disabled = true;
                this.form[item1.prop] = [];
              }
            }
          }
        }
      })
      // 如果需要根据名字查询，请设置nameQuery为true
      if (item.nameQuery) {
        item.list.forEach(item1 => {
          if (val === item1.value) {
            for (let key in this.form) {
              if (item.prop === key) {
                this.form[key] = item1.label
              }
            }
          }
        })
      }
    },
    // 展开、收起
    unfold() {
      if (this.list.length) {
        this.iOpenUpName = "收起";
        this.configs.condition = this.conditionList;
        this.list = [];
        this.oldList = [];
      } else {
        this.iOpenUpName = "展开";
        this.calculateWidth(this.$refs['form'].$el.clientWidth);
      }
    },
    onSubmit(val) {
      if (val.prop === 'reset') { // 重置
        this.form = {};
        this.configs.condition.forEach((item) => {
          if (item.element === "el-date-picker") {
            item.disabled = true;
          }
        })
      }
      this.$emit("handleDispose", val.prop, this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
.but {
  color: #bf2722;
  cursor: pointer;
}
</style>
