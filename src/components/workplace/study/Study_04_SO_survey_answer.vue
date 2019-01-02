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
                <div class="hide_header" style="background:rgba(0,0,0,0.45); padding-top:66px; padding-bottom:60px">                
                    <div class="hide-inner">
                        <span class="chip wh">설문</span>                         
                        <p class="h-tit1">삶의 만족도 지수 조사</p>
                        <p class="h-tit5">
                            <span>총 4문항</span>
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
                        <p class="txt-tit">01. 다음 지문에서 느껴지는 행복 요소는 무엇이라 생각하는지 적으시오.</p>
                        <p class="inner-txt op65 mb20">낙관주의는 아직 현실화하지 않은 일을 좋은 방향으로 생각하는 능력이다. 만사가 잘 될 수 있다는 약속을 믿는 것이다. 중요한 건 ‘만사가 잘 될 거’라는 막연한 느낌이 아니라 약속이다. 진정한 낙관주의자는 그 약속을 현실화시키기 위해 자기가 해야 할 일을 찾는다.” 옌스 바이드너의 이야기입니다. </p>
                        <input type="text" @input.prevent="e => keylength = e.target.value.length" class="input" placeholder="의견을 입력해 주세요">
                        <div class="inputbottom inp-num">
                            <span class="strlenth"><span v-text="keylength"></span>/300</span>
                        </div>   
                        <p class="hr"></p>
                        <p class="txt-tit">02. 자신을 가장 불행하게 만드는 요소는 무엇이라고 생각하나요?</p>                        
                        <input type="text" @input.prevent="e => keylength2 = e.target.value.length"  class="input" placeholder="의견을 입력해 주세요" value="실패에 대">
                        <div class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength2"></span>/300</span>
                        </div>   
                        <p class="hr"></p>
                        <p class="txt-tit">03. 다음 지문에서 느껴지는 사람들이 불행한 이유는 무엇이라고 생각하는지 적으시오.</p>
                        <p class="inner-txt op65 mb20">낙관주의는 아직 현실화하지 않은 일을 좋은 방향으로 생각하는 능력이다. 만사가 잘 될 수 있다는 약속을 믿는 것이다. 중요한 건 ‘만사가 잘 될 거’라는 막연한 느낌이 아니라 약속이다. 진정한 낙관주의자는 그 약속을 현실화시키기 위해 자기가 해야 할 일을 찾는다.” 옌스 바이드너의 이야기입니다. </p>
                        <input  type="text" @input.prevent="e => keylength3 = e.target.value.length"  class="input" placeholder="의견을 입력해 주세요" value="실패에 대한 두려움">
                        <div class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength3"></span>/300</span>
                        </div>           
                    </div>
                    <!-- //inner -->
                </div>  
            </div>

            <!-- floatingbtn -->
            <div class="absBtmBtn">  
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
  name: 'Study_04_SO_survey_answer',
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
      keylength2: 0,
      keylength3: 0
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
