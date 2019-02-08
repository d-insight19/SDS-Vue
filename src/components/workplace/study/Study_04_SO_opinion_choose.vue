<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
        <div id="container" class="mediaquery study_opinion pd70">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand wh opinion-head-bg">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico2 prev-wh"></span></button>
                    <div class="page-btn">
                        <span class="ico back-wh"></span>
                        <div class="num "><span>03</span>/<span>36</span>p</div>
                        <span class="ico next-wh"></span>
                    </div>
                    <p class="header_text  font_19"> </p>
                </div>  
                <div class="hide_header" style="background-color:rgba(0,0,0,0.45); padding-top:66px; padding-bottom:28px">                
                    <div class="hide-inner">
                        <span class="chip wh">의견공유</span>                         
                        <p class="h-tit1">독일, 임금공개법에 대한 의견공유</p>
                        <p class="h-tit5">
                            <span>총 1문항</span>
                        </p>
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
                        <p class="inner-txt">의견공유를 통해 자신의 의견을 사람들과 공유하고 다양한 의견을 들어보세요. 5분정도 걸리는 간단한 주제입니다.</p>
                        <p class="line02"></p>
                        <p class="txt-tit">OO은 OO해야 합니다. 의견공유 텍스트 질문 영역입니다.  당신의 의견은 어떻습니까?</p>
                        <button class="btn-md">작성가이드</button>
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo"  @click="activate(1)">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" :class="{ color_clr2 : active_el == 1 }" >대통령의 가족을 지켜는 법은 필수이기 때문에 현재 정책을 유지해야 한다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo"  @click="activate(2)">
                                    <input type="radio" class="rdo" name="test-rdo" checked>
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" :class="{ color_clr2 : active_el == 2 }" >대통령의 가족도 우리와 같은 시민일 뿐, 경호할 필요는 없다고 생각한다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo"  @click="activate(3)">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" :class="{ color_clr2 : active_el == 3 }" >잘 모르겠다.</span>                    
                                </label>
                            </li>
                        </ul>
                        <input @input="onInput" type="text" class="input" placeholder="의견을 입력해 주세요">
                        <div class="inputbottom inp-num">
                            <span class="strlenth" >{{keylength}}/300</span>
                        </div> 
                    </div>
                    <!-- //inner -->
                </div>  
            </div>


            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" disabled="disabled" class="btn md clr1">제출</button>
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
  name: 'Study_04_SO_opinion_choose',
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
      active_el: 2,
      keylength: 0
    }
  },
  /* vue function */
  methods: {
    activate: function (el) {
      this.active_el = el
    },
    onInput (event) {
      this.keylength = event.target.value.length
    }
  }
}
</script>
