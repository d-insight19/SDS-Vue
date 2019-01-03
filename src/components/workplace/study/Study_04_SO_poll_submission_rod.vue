<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_poll ">
            
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
                <div class="hide_header" style="background:#efeff6; padding-top:76px; padding-bottom:32px">                
                    <div class="hide-inner">                           
                        <p class="h-tit5"> 
                            <span class="ico chk"></span>
                            <span >제출 완료!</span>
                        </p>
                        <p class="h-tit1">선호 커피 브랜드 시장 조사 선호 커피 브랜드 시장 조사</p>
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
                        <div>
                            <p class="inner-tit">1. 좋아하는 커피브랜드 1개이상 선택해주세요.</p>
                            <p class="person">참여인원 <span>100</span>명</p>
                        </div>
                        <div class="progBox mt22">
                            <div class="bar clr1" style="width: 38%; height:8px; border-radius: 100px;"></div>                            
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">스타벅스</p>
                            <div class="fr">
                                <span class="part-num"><span>38</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>38</span>%</span>
                            </div>                                   
                        </div>
                        <div class="progBox mt22">
                            <div class="bar clr2" style="width: 29%; height:8px; border-radius: 100px;"></div>                            
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">탐앤탐스 <span class="chip border_clr2 color_clr2" style="mrgin-left:6px; mrgin-bottom:0;">나의 선택</span></p>
                            <div class="fr">
                                <span class="part-num"><span>29</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>29</span>%</span>
                            </div>                                  
                        </div>                        
                        <div class="progBox mt22">
                            <div class="bar clr1" style="width: 22%; height:8px; border-radius: 100px;"></div>                            
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">이디야</p>
                            <div class="fr">
                                <span class="part-num"><span>22</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>22</span>%</span>
                            </div>                                
                        </div>
                        <div class="progBox mt22">
                            <div class="bar clr1" style="width: 11%; height:8px; border-radius: 100px;"></div>                            
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">할리스</p>
                            <div class="fr">
                                <span class="part-num"><span>11</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>11</span>%</span>
                            </div>                                
                        </div>
                        <!-- //txt-wrap -->
                    </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <ul>
                <li>
                    <button type="button" class="btn md">재투표</button>
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
  name: 'Study_SO_poll_submission_rod',
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
