<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery findid pd70">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18"></p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                <h1 class="h-tit1 mb24">생년월일/성별로 찾기</h1>

                <!-- list -->
                <ul class="ulList type1">
                    <li>
                        <strong class="label-tit">이름</strong>
                        <input type="text" class="input" placeholder="이름 입력">
                    </li>
                    <li>
                        <strong class="label-tit">생년월일</strong>
                        <div class="birthInt">
                            <select class="select">
                                <option>년도</option>
                            </select>
                            <select class="select">
                                <option>월</option>
                            </select>
                            <select class="select">
                                <option>일</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <strong class="label-tit">성별</strong>
                        <div class="rdoSelBox">
                            <label class="labelRdo"><input type="radio" class="rdo" name="gender-rdo"><span class="ico"></span><span class="label">남자</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="gender-rdo"><span class="ico"></span><span class="label">여자</span></label>
                        </div>
                    </li>
                </ul>
                <!-- // list -->
            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md clr1">확인</button></li>
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
  name: 'Login_findidbirth',
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
