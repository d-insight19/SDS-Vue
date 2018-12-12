<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">
        
        <!-- 
          1. 확장형 헤더 의 유무는  <div class="hide_header"></div> 통해 확장 시킴
          2. 텝의 유무는  <div class="header_inner line2 tabMenu"> <ul class="fixTab"></ul> </div>
          3. 스크롤 텝의 경우  <div class="header_inner line2 tabMenu scroll-x"> <ul class="scrollTab"></ul> </div>
          
          ** 확장형 헤더의 경우 fixed 되었을 경우 58px로 고정되지만,  Tab이 같이 있는 경우는 100px 로 고정 **      
          ** 확장형이 아닌 처음부터 고정일 경우엔 <div id="header"> 에  fixed 클래스를 추가해놓으면 됨 **     
        -->

        <!-- 
          window.onscroll = function() {myFunction()}
          var header = document.getElementById('header')
          var sticky = header.offsetTop;
          function myFunction() {
            if (window.pageYOffset > 0) {
              header.classList.add('fixed')
            } else {
              header.classList.remove('fixed')
            }
          }

        -->

         <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div v-if="headerType == '1'" id="header" class="expand">          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
          </div>  
          <div class="hide_header" style="background:#e3e3e3;padding-top:100px;">
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
          </div>
        </div>
        <!-- //header -->


        <!-- header + 확장형 + tab  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div v-if="headerType == '2'" id="header" class="tab">          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
          </div>  
          <div class="header_inner line2 tabMenu">
              <ul class="fixTab">
                <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                <li><a href="#tab2">이미지투데이</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
              </ul>
          </div>  
          <div class="hide_header" style="background:#e3e3e3;padding-top:100px;">
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
          </div>
        </div>
        <!-- //header -->

        
        <!-- header scroll 헤더  작업중-->
        <div v-if="headerType == '3'" id="header" class="tab">
          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
          </div>            
          <div class="header_inner line2 tabMenu scroll-x">
              <ul class="scrollTab">
                <li class="on"><a href="#tab1">동영상재테크</a></li><!-- selected class "on" -->
                <li><a href="#tab2">이미지투데이</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
                <li><a href="#tab3">인문학이야기</a></li>
              </ul>
          </div>     
          <div class="hide_header" style="background:#e3e3e3;padding-top:100px;">
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
          </div>     
        </div>
        <!-- //header -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">


              <p> 메인 포틀릿 </p>
            <ul class="thumList">
                <li>
                    <div class="in">
                        <a href="#" class="thum">
                            <span class="label">정규</span>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                            </div>
                        </a>
                        <a href="#" class="tit">만화로 배우는 알기 쉬운 경영전</a>
                        <ul class="info">
                            <li class="color_clr3 fwb">이러닝</li>
                            <li><span class="star ico"></span>4.5</li>
                        </ul>
                        <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                    </div>
                </li>
                <li>
                    <div class="in">
                        <a href="#" class="thum">
                            <span class="label">정규</span>
                            <div class="thumbnail">
                                <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                            </div>
                        </a>

                        <a href="#" class="tit">[경기] 빅데이터 전문가 과정(기술) - 테스트</a>
                        <ul class="info">
                            <li class="color_clr3 fwb">이러닝</li>
                            <li><span class="star ico"></span>4.5</li>
                        </ul>
                        <div class="tagWrap"><span>교재</span><span>모바일병행</span></div>
                    </div>
                </li>
            </ul>
            <!-- //list -->

            <br/>
            <p> 구독 </p>
            <!-- list -->
            <ul class="thumList type5">
                <li>
                <div class="in">
                    <a href="#" class="thum">
                        <div class="thumbnail">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                    </a>
                    <a href="#" class="tit">초보를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                    <div class="writer">홍길동</div>
                    <ul class="info">
                        <li class="icon">
                            <span class="view ico"></span><span class="info_value">2,190</span>
                        </li>
                        <li class="icon">
                            <span class="like ico"></span><span class="info_value">36</span>
                        </li>
                        <li class="icon">
                            <span class="time ico"></span><span class="info_value">17:32</span>
                        </li>
                    </ul>
                </div>
                </li>
                <li>
                <div class="in">
                    <a href="#" class="thum">
                        <span class="label2">맛보기</span>
                        <div class="thumbnail">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                    </a>

                    <a href="#" class="tit">채널명이 한 줄인 경우</a>
                    <div class="writer">홍길동</div>
                    <ul class="info">
                        <li class="icon">
                            <span class="heart ico"></span><span class="info_value">2,190</span>
                        </li>
                        <li class="icon">
                            <span class="like ico"></span><span class="info_value">36</span>
                        </li>
                        <li class="icon">
                            <span class="time ico"></span><span class="info_value">17:32</span>
                        </li>
                    </ul>
                    
                </div>
                </li>
                
            </ul>
            <!-- //list -->


            <br/>
            <p> 도서리스트 </p>
            <!-- list -->
            <ul class="thumList type6">
                <li>
                <div class="in">
                    <a href="#" class="thum">
                        <div class="thumbnail">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                    </a>
                    <a href="#" class="tit">초보를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                    <ul class="info">
                        <li class="icon">
                            <span class="view ico"></span><span class="info_value">2,190</span>
                        </li>
                        <li class="icon">
                            <span class="like ico"></span><span class="info_value">36</span>
                        </li>
                        <li class="icon">
                            <span class="time ico"></span><span class="info_value">17:32</span>
                        </li>
                    </ul>
                </div>
                </li>
                <li>
                <div class="in">
                    <a href="#" class="thum">
                        <div class="thumbnail">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                    </a>

                    <a href="#" class="tit">채널명이 한 줄인 경우</a>
                    <ul class="info">
                        <li class="icon">
                            <span class="heart ico"></span><span class="info_value">2,190</span>
                        </li>
                        <li class="icon">
                            <span class="like ico"></span><span class="info_value">36</span>
                        </li>
                        <li class="icon">
                            <span class="time ico"></span><span class="info_value">17:32</span>
                        </li>
                    </ul>
                    
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
/*
  headerType
  1 : 기본헤더 + 확장 ,  2 : 헤더 + 확장 + 텝 ,  3 : 헤더 + 확장 + 스크롤텝
*/
export default {
  name: 'components_tabheader',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 2
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
