
<template>
  <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="slide in swiperSlides" :style="{ 'background-image': 'url(' + slide + ')' ,'color':'red'}" :key="slide.id"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        swiperOption:{ //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        speed:300,
        autoplay: {
          delay:3000
        },
        loop: true,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
          effect : 'fade',
        pagination: {
          el: '.swiper-pagination'
        },
        scrollbar:{
          el: '.swiper-scrollbar'
        },
        centeredSlides: true,
        paginationClickable: true,
          fadeEffect:true,
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        keyboard: true,
        mousewheelControl: true,
        observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      },

      swiperSlides:[require('../assets/image/3_03.png'), require('../assets/image/2.jpg'), require('../assets/image/a_06.png')]


      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted () {




    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
  html, body, #app {
    height: 100%;
    width: 100%;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  #chart{
    height:300px;
  }
}
.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
  height: 100vh;
}
.swiper-pagination-bullet {
  width: 15px;
  height: 15px;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 8%;
}
</style>
