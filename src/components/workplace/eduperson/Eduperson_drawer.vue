<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery eduperson">

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


        <div id="content" class="list">
          <div class="cell">
            <div class="inner">
                <component :is="component"/>
            </div>
          </div>
        </div>
      </div>
      <!-- //container -->    

      <!-- 회사운영자 타이틀 선택 -->
      <div id="edu_person_title_list" v-show="title_list_flag">
        <ul @click="changeTitle()">
          <li class="active">LEARNING GROUP TITLE 1<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 2<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 3<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 4<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 5<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 6<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 7<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 8<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 9<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 10<span class="checkIcon"></span></li>
          <li>LEARNING GROUP TITLE 11<span class="checkIcon"></span></li>
        </ul>
      </div>

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

        <div class="exchange_wrap" @click="toggleDrawer()">
          <span class="drawer_atorm_txt">ATORM</span>
          <span class="drawer_atorm_txt2">가기</span>
          <span class="icon"></span>
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
import EdupersonStudycurrent from './Eduperson_studycurrent'
import EdupersonOperationControl from './Eduperson_operation_control'
import EdupersonStatement from './Eduperson_statement'
import EdupersonVoc from './Eduperson_voc'
export default {
  name: 'Eduperson_drawer',
  components: {'Eduperson_studycurrent': EdupersonStudycurrent, 'Eduperson_operation_control': EdupersonOperationControl, 'Eduperson_statement': EdupersonStatement, 'Eduperson_voc': EdupersonVoc},
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 1,
      component: 'Eduperson_studycurrent',
      drawerFlag: true,
      title_list_flag: false
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Eduperson_studycurrent'
      } else if (idx === 2) {
        this.component = 'Eduperson_operation_control'
      } else if (idx === 3) {
        this.component = 'Eduperson_statement'
      } else if (idx === 4) {
        this.component = 'Eduperson_voc'
      }
    },
    toggleDrawer () {
      this.drawerFlag = !this.drawerFlag
    },
    toggleMenu (event) {
      if (event.target.classList.contains('open')) {
        event.target.classList.remove('open')
      } else {
        event.target.classList.add('open')
      }
    },
    changeTitle () {
      this.title_list_flag = !this.title_list_flag
    }
  }
}
</script>
