<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery findcenter pd70">
            <!-- header -->
            <div id="header">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18"></p>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">

                        <h1 class="h-tit1">이메일로 찾기</h1>
                        <!-- list -->
                        <ul class="ulList type2">
                            <li>
                                <strong class="label-tit">성명</strong>
                                <slp-text-field placeholder="성명을 입력하세요"></slp-text-field>
                            </li>
                            <li>
                                <strong class="label-tit">이메일</strong>
                                <slp-text-field placeholder="이메일을 입력하세요"></slp-text-field>
                            </li>
                        </ul>
                        <!-- //list -->

                        <ul class="ulList type3">
                            <li>
                                <strong class="label-tit">최근 접속한 연수원</strong>
                                <a href="#">삼성SDS<span class="ico gray_next"></span></a>
                            </li>
                            <li>
                                <a href="#">삼성생명<span class="ico gray_next"></span></a>
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
                        <button type="button" class="btn ld clr1">다음</button>
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
export default {
  name: 'Login_findcenter_email',
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
