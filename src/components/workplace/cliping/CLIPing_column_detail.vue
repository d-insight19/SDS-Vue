<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery CLIPingType">

        <!-- header -->
        <div id="header" class="tab clr4">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <button type="button" class="btn only share"><span class="ico">공유하기</span></button>
                <p class="header_text font_18">기적을 만든 돈키호테의 열 가지 키워드</p>
            </div>
            <div class="hide_header" style="padding-top: 74px; height:308px; padding-left:172px">
                <div class="tagWrap mb5"><span>서평칼럼</span></div>
                <h3 class="h-tit3 fwb600 multiline line2 mb5">기적을 만든 돈키호테의 열 가지 키워드</h3>
                <dl>
                    <dt>도서명</dt>
                    <dd>돈키호테 CEO</dd>
                </dl>
                <dl class="mb10">
                    <dt>등록일 </dt>
                    <dd>2017.04.03</dd>
                </dl>
                <ul class="info mb20">
                    <li class="icon mono_80 font_13">
                        <span class="view ico"></span> <span class="info_value">2,190</span>
                    </li>
                    <li class="icon mono_80 font_13">
                        <span class="like ico"></span> <span class="info_value">36</span>
                    </li>
                </ul>
                <div class="book">
                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                </div>
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
        
          
          
          <div class="cell">
            <div class="inner">
                <p class="font_16 fwb600 mb15">도서소개</p>
                <p class="font_15 fwr mono_65 mb20">일본의 종합할인점 돈키호테의 창업주인 야스다 다카
오. 그는 실직 이후 마작과 막노동으로 지내다 29세에 
저렴한 물건을 받아다가 대충 팔아보겠다는 마음으로 
‘도둑시장’이라는 점포를 냈다. 그 후 1989년에 ‘돈키
호테’를 창업하여 27년 연속 매출과 수익이 증가하는 
위업을 달성해오고 있다. 기적과도 같은 성장을 이뤄낸 
돈키호테의 비결을 열 가지로 정리하면 다음과 같다. </p>

                <p class="font_15 fwb mb10">권한 위양과 주권재현</p>
                <p class="font_15 fwr mono_65 mb20">현대 소매업의 왕도로 불리는 프랜차이즈 시스템은 본
부에 정보와 권한을 집중시켜 점포 운영의 표준화 및 
효율화를 도모하는 시스템이다. 그러나 돈키호테의 방
법은 이와 정반대다. 주권재현(主權在現), 즉 ‘주권은 
현장에 있다’는 슬로건 아래 상품 구매부터 가격 설정, 
매장 구성까지 모든 권한을 현장에 일임한다. 각 매장 
담당자는 스스로의 판단에 따라 상품을 구매할 전적인 
권한과 재량권을 갖는다. </p>
            </div>
          </div>

        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><slp-button class="md mono_65"><span class="ico like_solid_32"></span>좋아요</slp-button></li>
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
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
