<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery drawer inquiry">
        <!-- header + 확장형 + tab  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div v-if="headerType == '2'" id="header" class="tab">          
          <div class="header_inner">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_18"> 문의하기</p><button type="button" class="btn14 color_clr2">완료</button>
          </div>  
          <div class="header_inner line2 tabMenu">
              <ul class="fixTab">
                <li class="on"><a href="#tab1">과정문의</a></li><!-- selected class "on" -->
                <li><a href="#tab2">기타문의</a></li>
              </ul>
          </div>  
          
        </div>
        <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                        <!-- list -->
                        <ul class="multiList type2">
                            <li class="pt0">
                                <strong class="label-tit14">과정선택</strong>
                                <div class="intSchBox">
                                <input type="text" class="input mb20" value="선택한 과정명">
                                <a href="#" class="btn"><span class="ico"></span></a>
                            </div>
                            </li>
                            <li>
                                <strong class="label-tit14">상담분류</strong>
                                <input type="text" class="input mb20" value="선택한분류명" >
                            </li>
                            <li>
                                <strong class="label-tit14">제목</strong>
                                <input type="text" class="input mb20" value="문의내용의 제목명" >
                            </li>
                            <li>
                                <strong class="label-tit14">내용</strong>
                                <textarea rows="3" class="content mt8">해당 과정의 도서에대한 질문을 드립니다. 구매 방법에 대해 설명이 되어 있지 않던데 어떤 경로로 구매가 가능한지에 대해 답변해 주실 수 있을까요?"
                                </textarea>

                            </li>
                            <p class="title_line mt20">
                                <strong class="label-tit14">첨부파일 추가</strong>
                            </p>
                            
                                <ul class="ulList type4">
                                    <li>
                                    <div>
                                        <span class="ico img-a"></span>
                                        <span class="at-tit">Solution listup.jpg</span>
                                        <div class="fr">
                                        <span class="at-num">500KB</span>
                                        <span class="ico deletemode_20_black"></span>
                                        </div>
                                    </div>                                                             
                                    </li> 
                                    <li class="noline">
                                    <div>
                                        <span class="ico img-a"></span>
                                        <span class="at-tit">Solution listup.jpg</span>
                                        <div class="fr">
                                        <span class="at-num">500KB</span>
                                        <span class="ico deletemode_20_black"></span>
                                        </div>
                                    </div>                                                             
                                    </li>     
                                </ul>
                            
                            <a href="#" class="btn sm add w100p mt12" @click="addList1()" ><span class="ico"></span>파일 추가</a>
                            <li class="mt20">
                            <strong class="label-tit14" style="margin-top:12px">이름</strong>
                            <input type="text" class="input mb20" value="정해민" >
                            </li>
                            <li>
                                <strong class="label-tit14">휴대전화</strong>
                                <input type="text" class="input mb20" value="01012341234">
                            </li>  
                            <li>
                            <strong class="label-tit14">이메일</strong>
                            <input type="text" class="input" value="CRD_abc1234@multicapus.co.kr" >                               
                            </li>                                                                                                                
                        </ul>
                        <!-- //list -->

                        <label for="login_auto" class="labelChk mt12">
                        <input id="login_auto" type="checkbox" class="chk" name="login_auto" checked>
                        <span class="ico"></span>
                        <span class="label">답변을 e-mail로도 같이 받아 보겠습니다.</span>
                        </label>                        
                        
                </div>   

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
