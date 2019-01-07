<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_etc pd70">
            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div v-if="headerType == '1'" id="header" class="expand">          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
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
        <div v-if="headerType == '2'" id="header" class="tab fixed">          
          <div class="header_inner line1">
            <button type="button" class="btn only close"><span class="ico">이전</span></button>
            <p class="header_text font_19">콘텐츠검사 결과</p>
          </div>  
          <div class="header_inner line2 tabMenu">
              <ul class="fixTab">
                <li class="on"><a href="#tab1">오류 등록</a></li><!-- selected class "on" -->
                <li><a href="#tab2">오류 결과</a></li>
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
        <div v-if="headerType == '3'" id="header" class="tab fixed">
          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
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
          <!-- 스크롤 값에 따라서  left blur , right blur 감춰주기.  -->
          <div class="blur_wrap">
            <div class="left blur"></div>
            <div class="right blur"></div>
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
                    <div class="inner" >
                      <p class="txt-tit"> 
                        <strong>상품정보</strong> 
                        <span class="fr guide-btn">오류 유형표</span>
                      </p>
                      <div class="full-box pd">
                        <table >
                          <tr>
                            <td class="l-txt fwb">상품명</td> 
                            <td class="r-txt pdb14">구글 벤처스의 5일만에 기획부터 수행까지 끝내는 법 (참고도서제공)</td>
                          </tr>
                          <tr>
                            <td class="l-txt fwb">상품코드</td> 
                            <td class="r-txt pdb14">CE0681</td>
                          </tr>
                          <tr>
                            <td class="l-txt fwb">접수기간</td> 
                            <td class="r-txt pdb14">2018.12.01 ~ 2018.12.31</td>
                          </tr>
                          <tr>
                            <td class="l-txt fwb">접수자</td> 
                            <td class="r-txt">정해민</td>
                          </tr>
                        </table>          
                      </div>                      
                      <div class="tabCnt dpb pt0 mt26" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                      <!-- list -->
                          <ul class="multiList type2">
                              <li>
                                <p class="txt-tit"> 
                                  <strong>오류정보</strong> 
                                </p>
                                <table>
                                  <tr>
                                    <td class="l-txt-2 fwb">오류 LO/SO</td>
                                    <td class="r-txt-2 ">(LO코드/SO코드) e-Test Leaders 실기 출제 경향 및 시험응시 방법</td>
                                  </tr>
                                </table>
                              </li>
                              <li class="pt0">
                                  <strong class="label-tit14">오류 유형</strong>                                
                                  <slp-select placeholder="동영상 속도 (끊김현상)" width="100%">
                                      <option>동영상 속도 (끊김현상)</option>
                                      <option>체크</option>
                                  </slp-select>
                              </li>
                              <li>
                                <p><strong class="label-tit14">오류 내용</strong></p>
                                <textarea class="gr-box" name="" cols="30" rows="5">[정해민 테스터] [2차시] (5분 26초~)‘전격에 의한 재해 - 방지대책’에 대하여 설명하던 중‘전격의 재해 주요 원인’으로 내용이 넘어갑니다.</textarea>  
                              </li>                                                                                          
                          </ul>
                          <strong class="label-tit16 mt36" > 첨부파일 추가</strong>
                          <ul v-show="list1.length" class="ulList type4 bot-btn">
                              <li v-for="(item, index) in list1" :key="index">
                              <div>
                                  <span class="ico img-a"></span>
                                  <span class="at-tit">Solution listup.jpg</span>
                                  <div class="fr">
                                  <span class="at-num">500KB</span>
                                  <span class="ico deletemode_20_black" @click="deleteFileList(index)"></span>
                                  </div>
                              </div>                                                             
                              </li>  
                          </ul>
                          <!-- 추가 리스트 --> 
                          <a href="#" class="btn sm add w100p" @click="addList1()" ><span class="ico plus"></span>파일 추가</a> 
                      </div>
                    </div>
                </div>
            </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <button type="button" class="btn md clr1">저장</button>
            </div>
            <!-- //floatingbtn -->                
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Study_05_etc_pilottest',
  props: {
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 2,
      list1: []
    }
  },
  computed: {
  },
  watch: {
  },
  /* vue function */
  methods: {
    addList1 () {
      this.list1.push('tmp 어학등급 아이템')
    },
    deleteFileList (index) {
      console.log(index, '제거')
      this.list1.splice(index, 1)
    },
    onKeydown (event) {
      this.keylength = event.target.value.length
      event.target.style.height = '1px'
      event.target.style.height = (event.target.scrollHeight) + 'px'
    }
  }
}
</script>
