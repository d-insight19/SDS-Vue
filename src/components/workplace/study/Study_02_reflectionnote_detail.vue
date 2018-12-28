<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery study_reflection ">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="hide-inner"> 
                        <span class="chip">리플렉션노트</span>     
                        <p class="h-tit1">
                            <strong class="q-tit">질문 타이틀 영역 질문 타이틀 영역 질문 타이틀 영역</strong> 
                            <span class="fr ico more28"></span>                            
                        </p>
                        <p class="ico-group">
                            <span>2018.10.10</span>
                            <span class="pipe"></span>
                            <span>정해민</span>
                            <span class="pipe"></span>
                            <span class="ico view"></span>
                            <span>2,190</span>
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
                        <div>
                            <p class="inner-txt">본질적인 조건을 생각해보다가 떠오른게 있는데 관련보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다.  </p>
                        </div>
                        <p class="label-tit-2 mt36"><strong>첨부파일</strong></p>
                        <ul class="ulList type4">
                            <li>
                            <div>
                                <span class="ico img-a"></span>
                                <span class="at-tit">Solution listup.jpg</span>
                                <div class="fr">
                                <span class="at-num">500KB</span>
                                <span class="ico down-load"></span>
                                </div>
                            </div>                         
                            </li>                
                            <li>
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                <span class="at-num">4.5M</span>
                                <span class="ico down-load"></span>
                                </div>
                            </div>                         
                            </li>                
                            <li>
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                <span class="at-num">4.5M</span>
                                <span class="ico down-load"></span>
                                </div>
                            </div>                         
                            </li>                
                        </ul>

                    </div>
                    <!-- //inner -->
                </div>  
            </div>
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Study_02_studyquestion_detail',
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
