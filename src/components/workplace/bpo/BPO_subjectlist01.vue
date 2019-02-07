<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery drawer bpo teachersclub">
        
        <!-- header 2단형 예외형 학습운영자 :: mainTpye2 에 txt 클래스 추가 -->
        <div id="header" class="mainType eduperson txt">
            <div class="header_inner">
                <button type="button" class="btn allMenu" @click="toggleDrawer()"><span class="ico">전체메뉴</span><span class="ico new"></span></button>  
                <div class="teachersclub_title" @click="changeTitle()">
                    <h2 class="font_20">Teacher’s Club</h2>
                </div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div id="dropdown_wrap" v-show="langFlag">
                            <div id="sheetDim" @click="changeLang()"></div>
                            <div id="dropdown" class="status">            
                                <ul @click="changeLang()">
                                <!-- 
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                                -->
                                <li>진행중</li>
                                <li>마감</li>
                                </ul>
                            </div>
                </div>

                <h1 class="h-tit5 title_line">
                    <span class="total_txt">진행중인 과정</span>
                    <strong class="fwb600 count">53</strong>                    
                    <span class="ico down" @click="changeLang()"></span>
                </h1>
              <!-- list -->                 
                        <ul class="multiList type3">
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="date"> 2018.12.14</p>
                                </div>                                                
                            </li> 
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="date"> 2018.12.14</p>
                                </div>                                                
                            </li> 
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="date"> 2018.12.14</p>
                                </div>                                                
                            </li> 
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="date"> 2018.12.14</p>
                                </div>                                                
                            </li> 
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="date"> 2018.12.14</p>
                                </div>                                                
                            </li> 
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="date"> 2018.12.14</p>
                                </div>                                                
                            </li> 
                            <li>
                                <div class="in">                                                                                        
                                    <div class="multiline contents">
                                    <a href="#">과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 과정명  영역입니다. 
                                    <span class="ico arrow"></span></a>
                                    </div>                                                     
                                    <p class="date"> 2018.12.14</p>
                                </div>                                                
                            </li>            
                                                                              
                        </ul>
                                    
                        <!-- //list -->  


               

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
      drawerFlag: true,
      langFlag: false
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
    },
    changeLang () {
      this.langFlag = !this.langFlag
    }
  }
}
</script>
