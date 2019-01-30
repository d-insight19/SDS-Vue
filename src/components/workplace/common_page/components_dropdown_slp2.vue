<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace gray_bg">

        <!-- header -->
        <div id="header" class="fixed tab">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18">나의 공간</p>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="scrollTab">
                    <li class="on"><a href="#tab1">정규 학습</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">자율 학습</a></li>
                    <li><a href="#tab3">학습 계획</a></li>
                    <li><a href="#tab4">다운로드</a></li>
                    <li><a href="#tab5">나의 지식 CLIPing</a></li>
                    <li><a href="#tab6">학습 관리</a></li>
                </ul>
            </div>
            <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">
        
          <div class="cell">
            <div class="inner ml-18 mr-18 pt0">
                
                <!-- list -->
                <ul class="cardList type2">
                    <li>
                        <div class="thum">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                        <div class="in">
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="mono_80">수료 처리 중</li>
                            </ul>
                        </div>
                        
                        <slp-dropdown 
                            v-model="lang"
                            @change="(v) => eDropdown('@change:', v)" 
                            @input="(v) => eDropdown('@input:', v)" >    
                            <span class="content moredot"  slot="trigger"></span>                        

                            <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
                            <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
                        </slp-dropdown>      
                    </li>
                    <li>
                        <div class="thum">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                        <div class="in">
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="mono_80">미수료</li>
                            </ul>
                        </div>
                        <span class="moredot" @click="changeLang()"></span>
                        <div class="dropdown_wrap" v-show="langFlag" >
                            <div class="sheetDim" @click="changeLang()"></div>
                            <div class="dropdown">            
                                <ul  @click="changeLang()">
                                <!-- 
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                                -->
                                <li>나의 지식 CLIPing</li>
                                <li>나의 지식 CLIPing</li>
                                <li>내가 본 콘텐츠</li>
                                <li>관심 CLIPing</li>
                                <li>나의 지식 CLIPing 활동 이력</li>
                                </ul>
                            </div>
                        </div>      
                    </li>
                    <li>
                        <div class="thum">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                        <div class="in">
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="mono_80">수료</li>
                            </ul>
                        </div>
                        <slp-dropdown 
                            v-model="lang"
                            @change="(v) => eDropdown('@change:', v)" 
                            @input="(v) => eDropdown('@input:', v)" >    
                            <span class="content moredot"  slot="trigger"></span>                        

                            <slp-dropdown-item :value="'한국어'">한국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'영어'">영어</slp-dropdown-item>
                            <slp-dropdown-item :value="'중국어'">중국어</slp-dropdown-item>
                            <slp-dropdown-item :value="'일본어'">일본어</slp-dropdown-item>
                        </slp-dropdown>
                    </li>
                    <li>
                        <div class="thum">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                        <div class="in">
                            <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="mono_80">수료</li>
                            </ul>
                        </div>
                        <span class="moredot" @click="changeLang4()"></span>
                        <div class="dropdown_wrap" v-show="langFlag4" >
                            <div class="sheetDim" @click="changeLang4()"></div>
                            <div class="dropdown">            
                                <ul  @click="changeLang4()">
                                <!-- 
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                                -->
                                <li>나의 지식 CLIPing</li>
                                <li>나의 지식 CLIPing</li>
                                <li>내가 본 콘텐츠</li>
                                <li>관심 CLIPing</li>
                                <li>나의 지식 CLIPing 활동 이력</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="thum">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                        <div class="in">
                            <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                            <ul class="info">
                                <li class="color_clr3">이러닝</li>
                                <li class="mono_80">수료</li>
                            </ul>
                        </div>
                        <span class="moredot" @click="changeLang5()"></span>
                        <div class="dropdown_wrap" v-show="langFlag5" >
                            <div class="sheetDim" @click="changeLang5()"></div>
                            <div class="dropdown">            
                                <ul  @click="changeLang5()">
                                <!-- 
                                    position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                                -->
                                <li>나의 지식 CLIPing</li>
                                <li>나의 지식 CLIPing</li>
                                <li>내가 본 콘텐츠</li>
                                <li>관심 CLIPing</li>
                                <li>나의 지식 CLIPing 활동 이력</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
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
  name: 'ComponentDropdown',
  /* vue data */
  data () {
    return {
      lang: '한국어',
      langFlag: false
    }
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue function */
  methods: {
    eDropdown (e, v) {
      console.log(e, v)
    },
    changeLang () {
      this.langFlag = !this.langFlag
    }
  }
}
</script>

<style scoped>

.wrapper {
  position: absolute;
  width: 100px;
}
.content {
  color: #fff;
}

</style>
