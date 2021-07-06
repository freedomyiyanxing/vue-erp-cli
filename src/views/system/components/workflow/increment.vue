<!--新增工作流-->
<template>
    <basic-container>
        <el-dialog
                :append-to-body="true"
                :close-on-click-modal="false"
                :destroy-on-close="true"
                :visible.sync="dialogVisible"
                center
                title="工作流"
                width="80%">
            <el-form :model="form" :rules="rules" label-width="100px" ref="form" size="mini">
                <el-form-item label="流程名称:" prop="processName">
                    <el-input placeholder="请输入流程名称" style="width: 200px;" v-model="form.processName"/>
                </el-form-item>
            </el-form>
            <div class="box">
                <div @click="initiatorClick" class="box-card pointer">
                    <div class="box-card-head" slot="header">
                        <span>发起人</span>
                    </div>
                    <div class="box-card-body">
                    <span v-if="!form.deptId">
                        请选择发起人部门/角色
                    </span>
                        <span v-if="form.deptId">
                        {{form.deptName}}/{{form.roleName}}
                    </span>
                    </div>
                </div>

                <div>
                    <i @click="addRight(0)" class="el-icon-circle-plus-outline iconfont pointer"
                       style="font-size:30px;"></i>
                </div>

                <div :key="index" style="display: flex;align-items: center;position: relative"
                     v-for="(i,index) in form.subProcessList[0].processTaskList">
                    <i @click="delApprove(index)"
                       class="pointer iconfont el-icon-circle-close del"
                       v-if="index>-1&&form.subProcessList[0].processTaskList.length!==1"></i>
                    <div @click="approveClick(i,index)" class="box-card pointer">
                        <div class="box-card-head" slot="header">
                            <span>审批人{{index+1}}</span>
                        </div>
                        <div class="box-card-body">
                            <span v-if="!i.postId&&!i.policeId">请选择审批人</span>
                            <span v-if="i.postId">{{i.postName}}</span>
                            <el-tooltip :content="i.policeName" class="item" effect="dark" placement="top"
                                        v-if="i.policeId">
                                <el-button size="mini">指定人员</el-button>
                            </el-tooltip>
                        </div>

                    </div>
                    <i @click="addRight(index+1)"
                       class="el-icon-circle-plus-outline iconfont pointer"
                       style="font-size:30px;margin-left:10px;"></i>

                </div>
                <div class="box-card">
                    <div class="box-card-head" slot="header" style="background-color: #00b06b;">
                        <span>流程结束</span>
                    </div>
                </div>
            </div>


            <!--            请选择发起人-->
            <el-card class="card" v-if="isInitiator">
                <div slot="header">
                    <span style="font-weight: bold;">请选择发起人</span>
                </div>
                <div style="margin-bottom: 10px;">
                    <el-select @change="changeDep" clearable placeholder="请选择发起人部门" size="mini" v-model="form.deptName"
                               value-key="id">
                        <el-option
                                :key="item.id"
                                :label="item.deptName"
                                :value="item"
                                v-for="item in options">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <el-select @change="changeRole2" clearable placeholder="请选择角色" size="mini"
                               v-model="form.roleName"
                               value-key="id">
                        <el-option :key="item.id" :label="item.roleName" :value="item" v-for="item in rolePull"/>
                    </el-select>
                </div>

            </el-card>
            <!--            请选择审批人-->
            <el-card class="card" v-if="isApprove">
                <div slot="header"><span style="font-weight: bold;">设置审批人{{approveIndex+1}}</span></div>
                <div>
                    <el-radio-group @change="changeApprove" size="small" v-model="assignType">
                        <el-radio :label="1" border style="margin-right: 5px;">指定部门</el-radio>
                        <el-radio :label="2" border style="margin-right: 5px;margin-bottom: 10px;">指定角色</el-radio>
                        <el-radio :label="3" border>指定人员</el-radio>
                    </el-radio-group>
                </div>
                <div>
                    <el-select @change="changeDep2" clearable placeholder="请选择部门" size="mini" v-if="assignType===1"
                               v-model="deptName"
                               value-key="id">
                        <el-option :key="item.id" :label="item.deptName" :value="item" v-for="item in options"/>
                    </el-select>
                    <el-select @change="changeRole" clearable placeholder="请选择角色" size="mini" v-if="assignType===2"
                               v-model="roleName"
                               value-key="id">
                        <el-option :key="item.id" :label="item.roleName" :value="item" v-for="item in rolePull"/>
                    </el-select>
                    <el-select :multiple-limit="10"
                               @change="changePerson"
                               @visible-change="changePersonVisible"
                               clearable
                               multiple placeholder="请选择人员" size="mini" v-if="assignType===3"
                               v-model="person"
                               value-key="id">
                        <el-option :key="item.id" :label="item.name" :value="item" v-for="item in personPull"/>
                    </el-select>
                </div>
            </el-card>
            <span class="dialog-footer" slot="footer">
                <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
                <el-button @click="sure" size="mini" type="primary">确 定</el-button>
            </span>
        </el-dialog>
    </basic-container>
</template>

<script>
  import {deptList, roleList, personList, getInfo, Add} from "@/api/system/workflow";

  export default {
    props: ["params"],
    name: "increment",
    data() {
      return {
        form: {
          processName: "",
          deptId: "",
          postId: "",
          roleId: "",
          deptName: "",
          subProcessList: [
            {
              processSubType: 1,
              processTaskList: [
                {
                  "assignType": 1,
                  "policeId": "",//3
                  "postId": "",//1,2
                  "sort": 1
                }
              ]
            }
          ]
        },
        isInitiator: false,
        isApprove: false,
        rules: {
          processName: [{message: "*必填项", required: true, trigger: ["change", "blur"]}]
        },
        dialogVisible: false,
        options: [],
        rolePull: [],
        personPull: [],
        approveIndex: null,
        assignType: 1,
        deptName: null,
        roleName: null,
        person: []

      };
    },
    created() {
      this.form = Object.assign(this.form, this.params);

    },
    methods: {


      delApprove(index) {
        this.form.subProcessList[0].processTaskList.splice(index, 1);
      },
      addRight(index) {
        this.form.subProcessList[0].processTaskList.splice(
         index, 0,
         {
           "assignType": 1,
           "policeId": "",//3
           "postId": "",//1,2
           "sort": this.form.subProcessList[0].processTaskList.length + 1
         }
        );
      },
      //选择人员后
      changePersonVisible(flag) {
        this.isApprove = flag;
        this.resetData();
      },
      //点击审批人
      approveClick(item, index) {
        console.log(item);
        this.approveIndex = index;//记录点击的是哪个审批人
        const {assignType, postName, policeName} = item;
        this.assignType = assignType;
        if (assignType === 1) {
          this.deptName = postName;
        }
        if (assignType === 2) {
          this.roleName = postName;
        }
        if (assignType === 3) {
          this.person = policeName.split(",");
        }
        this.isApprove = true;
        this.isInitiator = false;
        // this.assignType = 1;
      },
      //选择审批人类型
      changeApprove(i) {
        this.form.subProcessList[0].processTaskList[this.approveIndex].assignType = i;
        this.form.subProcessList[0].processTaskList[this.approveIndex].policeId = null;
        this.form.subProcessList[0].processTaskList[this.approveIndex].postId = null;
        this.resetData();
      },
      //清空下拉框
      resetData() {
        this.deptName = null;
        this.roleName = null;
        this.person = [];
      },
      //
      ifInitiator() {
        if (this.form.deptId && this.form.postId && this.form.roleId) {
          this.isInitiator = false;
        }
      },
      //选择发起人
      changeDep(i) {
        this.form.deptName = i.deptName;
        this.form.deptId = i.id;
        this.form.postId = i.id;
        this.ifInitiator();
      },
      //审批人选择部门
      changeDep2(i) {
        this.form.subProcessList[0].processTaskList[this.approveIndex].postId = i.id;
        this.form.subProcessList[0].processTaskList[this.approveIndex].postName = i.deptName;
        this.isApprove = false;
        this.resetData();
      },
      //审批人选择人员
      changePerson(i) {
        this.form.subProcessList[0].processTaskList[this.approveIndex].policeId = (i.map(b => b.id)).toString();
        this.form.subProcessList[0].processTaskList[this.approveIndex].policeName = (i.map(b => b.name)).toString();
      },
      //审批人选择角色
      changeRole(i) {
        this.form.subProcessList[0].processTaskList[this.approveIndex].postId = i.id;
        this.form.subProcessList[0].processTaskList[this.approveIndex].postName = i.roleName;
        this.isApprove = false;
        this.resetData();
      },
      //发起人选择角色
      changeRole2(i) {
        this.form.roleName = i.roleName;
        this.form.roleId = i.id;
        this.ifInitiator();
      },
      initiatorClick() {
        this.isInitiator = true;
        this.isApprove = false;
      },
      handleOpen(id) {
        this.dialogVisible = true;
        this.deptList();
        if (id) {
          getInfo(id).then(res => {
            this.form = res.data.data;
            res.data.data.subProcessList[0].listTask.forEach(i => {
              i.policeId = i.listUser.map(b => b.policeId).toString();
              i.policeName = i.listUser.map(b => b.userName).toString();
            });
            this.form.subProcessList[0].processTaskList = res.data.data.subProcessList[0].listTask;
          });
          return;
        }
        this.form = {
          processName: "",
          deptId: "",
          postId: "",
          roleId: "",
          deptName: "",
          subProcessList: [
            {
              processSubType: 1,
              processTaskList: [
                {
                  "assignType": 1,
                  "policeId": "",//3
                  "postId": "",//1,2
                  "sort": 1
                }
              ]
            }
          ]
        };
        this.form = Object.assign(this.form, this.params);


      },
      async deptList() {
        const res = await deptList();
        this.options = res.data.data;
        const res2 = await roleList();
        this.rolePull = res2.data.data;
        const res3 = await personList();
        this.personPull = res3.data.data;
      },
      sure() {
        if (!this.form.deptId) {
          this.$message({
            type: "error",
            message: "发起人必填!"
          });
          return;
        }
        let a = this.form.subProcessList[0].processTaskList.filter(i => !(i.postId + i.policeId));
        if (a.length !== 0) {
          this.$message({
            type: "error",
            message: "审批人必填!"
          });
          return;
        }
        this.form.subProcessList[0].processTaskList.forEach((i, index) => {
          i.sort = index + 1;
        });
        Add(this.form).then(res => {
          if (res.data.success) {
            this.dialogVisible = false;
            this.$emit('getList')
          }
        });
      }
    }
  };
</script>

<style lang='scss' scoped>
    .box-card {
        width: 150px;
        height: 80px;
        text-align: center;
        box-shadow: 0 0 5px #5d5d5d;
        border-radius: 5px;

        .box-card-head {
            position: relative;
            height: 30px;
            line-height: 30px;
            background-color: #5984B1;
            color: #fff;
            border-radius: 5px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }

        .box-card-body {
            height: 50px;
            line-height: 50px;
        }
    }

    .card {
        width: 400px;
        margin-top: 15px;
    }

    .box {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        overflow: auto;
        align-items: center;
        padding: 8px;
        box-sizing: border-box;

        > div {
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }

    .del {
        font-size: 22px;
        position: absolute;
        right: 50px;
        top: 3px;
        color: #fff;
        z-index: 1000;
    }
</style>
