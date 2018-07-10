<style lang="less">
    .report{
        .contents{
          margin:0 10px 10px;
        }
        .content{
          position: relative;
          float: left;
          margin-right: 10px;
          margin-bottom: 10px;
          width: calc(33.3333% - 10px);
          height: 250px;
          background: url("../assets/image/border_1.png");
          background-size: 100% 100%;
        }
        .content_left{
          margin-right:136px;
          height: 100%;
        }
        .content_right{
          float: right;
          margin-top: 32px;
          margin-bottom: 20px;
          margin-right: 12px;
          width: 119px;
          height: calc(100% - 52px);
        }
        .content_right_2{
          float: left;
          margin-top: 12px;
          margin-bottom: 20px;
          margin-right: 23px;
          width: calc(30% - 23px);
          height: calc(100% - 32px);
        }
        .content_right_2_1{
          position: absolute;
          top:5px;
          height: 20px;
          width: 100%;
        }

        .main_title_second{
          height: 20px;
          padding-left: 15px;
          padding-top: 7px;
          width: 68%;
          color: #ffffff;
        }
        .line_1{
          margin-top: 7px;
          margin-left: 15px;
          height: 7px;
          width: 100px;
          background: url("../assets/image/line_1.png");
          background-size: 100% 100%;
        }
        .charts{
          margin-left:10px;
          height: 185px;
        }
        .chart_1{
          float: right;
          width: 50px;
          height: 100%;
        }
        .chart_2{
          margin-right: 50px;
          height:100%;
        }
        .elements_1{
          position: absolute;
          height: 30px;
          width: calc(68% - 5px);
          bottom: 0px;
        }
        .element_1_1{
          position: relative;
          margin-left: 8px;
          margin-top: 2px;
          float: left;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .element_1_1_2{
          position: relative;
          margin-top: 2px;
          margin-left: 2px;
          float: left;
          width: 12px;
          height: 12px;
        }
        .element_1_2{
          position: relative;
          float: left;
          padding-left: 5px;
          font-size: 12px;
          color: #ffffff;
          text-align: center;
        }
        .element_1_2_2{
          position: relative;
          padding-left: 3px;
          font-size: 12px;
          color: #ffffff;
          text-align: center;
        }
        .elements_2{
          padding-top:8px;
          background-color: #8be87e;
          width: 100%;
          height: 40%;
          background: url("../assets/image/border_2.png");
          background-size: 100% 100%;
        }
        .elements_2_2{
          background-color: #8be87e;
          width: 100%;
          height: calc(40% - 10px);
          background: url("../assets/image/border_2.png");
          background-size: 100% 100%;
        }
        .elements_3{
          background-color: #2488e8;
          width: 66%;
          height: 30px;
          margin-top: 4px;
          margin-bottom: 4px;
          margin-left: 17%;
          margin-right: 17%;
          background: url("../assets/image/title_1.png");
          background-size: 100% 100%;
          text-align: center;
          color: #a5def2;
          font-size: xx-small;
          line-height: 30px;
          vertical-align: middle;
        }
        .elements_3_2{
          background-color: #2488e8;
          width: 66%;
          height: 30px;
          margin-top: 4px;
          margin-bottom: 4px;
          margin-left: 17%;
          margin-right: 17%;
          background: url("../assets/image/title_1.png");
          background-size: 100% 100%;
          text-align: center;
          color: #a5def2;
          font-size: xx-small;
          line-height: 30px;
          vertical-align: middle;
        }
        .element_4{
          height: 60px;
        }
        .title_third{
          width: 100%;
          height: 17px;
          text-align: center;
          font-size: xx-small;
          color: #42cef2;
        }
        .texts{
          width: 90%;
          height: calc(100% - 25px);
          margin-right: 5%;
          margin-left: 5%;
          margin-bottom: 5px;
        }
        .row_1{
          width: 100%;
          height: 16px;
        }
        .row_1_1{
          float: left;
          width: 50%;
          height: 16px;
          line-height: 16px;
          vertical-align: middle;
          font-size: xx-small;
          text-align: center;
        }
        .row_1_2{
          float: left;
          width: calc(50% - 10px);
          height: 16px;
          line-height: 16px;
          vertical-align: middle;
          font-size: xx-small;
          text-align:left
        }
        .row_1_3{
          float: left;
          width: 36%;
          height: 16px;
          line-height: 16px;
          vertical-align: middle;
          font-size: xx-small;
          text-align: right;
        }
        .progress_bar_border{
          float: left;
          margin-left: 7px;
          width: 60px;
          height: 16px;
          background: url("../assets/image/border_3.png");
          background-size: 100% 100%;
        }
        .progress_bar{
          position: absolute;
          margin-top: 2px;
          margin-left: 2px;
          width: 56px;
          height: 12px;
          background: url("../assets/image/progress_bar.png");
          background-size: 100% 100%;
        }
        .cover{
          float: right;
          width: 20%;
          height: 100%;
          background-color: #0e3d99;
        }
        .pgs{
          position: absolute;
          margin-left: 20%;
          width: 80%;
          height: 12px;
          line-height: 12px;
          vertical-align: middle;
          text-align: center;
          font-size: 4px;
        }
        .pgs p{
          position: relative;
          float: left;
        }
    }

</style>
<template>
  <div class="con">
    <head-title :headTip="headTip">
      <head-select slot="headSelect"></head-select>
    </head-title>
    <div class="report main">

      <div class="contents">
          <div class="content">
            <div class="content_right">
              <div class="elements_2">
                <div class="title_third">当期统计</div>
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        当期
                      </div>
                      <div class="row_1_2 text_color_2">
                        {{current_1}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        指标
                      </div>
                      <div class="row_1_2 text_color_3">
                        {{target_1}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        同期
                      </div>
                      <div class="row_1_2 text_color_4">
                        {{period_1}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elements_3">
                <div class="text_1">年度累计</div>
              </div>
              <div class="elements_2">
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        完成
                      </div>
                      <div class="row_1_2 text_color_5">
                        {{complete_1}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        计划
                      </div>
                      <div class="row_1_2 text_color_6">
                        {{plan_1}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        差额
                      </div>
                      <div class="row_1_2 text_color_7">
                        {{plan_1 - complete_1}}
                      </div>
                    </div>
                    <div class="row_1_3 text_color_1">完成比</div>
                    <div class="progress_bar_border">
                      <div class="progress_bar">
                        <div class="cover" :style="{'width':(100 - ratio_1)+'%'}"></div>
                        <div class="pgs text_color_1">
                          <p class="progress_num">{{ratio_1}}</p><p>%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_left">
              <div class="main_title_second">
                全院收入
              </div>
              <div class="line_1">
              </div>
              <div class="charts" ref="chart_1">
              </div>
              <div class="elements_1">
                <div class="element_1_1 color_1"></div>
                <div class="element_1_2">同期</div>
                <div class="element_1_1 color_2"></div>
                <div class="element_1_2">当期</div>
                <div class="element_1_1 color_3"></div>
                <div class="element_1_2">指标</div>
                <div class="element_1_1 color_4"></div>
                <div class="element_1_2">医保</div>
                <div class="element_1_1 color_5"></div>
                <div class="element_1_2">指导</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content_right">
              <div class="elements_2">
                <div class="title_third">当期统计</div>
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        当期
                      </div>
                      <div class="row_1_2 text_color_2">
                        {{current_2}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        指标
                      </div>
                      <div class="row_1_2 text_color_3">
                        {{target_2}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        同期
                      </div>
                      <div class="row_1_2 text_color_4">
                        {{period_2}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elements_3">
                <div class="text_1">年度累计</div>
              </div>
              <div class="elements_2">
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        完成
                      </div>
                      <div class="row_1_2 text_color_5">
                        {{complete_2}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        计划
                      </div>
                      <div class="row_1_2 text_color_6">
                        {{plan_2}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        差额
                      </div>
                      <div class="row_1_2 text_color_7">
                        {{plan_2 - complete_2}}
                      </div>
                    </div>
                    <div class="row_1_3 text_color_1">完成比</div>
                    <div class="progress_bar_border">
                      <div class="progress_bar">
                        <div class="cover" :style="{'width':(100 - ratio_2) + '%'}"></div>
                        <div class="pgs text_color_1">
                          <p class="progress_num">{{ratio_2}}</p><p>%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_left">
              <div class="main_title_second">
                门诊人次
              </div>
              <div class="line_1">
              </div>
              <div class="charts"  ref="chart_2">
              </div>
              <div class="elements_1">
                <div class="element_1_1 color_1"></div>
                <div class="element_1_2">同期</div>
                <div class="element_1_1 color_2"></div>
                <div class="element_1_2">当期</div>
                <div class="element_1_1 color_3"></div>
                <div class="element_1_2">指标</div>
                <div class="element_1_1 color_4"></div>
                <div class="element_1_2">医保</div>
                <div class="element_1_1 color_5"></div>
                <div class="element_1_2">指导</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content_right">
              <div class="elements_2">
                <div class="title_third">当期统计</div>
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        当期
                      </div>
                      <div class="row_1_2 text_color_2">
                        {{current_3}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        指标
                      </div>
                      <div class="row_1_2 text_color_3">
                        {{target_3}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        同期
                      </div>
                      <div class="row_1_2 text_color_4">
                        {{period_3}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elements_3">
                <div class="text_1">年度累计</div>
              </div>
              <div class="elements_2">
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        完成
                      </div>
                      <div class="row_1_2 text_color_5">
                        {{complete_3}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        计划
                      </div>
                      <div class="row_1_2 text_color_6">
                        {{plan_3}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        日均费用
                      </div>
                      <div class="row_1_2 text_color_7">
                        {{cost_3}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_left">
              <div class="main_title_second">
                平均住院日
              </div>
              <div class="line_1">

              </div>
              <div class="charts"  ref="chart_3">
              </div>
              <div class="elements_1">
                <div class="element_1_1 color_1"></div>
                <div class="element_1_2">同期</div>
                <div class="element_1_1 color_2"></div>
                <div class="element_1_2">当期</div>
                <div class="element_1_1 color_3"></div>
                <div class="element_1_2">指标</div>
                <div class="element_1_1 color_4"></div>
                <div class="element_1_2">医保</div>
                <div class="element_1_1 color_5"></div>
                <div class="element_1_2">指导</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content_right">
              <div class="elements_2">
                <div class="title_third">当期统计</div>
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        当期
                      </div>
                      <div class="row_1_2 text_color_2">
                        {{current_4}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        指标
                      </div>
                      <div class="row_1_2 text_color_3">
                        {{target_4}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        同期
                      </div>
                      <div class="row_1_2 text_color_4">
                        {{period_4}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elements_3">
                <div class="text_1">年度累计</div>
              </div>
              <div class="elements_2">
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        完成
                      </div>
                      <div class="row_1_2 text_color_5">
                       {{complete_4}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        计划
                      </div>
                      <div class="row_1_2 text_color_6">
                        {{plan_4}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        差额
                      </div>
                      <div class="row_1_2 text_color_7">
                        {{plan_4 - complete_4}}
                      </div>
                    </div>
                    <div class="row_1_3 text_color_1">完成比</div>
                    <div class="progress_bar_border">
                      <div class="progress_bar">
                        <div class="cover" :style="{'width':(100 - ratio_4)+'%'}"></div>
                        <div class="pgs text_color_1">
                          <p class="progress_num">{{ratio_4}}</p><p>%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_left">
              <div class="main_title_second">
                门诊收入
              </div>
              <div class="line_1">
              </div>
              <div class="charts" ref="chart_4">
              </div>
              <div class="elements_1">
                <div class="element_1_1 color_1"></div>
                <div class="element_1_2">同期</div>
                <div class="element_1_1 color_2"></div>
                <div class="element_1_2">当期</div>
                <div class="element_1_1 color_3"></div>
                <div class="element_1_2">指标</div>
                <div class="element_1_1 color_4"></div>
                <div class="element_1_2">医保</div>
                <div class="element_1_1 color_5"></div>
                <div class="element_1_2">指导</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content_right">
              <div class="elements_2">
                <div class="title_third">当期统计</div>
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        当期
                      </div>
                      <div class="row_1_2 text_color_2">
                        {{current_5}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        指标
                      </div>
                      <div class="row_1_2 text_color_3">
                        {{target_5}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        同期
                      </div>
                      <div class="row_1_2 text_color_4">
                        {{period_5}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elements_3">
                <div class="text_1">年度累计</div>
              </div>
              <div class="elements_2">
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        完成
                      </div>
                      <div class="row_1_2 text_color_5">
                        {{complete_5}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        计划
                      </div>
                      <div class="row_1_2 text_color_6">
                        {{plan_5}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        差额
                      </div>
                      <div class="row_1_2 text_color_7">
                        {{plan_5 - complete_5}}

                      </div>
                    </div>
                    <div class="row_1_3 text_color_1">完成比</div>
                    <div class="progress_bar_border">
                      <div class="progress_bar">
                        <div class="cover" :style="{'width':(100 - ratio_5)+'%'}"></div>
                        <div class="pgs text_color_1">
                          <p class="progress_num">{{ratio_5}}</p><p>%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_left">
              <div class="main_title_second">
                出院人次
              </div>
              <div class="line_1">

              </div>
              <div class="charts"  ref="chart_5">
              </div>
              <div class="elements_1">
                <div class="element_1_1 color_1"></div>
                <div class="element_1_2">同期</div>
                <div class="element_1_1 color_2"></div>
                <div class="element_1_2">当期</div>
                <div class="element_1_1 color_3"></div>
                <div class="element_1_2">指标</div>
                <div class="element_1_1 color_4"></div>
                <div class="element_1_2">医保</div>
                <div class="element_1_1 color_5"></div>
                <div class="element_1_2">指导</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content_right">
              <div class="elements_2">
                <div class="title_third">当期统计</div>
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        当期
                      </div>
                      <div class="row_1_2 text_color_2">
                        {{current_6}}%
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        同期
                      </div>
                      <div class="row_1_2 text_color_4">
                        {{target_6}}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elements_3">
                <div class="text_1">年度累计</div>
              </div>
              <div class="elements_2">
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        完成
                      </div>
                      <div class="row_1_2 text_color_5">
                        {{complete_6}}%
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        计划
                      </div>
                      <div class="row_1_2 text_color_6">
                        {{plan_6}}%
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        差额
                      </div>
                      <div class="row_1_2 text_color_7">
                        {{plan_6 - complete_6}}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_left">
              <div class="main_title_second">
                药占比
              </div>
              <div class="line_1">

              </div>
              <div class="charts" ref="chart_6">
              </div>
              <div class="elements_1">
                <div class="element_1_1 color_1"></div>
                <div class="element_1_2">同期</div>
                <div class="element_1_1 color_2"></div>
                <div class="element_1_2">当期</div>
                <div class="element_1_1 color_4"></div>
                <div class="element_1_2">医保</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content_right">
              <div class="elements_2">
                <div class="title_third">当期统计</div>
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        当期
                      </div>
                      <div class="row_1_2 text_color_2">
                        {{current_7}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        指标
                      </div>
                      <div class="row_1_2 text_color_3">
                        {{target_7}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        同期
                      </div>
                      <div class="row_1_2 text_color_4">
                        {{period_7}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elements_3">
                <div class="text_1">年度累计</div>
              </div>
              <div class="elements_2">
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        完成
                      </div>
                      <div class="row_1_2 text_color_5">
                        {{complete_7}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        计划
                      </div>
                      <div class="row_1_2 text_color_6">
                        {{plan_7}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        差额
                      </div>
                      <div class="row_1_2 text_color_7">
                        {{plan_7 - complete_7}}
                      </div>
                    </div>
                    <div class="row_1_3 text_color_1">完成比</div>
                    <div class="progress_bar_border">
                      <div class="progress_bar">
                        <div class="cover" :style="{'width':( 100 - ratio_7 )+'%'}"></div>
                        <div class="pgs text_color_1">
                          <p class="progress_num">{{ratio_7}}</p><p>%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_left">
              <div class="main_title_second">
                住院收入
              </div>
              <div class="line_1">

              </div>
              <div class="charts" ref="chart_7"></div>
              <div class="elements_1">
                <div class="element_1_1 color_1"></div>
                <div class="element_1_2">同期</div>
                <div class="element_1_1 color_2"></div>
                <div class="element_1_2">当期</div>
                <div class="element_1_1 color_3"></div>
                <div class="element_1_2">指标</div>
                <div class="element_1_1 color_4"></div>
                <div class="element_1_2">医保</div>
                <div class="element_1_1 color_5"></div>
                <div class="element_1_2">指导</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content_right">
              <div class="content_right_2_1">
                <div class="head_content_3_2 clearfix">
                  <div class="radio_behind_1">
                    <div class="radio_front_1"></div>
                  </div>
                </div>
                <div class="head_content_4_2 clearfix">
                  手术
                </div>
                <div class="head_content_3_2 clearfix">
                  <div class="radio_behind_1">
                    <div class="radio_front_2"></div>
                  </div>
                </div>
                <div class="head_content_4_2 clearfix">
                  DSA
                </div>
              </div>
              <div class="elements_2">
                <div class="title_third">当期统计</div>
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        当期
                      </div>
                      <div class="row_1_2 text_color_2">
                        {{current_8}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        指标
                      </div>
                      <div class="row_1_2 text_color_3">
                        {{target_8}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        同期
                      </div>
                      <div class="row_1_2 text_color_4">
                        {{period_8}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elements_3_2">
                <div class="text_1">年度累计</div>
              </div>
              <div class="elements_2">
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        完成
                      </div>
                      <div class="row_1_2 text_color_5">
                        {{complete_8}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        计划
                      </div>
                      <div class="row_1_2 text_color_6">
                        {{plan_8}}
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        差额
                      </div>
                      <div class="row_1_2 text_color_7">
                        {{plan_8 - complete_8}}
                      </div>
                    </div>
                    <div class="row_1_3 text_color_1">完成比</div>
                    <div class="progress_bar_border">
                      <div class="progress_bar">
                        <div class="cover" :style="{'width':(100 -ratio_8) + '%'}"></div>
                        <div class="pgs text_color_1">
                          <p class="progress_num">{{ratio_8}}</p><p>%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_left">
              <div class="main_title_second">
                手术例数
              </div>
              <div class="line_1"></div>
              <div class="charts">
                <div class="chart_1">
                  <div class="element_4"></div>
                  <div class="element_1_1_2 color_6"></div>
                  <div class="element_1_2_2">1级</div>
                  <div class="element_1_1_2 color_7"></div>
                  <div class="element_1_2_2">2级</div>
                  <div class="element_1_1_2 color_8"></div>
                  <div class="element_1_2_2">3级</div>
                  <div class="element_1_1_2 color_9"></div>
                  <div class="element_1_2_2">4级</div>
                </div>
                <div class="chart_2" ref="chart_8">

                </div>
              </div>
              <div class="elements_1">
                <div class="element_1_1 color_1"></div>
                <div class="element_1_2">同期</div>
                <div class="element_1_1 color_2"></div>
                <div class="element_1_2">当期</div>
                <div class="element_1_1 color_3"></div>
                <div class="element_1_2">指标</div>
                <div class="element_1_1 color_5"></div>
                <div class="element_1_2">指导</div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content_right">
              <div class="elements_2">
                <div class="title_third">当期统计</div>
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        当期
                      </div>
                      <div class="row_1_2 text_color_2">
                        {{current_9}}%
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        同期
                      </div>
                      <div class="row_1_2 text_color_4">
                        {{period_9}}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="elements_3">
                <div class="text_1">年度累计</div>
              </div>
              <div class="elements_2">
                <div class="texts">
                  <div class="text_1">
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        完成
                      </div>
                      <div class="row_1_2 text_color_5">
                        {{complete_9}}%
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        门诊
                      </div>
                      <div class="row_1_2 text_color_6">
                        {{clinic_9}}%
                      </div>
                    </div>
                    <div class="row_1">
                      <div class="row_1_1 text_color_1">
                        住院
                      </div>
                      <div class="row_1_2 text_color_7">
                        {{hospital_9}}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="content_left">
              <div class="main_title_second">
                材料占比
              </div>
              <div class="line_1">

              </div>
              <div class="charts" ref="chart_9">
              </div>
              <div class="elements_1">
                <div class="element_1_1 color_1"></div>
                <div class="element_1_2">同期</div>
                <div class="element_1_1 color_2"></div>
                <div class="element_1_2">当期</div>
                <div class="element_1_1 color_4"></div>
                <div class="element_1_2">医保</div>
              </div>
            </div>

          </div>

        </div>
    </div>
    </div>
</template>
<script>
  import eCharts from 'echarts'
  import {random, clone, router} from '@/tool/tool'

  import headTitle from '@/components/head'
  import headSelect from '@/components/head-select'

  export default {
      data () {
          return {
            headTip:'院长月报',
            current_1:random(10000,13000),
            target_1:random(10000,13000),
            period_1:random(10000,13000),
            complete_1:random(10000,13000),
            plan_1:13000,
            ratio_1:0,
            current_2:random(13000,300000),
            target_2:random(13000,300000),
            period_2:random(13000,300000),
            complete_2:random(20000,300000),
            plan_2:300000,
            ratio_2:0,
            current_3:random(6,10),
            target_3:random(6,10),
            period_3:random(6,10),
            complete_3:random(6,10),
            plan_3:8,
            cost_3:2000,
            current_4:random(13000,30000),
            target_4:random(13000,30000),
            period_4:random(13000,30000),
            complete_4:random(13000,30000),
            plan_4:50000,
            ratio_4:0,
            current_5:random(13000,30000),
            target_5:random(13000,30000),
            period_5:random(13000,30000),
            complete_5:random(13000,30000),
            plan_5:50000,
            ratio_5:0,
            current_6:random(20,50),
            target_6:random(20,50),
            complete_6:random(30,45),
            plan_6:46,
            current_7:random(7000,8000),
            target_7:random(7000,8000),
            period_7:random(13000,15000),
            complete_7:random(60000,80000),
            plan_7:80000,
            ratio_7:0,
            current_8:random(1300,3000),
            target_8:random(1300,3000),
            period_8:random(1300,3000),
            complete_8:random(13000,25000),
            plan_8:25000,
            ratio_8:0,
            current_9:random(30,60),
            period_9:random(30,60),
            complete_9:random(30,60),
            clinic_9:random(10,20),
            hospital_9:0,
            timer:null

          }
      },
      components:{
          headTitle,
          headSelect,
      },
    activated () {
      router('/sum',this,this.timer);

    },
      mounted () {
        let chart_1=eCharts.init(this.$refs.chart_1);
        let chart_2=eCharts.init(this.$refs.chart_2);
        let chart_3=eCharts.init(this.$refs.chart_3);
        let chart_4=eCharts.init(this.$refs.chart_4);
        let chart_5=eCharts.init(this.$refs.chart_5);
        let chart_6=eCharts.init(this.$refs.chart_6);
        let chart_7=eCharts.init(this.$refs.chart_7);
        let chart_8=eCharts.init(this.$refs.chart_8);
        let chart_9=eCharts.init(this.$refs.chart_9);
        let option={
          tooltip: {
            trigger: 'axis'
          },
//          legend: {
//            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
//          },
          grid: {
            top:'20%',
            left: '5%',
            right: '3%',
            bottom: '0',
            containLabel: true
          },
          // 工具箱
//          toolbox: {
//            feature: {
//              saveAsImage: {}
//            }
//          },
          xAxis: {
            type: 'category',
            axisLine:{
              lineStyle:{
                color:'#fff',
                width:1,//  坐标轴宽度 这里是为了突出显示加上的
              }
            },

            boundaryGap: true,
            data: [1,2,3,4,5,6,7,8,9,10,11,12]
          },
          yAxis: [{
            type: 'value',
//            max:25000,
            axisLine:{
              lineStyle:{
                color:'#fff',
                width:1,//  坐标轴宽度 这里是为了突出显示加上的
              }
            }


          }],
          series: [
            {
              name:'同期',
              type:'line',
              itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#f9ae0e'
                  }
                }
              },
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'当期',
              type:'line',
              itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#ebdf07'
                  }
                }
              },
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'指标',
              type:'line',
              itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#8bea7f'
                  }
                }
              },
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'指导',
              type:'line',
              itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#e9615c'
                  }
                }
              },
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'医保',
              type:'bar',
              barWidth: '60%',
              color:new eCharts.graphic.LinearGradient(0, 0, 0, 1, [{  // 渐变色


                // 0% 处的颜色
                offset: 0, color: '#82ebfb'  },
                {

                  // 100% 处的颜色
                  offset: 1, color: '#046cc2'
                }], false),
              data:[10, 52, 200, 334, 390, 330, 220]
            }
          ]
        };
        let chart_1_option=clone(option);
        let chart_2_option=clone(option);
        let chart_3_option=clone(option);
        let chart_4_option=clone(option);
        let chart_5_option=clone(option);
        let chart_6_option=clone(option);
        let chart_7_option=clone(option);
        let chart_8_option=clone(option);
        let chart_9_option=clone(option);

        chart_1_option.yAxis[0].max=25000;
        chart_1_option.yAxis[0].name='金额（万元）';

        chart_2_option.yAxis[0].max=300000;
        chart_2_option.yAxis[0].name='人次（人）';
        chart_2_option.yAxis[1]={
          type: 'value',
          name: '均次（元）',
          min: 0,
          max: 1152,
          position: 'right',
          axisLabel: {
            formatter: '{value}'
          },
          splitLine:{  // 去掉与坐标轴平行的直线
            show:false
          },
          axisTick: {
            show: false
          },
          axisLine:{
            lineStyle:{
              color:'#fff',
              width:1,//  坐标轴宽度 这里是为了突出显示加上的
            }
          }
        };

        chart_3_option.yAxis[0].max=25000;
        chart_3_option.yAxis[0].name='金额（万元）';
        chart_3_option.yAxis[1]={
          type: 'value',
          name: '日均费用（元）',
          min: 0,
          max: 7389,
          position: 'right',
          axisLabel: {
            formatter: '{value}'
          },
          splitLine:{  // 去掉与坐标轴平行的直线
            show:false
          },
          axisTick: {
            show: false
          },
          axisLine:{
            lineStyle:{
              color:'#fff',
              width:1,//  坐标轴宽度 这里是为了突出显示加上的
            }
          }
        };

        chart_4_option.yAxis[0].max=12000;
        chart_4_option.yAxis[0].name='金额（万元）';

        chart_5_option.yAxis[0].max=8000;
        chart_5_option.yAxis[0].name='人次（人）';
        chart_5_option.yAxis[1]={
          type: 'value',
          name: '均次（元）',
          min: 0,
          max: 55000,
          position: 'right',
          axisLabel: {
            formatter: '{value}'
          },
          splitLine:{  // 去掉与坐标轴平行的直线
            show:false
          },
          axisTick: {
            show: false
          },
          axisLine:{
            lineStyle:{
              color:'#fff',
              width:1,//  坐标轴宽度 这里是为了突出显示加上的
            }
          }
        };


        chart_6_option.yAxis[0].max=50;
        chart_6_option.yAxis[0].name='医疗（%）';
        chart_6_option.yAxis[0].axisLabel={
          show: true,
          interval: 'auto',
          formatter: '{value} %'
        }
        chart_6_option.series.itemStyle={
          normal: {
            label: {
              show: true,
              position: 'top',
              formatter: '{b}\n{c}%'
            }
          }
        }

        chart_7_option.yAxis[0].max=15000;
        chart_7_option.yAxis[0].name='金额（万元）';
        chart_7_option.yAxis[1]={
          type: 'value',
          name: '医保（%）',
          min: 0,
          max: 128,
          position: 'right',
          axisLabel: {
            formatter: '{value}%'
          },
          splitLine:{  // 去掉与坐标轴平行的直线
            show:false
          },
          axisTick: {
            show: false
          },
          axisLine:{
            lineStyle:{
              color:'#fff',
              width:1,//  坐标轴宽度 这里是为了突出显示加上的
            }
          }
        };


        chart_8_option.yAxis[0].max=2500;
        chart_8_option.yAxis[0].name='台数（例）';

        chart_9_option.yAxis[0].max=25;
        chart_9_option.yAxis[0].name='医疗';
        chart_9_option.yAxis[1]={
          type: 'value',
          name: '医保（%）',
          min: 0,
          max: 59,
          position: 'right',
          axisLabel: {
            formatter: '{value}%'
          },
          splitLine:{  // 去掉与坐标轴平行的直线
            show:false
          },
          axisTick: {
            show: false
          },
          axisLine:{
            lineStyle:{
              color:'#fff',
              width:1,//  坐标轴宽度 这里是为了突出显示加上的
            }
          }
        };

        chart_9_option.yAxis[0].axisLabel={
          show: true,
          interval: 'auto',
          formatter: '{value} %'
        }
        chart_9_option.series.itemStyle={
          normal: {
            label: {
              show: true,
              position: 'top',
              formatter: '{b}\n{c}%'
            }
          }
        }

        setInterval(()=>{
            this.current_1=random(10000,13000);
            this.target_1=random(10000,13000);
            this.period_1=random(10000,13000);
            this.complete_1=random(10000,13000);
            this.ratio_1=Math.floor((this.complete_1 / this.plan_1)*100);

            this.current_2=random(13000,300000);
            this.target_2=random(13000,300000);
            this.period_2=random(13000,300000);
            this.complete_2=random(13000,300000);
            this.ratio_2=Math.floor((this.complete_2 / this.plan_2)*100);


            this.current_3=random(6,10);
            this.target_3=random(6,10);
            this.period_3=random(6,10);
            this.complete_3=random(6,10);
            this.cost_3=random(2000,3000);

            this.current_4=random(13000,30000);
            this.target_4=random(13000,30000);
            this.period_4=random(13000,30000);
            this.complete_4=random(13000,30000);
            this.ratio_4=Math.floor((this.complete_4 / this.plan_4)*100);

            this.current_5=random(13000,30000);
            this.target_5=random(13000,30000);
            this.period_5=random(13000,30000);
            this.complete_5=random(13000,30000);
            this.ratio_5=Math.floor((this.complete_5 / this.plan_5)*100);

            this.current_6=random(20,50);
            this.target_6=random(20,50);
            this.complete_6=random(30,45);
            this.plan_6=46;

            this.current_7=random(7000,8000);
            this.target_7=random(7000,8000);
            this.period_7=random(13000,15000);
            this.complete_7=random(60000,80000);
            this.plan_7=80000;
            this.ratio_7=Math.floor((this.complete_7 / this.plan_7)*100);

            this.current_8=random(1300,3000);
            this.target_8=random(1300,3000);
            this.period_8=random(1300,3000);
            this.complete_8=random(13000,25000);
            this.plan_8=25000;
            this.ratio_8=Math.floor((this.complete_8 / this.plan_8)*100);

            this.current_9=random(30,60);
            this.period_9=random(30,60);
            this.complete_9=random(30,60);
            this.clinic_9=random(10,20);
            this.hospital_9=random(30,60);



            // 全院收入
          chart_1_option.series[0].data=[random(15000,24900),random(15000,24900),random(15000,24900),random(15000,24900),random(15000,24900),random(15000,24900),random(15000,24900),random(15000,24900),random(15000,24900),random(15000,24900),random(15000,24900),random(15000,24900)];
          chart_1_option.series[1].data=[random(15000,22000),random(15000,22000),random(15000,22000),random(15000,22000),random(15000,22000),random(15000,22000)];
          chart_1_option.series[2].data=[0,0,0,0,0,0];
          chart_1_option.series[3].data=[null,null,null,null,null,null,0,0,0,0,0,0];
          chart_1_option.series[4].data=[random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000)];


          // 门诊人次
          chart_2_option.series[0].data=[random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000),random(180000,240000)];
          chart_2_option.series[1].data=[random(120000,250000),random(120000,250000),random(120000,250000),random(120000,250000),random(120000,250000),random(120000,250000)];
          chart_2_option.series[2].data=[random(240000,300000),random(240000,300000),random(240000,300000),random(240000,300000),random(240000,300000),random(240000,300000),random(240000,300000),random(240000,300000),random(240000,300000),random(240000,300000),random(240000,300000),random(240000,300000)];
          chart_2_option.series[3].data=[null,null,null,null,null,null,random(250000,270000),random(250000,270000),random(250000,270000),random(250000,270000),random(250000,270000),random(250000,270000),];
          chart_2_option.series[4].data=[random(60000,120000),random(60000,120000),random(60000,120000),random(60000,120000),random(60000,120000),random(60000,120000),random(60000,120000)];


          // 平均住院日
          chart_3_option.series[0].data=[random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000),random(10000,20000)];
          chart_3_option.series[1].data=[random(7500,17500),random(7500,17500),random(7500,17500),random(7500,17500),random(7500,17500),random(7500,17500)];
          chart_3_option.series[2].data=[random(18000,20000),random(18000,20000),random(18000,20000),random(18000,20000),random(18000,20000),random(18000,20000),random(18000,20000),random(18000,20000),random(18000,20000),random(18000,20000),random(18000,20000),random(18000,20000)];
          chart_3_option.series[3].data=[null,null,null,null,null,null,random(22000,25000),random(22000,25000),random(22000,25000),random(22000,25000),random(22000,25000),random(22000,25000)];
          chart_3_option.series[4].data=[random(5000,10000),random(5000,10000),random(5000,10000),random(5000,10000),random(5000,10000),random(5000,10000)];


          // 门诊收入
          chart_4_option.series[0].data=[random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000)];
          chart_4_option.series[1].data=[random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000),random(7000,10000)];
          chart_4_option.series[2].data=[0,0,0,0,0,0];
          chart_4_option.series[3].data=[null,null,null,null,null,null,0,0,0,0,0,0];
          chart_4_option.series[4].data=[random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),random(3000,5000),];


          // 出院人次
          chart_5_option.series[0].data=[random(4500,6800),random(4500,6800),random(4500,6800),random(4500,6800),random(4500,6800),random(4500,6800),random(4500,6800),random(4500,6800),random(4500,6800),random(4500,6800),random(4500,6800),random(4500,6800)];
          chart_5_option.series[1].data=[random(4000,7000),random(4000,7000),random(4000,7000),random(4000,7000),random(4000,7000),random(4000,7000)];
          chart_5_option.series[2].data=[random(5000,7500),random(5000,7500),random(5000,7500),random(5000,7500),random(5000,7500),random(5000,7500),random(5000,7500),random(5000,7500),random(5000,7500),random(5000,7500),random(5000,7500),random(5000,7500)];
          chart_5_option.series[3].data=[null,null,null,null,null,null,random(6300,6700),random(6300,6700),random(6300,6700),random(6300,6700),random(6300,6700),random(6300,6700)];
          chart_5_option.series[4].data=[random(3000,4000),random(3000,4000),random(3000,4000),random(3000,4000),random(3000,4000),random(3000,4000)];


          // 药占比
          chart_6_option.series[0].data=[random(30,50),random(30,50),random(30,50),random(30,50),random(30,50),random(30,50),random(30,50),random(30,50),random(30,50),random(30,50),random(30,50),random(30,50)];
          chart_6_option.series[1].data=[random(20,30),random(20,30),random(20,30),random(20,30),random(20,30),random(20,30)];
          chart_6_option.series[2].data=[];
          chart_6_option.series[3].data=[];
          chart_6_option.series[4].data=[random(13,20),random(13,20),random(13,20),random(13,20),random(13,20),random(13,20)];


          // 住院收入
          chart_7_option.series[0].data=[random(8000,15000),random(8000,15000),random(8000,15000),random(8000,15000),random(8000,15000),random(8000,15000),random(8000,15000),random(8000,15000),random(8000,15000),random(8000,15000),random(8000,15000),random(8000,15000)];
          chart_7_option.series[1].data=[random(7000,13000),random(7000,13000),random(7000,13000),random(7000,13000),random(7000,13000),random(7000,13000)];
          chart_7_option.series[2].data=[0,0,0,0,0,0];
          chart_7_option.series[3].data=[null,null,null,null,null,null,0,0,0,0,0,0];
          chart_7_option.series[4].data=[random(3000,6000),random(3000,6000),random(3000,6000),random(3000,6000),random(3000,6000),random(3000,6000)];


          // 手术例数
          chart_8_option.series[0].data=[random(1500,2300),random(1500,2300),random(1500,2300),random(1500,2300),random(1500,2300),random(1500,2300),random(1500,2300),random(1500,2300),random(1500,2300),random(1500,2300),random(1500,2300),random(1500,2300)];
          chart_8_option.series[1].data=[random(1200,2200),random(1200,2200),random(1200,2200),random(1200,2200),random(1200,2200),random(1200,2200)];
          chart_8_option.series[2].data=[random(1500,2500),random(1500,2500),random(1500,2500),random(1500,2500),random(1500,2500),random(1500,2500),random(1500,2500),random(1500,2500),random(1500,2500),random(1500,2500),random(1500,2500),random(1500,2500)];
          chart_8_option.series[3].data=[null,null,null,null,null,null,random(2200,2300),random(2200,2300),random(2200,2300),random(2200,2300),random(2200,2300),random(2200,2300)];
          chart_8_option.series[4]={
              type:'bar',
              stack: '级别',
            color:'#43a8ef',
            data:[random(600,700), random(600,700), random(600,700), random(600,700)]

          };
          chart_8_option.series[5]={
            type:'bar',
            stack: '级别',
            color:'#2d72ff',
            data:[random(0,300), random(0,300), random(0,300), random(0,300)]

          };
          chart_8_option.series[6]={
            type:'bar',
            stack: '级别',
            color:'#916ada',
            data:[random(0,500), random(0,500), random(0,500), random(0,500)]
          };
            chart_8_option.series[7]={
              type:'bar',
              stack: '级别',
              color:'#14c6c9',

              data:[random(0,500), random(0,500), random(0,500), random(0,500)]
            };


          // 材料占比
          chart_9_option.series[0].data=[random(15,20),random(15,20),random(15,20),random(15,20),random(15,20),random(15,20),random(15,20),random(15,20),random(15,20),random(15,20),random(15,20),random(15,20)];
          chart_9_option.series[1].data=[random(15,23),random(15,23),random(15,23),random(15,23),random(15,23),random(15,23)];
          chart_9_option.series[2].data=[];
          chart_9_option.series[3].data=[];
          chart_9_option.series[4].data=[random(12,18),random(12,18),random(12,18),random(12,18),random(12,18),random(12,18)];



          chart_1.setOption(chart_1_option,true);
          chart_2.setOption(chart_2_option,true);
          chart_3.setOption(chart_3_option,true);
          chart_4.setOption(chart_4_option,true);
          chart_5.setOption(chart_5_option,true);
          chart_6.setOption(chart_6_option,true);
          chart_7.setOption(chart_7_option,true);
          chart_8.setOption(chart_8_option,true);
          chart_9.setOption(chart_9_option,true);

        },2000)
        window.onresize=function(){
          chart_1.resize();
          chart_2.resize();
          chart_3.resize();
          chart_4.resize();
          chart_5.resize();
          chart_6.resize();
          chart_7.resize();
          chart_8.resize();
          chart_9.resize();

        }
      }
  }
</script>
