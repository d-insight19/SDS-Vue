<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery login">
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">

                <!-- 가이드 O : 로고 이미지일 경우 -->
                <h1 class="h-tit1 type_image">
                    <img src="@/assets/img/sdslogo.png" alt="samsung sds">
                </h1>
                <!-- 가이드 O : 텍스트일 경우 -->
                <h1 class="h-tit1 type_txt" style="display:none;"><p>한국도로공사 연수원</p></h1>
                <!-- 가이드 O : 텍스트 2줄일 경우 -->
                <h1 class="h-tit1 type_multitxt" style="display:none;"><p>한국가스안전공사 사이버 연수원</p></h1>

                <!-- 가이드 X : 로고 이미지일 경우 -->
                <h1 class="h-tit1 type_image noguide" style="display:none;">
                    <img src="@/assets/img/sdslogo.png" alt="samsung sds">
                </h1>
                <!-- 가이드 X : 텍스트일 경우 -->
                <h1 class="h-tit1 type_txt noguide" style="display:none;"><p>한국도로공사 연수원</p></h1>
                <!-- 가이드 X : 텍스트 2줄일 경우 -->
                <h1 class="h-tit1 type_multitxt noguide" style="display:none;"><p>한국가스안전공사 사이버 연수원</p></h1>

                <fieldset class="loginBox">
                    <legend>아이디 비밀번호 입력</legend>
                    <ul class="loginList">
                        <li>
                            <slp-text-field placeholder="아이디를 입력하세요" classObject="underline"></slp-text-field>
                        </li>
                        <li>
                            <!-- 추가되는 새로운 비밀번호 컴포넌트로 교체해야함-->
                            <!-- 2019-01-07 : 기존 Seach 컴포넌트에   버튼 a태그에  eye 클래스 추가되고 x 아이콘 삭제 -->
                            <div class="intSchBox">
                                <div class="search-wrapper">
                                    <input type="text" ref="input01" pattern="^\s+" class="input underline" placeholder="비밀번호를 입력하세요" />
                                    <a href="#" class="btn eye" v-show="password_show" @click="passwordtoggle()"><span class="ico"></span></a>
                                    <a href="#" class="btn eye eye_slash" v-show="!password_show" @click="passwordtoggle()"><span class="ico"></span></a>
                                    <!-- <p class="InfoChK-resultTxt err">비밀번호가 일치하지 않습니다.</p> -->
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div class="loginChk">
                        <slp-checkbox checked>아이디 저장</slp-checkbox>
                        <slp-checkbox>자동 로그인</slp-checkbox>
                    </div>

                    <div class="loginBtn">
                        <button type="button" class="btn md clr1">로그인</button>
                    </div>
                </fieldset>

                <ul class="loginEtcBtn">
                    <li><a href="#">아이디찾기</a></li>
                    <li><a href="#">비밀번호 찾기</a></li>
                    <li><a href="#">회원가입</a></li>
                </ul>

                <dl class="loginGuide" >
                    <dt>초기 로그인 안내</dt>
                    <dd >아이디 <span class="fwb">ex사번(예 ex123456)</span></dd>
                    <dd >비밀번호 <span class="fwb">아이디와 동일</span></dd>
                    <dd class="desc">최초 접속 시 아이디와 비밀번호가 동일합니다.</dd>
                </dl>




            </div>
          </div>
        </div>

        <div class="loginFooter">
            <p class="custom_txt">고객센터<span class="custom_tel color_clr2">1544 - 9001</span></p>
            <ul class="custom_info">
                <li>평일<span class="custom_time">08:00 - 20:00</span></li>
                <li>휴일<span class="custom_time">09:00 - 18:00</span></li>
            </ul>
            <p class="copyright">ⓒ copyright by mulicampus CO.LTD. All right reserved</p>
        </div>

      </div>
      <!-- //container -->
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
/* eslint-disable */
  name: 'Login_login',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
        password_show: true
    }
  },
  /* vue function */
  methods: {
      passwordtoggle () {
        this.password_show = !this.password_show
        if (this.password_show === false) {
            this.$refs.input01.setAttribute('type', 'password')
        } else if (this.password_show === true) {
            this.$refs.input01.setAttribute('type', 'text')
        }
      }
}
}
</script>
