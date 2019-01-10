<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_opinion_sub ">
            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <div class="page-btn">
                        <span class="ico back"></span>
                        <div class="num"><span>03</span>/<span>36</span>p</div>
                        <span class="ico next"></span>
                    </div>
                    <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:32px">                
                    <div class="hide-inner">                           
                        <p class="h-tit5"> 
                            <span class="ico chk"></span>
                            <span >제출 완료</span>
                        </p>
                        <p class="h-tit1">독일, 임금공개법에 대한 의견공유</p>
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
                            <p class="inner-tit">OO은 OO해야 합니다. 의견공유 텍스트 질문 영역입니다. 당신의 의견은 어떻습니까?</p>
                            <p class="person">참여인원 <span>50</span>명</p>
                        </div>
                        <div class="progBox mt22">
                            <div class="bar clr1" style="width: 17%; height:8px; border-radius: 100px;"></div>                            
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">대통령의 가족을 지켜는 법은 필수이기 때문에 현재 정책을 유지해야 한다.</p>
                            <div class="fr">
                                <span class="part-num"><span>5</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>17</span>%</span>
                            </div>                                   
                        </div>
                        <div class="progBox mt22">
                            <div class="bar clr2" style="width: 58%; height:8px; border-radius: 100px;"></div>                            
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt"> <span class="chip border_clr2 color_clr2">나의 선택</span>  대통령의 가족도 우리와 같은 시민일 뿐, 경호 예우는 필요없다.</p>
                            <div class="fr">
                                <span class="part-num"><span>16</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>58</span>%</span>
                            </div>                                  
                        </div>
                        <div class="progBox mt22">
                            <div class="bar clr1" style="width: 21.5%; height:8px; border-radius: 100px;"></div>                            
                        </div>
                        <div class="txt-wrap clearfix">
                            <p class="prog-txt">잘 모르겠다.</p>
                            <div class="fr">
                                <span class="part-num"><span>7</span>명</span>
                                <span class="pipe"></span>
                                <span class="part-num-2"><span>21.5</span>%</span>
                            </div>                                
                        </div>
                        <div class="txt-line">
                            <span class="my-op">나의 의견</span>
                            <p class="total-op"> 
                                <span class="total-val color_clr2">전체보기</span>                                
                                <span class="total-num color_clr2">26</span>                      
                            </p> 
                        </div>
                        <p class="line01"></p>
                        <p class="reply-name mt16">
                            <span>정*민 [작성자]</span>
                            <span class="fr ico more"></span>
                        </p>
                        <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                        <p><span class="reply-date">2018.09.14  21:34</span></p>
                        <div class="reply-wrap">
                            <span class="ico arr down"></span>
                            <span>답글 4</span>
                            <p class="fr reply-num">
                            <span class=" ico like_32 blue"></span>
                            <span class="">12</span>
                            <span class=" ico unlike_32"></span>
                            <span class="">3</span>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md clr1">제출</button>
            </div>

        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Study_04_SO_opinion_submission',
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
