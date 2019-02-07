<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm">

        <!-- header  -->
        <div id="header" class="expand">          
          <!--<div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">이러닝 제작</p>
          </div>-->
          <div class="hide_header pl18 pr18" style="padding-top:30px;">
            <p class="font_30 fwb">이러닝 제작</p>
            <div class="stepper mb30">
                <div class="clearfix">
                    <h2 class="tit">과정구성</h2>
                    <div class="num">
                        <strong class="color_clr2">2</strong>/<span>5</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:40%"></div>
                </div>
                <p class="txt-desc">제작하는 학습과정에 원하는 아이템을 추가하여 과정을 구성합니다.</p>
            </div>
            <p class="hr mb0"></p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner pdb20 ">
                
                <h2 class="h-tit2 fwb600 mb0"> 과정 모드를 선택해 주세요 </h2>
                <ul class="materialModeList">
                    <li>
                        <div class="icon_wrap">
                            <span class="ico atorm_module_79"></span>
                        </div>
                        <div class="txt_wrap">
                            <p class="title">모듈과 차시를 함께 구성하기</p>
                            <p class="contents">유사한 내용을 가진 차시를 모듈로 묶음하여 보다 체계적인 과정구성이 가능합니다.</p>
                            <span class="ico next_24"></span>
                        </div>
                    </li>
                    <li>
                        <div class="icon_wrap">
                            <span class="ico atorm_class_79"></span>
                        </div>
                        <div class="txt_wrap">
                            <p class="title">차시만 구성하기</p>
                            <p class="contents">차시만으로 간편하고 빠르게 과정을 구성할 수 있습니다.</p>
                            <span class="ico next_24"></span>
                        </div>
                    </li>
                </ul>


            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
              <li><button type="button" class="btn ld">이전</button></li>
            </ul>
        </div>
        <!-- //floating button --> 
      </div>
      <!-- //container -->    

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Atorm_e-learning_material_mode',
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
