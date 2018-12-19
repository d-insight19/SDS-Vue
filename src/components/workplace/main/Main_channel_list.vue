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
                <p class="header_text font_18">Channel</p>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="scrollTab">
                    <li class="on"><a href="#tab1">Subscribed Channel</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">New Channel</a></li>
                    <li><a href="#tab3">Popular Channel</a></li>
                </ul>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">
        
          <div class="cell">
            <div class="inner">
                <div class="total noline">
                    <span>총 <strong>18</strong>건</span>
                </div>
                <!-- list -->
                <ul class="thumList type7">
                    <li>
                        <div class="in">
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li>게시물 10</li>
                                <li>구독 550</li>
                                <li><span class="line">P</span> 5</li>
                            </ul>
                        </div>
                        <div class="thum">
                            <div class="cDim04"></div>
                            <div class="cDim03"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li>게시물 10</li>
                                <li>구독 550</li>
                                <li><span class="line">P</span> 5</li>
                            </ul>
                        </div>
                        <div class="thum">
                            <div class="cDim04"></div>
                            <div class="cDim03"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li>게시물 10</li>
                                <li>구독 550</li>
                                <li><span class="line">P</span> 5</li>
                            </ul>
                        </div>
                        <div class="thum">
                            <div class="cDim04"></div>
                            <div class="cDim03"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li>게시물 10</li>
                                <li>구독 550</li>
                                <li><span class="line">P</span> 5</li>
                            </ul>
                        </div>
                        <div class="thum">
                            <div class="cDim04"></div>
                            <div class="cDim03"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="in">
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <a href="#" class="writer">홍길동</a>
                            <ul class="info">
                                <li>게시물 10</li>
                                <li>구독 550</li>
                                <li><span class="line">P</span> 5</li>
                            </ul>
                        </div>
                        <div class="thum">
                            <div class="cDim04"></div>
                            <div class="cDim03"></div>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                            </div>
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
  name: 'Main_channel_list',
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
