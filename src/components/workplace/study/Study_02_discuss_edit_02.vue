<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_discuss">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_18">토론 수정</p>
            <p class="end color_clr2">완료</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                  <div class="inner">
                      <p class="sub-tit">제목</p>
                      <div class="singleList ">                        
                            <input  type="text" placeholder="제목을 입력해 주세요" />                        
                      </div>                      
                      <p class="sub-tit">주제분류</p>
                      <div class="singleList ">                        
                            <select class="select w100p">
                              <option value="">주제를 선택해주세요.</option>
                              <option value="">경영전문</option>
                              <option value="">외국어</option>
                              <option value="">정보기술</option>
                              <option value="">시사/교양</option>
                              <option value="">기타</option>
                            </select>                        
                      </div>
                      <div class="singleList type_2 line">                          
                            <span class="sub-tit" href="#">공개여부</span>
                            <label class="labelBtn">
                                <input type="checkbox" name="" class="chk">
                                <div class="chk_box"><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                            </label>                          
                      </div>
                      <p class="sub-tit">토론기간</p>
                      <div class="singleList ">                        
                            <select class="select dis_num" placeholder="시작일">
                              <option value="">시작일</option>
                            </select><select class="select dis_num" placeholder="종료일">
                              <option value="">종료일</option>
                            </select>                        
                      </div>
                      <p class="sub-tit">참여가능 인원</p>
                      <div class="singleList ">                        
                            <input type="number"  class="input" placeholder="참여가능 인원을 입력해주세요." />
                            <span class="pos_a">명</span>                        
                      </div>
                      <p class="sub-tit">내용</p>
                      <div class="singleList ">                        
                            <input type="text"  class="input" placeholder="내용을 입력해주세요." />                        
                      </div>

                      <p class="label-tit-2 mt36"><strong>첨부파일 추가</strong></p>
                      <ul class="ulList type4">
                        <li>
                        <div>
                            <span class="ico img-a"></span>
                            <span class="at-tit">Solution listup.jpg</span>
                            <div class="fr">
                            <span class="at-num">500KB</span>
                            <span class="ico del-blk"></span>
                            </div>
                        </div>                         
                        </li>                
                        <li>
                        <div>
                            <span class="ico ppt-a"></span>
                            <span class="at-tit">20180101_AD_Draft.ppt</span>
                            <div class="fr">
                            <span class="at-num">4.5M</span>
                            <span class="ico del-blk"></span>
                            </div>
                        </div>                         
                        </li>                
                        <li class="bottom-bd-x">
                        <div>
                            <span class="ico ppt-a"></span>
                            <span class="at-tit">20180101_AD_Draft.ppt</span>
                            <div class="fr">
                            <span class="at-num">4.5M</span>
                            <span class="ico del-blk"></span>
                            </div>
                        </div>                         
                        </li>                
                    </ul>
                  </div>
                </div>
            </div>

            <!-- floatingbtn -->
            <div class="absBtmBtn">  
                <button type="button" class="btn md "><span class="ico plus"></span>파일 추가</button>
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
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
