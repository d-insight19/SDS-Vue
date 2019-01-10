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
                <div class="page-btn">
                    <span class="ico back"></span>
                    <div class="num "><span>1</span>/<span>04</span></div>
                    <span class="ico next"></span>
                </div>
                <p class="header_text font_19">스크롤시  header 에 fixed 클래스 추가</p>
            </div>  
            <div class="hide_header" style=" padding-top:76px; padding-bottom:40px">                
                <div class="hide-inner">                        
                    <div class="book-wrap fl"><img style="width:106px;height:159px;" src="@/assets/img/thum_no_s.jpg" class="thumImg" alt=""></div>
                    <table class="book-tb">
                        <tr>
                            <td colspan="2" class="book-tit">기적을 만든 돈키호테의 열 가지 키워드</td>
                        </tr>
                        <tr>
                            <td>저자</td>
                            <td>김태일</td>
                        </tr>
                        <tr>
                            <td>출판사</td>
                            <td>웅진 지식하우스</td>
                        </tr>
                        <tr>
                            <td>출판일</td>
                            <td>2013.02</td>
                        </tr>
                        <tr>
                            <td>가격</td>
                            <td>15,000원</td>
                        </tr>
                        <tr>
                            <td>페이지</td>
                            <td>386page</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner" style="padding-top:22px;">
                <p class="label-tit-16 mb14">도서소개</p>
                <p class="label-tit-15 mb14" style="width:51.5%;">정부가 빌리는 돈, 거두는 돈, 재정이 내 삶을 결정짓는다.</p>
                <p class="font_15 fwr mono_65 ">일본의 종합할인점 돈키호테의 창업주인 야스다 다카오. 그는 실직 이후 마작과 막노동으로 지내다 29세에 저렴한 물건을 받아다가 대충 팔아보겠다는 마음으로 ‘도둑시장’이라는 점포를 냈다. 그 후 1989년에 ‘돈키호테’를 창업하여 27년 연속 매출과 수익이 증가하는 위업을 달성해오고 있다. 기적과도 같은 성장을 이뤄낸 돈키호테의 비결을 열 가지로 정리하면 다음과 같다. 호테’를 창업하여 27년 연속 매출과 수익이 증가하는 위업을 달성해오고 있다. 기적과도 같은 성장을 이뤄낸 돈키호테의 비결을 열 가지로 정리하면 다음과 같다.  </p>
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
