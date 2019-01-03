<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_survey pd70">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand wh survey-head-bg">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button>
                    <div class="page-btn">
                        <span class="ico back-wh"></span>
                        <div class="num "><span>03</span> / <span>36</span></div>
                        <span class="ico next-wh"></span>
                    </div>
                    <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="hide_header" style="background:rgba(0,0,0,0.45);  padding-top:66px; padding-bottom:60px">                
                    <div class="hide-inner">
                        <span class="chip wh">설문</span>                         
                        <p class="h-tit1">삶의 만족도 지수 조사</p>
                        <p class="h-tit5">
                            <span>총 2문항</span>
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
                        <p class="inner-txt">설문을 통해 자신의 삶의 만족도가 어느 정도인지 진단해 보세요. 10분정도 걸리는 간단한 설문입니다.</p>
                        <p class="line02"></p>
                        <p class="survey-tit">행복에 관한 조사입니다.</p>
                        <p class="txt-tit">01. 다음 지문을 읽고 <span class="underline">틀린 것</span>을 고르시오. (5점)</p>
                        <p class="inner-txt op65 mb20">Java 기반의 웹 프레임워크. 로드 존슨이 2002년에 출판한 저서 Expert One-on-One J2EE Design and Development에서 선보인 소스 코드를 시작으로 점점 발전하게 되었다. 2003년 6월에 최초로 공개되었다. </p>
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >전혀 아니다</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >아니다</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">보통이다</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"> 그렇다</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"> 매우 그렇다</span>                    
                                </label>
                            </li>
                        </ul>     
                        <p class="hr"></p>
                        <p class="txt-tit mb20">02. 나는 OO하는 것을 좋아한다.</p>                        
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-2">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">전혀 아니다</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-2" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">아니다</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-2">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">보통이다</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-2" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"> 그렇다</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-2">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"> 매우 그렇다</span>                    
                                </label>
                            </li>
                        </ul>   
                    </div>
                    <!-- //inner -->
                </div>  
            </div>

            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md clr1">제출</button>
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
  name: 'Study_04_SO_quiz_OX',
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
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
