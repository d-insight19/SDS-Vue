<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MainType">

        <!-- header 1단형 -->
        <div id="header" class="mainType">
            <button type="button" class="btn allMenu" @click="toggleDrawer()"><span class="ico">전체메뉴</span><span class="ico new"></span></button>
            <ul class="gnbMenu">
                <!-- selected class:on -->
                <li class="menu menu_home" :class="{'on': tabIdx == 1}" @click="onClick(1)">
                    <a href="#"><span class="ico">추천</span></a>
                </li>
                <li class="menu menu_exploration" :class="{'on': tabIdx == 2}" @click="onClick(2)">
                    <a href="#"><span class="ico">카테고리</span></a>
                </li>
                <li class="menu menu_subscription" :class="{'on': tabIdx == 3}" @click="onClick(3)">
                    <a href="#"><span class="ico">나의공간</span></a>
                </li>
            </ul>
            <button type="button" class="btn btnSch"><span class="ico">검색</span></button>
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

      <!-- Drawer  아코디언 디자인 나오면 추가해야함 -->
      <div id="drawer" :class="{'show': drawerFlag }">
        <div class="drawer_inner">
          <div class="drawer_header">
            <div class="logo">
              <img src="@/assets/img/login_logo_sds.png" alt="samsung sds">
            </div>
            <div class="arm">
              <span class="new"></span>
              <span class="icon"></span>
            </div>
            <div class="setting">
              <span class="icon"></span>
            </div>
          </div>
          <div class="drawer_profile">
            <div class="profile_img">
              <img src="@/assets/img/benjamin_parker_736167_unsplash.png" class="thumImg" alt="profile img">
            </div>
            <span class="profile_name">정해민</span>
            <span class="ico next"></span>
          </div>
          <ul class="drawer_list">
            <li @click="toggleMenu($event)">
              <a href="#">나의공간</a>
              <span class="ico gray_next"></span>
              <ul class="drawer_list_inner">
                <li>URL 추가</li>
                <li>동영상 추가</li>
                <li>문서 추가</li>
                <li>오디오 추가</li>
                <li>유튜브 추가</li>
              </ul>
            </li>
            <li class="open" @click="toggleMenu($event)">
              <a href="#">교육신청</a>
              <span class="ico gray_next"></span>
              <ul class="drawer_list_inner">
                <li>URL 추가</li>
                <li>동영상 추가</li>
                <li>문서 추가</li>
                <li>오디오 추가</li>
                <li>유튜브 추가</li>
              </ul>
            </li>
            <li>
              <a href="#">커뮤니티</a>
              <span class="ico gray_next"></span>
            </li>
            <li>
              <a href="#">e-HRD</a>
              <span class="ico gray_next"></span>
            </li>
            <li>
              <a href="#">클라우드 서비스</a>
              <span class="ico gray_next"></span>
            </li>
            <li>
              <a href="#">지식 ClIPING</a>
              <span class="ico gray_next"></span>
            </li>
            <li>
              <a href="#">통합자료실</a>
              <span class="ico gray_next"></span>
            </li>
            <li>
              <a href="#">고객센터</a>
              <span class="ico gray_next"></span>
            </li>
          </ul>
        </div>

        <div class="drawer_atorm_txt color_clr1">ATORM</div>
        <div class="drawer_atorm_txt2 color_clr1">진입</div>
        <div class="exchange_wrap" @click="toggleDrawer()">
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
import MainRecommed from './Main_recommed'
import MainExploration from './Main_exploration'
import MainEubscribe from './Main_subscribe'
export default {
  name: 'Main_control',
  components: {'Main_recommed': MainRecommed, 'Main_exploration': MainExploration, 'Main_subscribe': MainEubscribe},
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 1,
      component: 'Main_recommed',
      drawerFlag: false
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Main_recommed'
      } else if (idx === 2) {
        this.component = 'Main_exploration'
      } else {
        this.component = 'Main_subscribe'
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
    }
  }
}
</script>
