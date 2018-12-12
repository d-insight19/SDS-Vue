<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_reflection_edit">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_18">리플렉션노트 작성</p>
            <p class="end color_clr2">완료</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        <p class="sub-tit"><strong>제목</strong></p>
                        <div class="singleList ">                        
                            <input  type="text" placeholder="제목을 입력해 주세요" />                        
                        </div>                      
                        <p class="sub-tit"><strong>내용</strong></p>
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
