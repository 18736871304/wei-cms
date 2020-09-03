<template>

  <el-aside :class="isCollapse?'menu-collapsed':'menu-expanded'">
    <!-- 折叠按钮 -->
    <el-radio-group v-model="isCollapse" :class="isCollapse?'el-radio-group1':'el-radio-group gg'">
      <i v-show="!isCollapse" class="el-icon-s-fold expandBtn" @click="isCollapse=true"></i>
      <i v-show="isCollapse" class="el-icon-s-fold shrinkBtn" @click="isCollapse=false"></i>
    </el-radio-group>
    <!--导航菜单   v-show="!collapsed"  :collapse="isCollapse"-->
    <el-menu
      background-color="#2a68c9"
      text-color="#fff"
      active-text-color="#eeff41"
      unique-opened
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleopen"
      @close="handleclose"
      @select="handleselect"
      :collapse="isCollapse"
    >
      <template v-for="(item,index) in $router.options.routes">
        <el-submenu
          :key="index"
          :index="index+''"
          v-if="item.hidden&&!item.leaf"
          style="text-align: left;  color:#fff"
        >
          <template slot="title">
            <i :class="item.iconCls" style="margin-right:5px; color:#fff"></i>
            <span slot="title">{{item.name}}</span>
            <!-- {{$router.options.routes}} -->
          </template>

          <el-menu-item
            class="child"
            v-for="(child,index) in item.children"
            :index="child.path"
            :key="index"
          >{{child.name}}</el-menu-item>
        </el-submenu>
        <!-- 预防一级菜单有内容 -->
        <el-menu-item
          :key="item.index"
          v-if="item.leaf&&item.children.length>0"
          :index="item.children[0].path"
          style="text-align: left; color:#fff"
        >
          <i :class="item.iconCls" style="margin-right:5px; color:#fff"></i>
          <span slot="title">{{item.children[0].name}}</span>
        </el-menu-item>
      </template>
    </el-menu>

    <!--导航菜单-折叠后-->
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "1", //默认显示的tab
      tabIndex: 1, //tab目前显示数
      isCollapse: false,
     
    };
  },
  methods: {
    handleopen() {
      console.log("handleopen");
    },
    handleclose() {
      console.log("handleclose");
    },
    handleselect: function(key, keyPath) {
      console.log(key,keyPath)
      // childByValue是在父组件on监听的方法
    // 第二个参数this.childValue是需要传的值
    this.$emit('childByValue', keyPath)
    }
  }
};
</script>

<style>

.shrinkBtn {
  width: 100%;
  background-color: rgb(42, 104, 201);
  transform: rotate(180deg);
  font-size: 26px !important;
}
.expandBtn {
  font-size: 26px !important;
}

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

.el-icon-s-fold {
  font-size: 34px;
  color: #fff;
  line-height: 60px;
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
  background-color: rgb(42, 104, 201);
  overflow-y: hidden;
}

.el-menu-vertical-demo,
.child {
  background-color: #eef1f6;
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
  flex: 0 0 60px !important;
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
  color: #fff;
}

.breadcrumb-inner {
  float: left;
}

.content-wrapper {
  background-color: #fff;
  box-sizing: border-box;
}
.el-submenu__title i {
  color: #fff;
}

.fa-home {
  font-size: 20px;
}

.gg {
  position: absolute;
  top: 0px;
  left: 190px;
  z-index: 100;
}
.el-radio-group1 {
  position: absolute;
  top: 0px;
  left: 32px;
  z-index: 100;
}
.el-submenu__title .el-submenu__icon-arrow{
  color: #FFF;
}
</style>