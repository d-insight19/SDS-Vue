<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery courseware surveydo ">

            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico"></span></button>
                <p class="header_text font_18">설문</p>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        <p class="label-tit-18 mb10">설문 진행 후 <br/>학습을 진행할 수 있습니다.</p>

                        <p class="inner-txt">아래 문항에 대해 답변해주세요.</p>        

                        <p class="line01" style="margin:26px 0;"></p>

                        <p class="inner-txt fwb mb26"  style="color:rgba(0,0,0,1)">다음 중 OO에 해당하는 것을 고르세요.</p>
                        
                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[0]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">매우 아니다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[1]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">아니다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[2]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">보통이다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[3]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">그렇다.</span>                    
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[4]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">매우 그렇다.</span>                    
                                </label>
                            </li>
                        </ul>
                    </div>
                    <!-- //inner -->
                </div>  
            </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md" :class="{clr1: rdo}">제출</button>
            </div>
            <!-- //floatingbtn -->
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Study_02_studyquestion_detail_02',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1,
      rdo: undefined,
      rdos: [1, 2, 3, 4, 5]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
