<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm flip pd70">
        <!-- header  -->
        <div id="header" class="expand">          
          <!--<div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">이러닝 제작</p>
          </div>-->
          <div class="hide_header pl18 pr18" style="padding-top:30px;">
            <p class="font_30 fwb">플립러닝 제작</p>
            <div class="stepper mb30">
                <div class="clearfix">
                    <h2 class="tit">과정구성</h2>
                    <div class="num">
                        <strong class="color_clr2">2</strong>/<span>4</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:50%"></div>
                </div>
                <p class="txt-desc">제작하는 학습과정에 원하는 아이템을 추가하여 과정을 구성합니다.</p>
            </div>
            <p class="hr_2 mb0"></p>
          </div>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner pdb20" style="padding-top:0;">

                <ul class="confirm_item_detail">
                    <li @click="toggleMenu($event)">
                        <span>사전학습</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner pt0">
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>집합강의</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>사후학습</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                              <!-- list -->
                              <ul class="multiList type2">
                                  <li class="open">
                                      <div class="download_detail">
                                          <div class="txt_wrap bbB85">
                                              <p class="title color_clr3">아이템학습</p>
                                          </div>
                                      </div>
                                      <div class="sub_content">
                                          <div class="sub_content_add">
                                              <span class="chip clr2 font_14">아이템 추가</span>
                                          </div>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="download_detail done">
                                          <div class="txt_wrap bbB85">
                                              <p class="icon_txt">2차시</p>
                                              <p class="title">차시명을 입력하세요</p>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                              <!-- //list -->
                        </div>
                    </li>
                </ul>

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">완료</button></li>
            </ul>
        </div>
        
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */
export default {
  name: 'Atorm_group_flip_post_material',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
     toggleFlag: true
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
    }
  }
}
</script>
