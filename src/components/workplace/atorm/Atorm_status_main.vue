<template>
    <div>
        <p class="tit1">
            과정운영관리
        </p>

        <p class="tit2">운영중인 과정
            <span class="num color_clr2" v-show="list2.length">{{list2.length}}</span>
            <span class="fr color_clr2 showall" v-show="list2.length">전체보기</span>
        </p>
        <ul class="thumList include_ico" v-show="list2.length">
            <li v-for="(item, index) in list2" :key="index">
                <div class="in">
                    <a href="#" class="thum">
                        <div class="thumbnail">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                    </a>
                    <a href="#" class="tit">사람과 세상을 바꾼 공동체지도 이야기</a>
                    <ul class="info">
                        <li class="color_clr3 fwb">이러닝</li>
                        <li>K12113</li>
                        <li><span class="star ico"></span>4.5</li>
                    </ul>
                    <span class="ico2 share"></span>
                </div>
                <div class="in_sub">
                  <ul>
                     <li>공유 <span class="num">8</span></li>
                     <li>조회 <span class="num">1,205</span></li>
                     <li>후기 <span class="num">8</span></li>
                  </ul>
                </div>
            </li>
        </ul>
        <!-- //list -->
        <div class="nolistWrap type2" v-show="!list2.length">
            <p class="info1">제작한 과정이 없습니다.</p>
            <p class="info2">당신의 지식을 동료들과 공유해보세요.</p>
            <span class="info_btn clr2">과정 만들기</span>
        </div>

   </div>
</template>

<script>
export default {
  name: 'Atorm_status_main',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      list2: [1, 2]
      // list2: []
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
