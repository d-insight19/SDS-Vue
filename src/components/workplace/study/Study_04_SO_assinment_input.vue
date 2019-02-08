<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_assinment pd70">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand wh assinment-head-bg">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button>
                    <div class="page-btn">
                        <span class="ico back-wh"></span>
                        <div class="num "><span>03</span>/<span>36</span>p</div>
                        <span class="ico next-wh"></span>
                    </div>
                    <p class="header_text  font_19"> </p>
                </div>  
                <div class="hide_header" style="background-color:rgba(0,0,0,0.45); padding-top:66px; padding-bottom:60px">                
                    <div class="hide-inner">
                        <span class="chip wh">과제</span>                         
                        <p class="h-tit1">Flinto로 뮤직앱 프로토타입 만들기 프로토타입 만들기</p>
                    </div>
                </div>
            </div>
            <!-- //header -->


            <!-- header + 확장형 + tab  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '2'" id="header" class="tab">          
                <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_19"> </p>
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
                <p class="header_text font_19"> </p>
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
                        <p class="inner-txt">과제내용 설명입니다 과제내용 설명입니다 과제내용 설명입니다 과제내용 설명입니다 과제내용 설명입니다 과제내용 설명입니다 과제내용 설명입니다 과제내용 설명입니다 </p>
                        <p class="line02"></p>
                        <p class="txt-tit">1. OO은 OO해야합니다. 의견을 입력하세요.</p>
                        <button class="btn-md">작성가이드</button>
                        <button class="btn-md">모범답안</button>
                        <p class="empty_img">
                            <img src="" alt="">
                        </p>
                        <input @input.prevent="e => keylength = e.target.value.length"   type="text" class="input01" placeholder="의견을 입력해 주세요">
                        <label class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength"></span>/300</span>
                        </label>
                        <p class="hr"></p>
                        <p class="txt-tit">2. OO은 OO해야합니다. 의견을 입력하세요.</p>
                        <button class="btn-md" >작성가이드</button>
                        <p class="empty_img">
                            <img src="" alt="">
                        </p>                        
                        <input @input.prevent="e => keylength2 = e.target.value.length"  type="text" class="input02" placeholder="의견을 입력해 주세요">
                        <label class="inputbottom inp-num">
                            <span class="strlenth" ><span v-text="keylength2"></span>/300</span>
                        </label> 
                    </div>
                    <!-- //inner -->
                </div>  
            </div>


            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md " :class="{ clr1 : keylength && keylength2}">제출</button>
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
