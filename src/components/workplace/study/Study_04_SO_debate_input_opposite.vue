<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_debate pd70">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand wh debate-head-bg">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button>
                    <div class="page-btn">
                        <span class="ico back-wh"></span>
                        <div class="num "><span>03</span> / <span>36</span></div>
                        <span class="ico next-wh"></span>
                    </div>
                    <p class="header_text font_19">스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="hide_header" style="background-color:rgba(0,0,0,0.45); padding-top:66px; padding-bottom:28px">                
                    <div class="hide-inner">
                        <span class="chip wh">토론</span>                         
                        <p class="h-tit1 mt0">대통령 가족에 대한 정보공개와 경호예우 찬반 토론</p>
                        <p class="h-tit5 sm">
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
                        <p class="inner-txt">토론을 통해 정해진 주제에 대한 자신의 주장을 공유하고 다양한 의견을 들어보세요. 5분정도 걸리는 간단한 주제입니다. </p>
                        <p class="line02"></p>
                        <p class="txt-tit">다음 지문에 대하여 찬성 혹은 반대를 선택하고 의견을 작성하세요. </p>
                        <button class="guide-btn">작성가이드</button>                        
                        <p class="inner-txt op65">태양계에는 항성인 태양과 그 가까이로부터 수성, 금성, 지구, 화성, 즉 지구형 행성이 순서대로 나열되어 있으며 그 다음에 유성대(asteroid belt)가 존재한다. </p>
                        <div class="cir-box">
                            <p class="big-cir"><span>찬성</span></p>
                            <p class="big-cir fr"><span>반대</span></p>
                        </div>
                        <input @input.prevent="e => keylength = e.target.value.length"   type="text" class="input01" placeholder="의견을 입력해 주세요">
                        <label class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength"></span>/300</span>
                        </label>                        
                    </div>
                    <!-- //inner -->
                </div>  
            </div>


            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" :disabled="disabledflag" class="btn md" :class="{ clr1 : keylength }">제출</button>
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
  name: 'Study_04_SO_debate_input_normal',
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
      disabled: true
    }
  },
  /* vue function */
  methods: {
    disabledflag () {
      this.disabled = !this.disabled
    }
  }
}
</script>
