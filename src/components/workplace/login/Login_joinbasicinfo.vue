<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join basicinfo">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit">통합회원가입</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">아이디 생성</h2>
                        <div class="num">
                            <strong class="color_clr2">2</strong>/<span>6</span>
                        </div>
                    </div>
                        <div class="progBox">
                        <div class="bar clr2" style="width:50%"></div>
                    </div>
                    <p class="txt-desc" style="display:none1;">이름, 생년원일, 성별은 가입 후<br>변경이 불가하니 정확히 입력해주세요.</p>
                </div>

                <!-- list -->
                <ul class="ulList type1">
                    <li class="join-id">
                        <strong class="label-tit">통합 ID</strong>
                        <span class="label-txt">CRD_abc1234</span>
                    </li>
                    <li>
                        <strong class="label-tit">이름</strong>
                        <input type="text" class="input err" placeholder="이름 입력">
                        <p class="InfoChK-resultTxt err">이름을 입력해주세요.</p>
                    </li>
                    <li>
                        <strong class="label-tit">휴대전화</strong>
                        <input type="text" class="input err" placeholder="‘-‘ 없이 숫자만 입력">
                        <p class="InfoChK-resultTxt err">‘-’ 또는 띄어쓰기 없이 10자 이상 입력해주세요.</p>
                    </li>
                    <li>
                        <strong class="label-tit">성별</strong>
                        <div class="rdoSelBox err">
                            <label class="labelRdo"><input type="radio" class="rdo" name="gender-rdo"><span class="ico"></span><span class="label">남</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="gender-rdo"><span class="ico"></span><span class="label">여</span></label>
                        </div>
                        <p class="InfoChK-resultTxt err">성별을 선택해주세요.</p>
                    </li>
                    <li>
                        <strong class="label-tit">생년월일</strong>
                        <div class="birthInt">
                            <select class="select err">
                                <option>년도</option>
                            </select>
                            <select class="select err">
                                <option>월</option>
                            </select>
                            <select class="select err">
                                <option>일</option>
                            </select>
                        </div>
                        <p class="InfoChK-resultTxt err">생년월일을 선택해주세요.</p>
                    </li>
                    <li>
                        <strong class="label-tit">비밀번호</strong>
                        <div class="search-wrapper">
                            <input type="password"  pattern="^\s+" class="input err" placeholder="8~12자 영문 대소문자,숫자,특수문자 조합" />
                            <button class="close-icon" type="button"></button>
                        </div>
                        <p class="InfoChK-resultTxt err">8~12자의 영문자, 특수문자 조합만 가능합니다.</p>
                    </li>
                    <li>
                        <strong class="label-tit">비밀번호 확인</strong>
                        <div class="search-wrapper">
                            <input type="password"  pattern="^\s+" class="input err" placeholder="8~12자 영문 대소문자,숫자,특수문자 조합" />
                            <button class="close-icon" type="button"></button>
                        </div>
                        <p class="InfoChK-resultTxt err">비밀번호가 일치하지 않습니다.</p>
                    </li>
                    <li>
                        <strong class="label-tit">주소</strong>
                        <div class="">
                            <div class="rdoSelBox err">
                                <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo"><span class="ico"></span><span class="label">자택</span></label>
                                <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo"><span class="ico"></span><span class="label">직장</span></label>
                            </div>
                            <p class="InfoChK-resultTxt err">주소를 선택해주세요.</p>
                            <ul class="addrInt">
                                <li>
                                    <div class="postCode infoChk">
                                        <input type="text" class="input" placeholder="우편번호">
                                        <button type="button" class="btn sm">우편번호</button>
                                    </div>
                                </li>
                                <li><input type="text" class="input" placeholder="주소 입력"></li>
                                <li><input type="text" class="input err" placeholder="나머지 주소 입력"></li>
                            </ul>
                            <p class="InfoChK-resultTxt err">주소를 선택해주세요.</p>
                        </div>
                    </li>
                </ul>
                <!-- //list -->

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">다음</button></li>
            </ul>
        </div>
        <!-- //floating button -->
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_joinbasicinfo',
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
