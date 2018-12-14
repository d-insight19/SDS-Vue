<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_assessment_no">
            <!-- header -->
            <div id="header" class="fixed">
              <button type="button" class="btn only close"><span class="ico">닫기</span></button>
              <p class="header_text font_18">과정평가 학습자 안내</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                  <div class="inner">
                      <p class="sub-tit"><strong>정해민님의 평가 상태</strong></p>
                      <div class="tb_wrap">
                        <table>
                          <tr>
                            <td class="right-bd">구분</td>  
                            <td >제출상태</td>  
                          </tr>  
                          <tr>
                            <td class="right-bd tb-state">최종평가</td>  
                            <td class="tb-state">미응시</td>  
                          </tr>  
                        </table> 
                      </div>                     
                      <p class="sub-tit"><strong>평가 기본 정보</strong></p>
                      <ul class="ulList type4">
                          <li>
                            <p class="li-tit">평가문항수</p>
                            <p class="li-txt"><span>20문항</span> <span class="li-txt-2 ml12">객관식: 18문항</span><span class="pipe"></span><span class="li-txt-2">주관식:2문항 (단답형:2)</span> </p>
                          </li>
                          <li>
                            <p class="li-tit">평가 응시 가능 시간</p>
                            <p class="li-txt">2018. 12. 21 00:00 ~ 2019. 01. 12 24:00 </p>
                          </li>
                          <li>
                            <p class="li-tit">평가 시간 제한</p>
                            <p class="li-txt">없음</p>
                          </li>
                          <li>
                            <p class="li-tit">평가 응시 가능 진도율</p>
                            <p class="li-txt">80% 이상</p>
                          </li>
                          <li>
                            <p class="li-tit">결과 공개 여부/시기</p>
                            <p class="li-txt">공개/평가 완료 후 즉시</p>
                            <p class="li-txt">단답형이 포함된 경우, 강사 채점으로 시간 소요</p>
                          </li>
                          <li class="bottom-bd-x">
                            <p class="li-txt li-txt-3">기타 평가 추가 안내 문구 기타 평가 추가 안내 문구 기타 평가 추가 안내 문구 기타 평가 추가 안내 문구</p>
                            <div class="loginChk">
                              <label for="agree" class="labelChk">
                                <input id="agree" type="checkbox" class="chk" name="agree">
                                <span class="ico"></span>
                                <span class="label">주의사항에 동의합니다.</span>
                              </label>
                            </div>
                          </li>
                      </ul>
                      
                  </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floatingbtn -->
            <div class="absBtmBtn">  
              <ul>
                <li>
                  <button type="button" class="btn md">다음에 응시</button>
                </li> 
                <li>
                  <button type="button" class="btn md clr1">지금 응시</button>
                </li>
              </ul>
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
