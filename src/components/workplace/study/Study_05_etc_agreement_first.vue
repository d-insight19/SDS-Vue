<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery study_agree ">
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">최조 학습전 확인 절차</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        
                        <p class="label-tit-2">약관동의</p>
                        <!-- 동의 리스트 -->
                        <div class="agreeAll">
                            <slp-checkbox >전체동의</slp-checkbox>
                        </div>
                        <ul class="agreeList">
                            <li>
                                <slp-checkbox>서비스 이용약관 동의 (필수)</slp-checkbox>
                            </li>
                            <li>
                                <slp-checkbox>개인정보 수집 및 이용 동의 (필수)</slp-checkbox>
                            </li>
                            <li>
                                <slp-checkbox>개인정보 취급 위탁 동의 (필수)</slp-checkbox>
                            </li>
                            <li>
                                <slp-checkbox>개인정보 제 3자 제공 동의 (필수)</slp-checkbox>
                            </li>
                        </ul>
                        <!-- //동의 리스트 -->


                    </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md clr1">확인</button>
            </div>
            <!-- //floatingbtn -->   

        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Study_02_studystatus_assessment_notice',
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
