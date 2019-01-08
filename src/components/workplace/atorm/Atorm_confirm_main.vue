<template>
    <div>
        <p class="tit1">
            과정승인
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
            승인요청<span class="num color_clr2" v-show="list1.length">{{list1.length}}</span>
            <span class="fr color_clr2 showall" v-show="list1.length">전체보기</span>
        </p>
        <ul class="multiList" v-show="list1.length">
            <li v-for="(item, index) in list1" :key="index">
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
        <div class="nolistWrap type1" v-show="!list1.length">
            <p class="info"><span class="ico mark_line"></span>승인요청된 과정이 없습니다.</p>
        </div>

   </div>
</template>

<script>
export default {
  name: 'Atorm_confirm_main',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      list1: [1, 2, 3, 4, 5, 6]

    //   list1: [],
    //   list2: [],
    //   list3: []
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
