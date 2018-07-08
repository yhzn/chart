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
      <head-select slot="headSelect"></head-select>
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
  import headSelect from '@/components/head-select'
  export default{
    data () {
      return {
      }
    },
    components:{
      headTitle,
    },
    mounted () {

    }

  }
</script>
