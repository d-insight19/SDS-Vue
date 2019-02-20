<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm_confirmlist_detail">

        <!-- header  -->
        <div id="header" class="fixed">          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">처음부터 배우는 데이터 분석</p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">

                <ul class="confirm_item_detail">
                    <li class="open" @click="toggleMenu($event)">
                        <span>필수정보</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner">
                          <table>
                            <thead>
                                <tr>
                                    <td>
                                      <div class="thum">
                                          <div class="thumbnail">
                                              <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                          </div>
                                      </div>
                                    </td>
                                    <td class="txt-desc">
                                      <p class="txt-main">과정코드 </p>
                                      처음부터 배우는 데이터 분석
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="txt-main">과정코드</td>
                                    <td class="txt-desc">K1111</td>
                                </tr>
                                <tr>
                                    <td class="txt-main">학습시간</td>
                                    <td class="txt-desc">03시간 00분 00초</td>
                                </tr>
                                <tr>
                                    <td class="txt-main">학습기간</td>
                                    <td class="txt-desc num">2018.10.10 - 2019.01.01</td>
                                </tr>
                            </tbody>
                          </table>
                        </div>
                    </li>
                    <li  @click="toggleMenu($event)">
                        <span>선택정보</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner">
                          선택정보 상세
                        </div>
                    </li>
                    <li  @click="toggleMenu($event)">
                        <span>학습목차 및 구성 컨텐츠</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner">
                              ㄴㅇㄻㄴㅇㄹ
                        </div>
                    </li>
                    <li  @click="toggleMenu($event)">
                        <span>수료기준</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner">
                              ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                        </div>
                    </li>
                </ul>

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
              <li><button type="button" class="btn md">승인</button></li>
              <li><button type="button" class="btn md clr1">반려</button></li>
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
  name: 'Atorm_confirm_list_detail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      checkboxFlag: false
    }
  },
  /* vue function */
  methods: {
    toggleMenu (event) {
      if (event.target.classList.contains('open')) {
        event.target.classList.remove('open')
      } else {
        event.target.classList.add('open')
      }
    }
  }
}
</script>
