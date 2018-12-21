<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_quiz_ox pd70">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand wh quiz-head-bg">          
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
                        <span class="chip wh">퀴즈</span>                         
                        <p class="h-tit1">중간퀴즈 : 자바의 특성과 개념에 대해 알아보기</p>
                        <p class="h-tit5">
                            <span>채점완료</span>
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
                        <p class="txt-tit"><span class="ico mark-o"></span>01. 다음 지문을 읽고 <span class="underline">틀린 것</span>을 고르시오. (5점)</p>
                        <p class="inner-txt op65 mb20">Java 기반의 웹 프레임워크. 로드 존슨이 2002년에 출판한 저서 Expert One-on-One J2EE Design and Development에서 선보인 소스 코드를 시작으로 점점 발전하게 되었다. 2003년 6월에 최초로 공개되었다. </p>
                        <ul class="ul-block com-rdo result">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="label"   :class="{ color_clr2 : active_el == 1 }" >① EJB를 주 프레임워크로 사용할 때 불편했을 점을 해소하려고 개발되었다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo" >
                                    <span class="label color_clr2"   :class="{ color_clr2 : active_el == 2 }" ><span class="ico mark-o sm"></span> ② 2002년 로드존슨이 출판한 도서가 스프링의 시작이라고 보는 견해가 있다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="label"   :class="{ color_clr2 : active_el == 3 }">③ 2003년 Apache 2.0 License로 최초 공개</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="label"   :class="{ color_clr2 : active_el == 4 }">④ 2003년 상용으로 소개되었으나 이후 오픈소스로 바뀌었다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="label"   :class="{ color_clr2 : active_el == 5 }">⑤ 동적인 웹 사이트를 개발하기 위한 여러 가지 서비스를 제공하고 있다.</span>                    
                                </label>
                            </li>
                        </ul>
                        <div class="bg-sky">
                            <p class="txt-tit-2">
                                정답
                                <span class="">2번</span>    
                            </p>
                            <p class="inner-txt-2">경량 컨테이너로서 자바 객체를 직접 관리한다. 각각의 객체 생성, 소멸과 같은 라이프 사이클을 관리하며 스프링으로부터 필요한 객체를 얻을 수 있다.</p>
                        </div>     
                        <p class="hr"></p>
                        <p class="txt-tit"><span class="ico mark-x"></span>02. 마이동풍은 이백의 시에서 유래한 말이다. 여기에서 동풍은 어떤 계절의 바람일까?</p>                        
                        <ul class="ul-block com-rdo result">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-2">
                                    <span class="label"   :class="{ color_clr2 : active_el == 6 }"><span class="ico mark-o sm"></span>① 봄</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-2" >
                                    <span class="label"   :class="{ color_clr2 : active_el == 7 }">② 여름</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-2">
                                    <span class="label color_clr2"   :class="{ color_clr2 : active_el == 8 }">③ 가을</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-2" >
                                    <span class="label"   :class="{ color_clr2 : active_el == 9 }">④ 겨울</span>                    
                                </label>
                            </li>
                        </ul>
                        <div class="bg-sky">
                            <p class="txt-tit-2">
                                정답
                                <span class="">1번</span>    
                            </p>
                            <p class="inner-txt-2">경량 컨테이너로서 자바 객체를 직접 관리한다. 각각의 객체 생성, 소멸과 같은 라이프 사이클을 관리하며 스프링으로부터 필요한 객체를 얻을 수 있다.</p>
                        </div> 
                        <p class="hr"></p>
                        <p class="txt-tit"><span class="ico mark-o"></span>03. 다음 중 OO에 해당하는 것을 고르세요.</p>
                        <p class="inner-txt op65 mb20">태양계에는 항성인 태양과 그 가까이로부터 수성, 금성, 지구, 화성, 즉 지구형 행성이 순서대로 나열되어 있으며 그 다음에 유성대(asteroid belt)가 존재한다. </p>
                        <ul class="ul-block com-rdo img-rdo result">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-3">
                                    <div class="label"   :class="{ border_clr2 : active_el == 10 }" ><span class="ico num-cir pull">1</span> <img src="@/assets/img/study_quiz_choice.png" class="multi-img" alt=""/> </div>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-3">
                                    <div class="label border_clr2"   :class="{ border_clr2 : active_el == 11 }" ><span class="ico num-cir pull"><span class="ico mark-o sm"></span>2</span> <img src="@/assets/img/study_quiz_choice.png" class="multi-img" alt=""/> </div>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-3">
                                    <div class="label"   :class="{ border_clr2 : active_el == 12 }" ><span class="ico num-cir pull">3</span> <img src="@/assets/img/study_quiz_choice.png" class="multi-img" alt=""/> </div>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-3">
                                    <div class="label"   :class="{ border_clr2 : active_el == 13 }" ><span class="ico num-cir pull">4</span> <img src="@/assets/img/study_quiz_choice.png" class="multi-img" alt=""/> </div>                    
                                </label>
                            </li>
                        </ul>
                        <div class="bg-sky">
                            <p class="txt-tit-2">
                                정답
                                <span class="">2번</span>    
                            </p>
                            <p class="inner-txt-2">태양계는 대략 46억 년 전 분자운의 중력붕괴로 형성된 태양과, 항성인 태양의 중력에 이끌려 있는 주변 천체가 이루는 체계를 말한다.</p>
                        </div>     
                        <p class="hr"></p>
                        <p class="txt-tit"><span class="ico mark-x"></span>04. 다음 중 OO에 해당하는 것을 고르세요.</p>
                        <p><img class="single-img" src="@/assets/img/study_quiz_choice.png" alt=""></p>
                        <p class="inner-txt op65 mb20">Java 기반의 웹 프레임워크. 로드 존슨이 2002년에 출판한 저서 Expert One-on-One J2EE Design and Development에서 선보인 소스 코드를 시작으로 점점 발전하게 되었다. 2003년 6월에 최초로 공개되었다. </p>
                        <ul class="ul-block com-rdo result">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-4">
                                    <span class="label"   :class="{ color_clr2 : active_el == 14 }" >① EJB를 주 프레임워크로 사용할 때 불편했을 점을 해소하려고 개발되었다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-4" >
                                    <span class="label color_clr2"   :class="{ color_clr2 : active_el == 15 }" ><span class="ico mark-o sm"></span>② 2002년 로드존슨이 출판한 도서가 스프링의 시작이라고 보는 견해가 있다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-4">
                                    <span class="label"   :class="{ color_clr2 : active_el == 16 }">③ 2003년 Apache 2.0 License로 최초 공개</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo " name="test-rdo-4">
                                    <span class="label color_clr2"   :class="{ color_clr2 : active_el == 17 }">④ 2003년 상용으로 소개되었으나 이후 오픈소스로 바뀌었다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" name="test-rdo-4">
                                    <span class="label"   :class="{ color_clr2 : active_el == 18 }"><span class="ico mark-o sm"></span>⑤ 동적인 웹 사이트를 개발하기 위한 여러 가지 서비스를 제공하고 있다.</span>                    
                                </label>
                            </li>
                        </ul>
                        <div class="bg-sky">
                            <p class="txt-tit-2">
                                정답
                                <span class="">2번,5번</span>    
                            </p>
                            <p class="inner-txt-2">경량 컨테이너로서 자바 객체를 직접 관리한다. 각각의 객체 생성, 소멸과 같은 라이프 사이클을 관리하며 스프링으로부터 필요한 객체를 얻을 수 있다.</p>
                        </div>
                    </div>
                    <!-- //inner -->
                </div>  
            </div>

            <!-- floatingbtn -->
            <div class="absBtmBtn">  
                <button type="button" class="btn md clr1">정답확인</button>
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
  name: 'Study_04_SO_quiz_multichoice',
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
