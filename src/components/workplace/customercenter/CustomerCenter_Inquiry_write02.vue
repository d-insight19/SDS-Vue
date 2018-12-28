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
                <li><a href="#tab1">과정문의</a></li><!-- selected class "on" -->
                <li class="on"><a href="#tab2">기타문의</a></li>
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
                                <slp-select required placeholder="과정을 선택해 주세요." width="100%" class="mt8">
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                </slp-select>
                            </li>
                            <li>
                                <strong class="label-tit14">상담분류</strong>
                                <slp-select required placeholder="상담분류를 선택해 주세요." width="100%" class="mt8">
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                </slp-select>
                            </li>
                            <li>
                                <strong class="label-tit14">제목</strong>
                                <slp-text-field placeholder="제목을 입력해 주세요."></slp-text-field>
                            </li>
                            <li>
                                <strong class="label-tit14">내용</strong>
                                <div class="textarea_wrap">
                                  <textarea class="content"  @keydown="onKeydown" placeholder="내용을 입력하세요."></textarea>
                                </div>
                            </li>
                            <li>
                                <strong class="label-tit14"> 첨부파일 추가</strong>
                                <ul v-show="list1.length" class="ulList type4">
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
                                <slp-button class="sm add w100p" @click="addList1()" ><span class="ico"></span>파일 추가</slp-button> 
                            </li>   
                            <li>
                                <strong class="label-tit14">이름</strong>
                                <slp-text-field value="정해민"></slp-text-field>
                            </li>
                            <li>
                                <strong class="label-tit14">휴대전화</strong>
                                <slp-text-field value="01012341234"></slp-text-field>
                            </li>  
                            <li>
                              <strong class="label-tit14">이메일</strong>
                              <slp-text-field value="CRD_abc1234@multicapus.co.kr"></slp-text-field>
                            </li>                                                                                       
                        </ul>
                        <slp-checkbox class="mt9" value="true">답변을 e-mail로도 같이 받아 보겠습니다</slp-checkbox>
                        <!-- //list -->
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
      headerType: 2,
      list1: []
    }
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
