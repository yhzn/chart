<style lang="less">
  .eChart{
    width:100%;
    height:300px;
  }
</style>
<template>
  <div class="eChart" ref="echart">

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

      setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        eC.setOption(option, true);
      },2000);
    }

  }
</script>
