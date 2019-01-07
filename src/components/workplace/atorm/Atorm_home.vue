<template>
    <div>
        <p class="tit1">
            HOME
            <span class="manual_btn clr2">
                <span class="ico down-load-wh"></span>
                매뉴얼
            </span>
        </p>

        <div class="type_box">
            <div class="info type2">
            <p class="tit">전체과정수</p>
            <p><span class="value">1,245</span></p>
            </div>
            <dl>
            <dt>운영중 과정</dt> <dd>100</dd>
            </dl>
            <dl>
            <dt>학습중인 학습자</dt><dd>400</dd>
            </dl>
            <dl>
            <dt>제작자</dt><dd>1,120</dd>
            </dl>
        </div>

        <p class="tit2 mt40">
            승인요청<span class="num color_clr2">6</span>
            <span class="fr color_clr2 showall">전체보기</span>
        </p>
        <ul class="multiList">
            <li v-for="(item, index) in 6" :key="index">
                <div class="in">
                    <div class="multiline line1">마케팅 관련 상시 보고서 양식, 중간 범위 확인 요망</div>
                    <ul class="info">
                        <li class="fwb color_clr3">이러닝</li>
                        <li>K12113</li>
                        <li>정해민</li>
                        <li>2018.10.10</li>
                    </ul>
                </div>
            </li>
        </ul>

        <p class="tit2 mt40">제작중인 과정
            <span class="num color_clr2">2</span>
            <span class="fr color_clr2 showall">전체보기</span>
        </p>
        <ul class="thumList">
            <li v-for="(item, index) in 4" :key="index">
                <div class="in">
                    <a href="#" class="thum">
                        <span class="label">정규</span>
                        <div class="thumbnail">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                    </a>
                    <a href="#" class="tit">사람과 세상을 바꾼 공동체지도 이야기</a>
                    <ul class="info">
                        <li class="color_clr3 fwb">이러닝</li>
                        <li>K12113</li>
                        <li>2018.10.10</li>
                    </ul>
                    <div class="cur_state">승인요청중</div>
                </div>
            </li>
        </ul>
        <!-- //list -->

        <p class="tit2 mt40">운영중인 과정
            <span class="num color_clr2">2</span>
            <span class="fr color_clr2 showall">전체보기</span>
        </p>

        <ul class="multiList">
            <li v-for="(item, index) in 2" :key="index">
                <div class="in">
                    <div class="multiline line1">마케팅 관련 상시 보고서 양식, 중간 범위 확인 요망</div>
                    <ul class="info">
                        <li class="fwb color_clr3">이러닝</li>
                        <li>공유 10회</li>
                        <li><span class="star ico"></span>4.5</li>
                        <li>후기 10개</li>
                    </ul>
                </div>
            </li>
        </ul>
   </div>
</template>

<script>
export default {
  name: 'Atorm_home',
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
