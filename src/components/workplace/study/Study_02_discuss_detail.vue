<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery study_discuss ">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="hide-inner"> 
                        <span class="chip">토론방</span>     
                        <p class="h-tit1">
                            <strong class="q-tit">인공지능에 대한 심층 토론입니다. 자유롭게 의견을 나눠요.</strong>
                            <span class="fr ico more28"></span>                            
                        </p>
                        <p class="info-group fwr">
                            <span>2018.10.10</span>
                            <span class="pipe"></span>
                            <span>정해민</span>
                            <span class="pipe"></span>
                            <span>삼성인력개발원</span>
                        </p>
                        <div class="ico-group">
                            <span class="color_clr3 mr6 fwb">진행중</span>
                            <span class="fwr op80">2018.10.10 - 2018.11.18</span>
                            <span class="pipe"></span>
                            <span class="fwb">45/99명</span>
                        </div> 
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
                        <p class="inner-txt">본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 고하는게 좋겠다. </p>
                        <p class="label-tit-2 mt30">
                            <strong>첨부파일</strong>
                        </p>
                        <ul class="ulList type4">
                            <li>
                            <div>
                                <span class="ico img-a"></span>
                                <span class="at-tit">Solution listup.jpg</span>
                                <div class="fr">
                                <span class="at-num">500KB</span>
                                <span class="ico download"></span>
                                </div>
                            </div>                         
                            </li>                
                            <li>
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                <span class="at-num">4.5M</span>
                                <span class="ico download"></span>
                                </div>
                            </div>                         
                            </li>                
                            <li class="bottom-bd-e3">
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                <span class="at-num">4.5M</span>
                                <span class="ico download"></span>
                                </div>
                            </div>                         
                            </li>
                        </ul>
                        <div class="infoChk pr0 top_bottom_mg">
                            <input type="text" placeholder="의견을 입력하세요.(0/300)" class="input type2"><button type="button" class="btn sm clr1 w17p">등록</button>
                        </div>
                        <ul class="ulList type4 top-bd-d9">
                            <li>
                                <p class="reply-name mt0">
                                    <span>이*민</span>
                                </p>
                                <p class="reply-txt">최대한 쉽고 재미있게 기본개념을 설명해주셨네요.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap mb0">
                                    <span class="ico arr down"></span>
                                    <span>답글 4</span>
                                    <p class="fr reply-num">
                                    <span class=" ico like_32"></span>
                                    <span class="">2</span>
                                    <span class=" ico unlike_32"></span>
                                    <span class="">3</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <p class="reply-name mt0">
                                    <span>정*민 [작성자]</span>
                                    <span class="fr ico more"></span>
                                </p>
                                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap mb0">
                                    <span class="ico arr down"></span>
                                    <span>답글 4</span>
                                    <p class="fr reply-num">
                                    <span class=" ico like_32 "></span>
                                    <span class="">2</span>
                                    <span class=" ico unlike_32"></span>
                                    <span class="">3</span>
                                    </p>
                                </div>
                            </li>
                            <li class="bottom-bd-d9">
                                <p class="reply-name mt0">
                                    <span>이*민</span>
                                </p>
                                <p class="reply-txt">최대한 쉽고 재미있게 기본개념을 설명해주셨네요.</p>
                                <p><span class="reply-date">2018.09.14  21:34</span></p>
                                <div class="reply-wrap mb0">
                                    <span class="ico arr down"></span>
                                    <span>답글 4</span>
                                    <p class="fr reply-num">
                                    <span class=" ico like_32"></span>
                                    <span class="">2</span>
                                    <span class=" ico unlike_32"></span>
                                    <span class="">3</span>
                                    </p>
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
  name: 'Study_02_studyquestion_detail_02',
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
