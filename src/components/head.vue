<style lang="less">
  .head{
    position: relative;
    margin-bottom:10px;
    height:66px;
    background:url("../assets/image/head-bg.png") no-repeat;
    background-size: 100% 100%;
    .title_first{
      padding-top:18px;
    }
    .title_first p{
      margin:0;
      text-align: center;
      font-size: 32px;
      color: #ffffff;
    }
    .title_second{
      position: absolute;
      bottom:0;
      height: 30px;
      margin-left:10px;
      padding-top: 3px;
      padding-left: 8px;
      font-size: 18px;
      color: #ffffff;
      background-image: url("../assets/image/3_03.png");
      background-size: 100% 100%;
    }
    .title_second p{
      margin-right:25px;
    }
  }
</style>
<template>
  <div class="head">
    <div class="title_first">
      <p>决策支持系统</p>
    </div>
    <div class="title_second">
      <p>{{headTip}}</p>
    </div>
    <slot name="headSelect"></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props:['headTip']
}

</script>
