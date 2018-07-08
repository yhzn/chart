<style lang="less">
  .title-hide{
  .head .title_second{
    display: none;
  }
  }
  .mutation{
  .title{
    width: calc(100% - 40px);
    height: 30px;
    margin: 5px 0 0 20px;
  }
  .contents{
    width: calc(100% - 40px);
    height: 660px;
    margin: 0 0 0 20px;
    background: url("../assets/image/mutation.png");
    background-size: 100% 100%;
  }
  }
</style>
<template>
  <div class="con title-hide">
    <head-title :headTip="headTip">
      <head-select slot="headSelect"></head-select>
    </head-title>
    <div class="mutation main">

      <div class="title">
        <p class="font_style_1">2016年10月01日至2016年11月30日全院临床路径卫生经济学指标统计图</p>
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
