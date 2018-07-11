<style lang="less">
  #structure{
    width: 100%;
    height: 100%;
    background: url("../assets/image/bg2.png");
    background-size: 100% 100%;
    .title{
      width: 100%;
      height: 100px;
      background: url("../assets/image/title2.png");
      background-size: 100% 100%;
      line-height: 100px;
      vertical-align: middle;
      text-align: center;
      font-size: 34px;
      color: #fff;
      }
  .border1{
    width: calc(100% - 80px);
    height: 670px;
    margin: 0 40px 0;
    padding-top: 5px;
    background: url("../assets/image/structure_border.png");
    background-size: 100% 100%;
    .content1{
      width: calc(100% - 120px);
      height: 655px;
      margin: 0 60px 0;
      background: url("../assets/image/structure.png");
      background-size: 100% 100%;
    }
    }
  }

</style>
<template>
  <div class="main" id="structure" @click="flag===true ? start() : pause()">
    <prompt-box :flag="flag" v-if="show"></prompt-box>
    <div class="title">延华决策分析支持</div>
    <div class="border1">
      <div class="content1"></div>
    </div>
  </div>
</template>
<script>
  import headTitle from '@/components/head'
  import promptBox from '@/components/prompt'
  import {router} from '@/tool/tool'
  export default{
    data () {
      return {
        flag:false,
        timer:null,
        show:false,
        showTimer:null,
        chartTimer:null,
        timeCount:0
      }
    },
    components:{
      promptBox,
    },
//    activated () {
//      router('/report',this);
//    },
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
//            this.$router.push('/report')
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
//          this.$router.push('/report')
        }
      },1000)

    },
    beforeDestroy(){
      clearInterval(this.timer)
    }

  }
</script>
