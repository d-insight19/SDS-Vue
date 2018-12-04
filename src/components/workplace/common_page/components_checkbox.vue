<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container">

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
            <br/>

            <div class="loginChk">
				<label for="id_save" class="labelChk">
                    <input id="id_save" type="checkbox" class="chk" name="id_save">
                    <span class="ico"></span>
                    <span class="label">선택가능</span>
                </label>
                <br/>
				<label for="login_auto" class="labelChk">
                    <input id="login_auto" type="checkbox" class="chk" name="login_auto" checked>
                    <span class="ico"></span>
                    <span class="label">선택됨</span>
                </label>
                <br/>
                <label for="login_auto" class="labelChk">
                    <input id="login_auto" type="checkbox" class="chk" name="login_auto" disabled>
                    <span class="ico"></span>
                    <span class="label">선택불가능</span>
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
