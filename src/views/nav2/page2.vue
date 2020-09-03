<template>
  <el-row>
    <el-col :span="24" class="home">
      <el-progress  :span="6"  :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
      <el-progress  :span="6" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
      <el-progress  :span="6" :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
      <el-progress  :span="6" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
</el-col>
      <el-col :span="24" class="block">
        <span class="demonstration">滑动加速</span>
        <el-slider v-model="value1"></el-slider>
      </el-col>

   
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      value1: 50
    };
  }
};
</script>

<style>
</style>