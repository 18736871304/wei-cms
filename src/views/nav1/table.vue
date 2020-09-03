<template>
  <el-row class="table">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px; height:40px; text-align:initial">
      <el-form :inline="true" :model="filters" style="height:40px" @submit.native.prevent>
        <el-form-item>
          <el-input v-model="filters.name" placeholder="姓名" @keyup.enter.native="getUsers"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUsers">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updata">刷新</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <!-- @selection-change="selsChange" -->
    <el-table :data="datalist" highlight-current-row v-loading="listLoading" style="width: 100%;">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable></el-table-column>
      <el-table-column prop="age" label="年龄" width="100" sortable></el-table-column>
      <el-table-column prop="birth" label="生日" width="120"></el-table-column>
      <el-table-column prop="addr" label="地址" min-width="180"></el-table-column>
      <el-table-column label="操作" width="150">
        <!-- -->
        <template slot-scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-col :span="24" class="toolbar">
      <!-- <el-button type="danger" @click="batchRemove":disabled="this.sels.length===0" >批量删除</el-button> -->
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next"
        :total="total"
        style="float:right;"
      ></el-pagination>
    </el-col>

    <!--编辑界面  :close-on-click-modal="false"-->
    <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="editForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit">提交</el-button>
      </div>
    </el-dialog>

    <!-- 新增界面 -->
    <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="addForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="addForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
import {
  getUserList, //全部数据
  getUserListPage, //分页数据
  removeUser,
  batchRemoveUser,
  editUser,
  addUser
} from "../../api/api";
import util from "../../common/util";
import api from "@/services/global.js";
export default {
  data() {
    return {
      filters: {
        name: ""
      },
      users: [],
      pageIndex: 1,
      pageSize: 10,
      datalist: [],
      listLoading: false,
      total: 0,
      //编辑界面数据
      editFormVisible: false, //编辑界面是否显示
      editForm: {
        id: 0,
        name: "",
        sex: -1,
        age: 0,
        birth: "",
        addr: ""
      },
      addFormVisible: false, //新增界面是否显示
      addLoading: false,
      //新增界面数据
      addForm: {
        name: "",
        sex: -1,
        age: 0,
        birth: "",
        addr: ""
      },

      addFormRules: {
        name: {
          required: true,
          message: "请输入用户名",
          trigger: "blur"
        }
      }
    };
  },
  methods: {
    //每页条数切换
    handleSizeChange: function(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.getUsers();
    },
    //页数选择
    handleCurrentChange: function(val) {
      console.log(`当前页: ${val}`);
      this.pageIndex = val;
      this.getUsers();
    },

    //性别显示转换
    formatSex: function(row) {
      return row.sex == 1 ? "男" : row.sex == 0 ? "女" : "未知";
    },
    //获取数据——用户列表
    getUsers() {
      let para = {
        page: this.pageIndex,
        name: this.filters.name,
        pageSize: this.pageSize
      };
      this.listLoading = true;
      //NProgress.start();
      getUserListPage(para).then(res => {
        console.log(res);
        this.total = res.data.total;
        this.datalist = res.data.users;
        this.listLoading = false;
        // //NProgress.done();
      });
      // //去除空格
      // //去除字符串内所有的空格：str = str.replace(/\s*/g,"");
      // //去除字符串内两头的空格：str = str.replace(/^\s*|\s*$/g,"");
    },
    //编辑一行数据
    handleEdit(index, row) {
      console.log(index, row);
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row); //对象赋值
    },
    //提交编辑好的数据
    editSubmit() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            let para = Object.assign({}, this.editForm);
            para.birth =
              (!para.birth || para.birth) == ""
                ? ""
                : util.formatDate.format(new Date(para.birth), "yyyy-MM-dd");

            if (!para.birth || para.birth == "") {
              console.log("生日为空");
            } else {
              para.birth = util.formatDate.format(
                new Date(para.birth),
                "yyyy-MM-dd"
              );
            }
            editUser(para).then(res => {
              this.editLoading = false;
              //NProgress.done();
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.$refs["editForm"].resetFields(); //表单初始化。
              this.editFormVisible = false; //隐藏编辑界面
              this.getUsers(); //更新表单数据
            });
          });
        }
      });
    },
    //删除一行数据
    handleDel(index, row) {
      console.log(index, row);
      this.$confirm("确认删除该记录吗?", "提示", {
        type: "warning"
      }).then(() => {
        this.listLoading = true;
        let para = { id: row.id };
        removeUser(para).then(res => {
          this.listLoading = false;
          //NProgress.done();
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getUsers();
        });
      });
    },
    //刷新数据
    updata() {
      this.filters.name = "";
      this.page = 1;
      this.pageIndex = 1;
      this.getUsers();
    },

    //新增（添加）数据
    handleAdd: function() {
      //显示新增界面
      this.addFormVisible = true;

      this.addForm = {
        name: "",
        sex: -1,
        age: 0,
        birth: "",
        addr: ""
      };

      // 为给定 ID 的 user 创建请求
      // api
      //   .mockdata("https://api.imjad.cn/cloudmusic/?type=song&id=32785674")
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
    //提交新增的数据
    addSubmit: function() {
      this.addLoading = true; //显示加载中
      this.$refs.addForm.validate(valid => {
        console.log(this.$refs);
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.addLoading = true;
            //NProgress.start();
            let para = Object.assign({}, this.addForm);
            para.birth =
              !para.birth || para.birth == ""
                ? ""
                : util.formatDate.format(new Date(para.birth), "yyyy-MM-dd");
            addUser(para).then(res => {
              this.addLoading = false;
              //NProgress.done();
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.$refs["addForm"].resetFields(); //表单初始化
              this.addFormVisible = false; //关闭添加弹窗
              this.getUsers();
            });
          });
        }
      });

      //提交给后台成功
      this.addLoading = false; //隐藏加载中
      this.addFormVisible = false; //隐藏新增页面
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>

<style>
.table {
  padding: 30px;
}
</style>