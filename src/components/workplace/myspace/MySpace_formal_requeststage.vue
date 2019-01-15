<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="fixed">
            <div class="header_inner line1">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_18">비용신청단계 조회</p>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">
          <div class="cell">
            <div class="inner">
                <ul class="formal_requeststage">
                    <li class="inactive">
                        <span class="state">1</span>
                        <p class="contents">정부지원금 신청 준비 중</p>
                    </li>
                    <li class="inactive">
                        <span class="state">2</span>
                        <p class="contents">정부지원금 신청 중 (한국산업인력공단)</p>
                    </li>
                    <li class="active">
                        <span class="state">3</span>
                        <p class="contents">정부지원금 처리 중 (훈련기관)</p>
                    </li>
                    <li>
                        <span class="state">4</span>
                        <p class="contents">정부지원금 사업주 지급 완료</p>
                    </li>
                </ul>
                <p class="hr mb0"></p>
            </div>
          </div>

          
          <div class="cell">
            <div class="inner">
                <ul class="multiList type2">
                    <li>
                        <div class="txt_wrap">
                            <p class="title">사명 / 사업장관리번호</p>
                            <p class="contents">멀티캠퍼스 / 10481531140</p>
                        </div>
                    </li>
                    <li>
                        <div class="txt_wrap">
                            <p class="title">정부지원금</p>
                            <p class="contents">117,150원</p>
                        </div>
                    </li>
                    <li>
                        <div class="txt_wrap">
                            <p class="title">입금예정 은행명, 계좌번호</p>
                            <p class="contents">우리은행, 0522412451123</p>
                        </div>
                    </li>
                </ul>
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
  name: 'MySpace_formal_requeststage',
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
