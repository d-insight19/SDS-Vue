<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="colorCode2">

    <div id="" class="sample_page" style="background:#e3e3e3;">

        <p> CardType 01 </p>
        <ul class="cardList type1">
            <li>
                <div class="thum">
                    <span class="moredot"></span>
                    <div class="cDim"></div>
                        <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                    </div>
                    <div class="text">
                    <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                    <ul class="info">
                        <li class="fwb color_clr3">이러닝</li>
                        <li class="danger">승인반려</li>                  
                        <li>최종학습일 2018.10.18</li>
                    </ul>
                    <ul class="card_buttons">
                        <li><a href="#" >취소하기</a></li>                    
                        <li><a href="#" >결재 재상신</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="thum">
                    <span class="moredot"></span>
                    <span class="label2">D-10</span>
                    <span class="progWrap"><em class="bar clr2" style="width:40%;"></em></span>
                    <div class="cDim"></div>
                        <img src="@/assets/img/thum_no_L2.jpg" class="thumImg" alt="">
                    </div>
                    <div class="text">
                    <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                    <ul class="info">
                        <li class="fwb color_clr3">이러닝</li>
                        <li class="danger">승인반려</li>                  
                        <li>최종학습일 2018.10.18</li>
                    </ul>
                    <ul class="card_buttons">
                        <li><a href="#" >취소하기</a></li>                    
                        <li><a href="#" >결재 재상신</a></li>
                    </ul>
                </div>
            </li>

        </ul>
        <br/>


        <br/>
        <p> CardType 02 - cardList  + Button  </p>
        <ul class="cardList type2">
            <li>
                <div class="thum">
                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                </div>
                <div class="in">                    
                                        
                    <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                    <ul class="info">
                        <li class="fwb color_clr3">이러닝</li>
                        <li class="">수료처리중</li>
                    </ul>
                </div>
                <span class="moredot"></span>                
            </li>
        </ul>

        <br/>
        <p> CardType 02 - 다운로드리스트  </p>
        <ul class="cardList type2">
            <li>
                <div class="thum">
                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                </div>
                <div class="in">                    
                    <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                    <ul class="info type2">
                        <li class="fwb color_clr3">이러닝</li>
                        <li class="danger">청강기간 만료</li>
                    </ul>
                    <ul class="info type2">
                        <li class="">12개 다운로드 됨</li>
                        <li class="">232.23MB</li>
                    </ul>
                </div>
                <span class="moredot"></span>
            </li>
        </ul>

        <br/>
        <p> CardType 02 - Card List + meta info  </p>
        <ul class="cardList type2">
            <li>
                <div class="thum">
                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                </div>
                <div class="in">                                        
                    <a href="#" class="tit">업무에 바로 쓰는 자바 스크립트 프로그래밍 입문 과정</a>
                    <p class="series">
                        <span class="fwb">시리즈</span>
                        <span class="">세상을 바꾸는 시간 15분: 라이프</span>
                    </p>
                    <ul class="info">
                        <li class="fwb color_clr3">도서요약</li>
                        <li class="">2018.10.10</li>
                    </ul>
                </div>
                <span class="moredot"></span>
            </li>
        </ul>

        <br/>
        <p> CardType 02 - Card List + meta info  </p>
        <ul class="cardList type2">
            <li>
                <div class="thum">
                    <div class="label clr2">시리즈</div>
                    <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                </div>
                <div class="in">                                        
                    <a href="#" class="tit">글쓰기가 뭐라고</a>
                    <ul class="info">
                        <li class="fwb color_clr3">도서요약</li>
                        <li class="icon">
                            <span class="like ico"></span><span class="info_value">36</span>
                        </li>
                        <li class="icon">
                            <span class="time ico"></span><span class="info_value">17:32</span>
                        </li>
                    </ul>
                </div>
                <span class="moredot"></span>
            </li>
        </ul>



    </div>
  </div>
  <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_card',
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
