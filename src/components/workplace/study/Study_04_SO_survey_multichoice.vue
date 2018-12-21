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
                            <span>총 3문항</span>
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
                        <p class="txt-tit mb20">01. 나는 OO을 할 때 가장 행복하다.</p>
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" @click="activate(1)">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 1 }" >가족과의 여행</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" @click="activate(2)">
                                    <input type="radio" class="rdo" name="test-rdo" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 2 }" >친구와의 저녁 식사</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" @click="activate(3)">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 3 }">여러 사람과의 운동</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" @click="activate(4)">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 4 }"> 혼자하는 독서</span>                    
                                </label>
                            </li>
                        </ul>     
                        <p class="hr"></p>
                        <p class="txt-tit mb20">02. 가장 불행하다고 생각하는 2가지를 고르시오.</p>                        
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" @click="activate(6)">
                                    <input type="radio" class="rdo" name="test-rdo-2">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 6 }">남들이 나의 컴플렉스에 대해 좋지 않은 이야기 하는 것을 들었을 때</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" @click="activate(7)">
                                    <input type="radio" class="rdo" name="test-rdo-2" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 7 }">금전적인 어려움을 겪을 때</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" @click="activate(8)">
                                    <input type="radio" class="rdo" name="test-rdo-2">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 8 }">주변에 아무도 없다고 느낄 때</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" @click="activate(9)">
                                    <input type="radio" class="rdo" name="test-rdo-2" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 9 }"> 몸이 아프다고 느낄 때</span>                    
                                </label>
                            </li>
                        </ul>
                        <p class="hr"></p>
                        <p class="txt-tit">03. 나는 OO을 할 때 가장 불행하다.</p>
                        <p class="inner-txt op65 mb20">낙관주의는 아직 현실화하지 않은 일을 좋은 방향으로 생각하는 능력이다. 만사가 잘 될 수 있다는 약속을 믿는 것이다. 중요한 건 ‘만사가 잘 될 거’라는 막연한 느낌이 아니라 약속이다. 진정한 낙관주의자는 그 약속을 현실화시키기 위해 자기가 해야 할 일을 찾는다.” 옌스 바이드너의 이야기입니다.</p>
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" @click="activate(1)">
                                    <input type="radio" class="rdo" name="test-rdo-3">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 1 }" >나에 관한 욕을 들을 때</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" @click="activate(2)">
                                    <input type="radio" class="rdo" name="test-rdo-3" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 2 }" >금전적인 어려움을 겪을 때</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" @click="activate(3)">
                                    <input type="radio" class="rdo" name="test-rdo-3">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 3 }">주변에 아무도 없다고 느낄 때</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" @click="activate(4)">
                                    <input type="radio" class="rdo" name="test-rdo-3">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"   :class="{ color_clr2 : active_el == 4 }"> 몸이 아프다고 느낄 때</span>                    
                                </label>
                            </li>
                        </ul>     
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
    //   active_el: 0,
    }
  },
  /* vue function */
  methods: {
    // activate: function (el) {
    //   if(this.active_el > 5){
    //       this.active_el = el
    //       return false
    //   }else if(this.active_el <= 5){
    //       this.active_el = el
    //   }
    // }
  }
}
</script>
