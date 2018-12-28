<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_stauts_apply pd70">
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">과제 작성</p>
                <p class="end sub color_clr2">임시저장</p>
                <p class="end color_clr2">제출</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        <p class="h-tit5"><strong>과제정보</strong></p>
                        <ul>
                            <li>
                                <div class="l-inb">과정명</div>
                                <div class="r-inb">[국가] 실천 PJT중심 자바 기반 웹 개발자 양성</div>
                            </li>
                            <li>
                                <div class="l-inb">과제제목</div>
                                <div class="r-inb">중간과제</div>
                            </li>
                            <li>
                                <div class="l-inb">과제유형</div>
                                <div class="r-inb">정답작성 + 적용/성찰/의견작성</div>
                            </li>
                            <li>
                                <div class="l-inb">과제내용</div>
                                <div class="r-inb">첨부파일 내용을 확인하고 답변과 본인의 의견을 작성하세요</div>
                            </li>
                        </ul>
                        <p class="label-tit-2"><strong>첨부파일 추가</strong></p>
                        <ul class="ulList type4 mb32">
                            <li class="bottom-bd">
                            <div>
                                <span class="ico img-a"></span>
                                <span class="at-tit">Solution listup.jpg</span>
                                <div class="fr">
                                <span class="at-num">500KB</span>
                                <span class="ico del-blk"></span>
                                </div>
                            </div>                         
                            </li>
                        </ul>
                        <p class="h-tit5"><strong>과제작성</strong></p>
                        <ul>
                            <li>
                                <div class="l-inb">학습자</div>
                                <div class="r-inb">정혜민</div>
                            </li>
                            <li class="bottom-bd bottom-pd">
                                <div class="l-inb">제출일자</div>
                                <div class="r-inb">2018. 03. 17</div>
                            </li>
                        </ul>                
                        <ul class="multiList type2 op25">
                            <li>
                                <strong class="label-tit14">제출제목</strong>
                                <slp-text-field placeholder="제목을 입력해주세요."></slp-text-field>
                            </li>                      
                            <li>
                                <strong class="label-tit14">제출내용</strong>
                                <slp-text-field placeholder="내용을 입력해주세요."></slp-text-field>
                            </li>
                            <li>
                            <strong class="label-tit16"> 첨부파일 추가</strong>
                            <ul v-show="list1.length" class="ulList type4">
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
                            </li>   
                        </ul>                           
                    </div>
                </div>
            </div>
            <!-- floatingbtn -->
            <div class="absBtmBtn">  
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
