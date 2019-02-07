<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
      <div id="container" class="mediaquery studystatus">

        <!-- header  -->
        <div id="header" class="fixed">          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">과제작성</p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner" style="padding-top:0;">

                <ul class="confirm_item_detail">
                    <li @click="toggleMenu($event)">
                        <span>과제정보</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner">
                            
                        </div>
                    </li>
                    <li  @click="toggleMenu($event)">
                        <span>과제작성</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner">
                            과제작성 상세
                        </div>
                    </li>
                    <li class="open"   @click="toggleMenu($event)">
                        <span>과제 첨삭 내용</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner">
                            <p class="font_14 fwb">점수</p>
                            <p><span class="num"><span class="color_clr2">98</span>/100</span>점</p>
                            <p class="mt16">첨삭일자</p>
                            <p >2018. 03. 17</p>
                            <p class="mt16 mb8">강사의견</p>
                            <div class="tb_wrap type2">
                                <p>잘 하셨습니다. 학습내용에 대한 이해도도 매우 높고, 답변도 충실하게 잘 작성하였습니다. 수고하셨습니다.</p>
                            </div>

                            <p class="label-tit-2 mt36"><strong>첨부파일</strong></p>
                            <ul class="ulList type4">
                                <li>
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
                        </div>

                    </li>
                </ul>

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
  name: 'Study_02_studystatus_assignment_result',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      checkboxFlag: false,
      list1: []
    }
  },
  /* vue function */
  methods: {
    toggleMenu (event) {
      if (event.target.classList.contains('open')) {
        event.target.classList.remove('open')
      } else {
        event.target.classList.add('open')
      }
    },
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
