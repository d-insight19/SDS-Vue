<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm flip ">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">레포트</p><button type="button" class="btn16 color_clr2">저장</button>
            </div>
            <!-- //header -->

            <div id="content" class="etc">

                <div class="cell">
                    <div class="inner">  
                        <!-- list -->
                        <ul class="singleList type1">
                            <li class="mb20">
                                <p class="label-tit14 mb6">합격기준</p>
                                <ul>
                                    <li style="height:44px; line-height:44px">                                    
                                        <slp-radio name="difficulty" innerCircle="true"><span class="mono_100">점수</span></slp-radio>
                                        <!--<slp-text-field class="fr" value="70 점" style="width:70%; min-width:208px"></slp-text-field>-->

                                        <div class="inp-wrap fr" style="width:70%;">    
                                            <slp-text-field class="tar"></slp-text-field>
                                            <span class="score mono_65 pdl4">70 점</span>
                                        </div>

                                    </li>
                                    <li class="pt8">
                                        <slp-radio name="difficulty" innerCircle="true"><span class="mono_100">Pass / Fail</span></slp-radio>
                                    </li>                                   
                                </ul>
                            </li>                           
                            <li class="mb20">
                                <p class="label-tit14">제목</p>
                                <slp-text-field placeholder="제목을 입력하세요" class="mt6" ></slp-text-field>
                            </li>
                            <li class="mb20">
                                <p class="label-tit14">내용</p>
                                <slp-text-field placeholder="내용을 입력하세요" class="mt6" ></slp-text-field>
                            </li>
                            <li class="mb20">
                                <p class="label-tit14">작성가이드</p>
                                <slp-text-field placeholder="작성가이드를 입력하세요" class="mt6" ></slp-text-field>
                            </li>
                            <li class="mb20">     
                                <p class="hr" style="margin:26px -24px 22px"></p> 
                                <p class="label-tit14">첨부파일</p>
                                <slp-button class="sm add w100p mt8" @click="addList1()" ><span class="ico"></span>파일 추가</slp-button>
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
  name: 'Atorm_e-learning_shortanswerpopup',
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
