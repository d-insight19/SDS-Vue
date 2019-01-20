<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery study_pledge pd70">
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_14">준법 및 윤리경영을 위한 임직원 준법 실천 서..</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner" style="padding-top:82px;">
                        <p class="sub-txt op80">나는 법과 윤리를 준수하고, 삼성인의 사고와 행동기준이 되는 「삼성 경영원칙」, 「청결한 조직문화를 위한 임직원 가이드 라인」, 「컴플라이언스 운영규정」을 적극 실천할 것을 서약합니다.</p>
                        <p class="line01 mtb"></p>
                        <ul class="ulList">
                            <li>
                                <p class="li-txt">첫째</p>
                                <p class="li-txt li-txt-2">나는 「삼성 경영원칙」, 「청결한 조직문화를 위한 임직원 가이드 라인」, 「컴플라이언스 운영규정」 을 충분히 읽고 이해하였으며, 이를 반드시 준수하겠습니다.</p>
                            </li>
                            <li>
                                <p class="li-txt">둘째</p>
                                <p class="li-txt li-txt-2">나는 업무를  수행함에 있어 공정거래, 하도급, 개인정보보호 등 국내의 법규와 회사 규정에 위반되는 행위를 하거나 이를 지시, 승인, 방조 또는 묵인하지 않겠습니다.</p>
                            </li>
                            <li class="mb26">
                                <p class="li-txt">셋째</p>
                                <p class="li-txt li-txt-2 ">나는 정직과 성실을 기본으로 공과 사를 엄격히 구분하고 한 차원 높은 도덕적 의무와 사회적 책임을 실천함으로써 청결한 조직문화를 구축하는데 앞장서겠습니다.</p>
                            </li>
                            <li class="mb36">
                                <p class="li-txt li-txt-3">나는 준법경영과 윤리경영을 위해 솔선수범하고, 본 서약서를 위반할 경우 일체의 책임을 지며 회사의 조치에 이의없이 따르겠습니다.</p>
                                <p class="li-txt li-txt-4">※ 「삼성 경영원칙」, 「청결한 조직문화를 위한 임직원 가이드 라인」, 「컴플라이언스 운영규정」 관련 세부내용 녹스 게시판 참조</p>
                            </li>
                        </ul>
                        <div class="tb_wrap">
                            <table>
                                <tr>
                                <td class="sub-txt pb10">일시</td>  
                                <td class="sub-txt pb10 fr">2018년 11월 10일</td>  
                                </tr>  
                                <tr>
                                <td class="sub-txt">성명</td>  
                                <td class="sub-txt fr">정해민</td>  
                                </tr>  
                            </table>                           
                        </div>
                        <slp-checkbox ><span @click="activate()">위 사항에 동의합니다.</span></slp-checkbox>
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
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md" :class="{ clr1 : active_el }">확인</button>
            </div>
            <!-- //floatingbtn -->   

        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable*/
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
      active_el: false
    }
  },
  /* vue function */
  methods: {
    activate () {
      console.log(this.active_el)
      this.active_el = !this.active_el
    }
  }
}
</script>
