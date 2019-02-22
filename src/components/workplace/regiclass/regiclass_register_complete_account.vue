<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass complete">

        <!-- header -->
        <div id="header" class="tab clr4">
            <div class="header_inner line1 pr18">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">라이센스 신청</p>
            </div>
            <div class="hide_header" style="padding-top: 78px; padding-bottom: 26px;">
                <h2 class="h-tit2 fwb" style="width:52.5%">수강신청이 완료되었습니다.</h2>
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
            
            <p class="label-tit-18">신청강좌</p>
            <ul class="thumList">
                <li class="bottom-bd-x pdb0">
                    <div class="in">
                        <a href="#" class="thum">                     
                            <div class="thumbnail">
                                <img class="thumnail" src="@/assets/img/itemfactory_url_img.jpg" alt="">
                            </div>
                        </a>
                        <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                        <a href="#" class="date">18.12.01 ~ 19.05.31</a>
                        <ul class="info">
                            <li class="fwb info-num">2,235,000원 </li>
                            <li class="info-txt">(VAT포함)</li>
                        </ul>
                    </div>
                </li>
            </ul> 
            <p class="hr_2" style="margin-top:26px; margin-bottom:20px;"></p>
            <p class="label-tit-18">결제정보</p>
                <ul>
                    <li style="margin-bottom:7px;">
                        <span class="label-tit-14 type1 mb0">수강금액</span>
                        <span class="label-tit-15 type1 fr">2,235,000 원</span>
                    </li>
                    <li style="margin-bottom:7px;">
                        <span class="ico indent n-ml18"></span>
                        <span class="label-tit-14 type1 mono_50 mb0">공급가</span>
                        <span class="label-tit-15 type1 mono_50 fr">1,110,000 원</span>
                    </li>
                    <li style="margin-bottom:11px;">
                        <span class="ico indent n-ml18"></span>
                        <span class="label-tit-14 type1 mono_50 mb0">부가세</span>
                        <span class="label-tit-15 type1 mono_50 fr">1,000,000 원</span>
                    </li>
                    <li style="margin-bottom:11px;">
                        <span class="label-tit-14 type1 mb0">할인금액</span>
                        <span class="label-tit-15 type1 fr">2,235,000 원</span>
                    </li>
                    <li class="color_clr1" style="border-top:1px solid rgba(0,0,0,0.65); padding-top:11px;">
                        <span class="label-tit-15 type1 fwb"> 결제 금액</span>
                        <span class="fr fwb600 label-tit-18">2,135,000 원</span>
                    </li>
                </ul>
            <p class="hr_2" style="margin-top:26px; margin-bottom:22px;"></p>
            <p class="label-tit-18">입금 계좌번호</p>
                <table>
                    <tr>
                        <td class="l-txt">국민은행</td>
                        <td class="r-txt">123-2345-3346</td>
                    </tr>
                    <tr>
                        <td class="l-txt">KEB 하나은행</td>
                        <td class="r-txt">123-2345-3346</td>
                    </tr>
                    <tr>
                        <td class="l-txt">기업은행</td>
                        <td class="r-txt">123-2345-3346</td>
                    </tr>
                    <tr>
                        <td class="l-txt pdb0">우리은행</td>
                        <td class="r-txt pdb0">123-2345-3346</td>
                    </tr>
                </table>
            <p class="hr_2" style="margin-top:26px; margin-bottom:22px;"></p>
            <p class="label-tit-18">연관과정</p>
            <ul class="thumList">
                <li>
                    <div class="in">
                        <a href="#" class="thum">
                            <div class="thumbnail">
                                <img class="thumnail" src="@/assets/img/itemfactory_url_img.jpg" alt="">
                            </div>
                        </a>
                        <a href="#" class="tit fwr">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                        <ul class="info">
                            <li class="color_clr3">이러닝</li>
                        </ul>
                        <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                    </div>
                </li>
                <li>
                    <div class="in">
                        <a href="#" class="thum">
                            <div class="thumbnail">
                                <img class="thumnail" src="@/assets/img/itemfactory_url_img.jpg" alt="">
                            </div>
                            <div class="tagWrap"></div>
                        </a>

                        <a href="#" class="tit fwr">기초부터 예제까지 iOS 개발자를 위한 업무에 바로 쓰는 스플...</a>
                        <ul class="info">
                            <li class="color_clr3">이러닝</li>
                        </ul>
                        <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                    </div>
                </li>
            </ul>
            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn zin1">
            <ul>
                <li><slp-button class="md">나의공간</slp-button></li>
                <li><slp-button class="md clr1">학습시작</slp-button></li>
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
  name: 'regiclass_register_complete',
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
