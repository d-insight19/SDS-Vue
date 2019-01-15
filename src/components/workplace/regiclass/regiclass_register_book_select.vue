<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery regiclass basicinfo book ">
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">참고도서 선택</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc" >
                <div class="cell">
                    <div class="inner">
                        <p class="label-tit-18 fwb600">1개월차</p>
                        <ul class="ulList type1" style="margin-bottom:40px; border-top:1px solid #999;">
                            <li class="mt15">
                                <label class="labelRdo multi">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">새로운 나를 만나는 셀프 리더십</span>
                                    <p class="sub_label">삼성출판사,이인창</p>
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo multi">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">이더리움을 활용한 블록체인 프로젝트 구축 : 쉽게 접하는 블록체인 개발 프로세스</span>
                                    <p class="sub_label">삼성출판사,이인창</p>
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo multi">
                                    <input type="radio" class="rdo" name="test-rdo">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">새로운 나를 만나는 셀프 리더십</span>
                                    <p class="sub_label">삼성출판사,이인창</p>
                                </label>
                            </li>
                        </ul>
                        <p class="label-tit-18 fwb600">2개월차</p>
                        <ul class="ulList type1" style="border-top:1px solid #999;">
                            <li class="mt15">
                                <label class="labelRdo multi">
                                    <input type="radio" class="rdo" name="test-rdo2">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">새로운 나를 만나는 셀프 리더십</span>
                                    <p class="sub_label">삼성출판사,이인창</p>
                                </label>
                            </li>
                            <li>
                                <label class="labelRdo multi">
                                    <input type="radio" class="rdo" name="test-rdo2">
                                    <span class="ico">
                                        <span class="innerCircle"></span>
                                    </span>
                                    <span class="label">새로운 나를 만나는 셀프 리더십</span>
                                    <p class="sub_label">삼성출판사,이인창</p>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- //contents -->

            <!-- floating button -->
            <div class="fixBtmBtn">
                <ul>
                    <li><button type="button" class="btn md">취소</button></li>
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
  name: 'Study_05_etc_captcha',
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
