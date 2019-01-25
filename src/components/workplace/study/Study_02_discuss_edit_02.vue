<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_discuss pd70">
            <!-- header -->
            <div id="header" class="fixed">
                <div class="header_inner line1">
                    <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                    <p class="header_text font_18">토론 수정</p>
                    <p class="end">
                        <span class="end_btn2 color_clr2">완료</span>
                    </p>
                </div>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner" style="padding-top:78px;">
                        <p class="txt-tit">제목</p>
                        <div class="singleList ">                        
                            <input  type="text" placeholder="제목을 입력해 주세요" value="토론 타이틀입니다."/>                        
                        </div>                      
                        <p class="txt-tit">주제분류</p>
                        <div class="singleList ">                        
                            <select class="select w100p">
                                <option value="">1차시</option>
                                <option value="">경영전문</option>
                                <option value="">외국어</option>
                                <option value="">정보기술</option>
                                <option value="">시사/교양</option>
                                <option value="">기타</option>
                            </select>                        
                        </div>
                        <p class="txt-tit">토론기간</p>
                        <div class="singleList ">                        
                            <select class="select dis_num" placeholder="시작일">
                                <option value="">시작일</option>
                            </select><select class="select dis_num" placeholder="종료일">
                                <option value="">종료일</option>
                            </select>                        
                        </div>
                        <p class="txt-tit">참여가능 인원</p>
                        <div class="singleList ">                        
                            <input type="number"  class="input" placeholder="참여가능 인원을 입력해주세요." value="99" />
                            <span class="pos_a">명</span>                        
                        </div>
                        <p class="txt-tit">내용</p>
                        <div class="singleList ">                        
                            <input type="text"  class="input" placeholder="내용을 입력해주세요." value="토론 내용입니다." />                        
                        </div>
                        <p class="label-tit16 mt36 mb10"> 첨부파일 추가</p>
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
                    </div>  
                </div>
            </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn abs">  
                <a href="#" class="btn sm w100p add" @click="addList1()" ><span class="ico"></span>파일 추가</a> 
            </div>
            <!-- //floatingbtn -->    
        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Study_02_discuss_edit',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
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
    }
  }
}
</script>
