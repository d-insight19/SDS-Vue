<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_status">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18">과제</p>
            </div>
            <!-- //header -->
            
            <div id="content" class="etc">
                <div class="cell">
                  <div class="inner">
                    <div class="titTxtWrap">
                      <p class="line01">총 <strong><span>2</span>건</strong></p>
                    </div>
                    <div class="date_wrap">
                        <div class="title_line noline mt20">
                            <span class="title_txt">중간과제</span>  
                            <div class="in-chk fr"><label class="labelChk2"><input id="" type="checkbox" name="" class="chk"><span class="label">제출내역확인</span></label></div>
                        </div>
                        <div class="type_box">
                            <div class="info type1">
                              <span class="ico mark_line_32"></span>
                              <span class="tit">제출</span>
                            </div>
                            <ul>
                              <li>제출파일</li>
                              <li><span>2</span>건</li>
                            </ul>
                            <ul class="line">
                              <li>점수/만점</li>
                              <li><span class="fwb600">98/100</span>점</li>
                            </ul>
                        </div>
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
