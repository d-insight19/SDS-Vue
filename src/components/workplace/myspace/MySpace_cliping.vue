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
                    <li class="on"><a href="#tab5">나의 지식 CLIPing</a></li>
                    <li><a href="#tab6">학습 관리</a></li>
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
                <p class="font_15 mono_80 fwb"> 나의 학습 계획 <span class="ico down"></span></p>
            </div>
          </div>
        
          
          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb20">
                    나의 학습 현황
                    <span class="fr font_13 mono_80 fwr">2018월 10월 <span class="ico ico_dropdown16"></span></span>
                </h2>
                <ul class="myLearn">
                    <li>
                        <div iv class="fl">
                            <div class="info">
                                <img src="@/assets/img/ic_clock_line_64.png" class="thumImg" alt="">
                            </div>
                            <p>총 학습시간</p>
                            <p><strong>20</strong> 시간 <strong>30</strong> 분</p>
                        </div>
                        <div class="fr">
                            <div class="info">
                                <img src="@/assets/img/ic_note_line_64.png" class="thumImg" alt="">
                            </div>
                            <p>총 학습편수</p>
                            <p><strong>97</strong> 편</p>
                        </div>
                    </li>
                    <li>
                        <div class="fl">
                            <p><span class="mono_80">지식영상</span> <strong>32</strong> <span>편</span></p>
                        </div>
                        <div class="fr">
                            <p><span class="mono_80">도서요약</span> <strong>32</strong> 편</p>
                        </div>
                    </li>
                    <li>
                        <div class="fl">
                            <p><span class="mono_80">서평칼럼</span> <strong>32</strong> <span>편</span></p>
                        </div>
                        <div class="fr">
                            <p><span class="mono_80">Paper Pro</span> <strong>32</strong> 편</p>
                        </div>
                    </li>
                </ul>
            </div>
            <p class="hr mb0"></p>
          </div>

          <div class="cell">
            <div class="inner">
                <!-- basic bar4 -->
                <h2 class="label-tit20">학습 성향 분석</h2>
                <p class="person">회원님의 최근 6개월간 지식영상 카테고리 별 학습 현황을 확인해 보세요.</p>
                <ul class="progBox_wrap2">
                    <li>
                        <div class="progText">
                            Business
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 8%; height:8px;"></div>
                                <div class="progMent">8%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Biz.Professional
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 19%; height:8px;"></div>
                                <div class="progMent">19%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Leadership
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 4%; height:8px;"></div>
                                <div class="progMent">4%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Work Smart
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 17%; height:8px;"></div>
                                <div class="progMent">17%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Global
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 51%; height:8px;"></div>
                                <div class="progMent">27%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Family / Life
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 20%; height:8px;"></div>
                                <div class="progMent">20%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Humanities
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 6%; height:8px;"></div>
                                <div class="progMent">6%</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- //basic bar4 -->
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
  name: 'MySpace_cliping',
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
