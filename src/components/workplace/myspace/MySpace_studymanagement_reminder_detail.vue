<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="tab clr4">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">마케팅 관련 상시 보고서 양식, 중간 범위 확인 요망  </p>
            </div>
            <div class="hide_header" style="padding-top:74px;padding-bottom:25px;position:relative;">
                <div class="tagWrap mb5"><span>리마인더</span></div>
                <h3 class="h-tit3 font_22 fwb600 multiline line2 mb5">마케팅 관련 상시 보고서 양식, 중간 범위 확인 요망</h3>
                
                <ul class="info mt25">
                    <li class="mono_80">2018.10.10</li>
                </ul>
                <span class="ico more28" @click="changeLang1()"></span>
                <div class="dropdown_wrap" v-show="langFlag1" >
                    <div class="sheetDim" @click="changeLang1()"></div>
                    <div class="dropdown">            
                        <ul  @click="changeLang1()">
                        <!-- 
                            position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                        -->
                        <li>나의 지식 CLIPing</li>
                        <li>나의 지식 CLIPing</li>
                        <li>내가 본 콘텐츠</li>
                        <li>관심 CLIPing</li>
                        <li>나의 지식 CLIPing 활동 이력</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">

            <div class="cell">
                <div class="inner">
                    <p class="font_14 mono_65 fwr">과정명</p>
                    <p class="font_17 fwb mb16">이석규 교수의 마케팅 핵심원리와 실전전략</p>

                    <p class="font_15 fwr mb18 btB89 pt18">마케팅 관련 상시 보고서 양식,  중간 범위 필수 확인 요망 확인 부탁드립니다.  마케팅 관련 상시 보고서 양식, 중간 범위 필수 확인 요망 확인 부탁드립니다. </p>
                    <div class="w100p mb18">
                    <img src="@/assets/img/thum_no_L.jpg" class="w100p" alt="">
                    </div>
                    <p class="font_15 fwr mb18">마케팅 관련 상시 보고서 양식,  중간 범위 필수 확인 요망 확인 부탁드립니다.  마케팅 관련 상시 보고서 양식, 중간 범위 필수 확인 요망 확인 부탁드립니다. </p>
                    
                    <!-- list -->
                    <ul class="multiList type2">
                        <li>
                            <div class="download_detail">
                                <div class="icon_wrap">
                                    <span class="ico headphone_28"></span>
                                </div>
                                <div class="txt_wrap">
                                    <p class="title">데이터와 배열 활용하기</p>
                                </div>
                            </div>
                            <span class="ico next_16"></span>
                        </li>
                        <li>
                            <div class="download_detail">
                                <div class="icon_wrap">
                                    <span class="ico play_28"></span>
                                </div>
                                <div class="txt_wrap">
                                    <p class="title">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’</p>
                                </div>
                            </div>
                            <span class="ico next_16"></span>
                        </li>
                        <li>
                            <div class="download_detail">
                                <div class="icon_wrap">
                                    <span class="ico ebook_28"></span>
                                </div>
                                <div class="txt_wrap">
                                    <p class="title">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’</p>
                                </div>
                            </div>
                            <span class="ico next_16"></span>
                        </li>
                    </ul>
                    <!-- //list -->
                    
                    <p class="label-tit-2 mt36"><strong>첨부파일</strong></p>
                    <ul class="ulList type4">
                        <li>
                            <div>
                                <span class="ico img-a"></span>
                                <span class="at-tit">Solution listup.jpg</span>
                                <div class="fr">
                                    <span class="at-num">500KB</span>
                                    <a href="#"><span class="ico download"></span></a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                    <span class="at-num">4.5M</span>
                                    <span class="ico download"></span>
                                </div>
                            </div>
                        </li>
                        <li class="bottom-bd">
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                    <span class="at-num">4.5M</span>
                                    <span class="ico download"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
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
  name: 'MySpace_studymanagement_reminder_detail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      langFlag1: false
    }
  },
  /* vue function */
  methods: {
    changeLang1 () {
      this.langFlag1 = !this.langFlag1
    }
  }
}
</script>
