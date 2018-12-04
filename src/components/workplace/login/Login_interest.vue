<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery interest">
          
            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">

                        <!-- title txt -->
                        <div class="titTxtWrap">
                            <strong class="txt-tit">관심사를<br>선택해주세요</strong>
                            <p class="txt-desc">관심사와 관련된 맞춤 정보를 받으실 수 있습니다.</p>
                        </div>
                        <!-- //title txt -->

                        <!-- list -->
                        <ul class="ulList type1">
                            <li>
                                <strong class="label-tit">관심 분야</strong>
                                <div class="in-chk">
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">경영 / 리더십</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">금융</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">직무 / 자격</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">OPIC / 외국어</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">인문 / 교양 / 시사</span></label>
                                </div>
                            </li>
                            <li>
                                <strong class="label-tit">선호 과정</strong>
                                <div class="in-chk">
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">이러닝</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">집합</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">지식</span></label>
                                </div>
                            </li>
                            <li>
                                <strong class="label-tit">선호 강의</strong>
                                <div class="in-chk">
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">Instructor-led</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">Self-paced with labs</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">Self-paced</span></label>
                                </div>
                            </li>
                        </ul>
                        <!-- //list -->


                    </div>
                </div>
            </div>

            <!-- fixed Bottom Btn -->    
            <div class="fixBtmBtn">
                <ul>
                    <li>                            
                        <button type="button" disabled class="btn ld">다음</button>
                        <!-- 하단에 활성화 된 버튼은 임시로 display:none -->
                        <button type="button" class="btn ld clr1" style="display:none;">다음</button>
                    </li>
                </ul>                    
            </div>
            <!-- //fixed Bottom Btn --> 

            
            
        </div>
        <!-- //container -->   

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_interest',
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
