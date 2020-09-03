<template>
  <el-row>
    <!-- <el-col>中国</el-col>
    <img src="../../assets/panda.png" alt="这是一张图片" />-->

    <el-col :span="24" class="wrap-first">
      <el-col :span="6" class="first-box1">
        <el-col :span="6" class="box1">
          <img src="../../assets/avatr.jpg" alt />
          <p>发布总数</p>
        </el-col>
        <el-col class="box1-txt">
          <p>今日:1000</p>
          <p>累计:1000</p>
        </el-col>
      </el-col>
      <el-col :span="6" class="first-box1">
        <el-col class="box1">
          <img src="../../assets/avatr.jpg" alt />
          <p>评论数</p>
        </el-col>
        <el-col class="box1-txt">
          <p>今日:1000</p>
          <p>累计:1000</p>
        </el-col>
      </el-col>
      <el-col :span="6" class="first-box1">
        <el-col class="box1">
          <img src="../../assets/avatr.jpg" alt />
          <p>留言数</p>
        </el-col>
        <el-col class="box1-txt">
          <p>今日:1000</p>
          <p>累计:1000</p>
        </el-col>
      </el-col>
      <el-col :span="6" class="first-box1">
        <el-col class="box1">
          <img src="../../assets/avatr.jpg" alt />
          <p>会员注册数</p>
        </el-col>
        <el-col class="box1-txt">
          <p>今日:1000</p>
          <p>累计:1000</p>
        </el-col>
      </el-col>
    </el-col>
    <el-col :span="24">
      <echartbarline />
    </el-col>
    
  </el-row>
</template>

<script>
import echartbarline from "../../components/echartbarline.vue";
export default {
  components: {
    echartbarline
  }
};
</script>

<style>
.wrap-first {
  display: flex;
  justify-content: space-around;
}
.first-box1 {
  /* width: 350px; */
  height: 200px;
  border: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 !important;
}
.box1 {
  width: 210px;
  height: 200px;
  background-color: rgb(23, 213, 126);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box1 img {
  width: 50px;
  height: 50px;
  padding-top: 10px;
  border-radius: 0;
  background-color: transparent;
}
.box1 p {
  margin: 10px auto;
}

.box1-txt {
  /* width: 230px; */
  height: 200px;
  background: rgb(1, 179, 172);
  box-sizing: border-box;
}
</style>