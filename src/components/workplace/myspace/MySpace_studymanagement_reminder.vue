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
                    <li class="on"><a href="#tab6">학습 관리</a></li>
                    <li><a href="#tab7">학습 통계</a></li>
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
                    리마인더 <span class="mono_50">6</span> <span class="ico down"></span>
                    <span class="ico filter"></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <!-- list -->
                <ul class="multiList type2 pb15">
                    <li>
                        <div class="txt_wrap">
                            <p class="title">마케팅 관련 상시 보고서 양식, 중간 범위 확인 요망  </p>
                            <p class="contents multiline line1 mono_100">
                                <span class="fwb mr6">과정명</span>
                                [노병천 박사의 오딧세이] 불멸의 전투, 리더십...
                            </p>
                            <ul class="info">
                                <li class="mono_65">2018.10.10</li>
                            </ul>
                            <span class="ico del"></span>
                        </div>
                    </li>
                    <li>
                        <div class="txt_wrap">
                            <p class="title">중간 평가 마케팅 기본 평가</p>
                            <p class="contents multiline line1 mono_100">
                                <span class="fwb mr6">과정명</span>
                                The Complete App Design Course - UX, UI and…
                            </p>
                            <ul class="info">
                                <li class="mono_65">2018.10.10</li>
                            </ul>
                            <span class="ico del"></span>
                        </div>
                    </li>
                    <li>
                        <div class="txt_wrap">
                            <p class="title">디자인 관련 상시 보고서 양식</p>
                            <p class="contents multiline line1 mono_100">
                                <span class="fwb mr6">과정명</span>
                                업무에 바로 쓰는 자바 프로그래밍 입문
                            </p>
                            <ul class="info">
                                <li class="mono_65">2018.10.10</li>
                            </ul>
                            <span class="ico del"></span>
                        </div>
                    </li>
                    <li>
                        <div class="txt_wrap">
                            <p class="title">마케팅 관련 상시 보고서 양식, 중간 범위 확인 요망  </p>
                            <p class="contents multiline line1 mono_100">
                                <span class="fwb mr6">과정명</span>
                                상극도 내편으로 만드는 소통비법, 커뮤니데아
                            </p>
                            <ul class="info">
                                <li class="mono_65">2018.10.10</li>
                            </ul>
                            <span class="ico del"></span>
                        </div>
                    </li>
                    <li>
                        <div class="txt_wrap">
                            <p class="title">남다른 인생을 사는법</p>
                            <p class="contents multiline line1 mono_100">
                                <span class="fwb mr6">과정명</span>
                                [인문학 인사이트] 한비자, 리더를 말하다
                            </p>
                            <ul class="info">
                                <li class="mono_65">2018.10.10</li>
                            </ul>
                            <span class="ico del"></span>
                        </div>
                    </li>
                    <li>
                        <div class="txt_wrap">
                            <p class="title">마케팅 관련 상시 보고서 양식, 중간 범위 확인 요망  </p>
                            <p class="contents multiline line1 mono_100">
                                <span class="fwb mr6">과정명</span>
                                업무에 바로 쓰는 자바 프로그래밍 입문
                            </p>
                            <ul class="info">
                                <li class="mono_65">2018.10.10</li>
                            </ul>
                            <span class="ico del"></span>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
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
  name: 'MySpace_studymanagement_reminder',
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
