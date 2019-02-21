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
                <p class="header_text font_18">리더십의 본질적인 조건을 생각 해보다가 떠오른 메모 </p>
            </div>
            <div class="hide_header" style="padding-top:74px;padding-bottom:25px;">
                <div class="tagWrap mb5"><span>학습노트</span></div>
                <slp-dropdown dimmed v-model="lang">
                    <span class="ico more28" slot="trigger"></span>
                    <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
                    <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
                    <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
                    <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
                </slp-dropdown>
                <h3 class="h-tit3 font_22 fwb600 multiline line2 mb5">리더십의 본질적인 조건을 생각 해보다가 떠오른 메모</h3>
                <ul class="info">
                    <li class="mono_80">공개</li>
                    <li class="mono_80">2018.10.10</li>
                    <li class="mono_80"><span class="ico folder_16"></span>기본노트</li>
                </ul>
                <ul class="info mt25">
                    <li class="">업무에 바로 쓰는 자바 프로그래밍 입문</li>
                    <li class="">12차시</li>
                </ul>
                <span class="chip color2">01:36 <span class="ico play_16 blue"></span></span>
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="normal">

            <div class="cell">
                <div class="inner">
                    <p class="font_15 fwr">본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. </p>
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
  name: 'MySpace_studymanagement_note_detail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      lang: '한국어'
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
