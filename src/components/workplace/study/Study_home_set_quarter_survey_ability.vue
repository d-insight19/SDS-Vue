<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery courseware surveydo ">

            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico"></span></button>
                <p class="header_text font_18">진단 (역량/점수)</p>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        <p class="label-tit-18 mb10">역량진단 진행 후<br/>학습을 진행할 수 있습니다.</p>

                        <p class="inner-txt">아래 문항에 대해 답변해 주세요. 본 진단은 1~5점까지 점수를 부여 합니다.</p>

                        <p class="line01" style="margin:26px 0;"></p>

                        <p class="inner-txt fwb mb26"  style="color:rgba(0,0,0,1)">1. 나는 OO하는 것을 좋아한다.</p>

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

                        <p class="hr" style="margin-top:31px; margin-bottom:26px;"></p>

                        <p class="inner-txt fwb mb26"  style="color:rgba(0,0,0,1)">2. 나는 OO하는 것을 좋아한다.</p>

                        <ul class="ul-block com-rdo">
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo2" :value="rdos2[0]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">매우 아니다.</span>
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo2" :value="rdos2[1]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">아니다.</span>
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo2" :value="rdos2[2]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">보통이다.</span>
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo2" :value="rdos2[3]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">그렇다.</span>
                                </label>
                            </li>
                            <li>
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo2" :value="rdos2[4]">
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
                <button type="button" class="btn md" :class="{clr1: rdo && rdo2}">제출</button>
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
      rdos: [1, 2, 3, 4, 5],
      rdo2: undefined,
      rdos2: [1, 2, 3, 4, 5]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
