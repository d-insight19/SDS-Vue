<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery studystatus">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18">과제</p>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                  <div class="inner">
                    <div class="titTxtWrap">
                      <strong >총 <span>2</span></strong>
                      <p class="line01 mt6" style="border-bottom:1px solid #999999;"></p>
                    </div>
                    <div class="date_wrap">
                        <div class="title_line noline mt20">
                            <span class="title_txt">중간과제</span>
                            <div class="in-chk fr"><label class="labelChk2"><input id="" type="checkbox" name="" class="chk"><span class="label">제출내역확인</span></label></div>
                        </div>
                          <div class="type_box">
                              <div class="info type1">
                                <span class="ico mark_line_32" style="vertical-align: -6px;"></span>
                                <span class="font_24">제출</span>
                              </div>
                              <ul>
                                <li class="mono_80 font_13">제출파일</li>
                                <li class="mb8 "><span class="font_16 fwb600">2</span><span class="font_14">건</span></li>
                              </ul>
                              <ul class="line">
                                <li class="mt8 mono_80 font_13">점수/만점</li>
                                <li><span class="fwb600 font_16">98/100</span><span class="font_14">점</span></li>
                              </ul>
                          </div>
                        <div class="title_line noline mt20">
                          <span class="title_txt">최종과제</span>
                          <div class="in-chk fr"><label class="labelChk2"><input id="" type="checkbox" name="" class="chk"><span class="label">작성</span></label></div>
                        </div>
                          <div class="type_box">
                              <div class="info type1">
                                <span class="ico mark_line_32 non" style="vertical-align: -6px;"></span>
                                <span class="font_24">미제출</span>
                              </div>
                              <ul>
                                <li class="mono_80 font_13">제출파일</li>
                                <li class="mb8 "><span class="font_16 fwb600">2</span><span class="font_14">건</span></li>
                              </ul>
                              <ul class="line">
                                <li class="mt8 mono_80 font_13">점수/만점</li>
                                <li><span class="fwb600 font_16">98/100</span><span class="font_14">점</span></li>
                              </ul>
                          </div>
                        </div>

                        <div>
                          <button class="btn-md mr8">작성 관련 안내 사항</button>
                          <button class="btn-md">모사 답안 처리 규정</button>
                        </div>


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
  name: 'Study_02_studystatus_assignment',
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
