<style lang="less">
</style>
<template>
  <div class="ibms" @click="flag===true ? start() : pause()">
    <prompt-box :flag="flag" v-if="show"></prompt-box>
    <img src="../assets/image/ibms10_1.jpg" alt="">
  </div>
</template>
<script>
  import headTitle from '@/components/head'
  import promptBox from '@/components/prompt'
  import {start, pause, run} from '@/tool/tool'
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
    methods:{
      pause () {
        pause(this);
      },
      start () {
        start(this,'/ibms11')
      }


    },

    mounted () {
      run(this,'/ibms11')
    },
    beforeDestroy(){
      clearInterval(this.timer)
    }


  }
</script>
