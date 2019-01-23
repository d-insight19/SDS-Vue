<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="fixed">
            <div class="header_inner line1">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
            <p class="header_text font_18">노트 수정</p>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">

          <div class="cell">
            <div class="inner pt0">
                <p class="font_16 mono_100 pdt16 pb10">제목</p>
                <slp-text-field value="리더십의 본질적인 조건을 생각하다가 떠오른 메모"></slp-text-field>
            </div>
          </div>
          
          <div class="cell">
            <div class="inner pt0">
                <p class="font_16 mono_100 pdt16 pb10">폴더</p>
                <slp-select width="100%" placeholder="기본노트">
                    <option>기본노트</option>
                    <option>기본노트</option>
                </slp-select>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <p class="font_16 mono_100 pdt16 btB89">
                    학습 위치
                    <span class="chip color2 fr">01:36 <span class="ico del-blue"></span></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner pdt16 ">
                <p class="font_16 mono_100 pdt16 btB89">
                    공개여부
                    <slp-switch class="fr" value="true"></slp-switch>
                </p>
            </div>
          </div>
          
          <div class="cell">
            <div class="inner pdt16 ">
                <p class="font_16 mono_100 pdt16 btB89 pb10">내용</p>
                <textarea rows="5">본질적인 조건을 생각해보다가 떠오른게 있는데 관련 보고 형식과 리더십의 조건에 대한 강의를 참고하는게 좋겠다. </textarea>
            </div>
          </div>
        

        </div>
            <!-- floatingbtn -->
            <div class="fixBtmBtn">  
                <button type="button" class="btn ld clr1">완료</button>
            </div>
            <!-- //floatingbtn -->
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'MySpace_studymanagement_note_edit',
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
