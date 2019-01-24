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
                    학습 현황 통계 <span class="mono_50">6</span> <span class="ico down"></span>
                    <span class="ico filter"></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb14"> <span class="color_clr2">2018년</span> 나의 학습 현황 </h2>
                <!-- status -->
                <div class="status">
                    <div class="white gray_bg border">
                        <div class="info">
                            <p class="font_14">총 학습시간</p>
                            <p class="font_18 mt4"><strong class="font_20">78</strong> 시간 <strong class="font_20">52</strong> 분</p>
                        </div>
                        <dl>
                            <dt>이러닝</dt>
                            <dd><strong>32</strong> 시간 <strong>23</strong> 분</dd>
                        </dl>
                        <dl class="line">
                            <dt>지식</dt>
                            <dd><strong>16</strong> 시간 <strong>23</strong> 분</dd>
                        </dl>
                        <dl class="line">
                            <dt>집합</dt>
                            <dd><strong>20</strong> 시간 <strong>06</strong> 분</dd>
                        </dl>
                    </div>
                </div>
                <!-- //status -->
                <p class="hr mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="label-tit20 w100p">월별 학습시간</h2>
                <ul class="diagram_wrap type2 tar mb16">
                    <li class="type1">이러닝</li>
                    <li class="type4">지식</li>
                    <li class="type5">집합</li>             
                </ul>
                <!-- basic bar2 -->
                <ul class="progBox_wrap">
                    <li>
                        <p>1월<span class="fr">총 10시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>2월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>3월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>4월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>5월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>6월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>7월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>8월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>9월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>10월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>11월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                    <li>
                        <p>12월<span class="fr">총 2시간 30분</span></p>
                        <div class="progBox">
                            <div class="bar1" style="width: 40%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar4" style="width: 10%; height:8px;"></div>
                        </div>
                        <div class="progBox">
                            <div class="bar5" style="width: 50%; height:8px;"></div>
                        </div>
                    </li>
                </ul>
                <!-- //basic bar2 -->
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
  name: 'MySpace_studystatistics',
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
