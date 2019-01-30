<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

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
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb5">학습 독려 설정</h2>
                <p class="font_14 mono_65">전체적인 알림 설정과 학습 계획을 변경할 때 이용합니다.</p>
                <p class="font_14 mono_65 mb15">학습 기간이 지난 일정에 대해서는 변경되지 않습니다.</p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <p class="font_16 mono_100 pdt16 btB89">
                    알림 설정
                    <slp-switch class="fr" value="" disabled></slp-switch>
                </p>
                
            </div>
          </div>
          
          <div class="cell">
            <div class="inner pdt16 ">
                <p class="font_16 mono_100 pdt16 pb10 btB89">알림 수단</p>
                <slp-checkbox type="button" disabled>전화</slp-checkbox>
                <slp-checkbox type="button" disabled>카카오톡</slp-checkbox>
                <slp-checkbox type="button" disabled>이메일</slp-checkbox>
            </div>
          </div>
          
          <div class="cell">
            <div class="inner pdt16 ">
                <p class="font_16 mono_100 pdt16 btB89 pb10">알림 주기</p>
                <ul class="radioList">
                    <li>
                        <slp-radio name="push_cycle" innerCircle="true" v-model="radioValue" native-value="disabled" disabled>매주 1회</slp-radio>
                    </li>
                    <li>
                        <slp-radio name="push_cycle" innerCircle="true" v-model="radioValue" native-value="disabled" disabled>격주 1회</slp-radio>
                    </li>
                    <li>
                        <slp-radio name="push_cycle" innerCircle="true" v-model="radioValue" native-value="disabled" disabled>
                            종료일 집중
                            <p class="font_13 mono_25">종료일 <span>2018.10.14 ~ 2018.10.31</span></p>
                        </slp-radio>
                    </li>
                </ul>
            </div>
          </div>
        

        </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn">  
                <button type="button" class="btn ld clr1" disabled="disabled">다음</button>
            </div>
            <!-- //floatingbtn -->
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_learningjourney_encourage_off',
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
