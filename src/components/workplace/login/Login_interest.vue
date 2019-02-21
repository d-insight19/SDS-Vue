<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery interest pd70">

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">

                        <!-- title txt -->
                        <div class="titTxtWrap">
                            <strong class="txt-tit">관심사를<br>선택해주세요</strong>
                            <p class="txt-desc">관심사와 관련있는 맞춤 정보를 받으실 수 있습니다.</p>
                        </div>
                        <!-- //title txt -->

                        <!-- list -->
                        <ul class="ulList type1">
                            <li>
                                <strong class="label-tit">관심 분야</strong>
                                <div class="in-chk" >
                                    <slp-checkbox v-for="option in options" :key="option" type="button">{{option.value}}</slp-checkbox>
                                </div>
                            </li>
                            <li>
                                <strong class="label-tit">선호 과정</strong>
                                <div class="in-chk">
                                    <slp-checkbox v-for="option in options2" :key="option" type="button">{{option.value}}</slp-checkbox>
                                </div>
                            </li>
                            <li>
                                <strong class="label-tit">선호 강의</strong>
                                <div class="in-chk">
                                    <slp-checkbox v-for="option in options3" :key="option" type="button">{{option.value}}</slp-checkbox>
                                </div>
                            </li>
                        </ul>
                        <!-- //list -->


                    </div>
                </div>
            </div>

            <!-- fixed Bottom Btn -->
            <div class="fixBtmBtn">
                <ul>
                    <li>
                        <button type="button"  class="btn ld" style="display:none;">다음</button>
                        <!-- 하단에 활성화 된 버튼은 임시로 display:none :class="[checkedNames.length && checkedNames2.length && checkedNames3.length > 0 ? activeClass : '']" -->
                        <button type="button" class="btn ld clr1" >다음</button>
                    </li>
                </ul>
            </div>
            <!-- //fixed Bottom Btn -->



        </div>
        <!-- //container -->

    </div>
    <!-- //wrap -->

</template>

<script>
/* eslint-disable */
export default {

  name: 'Login_interest',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
        activeClass: 'clr1',
        checkedNames: [],
        options: [
            { value: '경영 / 리더십'},
            { value: '금융'},
            { value: '직무 / 자격'},
            { value: 'OPIC / 외국어'},
            { value: '인문 / 교양 / 시사'}
        ],
        checkedNames2: [],
        options2: [
            { value: '이러닝'},
            { value: '집합'},
            { value: '지식'}
        ],
        checkedNames3: [],
        options3: [
            { value: 'Instructor-led'},
            { value: 'Self-paced with labs'},
            { value: 'Self-paced'}
        ]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
