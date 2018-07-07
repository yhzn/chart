<style lang="less">
  .head2{
    position: absolute;
    top: 50px;
    right: 50px;
    height: 30px;
    width: 350px;
    color: #000;
    p{
      padding-top: 8px;
    }
  }
  .title1{
    float: right;
    width: 100px;
    height: 30px;
    margin-right: 10px;
    border-radius: 13px;
    background-color: #316cb8;
    font-size: 16px;
    line-height: 30px;
    vertical-align: middle;
    text-align: center;
    -webkit-box-shadow: #000 0px 0px 10px;
    -moz-box-shadow: #000 0px 0px 10px;
    box-shadow: #000 0px 0px 10px;
  }
  .roomDynamic{

    .contents{
      margin: 10px 50px 0 50px;
      width: calc(100% - 100px);
      height: 650px;
      background: url("../assets/image/border_4.png");
      background-size: 100% 100%;
      -webkit-box-shadow: #000 0px 0px 10px;
      -moz-box-shadow: #000 0px 0px 10px;
      box-shadow: #000 0px 0px 10px;
      .footer{
        float: right;
        margin-top: 30px;
        height: 30px;
      }
      .head1{
        position: relative;
        padding-top: 8px;
        margin: 0 20px 0 20px;
        width: 100%;
        height: 50px;
        .p1{
          float: left;
          line-height: 37px;
          vertical-align: middle;
          font-size: 18px;
          color: #5d5514;
        }
        .title2{
          float: left;
          width: 140px;
          height: 28px;
          margin: 2px 0 0 30px;
          border-radius: 13px;
          background-color: #316cb8;
          font-size: 16px;
          line-height: 28px;
          vertical-align: middle;
          text-align: center;
          color: #000;
          -webkit-box-shadow: #000 0px 0px 10px;
          -moz-box-shadow: #000 0px 0px 10px;
          box-shadow: #000 0px 0px 10px;
        }
      }
      .img1{
        width: 1300px;
        height: 580px;
        margin: 0px auto 0;
        background: url("../assets/image/roomDynamic.png");
        background-size: 100% 100%;
      }
    }
  }
</style>
<template>
  <div class="con">
    <head-title :headTip="headTip">
      <div slot="headSelect" class="head2">
        <div class="title1">获取数据</div>
        <div class="title1">选择日期</div>
        <p class="font-size-15">2018年6月27日</p>
      </div>
    </head-title>
    <div class="roomDynamic main">
      <div class="contents">
        <div class="head1">
          <p class="p1">本院1楼诊室实时监控</p>
          <div class="title2">诊室动态详情</div>
        </div>
        <div class="img1">
        </div>
        <div class="footer">
          <indicator-light :selectLight="selectLight"></indicator-light>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headTitle from '@/components/head'
  import headSelect from '@/components/head-select'
  import indicatorLight from '@/components/indicator'
  export default{
    data () {
      return {
        headTip:'动态>>诊室动态',
        selectLight:{
          selectTwo:true,
          two:'状态超时',
          selectThree:true,
          three:'正常',
          selectFour:true,
          four:'当前医生不在诊室',
          selectFive:true,
          five:'候诊人数过多',
          selectSeven:true,
          seven:'未开放',
        },
      }
    },
    components:{
      headTitle,
      headSelect,
      indicatorLight
    },
    mounted () {

    }

  }
</script>
