<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery login bpo">
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">

                <h1 class="tit1">멀티캠퍼스</h1>
                <h2 class="tit2">Teacher’s Club</h2>

                <fieldset class="loginBox">
                    <legend>아이디 비밀번호 입력</legend>
                    <ul class="loginList">
                        <li>
                            <input type="text" class="input underline " placeholder="아이디">
                        </li>
                        <li>
                            <div class="search-wrapper">
                                <input type="text" ref="input01"  pattern="^\s+" class="input underline" placeholder="비밀번호" />
                                <button class="close-icon eye" :class="{ eye_slash : active }" type="button" id="dd" @click="active_el()"></button>
                            </div>
                        </li>
                    </ul>

                    <div class="loginChk">
                        <label for="id_save" class="labelChk"><input id="id_save" type="checkbox" class="chk" name="id_save" checked="checked"><span class="ico"></span><span class="label">아이디 저장</span></label>
                        <label for="login_auto" class="labelChk"><input id="login_auto" type="checkbox" class="chk" name="login_auto"><span class="ico"></span><span class="label">자동 로그인</span></label>
                    </div>

                    <div class="loginBtn">
                        <button type="button" class="btn md clr1">로그인</button>
                    </div>
                </fieldset>



                <dl class="loginGuide">
                    <dd>회원가입 및 아이디/비밀번호 찾기는 PC에서<br>
                        크레듀닷컴(el.multicampus.com)에 <br>
                        방문하시면 이용 가능합니다.</dd>
                    <dd class="color_clr2 privacypolicy"><a href="#">개인정보처리방침</a></dd>
                    <dd class="copy">ⓒBY MULTICAMPUS. 학습지원센터 1544-9001</dd>
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
  name: 'Login_login',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      active: ''
    }
  },
  /* vue function */
  methods: {
    active_el () {
      this.active = !this.active
      if (this.active === true) {
        this.$refs.input01.setAttribute('type', 'password')
      } else if (this.active === false) {
        this.$refs.input01.setAttribute('type', 'text')
      }
    }
  }
}
</script>
