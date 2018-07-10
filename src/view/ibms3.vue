<style lang="less">
</style>
<template>
  <div class="ibms">
    <img src="../assets/image/ibms3.jpg" alt="">
  </div>
</template>
<script>
  import headTitle from '@/components/head'
    import {router} from '@/tool/tool'
  export default{
    data () {
      return {
      }
    },
    components:{
    },
    activated () {
      router('/ibms4',this);
    },
    mounted () {
    }

  }
</script>
