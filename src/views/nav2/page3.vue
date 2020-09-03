<template>
  <el-row>
    <input type="text" v-model="msg" ref="msg" />
    <el-button type="primary" @click.native="update">更新input值</el-button>

    <el-col id="aa">我是tet</el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      msg: "这是input框"
    };
  },

  methods: {
    update: function() {
      this.msg = "input框已更新";
    }
  },

  beforeCreate: function() {
    console.log("Vue实例创建前：" + this.msg, this.$el);
    //  数据data和dom都没有初始化
  },
  created: function() {
    console.log("Vue实例创建后:" + this.msg, this.$el);
    //  数据data初始化完成，dom还没有初始化完成
  },
  beforeMount: function() {
    console.log("Vue实例挂载前" + this.msg, this.$el);
  },
  mounted: function() {
  console.log(document.getElementById("aa"));
    console.log("Vue实例挂载后:" + this.msg, this.$el, this.$refs.msg);
  },
  beforeUpdate: function() {
    console.log("Vue实例更新前:" + this.msg, this.$el);
  },
  updated: function() {
    console.log("Vue实例更新后:" + this.msg, this.$el);
  },
  beforeDestroy: function() {
    console.log("Vue实例销毁前:" + this.msg, this.$el);
  },
  destroyed: function() {
    console.log("Vue实例销毁后:" + this.msg, this.$el);
  }
};
</script>

<style>
</style>