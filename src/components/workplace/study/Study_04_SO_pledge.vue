<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_pledge">
            <!-- header -->
            <div id="header">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
              <div class="page-btn">
                <span class="ico back"></span>
                <div class="num"><span>03</span>/<span>36</span></div>
                <span class="ico next"></span>
              </div>
            </div>
            <!-- //header -->
            
            <div id="content" class="etc">
                <div class="cell">
                  <div class="inner">
                    <span class="chip">서약서</span>
                    <p class="h-tit1">서약서 타이틀 영역입니다 서약서 타이틀 영역입니다</p>
                    <p class="pledge-tit">서약서 제출을 완료하셔야 학습을 진행할 수 있습니다.</p>
                    <p class="line01"></p>
                    <p class="empty_img">
                      <img src="" alt="">
                    </p>
                    <p class="txt-desc">
                    본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다  본문 텍스트입니다  
                    </p>
                    <p class="empty_img">
                      <img src="" alt="">
                    </p>
                    <p class="txt-desc">
                    본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다 본문 텍스트입니다  본문 텍스트입니다  
                    </p>
                    <p class="line02"></p> 
                    <p class="sub-tit">회사명</p>
                    <div class="intSchBox singleList">
                      <!-- X 아이콘이 필요한 input -->
                      <div class="search-wrapper">
                          <input type="text"  pattern="^\s+" class="input" placeholder="회사명 검색" />
                          <button class="close-icon" type="button"></button>
                      </div>
                      <a href="#" class="btn"><span class="ico"></span></a>
                    </div>   
                    <p class="sub-tit"><strong>부서명</strong></p>
                    <div class="singleList">
                          <input type="text"  class="input" placeholder="부서를 입력해주세요." />                      
                    </div>
                    <p class="sub-tit"><strong>직급</strong></p>
                    <div class="singleList">                      
                          <input type="text"  class="input" placeholder="직급을 입력해주세요." />                      
                    </div>
                    <p class="sub-tit"><strong>사번</strong></p>
                    <div class="singleList">                      
                          <input type="text"  class="input" placeholder="사번을 입력해주세요." />                      
                    </div>
                    <p class="sub-tit"><strong>성명</strong></p>
                    <div class="singleList">                      
                          <input type="text"  class="input" placeholder="성명을 입력해주세요." />                      
                    </div>
                    <div class="absBtmBtn">  
                        <button type="button" disabled="disabled" class="btn md clr1">제출</button>
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
  name: 'Study_04_SO_pledge',
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
