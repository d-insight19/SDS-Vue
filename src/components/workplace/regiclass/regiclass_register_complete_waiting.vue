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
                <h2 class="h-tit2 fwb mb10" style="width:52.5%">대기신청이 완료되었습니다.</h2>
                <p class="txt-tit color_clr1 fwb">현재 정원 외 대기상태입니다.</p>
                <p class="txt-tit-2 mono_80">신청자 중 취소자가 발생하면 순차적으로 신청이 가능합니다. ‘나의 공간’ 메뉴에서 신청상태를 확인하실 수 있습니다.</p>
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
            <p class="hr" style="margin-top:26px; margin-bottom:22px;"></p>
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
                        <dl class="info">
                            <li class="color_clr3">이러닝</li>
                        </dl>
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
                        <dl class="info">
                            <li class="color_clr3">이러닝</li>
                        </dl>
                        <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                    </div>
                </li>
            </ul>
            </div>
          </div>
        </div>

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><slp-button class="md clr1">나의공간</slp-button></li>
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
