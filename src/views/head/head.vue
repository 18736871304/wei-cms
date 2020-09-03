<template>
  <el-col :span="24" class="header">
    <el-col :span="14" class="logo" style=" font-size: 24px;">{{sysName}}</el-col>

    <!-- <el-col :span="4">
      <div class="tools" @click="toggleClick">
        <i class="el-icon-s-fold"></i>
      </div>
    </el-col> -->

    <el-col :span="2" class="userinfo">
      <el-dropdown trigger="hover">
        <svg class="huanfu el-dropdown-link" viewBox="0 0 1024 1024" id="icon-pifu">
          <path
            d="M1020.75354075 473.16385185l-150.68425483 150.68425482L745.01688889 498.79570963V900.36148148H271.99260445V499.57243259l-124.27567408 124.27567408L-2.19060148 473.16385185l274.18320593-274.18320593h83.10935703c-0.77672297 3.10689185-0.77672297 5.43706075-0.77672296 7.76722963 0 48.93354667 70.68178963 87.76969482 157.67476148 87.76969482s157.67476148-38.83614815 157.67476148-87.76969482c0-2.33016889 0-4.66033778-0.85439526-7.76722963H745.01688889v0.77672297l0.77672296-0.77672297 274.9599289 274.18320593z"
            p-id="3949"
          />
        </svg>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix" command="default">青铜绿</el-dropdown-item>
          <el-dropdown-item class="clearfix" command="science-blue">深空蓝</el-dropdown-item>
          <el-dropdown-item divided command="customize">自定义</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
    <!-- <el-col :span="2" class="userinfo">
      <el-dropdown trigger="hover">

        <svg class="fangda el-dropdown-link" viewBox="0 0 1024 1024" p-id="2069">
          <path
            d="M333.493443 428.647617 428.322206 333.832158 262.572184 168.045297 366.707916 64.444754 64.09683 64.444754 63.853283 366.570793 167.283957 262.460644Z"
            p-id="2070"
          />
          <path
            d="M854.845439 760.133334 688.61037 593.95864 593.805144 688.764889 759.554142 854.56096 655.44604 958.161503 958.055079 958.161503 958.274066 656.035464Z"
            p-id="2071"
          />
          <path
            d="M688.535669 428.550403 854.31025 262.801405 957.935352 366.921787 957.935352 64.34754 655.809313 64.081481 759.919463 167.535691 593.70793 333.731874Z"
            p-id="2072"
          />
          <path
            d="M333.590658 594.033341 167.8171 759.804852 64.218604 655.67219 64.218604 958.270996 366.342596 958.502263 262.234493 855.071589 428.421466 688.86108Z"
            p-id="2073"
          />
        </svg>
      </el-dropdown>
    </el-col>-->
    <el-col :span="2" class="userinfo userinfo1">
      <el-dropdown trigger="hover">
        <div class="el-dropdown-link userinfo-inner">
          <img src="../../assets/logo.png" />
          <div class="username">
            <span>weiqinlu</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>修改头像</el-dropdown-item>
          <el-dropdown-item>项目仓库</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      sysName: "后台管理系统",
      sysUserName: "",
      sysUserAvatar: ""
    };
  },

  methods: {
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
        })
        .catch(() => {});
    },
  
  }
};
</script>
<style>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
.header {
  width: 100%;
  height: 64px;
  background: url(../../assets/header.jpg) no-repeat center;
  background-size: 100% 100%;
}

.menu-expanded {
  flex: 0 0 230px;
  width: 230px;
}
.logo {
  width: 245px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.tools {
  padding: 0px 23px;
  width: 40px;
  line-height: 60px;
  cursor: pointer;
}
.el-icon-s-fold {
  font-size: 34px;
  color: #fff;
  line-height: 60px;
}
.userinfo-inner {
  display: inline-block;
}
.username {
  font-size: 15px;
  color: #fff;
  display: inline-block;
}
.username span {
  margin-left: 10px;
  margin-right: 5px;
}

.userinfo-inner img {
  width: 40px;
  height: 40px;
  margin: 10px auto;
  vertical-align: middle;
  border-radius: 50%;
}
.huanfu {
  width: 35px;
  height: 35px;
  color: #fff;
  fill: currentColor;
  margin: 12.5px auto;
}
.fangda {
  width: 30px;
  height: 30px;
  color: #fff;
  fill: currentColor;
  margin: 15px auto;
}
.userinfo {
  width: 60px;
  float: right;
  cursor: pointer;
}
.userinfo1 {
  width: 150px;
}

.main {
  display: flex;
  position: absolute;
  top: 64px;
  bottom: 0px;
  overflow: hidden;
}
.main aside {
  flex: 0 0 230px;
  width: 230px;
}

.el-menu {
  height: 100%;
}

.collapsed {
  width: 60px;
}
.item {
  position: relative;
}

.submenu {
  position: absolute;
  top: 0px;
  left: 60px;
  z-index: 99999;
  height: auto;
  display: none;
}

.menu-collapsed {
  flex: 0 0 60px;
  width: 60px;
}

.menu-expanded {
  flex: 0 0 230px;
  width: 230px;
}

.content-container {
  flex: 1;
  overflow-y: scroll;
  padding: 20px;
}

.title {
  width: 200px;
  float: left;
  color: #475669;
}

.breadcrumb-inner {
  float: right;
}

.content-wrapper {
  background-color: #fff;
  box-sizing: border-box;
}
</style>