<style lang="less">
.ins{
.title-third-1{
  position: relative;
  float: left;
  width: calc(50% - 10px);
  height: 25px;
  margin-left: 10px;
  overflow:hidden;
}
.title-third-1-p{
  float: left;
  width: 250px;
  height: 25px;
}
.radio1{
  position: relative;
  float: right;
  margin-top: 7px;
  width: 75px;
  height: 25px;
}
.radio1 p{
  float: left;
  margin-top: -3px;
  margin-left: 3px;
  margin-right: 30px;
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
.radio2{
  position: relative;
  float: right;
  margin: 25px 0 0;
  width: 75px;
  height: 60px;
}
.title-button1{
  float: right;
  margin-top: 6px;
  margin-bottom: 2px;
  margin-right: 5px;
  width: 117px;
  height: 17px;
  line-height: 17px;
  vertical-align: middle;
  text-align: center;
  background-color: white;
  border-radius: 3px;
}
.content-2{
  float: left;
  margin-bottom: 10px;
  width: calc(50% - 15px);
  height: 420px;
  background: url("../assets/image/border_1.png");
  background-size: 100% 100%;
}
.right1{
  float: right;
  width: 250px;
  height: 100%;
  border-left: 1px solid #ffffff;
}
.right1-content{
  width: 250px;
  height: 200px;
  .right{
    float:right;
    width:90px;
    line-height: 200px;
    color:#fff;

  }
  .left{
    margin-right:90px;
  }
}
.left1{
  float: left;
  margin-top:60px;
  margin-left:10px;
  width: calc( 100% - 270px );
  height: 260px;
  background: url("../assets/image/content_tree.png");
  background-size: 100% 100%;
}
.right1-content-head{
  padding-left: 10px;
  height: 30px;
  width: 100%;
}
.right1-content-chart{
  height: 170px;
  width: 100%;
}
.right1-title1{
  position: relative;
  height: 18px;
  margin: 8px auto 4px;
  width: 150px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  line-height: 18px;
  vertical-align: middle;
  background: url("../assets/image/button.png");
  background-size: 100% 100%;
  font-size: 12px;
}
.right1-title2{
  position: relative;
  height: 18px;
  width: calc(100% - 10px);
  margin: 5px auto 2px;
  text-align: center;
  line-height: 18px;
  vertical-align: middle;
  background: url("../assets/image/button.png");
  background-size: 100% 100%;
  font-size: 12px;
  overflow:hidden;
}
.left3-1{
  float: left;
  height: 168px;
  width: 170px;
  padding-top: 32px;
  border-bottom: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
}
.left3-2{
  float: left;
  height: 168px;
  width: 170px;
  padding-top: 32px;
  border-bottom: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
}
.left3-3{
  float: left;
  height: 84px;
  width: 170px;
  padding-top: 16px;
  border-right: 1px solid #ffffff;
}
.right3-1{
  float: right;
  height: 168px;
  width: calc(100% - 170px);
  border-bottom: 1px solid #ffffff;
}
.right3-2{
  float: right;
  height: 168px;
  width: calc(100% - 170px);
  border-bottom: 1px solid #ffffff;

}
.right3-3{
  float: right;
  height: 84px;
  width: calc(100% - 170px);

}
.content-title1{
  width: 55px;
  margin: 0 auto 0;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  vertical-align: middle;
}
.right3-content{
  float: left;
  width: calc(33.3333%);
  height: 84px;
}
.right3-content-chart{
  height: 84px;
  margin-right:92px;
}
.right3-content-text{
  float: right;
  padding-top:10px;
  width: 82px;
  height: 64px;
}
.right3-content-text p{
  margin: 0px 5px 0 0px;
  text-align: right;
  font-size: 13px;
}
.content-head4{
  position: relative;
  overflow:hidden;
  width: 100%;
  height: 60px;
}
.content-head4-title{
  position: relative;
  float: left;
  margin: 0 0 0 40px;
  width: 280px;
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
}
.content-content4{
  position: relative;
  overflow:hidden;
  width: 100%;
  height: 320px;
}
.content-footer4{
  margin-left:30px;
  overflow:hidden;
  height: 40px;
}
.radio_behind_1{
  float: left;
  padding-top: 2px;
  padding-left: 2px;
  height: 14px;
  width: 14px;
  background-color: #ffffff;
  border-radius: 50%;
}
.radio_front_1{
  position: relative;
  height: 10px;
  width: 10px;
  background-color: #2488e8;
  border-radius: 50%;
}
.radio_front_2{
  position: relative;
  height: 10px;
  width: 10px;
  background-color: #0049a7;
  border-radius: 50%;
}
}
</style>
<template>
  <div class="con">
    <div class="con">
      <head-title :headTip="headTip">
        <head-select slot="headSelect"></head-select>
      </head-title>
      <div class="ins main">
        <div class="nav-1">
          <div class="title-third-1">
            <p class="font_style_1">医保金额</p>
          </div>
          <div class="title-third-1">
            <p class="title-third-1-p font_style_1">住院科室综合得分排名(城保)</p>
            <div class="radio1">
              <div class="radio_behind_1">
                <div class="radio_front_2"></div>
              </div>
              <p>住院</p>
            </div>
            <div class="radio1">
              <div class="radio_behind_1">
                <div class="radio_front_1"></div>
              </div>
              <p>门诊</p>
            </div>
            <div class="title-button1">
              <p>科室综合得分排名</p>
            </div>
            <div class="title-button1">
              <p>病种结算金额排名</p>
            </div>
          </div>
        </div>
        <div class="contents-1 color_1">
          <div class="content-2 margin-left-10 margin-right-5">
            <div class="right1">
              <div class="right1-content">
                <div class="right">
                  {{chart_num_1}}
                </div>
                <div class="left">
                  <div class="right1-content-head">
                    <div class="right1-title1">
                      总控医保金额(月)
                    </div>
                  </div>
                  <div class="right1-content-chart" ref="chart_1"></div>
                </div>
              </div>
              <div class="right1-content">
                <div class="right">
                  {{chart_num_2}}
                </div>
                <div class="left">
                <div class="right1-content-head">
                  <div class="right1-title1">
                    总控医保金额累计值(年)
                  </div>
                </div>
                <div class="right1-content-chart" ref="chart_2">

                </div>
                </div>
              </div>
            </div>
            <div class="left1"></div>
          </div>


          <div class="content-2 margin-left-5 margin-right-10">

            <table-list :tableData="tableData"></table-list>
          </div>

          <div class="content-2 margin-left-10 margin-right-5">
            <div class="left3-1">
              <p class="content-title1 text_color_1">门&nbsp;&nbsp;&nbsp;诊城&nbsp;&nbsp;&nbsp;保</p>
            </div>
            <div class="right3-1">
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保金额
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_3}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">38,662,810</p>
                  </div>
                </div>
                <div class="right3-content-chart" ref="chart_3"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保人次
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_4}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">166,914</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_4"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算均次
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_5}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">287</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_5"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药占比
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_6}}%</p>
                  </div>
                  <div>
                    <p class="text_color_10">60%</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_6"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算材料占比
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_7}}%</p>
                  </div>
                  <div>
                    <p class="text_color_10">0.79%</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_7"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药品均次
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_8}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">172</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_8"></div>
              </div>
            </div>
            <div class="left3-2">
              <p class="content-title1 text_color_1">住&nbsp;&nbsp;&nbsp;院城&nbsp;&nbsp;&nbsp;保</p>
            </div>
            <div class="right3-2">
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保金额
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_9}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">38,662,810</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_9"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保人次
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_10}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">4,066</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_10"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算均次
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_11}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">14,288</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_11"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药占比
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_12}}%</p>
                  </div>
                  <div>
                    <p class="text_color_10">23%</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_12"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算材料占比
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_13}}%</p>
                  </div>
                  <div>
                    <p class="text_color_10">29.89%</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_13"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药品均次
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_14}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">3,316</p>
                  </div>
                </div>

                <div class="right3-content-chart" ref="chart_14"></div>
              </div>
            </div>
            <div class="left3-3">
              <p class="content-title1 text_color_1">其&nbsp;&nbsp;&nbsp;他</p>
            </div>
            <div class="right3-3">
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保金额
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_15}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">5,562,568</p>
                  </div>
                </div>
                <div class="right3-content-chart" ref="chart_15"></div>
              </div>
              <div class="right3-content">
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药品金额
                  </div>
                  <div>
                    <p class="text_color_4">{{chart_num_16}}</p>
                  </div>
                  <div>
                    <p class="text_color_10">3,290,368</p>
                  </div>
                </div>
                <div class="right3-content-chart" ref="chart_16"></div>
              </div>
            </div>
          </div>

          <div class="content-2 margin-left-5 margin-right-10">
            <div class="content-head4">
              <p class="content-head4-title font-size-18 text_color_1">门诊总控医保金额与总控人次趋势</p>
              <div class="radio2">
                <div class="radio_behind_1">
                  <div class="radio_front_2"></div>
                </div>
                <p>住院</p>
              </div>
              <div class="radio2">
                <div class="radio_behind_1">
                  <div class="radio_front_1"></div>
                </div>
                <p>门诊</p>
              </div>
            </div>
            <div class="content-content4" ref="chart_17"></div>
            <div class="content-footer4">
              <indicator-light :selectLight="selectLight"></indicator-light>
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
  import headSelect from '@/components/head-select'
  import indicatorLight from '@/components/indicator'
  import tableList from '@/components/table-list'

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
        radius:35, // 半径
        center: ['50%', '50%'],
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
          formatter: '{value}',
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
  let option_11=clone(meterOption);
  let option_12=clone(meterOption);
  let option_13=clone(meterOption);
  let option_14=clone(meterOption);
  let option_15=clone(meterOption);
  let option_16=clone(meterOption);
  option_1.series[0].radius=60;
  option_1.series[0].axisLine.lineStyle.width=20;
  option_1.series[0].splitLine.length=20;
  option_1.series[0].pointer={
      width:7,
      length:38,
  };
  option_2.series[0].radius=60;
  option_2.series[0].axisLine.lineStyle.width=20;
  option_2.series[0].splitLine.length=20;
  option_2.series[0].pointer={
    width:7,
    length:38,
  };
  option_6.series[0].detail.formatter='{value}%';
  option_7.series[0].detail.formatter='{value}%';
  option_12.series[0].detail.formatter='{value}%';
  option_13.series[0].detail.formatter='{value}%';

  option_1.series[0].max = 95426050;
  option_2.series[0].max = 95426050;
  option_3.series[0].max = 50000000;
  option_4.series[0].max = 200000;
  option_5.series[0].max = 500;
  option_6.series[0].max = 100;
  option_7.series[0].max = 100;
  option_8.series[0].max = 500;
  option_9.series[0].max = 42941723;
  option_10.series[0].max = 5000;
  option_11.series[0].max = 20000;
  option_12.series[0].max = 100;
  option_13.series[0].max = 100;
  option_14.series[0].max = 10000;
  option_15.series[0].max = 1000000;
  option_16.series[0].max = 1000000;
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
  let option_17=clone(barOption);
  option_17.yAxis[0].max=15000;
  option_17.yAxis[1]={
    type: 'value',
    name: '',
    min: 0,
    max: 300000,
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
  export default{
      data () {
          return {
            headTip:'全院医保概览',
            tableData,
            selectLight:{
              selectOne:true,
              one:'同期总控医保人次',
              selectTwo:true,
              two:'当期总控医保人次',
              selectThree:false,
              three:'',
              selectFour:true,
              four:'同期总控医保收入',
              selectFive:true,
              five:'当期总控医保收入'
            },
            chart_num_1:'95,426,050',
            chart_num_2:'95,426,050',
            chart_num_3:0,
            chart_num_4:0,
            chart_num_5:0,
            chart_num_6:0,
            chart_num_7:0,
            chart_num_8:0,
            chart_num_9:0,
            chart_num_10:0,
            chart_num_11:0,
            chart_num_12:0,
            chart_num_13:0,
            chart_num_14:0,
            chart_num_15:0,
            chart_num_16:0,

          }
      },
      components:{
        headTitle,
        headSelect,
        indicatorLight,
        tableList
      },
    activated () {
      router('/operation',this,this.timer);

    },
      methods:{},
      mounted () {
        let chart_1=eCharts.init(this.$refs.chart_1,true);
        let chart_2=eCharts.init(this.$refs.chart_2,true);
        let chart_3=eCharts.init(this.$refs.chart_3,true);
        let chart_4=eCharts.init(this.$refs.chart_4,true);
        let chart_5=eCharts.init(this.$refs.chart_5,true);
        let chart_6=eCharts.init(this.$refs.chart_6,true);
        let chart_7=eCharts.init(this.$refs.chart_7,true);
        let chart_8=eCharts.init(this.$refs.chart_8,true);
        let chart_9=eCharts.init(this.$refs.chart_9,true);
        let chart_10=eCharts.init(this.$refs.chart_10,true);
        let chart_11=eCharts.init(this.$refs.chart_11,true);
        let chart_12=eCharts.init(this.$refs.chart_12,true);
        let chart_13=eCharts.init(this.$refs.chart_13,true);
        let chart_14=eCharts.init(this.$refs.chart_14,true);
        let chart_15=eCharts.init(this.$refs.chart_15,true);
        let chart_16=eCharts.init(this.$refs.chart_16,true);
        let chart_17=eCharts.init(this.$refs.chart_17,true);

        setInterval(()=>{
          this.chart_num_3=random(30000000,50000000);
          this.chart_num_4= random(150000,200000);
          this.chart_num_5= random(300,500);
          this.chart_num_6= random(30,60);
          this.chart_num_7= random(30,60);
          this.chart_num_8= random(300,500);
          this.chart_num_9= random(38941723,50941723);
          this.chart_num_10= random(3000,5000);
          this.chart_num_11= random(16000,20000);
          this.chart_num_12= random(30,50);
          this.chart_num_13= random(30,60);
          this.chart_num_14= random(10000,16000);
          this.chart_num_15= random(700000,1000000);
          this.chart_num_16= random(700000,1000000);
          option_1.series[0].data[0].value = random(60000000,100000000);
          option_2.series[0].data[0].value = random(60000000,100000000);
          option_3.series[0].data[0].value = this.chart_num_3;
          option_4.series[0].data[0].value = this.chart_num_4;
          option_5.series[0].data[0].value = this.chart_num_5;
          option_6.series[0].data[0].value = this.chart_num_6;
          option_7.series[0].data[0].value = this.chart_num_7;
          option_8.series[0].data[0].value = this.chart_num_8;
          option_9.series[0].data[0].value = this.chart_num_9;
          option_10.series[0].data[0].value = this.chart_num_10;
          option_11.series[0].data[0].value = this.chart_num_11;
          option_12.series[0].data[0].value = this.chart_num_12;
          option_13.series[0].data[0].value = this.chart_num_13;
          option_14.series[0].data[0].value = this.chart_num_14;
          option_15.series[0].data[0].value = this.chart_num_15;
          option_16.series[0].data[0].value = this.chart_num_16;

          option_17.series[0].data=[random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000)];
          option_17.series[1].data=[random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),5000,0,0,0,0,0,0];
          option_17.series[2].data=[];
          option_17.series[4].data=[random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000)];
          option_17.series[3].data=[random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000)];
          chart_1.setOption(option_1,true);
          chart_2.setOption(option_2,true);
          chart_3.setOption(option_3,true);
          chart_4.setOption(option_4,true);
          chart_5.setOption(option_5,true);
          chart_6.setOption(option_6,true);
          chart_7.setOption(option_7,true);
          chart_8.setOption(option_8,true);
          chart_9.setOption(option_9,true);
          chart_10.setOption(option_10,true);
          chart_11.setOption(option_11,true);
          chart_12.setOption(option_12,true);
          chart_13.setOption(option_13,true);
          chart_14.setOption(option_14,true);
          chart_15.setOption(option_15,true);
          chart_16.setOption(option_16,true);
          chart_17.setOption(option_17,true);

        },2000)



      }
  }
</script>
