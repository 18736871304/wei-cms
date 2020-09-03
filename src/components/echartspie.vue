<!-- echartscom.vue 子元素 -->
<template>
  <el-col :span="24" class="charttest">
    <el-col :span="8" style="width:400px;height:400px; background-color:#fff;" :id="echarts"  ref="echarts"></el-col>
  </el-col>
</template>

<script>
import echarts from "echarts";
export default {
  name: "echartspie",
  props: {
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    drawCharts() {
      var myChart = echarts.init(document.getElementById(this.echarts));
      myChart.setOption({
        //提示框，鼠标悬浮交互时的信息提示
        tooltip: {
          //触发类型，默认（'item'）数据触发，可选为：'item' | 'axis'
          trigger: "item", //数据显示，相当于hover
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        //图例，每个图表最多仅有一个图例
        legend: {
          orient: "vertical",
          //水平安放位置
          x: "left",
          //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
          y: "top",
          //legend的data: 用于设置图例，data内的字符串数组需要与sereis数组内每一个series的name值对应
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"] //图表上的小图标
        },

        //sereis的数据: 用于设置图表数据之用。series是一个对象嵌套的结构；对象内包含对象
        series: [
          {
            //系列名称，如果启用legend，该值将被legend.data索引相关
            name: "访问来源和数据", //hover上的标题
            //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
            type: "pie", //pie为饼图 bar为柱状图  line为折线图 scatter散点图  radar雷达图
            // type: 'bar',
            radius: ["50%", "60%"], // 饼状图的外环和内环的大小
            avoidLabelOverlap: false, //是否允许重叠 false是允许， true不允许
            label: {
              normal: {
                show: false, //文字初始化不显示， 鼠标放上去显示在中间
                position: "center" //文字显示的位置，图表中间
              },
              //显示文字的样式
              emphasis: {
                //内环是否显示文字
                show: true,
                //内环中的字体样式
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            //文字和模块之间的线是否显示
            labelLine: {
              normal: {
                show: false
              }
            },
            //图表所依赖的数据，格式为数组格式
            data: this.chartData
          }
        ]
      });
    }
  },
  computed: {
    echarts() {
      return "echarts" + Math.random() * 100000;
    }
  },
  mounted() {
    this.drawCharts();
  },
  components: {}
};
</script>

<style></style>