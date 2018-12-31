<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery study_auth pd70">
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">고용보험 환급과정 운영기준안내</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        <p class="txt-tit">본인인증</p>
                        <ul class="ulList">
                            <li>
                                <p class="li-txt in12_16">・학습 시작 최초 1회, 리포트 제출 시, 평가 창 접속 시 본인인증이 진행됩니다.</p>
                            </li>
                            <li class="mb30">
                                <p class="li-txt in12_16">・리포트 제출 시 본인인증</p>
                                <p class="li-txt">예) 리포트 문제확인 → 본인인증 (X)</p>
                                <p class="li-txt">리포트 제출 → 본인인증 (Y)</p>
                            </li>
                        </ul>
                        <p class="txt-tit">평가 1회 응시</p>
                        <ul class="ulList">
                            <li>
                                <p class="li-txt in12_16">・평가는 학습 기간 중 1회 응시(접속) 가능합니다.</p>
                            </li>
                            <li class="mb30">
                                <p class="li-txt in12_16">・단, 천재지변 등 불가항력 사유 발생 시 사유서 제출하여 재응시 가능합니다.</p>
                            </li>    
                        </ul>
                        <p class="txt-tit">리포트 임시저장 / 최종제출</p>
                        <ul class="ulList">
                            <li>
                                <p class="li-txt in12_16">・학습기간 내 임시저장 가능, 최종제출 후 리포트 채점 진행</p>
                            </li>
                            <li>
                                <p class="li-txt in12_16 danger">・최종 제출 후 리포트 수정 불가</p>
                            </li>
                            <li class="mb30">
                                <p class="li-txt in12_16">・리포트 임시저장 후 종료일까지 최종제출 하지 않은 경우, 임시저장 리포트는 학습종료 시간에 최종 제출처리됨</p>
                            </li >
                        </ul>
                        <p class="txt-tit">리포트 보안 파일 처리</p>
                        <ul class="ulList">
                            <li>
                                <p class="li-txt in12_16 danger">・고객사 기준 보안 적용된 경우, 보안해제 파일을 학습기간 내에 반드시 제출</p>
                            </li>
                            <li>
                                <p class="li-txt in12_16">・학습기간 내 보안 해제하여 제출 된 리포트 건 한하여 점수 부여 가능</p>
                            </li>
                            <li class="mb30">
                                <p class="li-txt in12_16 danger">・학습기간 내 재제출 안된 보안 적용 리포트 파일(내용 확인 불가) 0점 처리</p>
                            </li>
                        </ul>
                        <p class="line01"></p>
                        <p class="li-txt mb9">위 내용을 모두 확인 하신 후 확인 완료하신 후 아래 본인 인증을 진행하시면 학습이 진행됩니다.</p>
                        <p class="li-txt mb9">본인인증 핸드폰 번호는 회원정보 기준으로 해당 번호 변경 시 [개인정보 변경] 후 진행 해 주시기 바랍니다.</p>
                        <div class="tb_wrap">
                            <table>
                                <tr>
                                <td class="sub-txt pb10 fw500">성명</td>  
                                <td class="sub-txt pb10 fr">정해민</td>  
                                </tr>  
                                <tr>
                                <td class="sub-txt pb10 fw500">이메일</td>  
                                <td class="sub-txt pb10 fr">Haemin@multicampus.com</td>  
                                </tr>  
                                <tr>
                                <td class="sub-txt pb10 fw500">휴대폰</td>  
                                <td class="sub-txt pb10 fr">010-1234-5678</td>  
                                </tr>  
                                <tr>
                                <td class="sub-txt fw500">인증</td>  
                                <td class="sub-txt fr danger">미인증</td>  
                                </tr>  
                            </table>
                            <ul>
                                <li>
                                    <p class="txt-tit-2 mt20">※ 인증 방법 중 하나를 선택하여 인증해 주세요.</p>
                                </li>
                                <li>
                                    <button class="auth-btn mr12">휴대폰 인증</button><button class="auth-btn">아이핀 인증</button>
                                </li>
                                <li>
                                    <p class="tar"> 인증 오류 조치 <span class="info color_clr2 border_clr2">i</span> </p>
                                </li>
                            </ul>                           
                        </div>
                        <p class="txt-tit-2">※ 인증에 사용하는 정보와 회원정보가 일치해야 합니다. 올바르지 않다면 회원정보 수정 후 인증해 주세요.</p>
                        <button class="guide-btn">회원정보 수정</button>
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
  name: 'Study_05_etc_authorization_employment',
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
