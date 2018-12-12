<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_stauts_apply">
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
                        <p class="label-tit-02"><strong>첨부파일 추가</strong></p>
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
                        <p class="sub-tit"><strong>제출제목</strong></p>
                        <div class="singleList ">                        
                            <input  type="text" placeholder="제목을 입력해 주세요" />                        
                        </div>                      
                        <p class="sub-tit"><strong>제출내용</strong></p>
                        <div class="singleList "> 
                            <input  type="text" placeholder="내용을 입력해 주세요" />                  
                        </div>
                        <p class="label-tit-02 mt36"><strong>첨부파일 추가</strong></p>
                        <ul class="ulList type4">
                            <li>
                            <div>
                                <span class="ico img-a"></span>
                                <span class="at-tit">Solution listup.jpg</span>
                                <div class="fr">
                                <span class="at-num">500KB</span>
                                <span class="ico del-blk"></span>
                                </div>
                            </div>                         
                            </li>                
                            <li>
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                <span class="at-num">4.5M</span>
                                <span class="ico del-blk"></span>
                                </div>
                            </div>                         
                            </li>                
                            <li>
                            <div>
                                <span class="ico ppt-a"></span>
                                <span class="at-tit">20180101_AD_Draft.ppt</span>
                                <div class="fr">
                                <span class="at-num">4.5M</span>
                                <span class="ico del-blk"></span>
                                </div>
                            </div>                         
                            </li>                
                        </ul>
                    </div>
                </div>
            </div>
            <!-- floatingbtn -->
            <div class="absBtmBtn">  
                <button type="button" class="btn md "><span class="ico plus"></span>파일 추가</button>
            </div>
            <!-- //floatingbtn -->                
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Study_dictionary',
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
