<style lang="less">
  .operationAnalysis{
    .title-third-1{
      position: relative;
      float: left;
      width: calc(40% - 10px);
      height: 25px;
      margin-left: 10px;
      overflow:hidden;
    }
    .title-third-2{
      position: relative;
      float: left;
      width: 60%;
      height: 25px;
      overflow:hidden;
    }
    .contents{
      margin:0 10px 10px;
    }
    .radio1 p{
      float: left;
      margin-top: -3px;
      margin-left: 3px;
      margin-right: 20px;
      width: 28px;
      line-height: 20px;
      font-size: 14px;
      color: #ffffff;
    }
    .radio2 p{
      float: left;
      margin-top: -3px;
      margin-left: 3px;
      margin-right: 30px;
      width: 28px;
      line-height: 20px;
      font-size: 14px;
      color: #ffffff;
    }
    .left{
      float: left;
      height: 660px;
      width: 40%;
      .chart1{
        width: calc(100% - 80px);
        height: 660px;
        background: url("../assets/image/operate_chart.png");
        background-size: 100% 100%  ;
      }
    }
    .right{
      float: left;
      height: 660px;
      width: 60%;
      .chart2{
        position: relative;
        width: 400px;
        height: 400px;
        margin: 130px auto 0;
        .chart2-1{
          position: absolute;
          top: -100px;
          left:50%;
          width: 100px;
          height: 100px;
          margin-left: -50px;
          background: url("../assets/image/operate_1.png");
          background-size: 100% 100%;
        }
        .chart2-2{
          position: absolute;
          left:50%;
          bottom:-100px;
          width: 100px;
          height: 100px;
          margin-left:-50px;
          background: url("../assets/image/operate_2.png");
          background-size: 100% 100%;
        }
        .chart2-3{
          position: absolute;
          top: 50%;
          right:-100px;
          width: 100px;
          height: 100px;
          margin-top:-50px;
          background: url("../assets/image/operate_3.png");
          background-size: 100% 100%;
        }
        .chart2-4{
          position: absolute;
          top: 50%;
          left: -100px;
          width: 100px;
          height: 100px;
          margin-top:-50px;
          background: url("../assets/image/operate_4.png");
          background-size: 100% 100%;
        }
        .chart2-5{
          width:100%;
          height:100%;
        }
      }
    }
  }
  .main-head .head_content_2{
    display: none;
  }
  .main-head .head_content_3{
    display: none;
  }
  .main-head .head_content_4{
    display: none;
  }
  .main-head .hidden1{
    visibility:hidden;
  }
  .main-head .p1{
    visibility:hidden;
  }


</style>
<template>
  <div class="con" @click="flag===true ? start() : pause()">
    <prompt-box :flag="flag" v-if="show"></prompt-box>
    <head-title :headTip="headTip">
      <head-select slot="headSelect"></head-select>
    </head-title>
    <div class="operationAnalysis main">
      <div class="nav-1">
        <div class="title-third-1">
          <p class="font_style_1">科室运营排名</p>
        </div>
        <div class="title-third-2">
          <p class="font_style_1">院内综合能力排名</p>
        </div>
      </div>
      <div class="contents">
        <div class="left">
          <div class="chart1"></div>
        </div>
        <div class="right">
          <div class="chart2">
            <div class="chart2-1"></div>
            <div class="chart2-2"></div>
            <div class="chart2-3"></div>
            <div class="chart2-4"></div>
            <div class="chart2-5"  ref="chart"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import eCharts from 'echarts'
  import {random, clone, start, pause, run} from '@/tool/tool'
  import headTitle from '@/components/head'
  import headSelect from '@/components/head-select'
  import promptBox from '@/components/prompt'

  let option = {
//    title: {
//      text: '基础雷达图'
//    },
//    tooltip: {},
    center:['50%','50%'],
    legend: {
      show:false,
//      data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0)',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        {max: 200},
        {max: 200},
        {max: 200},
        {max: 200}
      ],
      shape: 'circle',
      axisLine: {
        lineStyle: {
          color: '#3877d1'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#3877d1'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(54, 65, 129, 0.3)'],
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 10
        }
      },
    },
    series: [{
      type: 'radar',
      // areaStyle: {normal: {}},
      data : [
        {
          lineStyle: {
            normal: {
              type: 'solid',
              color:'#d9ed3b'
            }
          }
        }
      ]
    }]
  };

  export default{
    data () {
      return {
        headTip:'院内医疗运营分析',
        flag:false,
        timer:null,
        show:false,
        showTimer:null,
        chartTimer:null,
        timeCount:0

      }
    },
    components:{
      headTitle,
      headSelect,
      promptBox
    },
//    activated () {
//      router('/home',this);
//    },
    methods:{
      pause () {
        pause(this)
      },
      start () {
        start(this,'/home')
      }


    },

    mounted () {
      run(this,'/home')

      let chart=eCharts.init(this.$refs.chart);
      this.chartTimer=setInterval(()=>{
        option.series[0].data[0].value=[random(50,100),random(50,100),random(50,100),random(50,100)];
        chart.setOption(option,true)

      },2000);



    },
    beforeDestroy(){
      clearInterval(this.chartTimer)
      clearInterval(this.timer)
    }
  }
</script>
