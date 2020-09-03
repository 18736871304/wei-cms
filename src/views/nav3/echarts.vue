<!-- index.vue 父元素 -->
<template>
  <el-row class="echarts1 line">
    <el-col :span="8" v-for="(chardata,index) in msg" :key="index" class="test">
      <el-col :span="8" class="title">环形图</el-col>
      <echartspie :chartData="chardata" autoresize />
    </el-col>

    <!-- <el-col :span="24">折线图</el-col> -->
    <el-col :span="12" v-for="(linedata,index) in linedata" :key="index" class="test">
      <el-col :span="8" class="title">折线图</el-col>
      <echartsline :lineData="linedata" autoresize />
    </el-col>
  </el-row>
</template>

<script>
import echartspie from "@/components/echartspie.vue";
import echartsline from "@/components/echartsline.vue";
export default {
  data() {
    return {
      msg: {
        chartData1: [
          { value: 33, name: "直接访问" },
          { value: 31, name: "邮件营销" },
          { value: 24, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 18, name: "搜索引擎" }
        ],
        chartData2: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ],
        chartData3: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      },
      linedata: {
        linedata1: [
          {
            // title: "平均成绩",
            average: [220, 232, 201, 234, 290, 230, 220],
            yearData: [
              "2019-1-1",
              "2019-2-1",
              "2019-3-1",
              "2019-4-1",
              "2019-5-1",
              "2019-6-1",
              "2019-7-1"
            ],
            student: [120, 200, 150, 80, 70, 110, 130]
          }
        ],
        linedata2: [
          {
            // title: "平均成绩",
            average: [220, 232, 201, 234, 290, 230, 220],
            yearData: [
              "2020-1-1",
              "2020-2-1",
              "2019-3-1",
              "2019-4-1",
              "2019-5-1",
              "2019-6-1",
              "2019-7-1"
            ],
            student: [120, 200, 150, 80, 70, 110, 130]
          }
        ]
      }
    };
  },
  methods: {},
  mounted() {},
  components: {
    echartspie,
    echartsline
  }
};
</script>

<style>
.test {
  float: left;
}
.echarts1 {
  padding: 20px;
  background-color: #f0f2f5;
}
.test {
  margin-bottom: 20px;
}
.title {
  width: 400px;
  height: 40px;
  line-height: 40px;
  color: #475669;
  background: rgb(221, 227, 239);;
  font-weight: bold;
  font-size: 26px;
  text-align: left;
  text-indent: 1em;
}

.title::before {
    display: inline-block;
    content: "";
    width: 6px;
    height: 30px;
    background-color: rgb(193, 120, 206);
    vertical-align: middle;
    margin-right: 6px;
    margin-left: -20px;
    margin-top: -5px;
}
</style>