<style lang="less">

  .main-head{
    position: absolute;
    left: 160px;
    right: 20px;
    top: 31px;
    .head_content_1{
      float: left;
      width: 150px;
      height: 36px;
      background-image: url("../assets/image/title.png");
      background-size: 100% 100%;
      padding-top: 4px;
      padding-left: 8px;
      font-size: 23px;
      color: #ffffff;
    }
    .head_content_2{
      float: left;
      margin-left:10px;
      height: 40px;
      width: 100px;
      line-height: 45px;
      vertical-align: middle;
      font-size: 14px;
      font-weight: bold;
      color:#fff;
    }
    .head_content_3{
      float: left;
      width: 14px;
      height: 24px;
      padding-top: 16px;
    }
    .head_content_3_2{
      float: left;
      margin-top: 3px;
      width: 14px;
      height: 17px;
    }
    .head_content_4{
      float: left;
      margin-left: 3px;
      margin-right: 30px;
      width: 30px;
      height: 40px;
      line-height: 45px;
      vertical-align: middle;
      font-size: 14px;
      color: #ffffff;
    }
    .head_content_4_2{
      float: left;
      margin-left: 3px;
      margin-right: 10px;
      width: 30px;
      height: 20px;
      font-size: 14px;
      color: #ffffff;
    }
    .head_content_5{
      float: right;
      padding-top: 10px;
      width: 425px;
      height: 30px;
    }

    .select_1 {
      height: 27px;
      width: 80px;
      border: none;
      outline: none;
      /*很关键：将默认的select选择框样式清除*/
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
      /*在选择框的最右侧中间显示小箭头图片*/
      background: url("../assets/image/select.png") no-repeat scroll right center transparent;
      background-size: 100% 100%;
      /*为下拉小箭头留出一点位置，避免被文字覆盖*/
      padding-right: 13px;
      padding-left: 5px;
      color: white;
      font-size: 15px;
    }
    /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
    select::-ms-expand { display: none; }
    button{
      background: url("../assets/image/button.png") no-repeat;
      background-size: 100% 100%;
      border:none;
      height: 27px;
      width: 65px;
    }
    .radio_behind_1{
      position: relative;
      height: 14px;
      width: 14px;
      background-color: #ffffff;
      border-radius: 50%;
    }
    .radio_front_1{
      position: absolute;
      margin-top: 2px;
      margin-left: 2px;
      height: 10px;
      width: 10px;
      background-color: #2488e8;
      border-radius: 50%;
    }
    .radio_front_2{
      position: absolute;
      margin-top: 2px;
      margin-left: 2px;
      height: 10px;
      width: 10px;
      background-color: #0049a7;
      border-radius: 50%;
    }
  }

</style>
<template>
  <div class="main-head clearfix">
    <div class="head_content_2 clearfix">
      金额单位:万元
    </div>
    <div class="head_content_3 clearfix">
      <div class="radio_behind_1">
        <div class="radio_front_1"></div>
      </div>
    </div>
    <div class="head_content_4 clearfix">
      全院
    </div>
    <div class="head_content_3 clearfix">
      <div class="radio_behind_1">
        <div class="radio_front_2"></div>
      </div>
    </div>
    <div class="head_content_4 clearfix">
      本院
    </div>
    <div class="head_content_3 clearfix">
      <div class="radio_behind_1">
        <div class="radio_front_2"></div>
      </div>
    </div>
    <div class="head_content_4">
      南院
    </div>
    <!-- 右边 -->
    <div class="head_content_5 clearfix">
      <select class="select_1">
        <option value ="year">2018</option>
      </select>
      <select class="select_1">
        <option value ="month">6</option>
      </select>
      至
      <select class="select_1">
        <option value ="year">2018</option>
      </select>
      <select class="select_1">
        <option value ="month">6</option>
      </select>
      <button>获取数据</button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
  }
</script>
