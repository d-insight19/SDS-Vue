<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_quiz_sub ">
            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <div class="page-btn">
                        <span class="ico back"></span>
                        <div class="num"><span>03</span> / <span>36</span></div>
                        <span class="ico next"></span>
                    </div>
                    <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="head-inner">                             
                        <p class="h-tit5"> 
                            <span class="ico chk"></span>
                            <span >제출 완료</span>
                        </p>
                        <p class="q-tit">중간퀴즈 : 자바의 특성과 개념</p>
                        <p class="h-tit1">20문항 중 <span class="color_clr2">19문항</span>을 맞추셨습니다.</p>
                        <p class="q-txt">참여해주셔서 감사합니다.</p>
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
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="head-inner">
                        <span class="chip">FAQ</span>                         
                        <p class="h-tit1">질문 타이틀 영역 질문 타이틀 영역 질문 타이틀 영역</p>
                        <p class="ico-group">
                            <span>동영상</span>
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
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="head-inner">
                        <span class="chip">FAQ</span>                         
                        <p class="h-tit1">질문 타이틀 영역 질문 타이틀 영역 질문 타이틀 영역</p>
                        <p class="ico-group">
                            <span>동영상</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- //header -->
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">              
                        <ul class="ulList type4">
                            <li>
                                <p class="tit-num">01 정답</p>
                                <div class="q-box">
                                    <p><span class="q-list-a">선택</span> <span class="color_clr2">② 2002년 로드존슨이 출판한 도서가 스프링...</span></p>
                                    <p><span class="q-list-a">정답</span> <span>② 2002년 로드존슨이 출판한 도서가 스프링...</span></p>
                                </div>
                            </li>
                            <li>
                                <p class="tit-num">02 오답</p>
                                <div class="q-box">
                                    <p><span class="q-list-a">선택</span> <span class="color_clr2">가을</span></p>
                                    <p><span class="q-list-a">정답</span> <span>봄</span></p>
                                </div>
                            </li>
                            <li>
                                <p class="tit-num">03 정답</p>
                                <div class="q-box">
                                    <p><span class="q-list-a">선택</span> <span class="color_clr2">②</span></p>
                                    <p><span class="q-list-a">정답</span> <span>②</span></p>
                                </div>
                            </li>
                            <li>
                                <p class="tit-num">04 정답</p>
                                <div class="q-box">
                                    <p class="fl"><span class="q-list-a ">선택</span> </p>
                                    <p><span class="color_clr2">② 2002년 로드존슨이 출판한 도서가 스프링...</span><br/><span class="color_clr2">④ 2003년 상용으로 소개되었으나 이후 오픈...</span></p>
                                    <p class="fl"><span class="q-list-a">정답</span></p>
                                    <p><span>② 2002년 로드존슨이 출판한 도서가 스프링...</span><br/><span>⑤ 동적인 웹 사이트를 개발하기 위한 여러 가...</span></p>
                                </div>
                            </li>
                            <li>
                                <p class="tit-num">05 정답</p>
                                <div class="q-box">
                                    <p><span class="q-list-a">선택</span> <span class="ico o-blue"></span></p>
                                    <p><span class="q-list-a">정답</span> <span class="ico o-blk"></span></p>
                                </div>
                            </li>
                            <li>
                                <p class="tit-num">05 정답</p>
                                <div class="q-box">
                                    <p><span class="q-list-a">선택</span> <span class="ico x-blue"></span></p>
                                    <p><span class="q-list-a">정답</span> <span class="ico x-blk"></span></p>
                                </div>
                            </li>
                            <li>
                                <p class="tit-num">06 정답</p>
                                <div class="q-box">
                                    <p><span class="q-list-a">선택</span> <span class="color_clr2">스프링</span></p>
                                    <p><span class="q-list-a">정답</span> <span>스프링</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floatingbtn -->
            <div class="absBtmBtn">  
                <ul>
                <li>
                    <button type="button" class="btn md">다시풀기</button>
                </li> 
                <li>
                    <button type="button" class="btn md clr1">완료</button>
                </li>
                </ul>
            </div>
            <!-- //floatingbtn -->   

        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Study_04_SO_survey_submission',
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
