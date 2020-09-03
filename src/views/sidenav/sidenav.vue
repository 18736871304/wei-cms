


<template>
  <el-col :span="24" class="main">
    <!-- 侧边导航 -->
    <Main v-on:childByValue="childByValue"></Main>
    <!-- 导航内容 -->
    <section class="content-container">
      <div class="grid-content bg-purple-light">
        <el-row>
          <el-button
            type="primary"
            v-for="(item) in editableTabs"
            :key="item.name"
            style="float:left;"
          >
            <router-link :to="item.content" style="color:#fff">{{item.content}}</router-link>
            <i class="el-icon-close el-icon--right" @click.stop="removeTab(item.name,$event)"></i>
          </el-button>
        </el-row>
        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>

        <!-- <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>-->
      </div>
    </section>
  </el-col>
</template>

<script>
import Main from "./main";
export default {
  data() {
    return {
      collapsed: false,
      activeTab: "1", //默认显示的tab
      tabIndex: 1, //tab目前显示数
      editableTabsValue: "",
      editableTabs: []
    };
  },
  components: {
    Main
  },
  methods: {
    handleopen() {
      console.log("handleopen");
    },
    handleclose() {
      console.log("handleclose");
    },
    handleselect: function() {},

    //添加面包屑
    childByValue(data, e) {
      var tabs = this.editableTabs;
      // for (var i = 0; i < tabs.length; i++) {
      // if (tabs[i].content == data[1] && tabs.length == 0) {
      //   console.log("面包屑上已有");
      // } else {
      //     console.log("添加成功");
      //     this.editableTabsValue = data[0];
      //     let navpath = data[1];
      //     if (!data[1]) {
      //       navpath = data[0];
      //     }
      //     let newTabName = ++this.tabIndex + "";
      //     this.editableTabs.push({
      //       // title: navpath,
      //       name: newTabName,
      //       content: navpath
      //     });
      //     this.editableTabsValue = newTabName;
      //   }
      // }

      this.editableTabsValue = data[0];
      let navpath = data[1];
      if (!data[1]) {
        navpath = data[0];
      }
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: navpath,
        name: newTabName,
        content: navpath
      });
      this.editableTabsValue = newTabName;
      console.log(this.editableTabs);
    },

    //移除tabs
    removeTab(data) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === data[1]) {
        tabs.forEach((tab, index) => {
          if (tab.name === data[index].name) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== data);
    }
  }
};
</script>

<style>
.breadcrumb-container {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-left: 30px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}

.content-container {
  flex: 1;
  overflow-y: scroll;
  padding: 0px;
  background-color: #f0f2f5;
}

.title {
  width: 200px;
  float: left;
  /* color: #475669; */
}

.breadcrumb-inner {
  float: left !important;
  font-size: 21px;
  line-height: 50px;
}

.content-wrapper {
  background-color: #fff;
  box-sizing: border-box;
}
</style>