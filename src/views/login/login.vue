<template>
  <!-- 按de可以快速出来页面模板 -->
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../../assets/logo.png" />
      </div>
      <el-form label-width="60px" class="login_form" :model="ruleForm2" ref="ruleForm2">
        <el-form-item label="账号:">
          <el-input
            prefix-icon="el-icon-s-custom"
            v-model=" ruleForm2.account"
            placeholder="请输入账号"
            class="user"
            @keyup.enter.native="goToPwdInput"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码:">
          <el-input
            prefix-icon="el-icon-search"
            v-model="ruleForm2.checkPass"
            placeholder="请输入密码"
            class="password"
            @keyup.enter.native="onLogin"
            ref="pwd"
          ></el-input>
        </el-form-item>
<!-- 
        <el-form-item label="记住密码" label-width="80px" class="jipassword">
          <el-switch v-model="value" active-color="#13ce66"></el-switch>
        </el-form-item> -->

 <el-checkbox v-model="checked" checked class="remember jipassword">记住密码</el-checkbox>


        <el-button type="primary" class="primary" @click="onLogin('loginForm')">登录</el-button>
        <!-- <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>-->
      </el-form>
    </div>
  </div>
</template>

<script>
import { requestLogin } from "../../api/api";
export default {
  data() {
    return {
      value: false,
      ruleForm2: {
        account: "admin",
        checkPass: "123456"
      },
       rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
    };
  },
  methods: {
    // 用户名输入框回车后切换到密码输入框
    goToPwdInput() {
      this.$refs.pwd.$el.getElementsByTagName("input")[0].focus();
    },
    // 登录操作
    onLogin() {
      this.$refs.pwd.$el.getElementsByTagName("input")[0].blur();
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          //_this.$router.replace('/table');
          this.logining = true;
          //NProgress.start();
          var loginParams = {
            username: this.ruleForm2.account,
            password: this.ruleForm2.checkPass
          };
          requestLogin(loginParams).then(data => {
            console.log(data)
            this.logining = false;
            //NProgress.done();
            let { msg, code, user } = data;
            if (code !== 200) {
              this.$message({
                message: msg,
                type: "error"
              });
            } else {
              sessionStorage.setItem("user", JSON.stringify(user));
              this.$router.push({ path: "/Home" });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style>
.primary {
  width: 100%;
}
.jipassword {
  width: 35%;
  float: left;
  margin-bottom: 20px;
}
.login_form {
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -225px;
  padding: 0 50px;
  box-sizing: border-box;
}
.btns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.login_container {
  background: url(../../assets/beijing.jpg);
  background-size: 100% 100%;
  /* background-color: #2b4b6b; */
  height: 100%;
}
.login_box {
  width: 450px;
  height: 335px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
</style>