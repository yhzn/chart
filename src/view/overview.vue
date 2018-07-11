<style lang="less">
  .overview{
     color:#fff;
    p{
      text-align: center;
    }
     .con-1{
       float: left;
       width:calc(50% - 15px);
       .title p{
         float:left;
         width:40%;
         text-align: left;
         &:nth-child(2){
           width: 60%;
         }
       }
       .chart{
         ul{
           margin-bottom:0;
           &:first-child{
             border-bottom: 1px solid #1c70a5;
           }
         }
         li{
           float:left;
           padding-top:10px;
           height:160px;
           width:20%;
           box-sizing: border-box;
           &:nth-child(2){
             border-right: 1px solid #fff;
           }
           p{
             margin-bottom:3px;
             text-align: center;
             span{
               color:#0cc3f8;
               margin-left:10px;
               font-size:12px;
               width:60px;
             }
             &:first-child{
               margin-bottom:5px;
               span{
                 display: inline-block;
                 padding:0 5px;
                 border-radius: 5px;
                 color: #000;
                 width:auto;
                 margin-left:0;
                 background:#cdcdcd;
                 font-size:12px;
               }
             }
           }
           .chart-container{
             height:80px;
             width:80%;
             margin: 0 auto;
           }
         }

       }
       .ind-con{
         margin-left:120px;
       }
     }
    .con-2{
      float: left;
      width:calc(50% - 15px);
      .title p{
        text-align: left;
      }
      .table-con{
        height:320px;
        overflow: hidden;
      }
      .ind-con{
        margin-left:30px;
      }
    }
    .chart-con{
      margin-bottom:10px;
      .chart-head{
        height:32px;
        padding-top:10px;
        .select-img{
          float: right;
          width:80px;
          height:18px;
          margin-right:10px;
          border-radius: 5px;
          overflow: hidden;
          img{
            width:100%;
            height:100%;
          }
        }
        div:nth-child(2){
          margin-left:10px;
          font-size:16px;
        }
      }
    }
    .chart-con:nth-child(2){
      .con-1,.con-2{
        height:320px;
      }
    }
    .chart-main{
      height:220px;
      .left{
        float:left;
        width:120px;
        height:100%;
        p{
          border-radius: 5px;
          width:96px;
          margin-top: 60px;
          margin-left: 27px;
          background:#61a8d9;
          &:nth-child(2){
            background:#fff;
            color:#000;
          }
        }

      }
      .right{
        margin-left:120px;
        height:100%;
      }
    }

  }

</style>
<template>
    <div class="con" @click="flag===true ? start() : pause()">
      <prompt-box :flag="flag" v-if="show"></prompt-box>
      <head-title :headTip="headTip">
        <head-select slot="headSelect"></head-select>
      </head-title>
      <div class="overview main">
        <div class="chart-con clearfix">
          <div class="con-1 margin-left-10 margin-right-5">
            <div class="title clearfix">
              <p>临床路径质量指标</p>
              <p>临床路径卫生经济学指标</p>
            </div>
            <div class="chart border-bg">
               <ul class="clearfix">
                 <li>
                   <p><span>入境率</span></p>
                   <div class="chart-container" ref="chart_meter_1"></div>
                   <p>当期<span>{{chart_num_1}}%</span></p>
                   <p>同期<span>70%</span></p>
                 </li>
                 <li>
                   <p><span>完成数占出院人数比</span></p>
                   <div class="chart-container" ref="chart_meter_2"></div>
                   <p>当期<span>{{chart_num_2}}%</span></p>
                   <p>同期<span>27%</span></p>
                 </li>
                 <li>
                   <p><span>均次费用</span></p>
                   <div class="chart-container" ref="chart_meter_3"></div>
                   <p>当期<span>{{chart_num_3}}</span></p>
                   <p>同期<span>18,602</span></p>
                 </li>
                 <li>
                   <p><span>平均住院日</span></p>
                   <div class="chart-container" ref="chart_meter_4"></div>
                   <p>当期<span>{{chart_num_4}}</span></p>
                   <p>同期<span>7.1</span></p>
                 </li>
                 <li>
                   <p><span>术前平均住院日</span></p>
                   <div class="chart-container" ref="chart_meter_5"></div>
                   <p>当期<span>{{chart_num_5}}</span></p>
                   <p>同期<span>1.7</span></p>
                 </li>
               </ul>
               <ul class="clearfix">
                <li>
                  <p><span>变异率</span></p>
                  <div class="chart-container" ref="chart_meter_6"></div>
                  <p>当期<span>{{chart_num_6}}%</span></p>
                  <p>同期<span>3%</span></p>
                </li>
                <li>
                  <p><span>完成率</span></p>
                  <div class="chart-container" ref="chart_meter_7"></div>
                  <p>当期<span>{{chart_num_7}}%</span></p>
                  <p>同期<span>97%</span></p>
                </li>
                <li>
                  <p><span>均次费用</span></p>
                  <div class="chart-container" ref="chart_meter_8"></div>
                  <p>当期<span>{{chart_num_8}}%</span></p>
                  <p>同期<span>25%</span></p>
                </li>
                <li>
                  <p><span>均次费用</span></p>
                  <div class="chart-container" ref="chart_meter_9"></div>
                  <p>当期<span>{{chart_num_9}}%</span></p>
                  <p>同期<span>32%</span></p>
                </li>
                <li>
                  <p><span>均次费用</span></p>
                  <div class="chart-container" ref="chart_meter_10"></div>
                  <p>当期<span>{{chart_num_10}}%</span></p>
                  <p>同期<span>7%</span></p>
                </li>

              </ul>
            </div>
          </div>
          <div class="con-2 margin-left-5 margin-right-10">
            <div class="title">
              <p>临床路径科室排名</p>
            </div>
            <div class="table-con">
              <table-list :tableData="tableData"></table-list>
            </div>
          </div>
        </div>
        <div class="chart-con clearfix">
          <div class="con-1 border-bg margin-left-10 margin-right-5">
            <div class="chart-head clearfix">
              <div class="select-img">
                <img :src="rj" alt="">
              </div>
              <div class="chart-title">临床路径</div>
            </div>
            <p>2018年入径率月度趋势</p>
            <div class="chart-main clearfix">
              <div class="left">
                <p>月份对比</p>
                <p>年标准值对比</p>
              </div>
              <div class="right" ref="chart_bar_1">
              </div>
            </div>
            <div class="ind-con">
              <indicator-light :selectLight="selectLight"></indicator-light>
            </div>
          </div>
          <div class="con-2 border-bg margin-left-5 margin-right-10">
              <div class="chart-head clearfix">
                <div class="select-img">
                  <img :src="rj" alt="">
                </div>
              </div>
              <p>2018年入径率月度趋势</p>
              <div class="chart-main clearfix" ref="chart_bar_2">
              </div>
              <div class="ind-con">
                <indicator-light :selectLight="selectLight_1"></indicator-light>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import eCharts from 'echarts'
  import {random, clone, start, pause, run} from '@/tool/tool'
  import rj from '@/assets/image/rj.jpg'
  import pj from '@/assets/image/pj.jpg'
  import headTitle from '@/components/head'
  import headSelect from '@/components/head-select'
  import tableList from '@/components/table-list'
  import indicatorLight from '@/components/indicator'
  import promptBox from '@/components/prompt'

  let tableData=[
    ['排名','科室名称','入径率','完成率','入径数','收治数','平均住院日','药占比','均费差额'],
    ['合计','心房颤动介入治疗','88%','88%','236','236','6.7','19%','24,199'],
    ['1','心力衰竭','100%','100%','17','17','7.6','19%','20,849'],
    ['2','急性ST段抬高心肌梗塞','100%','100%','14','14','1.9','13%','17,903'],
    ['3','慢性心绞痛介入治疗','100%','100%','10','10','5.2','11%','24,199'],
    ['4','病态心房结综合征','99%','99%','6','6','10.3','26%','82,972'],
    ['5','高血压','99%','99%','1','1','4.3','9%','15,135'],
    ['6','心房颤动介入治疗','99%','99%','1','1','3.9','18%','24,199'],
    ['7','慢性心绞痛介入治疗','99%','99%','0','0','10.9','21%','24,199']
  ];
  let meterOption={
    tooltip : {
      formatter: "{a} <br/>{b} : {c}%"
    },
//        grid : {
//          top : 0,    //距离容器上边界40像素
//          bottom: 0,   //距离容器下边界30像素
//          left:0,
//          right:0,
//          containLabel: true
//        },
    series: [
      {
        type: 'gauge',
        min:0,
        radius:40, // 半径
        axisLine: {
          show:true,
          // 属性lineStyle控制线条样式
          lineStyle: {
            // 控制表盘宽度
            width: 15,
            color:[[0.2,'#76e79e'],[0.5,'#ece35d'],[0.7,'#f9a701'],[1, '#f67336']],
//                shadowColor: '#fff', //默认透明
//                shadowBlur: 10

          }
        },
        splitLine: { // 分隔线
          length: 15, // 属性length控制线长
          lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
            width: 1,
            color: '#000',
//                shadowColor: '#fff', //默认透明
//                shadowBlur: 10
          }
        },
        axisTick: { // 刻度样式。
          show: true,
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width:1,
            color: '#000'
          }
        },
        itemStyle: {
          normal: {  // 指针颜色渐变
            color: '#2c98de',
          }
        },
        pointer: {           // 分隔线
          width:5,   // 指针宽度设置
          length:23,
        },
        detail: { // 表盘详情
          show: true,
          offsetCenter: [0, '80%'], // 数值显示位置
          formatter: '{value}%',
          textStyle: {
            fontSize: 16,
            color:'#fff'
          }
        },
        axisLabel: { //刻度标签。
          show:false, // false 去除刻度
        },
        data: [{value: 50, name: ''}]
      }
    ]
  }
  let option_1=clone(meterOption);
  let option_2=clone(meterOption);
  let option_3=clone(meterOption);
  let option_4=clone(meterOption);
  let option_5=clone(meterOption);
  let option_6=clone(meterOption);
  let option_7=clone(meterOption);
  let option_8=clone(meterOption);
  let option_9=clone(meterOption);
  let option_10=clone(meterOption);

  let barOption={
    tooltip: {
      trigger: 'axis'
    },
//          legend: {
//            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
//          },
    grid: {
      top:'5%',
      left: '5%',
      right: '3%',
      bottom: '5%',
      containLabel: true
    },
    // 工具箱
//          toolbox: {
//            feature: {
//              saveAsImage: {}
//            }
//          },
    xAxis: {
      type: 'category',
      axisTick: {show: false},
      axisLine:{
        lineStyle:{
          color:'#fff',
          width:1,//  坐标轴宽度 这里是为了突出显示加上的
        }
      },

      boundaryGap: true,
      data: [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    yAxis: [{
      type: 'value',
//            max:25000,
      axisLine:{
        lineStyle:{
          color:'#fff',
          width:1,//  坐标轴宽度 这里是为了突出显示加上的
        }
      }


    }],
    series: [
      {
        name:'同期',
        type:'line',
        itemStyle : {
          normal : {
            lineStyle:{
              color:'#f9ae0e'
            }
          }
        },
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'当期',
        type:'line',
        itemStyle : {
          normal : {
            lineStyle:{
              color:'#ebdf07'
            }
          }
        },
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'指标',
        type:'line',
        itemStyle : {
          normal : {
            lineStyle:{
              color:'#8bea7f'
            }
          }
        },
        data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
        name:'医保',
        type:'bar',
        barWidth: '30%',
        barGap: 0,
        color:'#1286ed',
        data:[10, 52, 200, 334, 390, 330, 220]
      },
      {
        name:'指导',
        type:'bar',
        barWidth:'30%',
        color:'#e9615c',
        itemStyle : {
          normal : {
            lineStyle:{

            }
          }
        },
        data:[320, 332, 301, 334, 390, 330, 320]
      }
    ]
  };
  let option_11=clone(barOption);
  let option_12=clone(barOption);
  option_11.yAxis[0].max=100;
  option_11.yAxis[0].axisLabel={
    show: true,
    interval: 'auto',
    formatter: '{value} %'
  }
  option_11.yAxis[1]={
    type: 'value',
    name: '',
    min: 0,
    max: 4000,
    position: 'right',
    axisLabel: {
      formatter: '{value}'
    },
    splitLine:{  // 去掉与坐标轴平行的直线
      show:false
    },
    axisTick: {
      show: false
    },
    axisLine:{
      lineStyle:{
        color:'#fff',
        width:1,//  坐标轴宽度 这里是为了突出显示加上的
      }
    }
  };


  option_12.yAxis[0].max=10;
  option_12.yAxis[1]={
    type: 'value',
    name: '',
    min: 0,
    max: 25000,
    position: 'right',
    axisLabel: {
      formatter: '{value}'
    },
    splitLine:{  // 去掉与坐标轴平行的直线
      show:false
    },
    axisTick: {
      show: false
    },
    axisLine:{
      lineStyle:{
        color:'#fff',
        width:1,//  坐标轴宽度 这里是为了突出显示加上的
      }
    }
  };



  export default {
    data () {
      return {
        tableData,
        headTip:'临床路径概览',
        selectLight:{
          selectOne:true,
          one:'入径率',
          selectTwo:true,
          two:'入径率同期',
          selectThree:true,
          three:'标准值',
          selectFour:true,
          four:'入径数',
          selectFive:true,
          five:'收治数'
        },
        selectLight_1:{
          selectOne:true,
          one:'平均住院日',
          selectTwo:true,
          two:'平均住院日同期',
          selectThree:true,
          three:'标准值',
          selectFour:true,
          four:'住院天数',
          selectFive:true,
          five:'入径数'
        },
        rj,
        pj,
        chart_num_1:0,
        chart_num_2:0,
        chart_num_3:0,
        chart_num_4:0,
        chart_num_5:0,
        chart_num_6:0,
        chart_num_7:0,
        chart_num_8:0,
        chart_num_9:0,
        chart_num_10:0,
        flag:false,
        timer:null,
        show:false,
        showTimer:null,
        chartTimer:null,
        timeCount:0

      }
    },
//    activated () {
//      router('/mutation',this,this.timer);
//
//    },
    components:{
      headTitle,
      headSelect,
      tableList,
      promptBox,
      indicatorLight
    },
    methods:{
      pause () {
        pause(this)
      },
      start () {

        start(this,'/mutation')

      }


    },

    mounted () {

      run(this,'/mutation')

      let chart_1=eCharts.init(this.$refs.chart_meter_1);
      let chart_2=eCharts.init(this.$refs.chart_meter_2);
      let chart_3=eCharts.init(this.$refs.chart_meter_3);
      let chart_4=eCharts.init(this.$refs.chart_meter_4);
      let chart_5=eCharts.init(this.$refs.chart_meter_5);
      let chart_6=eCharts.init(this.$refs.chart_meter_6);
      let chart_7=eCharts.init(this.$refs.chart_meter_7);
      let chart_8=eCharts.init(this.$refs.chart_meter_8);
      let chart_9=eCharts.init(this.$refs.chart_meter_9);
      let chart_10=eCharts.init(this.$refs.chart_meter_10);
      let chart_11=eCharts.init(this.$refs.chart_bar_1);
      let chart_12=eCharts.init(this.$refs.chart_bar_2);

      this.chartTimer=setInterval(()=>{
        this.chart_num_1=random(85,90);
        this.chart_num_2=random(85,90);
        this.chart_num_3=random(17000,18000);
        this.chart_num_4=random(7,9);
        this.chart_num_5=random(1,5);
        this.chart_num_6=random(1,5);
        this.chart_num_7=random(90,100);
        this.chart_num_8=random(10,20);
        this.chart_num_9=random(30,50);
        this.chart_num_10=random(7,10);

        option_1.series[0].data[0].value = this.chart_num_1;
        option_1.series[0].max = 90;
        option_2.series[0].data[0].value = this.chart_num_2;
        option_2.series[0].max = 90;
        option_3.series[0].data[0].value = this.chart_num_3;
        option_3.series[0].detail.formatter='{value}'
        option_3.series[0].max = 18000;
        option_4.series[0].data[0].value = this.chart_num_4;
        option_4.series[0].detail.formatter='{value}'
        option_4.series[0].max = 10;

        option_5.series[0].data[0].value = this.chart_num_5;
        option_5.series[0].detail.formatter='{value}'

        option_5.series[0].max = 10;
        option_6.series[0].data[0].value = this.chart_num_6;
        option_6.series[0].max = 10;
        option_7.series[0].data[0].value = this.chart_num_7;
        option_7.series[0].max = 100;
        option_8.series[0].data[0].value = this.chart_num_8;
        option_8.series[0].max = 100;
        option_9.series[0].data[0].value = this.chart_num_9;
        option_9.series[0].max = 100;
        option_10.series[0].data[0].value = this.chart_num_10;

        option_10.series[0].max = 10

        option_11.series[0].data=[random(70,96),random(70,96),random(70,96),random(70,96),random(70,96)];
        option_11.series[1].data=[random(70,96),random(70,96),random(70,96),random(70,96),random(70,96),random(70,96),random(70,96),random(70,96),random(70,96),random(70,96),random(70,96),random(70,96)];
        option_11.series[2].data=[70,70,70,70,70,70,70,70,70,70,70,70];
        option_11.series[3].data=[random(65,95),random(65,95),random(65,95),random(65,95),random(65,95)];
        option_11.series[4].data=[random(65,95),random(65,95),random(65,95),random(65,95),random(65,95)];

        option_12.series[0].data=[random(4,9),random(4,9),random(4,9),random(4,9),random(4,9)];
        option_12.series[1].data=[random(4,9),random(4,9),random(4,9),random(4,9),random(4,9),random(4,9),random(4,9),random(4,9),random(4,9)];
        option_12.series[2].data=[7,7,7,7,7,7,7,7,7,7,7,7];
        option_12.series[3].data=[random(3,7),random(3,7),random(3,7),random(3,7),random(3,7)];
        option_12.series[4].data=[random(3,7),random(3,7),random(3,7),random(3,7),random(3,7)];

        chart_1.setOption(option_1, true);
        chart_2.setOption(option_2, true);
        chart_3.setOption(option_3, true);
        chart_4.setOption(option_4, true);
        chart_5.setOption(option_5, true);
        chart_6.setOption(option_6, true);
        chart_7.setOption(option_7, true);
        chart_8.setOption(option_8, true);
        chart_9.setOption(option_9, true);
        chart_10.setOption(option_10, true);
        chart_11.setOption(option_11, true);
        chart_12.setOption(option_12, true);

      },2000)

    },
    beforeDestroy(){
      clearInterval(this.chartTimer)
      clearInterval(this.timer)
    }
  }

</script>
