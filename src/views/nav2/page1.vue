<template>
  <el-row class="about">
    <el-calendar v-model="value"></el-calendar>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    };
  },
};
</script>

<style>
</style>