<style>
  .prompt{
    position: absolute;
    top:80px;
    left:50%;
    width:160px;
    height:60px;
    transform: translateX(-50%);
    line-height: 60px;
    text-align: center;
    color:red;
    font-size: 16px;
    font-weight: bold;
    border:1px solid #fff;
    border-radius: 5px;
    background:rgba(155,155,155,0.8);
    z-index:99999;
  }

  .prompt-fade-enter-active, .prompt-fade-leave-active {
    transition: opacity .2s;
  }
  .prompt-fade-enter, .prompt-fade-leave-active {
    opacity: 0.3;
  }

</style>
<template>
  <transition name="prompt-fade" mode="out-in">
    <div class="prompt" v-if="show">
      <div v-show="!flag">开始</div>
      <div v-show="flag">暂停</div>
    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        timer:null,
        show:true,
      }
    },
    props:['flag'],
    mounted () {
      this.timer=setTimeout(()=>{
        this.show=false;
      },1000)
    },
    beforeDestroy(){
      this.show=true;
    },
  }
</script>
