<style lang="less">
.ins{
.title-third-1{
  position: relative;
  float: left;
  width: calc(50% - 10px);
  height: 25px;
  margin-left: 10px;
  overflow:hidden;
}
.title-third-1-p{
  float: left;
  width: 250px;
  height: 25px;
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
  margin-right: 30px;
  width: 28px;
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
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
.radio2{
  position: relative;
  float: right;
  margin: 25px 0 0;
  width: 75px;
  height: 60px;
}
.title-button1{
  float: right;
  margin-top: 6px;
  margin-bottom: 2px;
  margin-right: 5px;
  width: 117px;
  height: 17px;
  line-height: 17px;
  vertical-align: middle;
  text-align: center;
  background-color: white;
  border-radius: 3px;
}
.content-2{
  float: left;
  margin-left: 10px;
  margin-bottom: 10px;
  width: calc(50% - 10px);
  height: 320px;
  background: url("../assets/image/border_1.png");
  background-size: 100% 100%;
}
.right1{
  float: right;
  width: 250px;
  height: 320px;
  border-left: 1px solid #ffffff;
}
.right1-content{
  width: 250px;
  height: 160px;
}
.left1{
  float: right;
  margin: 30px;
  width: calc(100% - 310px);
  height: 260px;
  background: url("../assets/image/content_tree.png");
  background-size: 100% 100%;
}
.right1-content-head{
  padding-left: 10px;
  height: 30px;
  width: 100%;
}
.right1-content-chart{
  height: 130px;
  width: 100%;
}
.right1-title1{
  position: relative;
  height: 18px;
  margin: 8px auto 4px;
  width: 150px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  line-height: 18px;
  vertical-align: middle;
  background: url("../assets/image/button.png");
  background-size: 100% 100%;
  font-size: 12px;
}
.right1-title2{
  position: relative;
  height: 18px;
  width: calc(100% - 10px);
  margin: 5px auto 2px;
  text-align: center;
  line-height: 18px;
  vertical-align: middle;
  background: url("../assets/image/button.png");
  background-size: 100% 100%;
  font-size: 12px;
  overflow:hidden;
}
.left3-1{
  float: left;
  height: 128px;
  width: 170px;
  padding-top: 32px;
  border-bottom: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
}
.left3-2{
  float: left;
  height: 128px;
  width: 170px;
  padding-top: 32px;
  border-bottom: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
}
.left3-3{
  float: left;
  height: 64px;
  width: 170px;
  padding-top: 16px;
  border-right: 1px solid #ffffff;
}
.right3-1{
  float: right;
  height: 128px;
  width: calc(100% - 170px);
  border-bottom: 1px solid #ffffff;
}
.right3-2{
  float: right;
  height: 128px;
  width: calc(100% - 170px);
  border-bottom: 1px solid #ffffff;

}
.right3-3{
  float: right;
  height: 64px;
  width: calc(100% - 170px);

}
.content-title1{
  width: 55px;
  margin: 0 auto 0;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  vertical-align: middle;
}
.right3-content{
  float: left;
  width: calc(33.3333%);
  height: 64px;
}
.right3-content-chart{
  float: left;
  width: 80px;
  height: 64px;
}
.right3-content-text{
  float: right;
  padding-right: 10px;
  width: calc(100% - 80px);
  height: 64px;
}
.right3-content-text p{
  position: relative;
  margin: 0px 5px 0 0px;
  float: right;
  font-size: 13px;
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
  margin: 0 0 0 40px;
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
      <div class="ins main">
        <div class="nav-1">
          <div class="title-third-1">
            <p class="font_style_1">医保金额</p>
          </div>
          <div class="title-third-1">
            <p class="title-third-1-p font_style_1">住院科室综合得分排名(城保)</p>
            <div class="radio1">
              <div class="radio_behind_1">
                <div class="radio_front_2"></div>
              </div>
              <p>住院</p>
            </div>
            <div class="radio1">
              <div class="radio_behind_1">
                <div class="radio_front_1"></div>
              </div>
              <p>门诊</p>
            </div>
            <div class="title-button1">
              <p>科室综合得分排名</p>
            </div>
            <div class="title-button1">
              <p>病种结算金额排名</p>
            </div>
          </div>
        </div>
        <div class="contents-1 color_1">
          <div class="content-2">
            <div class="right1">
              <div class="right1-content">
                <div class="right1-content-head">
                  <div class="right1-title1">
                    总控医保金额(月)
                  </div>
                </div>
                <div class="right1-content-chart">

                </div>
              </div>
              <div class="right1-content">
                <div class="right1-content-head">
                  <div class="right1-title1">
                    总控医保金额累计值(年)
                  </div>
                </div>
                <div class="right1-content-chart">

                </div>
              </div>
            </div>
            <div class="left1"></div>
          </div>

          <div class="content-2">
            <table-list :tableData="tableData"></table-list>
          </div>

          <div class="content-2">
            <div class="left3-1">
              <p class="content-title1 text_color_1">门&nbsp;&nbsp;&nbsp;诊城&nbsp;&nbsp;&nbsp;保</p>
            </div>
            <div class="right3-1">
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保金额
                  </div>
                  <div>
                    <p class="text_color_4">42,941,723</p>
                  </div>
                  <div>
                    <p class="text_color_10">38,662,810</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保人次
                  </div>
                  <div>
                    <p class="text_color_4">155,583</p>
                  </div>
                  <div>
                    <p class="text_color_10">166,914</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算均次
                  </div>
                  <div>
                    <p class="text_color_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;260</p>
                  </div>
                  <div>
                    <p class="text_color_10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;287</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药占比
                  </div>
                  <div>
                    <p class="text_color_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;74%</p>
                  </div>
                  <div>
                    <p class="text_color_10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60%</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算材料占比
                  </div>
                  <div>
                    <p class="text_color_4">&nbsp;&nbsp;0.00%</p>
                  </div>
                  <div>
                    <p class="text_color_10">&nbsp;&nbsp;0.79%</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药品均次
                  </div>
                  <div>
                    <p class="text_color_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;193</p>
                  </div>
                  <div>
                    <p class="text_color_10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;172</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="left3-2">
              <p class="content-title1 text_color_1">住&nbsp;&nbsp;&nbsp;院城&nbsp;&nbsp;&nbsp;保</p>
            </div>
            <div class="right3-2">
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保金额
                  </div>
                  <div>
                    <p class="text_color_4">42,941,723</p>
                  </div>
                  <div>
                    <p class="text_color_10">38,662,810</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保人次
                  </div>
                  <div>
                    <p class="text_color_4">&nbsp;&nbsp;&nbsp;&nbsp;3,722</p>
                  </div>
                  <div>
                    <p class="text_color_10">&nbsp;&nbsp;&nbsp;&nbsp;4,066</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算均次
                  </div>
                  <div>
                    <p class="text_color_4">14,000</p>
                  </div>
                  <div>
                    <p class="text_color_10">14,288</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药占比
                  </div>
                  <div>
                    <p class="text_color_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37%</p>
                  </div>
                  <div>
                    <p class="text_color_10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23%</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算材料占比
                  </div>
                  <div>
                    <p class="text_color_4">0.00%</p>
                  </div>
                  <div>
                    <p class="text_color_10">29.89%</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药品均次
                  </div>
                  <div>
                    <p class="text_color_4">&nbsp;&nbsp;&nbsp;&nbsp;5,192</p>
                  </div>
                  <div>
                    <p class="text_color_10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3,316</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="left3-3">
              <p class="content-title1 text_color_1">其&nbsp;&nbsp;&nbsp;他</p>
            </div>
            <div class="right3-3">
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    医保金额
                  </div>
                  <div>
                    <p class="text_color_4">7,634,084</p>
                  </div>
                  <div>
                    <p class="text_color_10">5,562,568</p>
                  </div>
                </div>
              </div>
              <div class="right3-content">
                <div class="right3-content-chart"></div>
                <div class="right3-content-text">
                  <div class="right1-title2">
                    结算药品金额
                  </div>
                  <div>
                    <p class="text_color_4">5,543,265</p>
                  </div>
                  <div>
                    <p class="text_color_10">3,290,368</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="content-2">
            <div class="content-head4">
              <p class="content-head4-title font-size-18 text_color_1">门诊总控医保金额与总控人次趋势</p>
              <div class="radio2">
                <div class="radio_behind_1">
                  <div class="radio_front_2"></div>
                </div>
                <p>住院</p>
              </div>
              <div class="radio2">
                <div class="radio_behind_1">
                  <div class="radio_front_1"></div>
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
</template>
<script>
  import headTitle from '@/components/head'
  import headSelect from '@/components/head-select'
  import indicatorLight from '@/components/indicator'
  import tableList from '@/components/table-list'
  let tableData=[
    ['排名','科室名称','入径率','完成率','入径数','收治数','平均住院日','药占比','均费差额'],
    ['合计','心房颤动介入治疗','88%','88%','236','236','6.7','19%','24,199'],
    ['1','心力衰竭','100%','100%','17','17','7.6','19%','20,849'],
    ['2','急性ST段抬高心肌梗塞','100%','100%','14','14','1.9','13%','17,903'],
    ['3','慢性心绞痛介入治疗','100%','100%','10','10','5.2','11%','24,199'],
    ['4','病态心房结综合征','99%','99%','6','6','10.3','26%','82,972'],
    ['5','高血压','99%','99%','1','1','4.3','9%','15,135'],
    ['6','心房颤动介入治疗','99%','99%','1','1','3.9','18%','24,199'],
    ['7','慢性心绞痛介入治疗','99%','99%','0','0','10.9','21%','24,199']
  ];
  export default{
      data () {
          return {
            headTip:'全院医保概览',
            tableData,
            selectLight:{
              selectOne:true,
              one:'同期总控医保人次',
              selectTwo:true,
              two:'当期总控医保人次',
              selectThree:false,
              three:'',
              selectFour:true,
              four:'同期总控医保收入',
              selectFive:true,
              five:'当期总控医保收入'
            },

          }
      },
      components:{
        headTitle,
        headSelect,
        tableList,
        indicatorLight
      },
      mounted () {

      }
  }
</script>
