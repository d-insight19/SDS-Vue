<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_simulation">
            <!-- header -->
            <div id="header">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <div class="page-btn">
                    <span class="ico back"></span>
                    <div class="num"><span>03</span> / <span>36</span></div>
                    <span class="ico next"></span>
                </div>
            </div>
            <!-- //header -->
            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner" style="padding-top:14px;">
                        <span class="chip">시뮬레이션</span>
                        <p class="txt-tit">
                        시뮬레이션 타이틀 영역입니다 시뮬레이션 타이틀 영역입니다
                        </p>
                        <p class="txt-desc">
                        설명 입니다. 설명 입니다. 설명 입니다. Admin에서 등록된 내용 출력 (선택사항) 설명 입니다. 설명 입니다. 설명 입니다. Admin에서 등록된 내용 출력 (선택사항) 설명 입니다. 설명 입니다. 설명 입니다.
                        </p>
                        <p class="line01"></p>
                        <p class="empty_img">
                            <img src="" alt="">
                        </p>
                        <p class="h-tit5">1. 다음중 OO에 해당하는것을 고르세요.</p>
                        <p class="inner-txt" >본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다  본문 텍스트입니다                        
                        </p>
                        <ul class="ul-block com-rdo">
                            <li >
                                <label class="labelRdo" @click="activate(1)">
                                    <input type="radio" class="rdo" name="test-rdo" checked>
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"  :class="{ color_clr2 : active_el == 1 }" >스타벅스</span>                    
                                </label>
                            </li>
                            <li  >
                                <label class="labelRdo" @click="activate(2)">
                                    <input type="radio" class="rdo" name="test-rdo" >
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" :class="{ color_clr2 : active_el == 2 }" >탐앤탐스</span>                    
                                </label>
                            </li>
                            <li  >
                                <label class="labelRdo" @click="activate(3)">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" :class="{ color_clr2 : active_el == 3 }" >이디야</span>                    
                                </label>
                            </li>
                            <li >
                                <label  class="labelRdo" @click="activate(4)">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label"  :class="{ color_clr2 : active_el == 4 }">할리스</span>                    
                                </label>
                            </li>
                        </ul>      
                    </div>
                </div>
            </div>

            <!-- floatingbtn -->
            <div class="absBtmBtn">  
                <button type="button" class="btn md clr1">제출</button>
            </div>
            <!-- //floatingbtn -->

        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Study_04_SO_simulation',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      active_el: 1
    }
  },
  methods: {
    activate: function (el) {
      this.active_el = el
    }
  }
}
</script>
