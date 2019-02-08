<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery study_qpqa ">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> </p>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="hide-inner"> 
                        <span class="chip">Quick Poll/Answer</span>     
                        <p class="h-tit1">
                            <strong class="q-tit">Quick Poll/Answer 타이틀 영역입니다 타이틀 영역입니다</strong>                           
                        </p>
                        <p class="info-group ">
                            <span class="color_clr3 mr6 fwb">진행중</span>
                            <span class="fwr">2018.10.10 - 2018.11.18</span>
                        </p>
                        <div class="ico-group">
                            <span class="fwr op80">정해민</span>
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
                        <p class="txt-tit">Q. 본 교육과정의 수업방식에 대해 전반적으로 만족 하십니까?</p>
                        
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[0]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">매우 아니다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[1]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">아니다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[2]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">보통이다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[3]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">그렇다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[4]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">매우 그렇다.</span>                    
                                </label>
                            </li>
                        </ul>
                    </div>
                    <!-- //inner -->
                </div>  
            </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md" :class="{clr1: rdo}">확인</button>
            </div>
            <!-- //floatingbtn -->
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
      headerType: 1,
      rdo: undefined,
      rdos: [1, 2, 3, 4, 5]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
