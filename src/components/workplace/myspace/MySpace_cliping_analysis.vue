<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="fixed tab">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18">나의 공간</p>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="scrollTab">
                    <li><a href="#tab1">정규 학습</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">자율 학습</a></li>
                    <li><a href="#tab3">학습 계획</a></li>
                    <li><a href="#tab4">다운로드</a></li>
                    <li class="on"><a href="#tab5">나의 지식 CLIPing</a></li>
                    <li><a href="#tab6">학습 관리</a></li>
                </ul>
            </div>
            <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">
          <div class="cell">
            <div class="filterArea ml-18 mr-18">
                <p class="font_15 mono_80 fwb"> 나의 지식 CLIPing 활동이력 <span class="ico down"></span></p>
            </div>
          </div>
          
          <div class="cell">
            <div class="inner">
                <!-- list -->
                <ul class="multiList type2 pb15">
                    <li>
                        <div class="icon_wrap">
                            <span class="ico2 like"></span>
                        </div>
                        <div class="txt_wrap">
                            <p class="icon_txt">좋아요</p>
                            <p class="title">일용직 임금 지냅내역서 (ISO양식)</p>
                            <ul class="info">
                                <li class="fwb color_clr3">paper Pro</li>
                                <li class="">2018.10.10 07:35</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="icon_wrap">
                            <span class="ico2 comment"></span>
                        </div>
                        <div class="txt_wrap">
                            <p class="icon_txt">댓글</p>
                            <p class="title">인공지능 시대, 불안 대신 자유를 누리는 방법</p>
                            <p class="contents">정의는 사회의 자산입니다. 공정과 평등에 대한 정의가 무엇보다 소중하다고 생각합니다.</p>
                            <ul class="info">
                                <li class="fwb color_clr3">지식영상</li>
                                <li class="">2018.10.10 07:35</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="icon_wrap">
                            <span class="ico2 share"></span>
                        </div>
                        <div class="txt_wrap">
                            <p class="icon_txt">공유</p>
                            <p class="title">부자는 돈이 일하게 한다</p>
                            <ul class="info">
                                <li class="fwb color_clr3">서평칼럼</li>
                                <li class="">2018.10.10 07:35</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="icon_wrap">
                            <span class="ico2 reply"></span>
                        </div>
                        <div class="txt_wrap">
                            <p class="icon_txt">답글</p>
                            <p class="title">이 세상에 진짜 끝이란 없다 : 극지에서 우주를...</p>
                            <p class="contents">철학도인 저는 ‘극지’에 대한 로망을 가지고 있었습니다. 현실의 잡음이나 오염이 없는 곳, 극지가 주는 인문학적 매력에 빠져..</p>
                            <ul class="info">
                                <li class="fwb color_clr3">지식영상</li>
                                <li class="">2018.10.10 07:35</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="icon_wrap">
                            <span class="ico2 heart2"></span>
                        </div>
                        <div class="txt_wrap">
                            <p class="icon_txt">찜하기</p>
                            <p class="title">편견을 넘어 꿈과 희망에 주문을 걸다</p>
                            <ul class="info">
                                <li class="fwb color_clr3">paper Pro</li>
                                <li class="">2018.10.10 07:35</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="icon_wrap">
                            <span class="ico2 share"></span>
                        </div>
                        <div class="txt_wrap">
                            <p class="icon_txt">공유</p>
                            <p class="title">부자는 돈이 일하게 한다</p>
                            <ul class="info">
                                <li class="fwb color_clr3">서평칼럼</li>
                                <li class="">2018.10.10 07:35</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="icon_wrap">
                            <span class="ico2 comment"></span>
                        </div>
                        <div class="txt_wrap">
                            <p class="icon_txt">댓글</p>
                            <p class="title">남다른 인생을 사는 법 : 감성의 끝에 서라</p>
                            <p class="contents">유익한 영상 올려주셔서 감사합니다.</p>
                            <ul class="info">
                                <li class="fwb color_clr3">지식영상</li>
                                <li class="">2018.10.10 07:35</li>
                                <li><span class="star ico"></span>4.5</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
            </div>
          </div>

        </div>
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_cliping_analysis',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
