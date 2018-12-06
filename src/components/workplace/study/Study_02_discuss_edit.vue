<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery study_discuss">
            <!-- header -->
            <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="font_18">토론 발의</p>
            <p class="end">완료</p>
            </div>
            <!-- //header -->            
            <div id="content" class="etc">
                <div class="cell">
                  <div class="inner">
                    <div class="titTxtWrap">
                      <p class="">제목</p>
                      <ul class="singleList dis">
                        <li>
                            <slp-text-field  type="text" placeholder="제목을 입력해 주세요" ></slp-text-field>
                        </li>
                      </ul>                      
                      <p class="">주제분류</p>
                      <ul class="singleList dis">
                        <li>
                            <select class="select w100p">
                              <option value="">주제를 선택해주세요.</option>
                              <option value="">경영전문</option>
                              <option value="">외국어</option>
                              <option value="">정보기술</option>
                              <option value="">시사/교양</option>
                              <option value="">기타</option>
                            </select>
                        </li>
                      </ul>
                      <ul class="singleList type_2 dis">
                          <li>
                              <a href="#">공개여부</a>
                              <label class="labelBtn">
                                  <input type="checkbox" name="" class="chk">
                                  <div class="chk_box"><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                              </label>
                          </li>
                      </ul>
                      <p class="">토론기간</p>
                      <ul class="singleList dis">
                        <li>
                            <select class="select dis_num" placeholder="시작일">
                              <option value="">시작일</option>
                            </select><select class="select dis_num" placeholder="종료일">
                              <option value="">종료일</option>
                            </select>
                        </li>
                      </ul>
                      <p class="">참여가능 인원</p>
                      <ul class="singleList dis">
                        <li>
                            <input type="number"  class="input" placeholder="참여가능 인원을 입력해주세요." />
                            <span class="pos_a">명</span>
                        </li>
                      </ul>
                      <p class="">내용</p>
                      <ul class="singleList dis">
                        <li>
                            <input type="text"  class="input" placeholder="내용을 입력해주세요." />
                        </li>
                      </ul>
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
  name: 'Study_dictionary',
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
