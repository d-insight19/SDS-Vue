<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery eduperson_drawer_setting">

       <!-- header -->
        <div id="header" class="fixed" >
          <button type="button" class="btn only close"><span class="ico">이전</span></button>
          <p class="header_text font_18"> 설정 </p>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">

                <!-- list -->
                <ul class="ulList type1">
                    <li>
                        <strong class="label-tit">다국어 설정</strong>
                        <div class="intSchBox">
                            <slp-select required placeholder="선택" width="100%" >
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                            </slp-select>
                        </div>

                        <strong class="label-tit mt20">타임존 설정</strong>
                        <div class="intSchBox">
                            <slp-select required placeholder="선택" width="100%">
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                            </slp-select>
                        </div>
                    </li>

                    <li>
                        <span class="fl edu_setting_title">버전정보</span>
                        <span class="fr edu_setting_version">최신버전 <span class="num">1.0.1</span></span>
                        <span class="fr edu_setting_version color_clr2" style="display:none">최신버전으로 업데이트</span>
                    </li>
                    <li>
                        <span class="edu_setting_title">오픈소스 라이선스</span>
                        <span class="ico next_16 fr"></span>
                    </li>
                </ul>
                <!-- //list -->



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
  name: 'Eduperson_setting',
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
