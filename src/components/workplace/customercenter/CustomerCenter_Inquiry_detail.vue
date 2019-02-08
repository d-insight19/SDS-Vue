<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery board">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> </p>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="hide-inner"> 
                        <p class="type color_clr3">과정문의</p>                           
                        <p class="h-tit1">
                            <strong class="q-tit">단계형 다이어그램 (자전거 길) 단계형 다이어그램 단계형 다이어그램</strong>                                                        
                        </p>                       
                        <div class="info">
                            <p class="article">상담분류<span class="val">도서</span></p>
                            <p class="article">과정명<span class="val">The courts title goes here.</span></p>
                            <p class="article">등록일<span class="val">2018.10.10</span></p>
                        </div> 
                    </div>
                </div>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">                       
                        <div class="qa_content">
                            <div class="question">
                                <p class="title"> <span class="q color_clr1 border_clr1">Q</span>문의내용</p>
                                <p>해당 과정의 도서에대한 질문을 드립니다. 
                                    구매 방법에 대해 설명이 되어 있지 않던데 어떤 경로로 구매가 가능한지에 대해 답변해 주실 수 있을까요?
                                </p>
                            </div>

                            <div class="answer">
                                <p class="title"> <span class="a clr1">A</span>답변</p>
                                <p class="content">문의 주신 도서구매 과정에 대해서답변 드립니다.
                                    문의 주신 도서구매 과정에 대해서답변 드립니다.
                                </p>
                                <ul class="info">
                                    <li class="fwb">홍길동</li>
                                    <li class="icon"><span class="date">2018.10.10</span></li>
                                </ul>
                                <p>안녕하세요, 해당도서는 나의 공간에서 신청이 가능 합니다. 추가적으로 궁금한 사항이 생기면 언제든지 문의 주세요. 감사합니다.
                                </p>
                            </div>

                        </div> 
                        <!-- //qa_content -->                     

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
