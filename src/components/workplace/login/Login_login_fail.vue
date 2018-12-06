<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery login">
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <!-- 가이드 O : 로고 이미지일 경우 -->
                <h1 class="h-tit1 type_image">
                    <img src="@/assets/img/login_logo_sds.png" alt="samsung sds">
                </h1>
                <!-- 가이드 O : 텍스트일 경우 -->
                <h1 class="h-tit1 type_txt" style="display:none;"><p>한국도로공사 연수원</p></h1>
                <!-- 가이드 O : 텍스트 2줄일 경우 -->
                <h1 class="h-tit1 type_multitxt" style="display:none;"><p>한국가스안전공사 사이버 연수원</p></h1>

                <!-- 가이드 X : 로고 이미지일 경우 -->
                <h1 class="h-tit1 type_image noguide" style="display:none;">
                    <img src="@/assets/img/login_logo_sds.png" alt="samsung sds">
                </h1>
                <!-- 가이드 X : 텍스트일 경우 -->
                <h1 class="h-tit1 type_txt noguide" style="display:none;"><p>한국도로공사 연수원</p></h1>
                <!-- 가이드 X : 텍스트 2줄일 경우 -->
                <h1 class="h-tit1 type_multitxt noguide" style="display:none;"><p>한국가스안전공사 사이버 연수원</p></h1>

                <fieldset class="loginBox">
                    <legend>아이디 비밀번호 입력</legend>
                    <ul class="loginList">
                        <li>
                            <input type="text" class="input underline error" placeholder="아이디">
                            <p class="error-msg">아이디를 입력해주세요.</p>
                        </li>
                        <li>
                            <div class="search-wrapper">
                                <input type="password"  pattern="^\s+" class="input underline error" placeholder="비밀번호" />
                                <button class="close-icon" type="button" id="dd"></button>
                            </div>
                            <p class="error-msg">비밀번호를 입력해주세요.</p>
                        </li>
                    </ul>

                    <div class="loginChk">
                        <label for="id_save" class="labelChk"><input id="id_save" type="checkbox" class="chk" name="id_save"><span class="ico"></span><span class="label">아이디 저장</span></label>
                        <label for="login_auto" class="labelChk"><input id="login_auto" type="checkbox" class="chk" name="login_auto"><span class="ico"></span><span class="label">자동 로그인</span></label>
                    </div>

                    <div class="loginBtn">
                        <button type="button" class="btn md clr1">로그인</button>
                    </div>
                </fieldset>

                <ul class="loginEtcBtn">
                    <li><a href="#">회원가입</a></li>
                    <li><a href="#">아이디찾기</a></li>
                    <li><a href="#">비밀번호 찾기</a></li>
                </ul>

                <dl class="loginGuide">
                    <dt>초기 로그인 안내</dt>
                    <dd class="color_clr2">아이디 ex사번</dd>
                    <dd class="color_clr2">비밀번호  아이디와 동일</dd>
                    <dd>최초 접속 시 아이디와 비밀번호가 동일합니다.</dd>
                </dl>

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
  name: 'Login_login_fail',
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
