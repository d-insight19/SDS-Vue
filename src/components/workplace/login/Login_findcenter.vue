<template>
    <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap">
        <div class="trainIntro">

            <div class="select_language_wrap" style="z-index: 10;">
                <div id="dropdown_wrap" v-show="langFlag" >
                    <div id="sheetDim" @click="changeLang()"></div>
                    <div id="dropdown" style="top: 25px;right: 0;">            
                    <ul  @click="changeLang()">
                        <!-- 
                        position 이 변경되어야 한다면 option 처리 로 top , left or right 값 필요 혹은, css로 특정 페이지에서 직접 css로 입력             
                        -->
                        <li>한국어</li>
                        <li>중국어</li>
                        <li>베트남어</li>
                    </ul>
                    </div>
                </div>
                <div class="inner_wrap"  @click="changeLang()">
                    <span class="language_icon"></span>
                    <span class="select_language">한국어</span>
                    <span class="dropdown_arrow"></span>
                </div>

            </div>

            <div class="txtWrap">
                연수원 찾기<br>방법을<br>선택해주세요.
            </div>

            <ul class="btmBtn">
                <li><button type="button" class="btn">이메일로 찾기<span class="ico gray_next"></span></button></li>
                <li><button type="button" class="btn">연수원 URL로 찾기<span class="ico gray_next"></span></button></li>
            </ul>
        </div>
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_findcenter',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      langFlag: false
    }
  },
  /* vue function */
  methods: {
    changeLang () {
      this.langFlag = !this.langFlag
    }
  }
}
</script>
