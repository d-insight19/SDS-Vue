<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery study_agree">
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">급여 공제 동의서</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        <p class="txt-tit">미수료시 급여 공제 동의</p>
                        <p class="txt-tit-2">미수료시 미해당 교육비만큼 급여에서 차감</p>
                        <p class="txt-tit-3">안녕하세요. 솔로몬저축은행 이러닝센터입니다.<br/>다음 안내 사항을 확인 하신 후 동의 버튼을 클릭해 주시기 바랍니다.</p>
                        <ul class="ulList">
                            <li>
                                <p class="li-txt in12_16">・솔로몬저축은행 이러닝센터에서 진행되는 과정들은 미수료시 교육비 전액 급여에서 공제됩니다.</p>
                            </li>
                            <li class="mb30">
                                <p class="li-txt in12_16">・반드시 과정별 수료기준을 확인하시고, 성실하게 학습에 임해 주시기 바랍니다. 상기 내용을 숙지 하셨으면 ‘동의합니다’ 버튼을 클릭해 주시기 바랍니다.</p>
                            </li>                            
                        </ul>
                        <p class="txt-tit-4">상기 규정을 분명히 숙지하였습니다.</p>
                        <p class="line01"></p>
                        <slp-checkbox >위 사항에 동의합니다.</slp-checkbox>
                        <!-- <div class="loginChk">
                            <label for="agree" class="labelChk">
                            <input id="agree" type="checkbox" class="chk" name="agree">
                            <span class="ico"></span>
                            <span class="label">주의사항에 동의합니다.</span>
                            </label>
                        </div> -->     
                    </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floatingbtn -->
            <div class="absBtmBtn">  
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
