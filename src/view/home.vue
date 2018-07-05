<style lang="less">
  .home{
    .title_first{
      /*width:100%;*/
    }

    .title_third_1{
      float:left;
      width: 360px;
      padding-left: 10px;
    }
    .title_third_0{
      margin-left:380px;
    }

    .title_third_2{
      float:left;
    }
    .title_third_3{
      float:right;
      width: 370px;
    }
    .wrap_left{
      float: left;
      margin-left:10px;
      width: 360px;
      height: 300px;
      background: url("../assets/image/a_06.png");
      background-size: 100% 100%;
    }
    .left_content{
      position: relative;
      width: 100%;
      float: left;
      height: 30px;

    }
    .left_content_1{
      position: absolute;
      width: 132px;
      height: 30px;
      left: 10px;
    }
    .left_content_2{
      position: absolute;
      left: 142px;
      width: 47px;
      height: 30px;
    }
    .left_content_3{
      position: absolute;
      left: 189px;
      width: 57px;
      height: 30px;
    }
    .left_content_4{
      position: absolute;
      left: 246px;
      width: 57px;
      height: 30px;
    }
    .left_content_5{
      position: absolute;
      left: 303px;
      width: 57px;
      height: 30px;
    }
    .wrap_right{
      margin-right:10px;
      margin-left: 380px;
      background: url("../assets/image/a_08.png");
      background-size: 100% 100%;
    }
    .right_content{
      float: left;
      padding-top:30px;
      width: 20%;
      height: 300px;
      color:#fff;
      div{
        position: relative;
        text-align: center;
        margin-bottom:20px;
         &:nth-child(1) span{
           padding:3px 5px;
           border-radius: 3px;
           text-align: center;
           color:#000;
           background:#e2e2e2;
         }
         &:nth-child(2){
           height:140px;
           width: 140px;
           margin: 0 auto 10px;
         }
        p span{
          display: inline-block;
          width:60px;
          font-weight: bold;
          color:#0ac5f7;
          margin-left:10px;
        }
      }
    }
    .nav_second{
      margin-left:10px;
      margin-right:10px;
      margin-bottom:10px;

    }
    .title_fourth_1{
      float:left;
      margin-right:5px;
      height: 30px;
      width: 150px;
      background: url("../assets/image/3_22.png");
      background-size: 100% 100%;
    }
    .title_fourth_1 p{
      color: #ffffff;
      text-align: center;
      font-size: 18px;
      vertical-align:middle;
      line-height:30px;
    }
    .title_fourth_2{
      float:left;
      left: 160px;
      height: 30px;
      width: 150px;
      background: url("../assets/image/2.jpg");
      background-size: 100% 100%;
    }
    .title_fourth_2 p{
      text-align: center;
      font-size: 18px;
      vertical-align:middle;
      line-height:30px;
    }
    .button_2{
      float:right;
      height: 30px;
    }
    .footer{
      margin:0 10px 10px;
      height:300px;
      background-color: grey;
      background: url("../assets/image/a_12.png");
      background-size: 100% 100%;
    }
    .select_1 {
      height: 27px;
      width: 110px;
      border: none;
      outline: none;
      /*很关键：将默认的select选择框样式清除*/
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
      /*在选择框的最右侧中间显示小箭头图片*/
      background: url("../assets/image/3_06.png") no-repeat scroll right center transparent;
      background-size: 100% 100%;
      /*为下拉小箭头留出一点位置，避免被文字覆盖*/
      padding-right: 13px;
      padding-left: 5px;
      color: white;
      font-size: 15px;
    }
    .select_2 {
      height: 27px;
      width: 85px;
      border: none;
      outline: none;
      /*很关键：将默认的select选择框样式清除*/
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
      /*在选择框的最右侧中间显示小箭头图片*/
      background: url("../assets/image/3_10.png") no-repeat scroll right center transparent;
      background-size: 100% 100%;
      /*为下拉小箭头留出一点位置，避免被文字覆盖*/
      padding-right: 13px;
      padding-left: 5px;
      color: white;
      font-size: 15px;
    }
    /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
    select::-ms-expand { display: none; }

    .font_style_1{
      color: #ffffff;
      font-size: 18px;
      text-shadow: 0 0 5px #ffffff;
    }
    .font_style_2{
      color: #ffffff;
      font-size: 12px;
      vertical-align:middle;
      line-height:30px;
    }
    .font_style_3{
      color: #aeeff5;
      font-size: 12px;
      vertical-align:middle;
      line-height:25px;
    }
    .font_style_4{
      color: #ffffff;
      font-size: 12px;
      vertical-align:middle;
      line-height:25px;
    }
    button{
      background: url("../assets/image/3_13.png") no-repeat;
      background-size: 100% 100%;
      border:none;
      height: 26px;
      width: 65px;
    }
  }
</style>
<template>
  <div class="con">
    <head-title :headTip="headTip"></head-title>
    <div class="home main">
      <div class="nav_first clearfix">
        <div class="title_third_1">
          <p class="font_style_1">科室病种概况</p>
        </div>
        <div class="title_third_0 clearfix">
          <div class="title_third_2">
            <p class="font_style_1">关键指标</p>
          </div>
          <div class="title_third_3">
            <div class="selects">
              <select class="select_1">
                <option value ="volvo">心血管内科</option>
              </select>
              <select class="select_2">
                <option value ="volvo">2017年</option>
              </select>
              <select class="select_2">
                <option value ="volvo">5月</option>
              </select>
              <button>获取数据</button>
            </div>
          </div>
        </div>

      </div>
      <div class="margin-bottom-10 clearfix">
        <div class="wrap_left">
          <div class="left_content font_style_2">
            <div class="left_content_1">病种名称</div>
            <div class="left_content_2"><p>入径数</p></div>
            <div class="left_content_3">当期均费</div>
            <div class="left_content_4">同期均费</div>
            <div class="left_content_5">均费差额</div>
          </div>
          <div class="left_content font_style_3">
            <div class="left_content_1">心房颤动介入治疗</div>
            <div class="left_content_2"><p>236</p></div>
            <div class="left_content_3">25,059</div>
            <div class="left_content_4">49,258</div>
            <div class="left_content_5">-24,199</div>
          </div>
          <div class="left_content font_style_3">
            <div class="left_content_1">心力衰竭</div>
            <div class="left_content_2">17</div>
            <div class="left_content_3">28,849</div>
            <div class="left_content_4">0</div>
            <div class="left_content_5">20,849</div>
          </div>
          <div class="left_content font_style_4">
            <div class="left_content_1">急性ST段抬高心肌梗塞</div>
            <div class="left_content_2">14</div>
            <div class="left_content_3">35,421</div>
            <div class="left_content_4">0</div>
            <div class="left_content_5">17,903</div>
          </div>
          <div class="left_content font_style_3">
            <div class="left_content_1">慢性心绞痛介入治疗</div>
            <div class="left_content_2">10</div>
            <div class="left_content_3">13,232</div>
            <div class="left_content_4">0</div>
            <div class="left_content_5">-24,199</div>
          </div>
          <div class="left_content font_style_3">
            <div class="left_content_1">病态心房结综合征</div>
            <div class="left_content_2">6</div>
            <div class="left_content_3">53,376</div>
            <div class="left_content_4">0</div>
            <div class="left_content_5">82,972</div>
          </div>
          <div class="left_content font_style_3">
            <div class="left_content_1">高血压</div>
            <div class="left_content_2">1</div>
            <div class="left_content_3">25,059</div>
            <div class="left_content_4">0</div>
            <div class="left_content_5">15,135</div>
          </div>
          <div class="left_content font_style_3">
            <div class="left_content_1">心房颤动介入治疗</div>
            <div class="left_content_2">1</div>
            <div class="left_content_3">47,453</div>
            <div class="left_content_4">0</div>
            <div class="left_content_5">24,199</div>
          </div>
          <div class="left_content font_style_3">
            <div class="left_content_1">慢性心绞痛介入治疗</div>
            <div class="left_content_2">0</div>
            <div class="left_content_3">53,632</div>
            <div class="left_content_4">0</div>
            <div class="left_content_5">24,199</div>
          </div>
          <div class="left_content font_style_3">
            <div class="left_content_1">心力衰竭</div>
            <div class="left_content_2">13</div>
            <div class="left_content_3">25,059</div>
            <div class="left_content_4">0</div>
            <div class="left_content_5">77,480</div>
          </div>
        </div>
        <div class="wrap_right clearfix">
          <div class="right_content">
            <div><span>均次费用</span></div>
            <div ref="meterOne"></div>
            <div>
              <p>同期<span>{{meterOneNum}}</span></p>
              <p>标准值<span>262455</span></p>
            </div>
          </div>
          <div class="right_content">
            <div><span>入径率</span></div>
            <div ref="meterTwo"></div>
            <div>
              <p>同期<span>{{meterTwoNum}}%</span></p>
              <p>标准值<span>70%</span></p>
            </div>

          </div>
          <div class="right_content">
            <div><span>完成数占出院人数比</span></div>
            <div ref="meterThree"></div>
            <div>
              <p>同期<span>{{meterThreeNum}}%</span></p>
              <p>标准值<span>50%</span></p>
            </div>

          </div>
          <div class="right_content">
            <div><span>平均住院日</span></div>
            <div ref="meterFour"></div>
            <div>
              <p>同期<span>{{meterFourNum}}.0</span></p>
              <p>标准值<span>5.5</span></p>
            </div>

          </div>
          <div class="right_content">
            <div><span>术前平均住院日</span></div>
            <div ref="meterFive"></div>
            <div>
              <p>同期<span>{{meterFiveNum}}.0</span></p>
              <p>标准值<span>3.0</span></p>
            </div>

          </div>
        </div>
      </div>

      <div class="nav_second clearfix">
        <div class="title_fourth_1">
          <p>分类费用构成</p>
        </div>
        <div class="title_fourth_2">
          <p>分类费用同比</p>
        </div>
        <div class="button_2">
          <button>查看明细</button>
        </div>
      </div>
      <div class="footer" ref="footer">

      </div>

    </div>

  </div>
</template>
<script>
  import eCharts from 'echarts'
  import {random, clone} from '@/tool/tool'

  import headTitle from '@/components/head'
  export default {
    data () {
      return {
        headTip:'临床路径费用分析',
        meterOneNum:'',
        meterTwoNum:'',
        meterThreeNum:'',
        meterFourNum:'',
        meterFiveNum:'',
      }
    },
    components:{
        headTitle,
    },
    methods:{

    },
    mounted () {
      let eChartFooter=eCharts.init(this.$refs.footer);
      let eChartMeterOne=eCharts.init(this.$refs.meterOne);
      let eChartMeterTwo=eCharts.init(this.$refs.meterTwo);
      let eChartMeterThree=eCharts.init(this.$refs.meterThree);
      let eChartMeterFour=eCharts.init(this.$refs.meterFour);
      let eChartMeterFive=eCharts.init(this.$refs.meterFive);
      let cateOption = {
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            splitLine:{
              show:false
            },
            type : 'category',
            data : ['其他', '药品费', '化验费', '麻醉费', '治疗费', '挂诊费', '手术费','护理费','诊疗费','检查费','材料费','床位费'],
            axisTick: {
              alignWithLabel: true
            },
            axisLine:{
              lineStyle:{
                color:'#fff',
                width:1,//  坐标轴宽度 这里是为了突出显示加上的
              }
            }
          }
        ],
        yAxis : [
          {
            type : 'value',
            name:'单位：人次',
            splitLine:{  // 去掉与坐标轴平行的直线
              show:false
            },
            min: 0,
            max: 1000,
            axisLine:{
              lineStyle:{
                color:'#fff',
                width:1,//  坐标轴宽度 这里是为了突出显示加上的
              }
            }

          }
        ],
        series : [
          {
            name:'费用',
            type:'bar',
            barWidth: '50%',
            color:new eCharts.graphic.LinearGradient(0, 0, 0, 1, [{  // 渐变色


              // 0% 处的颜色
              offset: 0, color: '#82ebfb'  },
              {

                // 100% 处的颜色
                offset: 1, color: '#046cc2'
              }], false),
              itemStyle:{
                normal:{
                  label:{
                    show:true,
                    position:'top',
                    textStyle:{
                      color:'#fff'
                    }
                  }
                }

              }
          }
        ]
      };
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
            radius:68, // 半径
            axisLine: {
              show:true,
              // 属性lineStyle控制线条样式
              lineStyle: {
                // 控制表盘宽度
                width: 20,
                color:[[0.2,'#76e79e'],[0.5,'#ece35d'],[0.7,'#f9a701'],[1, '#f67336']],
//                shadowColor: '#fff', //默认透明
//                shadowBlur: 10

              }
            },
            splitLine: { // 分隔线
              length: 20, // 属性length控制线长
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
              width:7,   // 指针宽度设置
              length:46,
            },
            detail: { // 表盘详情
              show: true,
//              offsetCenter: [0, '80%'], // 数值显示位置
              formatter: '{value}',
              textStyle: {
                fontSize: 18,
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
      let meterOne=clone(meterOption);
      let meterTwo=clone(meterOption);
      let meterThree=clone(meterOption);
      let meterFour=clone(meterOption);
      let meterFive=clone(meterOption);
      setInterval(() => {
        this.meterOneNum=random(0,30000);
        this.meterTwoNum=random(0,100);
        this.meterThreeNum=random(0,100);
        this.meterFourNum=random(0,10);
        this.meterFiveNum=random(0,10);
        cateOption.series[0].data=[random(300,900), random(300,900), random(300,900), random(300,900), random(300,900), random(300,900), random(300,900), random(300,900), random(300,900), random(300,900), random(300,900), random(300,900)
    ]
        meterOne.series[0].data[0].value = this.meterOneNum;
        meterOne.series[0].max = 30000;

        meterTwo.series[0].data[0].value = this.meterTwoNum;
        meterTwo.series[0].detail.formatter='{value}%';
        meterTwo.series[0].max = 100;

        meterThree.series[0].data[0].value = this.meterThreeNum;
        meterThree.series[0].detail.formatter='{value}%';
        meterThree.series[0].max = 100;

        meterFour.series[0].data[0].value = this.meterFourNum;
        meterFour.series[0].max = 10;

        meterFive.series[0].data[0].value = this.meterFiveNum;
        meterFive.series[0].max = 10;

        eChartFooter.setOption(cateOption, true);
        eChartMeterOne.setOption(meterOne, true);
        eChartMeterTwo.setOption(meterTwo, true);
        eChartMeterThree.setOption(meterThree, true);
        eChartMeterFour.setOption(meterFour, true);
        eChartMeterFive.setOption(meterFive, true);
      },2000)
      window.onresize=function(){
        eChartFooter.resize();
        eChartMeterOne.resize();
        eChartMeterTwo.resize();
        eChartMeterThree.resize();
        eChartMeterFour.resize();
        eChartMeterFive.resize();
      }


    }
  }
</script>
