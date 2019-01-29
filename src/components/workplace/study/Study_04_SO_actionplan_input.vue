<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_action pd70">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand wh action-head-bg">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button>
                    <div class="page-btn">
                        <span class="ico back-wh"></span>
                        <div class="num "><span>03</span>/<span>36</span>p</div>
                        <span class="ico next-wh"></span>
                    </div>
                    <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="hide_header" style="background-color:rgba(0,0,0,0.45); padding-top:66px; padding-bottom:60px">                
                    <div class="hide-inner">
                        <span class="chip wh">액션플랜</span>                         
                        <p class="h-tit1">인정받는 팀 리더의 액션 플랜 인정받는 팀 리더의 액션 플랜</p>
                    </div>
                </div>
            </div>
            <!-- //header -->


            <!-- header + 확장형 + tab  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '2'" id="header" class="tab">          
                <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="header_inner line2 tabMenu">
                    <ul class="fixTab">
                    <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">이미지투데이</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    </ul>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:56px; padding-bottom:26px">                
                    <div class="head-inner"> 
                        <span class="chip">FAQ</span>     
                        <p class="h-tit1">공지사항 타이틀 영역입니다. 공지사항 타이틀</p>
                        <p class="ico-group">
                            <span class="ico clip"></span>
                            <span>2,190</span>
                            <span class="pipe"></span>
                            <span class="ico view"></span>
                            <span>첨부파일</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->

            
            <!-- header scroll 헤더  작업중-->
            <div v-if="headerType == '3'" id="header" class="tab">
                
                <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>            
                <div class="header_inner line2 tabMenu scroll-x">
                    <ul class="scrollTab">
                    <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">이미지투데이</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    <li><a href="#tab3">인문학이야기</a></li>
                    </ul>
                </div>     
                <div class="hide_header" style="background:#e6eaf5; padding-top:56px; padding-bottom:26px">                
                    <div class="head-inner"> 
                        <span class="chip">FAQ</span>     
                        <p class="h-tit1">공지사항 타이틀 영역입니다. 공지사항 타이틀</p>
                        <p class="ico-group">
                            <span class="ico clip"></span>
                            <span>2,190</span>
                            <span class="pipe"></span>
                            <span class="ico view"></span>
                            <span>첨부파일</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->        
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner"> 
                        <p class="inner-txt">설명글입니다 설명글입니다 설명글입니다 설명글입니다 설명글입니다 설명글입니다 설명글입니다 설명글입니다 설명글입니다 설명글입니다 설명글입니다 설명글입니다 </p>
                        <p class="line02"></p>
                        <p class="txt-tit">1. OO은 OO해야 합니다. 액션플랜 텍스트 질문영역입니다.  당신의 의견은 어떻습니까? </p>
                        <button class="guide-btn">작성가이드</button>
                        <input @input.prevent="e => keylength = e.target.value.length"   type="text" class="input01" placeholder="의견을 입력해 주세요">
                        <label class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength"></span>/300</span>
                        </label>
                        <p class="hr"></p>
                        <p class="txt-tit">2. OO은 OO해야 합니다. 액션플랜 텍스트 질문영역입니다.  당신의 의견은 어떻습니까? </p>
                        <button class="guide-btn" >작성가이드</button>                        
                        <input @input.prevent="e => keylength2 = e.target.value.length"    type="text" class="input02" placeholder="의견을 입력해 주세요">
                        <label class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength2"></span>/300</span>
                        </label> 
                    </div>
                    <!-- //inner -->
                </div>  
            </div>


            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" disabled="disabled" class="btn md clr1">제출</button>
            </div>
            <!-- //floatingbtn -->
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->
</template>

<script>
/*
  headerType
  1 : 기본헤더 + 확장 ,  2 : 헤더 + 확장 + 텝  or  헤더 + 텝 ,  3 : 헤더 + 확장 + 스크롤텝
*/
export default {
  name: 'Study_04_SO_opinion_multiopinon',
  props: {
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1,
      keylength: 0,
      keylength2: 0
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
