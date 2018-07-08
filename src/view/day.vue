<style lang="less">
  .title-hide{
  .head .title_second{
    display: none;
  }
  }
  .day{
  .title{
    width: calc(100% - 40px);
    height: 30px;
    margin: 5px 0 0 20px;
  }
  .contents{
    width: calc(100% - 40px);
    height: 660px;
    margin: 0 0 0 20px;
    background: url("../assets/image/day.png");
    background-size: 100% 100%;
  }
  }
</style>
<template>
  <div class="con title-hide">
    <head-title :headTip="headTip">
      <head-select slot="headSelect"></head-select>
    </head-title>
    <div class="day main">

      <div class="title">
        <p class="font_style_1">2018年06月01日至2018年06月30日心血管内科出院人次统计表(按主诊组)</p>
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
