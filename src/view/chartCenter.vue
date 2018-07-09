<style lang="less">
  .title-hide{
  .head .title_second{
    display: none;
  }
  }
  .chartCenter{
  .title{
    width: calc(100% - 40px);
    height: 30px;
    margin: 5px 0 0 20px;
  }
  .contents{
    width: calc(100% - 40px);
    height: 660px;
    margin: 0 0 0 20px;
    background: url("../assets/image/chartCenter.png");
    background-size: 100% 100%;
  }
  }
</style>
<template>
  <div class="con title-hide">
    <head-title :headTip="headTip">
    </head-title>
    <div class="chartCenter main">

      <div class="title">
        <p class="font_style_1">2017年08月28日至2017年08月门急诊统计表(按医生)</p>
      </div>
      <div class="contents"></div>
    </div>
  </div>
</template>
<script>
  import headTitle from '@/components/head'
  export default{
    data () {
      return {
          headTip:""
      }
    },
    components:{
      headTitle,
    },
    mounted () {

    }

  }
</script>
