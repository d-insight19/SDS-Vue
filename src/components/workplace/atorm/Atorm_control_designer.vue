<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm">

        <!-- header 2단형 -->
        <div id="header" class="mainType2">
            <div class="header_inner line1">
                <button type="button" class="btn allMenu" @click="toggleDrawer()"><span class="ico">전체메뉴</span><span class="ico new"></span></button>  
                <span>ATORM</span>          
                <button type="button" class="btn btnHome"><span class="ico">홈</span></button>
            </div>            
            <div class="header_inner line2">
                <ul class="gnbMenu">
                    <!-- selected class:on -->
                    <li class="menu menu_home" :class="{'on': tabIdx == 1}"   @click="onClick(1)">
                        <a href="#"><span class="ico">추천</span></a>
                    </li>
                    <li class="menu menu_exploration" :class="{'on': tabIdx == 2}"  @click="onClick(2)">
                        <a href="#"><span class="ico">카테고리</span></a>
                    </li>
                    <li class="menu menu_subscription" :class="{'on': tabIdx == 3}"  @click="onClick(3)">
                        <a href="#"><span class="ico">나의공간</span></a>
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
            <div class="arm">
              <span class="new"></span>
              <span class="icon"></span>
            </div>
            <div class="setting">
              <span class="icon"></span>
            </div>
          </div>
          <ul class="drawer_list">
            <li class="open" @click="toggleMenu($event)">
              <a href="#">신규 아이템 추가</a>
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
import AtormHomeDesigner from './Atorm_home_designer'
import AtormProductMain from './Atorm_product_main'
import AtormProcessMain from './Atorm_process_main'
import AtormStatusMain from './Atorm_status_main'
export default {
  name: 'Atorm_control',
  components: {'Atorm_home_designer': AtormHomeDesigner, 'Atorm_product_main': AtormProductMain, 'Atorm_process_main': AtormProcessMain, 'Atorm_status_main': AtormStatusMain},
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      tabIdx: 1,
      component: 'Atorm_home_designer',
      drawerFlag: false,
      title_list_flag: false
    }
  },
  /* vue function */
  methods: {
    onClick (idx) {
      this.tabIdx = idx
      if (idx === 1) {
        this.component = 'Atorm_home_designer'
      } else if (idx === 2) {
        this.component = 'Atorm_product_main'
      } else if (idx === 3) {
        this.component = 'Atorm_process_main'
      } else if (idx === 4) {
        this.component = 'Atorm_status_main'
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
