<style lang="less">
  .operation{
  .title-third-1{
    position: relative;
    float: left;
    width: calc(50% - 10px);
    height: 25px;
    margin-left: 10px;
    overflow:hidden;
  }
  .title-third-2{
    position: relative;
    float: left;
    width: 50%;
    height: 25px;
    overflow:hidden;
  }
  .title-third-2-p{
    float: left;
    width: 250px;
    height: 25px;
  }
  .title-button1{
    float: right;
    margin-top: 6px;
    margin-bottom: 2px;
    margin-right: 15px;
    width: 100px;
    height: 17px;
    line-height: 17px;
    vertical-align: middle;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    font-size: 12px;
  }
  .contents{
    margin:0 10px 10px;
  }
  .right1{
    float: left;
    width: calc(50% - 5px);
    margin-right: 5px;
    margin-bottom: 10px;
    height: 320px;
  }
  .right2{
    float: left;
    width: calc(50% - 5px);
    margin-right: 5px;
    height: 320px;
    background: url("../assets/image/border_1.png");
    background-size: 100% 100%;
  }
  .left{
    float: left;
    width: calc(50% - 10px);
    margin-right: 10px;
    height: 650px;
    background: url("../assets/image/border_1.png");
    background-size: 100% 100%;
    .content1{
      width: calc(100% - 20px);
      height: 272px;
      margin: 10px 0px 20px 10px;
      background: url("../assets/image/tree_2.png");
      background-size: 100% 100%;
    }
    .content2{
      width: 100%;
      height: 348px;
      .content-head{
        position: relative;
        float: left;
        padding: 10px 0 0 5px;
        width: 100%;
        height: 38px;
        overflow:hidden;
        .title-button2{
          float: right;
          margin-top: 6px;
          margin-bottom: 2px;
          margin-right: 15px;
          width: 140px;
          height: 17px;
          line-height: 17px;
          vertical-align: middle;
          text-align: center;
          background-color: white;
          border-radius: 3px;
          font-size: 12px;
        }
      }
      .content{
        float: left;
        width: 100%;
        height: 310px;
      }
    }
  }


  .content-head4{
    position: relative;
    overflow:hidden;
    width: 100%;
    height: 30px;
  }
  .content-head4-title{
    position: relative;
    float: left;
    width: 100%;
    height: 30px;
    text-align: center;
  }
  .content-content4{
    position: relative;
    overflow:hidden;
    width: 100%;
    height: 220px;
  }
  .content-footer4{
    margin-left:300px;
    overflow:hidden;
    height: 40px;
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
  .select1{
    float: right;
    margin-top: 15px;
    margin-right: 15px;
    width: 70px;
    height: 20px;
  }
  .span1{
    float: right;
    margin-top: 14px;
    margin-right: 5px;
    color: #ffffff;
  }
  .top-line{
    border-top: 1px solid #ffffff;
  }
  }
</style>
<template>
  <div class="con">
    <div class="con">
      <head-title :headTip="headTip">
        <head-select slot="headSelect"></head-select>
      </head-title>
      <div class="operation main">
        <div class="nav-1">
          <div class="title-third-1">
            <p class="font_style_1">设备工作量概况</p>
          </div>
          <div class="title-third-2">
            <p class="title-third-2-p font_style_1">设备工作量统计</p>
            <div class="title-button1">
              <p>设备工作量统计明细</p>
            </div>
          </div>
        </div>
        <div class="contents">
          <div class="left">
            <div class="content1"></div>
            <div class="content2 top-line">
              <div class="content-head">
                <p class="title-third-2-p font_style_1">住院科室综合得分排名(城保)</p>
                <div class="title-button2">
                  <p>设备检查项目统计明细</p>
                </div>
              </div>
              <div class="content">
                <table-list :tableData="tableData1"></table-list>
              </div>
            </div>
          </div>
          <div class="right1">
            <table-list :tableData="tableData"></table-list>
          </div>
          <div class="right2">
            <div class="content-head4">
              <select class="select1">
                <option value ="CT">CT</option>
              </select>
              <span class="span1">设备类型</span>
            </div>
            <div class="content-head4-title">
              <p class="font-size-18 text_color_1">CT_工作量趋势</p>
            </div>
            <div class="content-content4" ref="chart_1"></div>
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
  let tableData1=[
    ['序号','检查项目名称','总工作量','门诊工作量','急诊工作量','住院工作量','体检工作量'],
    ['合计','心房颤动介入治疗','5,321','1,779','1,014','5,321','1,120'],
    ['1','心力衰竭','3,226','1,055','1,621','3,226','83'],
    ['2','急性ST段抬高心肌梗塞','2,239','668','605','2,239','4'],
    ['3','慢性心绞痛介入治疗','1,221','740','4','1,221','0'],
    ['4','病态心房结综合征','864','478','95','864','0'],
    ['5','高血压','765','142','529','88','4'],
    ['6','心房颤动介入治疗','704','704','414','704','10'],
    ['7','慢性心绞痛介入治疗','667','667','98','667','76']
  ];
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
      max:25000,
      axisLabel: {
        formatter: '{value}'
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
      position: 'right',
      axisLabel: {
        formatter: ' '
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
      }
    ]
  };

  export default{
    data () {
      return {
        headTip:'全院医保概览',
        tableData,
        tableData1,
        selectLight:{
          selectOne:false,
          one:'',
          selectTwo:false,
          two:'',
          selectThree:false,
          three:'',
          selectFour:true,
          four:'当期',
          selectFive:true,
          five:'同期',
          selectSix:false,
          six:''
        },
      }
    },
    components:{
      headTitle,
      tableList,
      headSelect,
      indicatorLight
    },
    mounted () {
      let chart=eCharts.init(this.$refs.chart_1);
      setInterval(()=>{
        option.series[0].data=[random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000)];
        option.series[1].data=[random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000),random(15000,21000)];
        chart.setOption(option,true);

      },2000)

    }
  }
</script>
