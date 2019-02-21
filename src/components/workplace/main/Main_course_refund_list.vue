<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MainType">

        <!-- header -->
        <div id="header" class="fixed tab">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">사업주 환급과정</p>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="scrollTab">
                    <li><a href="#tab1">환급절차 및 기간</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">수료조건</a></li>
                    <li class="on"><a href="#tab3">사업주훈련 과정보기</a></li>
                </ul>
            </div>
            <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
        
          <div class="cell">
            <div class="inner">
                <div class="total">
                    <span>총 <strong>120</strong>건</span>
                    <span class="fr">최신강의순 <span class="ico down"></span></span>
                </div>
                <!-- list -->
                <ul class="thumList">
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li><span class="star ico"></span>4.5</li>
                                <li><span>40,000</span>원</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li><span class="star ico"></span>4.5</li>
                                <li><span>40,000</span>원</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li><span class="star ico"></span>4.5</li>
                                <li><span>40,000</span>원</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li><span class="star ico"></span>4.5</li>
                                <li><span>40,000</span>원</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="thum">
                                <div class="thumbnail">
                                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <ul class="info">
                                <li><span class="star ico"></span>4.5</li>
                                <li><span>40,000</span>원</li>
                            </ul>
                            <div class="tagWrap"><span>교재</span></div>
                        </div>
                    </li>
                </ul>
                <!-- //list -->
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
  name: 'Main_course_refund_list',
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
