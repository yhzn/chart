<style lang="less">
.surver{
  color:#fff;
  .title {
    text-align: center;
    margin-bottom: 10px;
  }
  .tab{
    margin:0 auto 10px;
    height: 36px;
    padding-top: 10px;
    width: 292px;
    li{
      float:left;
      background:#f7f7f7;
      padding:2px 10px;
      border-radius: 5px;
      color:#868686;
      border:1px solid #afafaf;
    }
  }
  .left-con{
    float:left;
    width: calc( 50% - 15px );
    margin-left:10px;
    height:650px;
    .left-1{
      height:420px;
      margin:10px;
      div{
        padding:5px;
        height: calc(100% - 10px);
        img{
          width:calc( 100% - 10px );
          height:calc( 100% - 10px );
        }
      }
    }
    .left-2 {
      border-top: 1px solid #e0e3ed;
      .left-2-l {
        float: left;
        width: 43%;
        border-right: 1px solid #e0e3ed;
        padding-top: 10px;
        box-sizing: border-box;
        .chart-con{
          ul{
            float:right;
            margin-right:5px;
            span{
              display: inline-block;
              margin-right:5px;
              width:12px;
              height:12px;
            }
          }
          .chart{
            margin-right:160px;
            height:130px;
          }
        }
        .left-2-f{
          width:120px;
          margin:0 auto;
          li{
            float:left;
            border-radius: 50%;
            margin-right:10px;
            span{
                display: inline-block;
                margin-right:5px;
                float:left;
                width:12px;
                height:12px;
                background:#fff;
                margin-top:5px;
                border-radius: 50%;
                span{
                  margin-top:2px;
                  margin-left:2px;
                  margin-right:0px;
                  width:8px;
                  height:8px;
                  background:#1d8be5;
                }
            }
            &:nth-child(2){
              span{
                span{
                  background:#13236f;
                }
              }
            }

          }
        }

      }
      .left-2-r{
        margin-left:43%;
        .detail-icon{
          width:250px;
          float:right;
          ul{
            float:left;
            margin-right:5px;
            span{
              display: inline-block;
              margin-right:5px;
              width:12px;
              height:12px;
            }
          }
          .rate{
            margin-left:100px;
            .pro{
              position: relative;
              padding:2px;
              width:100px;
              height:22px;
              border:1px solid #8c8a9a;
              background: url("../assets/image/progress_bar.png") no-repeat;
              background-size: 100% 100%;
              background-origin:content-box;

              .mark{
                float:right;
                width:50%;
                height:100%;
                background:#0d2372;
              }
              p{
                position: absolute;
                right: -28px;
              }
            }
          }
        }
        .chart{
          height:120px;
          margin-right:252px;
        }


      }
    }
  }
  .right-con{
    float:right;
    width: calc( 50% - 15px );
    margin-right:10px;
    .chart{
      margin-bottom:10px;
    }
    .left{
      float:left;
      padding-top:5px;
      width:130px;
      height:100%;
      border-right: 1px solid #e0e3ed;
      .chart{
        height:60px;
      }
      p{
        width:105px;
        padding:2px 5px;
        border-radius: 4px;
        margin: 0 auto 10px;
        text-align: center;
        background:#f8f8f8;
        color:#000;
      }
    }
    .right-1{
      height:320px;
      padding-top:10px;
      margin-bottom:10px;
      .title{
        font-size:16px;
      }
      .right{
        margin-left:130px;
        .chart{
          height:236px;
        }
      }
      &:nth-child(2){
        .chart{
           height:110px;
        }
        .right{
          .chart{
            height:236px;
          }
        }
        .tab{
          width:425px;
        }
      }
    }
    .right-2{
      height:320px;
    }
    .right-f{
      margin-left:30px;
    }
  }
}
</style>
<template>
  <div class="con surver-head" @click="flag===true ? start() : pause()">
    <prompt-box :flag="flag" v-if="show"></prompt-box>
    <head-title :headTip="headTip">
      <div slot="headSelect"></div>
    </head-title>
    <div class="surver main clearfix">
      <div class="left-con border-img">
          <div class="left-1">
            <div><img src="../assets/image/10_03.png" alt=""></div>
          </div>
          <div class="left-2 clearfix">
            <div class="left-2-l">
              <div class="title">全院学历及职称分布</div>
              <div class="chart-con clearfix">
                <ul class="icon">
                  <li><span class="color_5"></span>博士研究生毕业：{{chart_num_1_1}}</li>
                  <li><span class="color_8"></span>硕士研究生毕业：{{chart_num_1_2}}</li>
                  <li><span class="color_7"></span>大学本科：{{chart_num_1_3}}</li>
                  <li><span class="color_2"></span>专科毕业：{{chart_num_1_4}}</li>
                  <li><span class="color_10"></span>中专及以下：{{chart_num_1_5}}</li>
                </ul>
                <div class="chart" ref="chart_1"></div>
              </div>
              <ul class="left-2-f clearfix">
                <li><span><span></span></span>学历</li>
                <li><span><span></span></span>学位</li>
              </ul>

            </div>
            <div class="left-2-r">
              <ul class="tab clearfix">
                <li>职称分布</li>
                <li>详细职称分布</li>
                <li>教学职称分布</li>
              </ul>
              <div class="chart-con clearfix">
                <div class="detail-icon clearfix">
                   <ul class="icon">
                     <li><span class="color_3"></span>正高：{{chart_num_2_1}}</li>
                     <li><span class="color_8"></span>副高：{{chart_num_2_2}}</li>
                     <li><span class="color_5"></span>中级：{{chart_num_2_3}}</li>
                     <li><span class="color_4"></span>初级：{{chart_num_2_4}}</li>
                     <li><span class="color_2"></span>其他：{{chart_num_2_5}}</li>
                   </ul>
                   <div class="rate">
                     <div>
                       <P>正高-具有资格:</P>
                       <div class="pro">
                         <p>{{chart_num_2_6}}</p>
                         <div class="mark" :style="{'width':r_1+'%'}"></div>
                       </div>
                     </div>
                     <div>
                       <p>正高-实际聘任:</p>
                       <div class="pro">
                         <p>{{chart_num_2_7}}</p>
                         <div class="mark" :style="{'width':r_2+'%'}"></div>
                       </div>
                     </div>
                   </div>
                </div>
                <div class="chart" ref="chart_2">
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="right-con">
         <div class="right-1 border-img clearfix">
           <div class="left">
             <div>
               <p>入职人员</p>
               <div class="chart" ref="chart_3"></div>
             </div>
             <div>
               <p>主动离职人数</p>
               <div class="chart" ref="chart_4"></div>
             </div>
             <div>
               <p>近3年退休人数</p>
               <div class="chart" ref="chart_5"></div>
             </div>
           </div>
           <div class="right">
             <div class="title">入职/离职/净增趋势</div>
             <div class="chart" ref="chart_6"></div>
             <div class="right-f">
               <indicator-light :selectLight="selectLight"></indicator-light>
             </div>
           </div>
         </div>
        <div class="right-1 border-img clearfix">
          <div class="left">
            <div>
              <p>人力成本总额</p>
              <div class="chart" ref="chart_7"></div>
            </div>
            <div>
              <p>人均收入</p>
              <div class="chart" ref="chart_8"></div>
            </div>

          </div>
          <div class="right">
            <ul class="tab">
              <li>成本总额构成</li>
              <li>成本总额趋势</li>
              <li>收入总额构成</li>
              <li>收入总额趋势</li>
            </ul>
            <div class="chart" ref="chart_9"></div>
            <div class="right-f">
              <indicator-light :selectLight="selectLight_1"></indicator-light>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import eCharts from 'echarts'
  import {random, clone, router} from '@/tool/tool'

  import headTitle from '@/components/head'
  import indicatorLight from '@/components/indicator'
  import promptBox from '@/components/prompt'

  let pieOption = {
    title:{
//      text: '总数',
      textStyle: {
//      fontWeight: 'normal',              //标题颜色
        fontSize:12,
        color: '#fff'
      },
      x: 'center',
      y: '36%'
    },
//    tooltip: {
//      trigger: 'item',
//      formatter: "{a} <br/>{b}: {c} ({d}%)"
//    },
    legend: {
      show:false,
//      orient: 'vertical',
//      x: 'left',
//      data:['直接访问']
    },
    series: [
      {
        name:'访问',
        type:'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
      }
    ]
  };
  let meterOption={
//    tooltip : {
//      formatter: "{a} <br/>{b} : {c}%"
//    },
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
        max:100,
        radius:36, // 半径
        center:['50%','60%'],
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
            color: '#2c98de'
          }
        },
        pointer: {           // 分隔线
          width:5,   // 指针宽度设置
          length:28,
        },
        detail: { // 表盘详情
          show: true,
//          offsetCenter: [0, '80%'], // 数值显示位置
          formatter: '{value}',
          textStyle: {
            fontSize: 14,
            color:'#fff'
          }
        },
        axisLabel: { //刻度标签。
          show:false, // false 去除刻度
        },
        data: [{value: 50, name: ''}]
      }
    ]
  };
  let option={
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
      max:80,
      axisLabel: {
        formatter: '{value}M'
      },
      axisLine:{
        lineStyle:{
          color:'#fff',
          width:1,//  坐标轴宽度 这里是为了突出显示加上的
        }
      }
    },{
      type: 'value',
      min: 0,
      max: 25,
      position: 'right',
      axisLabel: {
        formatter: '{value}K'
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
    }],
    series: [
      {
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
        type:'bar',
        barWidth: '30%',
        barGap: '0',
        color:'#1286ed',
        data:[10, 52, 200, 334, 390, 330, 220]
      },
      {
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
      },
      {
        type:'line',
        barWidth:'30%',
        color:'#6017fc',
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

  let option_1=clone(pieOption);
  let option_2=clone(pieOption);
  let option_3=clone(meterOption);
  let option_4=clone(meterOption);
  let option_5=clone(meterOption);
  let option_6=clone(option);
  let option_7=clone(meterOption);
  let option_8=clone(meterOption);
  let option_9=clone(option);
  option_1.color=['#eb615f', '#9368dc','#2a71ff','#edde05', '#77e79f'];
  option_2.color=['#8be87e', '#9368dc','#eb615f','#1286ed','#edde05'];

  export default {
    data () {
      return {
        headTip:'人力资源 >> 员工性质概览',
        selectLight:{
          selectOne:true,
          one:'检验金额-当期',
          selectTwo:true,
          two:'检验金额-同期',
          selectThree:false,
          three:'当期指标',
          selectFour:true,
          four:'样本数-当期',
          selectFive:true,
          five:'样本数-同期',
          selectSix:false,
          six:'当期例数'
        },
        selectLight_1:{
          selectOne:false,
          one:' ',
          selectTwo:true,
          two:'人均成本',
          selectThree:false,
          three:' ',
          selectFour:true,
          four:'同期成本',
          selectFive:true,
          five:'成本总额',
          selectSix:false,
          six:' '
        },
        chart_num_1_1:0,
        chart_num_1_2:0,
        chart_num_1_3:0,
        chart_num_1_4:0,
        chart_num_1_5:0,
        chart_num_2_1:0,
        chart_num_2_2:0,
        chart_num_2_3:0,
        chart_num_2_4:0,
        chart_num_2_5:0,
        chart_num_2_6:0,
        chart_num_2_7:0,
        r_1:100,
        r_2:100,
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
      promptBox,
      indicatorLight
    },
//    activated () {
//      router('/hr',this);
//    },
    methods:{
      pause () {
        clearInterval(this.timer);
        if(this.show){
          return false
        }
        this.flag=!this.flag;
        this.show=true;
        this.showTimer=setTimeout(()=>{
          clearTimeout(this.showTimer);
          this.show=false;
        },1500);
      },
      start () {
        if(this.show){
          return false
        }
        this.flag=!this.flag;
        this.show=true;
        this.showTimer=setTimeout(()=>{
          clearTimeout(this.showTimer);
          this.show=false;

        },1500);
        this.timer=setInterval(()=>{
          this.timeCount++;
          console.log(this.timeCount)
          if(this.timeCount>=10){
            clearInterval(this.timer)
            this.$router.push('/hr')
          }
        },1000)
      }


    },

    mounted () {
      this.timer=setInterval(()=>{
        this.timeCount++;
        console.log(this.timeCount)
        if(this.timeCount>=10){
          clearInterval(this.timer)
          this.$router.push('/hr')
        }
      },1000)
      let chart_1 = eCharts.init(this.$refs.chart_1);
      let chart_2 = eCharts.init(this.$refs.chart_2);
      let chart_3 = eCharts.init(this.$refs.chart_3);
      let chart_4 = eCharts.init(this.$refs.chart_4);
      let chart_5 = eCharts.init(this.$refs.chart_5);
      let chart_6 = eCharts.init(this.$refs.chart_6);
      let chart_7 = eCharts.init(this.$refs.chart_7);
      let chart_8 = eCharts.init(this.$refs.chart_8);
      let chart_9 = eCharts.init(this.$refs.chart_9);


      this.chartTimer=setInterval(() => {
        this.chart_num_1_1=random(300,500);
        this.chart_num_1_2=random(400,600);
        this.chart_num_1_3=random(1500,1800);
        this.chart_num_1_4=random(500,700);
        this.chart_num_1_5=random(200,500);
        this.chart_num_2_1=random(150,300);
        this.chart_num_2_2=random(200,300);
        this.chart_num_2_3=random(600,800);
        this.chart_num_2_4=random(1000,1500);
        this.chart_num_2_5=random(700,900);
        this.chart_num_2_6=random(130,150);
        this.chart_num_2_7=random(70,90);
        this.r_1=100-Math.floor((this.chart_num_2_6/this.chart_num_2_1)*100);
        this.r_2=100-Math.floor((this.chart_num_2_7/this.chart_num_2_1)*100);
        option_1.series[0].data=[
          {value:this.chart_num_1_1},
          {value:this.chart_num_1_2},
          {value:this.chart_num_1_3},
          {value:this.chart_num_1_4},
          {value:this.chart_num_1_5},
        ];
        option_2.series[0].data=[
          {value:this.chart_num_2_1},
          {value:this.chart_num_2_2},
          {value:this.chart_num_2_3},
          {value:this.chart_num_2_4},
          {value:this.chart_num_2_5},
        ];
        option_3.series[0].data[0].value=random(60,100);
        option_4.series[0].data[0].value=random(60,100);
        option_5.series[0].data[0].value=random(60,100);
        option_7.series[0].data[0].value=random(60000000,80000000);
        option_7.series[0].max=80000000;
        option_7.series[0].detail.offsetCenter=[0,'100%'];
        option_8.series[0].max=20000;
        option_8.series[0].data[0].value=random(10000,20000);
        option_8.series[0].detail.offsetCenter=[0,'100%'];
        option_6.series[0].data=[random(50,100),random(50,100),random(50,100),random(50,100),random(50,100),random(50,100)];
        option_6.series[1].data=[random(160,30),random(160,30),random(160,30),random(160,30),random(160,30),random(160,30),random(160,30),random(160,30),random(160,30),random(160,30),random(160,30),random(160,30)];
        option_6.series[2].data=[];
        option_6.series[3].data=[random(80,160),random(80,160),random(80,160),random(80,160),random(80,160),random(80,160)];
        option_6.series[4].data=[random(80,160),random(80,160),random(80,160),random(80,160),random(80,160),random(80,160),random(80,160),random(80,160),random(80,160),random(80,160),random(80,160),random(80,160)];
        option_6.series[5].data=[];
        option_6.yAxis[0].max=200;
        option_6.yAxis[0].axisLabel.formatter='{value}';
        option_6.yAxis[1].axisLabel.formatter=' ';

        option_9.series[0].data=[random(50,76),random(50,76),random(50,76),random(50,76),random(50,76),random(50,76),random(50,76),random(50,76),random(50,76),random(50,76),random(50,76),random(50,76)];
        option_9.series[1].data=[];
        option_9.series[2].data=[];
        option_9.series[3].data=[];
        option_9.series[4].data=[random(50,70),random(50,70),random(50,70),random(50,70),random(50,70),random(50,70),random(50,70),random(50,70),random(50,70),random(50,70),random(50,70),random(50,70)];
        option_9.series[5].data=[];





        chart_1.setOption(option_1,true);
        chart_2.setOption(option_2,true);
        chart_3.setOption(option_3,true);
        chart_4.setOption(option_4,true);
        chart_5.setOption(option_5,true);
        chart_6.setOption(option_6,true);
        chart_7.setOption(option_7,true);
        chart_8.setOption(option_8,true);
        chart_9.setOption(option_9,true);


      }, 2000);
    },
    beforeDestroy(){
      clearInterval(this.chartTimer)
      clearInterval(this.timer)
    }
  }

</script>
