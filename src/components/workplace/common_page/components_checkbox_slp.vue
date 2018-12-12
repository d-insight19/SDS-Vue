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
                    <slp-checkbox type="button">경영 / 리더십</slp-checkbox>
                    <slp-checkbox type="button">금융</slp-checkbox>
                    <slp-checkbox type="button">직무 / 자격</slp-checkbox>
                    <slp-checkbox type="button">OPIC / 외국어</slp-checkbox>
                    <slp-checkbox type="button">인문 / 교양 / 시사</slp-checkbox>
                    </div>
                </li>
            </ul>
            <!-- //list -->
            <br/>

            <div class="loginChk">
                <slp-checkbox>선택가능</slp-checkbox>
                <br/>
                <slp-checkbox value="true">선택됨</slp-checkbox>
                <br/>
                <slp-checkbox disabled>선택불가능</slp-checkbox>
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
