<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery drawer event">
        <!-- header + 확장형 + tab  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div v-if="headerType == '2'" id="header" class="tab">          
          <div class="header_inner">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18"> 이벤트</p>
          </div>  
          <div class="header_inner line2 tabMenu">
              <ul class="fixTab">
                <li class="on"><a href="#tab1">이벤트내역</a></li><!-- selected class "on" -->
                <li><a href="#tab2">당첨자발표</a></li>
              </ul>
          </div>  
          
        </div>
        <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                                <!-- list -->                                 
                                        <h1 class="h-tit5 title_line">
                                            <span class="total_txt">총</span>
                                            <strong class="fwb600 count">112</strong><span>건</span>
                                            <a href="#"><span class="ico down fr"></span><span class="total fr" >전체</span></a>
                                        </h1>
                
                                        <ul class="multiList type3">
                                            <li>
                                                <div class="in oh"> 
                                                    <span class="chip">진행중</span>                                      
                                                    <div class="multiline contents">
                                                    공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                                    </div> 
                                                    <span class="ico arrow"></span>
                                                    <p class="date">2018.11.12 ~ 2018.11.20</p>
                                                </div>
                                                
                                            </li>
                                           <li>
                                                <div class="in"> 
                                                    <span class="chip">진행중</span>                                      
                                                    <div class="multiline contents">
                                                    공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                                    </div>
                                                    <p class="date">2018.11.12 ~ 2018.11.20</p>
                                                </div>
                                                <span class="ico arrow"></span>
                                            </li>    
                                            <li>
                                                <div class="in"> 
                                                    <span class="chip end">진행중</span>                                      
                                                    <div class="multiline contents">
                                                    공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                                    </div>
                                                    <p class="date">2018.11.12 ~ 2018.11.20</p>
                                                </div>
                                                <span class="ico arrow"></span>                                                
                                            </li>
                                            <li>
                                                <div class="in"> 
                                                    <span class="chip end">진행중</span>                                      
                                                    <div class="multiline contents">
                                                    공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                                    </div>
                                                    <p class="date">2018.11.12 ~ 2018.11.20</p>
                                                </div>
                                                <span class="ico arrow"></span>                                                
                                            </li>
                                            <li>
                                                <div class="in"> 
                                                    <span class="chip end">진행중</span>                                      
                                                    <div class="multiline contents">
                                                    공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.공지사항 타이틀 영역입니다.
                                                    </div>
                                                    <p class="date">2018.11.12 ~ 2018.11.20</p>
                                                </div>
                                                <span class="ico arrow"></span>                                                
                                            </li>                                  
                                        </ul>
                                    
                                <!-- //list -->
                              </div>   

            </div>
          </div>
        </div>

        <!-- Bottom Sheet -->
        <div id="bottomsheet_wrap" v-show="bottomsheetFlag">
          <div id="sheetDim"  @click="bottomsheetToggle"></div>
          <div id="bottomsheet">            
            <ul  @click="bottomsheetToggle">
              <!-- 
                현재 아이콘이 이미지라 문의했지만, 순수  css로 바꿔야한다면 
                <span class="ico check_24_blue"></span> -> <span class="checkIcon"></span>                 
              -->
              <li class="">교육차수 1<span class="checkIcon"></span></li>
              <li class="">교육차수 2<span class="checkIcon"></span></li>
              <li class="">교육차수 3<span class="checkIcon"></span></li>
              <li class="">교육차수 4<span class="checkIcon"></span></li>
              <li class="">교육차수 5<span class="checkIcon"></span></li>
              <li class="active">선택된 차수<span class="checkIcon"></span></li>
            </ul>
            <div class="bottomsheetBtn">              
              <span class="ico close_24_black"></span>
              닫기
            </div>
          </div>
        </div>
        <!-- // Bottom Sheet -->

        
      </div>
      <!-- //container -->


      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
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
