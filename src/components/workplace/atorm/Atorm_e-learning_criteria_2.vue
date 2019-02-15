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
            <p class="font_30 fwb">이러닝 제작</p>
            <div class="stepper mb30">
                <div class="clearfix">
                    <h2 class="tit">수료기준</h2>
                    <div class="num">
                        <strong class="color_clr2">4</strong>/<span>5</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:80%"></div>
                </div>
                <p class="txt-desc">제작한 학습에 대한 수료 기준 및 가중치를 설정할 수 있습니다.</p>
                <button class="btn-md">수료기준 가이드</button>
            </div>
            <p class="hr_2 mb0"></p>
          </div>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner pdb20">
                <p class="font_18 fwb mb20">과정 수료기준</p>
                <p class="mb8 font_14">총점 <span class="mono_50">(100점 기준)</span></p>
                <div class="inp-wrap">                  
                    <input type="text">
                    <span class="score mono_80 font_14 fwb">
                        <span class="num">70</span> 점 이상
                    </span>
                </div>
                <p class="mb8 font_14 mt10">진도율 <span class="mono_50">(100% 기준)</span></p>
                <div class="inp-wrap">                  
                    <input type="text">
                    <span class="score mono_80 font_14 fwb">
                        <span class="num">85</span> % 이상
                    </span>
                </div>
                <p class="mono_65 mt26">이 과정은 총점 <span class="color_clr1 fwb">0점</span> 이상을 획득하고<br/>집합강의 <span class="color_clr1 fwb">0%</span> 이상 출석 시, 수료가 가능한 과정입니다.</p>

                

                <!-- opacity -->
                <div class="">
                    <p class="line01" style="margin: 29px 0 18px;"></p>
                    <div>
                        <span class="font_18 fwb mb5">총점 평가항목 및 반영 비율 설정</span>  
                    </div>
                    <p class="font_13 mono_50" style="width:88%"> 
                        평가항목의 중요도에 따라 점수반영비율(가중치)을 설정할 수 있습니다. 평가 항목 비율 합산은 반드시 100%가 되어야 합니다.  
                    </p>

                    <slp-checkbox class="mb8 font_14 mt10" value="true">진도율</slp-checkbox>
                    <div class="inp-wrap">    
                        <slp-text-field></slp-text-field>
                        <span class="score">%</span>
                    </div>
                    
                    <slp-checkbox class="mb8 font_14 mt10">최종평가</slp-checkbox>
                    <div class="inp-wrap">    
                        <slp-text-field></slp-text-field>
                        <span class="score">%</span>
                    </div>

                    <p class="mt15 total">합계 <span class="fr total-num fwb"><span>100</span>%</span></p>

                    <p class="line01" style="margin-top:33px; margin-bottom:18px;"></p>

                    <p class="font_18 fwb" style="margin-bottom:27px;">기타설정</p>
                    <a href="#" class="btn sm w100p add" @click="addList1()" >설문 및 별점</a>  
                  </div>
                  <!-- //opacity -->

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">다음</button></li>
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
  name: 'Atorm_e-learning_criteria_2',
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
