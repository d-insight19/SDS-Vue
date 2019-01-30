<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace gray_bg">

        <!-- header -->
        <div id="header" class="fixed">
            <div class="header_inner line1">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_18">학습캘린더 설정</p>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">

          <div class="cell">
            <div class="filterArea ml-18 mr-18">
                <p class="font_15 mono_80 fwb">
                    보유 내역 <span class="mono_50">6</span> <span class="ico down"></span>
                    <span class="ico addcoupon"></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner pt0">
                <ul class="couponList">
                    <li>
                        <div class="in">
                            <div class="summary">
                                <p class="color_clr2"><span class="font_32">30</span>%</p>
                            </div>
                            <div class="detail">
                                <p class="title">[기간한정] 특별 교육 대상자 추가 할인 쿠폰</p>
                                <p class="term">유효기간 <span>2018.10.01 - 2018.10.31</span></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="summary">
                                <p class="color_clr2">무료강의</p>
                            </div>
                            <div class="detail">
                                <p class="title">[무료] 한글날 특별 이벤트 무료 교육 대상자 무료강의 쿠...</p>
                                <p class="term">유효기간 <span>2018.10.01 - 2018.10.31</span></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="summary">
                                <p><span class="font_32">45</span>%</p>
                                <span class="chip">기간만료</span>
                            </div>
                            <div class="detail">
                                <p class="title">[기간한정] 특별 교육 대상자 추가 할인 쿠폰</p>
                                <p class="term">유효기간 <span>2018.10.01 - 2018.10.31</span></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="summary">
                                <p><span class="font_32">45</span>%</p>
                                <span class="chip">사용완료</span>
                            </div>
                            <div class="detail">
                                <p class="title">[기간한정] 특별 교육 대상자 추가 할인 쿠폰</p>
                                <p class="term">유효기간 <span>2018.10.01 - 2018.10.31</span></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="summary">
                                <p class="color_clr2"><span class="font_32">30</span>%</p>
                            </div>
                            <div class="detail">
                                <p class="title">[특급] 한글날 이벤트 쿠폰</p>
                                <p class="term">유효기간 <span>2018.10.01 - 2018.10.31</span></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <div class="summary">
                                <p class="color_clr2"><span class="font_32">70</span>%</p>
                            </div>
                            <div class="detail">
                                <p class="title">[특가] 특별 교육 대상자 추가 할인 쿠폰</p>
                                <p class="term">유효기간 <span>2018.10.01 - 2018.10.31</span></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
          </div>

        </div>
        
        <!-- filterListArea -->
        <div id="sheetDim"></div>
        <div class="filterListArea">
            <span class="handle"></span>
            <h2 class="h-tit2 fwb600 mb10 pl18 pr18">
                필터타이틀
                <span class="fr color_clr2 font_16 fwr">적용</span>
            </h2>
            <div class="btB89 pl18 pr18">
                <p class="font_16 mono_100 pdt22  pb10">리스트 타이틀</p>
                <ul class="radioList2 pb10">
                    <li>
                        <slp-radio name="name1" innerCircle="true" v-model="radioValue" native-value="checked">선택됨</slp-radio>
                    </li>
                    <li>
                        <slp-radio name="name1" innerCircle="true" v-model="radioValue" native-value="checkable">선택가능</slp-radio>
                    </li>
                    <li>
                        <slp-radio name="name1" innerCircle="true" v-model="radioValue" native-value="checkable">선택가능</slp-radio>
                    </li>
                </ul>

                <p class="font_16 mono_100 pdt22 btB89 pb10">리스트 타이틀</p>
                <ul class="radioList2 pb10">
                    <li>
                        <slp-radio name="name2" innerCircle="true" v-model="radioValue" native-value="checked">선택됨</slp-radio>
                    </li>
                    <li>
                        <slp-radio name="name2" innerCircle="true" v-model="radioValue" native-value="checkable">선택가능</slp-radio>
                    </li>
                    <li>
                        <slp-radio name="name2" innerCircle="true" v-model="radioValue" native-value="checkable">선택가능</slp-radio>
                    </li>
                    <li>
                        <slp-radio name="name2" innerCircle="true" v-model="radioValue" native-value="checkable">선택가능</slp-radio>
                    </li>
                </ul>

                <p class="font_16 mono_100 pdt22 btB89 pb10">리스트 타이틀</p>
                <ul class="radioList2 pb10">
                    <li>
                        <slp-checkbox value="true">선택됨</slp-checkbox>
                    </li>
                    <li>
                        <slp-checkbox>선택가능</slp-checkbox>
                    </li>
                    <li>
                        <slp-checkbox>선택가능</slp-checkbox>
                    </li>
                    <li>
                        <slp-checkbox>선택가능</slp-checkbox>
                    </li>
                </ul>
            </div>
        </div>
        <!-- //filterListArea -->
      </div>
      <!-- //container -->     
      
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_filter',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      radioValue: 'checked'
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
