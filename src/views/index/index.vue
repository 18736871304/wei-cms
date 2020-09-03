<template>
  <el-row class="container">
    <!-- 头部 -->
    <Head></Head>
    <!-- 侧边导航和内容 -->
    <sidenav></sidenav>


    
  </el-row>
</template>

<script>
import  sidenav  from "../sidenav/sidenav";
import  Head  from "../head/head";
export default {
  data() {
    return {
      sysName: "后台管理系统",
      sysUserName: "",
      sysUserAvatar: "",
    
      sidenav: [
        // {
        //   title: "导航一",
        //   nav: ["table", "from", "列表"]
        // },
        // {
        //   title: "导航二",
        //   nav: ["table", "from", "列表"]
        // },
        // {
        //   title: "导航三",
        //   nav: ["table", "from", "列表"]
        // }
      ]
    };
  },
  components: {
    sidenav: sidenav,
    Head:Head,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(123456789);
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleselect: function() {},
    // 退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          // sessionStorage.removeItem("user");
          _this.$router.push("/");
        })
        .catch(() => {});
    },
 

  },
  mounted() {}
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
  background: #20a0ff;
}
.logo {
  width: 245px;
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 35px;
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

.el-menu {
  height: 100%;
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