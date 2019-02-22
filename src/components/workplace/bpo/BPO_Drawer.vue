<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery login bpo">

        <!-- header 2단형 예외형 학습운영자 :: mainTpye2 에 txt 클래스 추가 -->
        <div id="header" class="mainType eduperson step2 txt">
            <div class="header_inner line1">
                <button type="button" class="btn allMenu" @click="toggleDrawer()"><span class="ico">전체메뉴</span><span class="ico new"></span></button>
                <div class="eduperson_title" @click="changeTitle()">
                    <span>LEARNING GROUP TITLE1</span>
                    <span class="eduperson_title_ico"></span>
                </div>
            </div>
            <div class="header_inner line2">
                <ul class="gnbMenu text">
                    <!-- selected class:on -->
                    <li class="menu menu_home" :class="{'on': tabIdx == 1}" @click="onClick(1)">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">학습현황</a>
                    </li>
                    <li class="menu menu_exploration" :class="{'on': tabIdx == 2}" @click="onClick(2)">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">운영보고서</a>
                    </li>
                    <li class="menu menu_subscription" :class="{'on': tabIdx == 3}" @click="onClick(3)">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">검색통계</a>
                    </li>
                    <li class="menu menu_learn" :class="{'on': tabIdx == 4}" @click="onClick(4)">
                        <a href="#" class="menu_icon"><span class="ico"></span></a>
                        <a href="#" class="menu_txt">문의현황</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <h1 class="tit1">멀티캠퍼스</h1>
                <h2 class="tit2">Teacher’s Club</h2>

                <fieldset class="loginBox">
                    <legend>아이디 비밀번호 입력</legend>
                    <ul class="loginList" >
                        <li>
                            <input type="text" class="input underline " placeholder="아이디">
                        </li>
                        <li>
                            <div class="search-wrapper">
                                <input type="password"  pattern="^\s+" class="input underline" placeholder="비밀번호" />
                                <button class="close-icon" type="button" id="dd"></button>
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
                    <dd class="mono_40">회원가입 및 아이디/비밀번호 찾기는 PC에서<br>
                        크레듀닷컴(el.multicampus.com)에 <br>
                        방문하시면 이용 가능합니다.</dd>
                    <dd class="color_clr2 privacypolicy"><a href="#">개인정보처리방침</a></dd>
                    <dd class="copy mono_40">ⓒBY MULTICAMPUS. 학습지원센터 1544-9001</dd>
                </dl>

            </div>
          </div>
        </div>
      </div>
      <!-- //container -->
      <!-- Drawer  아코디언 디자인 나오면 추가해야함 -->
      <div id="drawer" :class="{'show': drawerFlag }">
        <div class="drawer_inner">
          <div class="drawer_header">
            <div class="logo">
              <img src="@/assets/img/login_logo_sds.png" alt="samsung sds">
            </div>
            <div class="setting">
              <span class="icon"></span>
            </div>
          </div>
          <div class="drawer_profile">
            <div class="profile_img">
              <img src="@/assets/img/benjamin_parker_736167_unsplash.png" class="thumImg" alt="profile img">
            </div>
            <p class="profile_name_main">정해민</p>
            <p class="profile_name_sub">회사운영자</p>
            <span class="ico next"></span>
          </div>
          <ul class="drawer_list">
            <li>
              <a href="#">공지사항</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

      </div>
      <!-- // Drawer -->
      <!-- Drawer Dim -->
      <div id="drawer-overlay" v-if="drawerFlag" @click="toggleDrawer()"></div>
      <!-- // Drawer Dim -->
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
      drawerFlag: true
    }
  },
  /* vue function */
  methods: {
    toggleDrawer () {
      this.drawerFlag = !this.drawerFlag
    },
    toggleMenu (event) {
      if (event.target.classList.contains('open')) {
        event.target.classList.remove('open')
      } else {
        event.target.classList.add('open')
      }
    }
  }
}
</script>
