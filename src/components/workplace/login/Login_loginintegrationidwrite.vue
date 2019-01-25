<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery integration pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <h1 class="h-tit">통합 아이디 생성</h1>
                <p class="txt-desc">통합회원으로 가입하시면  한번의 로그인으로 이러닝/집합, 오픽, 세리Pro 맞춤 서비스를  이용하실 수 있습니다. 아래 검색된 아이디 중에서 통합아이디로 사용하실 아이디를 선택 또는 입력 해주십시오.</p>
                <!-- list -->
                <ul class="ulList type2 mt40">
                  <li>
                    <strong class="label-tit">멀티캠퍼스 이러닝/집합</strong>
                    <ul class="ul-block">
                      <li>
                        <label class="labelRdo">
                          <input type="radio" class="rdo" name="test-rdo" :value="active" v-model="active">
                          <span class="ico">
                              <span class="innerCircle"></span>
                          </span>
                          <span class="label">CRD_abc1234</span>
                        </label>
                      </li>
                      <li>
                        <label class="labelRdo">
                          <input type="radio" class="rdo" name="test-rdo" :value="active" v-model="active">
                          <span class="ico">
                              <span class="innerCircle"></span>
                          </span>
                          <span class="label">QMultisos1</span>
                        </label>
                      </li>
                      <li>
                        <label class="labelRdo">
                          <input type="radio" class="rdo" name="test-rdo" :value="active" v-model="active">
                          <span class="ico">
                              <span class="innerCircle"></span>
                          </span>
                          <span class="label">Multisos1</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong class="label-tit">OPIc</strong>
                    <ul class="ul-block">
                      <li>
                        <label class="labelRdo">
                          <input type="radio" disabled class="rdo" name="test-rdo">
                          <span class="ico">
                              <span class="innerCircle"></span>
                          </span>
                          <span class="label">미가입</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong class="label-tit">SERI Pro</strong>
                    <ul class="ul-block">
                      <li>
                        <label class="labelRdo">
                          <input type="radio" class="rdo" name="test-rdo" :value="active2" v-model="active2">
                          <span class="ico">
                              <span class="innerCircle"></span>
                          </span>
                          <span class="label">Defg90</span>
                        </label>
                      </li>
                      <li>
                        <label class="labelRdo">
                          <input type="radio" class="rdo" name="test-rdo" :value="active2" v-model="active2">
                          <span class="ico">
                              <span class="innerCircle"></span>
                          </span>
                          <span class="label">Defg9Defg90</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong class="label-tit">직접 입력</strong>
                    <div class="rdoInfoChK">
                      <label class="labelRdo">
                        <input type="radio" class="rdo" name="test-rdo" :value="active3" v-model="active3">
                        <span class="ico">
                            <span class="innerCircle"></span>
                        </span>
                      </label>
                      <div class="infoChk2">
                        <slp-text-field placeholder="6~16자의 영 소문자 및 숫자" realText="true" classObject="underline" ></slp-text-field>
                        <button type="button" class="btn xxs">중복확인</button>
                      </div>
                      <!-- 아이디 체크시 결과 텍스트 -->
                      <p class="InfoChK-resultTxt succ">사용 가능한 아이디입니다.</p>
                      <p class="InfoChK-resultTxt err" style="display:2e;">이미 사용중인 아이디입니다.</p>
                      <!-- //아이디 체크시 결과 텍스트 -->
                    </div>
                  </li>
                </ul>

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md" :class="{ clr1 : realText }">다음</button></li>
            </ul>
        </div>
        <!-- //floating button -->
        
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login_loginintegrationid',
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
