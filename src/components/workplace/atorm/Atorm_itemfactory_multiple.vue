<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">선다형 퀴즈</p><button type="button" class="btn16 color_clr2">저장</button>
            </div>
            <!-- //header -->

            <div id="content" class="normal">

                <div class="cell">
                    <div class="inner">  
                        <!-- list -->
                        <ul class="singleList type1">
                            <li class="mb20">
                                <p class="label-tit14 bbB89 pb10 mb10">난이도</p>
                                <ul class="w80List">
                                    <li>
                                        <slp-radio name="difficulty" innerCircle="true"><span class="mono_100">상</span></slp-radio>
                                    </li>
                                    <li>
                                        <slp-radio name="difficulty" innerCircle="true"><span class="mono_100">중</span></slp-radio>
                                    </li>
                                    <li>
                                        <slp-radio name="difficulty" innerCircle="true"><span class="mono_100">하</span></slp-radio>
                                    </li>
                                </ul>
                            </li>
                            <li class="mb20">
                                <p class="label-tit14">질문 <span class="tit_essential"></span></p>
                                <slp-text-field placeholder="질문을 입력하세요" class="mt6"></slp-text-field>
                                <p class="hr mb0"></p>
                            </li>
                            <li class="mb20">
                                <p class="label-tit14">답안 <span class="tit_essential"></span></p>
                                <p class="tit_desc font_13 mono_50">답안 등록 후 정답을 선택해주세요. (정답은 1개 이상 선택 가능) </p> 
                                <slp-checkbox class="mt14 w100p">
                                    <slp-text-field placeholder="답안을 입력하세요"></slp-text-field>
                                </slp-checkbox>
                                
                                <slp-checkbox class="mt8">
                                    <slp-text-field placeholder="답안을 입력하세요"></slp-text-field>
                                </slp-checkbox>
                                
                                <slp-button class="sm add w100p mt8" @click="addList1()" ><span class="ico"></span>답안 추가</slp-button>
                                <p class="hr mb0"></p> 
                            </li>
                            <li class="mb20">
                                <p class="label-tit14">정답해설</p>
                                <slp-text-field placeholder="정답 해설을 입력하세요" class="mt6"></slp-text-field>
                            </li>
                        </ul>             
                        <!-- //list -->        
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
  name: 'Atorm_itemfactory_multiple',
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
