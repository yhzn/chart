<style lang="less">
  .dynamic{
    color:#fff;
    .left{
      float:left;
    }
    .right{
      float:right;
    }
    .dynamic-head{
      margin:0 10px 10px;
      .left{
        float:left;
        width:calc( 50% - 5px );
        height:160px;
        .pro{
          height:38px;
        }
        .left-l {
          padding-top:46px;
        }
        .left-r {
          height:100%;
        }
      }
      .right{
        float:right;
        width:calc( 50% - 5px );
        .right-l{
          padding-top:20px;
        }
        .right-r{
          height:160px;
          .chart{
            height:50%;
          }
        }


      }
      .progress-bar-con{
        float:left;
        width:450px;
        .progress-bar-1{
          float:left;
          padding-top:16px;
          width:150px;
          text-align: center;
        }
        .progress-bar-2{
          margin-left:150px;
          width:300px;
        }
      }
      .chart-con{
        margin-left:450px;
      }
      .pro{
        width:100%;
        height:30px;
        border:1px solid #b6b6b6;
        li{
          float:left;
          height:100%;
          &:nth-child(1){
            background:yellow;
          }
          &:nth-child(2){
            background:green;
          }
          &:nth-child(3){
            background:linear-gradient(#393bfa,#868afe)
          }
        }
      }
    }
    .pie-con{
      width:calc(50% - 15px);
      .pie{
        padding:10px;
        margin-bottom:10px;
        p{
          width:110px;
          background:#f1f1f1;
          border-radius: 4px;
          text-align: center;
          color:#000;
        }
        .pie-list{
          float: left;
          width:50%;
          overflow: hidden;
          .chart{
            float:left;
            width:86px;
            height:122px;
          }
          ul{
            margin-left:90px;
            overflow: hidden;
            .title{
              text-align: center;
              margin-bottom:5px;
            }
            li{
              span{
                float:left;
                margin-top:-4px;
                width:30px;
                &:nth-child(2){
                  float:right;
                }
              }
              div{
                margin-left:32px;
                padding:1px;
                height:14px;
                width:166px;
                border-radius: 6px;
                border:1px solid #bec6db;
                background:#a8a8a8 url('../assets/image/pro-bar.png') no-repeat;
                background-origin: content-box;
                background-size: 100% 100%;
                p{
                  float: right;
                  margin-right:-1px;
                  height:10px;
                  width:90%;
                  background:#a8a8a8;
                }
              }
            }
          }
        }
      }

    }


  }

</style>
<template>
  <div class="head-tip con">
    <head-title :headTip="headTip">
      <head-select slot="headSelect"></head-select>
    </head-title>
    <div class="dynamic main">
      <div class="dynamic-head clearfix">
        <div class="left border-img clearfix">
            <div class="left-l progress-bar-con">
              <div class="progress-bar-1">全院动态</div>
              <div class="progress-bar-2">
                <ul class="pro clearfix">
                  <li :style="{'width':pro_0_1+'%'}"></li>
                  <li :style="{'width':pro_0_2+'%'}"></li>
                  <li :style="{'width':pro_0_3+'%'}"></li>
                </ul>
                <indicator-light :selectLight="selectLight_1"></indicator-light>
              </div>
            </div>
            <div class="left-r chart-con" ref="chart_0">
            </div>
        </div>
        <div class="right border-img clearfix">
          <div class="right-l progress-bar-con">
            <div class="clearfix">
              <div class="progress-bar-1">
                本院动态
              </div>
              <div class="progress-bar-2">
                <ul class="pro clearfix">
                  <li  :style="{'width':pro_1_1+'%'}"></li>
                  <li  :style="{'width':pro_1_2+'%'}"></li>
                  <li  :style="{'width':pro_1_3+'%'}"></li>
                </ul>
                <indicator-light :selectLight="selectLight_2"></indicator-light>
              </div>
            </div>
            <div class="clearfix">
              <div class="progress-bar-1">
                本院动态
              </div>
              <div class="progress-bar-2">
              <ul class="pro clearfix">
                <li  :style="{'width':pro_2_1+'%'}"></li>
                <li  :style="{'width':pro_2_2+'%'}"></li>
                <li  :style="{'width':pro_2_3+'%'}"></li>
              </ul>
                <indicator-light :selectLight="selectLight_3"></indicator-light>
              </div>
            </div>
          </div>
          <div class="right-r chart-con">
            <div class="chart" ref="chart_1"></div>
            <div class="chart" ref="chart_2"></div>
          </div>
        </div>
      </div>
       <div class="pie-con left margin-left-10">
         <div class="pie border-img clearfix">
           <p>本院1楼</p>
           <div class="pie-list">
             <div class="chart" ref="chart_3"></div>
             <ul class="clearfix">
               <li class="title">发热门诊</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_3_1}}</span>
                 <div>
                   <p :style="{'width':pro_3_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_3_2}}</span>

                 <div>
                   <p :style="{'width':pro_3_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_3_3}}</span>

                 <div>
                   <p :style="{'width':pro_3_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_4"></div>
             <ul class="clearfix">
               <li class="title">临时房1</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_4_1}}</span>
                 <div>
                   <p :style="{'width':pro_4_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_4_2}}</span>

                 <div>
                   <p :style="{'width':pro_4_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_4_3}}</span>

                 <div>
                   <p :style="{'width':pro_4_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_5"></div>
             <ul class="clearfix">
               <li class="title">肠道门诊</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_5_1}}</span>
                 <div>
                   <p :style="{'width':pro_5_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_5_2}}</span>

                 <div>
                   <p :style="{'width':pro_5_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_5_3}}</span>

                 <div>
                   <p :style="{'width':pro_5_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_6"></div>
             <ul class="clearfix">
               <li class="title">临时房2</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_6_1}}</span>
                 <div>
                   <p :style="{'width':pro_6_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_6_2}}</span>

                 <div>
                   <p :style="{'width':pro_6_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_6_3}}</span>
                 <div>
                   <p :style="{'width':pro_6_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_7"></div>
             <ul class="clearfix">
               <li class="title">儿科</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_7_1}}</span>
                 <div>
                   <p :style="{'width':pro_7_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_7_2}}</span>

                 <div>
                   <p :style="{'width':pro_7_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_7_3}}</span>

                 <div>
                   <p :style="{'width':pro_7_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_8"></div>
             <ul class="clearfix">
               <li class="title">急诊</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_8_1}}</span>
                 <div>
                   <p :style="{'width':pro_8_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_8_2}}</span>

                 <div>
                   <p :style="{'width':pro_8_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_8_3}}</span>

                 <div>
                   <p :style="{'width':pro_8_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
         </div>
         <div class="pie border-img clearfix">
           <p>本院3楼</p>
           <div class="pie-list">
             <div class="chart" ref="chart_9"></div>
             <ul class="clearfix">
               <li class="title">口腔科门诊</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_9_1}}</span>
                 <div>
                   <p :style="{'width':pro_9_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_9_2}}</span>

                 <div>
                   <p :style="{'width':pro_9_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_9_3}}</span>

                 <div>
                   <p :style="{'width':pro_9_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_10"></div>
             <ul class="clearfix">
               <li class="title">空腔科特需</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_10_1}}</span>
                 <div>
                   <p :style="{'width':pro_10_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_10_2}}</span>

                 <div>
                   <p :style="{'width':pro_10_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_10_3}}</span>
                 <div>
                   <p :style="{'width':pro_10_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_11"></div>
             <ul class="clearfix">
               <li class="title">特需门诊</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_11_1}}</span>
                 <div>
                   <p :style="{'width':pro_11_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_11_2}}</span>

                 <div>
                   <p :style="{'width':pro_11_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_11_3}}</span>

                 <div>
                   <p :style="{'width':pro_11_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
         </div>
       </div>
       <div class="pie-con right margin-right-10">
         <div class="pie border-img clearfix">
           <div class="margin-right-10 clearfix">
           <p class="right">本院2楼</p>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_12"></div>
             <ul class="clearfix">
               <li class="title">内科门诊</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_12_1}}</span>
                 <div>
                   <p :style="{'width':pro_12_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_12_2}}</span>

                 <div>
                   <p :style="{'width':pro_12_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_12_3}}</span>

                 <div>
                   <p :style="{'width':pro_12_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_13"></div>
             <ul class="clearfix">
               <li class="title">五官科眼科</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_13_1}}</span>
                 <div>
                   <p :style="{'width':pro_13_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_13_2}}</span>

                 <div>
                   <p :style="{'width':pro_13_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_13_3}}</span>

                 <div>
                   <p :style="{'width':pro_13_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_14"></div>
             <ul class="clearfix">
               <li class="title">外科门诊</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_14_1}}</span>
                 <div>
                   <p :style="{'width':pro_14_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_14_1}}</span>

                 <div>
                   <p :style="{'width':pro_14_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_14_1}}</span>

                 <div>
                   <p :style="{'width':pro_14_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_15"></div>
             <ul class="clearfix">
               <li class="title">运动医学科</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_15_1}}</span>
                 <div>
                   <p :style="{'width':pro_15_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_15_2}}</span>

                 <div>
                   <p :style="{'width':pro_15_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_15_3}}</span>

                 <div>
                   <p :style="{'width':pro_15_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_16"></div>
             <ul class="clearfix">
               <li class="title">妇科门诊</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_16_1}}</span>
                 <div>
                   <p :style="{'width':pro_16_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_16_2}}</span>

                 <div>
                   <p :style="{'width':pro_16_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_16_3}}</span>

                 <div>
                   <p :style="{'width':pro_16_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_17"></div>
             <ul class="clearfix">
               <li class="title">心血管内科</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_17_1}}</span>
                 <div>
                   <p :style="{'width':pro_17_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_17_2}}</span>

                 <div>
                   <p :style="{'width':pro_17_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_17_3}}</span>

                 <div>
                   <p :style="{'width':pro_17_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_18"></div>
             <ul class="clearfix">
               <li class="title">专家门诊</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_18_1}}</span>
                 <div>
                   <p :style="{'width':pro_18_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_18_2}}</span>

                 <div>
                   <p :style="{'width':pro_18_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_18_3}}</span>

                 <div>
                   <p :style="{'width':pro_18_3+'%'}"></p>
                 </div>
               </li>
             </ul>
           </div>
         </div>
         <div class="pie border-img clearfix">
           <div class="margin-right-10 clearfix">
           <p class="right">本院其他</p>
           </div>
           <div class="pie-list">
             <div class="chart" ref="chart_19"></div>
             <ul class="clearfix">
               <li class="title">非诊区</li>
               <li class="clearfix" >
                 <span>候诊</span>
                 <span>{{chart_num_19_1}}</span>
                 <div>
                   <p :style="{'width':pro_19_1+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>就诊</span>
                 <span>{{chart_num_19_2}}</span>

                 <div>
                   <p :style="{'width':pro_19_2+'%'}"></p>
                 </div>
               </li>
               <li class="clearfix">
                 <span>完成</span>
                 <span>{{chart_num_19_3}}</span>
                 <div>
                   <p :style="{'width':pro_19_3+'%'}"></p>
                 </div>
               </li>
             </ul>
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
        max:9000,
        radius:36, // 半径
        center:['50%','55%'],
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

  let pieOption = {
//    title : {
//      text: '某站点用户访问来源',
//      subtext: '纯属虚构',
//      x:'center'
//    },
//    tooltip : {
//      trigger: 'item',
//      formatter: "{a} <br/>{b} : {c} ({d}%)"
//    },
    color:['#ff8569','#01ff00','#2f7ac0'],
    legend: {
      show:false,
      orient: 'vertical',
      left: 'left',
      data: ['A（优）','B（良）','C（中）','D（差）']
    },
    series : [
      {
        name: '',
        type: 'pie',
        radius : 40,
        center: ['50%', '50%'],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label:{
          show:false,
          color:'red'
        }
      }
    ]
  };
  let option_0=clone(meterOption);
  option_0.series[0].radius=56;
  option_0.series[0].pointer={           // 分隔线
        width:6,   // 指针宽度设置
        length:43,
  };
  let option_1=clone(meterOption);
  let option_2=clone(meterOption);
  let option_3=clone(pieOption);
  let option_4=clone(pieOption);
  let option_5=clone(pieOption);
  let option_6=clone(pieOption);
  let option_7=clone(pieOption);
  let option_8=clone(pieOption);
  let option_9=clone(pieOption);
  let option_10=clone(pieOption);
  let option_11=clone(pieOption);
  let option_12=clone(pieOption);
  let option_13=clone(pieOption);
  let option_14=clone(pieOption);
  let option_15=clone(pieOption);
  let option_16=clone(pieOption);
  let option_17=clone(pieOption);
  let option_18=clone(pieOption);
  let option_19=clone(pieOption);
  export default {
    data () {
      return {
        headTip:'门诊>>诊区动态',
        selectLight_1:{
          selectOne:true,
          one:'候诊：0',
          selectTwo:true,
          two:'就诊：0',
          selectThree:true,
          three:'完成：0',
          selectFour:false,
          four:' ',
          selectFive:false,
          five:' ',
          selectSix:false,
          six:' '
        },
        selectLight_2:{
          selectOne:true,
          one:'候诊：0',
          selectTwo:true,
          two:'就诊：0',
          selectThree:true,
          three:'完成:0',
          selectFour:false,
          four:' ',
          selectFive:false,
          five:' ',
          selectSix:false,
          six:' '
        },
        selectLight_3:{
          selectOne:true,
          one:'候诊：0',
          selectTwo:true,
          two:'就诊：0',
          selectThree:true,
          three:'完成：0',
          selectFour:false,
          four:' ',
          selectFive:false,
          five:' ',
          selectSix:false,
          six:' '
        },
        chart_num_0_1:0,
        chart_num_0_2:0,
        chart_num_0_3:0,
        pro_0_1:0,
        pro_0_2:0,
        pro_0_3:0,
        chart_num_1_1:0,
        chart_num_1_2:0,
        chart_num_1_3:0,
        pro_1_1:0,
        pro_1_2:0,
        pro_1_3:0,
        chart_num_2_1:0,
        chart_num_2_2:0,
        chart_num_2_3:0,
        pro_2_1:0,
        pro_2_2:0,
        pro_2_3:0,
        chart_num_3_1:0,
        chart_num_3_2:0,
        chart_num_3_3:0,
        pro_3_1:100,
        pro_3_2:100,
        pro_3_3:100,
        chart_num_4_1:0,
        chart_num_4_2:0,
        chart_num_4_3:0,
        pro_4_1:100,
        pro_4_2:100,
        pro_4_3:100,
        chart_num_5_1:0,
        chart_num_5_2:0,
        chart_num_5_3:0,
        pro_5_1:100,
        pro_5_2:100,
        pro_5_3:100,
        chart_num_6_1:0,
        chart_num_6_2:0,
        chart_num_6_3:0,
        pro_6_1:100,
        pro_6_2:100,
        pro_6_3:100,
        chart_num_7_1:0,
        chart_num_7_2:0,
        chart_num_7_3:0,
        pro_7_1:100,
        pro_7_2:100,
        pro_7_3:100,
        chart_num_8_1:0,
        chart_num_8_2:0,
        chart_num_8_3:0,
        pro_8_1:100,
        pro_8_2:100,
        pro_8_3:100,
        chart_num_9_1:0,
        chart_num_9_2:0,
        chart_num_9_3:0,
        pro_9_1:100,
        pro_9_2:100,
        pro_9_3:100,
        chart_num_10_1:0,
        chart_num_10_2:0,
        chart_num_10_3:0,
        pro_10_1:100,
        pro_10_2:100,
        pro_10_3:100,
        chart_num_11_1:0,
        chart_num_11_2:0,
        chart_num_11_3:0,
        pro_11_1:100,
        pro_11_2:100,
        pro_11_3:100,
        chart_num_12_1:0,
        chart_num_12_2:0,
        chart_num_12_3:0,
        pro_12_1:100,
        pro_12_2:100,
        pro_12_3:100,
        chart_num_13_1:0,
        chart_num_13_2:0,
        chart_num_13_3:0,
        pro_13_1:100,
        pro_13_2:100,
        pro_13_3:100,
        chart_num_14_1:0,
        chart_num_14_2:0,
        chart_num_14_3:0,
        pro_14_1:100,
        pro_14_2:100,
        pro_14_3:100,
        chart_num_15_1:0,
        chart_num_15_2:0,
        chart_num_15_3:0,
        pro_15_1:100,
        pro_15_2:100,
        pro_15_3:100,
        chart_num_16_1:0,
        chart_num_16_2:0,
        chart_num_16_3:0,
        pro_16_1:100,
        pro_16_2:100,
        pro_16_3:100,
        chart_num_17_1:0,
        chart_num_17_2:0,
        chart_num_17_3:0,
        pro_17_1:100,
        pro_17_2:100,
        pro_17_3:100,
        chart_num_18_1:0,
        chart_num_18_2:0,
        chart_num_18_3:0,
        pro_18_1:100,
        pro_18_2:100,
        pro_18_3:100,
        chart_num_19_1:0,
        chart_num_19_2:0,
        chart_num_19_3:0,
        pro_19_1:100,
        pro_19_2:100,
        pro_19_3:100,
        sum_0:0,
        sum_1:0,
        sum_2:0,
        sum_3:0,
        sum_4:0,
        sum_5:0,
        sum_6:0,
        sum_7:0,
        sum_8:0,
        sum_9:0,
        sum_10:0,
        sum_11:0,
        sum_12:0,
        sum_13:0,
        sum_14:0,
        sum_15:0,
        sum_16:0,
        sum_17:0,
        sum_18:0,
        sum_19:0,

      }
    },
    components:{
      headTitle,
      headSelect,
      indicatorLight
    },
    activated () {
      router('/roomDynamic',this);
    },
    mounted () {
      let chart_0 = eCharts.init(this.$refs.chart_0);
      let chart_1 = eCharts.init(this.$refs.chart_1);
      let chart_2 = eCharts.init(this.$refs.chart_2);
      let chart_3 = eCharts.init(this.$refs.chart_3);
      let chart_4 = eCharts.init(this.$refs.chart_4);
      let chart_5 = eCharts.init(this.$refs.chart_5);
      let chart_6 = eCharts.init(this.$refs.chart_6);
      let chart_7 = eCharts.init(this.$refs.chart_7);
      let chart_8 = eCharts.init(this.$refs.chart_8);
      let chart_9 = eCharts.init(this.$refs.chart_9);
      let chart_10 = eCharts.init(this.$refs.chart_10);
      let chart_11 = eCharts.init(this.$refs.chart_11);
      let chart_12 = eCharts.init(this.$refs.chart_12);
      let chart_13 = eCharts.init(this.$refs.chart_13);
      let chart_14 = eCharts.init(this.$refs.chart_14);
      let chart_15 = eCharts.init(this.$refs.chart_15);
      let chart_16 = eCharts.init(this.$refs.chart_16);
      let chart_17 = eCharts.init(this.$refs.chart_17);
      let chart_18 = eCharts.init(this.$refs.chart_18);
      let chart_19 = eCharts.init(this.$refs.chart_19);


      setInterval(()=>{
      this.chart_num_0_1=random(10,50);
      this.chart_num_0_2=random(10,50);
      this.chart_num_0_3=random(6000,9000);
      this.sum_0=this.chart_num_0_1+this.chart_num_0_2+this.chart_num_0_3;
      this.pro_0_2=Math.floor((this.chart_num_0_2/this.sum_0)*100);
      this.pro_0_1=Math.floor((this.chart_num_0_1/this.sum_0)*100);
      this.pro_0_3=100-this.pro_0_2-this.pro_0_1;
      this.selectLight_1.one='候诊：'+this.chart_num_0_1;
      this.selectLight_1.two='候诊：'+this.chart_num_0_2;
      this.selectLight_1.three='候诊：'+this.chart_num_0_3;
      option_0.series[0].data[0].value=this.chart_num_0_3;

      this.chart_num_1_1=random(10,50);
      this.chart_num_1_2=random(10,50);
      this.chart_num_1_3=random(3000,6000);
      this.sum_1=this.chart_num_0_1+this.chart_num_1_2+this.chart_num_1_3;
      this.pro_1_2=Math.floor((this.chart_num_1_2/this.sum_1)*100);
      this.pro_1_1=Math.floor((this.chart_num_1_1/this.sum_1)*100);
      this.pro_1_3=100-this.pro_1_2-this.pro_1_1;
      this.selectLight_2.one='候诊：'+this.chart_num_1_1;
      this.selectLight_2.two='候诊：'+this.chart_num_1_2;
      this.selectLight_2.three='候诊：'+this.chart_num_1_3;
      option_1.series[0].data[0].value=this.chart_num_1_3;

      this.chart_num_2_1=random(10,50);
      this.chart_num_2_2=random(10,50);
      this.chart_num_2_3=random(3000,6000);
      this.sum_2=this.chart_num_0_1+this.chart_num_2_2+this.chart_num_2_3;
      this.pro_2_2=Math.floor((this.chart_num_2_2/this.sum_2)*100);
      this.pro_2_1=Math.floor((this.chart_num_2_1/this.sum_2)*100);
      this.pro_2_3=100-this.pro_2_2-this.pro_2_1;
      this.selectLight_3.one='候诊：'+this.chart_num_2_1;
      this.selectLight_3.two='候诊：'+this.chart_num_2_2;
      this.selectLight_3.three='候诊：'+this.chart_num_2_3;
      option_2.series[0].data[0].value=this.chart_num_2_3;

      this.chart_num_3_1=random(10,50);
      this.chart_num_3_2=random(10,50);
      this.chart_num_3_3=random(100,600);
      this.sum_3=this.chart_num_3_1+this.chart_num_3_2+this.chart_num_3_3;
      this.pro_3_1=100-Math.floor((this.chart_num_3_1/this.sum_3)*100);
      this.pro_3_2=100-Math.floor((this.chart_num_3_2/this.sum_3)*100);
      this.pro_3_3=100-Math.floor((this.chart_num_3_3/this.sum_3)*100);


      this.chart_num_4_1=random(10,50);
      this.chart_num_4_2=random(10,50);
      this.chart_num_4_3=random(100,600);
      this.sum_4=this.chart_num_4_1+this.chart_num_4_2+this.chart_num_4_3;
      this.pro_4_1=100-Math.floor((this.chart_num_4_1/this.sum_4)*100);
      this.pro_4_2=100-Math.floor((this.chart_num_4_2/this.sum_4)*100);
      this.pro_4_3=100-Math.floor((this.chart_num_4_3/this.sum_4)*100);


      this.chart_num_5_1=random(10,50);
      this.chart_num_5_2=random(10,50);
      this.chart_num_5_3=random(100,600);
      this.sum_5=this.chart_num_5_1+this.chart_num_5_2+this.chart_num_5_3;
      this.pro_5_1=100-Math.floor((this.chart_num_5_1/this.sum_5)*100);
      this.pro_5_2=100-Math.floor((this.chart_num_5_2/this.sum_5)*100);
      this.pro_5_3=100-Math.floor((this.chart_num_5_3/this.sum_5)*100);


      this.chart_num_6_1=random(10,50);
      this.chart_num_6_2=random(10,50);
      this.chart_num_6_3=random(100,600);
      this.sum_6=this.chart_num_6_1+this.chart_num_6_2+this.chart_num_6_3;
      this.pro_6_1=100-Math.floor((this.chart_num_6_1/this.sum_6)*100);
      this.pro_6_2=100-Math.floor((this.chart_num_6_2/this.sum_6)*100);
      this.pro_6_3=100-Math.floor((this.chart_num_6_3/this.sum_6)*100);


      this.chart_num_7_1=random(10,50);
      this.chart_num_7_2=random(10,50);
      this.chart_num_7_3=random(100,600);
      this.sum_7=this.chart_num_7_1+this.chart_num_7_2+this.chart_num_7_3;
      this.pro_7_1=100-Math.floor((this.chart_num_7_1/this.sum_7)*100);
      this.pro_7_2=100-Math.floor((this.chart_num_7_2/this.sum_7)*100);
      this.pro_7_3=100-Math.floor((this.chart_num_7_3/this.sum_7)*100);


      this.chart_num_8_1=random(10,50);
      this.chart_num_8_2=random(10,50);
      this.chart_num_8_3=random(100,600);
      this.sum_8=this.chart_num_8_1+this.chart_num_8_2+this.chart_num_8_3;
      this.pro_8_1=100-Math.floor((this.chart_num_8_1/this.sum_8)*100);
      this.pro_8_2=100-Math.floor((this.chart_num_8_2/this.sum_8)*100);
      this.pro_8_3=100-Math.floor((this.chart_num_8_3/this.sum_8)*100);


      this.chart_num_9_1=random(10,50);
      this.chart_num_9_2=random(10,50);
      this.chart_num_9_3=random(100,600);
      this.sum_9=this.chart_num_9_1+this.chart_num_9_2+this.chart_num_9_3;
      this.pro_9_1=100-Math.floor((this.chart_num_9_1/this.sum_9)*100);
      this.pro_9_2=100-Math.floor((this.chart_num_9_2/this.sum_9)*100);
      this.pro_9_3=100-Math.floor((this.chart_num_9_3/this.sum_9)*100);


      this.chart_num_10_1=random(10,50);
      this.chart_num_10_2=random(10,50);
      this.chart_num_10_3=random(100,600);
      this.sum_10=this.chart_num_10_1+this.chart_num_10_2+this.chart_num_10_3;
      this.pro_10_1=100-Math.floor((this.chart_num_10_1/this.sum_10)*100);
      this.pro_10_2=100-Math.floor((this.chart_num_10_2/this.sum_10)*100);
      this.pro_10_3=100-Math.floor((this.chart_num_10_3/this.sum_10)*100);


      this.chart_num_11_1=random(10,50);
      this.chart_num_11_2=random(10,50);
      this.chart_num_11_3=random(100,600);
      this.sum_11=this.chart_num_11_1+this.chart_num_11_2+this.chart_num_11_3;
      this.pro_11_1=100-Math.floor((this.chart_num_11_1/this.sum_11)*100);
      this.pro_11_2=100-Math.floor((this.chart_num_11_2/this.sum_11)*100);
      this.pro_11_3=100-Math.floor((this.chart_num_11_3/this.sum_11)*100);


      this.chart_num_12_1=random(10,50);
      this.chart_num_12_2=random(10,50);
      this.chart_num_12_3=random(100,600);
      this.sum_12=this.chart_num_12_1+this.chart_num_12_2+this.chart_num_12_3;
      this.pro_12_1=100-Math.floor((this.chart_num_12_1/this.sum_12)*100);
      this.pro_12_2=100-Math.floor((this.chart_num_12_2/this.sum_12)*100);
      this.pro_12_3=100-Math.floor((this.chart_num_12_3/this.sum_12)*100);


      this.chart_num_13_1=random(10,50);
      this.chart_num_13_2=random(10,50);
      this.chart_num_13_3=random(100,600);
      this.sum_13=this.chart_num_13_1+this.chart_num_13_2+this.chart_num_13_3;
      this.pro_13_1=100-Math.floor((this.chart_num_13_1/this.sum_13)*100);
      this.pro_13_2=100-Math.floor((this.chart_num_13_2/this.sum_13)*100);
      this.pro_13_3=100-Math.floor((this.chart_num_13_3/this.sum_13)*100);


      this.chart_num_14_1=random(10,50);
      this.chart_num_14_2=random(10,50);
      this.chart_num_14_3=random(100,600);
      this.sum_14=this.chart_num_14_1+this.chart_num_14_2+this.chart_num_14_3;
      this.pro_14_1=100-Math.floor((this.chart_num_14_1/this.sum_14)*100);
      this.pro_14_2=100-Math.floor((this.chart_num_14_2/this.sum_14)*100);
      this.pro_14_3=100-Math.floor((this.chart_num_14_3/this.sum_14)*100);


      this.chart_num_15_1=random(10,50);
      this.chart_num_15_2=random(10,50);
      this.chart_num_15_3=random(100,600);
      this.sum_15=this.chart_num_15_1+this.chart_num_15_2+this.chart_num_15_3;
      this.pro_15_1=100-Math.floor((this.chart_num_15_1/this.sum_15)*100);
      this.pro_15_2=100-Math.floor((this.chart_num_15_2/this.sum_15)*100);
      this.pro_15_3=100-Math.floor((this.chart_num_15_3/this.sum_15)*100);


      this.chart_num_16_1=random(10,50);
      this.chart_num_16_2=random(10,50);
      this.chart_num_16_3=random(100,600);
      this.sum_16=this.chart_num_16_1+this.chart_num_16_2+this.chart_num_16_3;
      this.pro_16_1=100-Math.floor((this.chart_num_16_1/this.sum_16)*100);
      this.pro_16_2=100-Math.floor((this.chart_num_16_2/this.sum_16)*100);
      this.pro_16_3=100-Math.floor((this.chart_num_16_3/this.sum_16)*100);


      this.chart_num_17_1=random(10,50);
      this.chart_num_17_2=random(10,50);
      this.chart_num_17_3=random(100,600);
      this.sum_17=this.chart_num_17_1+this.chart_num_17_2+this.chart_num_17_3;
      this.pro_17_1=100-Math.floor((this.chart_num_17_1/this.sum_17)*100);
      this.pro_17_2=100-Math.floor((this.chart_num_17_2/this.sum_17)*100);
      this.pro_17_3=100-Math.floor((this.chart_num_17_3/this.sum_17)*100);


      this.chart_num_18_1=random(10,50);
      this.chart_num_18_2=random(10,50);
      this.chart_num_18_3=random(100,600);
      this.sum_18=this.chart_num_18_1+this.chart_num_18_2+this.chart_num_18_3;
      this.pro_18_1=100-Math.floor((this.chart_num_18_1/this.sum_18)*100);
      this.pro_18_2=100-Math.floor((this.chart_num_18_2/this.sum_18)*100);
      this.pro_18_3=100-Math.floor((this.chart_num_18_3/this.sum_18)*100);


      this.chart_num_19_1=random(10,50);
      this.chart_num_19_2=random(10,50);
      this.chart_num_19_3=random(100,600);
      this.sum_19=this.chart_num_19_1+this.chart_num_19_2+this.chart_num_19_3;
      this.pro_19_1=100-Math.floor((this.chart_num_19_1/this.sum_19)*100);
      this.pro_19_2=100-Math.floor((this.chart_num_19_2/this.sum_19)*100);
      this.pro_19_3=100-Math.floor((this.chart_num_19_3/this.sum_19)*100);


      option_3.series[0].data=[
        {value:this.chart_num_3_1},
        {value:this.chart_num_3_2},
        {value:this.chart_num_3_3},
      ];
      option_4.series[0].data=[
        {value:this.chart_num_4_1},
        {value:this.chart_num_4_2},
        {value:this.chart_num_4_3},
      ];
      option_5.series[0].data=[
        {value:this.chart_num_5_1},
        {value:this.chart_num_5_2},
        {value:this.chart_num_5_3},
      ];
      option_6.series[0].data=[
        {value:this.chart_num_6_1},
        {value:this.chart_num_6_2},
        {value:this.chart_num_6_3},
      ];
      option_7.series[0].data=[
        {value:this.chart_num_7_1},
        {value:this.chart_num_7_2},
        {value:this.chart_num_7_3},
      ];
      option_8.series[0].data=[
        {value:this.chart_num_8_1},
        {value:this.chart_num_8_2},
        {value:this.chart_num_8_3},
      ];
      option_9.series[0].data=[
        {value:this.chart_num_9_1},
        {value:this.chart_num_9_2},
        {value:this.chart_num_9_3},
      ];
      option_10.series[0].data=[
        {value:this.chart_num_10_1},
        {value:this.chart_num_10_2},
        {value:this.chart_num_10_3},
      ];
      option_11.series[0].data=[
        {value:this.chart_num_11_1},
        {value:this.chart_num_11_2},
        {value:this.chart_num_11_3},
      ];
      option_12.series[0].data=[
        {value:this.chart_num_12_1},
        {value:this.chart_num_12_2},
        {value:this.chart_num_12_3},
      ];
      option_13.series[0].data=[
        {value:this.chart_num_13_1},
        {value:this.chart_num_13_2},
        {value:this.chart_num_13_3},
      ];
      option_14.series[0].data=[
        {value:this.chart_num_14_1},
        {value:this.chart_num_14_2},
        {value:this.chart_num_14_3},
      ];
      option_15.series[0].data=[
        {value:this.chart_num_15_1},
        {value:this.chart_num_15_2},
        {value:this.chart_num_15_3},
      ];
      option_16.series[0].data=[
        {value:this.chart_num_16_1},
        {value:this.chart_num_16_2},
        {value:this.chart_num_16_3},
      ];
      option_17.series[0].data=[
        {value:this.chart_num_17_1},
        {value:this.chart_num_17_2},
        {value:this.chart_num_17_3},
      ];
      option_18.series[0].data=[
        {value:this.chart_num_18_1},
        {value:this.chart_num_18_2},
        {value:this.chart_num_18_3},
      ];
      option_19.series[0].data=[
        {value:this.chart_num_19_1},
        {value:this.chart_num_19_2},
        {value:this.chart_num_19_3},
      ];
      chart_0.setOption(option_0,true);
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
      chart_18.setOption(option_18,true);
      chart_19.setOption(option_19,true);

      },2000);

    }

  }
</script>
