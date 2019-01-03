<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_question_edit">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico"></span></button>
            <p class="header_text font_18">질문 수정</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                  <div class="inner">
                      <ul class="ulList type1">
                        <li>
                          <strong class="label-tit">제목</strong>
                          <input type="text" class="input" placeholder="질문이 있습니다.">
                        </li>
                        <li>
                          <strong class="label-tit">분류</strong>
                          <select class="select w100p">
                            <option>1차시</option>
                            <option>수료평과</option>
                            <option>기타</option>
                          </select>
                        </li>
                      </ul>
                      <!-- //list -->
                      
                        <div class="cTitWrap txt-line top-bd mt20">
                          <strong class="c-tit">북마크</strong>
                            <div class="fr">
                              <strong class="color_clr2"><span class="chip">1 : 36 <span class="ico del-blue"></span></span></strong>
                            </div>
                        </div>

                        <div class="cTitWrap txt-line">
                          <strong class="c-tit">공개여부</strong>
                          <label class="labelBtn fr">
                            <input type="checkbox" name="" class="chk">
                            <div class="chk_box" @click="toggleMarketing()" ><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                          </label>
                        </div>

                      <!-- list -->
                      <div class="txt-edit" v-if="marketingFlag">
                        <strong class="e-tit">내용</strong>
                        <textarea class="w100p gr_box" rows="5" >본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 
                        </textarea>
                      </div>
                      <!-- //list -->
                      
                      <p class="label-tit-2 mt36"><strong>첨부파일 추가</strong></p>
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
            <div class="fixBtmBtn abs">  
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
  name: 'Study_02_study_questionedit',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      marketingFlag: false
    }
  },
  /* vue function */
  methods: {
    toggleMarketing () {
      this.marketingFlag = !this.marketingFlag
    }
  }
}
</script>
