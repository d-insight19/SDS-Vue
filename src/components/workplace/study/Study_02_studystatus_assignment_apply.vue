<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_stauts_apply pd70">
            <!-- header -->
            <div id="header" class="fixed">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text font_18">과제 작성</p>
                    <p class="end">
                        <span class="end_btn1 color_clr2">임시저장</span>
                        <span class="end_btn2 color_clr2">제출</span>
                    </p>
                </div>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner" style="padding-top:78px;">
                        <p class="h-tit5"><strong>과제정보</strong></p>
                        <table style="margin: 16px 0 14px;">
                            <tr>
                                <td class="l-txt fwb">과정명</td> 
                                <td class="r-txt">[국가] 실천 PJT중심 자바 기반 웹 개발자 양성</td>
                            </tr>
                            <tr>
                                <td class="l-txt fwb">과제제목</td> 
                                <td class="r-txt">중간과제</td>
                            </tr>
                            <tr>
                                <td class="l-txt fwb">과제유형</td> 
                                <td class="r-txt">정답작성 + 적용/성찰/의견작성</td>
                            </tr>
                            <tr>
                                <td class="l-txt fwb">과제내용</td> 
                                <td class="r-txt">첨부파일 내용을 확인하고 답변과 본인의 의견을 작성하세요</td>
                            </tr>
                        </table>         
                        <p class="label-tit-2"><strong>첨부파일</strong></p>
                        <ul class="ulList type4 mb32">
                            <li class="bottom-bd">
                            <div>
                                <span class="ico img-a"></span>
                                <span class="at-tit">Solution listup.jpg</span>
                                <div class="fr">
                                <span class="at-num">500KB</span>
                                <span class="ico download"></span>
                                </div>
                            </div>                         
                            </li>
                        </ul>
                        <p class="h-tit5"><strong>과제작성</strong></p>
                        <table style="margin: 16px 0;">
                            <tr>
                                <td class="l-txt fwb">학습자</td>
                                <td class="r-txt">정혜민</td>
                            </tr>
                            <tr >
                                <td class="l-txt fwb">제출일자</td>
                                <td class="r-txt">2018. 03. 17</td>
                            </tr>
                        </table>                
                        <ul class="multiList type2 op25">
                            <li>
                                <p class="label-tit14 mb8">제출제목</p>
                                <slp-text-field placeholder="제목을 입력해주세요."></slp-text-field>
                            </li>                      
                            <li>
                                <p class="label-tit14 mb8">제출내용</p>
                                <slp-text-field placeholder="내용을 입력해주세요."></slp-text-field>
                            </li>
                        </ul>    
                        <p class="label-tit16 mt36"> 첨부파일 추가</p>
                        <ul v-show="list1.length" class="ulList type4 bot-btn mt10">
                            <li v-for="(item, index) in list1" :key="index">
                            <div>
                                <span class="ico img-a"></span>
                                <span class="at-tit">Solution listup.jpg</span>
                                <div class="fr">
                                <span class="at-num">500KB</span>
                                <span class="ico deletemode_20_black" @click="deleteFileList(index)"></span>
                                </div>
                            </div>                                                             
                            </li>  
                        </ul>
                        <!-- 추가 리스트 -->                        
                    </div>
                </div>
            </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <a href="#" class="btn sm w100p add" @click="addList1()" ><span class="ico"></span>파일 추가</a> 
            </div>
            <!-- //floatingbtn -->                
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Study_02_studystatus_assignment_apply',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      list1: []
    }
  },
  /* vue function */
  methods: {
    addList1 () {
      this.list1.push('tmp 어학등급 아이템')
    },
    deleteFileList (index) {
      console.log(index, '제거')
      this.list1.splice(index, 1)
    }
  }
}
</script>
