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
      color:#fff;
    }
  }
}
</style>
<template>
  <ul class="indicator clearfix">
    <li v-if="selectLight.selectOne">
      <span class="color_1"></span>
      <span>{{selectLight.one}}</span>
    </li>
    <li v-if="selectLight.selectTwo">
      <span class="color_2"></span>
      <span>{{selectLight.two}}</span>
    </li>
    <li v-if="selectLight.selectThree">
      <span class="color_3"></span>
      <span>{{selectLight.three}}</span>
    </li>
    <li v-if="selectLight.selectFour">
      <span class="color_4"></span>
      <span>{{selectLight.four}}</span>
    </li>
    <li v-if="selectLight.selectFive">
      <span class="color_5"></span>
      <span>{{selectLight.five}}</span>
    </li>
    <li v-if="selectLight.selectSix">
      <span class="color_13"></span>
      <span>{{selectLight.six}}</span>
    </li>
    <li v-if="selectLight.selectSeven">
      <span class="color_19"></span>
      <span>{{selectLight.seven}}</span>
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
