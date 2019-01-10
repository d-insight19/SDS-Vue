<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery Regiclass">

        <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div v-if="headerType == '1'" id="header" class="expand tab clr4">          
            <div class="header_inner line1">
                <button type="button" class="btn only close"><span class="ico">이전</span></button>
                <p class="header_text font_19">스크롤시  header 에 fixed 클래스 추가</p>
            </div>  
            <div class="hide_header" style=" padding-top:76px; padding-bottom:26px">                
                <div class="hide-inner">                        
                    <p class="h-tit1 mt0">라이센스 신청</p>
                    <p class="h-tit5 sm " style="width:67%; padding-top:6px;">
                        <span>본 과정은 제휴사 라이센스 신청 후 학습 가능합니다.</span>
                    </p>
                </div>
            </div>
        </div>

        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <p class="font_15 fwr mono_65 mb20">본 과정은 라이센스 신청 후 학습이 가능하며, 유효기간 동안 제휴사의 모든 콘텐츠 학습이 가능합니다. 장기간 미 활용시 회수 될 수 있으며, 차기 신청에 제한이 있을 수 있습니다.<br/> 본 과정은 해외 콘텐츠사 과정으로, 해외 콘텐츠사에서 제공되는 모든 과정은 글로벌 언어로 제작하였으니,학습에 참고하시기 바랍니다. </p>
                <p class="label-tit-16 mb10 mt36">라이센스를 신청 하시겠습니까?</p>
                <p class="line01 mb18"></p>
                <table>
                    <tr>
                        <td class="l-txt">과정명</td>
                        <td class="r-txt">변화와 성과를 이끄는 프레젠테이션</td>
                    </tr>
                    <tr>
                        <td class="l-txt">제휴사</td>
                        <td class="r-txt color_clr2">Skillsoft</td>
                    </tr>
                    <tr>
                        <td class="l-txt">유효기간</td>
                        <td class="r-txt">2018.11.10 ~ 2018.11.30</td>
                    </tr>
                </table>
            </div>
          </div>

        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><slp-button class="btn md ">취소</slp-button></li>
                <li><slp-button class="btn md clr1">신청</slp-button></li>
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
  name: 'CLIPing_column_detail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
