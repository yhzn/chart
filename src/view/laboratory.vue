<style lang="less">
  .title-hide{
  .head .title_second{
    display: none;
  }
  }
  .laboratory{
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
    width: 800px;
    height: 500px;
    margin: 0px auto 0;
    background: url("../assets/image/laboratory.png");
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
    <div class="laboratory main">
      <div class="contents">
        <div class="img1">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headTitle from '@/components/head'
  import {router} from '@/tool/tool'
  import promptBox from '@/components/prompt'

  export default{
    data () {
      return {
        headTip:"",
        flag:false,
        timer:null,
        show:false,
        showTimer:null,
        chartTimer:null,
        timeCount:0

      }
    },
//    activated () {
//      router('/tat',this);
//    },
    components:{
      headTitle,
      promptBox,

    },
    methods:{
      pause () {
        clearInterval(this.timer);
        if(this.show){
          return false
        }
        this.flag=!this.flag;
        this.show=true;
        this.showTimer=setTimeout(()=>{
          clearTimeout(this.showTimer);
          this.show=false;
        },1500);
      },
      start () {
        if(this.show){
          return false
        }
        this.flag=!this.flag;
        this.show=true;
        this.showTimer=setTimeout(()=>{
          clearTimeout(this.showTimer);
          this.show=false;

        },1500);
        this.timer=setInterval(()=>{
          this.timeCount++;
          console.log(this.timeCount)
          if(this.timeCount>=10){
            clearInterval(this.timer)
            this.$router.push('/tat')
          }
        },1000)
      }


    },

    mounted () {
      this.timer=setInterval(()=>{
        this.timeCount++;
        console.log(this.timeCount)
        if(this.timeCount>=10){
          clearInterval(this.timer)
          this.$router.push('/tat')
        }
      },1000)

    },
    beforeDestroy(){
      clearInterval(this.timer)
    }


  }
</script>
