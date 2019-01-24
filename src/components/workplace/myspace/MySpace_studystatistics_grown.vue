<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="fixed tab">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">나의 공간</p>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="scrollTab">
                    <li><a href="#tab1">정규 학습</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">자율 학습</a></li>
                    <li><a href="#tab3">학습 계획</a></li>
                    <li><a href="#tab4">다운로드</a></li>
                    <li><a href="#tab5">나의 지식 CLIPing</a></li>
                    <li><a href="#tab6">학습 관리</a></li>
                    <li class="on"><a href="#tab7">학습 통계</a></li>
                    <li><a href="#tab8">학점 현황</a></li>
                    <li><a href="#tab9">포인트 현황</a></li>
                    <li><a href="#tab10">쿠폰 관리</a></li>
                </ul>
            </div>
            <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">

          <div class="cell">
            <div class="filterArea ml-18 mr-18">
                <p class="font_15 mono_80 fwb">
                    나의 성장 <span class="ico down"></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <!-- stacked bar -->
                <h2 class="label-tit20 fwb w100p">주요 학습분야</h2>
                <ul class="progBox_wrap">
                    <li>
                        <h3 class="label-tit16 fwb w100p">2017년</h3>
                        <div class="progBox" style="height: 10px !important;">
                            <div class="bar1" style="width: 20%;height: 10px;"></div>
                            <div class="bar2" style="width: 20%;height: 10px;"></div>
                            <div class="bar3" style="width: 40%;height: 10px;"></div>
                            <div class="bar4" style="width: 20%;height: 10px;"></div>
                        </div>
                        <div class="txt-wrap clearfix">
                            <ul class="diagram_wrap type2">
                                <li class="type1 w48p">기타 <span class="fwb">20%</span></li>
                                <li class="type2 w48p">직무 <span class="fwb">20%</span></li>
                                <li class="type3 w48p">리더십 <span class="fwb">40%</span></li>
                                <li class="type4 w48p">외국어 <span class="fwb">20%</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h3 class="label-tit16 fwb w100p">2018년</h3>
                        <div class="progBox" style="height: 10px !important;">
                            <div class="bar1" style="width: 10%;height: 10px;"></div>
                            <div class="bar2" style="width: 30%;height: 10px;"></div>
                            <div class="bar3" style="width: 20%;height: 10px;"></div>
                            <div class="bar4" style="width: 40%;height: 10px;"></div>
                        </div>
                        <div class="txt-wrap clearfix">
                            <ul class="diagram_wrap type2">
                                <li class="type1 w48p">기타 <span class="fwb">10%</span></li>
                                <li class="type2 w48p">직무 <span class="fwb">30%</span></li>
                                <li class="type3 w48p">리더십 <span class="fwb">20%</span></li>
                                <li class="type4 w48p">외국어 <span class="fwb">40%</span></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <!-- //stacked bar -->
                <p class="hr mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="label-tit20 w100p">정규학습</h2>
                <table class="studystatistics">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"><span class="font_13 mono_100 fwb">2017년</span></th>
                            <th scope="col"><span class="font_13 mono_100 fwb">2018년</span></th>
                            <th scope="col"><span class="font_13 mono_100 fwb">성장률</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="font_13 mono_100 fwb">점수</span></td>
                            <td class="tac"><span class="font_13 mono_80 fwl">90점</span></td>
                            <td class="tac"><span class="font_13 mono_100 fwb">80점</span></td>
                            <td class="tac"><span class="font_13 mono_100 fwb">-12%</span></td>
                        </tr>
                        <tr>
                            <td><span class="font_13 mono_100 fwb">수료율</span></td>
                            <td class="tac"><span class="font_13 mono_80 fwl">82%</span></td>
                            <td class="tac"><span class="font_13 mono_80 fwl">80%</span></td>
                            <td class="tac"><span class="font_13 mono_80 fwl">-25%</span></td>
                        </tr>
                    </tbody>
                </table>
                <p class="hr mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="label-tit20 w100p">자율학습</h2>
                <table class="studystatistics">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"><span class="font_13 mono_100 fwb">2017년</span></th>
                            <th scope="col"><span class="font_13 mono_100 fwb">2018년</span></th>
                            <th scope="col"><span class="font_13 mono_100 fwb">성장률</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="font_13 mono_100 fwb">학습시간</span></td>
                            <td class="tac"><span class="font_13 mono_80 fwl">20시간 10분</span></td>
                            <td class="tac"><span class="font_13 mono_100 fwb">13시간 35분</span></td>
                            <td class="tac"><span class="font_13 mono_100 fwb">-33%</span></td>
                        </tr>
                        <tr>
                            <td><span class="font_13 mono_100 fwb">학습편수</span></td>
                            <td class="tac"><span class="font_13 mono_80 fwl">20편</span></td>
                            <td class="tac"><span class="font_13 mono_80 fwl">12편</span></td>
                            <td class="tac"><span class="font_13 mono_80 fwl">-40%</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

        </div>
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_studystatistics_grown',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
