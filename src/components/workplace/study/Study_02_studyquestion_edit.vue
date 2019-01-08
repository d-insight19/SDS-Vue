<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_question_edit pd70">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico"></span></button>
            <p class="header_text font_18">질문 수정</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                  <div class="inner" style="padding-top:78px;">
                      <ul class="multiList type2">
                        <li>
                          <strong class="label-tit14">제목</strong>
                          <slp-text-field placeholder="질문 있습니다."></slp-text-field>
                        </li>
                        <li>
                          <strong class="label-tit14">분류</strong>                                
                          <slp-select placeholder="1차시" width="100%">
                            <option>1차시</option>
                            <option>수료평과</option>
                            <option>기타</option>
                          </slp-select>
                        </li>
                        <li class="custom">
                            <strong class="label-tit14 mb0">북마크</strong>
                            <div class="fr">
                              <p class="color_clr2"><span class="chip del border_clr2">1 : 36 <span class="ico del-blue"></span></span></p>
                            </div>
                        </li>
                        <li class="custom-2">
                          <strong class="label-tit14 mb0">공개여부</strong>
                          <label class="labelBtn fr">
                            <input type="checkbox" name="" class="chk" checked>
                            <div class="chk_box" @click="toggleMarketing()"  ><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                          </label>
                            <!-- <slp-switch :classObject="{'fr': true}" @click="toggleMarketing()" /> -->                            
                        </li>
                        <li>
                          <!-- list -->
                            <div class="txt-edit" v-if="marketingFlag">
                              <strong class="label-tit14">내용</strong>
                              <textarea class="w100p gr_box" rows="5" >본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. 
                              </textarea>
                            </div>
                            <!-- //list -->
                        </li>
                        <li>
                            <strong class="label-tit16"> 첨부파일 추가</strong>
                            <ul v-show="list1.length" class="ulList type4 bot-btn">
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
            <!-- //contents -->

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
  name: 'Study_02_study_questionedit',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      marketingFlag: true,
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
    },
    toggleMarketing () {
      this.marketingFlag = !this.marketingFlag
    }
  }
}
</script>
