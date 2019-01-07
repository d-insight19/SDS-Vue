<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_etc">
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
                    <div class="inner">
                      <p class="label-tit16"> 
                        <strong>상품정보</strong> 
                        <span class="fr guide-btn">오류 유형표</span>
                      </p>
                        <div class="full-box pd">
                          <p>상품명</p>
                          <p>상품코드</p>
                          <p>접수기간</p>
                          <p>접수자</p>
                        </div>
                        <div class="tabCnt dpb pt0" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
                        <!-- list -->
                            <ul class="multiList type2">
                                <li>
                                    
                                </li>
                                <li class="custom">
                                    <strong class="label-tit14">과정명</strong>
                                    <p class="sub-txt">이석규 교수의 마케팅 핵심원리와 실전전략</p>
                                </li>
                                <li class="pt0">
                                    <strong class="label-tit14">상담분류</strong>                                
                                    <slp-select placeholder="진도체크" width="100%">
                                        <option>진도체크</option>
                                        <option>체크</option>
                                    </slp-select>
                                </li> 
                                <li>
                                    <strong class="label-tit14">회신방법</strong>      
                                    <div class="rdoSelBox">
                                        <label class="labelRdo">
                                            <input type="radio" class="rdo" name="place-rdo" checked>
                                            <span class="ico"></span>
                                            <span class="label">이메일</span>
                                        </label>          
                                        <label class="labelRdo">
                                            <input type="radio" class="rdo" name="place-rdo">
                                            <span class="ico"></span>
                                            <span class="label">휴대전화</span>
                                        </label>        
                                    </div>
                                </li>
                                <li>
                                <strong class="label-tit14">이메일</strong>
                                <slp-text-field placeholder="Hamin.jung@multicampus.com"></slp-text-field>
                                </li>
                                <li>
                                    <strong class="label-tit14">내용</strong>
                                    <slp-text-field placeholder="해당 과정에 대해서 질문합니다. 내용은 이렇습니다."></slp-text-field>
                                </li>
                                <li>
                                    <strong class="label-tit14"> 첨부파일 추가</strong>
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
                                </li>                                                                                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <a href="#" class="btn sm add w100p" @click="addList1()" ><span class="ico plus"></span>파일 추가</a> 
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
