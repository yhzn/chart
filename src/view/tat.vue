<style lang="less">
  .operation{
  .title-third-1{
    position: relative;
    float: left;
    width: 50%;
    height: 25px;
    overflow:hidden;
  }
  .title-third-1-p{
    float: left;
    width: 250px;
    height: 25px;
  }
  .title-button1{
    float: right;
    margin-top: 6px;
    margin-bottom: 2px;
    margin-right: 15px;
    width: 100px;
    height: 17px;
    line-height: 17px;
    vertical-align: middle;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    font-size: 12px;
  }
  .contents{
    margin:0 10px 10px;
  }
  .left{
    float: left;
    width: calc(50% - 10px);
    margin-right: 10px;
    height: 650px;
    background: url("../assets/image/border_1.png");
    background-size: 100% 100%;
  }
  .right1{
    float: left;
    width: calc(50% - 5px);
    margin-right: 5px;
    margin-bottom: 10px;
    height: 320px;
  }
  .right2{
    float: left;
    width: calc(50% - 5px);
    margin-right: 5px;
    height: 320px;
    background: url("../assets/image/border_1.png");
    background-size: 100% 100%;
  }
  .content-head4{
    position: relative;
    overflow:hidden;
    width: 100%;
    height: 60px;
  }
  .content-head4-title{
    position: relative;
    float: left;
    margin: 0 0 0 30px;
    width: 280px;
    height: 60px;
    line-height: 60px;
    vertical-align: middle;
  }
  .content-content4{
    position: relative;
    overflow:hidden;
    width: 100%;
    height: 220px;
  }
  .content-footer4{
    margin-left:30px;
    overflow:hidden;
    height: 40px;
  }
  .radio1{
    position: relative;
    float: right;
    margin-top: 7px;
    width: 75px;
    height: 25px;
  }
  .radio1 p{
    float: left;
    margin-top: -3px;
    margin-left: 3px;
    margin-right: 20px;
    width: 28px;
    line-height: 20px;
    font-size: 14px;
    color: #ffffff;
  }
  .radio2{
    position: relative;
    float: right;
    margin: 25px 0 0;
    width: 75px;
    height: 60px;
  }
  .radio2 p{
    float: left;
    margin-top: -3px;
    margin-left: 3px;
    margin-right: 30px;
    width: 28px;
    line-height: 20px;
    font-size: 14px;
    color: #ffffff;
  }
  .radio_behind_1{
    float: left;
    padding-top: 2px;
    padding-left: 2px;
    height: 14px;
    width: 14px;
    background-color: #ffffff;
    border-radius: 50%;
  }
  .radio_front_1{
    position: relative;
    height: 10px;
    width: 10px;
    background-color: #2488e8;
    border-radius: 50%;
  }
  .radio_front_2{
    position: relative;
    height: 10px;
    width: 10px;
    background-color: #0049a7;
    border-radius: 50%;
  }

  }
</style>
<template>
  <div class="con">
    <div class="con">
      <head-title :headTip="headTip">
        <head-select slot="headSelect"></head-select>
      </head-title>
      <div class="operation main">
        <div class="nav-1">
          <div class="title-third-1"></div>
          <div class="title-third-1">
            <p class="title-third-1-p font_style_1">住院采集排名(前50)</p>
            <div class="title-button1">
              <p>手术例数排名</p>
            </div>
            <div class="radio1">
              <div class="radio_behind_1">
                <div class="radio_front_2"></div>
              </div>
              <p>门急诊</p>
            </div>
            <div class="radio1">
              <div class="radio_behind_1">
                <div class="radio_front_2"></div>
              </div>
              <p>住院急诊</p>
            </div>
            <div class="radio1">
              <div class="radio_behind_1">
                <div class="radio_front_1"></div>
              </div>
              <p>住院</p>
            </div>
          </div>


        </div>
        <div class="contents">
          <div class="left">

          </div>
          <div class="right1">
            <table-list :tableData="tableData"></table-list>
          </div>
          <div class="right2">
            <div class="content-head4">
              <p class="content-head4-title font-size-18 text_color_1">住院手术收入例数趋势</p>
              <div class="radio2">
                <div class="radio_behind_1">
                  <div class="radio_front_1"></div>
                </div>
                <p>住院</p>
              </div>
              <div class="radio2">
                <div class="radio_behind_1">
                  <div class="radio_front_2"></div>
                </div>
                <p>门诊</p>
              </div>
            </div>
            <div class="content-content4"></div>
            <div class="content-footer4">
              <indicator-light :selectLight="selectLight"></indicator-light>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import headTitle from '@/components/head'
  import headSelect from '@/components/head-select'
  import indicatorLight from '@/components/indicator'
  import tableList from '@/components/table-list'
  let tableData=[
    ['排名','手术科室','当期例数','同期例数','当期收入','同期收入','当期手术费','同期手术费'],
    ['1','44胆石病专科','265','265','3,236,017','3,236,017','3,236,017','24,199'],
    ['2','04泌尿外科','233','233','1,916,445','1,916,445','1,916,445','20,849'],
    ['3','43胃肠外科本部','126','126','2,814,390','2,814,390','2,814,390','17,903'],
    ['4','45疝与腹壁疾病科','122','122','1,058,786','1,058,786','1,058,786','24,199'],
    ['5','07妇科','121','121','1,584,396','1,584,396','1,584,396','82,972'],
    ['6','08眼科医院','104','104','580,728','580,728','580,728','15,135'],
    ['7','49肝胆胰外科南院','101','101','1,170,994','1,170,994','1,170,994','24,199'],
    ['8','05骨关节与运动专科','91','91','2,201,385','2,201,385','2,201,385','21%']
  ];
  export default{
    data () {
      return {
        headTip:'检验科>>TAT概况',
        tableData,
        selectLight:{
          selectOne:true,
          one:'同期例数',
          selectTwo:true,
          two:'当期指标',
          selectThree:true,
          three:'当期指标',
          selectFour:true,
          four:'当期收入',
          selectFive:true,
          five:'同期收入',
          selectSix:true,
          six:'当期例数'
        },
      }
    },
    components:{
      headTitle,
      tableList,
      headSelect,
      indicatorLight
    },
    mounted () {

    }
  }
</script>
