<style lang="less">
  .title-hide{
  .head .title_second{
    display: none;
  }
  }
  .pharmacy{
  .contents{
    margin: 20px 50px 0 50px;
    width: calc(100% - 100px);
    height: 650px;
    padding-top: 60px;
    background: url("../assets/image/border_4.png");
    background-size: 100% 100%;
    -webkit-box-shadow: #000 0px 0px 10px;
    -moz-box-shadow: #000 0px 0px 10px;
    box-shadow: #000 0px 0px 10px;
  .img1{
    width: 1300px;
    height: 500px;
    margin: 0px auto 0;
    background: url("../assets/image/pharmacy.png");
    background-size: 100% 100%;
  }
  }
  }
</style>
<template>
  <div class="con title-hide">
    <head-title :headTip="headTip">
      <head-select slot="headSelect"></head-select>
    </head-title>
    <div class="pharmacy main">
      <div class="contents">
        <div class="img1">
        </div>
      </div>
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
