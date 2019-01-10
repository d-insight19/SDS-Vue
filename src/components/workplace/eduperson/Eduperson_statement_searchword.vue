<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery eduperson">

       <!-- header -->
        <div id="header" class="fixed" >
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18 visible"> 리더십 연관과정 </p>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                  <h2 class="h-tit2 fwb600 mb14">이러닝</h2>
                  <!-- list -->
                  <ul class="thumList">
                    <li v-for="item in leaningList" :key="item.index">
                        <div class="in">
                              <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                              </a>
                              <a href="#" class="tit">만화로 배우는 알기 쉬운 경영 기초전략</a>
                              <a href="#" class="date">2018.10.01 ~2018.10.31</a>
                              <ul class="info">
                                <li class="color_clr3 fwb">{{item.txt}}</li>
                                <li><span class="star ico"></span><span v-text="item.num"></span></li>
                                <li>수료율 81.51%</li>
                              </ul>
                        </div>
                    </li>
                  </ul>
                  <!-- //list -->
                  <p class="hr" style="margin: 15px -24px 22px;"></p>
                  <h2 class="h-tit2 fwb600 mb14">집합교육</h2>
                    <!-- list -->
                    <ul class="thumList">
                      <li v-for="item in setList" :key="item.index">
                          <div class="in">
                                <a href="#" class="thum">
                                  <div class="thumbnail">
                                      <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                  </div>
                                </a>
                                <a href="#" class="tit">만화로 배우는 알기 쉬운 경영 기초전략</a>
                                <a href="#" class="date">2018.10.01 ~2018.10.31</a>
                                <ul class="info">
                                  <li class="color_clr3 fwb">{{item.txt}}</li>
                                  <li><span class="star ico"></span><span v-text="item.num"></span></li>
                                  <li>수료율 81.51%</li>
                                </ul>
                          </div>
                      </li>
                    </ul>
                    <!-- //list -->
                  <p class="hr" style="margin: 15px -24px 22px;"></p>
                  <h2 class="h-tit2 fwb600 mb14">자율</h2>
                    <!-- list -->
                    <ul class="thumList">
                      <li v-for="item in autoList" :key="item.index">
                          <div class="in">
                                <a href="#" class="thum">
                                  <div class="thumbnail">
                                      <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                  </div>
                                </a>
                                <a href="#" class="tit">{{item.txt}}</a>
                          </div>
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
  name: 'Eduperson_statement_searchword',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      leaningList: [
        {txt: '이러닝', num: '4.5', index: 1},
        {txt: '이러닝', num: '4.5', index: 2},
        {txt: '이러닝', num: '4.5', index: 3},
        {txt: '이러닝', num: '4.5', index: 4},
        {txt: '이러닝', num: '4.5', index: 5}
      ],
      setList: [
        {txt: '집합교육', num: '4.5', index: 1},
        {txt: '집합교육', num: '4.5', index: 2},
        {txt: '집합교육', num: '4.5', index: 3},
        {txt: '집합교육', num: '4.5', index: 4},
        {txt: '집합교육', num: '4.5', index: 5}
      ],
      autoList: [
        {txt: 'The Complete App Design Course - UX, UI an…', index: 1},
        {txt: '업무에 바로 쓰는 경영경제 입문 과정', index: 2},
        {txt: '초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정', index: 3},
        {txt: '초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정', index: 4},
        {txt: '초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정', index: 5}
      ]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
