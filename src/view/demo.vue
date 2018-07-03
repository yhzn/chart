<style lang="less">
  .eChart{
    width:100%;
    height:300px;
  }
  .line{
    width:100%;
    height:300px;
  }
</style>
<template>
  <div>
  <div class="eChart" ref="echart">
  </div>
  <div class="line" ref="line"></div>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import eCharts from 'echarts'
  export default {
    data () {
      return {

      }
    },
    components:{
      swiper,
      swiperSlide
    },
    methods:{

    },
    mounted () {
      let eC=eCharts.init(this.$refs.echart);
      let lC=eCharts.init(this.$refs.line);
      let option = {
//        backgroundColor: '#1b1b1b', // 表盘背景色

        // 提示信息
        tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
        },
//        toolbox: {
//          show: false,
//          feature: {
//            mark: {
//              show: true
//            },
//            restore: {
//              show: true
//            },
//            saveAsImage: {
//              show: true
//            }
//          }
//        },

        // 取消功能按钮
//        toolbox: {
//          feature: {
//            restore: {},
//            saveAsImage: {}
//          }
//        },
        series: [
          {
            name: '业务指标',
            type:   'gauge',

            // 表盘半径
            radius:150,

            // 表盘的起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            startAngle: 240,
            //结束角度。
            endAngle: -60,

            // 表盘中心位置移动
            center: ['50%', '50%'],


            axisLine: {
              show:true,
              // 属性lineStyle控制线条样式
              lineStyle: {
                // 控制表盘宽度
                width: 30,
                color:[[0.25,new eCharts.graphic.LinearGradient(0, 0, 0, 1, [{  // 渐变色


                  // 0% 处的颜色
                  offset: 0, color: 'red'  },
                  {

                    // 100% 处的颜色
                    offset: 1, color: 'blue'
                  }], false)
              ],[0.5,'red'],[0.75,'yellow'],[1, '#63869e']]
              }
            },
            // 刻度值颜色
            axisLabel: {            // 坐标轴小标记
              textStyle: {       // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                fontSize : 16,
                color: '#444' // 坐标轴字体颜色
              }
            },
            itemStyle: {
              normal: {  // 指针颜色渐变
                color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [{


                  // 0% 处的颜色
                  offset: 0, color: 'red'  },
                  {

                    // 100% 处的颜色
                    offset: 1, color: 'blue'
                  }], false)
              }
            },
            //分隔线样式。 分割线颜色
            splitLine: {
              show: true,
              length : 30,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                width:1,
                color: '#444'
              }

            },
            pointer: {           // 分隔线
              length:100,
            },

            // 刻度样式。
            axisTick: {
              show: true,
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                width:1,
                color: '#444'
              }
            },

//            //刻度标签。
//            axisLabel: {
//              show:true,
//            },
//            detail: {formatter:'{value}%'},
            data: [{value: 50}]
          }
        ]
      };
      let lOption={
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [1,2,3,4,5,6,7,8,9,10,11,12]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
          }
        ]
      };

      setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        eC.setOption(option, true);
        lC.setOption(lOption, true);
      },2000);
    }

  }
</script>
