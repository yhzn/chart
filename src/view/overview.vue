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
               span{
                 display: inline-block;
                 padding:0 5px;
                 border-radius: 5px;
                 color: #000;
                 width:auto;
                 background:#cdcdcd;font-size:12px;
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
          margin:60px auto;
          background:#61a8d9;
          &:nth-child(2){
            background:#fff;
            color:#000;
          }
        }

      }
      .right{
        margin-left:102px;
        height:100%;
      }
    }

  }

</style>
<template>
    <div class="con">
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
                   <div class="chart-container"></div>
                   <p>当期<span>88%</span></p>
                   <p>同期<span>70%</span></p>
                 </li>
                 <li>
                   <p><span>完成数占出院人数比</span></p>
                   <div class="chart-container"></div>
                   <p>当期<span>88%</span></p>
                   <p>同期<span>27%</span></p>
                 </li>
                 <li>
                   <p><span>均次费用</span></p>
                   <div class="chart-container"></div>
                   <p>当期<span>17,148</span></p>
                   <p>同期<span>18,602</span></p>
                 </li>
                 <li>
                   <p><span>平均住院日</span></p>
                   <div class="chart-container"></div>
                   <p>当期<span>6.7</span></p>
                   <p>同期<span>7.1</span></p>
                 </li>
                 <li>
                   <p><span>术前平均住院日</span></p>
                   <div class="chart-container"></div>
                   <p>当期<span>1.2</span></p>
                   <p>同期<span>1.7</span></p>
                 </li>
               </ul>
               <ul class="clearfix">
                <li>
                  <p><span>变异率</span></p>
                  <div class="chart-container"></div>
                  <p>当期<span>2%</span></p>
                  <p>同期<span>3%</span></p>
                </li>
                <li>
                  <p><span>完成率</span></p>
                  <div class="chart-container"></div>
                  <p>当期<span>98%</span></p>
                  <p>同期<span>97%</span></p>
                </li>
                <li>
                  <p><span>均次费用</span></p>
                  <div class="chart-container"></div>
                  <p>当期<span>19%</span></p>
                  <p>同期<span>25%</span></p>
                </li>
                <li>
                  <p><span>均次费用</span></p>
                  <div class="chart-container"></div>
                  <p>当期<span>34%</span></p>
                  <p>同期<span>32%</span></p>
                </li>
                <li>
                  <p><span>均次费用</span></p>
                  <div class="chart-container"></div>
                  <p>当期<span>8%</span></p>
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
              <div class="right"></div>
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
              <div class="chart-main clearfix">
              </div>
              <div class="ind-con">
                <indicator-light :selectLight="selectLight"></indicator-light>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import eCharts from 'echarts'
  import {random, clone} from '@/tool/tool'
  import rj from '@/assets/image/rj.jpg'
  import pj from '@/assets/image/pj.jpg'

  import headTitle from '@/components/head'
  import headSelect from '@/components/head-select'
  import tableList from '@/components/table-list'
  import indicatorLight from '@/components/indicator'

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
  export default {
    data () {
      return {
        tableData,
        headTip:'临床路径概览',
        selectLight:{
          selectOne:true,
          one:'同期',
          selectTwo:true,
          two:'当期',
          selectThree:true,
          three:'指标',
          selectFour:true,
          four:'医保',
          selectFive:true,
          five:'指导'
        },
        rj,
        pj,
      }
    },
    components:{
      headTitle,
      headSelect,
      tableList,
      indicatorLight
    }
  }

</script>
