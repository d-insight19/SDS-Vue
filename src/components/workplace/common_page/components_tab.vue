<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="mainType colorCode2">

    <!-- container -->
    <div id="container">
      <div class="content">
        <!-- cBox -->
        <div class="cBox">
          <!-- tab -->
          <div class="tabWrap type2">
            <div  class="tabMenu">
              <ul>
                <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                <li><a href="#tab2">이미지투데이</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
              </ul>
            </div>

            <div class="tabCnt dpb" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
              <!-- list -->
              <ul class="ulList2">
                <li v-if="!boardList.length" class="no-date"><p><span class="ico"></span>작성된 게시글이 없습니다</p></li>
                <li v-for="item in boardList" :key="item.id"><a href="#"><span class="cate color_clr1">{{item.cate}}</span><p class="txt">{{item.title}}</p></a></li>
              </ul>
              <!-- //list -->
            </div>
          </div>
          <!-- //tab -->
        </div>
        <!-- //cBox -->


      </div>
    </div>
    <!-- //container -->
  </div>
  <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_tab',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      boardList: [
        {cate: '이벤트', title: '고현숙의 코칭 리더십-팀 성과 향상을 위한 코칭'},
        {cate: '안내', title: 'LEAP(Leadership Acceleration Program)'},
        {cate: '이벤트', title: '마켓 트레블러 황성욱의 트렌드 센싱'}
      ]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
