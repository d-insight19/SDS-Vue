<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MainType eduperson">

        <!-- header 2단형 -->
        <div id="header" class="mainType2">
            <div class="header_inner line1">
                <button type="button" class="btn allMenu" @click="toggleDrawer()"><span class="ico">전체메뉴</span><span class="ico new"></span></button>  
                <span>LEARNING GROUP TITLE1</span>          
                <button type="button" class="btn btnHome"><span class="ico">홈</span></button>
            </div>            
            <div class="header_inner line2">
                <ul class="gnbMenu text">
                    <!-- selected class:on -->
                    <li class="menu on"  :class="{'on': tabIdx == 1}" @click="onClick(1)">
                        학습현황
                    </li>
                    <li class="menu"  :class="{'on': tabIdx == 2}" @click="onClick(2)">
                        운영보고서
                    </li>
                    <li class="menu"  :class="{'on': tabIdx == 3}" @click="onClick(3)">
                        검색통계
                    </li>
                    <li class="menu"  :class="{'on': tabIdx == 4}" @click="onClick(4)">
                        문의현황
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
            <span class="profile_name">정해민</span>
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
import EdupersonStudycurrent from './Eduperson_studycurrent'
import EdupersonOperation from './Eduperson_operation'
export default {
  name: 'Eduperson_control',
  components: {'Eduperson_studycurrent': EdupersonStudycurrent, 'Eduperson_operation': EdupersonOperation},
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
      drawerFlag: false
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Eduperson_studycurrent'
      } else if (idx === 2) {
        this.component = 'Eduperson_operation'
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
