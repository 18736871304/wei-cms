<template>
  <div class="second-box">
    <div class="line-chart">
      <p class="line-title">平台近六个月的销售量</p>
      <div id="main" ref="myChart"></div>
    </div>
    <div class="detail-item-wrapper el-col el-col-5">
      <div  class="home-detail-item" style="background: rgb(236, 64, 122);">
        <div  class="name">注册用户数</div>
        <div  class="value">
          <span  class="num">43.12</span>万
        </div>
      </div>
      <div  class="home-detail-item" style="background: rgb(171, 71, 188);">
        <div  class="name">活跃用户数</div>
        <div  class="value">
          <span  class="num">74.42</span>万
        </div>
      </div>
    </div>
    <div class="detail-item-wrapper el-col el-col-5">
      <div  class="home-detail-item" style="background: rgb(33, 150, 243);">
        <div  class="name">人均投资金额</div>
        <div  class="value">
          <span  class="num">35.47</span>万
        </div>
      </div>
      <div  class="home-detail-item" style="background: rgb(0, 150, 136);">
        <div  class="name">网站日均访问量</div>
        <div  class="value">
          <span  class="num">38.23</span>万
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "../../node_modules/echarts";
export default {
  mounted() {
    // 调用绘制图表的方法
    this.draw();
  },
  methods: {
   draw() {
      // 实例化echarts对象
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制条形图
      myChart.setOption({
        title: {
          text: "销售量折线图",
          top: 5,
          left: "center"
        },
        legend: {
          data: ["衣服", "帽子", "裤子", "鞋子"],
          top: 30
        },
        // X轴
        xAxis: {
          data: ["一月", "二月", "三月", "四月"]
        },
        // Y轴
        yAxis: {},
        // 数据
        series: [
          {
            name: "衣服",
            type: "bar",
            data: [120, 100, 440, 320]
          },
          {
            name: "帽子",
            type: "bar",
            data: [200, 120, 240, 330]
          },
          {
            name: "裤子",
            type: "line",
            data: [180, 200, 240, 260, 300]
          },
          {
            name: "鞋子",
            type: "line",
            data: [120, 200, 300, 140, 260]
          }
        ]
      });
    },
  }
};
</script>

<style>
.second-box {
  display: flex;
  justify-content: space-around;
}
.detail-item-wrapper {
  height: 230px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
  color: #fff;
}
.home-detail-item {
  width: 230px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.line-title {
  width: 402px;
  height: 30px;
  background: rgb(221, 227, 239);
  line-height: 30px;
  margin: 0;
  margin-top: 10px;
  text-align: left;
}

.line-title::before {
  display: inline-block;
  content: "";
  width: 4px;
  height: 20px;
  background-color: rgb(193, 120, 206);
  vertical-align: middle;
  margin-right: 6px;
  margin-left: 2px;
}
#main {
  width: 400px;
  height: 300px;
}

.line-chart{
width: 300px;
height: 300px;
}
</style>