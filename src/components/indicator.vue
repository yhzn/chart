<style lang="less">
.indicator{
  li{
    float:left;
    span:nth-child(1){
      display: inline-block;
      float: left;
      width:12px;
      height:12px;
      border-radius: 50%;
      margin-top:4px;
      margin-right:10px;
    }
    span:nth-child(2){
      margin-right:10px;
    }
  }
}
</style>
<template>
  <ul class="indicator clearfix">
    <li v-if="selectLight.selectOne">
      <span class="color_1"></span>
      <span>同期</span>
    </li>
    <li v-if="selectLight.selectTwo">
      <span class="color_2"></span>
      <span>当期</span>
    </li>
    <li v-if="selectLight.selectThree">
      <span class="color_3"></span>
      <span>指标</span>
    </li>
    <li v-if="selectLight.selectFour">
      <span class="color_4"></span>
      <span>医保</span>
    </li>
    <li v-if="selectLight.selectFive">
      <span class="color_5"></span>
      <span>指导</span>
    </li>
  </ul>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props:['selectLight']
  }
</script>
