<style lang="less">
  .title-hide{
  .head .title_second{
    display: none;
  }
  }
  .sum{
    .title{
      width: calc(100% - 40px);
      height: 30px;
      margin: 5px 0 0 20px;
    }
    .contents{
      width: calc(100% - 40px);
      height: 660px;
      margin: 0 0 0 20px;
      background: url("../assets/image/sum.png");
      background-size: 100% 100%;
    }
  }
</style>
<template>
  <div class="con title-hide">
    <head-title :headTip="headTip">
    </head-title>
    <div class="sum main">

      <div class="title">
        <p class="font_style_1">2018年全院总收入统计表</p>
      </div>
      <div class="contents"></div>
    </div>
  </div>
</template>
<script>
  import headTitle from '@/components/head'
  import {router} from '@/tool/tool'
  export default{
    data () {
      return {
        headTip:""
      }
    },
    components:{
      headTitle,
    },
    activated () {
      router('/achievements',this);
    },
    mounted () {

    }

  }
</script>
