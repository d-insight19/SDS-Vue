<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container" style="padding:18px;">

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
            </ul>
            <!-- //list -->
            
            
            <br><p> 싱글라인 </p><br>
            <!--  싱글라인일 경우 <p class="sub_label"> 태그만 안보이면 됨 -->
            <div class="">
				<label for="id_save" class="labelChk">
                    <input id="id_save" type="checkbox" class="chk" name="id_save">
                    <span class="ico"></span>
                    <span class="label color_black">선택가능</span>
                </label>
                <br>
				<label for="login_auto" class="labelChk">
                    <input id="login_auto" type="checkbox" class="chk" name="login_auto" checked>
                    <span class="ico"></span>
                    <span class="label">선택됨</span>
                </label>
                <br>
                <label for="login_auto" class="labelChk">
                    <input id="login_auto" type="checkbox" class="chk" name="login_auto" disabled>
                    <span class="ico"></span>
                    <span class="label">선택불가능</span>
                </label>
			</div>

            <br><p> CheckBox 멀티라인</p><br>

            <!--  멀티라인 일 경우  -->
            <div class="">
				<label for="test" class="labelChk multi">
                    <input id="test" type="checkbox" class="chk" name="test">
                    <span class="ico"></span>
                    <span class="label">텍스트가 Multiline일 경우</span>
                    <p class="sub_label">텍스트가 Multiline일 경우</p>
                </label>
			</div>

            <br><p> CheckBox + Thumbnail</p><br>

            <!--  CheckBox + Thumbnail -->
            <div class="">
				<label for="test2" class="labelChk thum">
                    <input id="test2" type="checkbox" class="chk" name="test2">
                    <span class="ico"></span>
                    <div class="thum">
                        <div class="thumbnail">
                            <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                        </div>
                    </div>
                </label>
			</div>


            <br><p> CheckBox + Input</p><br>

            <!--  CheckBox + Thumbnail -->
            <div>
				<label for="test3" class="labelChk input">
                    <input id="test3" type="checkbox" class="chk" name="test3">
                    <span class="ico"></span>
                    <input type="text"  class="input error" placeholder="Hint Msg" />   
                </label>
                <p class="InfoChK-resultTxt err">답안을 선택 해 주세요..</p>
			</div>



            <br><p> 학습홈 > check Box 예외케이스  라인 </p><br>

            <!--  CheckBox + 멀티라인 -->
            <div>
				<label for="test5" class="labelChk type2">
                    <input id="test5" type="checkbox" class="chk" name="test5">
                    <span class="ico"></span>
                    <span class="label">① EJB를 주 프레임워크로 사용할 때 불편했을 점을 해소하려고 개발되었다.</span>
                </label>
			</div>

            <br><p> 학습홈 > check Box 예외케이스  썸네일  </p><br>

            <!--  CheckBox + Thumbnail -->
            <div>
				<label for="test6" class="labelChk type2">
                    <input id="test6" type="checkbox" class="chk" name="test6">
                    <span class="ico"></span>
                    <div class="thum">
                        <div class="thumbnail">
                            <img src="@/assets/img/thum_no_L.jpg" class="thumImg" alt="">
                        </div>
                    </div>
                </label>
			</div>
            


        </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_checkbox',
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
