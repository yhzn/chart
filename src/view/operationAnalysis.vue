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
        width: 400px;
        height: 400px;
        margin: 130px auto 0;
        .chart2-1{
          position: relative;
          top: -100px;
          width: 100px;
          height: 100px;
          margin: 0 auto 0;
          background: url("../assets/image/operate_1.png");
          background-size: 100% 100%;
        }
        .chart2-2{
          position: relative;
          top: 50px;
          left: 400px;
          width: 100px;
          height: 100px;
          background: url("../assets/image/operate_2.png");
          background-size: 100% 100%;
        }
        .chart2-3{
          position: relative;
          top: 200px;
          width: 100px;
          height: 100px;
          margin: 0 auto 0;
          background: url("../assets/image/operate_3.png");
          background-size: 100% 100%;
        }
        .chart2-4{
          position: relative;
          top: -150px;
          left: -100px;
          width: 100px;
          height: 100px;
          background: url("../assets/image/operate_4.png");
          background-size: 100% 100%;
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
  <div class="con">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headTitle from '@/components/head'
  import headSelect from '@/components/head-select'
  import {router} from '@/tool/tool'

  export default{
    data () {
      return {
        headTip:'院内医疗运营分析',
      }
    },
    components:{
      headTitle,
      headSelect,
    },
    activated () {
      router('/home',this);
    },
    mounted () {
    }
  }
</script>
