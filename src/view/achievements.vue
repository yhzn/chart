<style lang="less">
  .title-hide{
    .head .title_second{
      display: none;
    }
  }
  .achievements{
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
        width: 900px;
        height: 500px;
        margin: 0px auto 0;
        background: url("../assets/image/achievements.png");
        background-size: 100% 100%;
      }
    }
  }
</style>
<template>
  <div class="con title-hide" @click="flag===true ? start() : pause()">
    <prompt-box :flag="flag" v-if="show"></prompt-box>
    <head-title :headTip="headTip">
    </head-title>
    <div class="achievements main">
      <div class="contents">
        <div class="img1">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headTitle from '@/components/head'
  import {start,pause,run} from '@/tool/tool'
  import promptBox from '@/components/prompt'

  export default{
    data () {
      return {
        headTip:"",
        flag:true,
        timer:null,
        show:false,
        showTimer:null,
        timeCount:0
      }
    },
    components:{
      headTitle,
      promptBox
    },
//    activated () {
//      router('/operationAnalysis',this);
//    },
    methods:{
      pause () {
        pause(this)
      },
      start () {
        start(this,'/operationAnalysis')
      }

    },
    mounted () {
        run(this,'/operationAnalysis')
    },
    beforeDestroy(){
      clearInterval(this.timer)
    },


  }
</script>
