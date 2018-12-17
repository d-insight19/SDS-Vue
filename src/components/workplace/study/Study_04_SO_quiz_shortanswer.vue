<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_quiz_ans pd70">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand wh">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button>
                    <div class="page-btn">
                        <span class="ico back-wh"></span>
                        <div class="num "><span>03</span> / <span>36</span></div>
                        <span class="ico next-wh"></span>
                    </div>
                    <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:66px; padding-bottom:26px">                
                    <div class="hide-inner">
                        <span class="chip wh">퀴즈</span>                         
                        <p class="h-tit1">중간퀴즈 : 자바의 특성과 개념에 대해 알아보기</p>
                        <p class="h-tit5">
                            <span>총 6문항</span>
                        </p>
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
                        <p class="inner-txt">학습을 통해 얼마나 배웠는지 QUIZ를 통해 알아볼까요? 퀴즈를 통해서 본인의 학습성과를 테스트하고 그 결과를 확인해 볼 수 있습니다. 퀴즈의 점수는 중간성적에 반영됩니다.</p>
                        <p class="line02"></p>
                        <p class="txt-tit">01. 다음이 설명하는 단어를 입력하세요.</p>
                        <p class="inner-txt op65 mb20">Java 기반의 웹 프레임워크. 로드 존슨(Rod Johnson)이 2002년에 출판한 저서 Expert One-on-One J2EE Design and Development에서 선보인 소스 코드를 시작으로 점점 발전하게 되었다. 2003년 6월에 최초로 공개되었다. </p>
                        <input type="text" class="input" placeholder="스프링">
                        <p class="inp-num"><span>3</span>/<span>300</span></p> 
                    </div>
                    <!-- //inner -->
                </div>  
            </div>

            <!-- floatingbtn -->
            <div class="absBtmBtn">  
                <button type="button" class="btn md clr1">결과보기</button>
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
  name: 'Study_04_SO_quiz_shortanswer',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
