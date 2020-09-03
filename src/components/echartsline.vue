<template>
  <el-col :span="24" class="echart">
    <!-- <div>这是折线图          </div> -->
    <el-col :id="line" :span="12" style="width: 80%;height: 350px;    background-color: #fff;" class="line" ref="line"></el-col>
  </el-col>
</template>

<script>
import echarts from "echarts";
export default {
  name: "echartsline",
  props: {
    lineData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    drawCharts() {
      // var myChart = echarts.init(document.getElementById(this.line));
     this.chartLine = echarts.init(document.getElementById(this.line));
      // 指定图表的配置项和数据
      // myChart.setOption = {
      var option = {
        tooltip: {
          //设置tip提示
          trigger: "axis",
        },

        legend: {
          //设置区分（哪条线属于什么）
          data: ["平均成绩", "学生成绩"]
        },
        color: ["#8AE09F", "#FA6F53"], //设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: {
          //设置x轴
          type: "category",
          boundaryGap: false, //坐标轴两边不留白
          // data: [
          //   "2019-1-1",
          //   "2019-2-1",
          //   "2019-3-1",
          //   "2019-4-1",
          //   "2019-5-1",
          //   "2019-6-1",
          //   "2019-7-1"
          // ],
          data: this.lineData[0].yearData,
          name: "DATE", //X轴 name
          nameTextStyle: {
            //坐标轴名称的文字样式
            color: "#FA6F53",
            fontSize: 16,
            // padding: [0, 0, 0, 5]
          },
          axisLine: {
            //坐标轴轴线相关设置。
            // lineStyle: {
            //   color: "#FA6F53"
            // }
          }
        },
        yAxis: {
          name: "SALES",
          nameTextStyle: {
            color: "#FA6F53",
            fontSize: 16,
            // padding: [0, 0, 10, 0] 
          },
          axisLine: {
            // lineStyle: {
            //   color: "#FA6F53"
            // }
          },
          type: "value"
        },
        series: [
          {
            name: "平均成绩",
            // data: [220, 232, 201, 234, 290, 230, 220],
            data: this.lineData[0].average,
            type: "line", // 类型为折线图
            lineStyle: {
              // 线条样式 => 必须使用normal属性
              normal: {
                color: "#8AE09F"
              }
            }
          },
          {
            name: "学生成绩",
            // data: [120, 200, 150, 80, 70, 110, 130],
            data: this.lineData[0].student,
            type: "line",
            lineStyle: {
              normal: {
                color: "#FA6F53"
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);
    }
  },
  computed: {
    line() {
      return "line" + Math.random() * 100000;
    }
  },
  mounted() {
    this.drawCharts();
  },
  components: {}
};
</script>

<style>
#line {
  width: 400px;
  height: 400px;
  float: left;
}
.echart {
  /* background-color: #fff; */
}
</style>