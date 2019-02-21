<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery searchpost">

        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18"></p>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">

                <h1 class="h-tit1">우편번호 찾기</h1>

                <ul class="searchul">
                  <li>
                    <p class="search-tit">주소 검색</p>
                    <slp-select required placeholder="선택"  width="100%">
                        <option>서울특별시</option>
                    </slp-select>
                  </li>
                  <li>
                    <p class="search-tit">주소 검색</p>
                    <div class="intSchBox">
                        <!-- X 아이콘이 필요한 input -->
                        <div class="search-wrapper">
                            <input type="text"  pattern="^\s+" class="input" placeholder="도로명, 지번, 건물명 검색하기" />
                            <button class="close-icon" type="button" style="right:0"></button>
                        </div>
                        <!-- <a href="#" class="btn"><span class="ico"></span></a> -->
                    </div>
                  </li>
                </ul>



                <div class="search_result_wrap">
                  <ul>
                    <li class="search_result">
                      <table>
                        <tr>
                          <td class="address_left color_clr2 hilight">06220</td>
                          <td class="zip_code">(143-847)</td>
                        </tr>
                        <tr>
                          <td class="address_left">도로명</td>
                          <td>서울특별시 강남구 테헤란로 212</td>
                        </tr>
                        <tr>
                          <td class="address_left">지번</td>
                          <td>서울특별시 강남구 역삼동 718-5 서울특별시 강남구 역삼동 718-5 서울특별시 강남구 역삼동 718-5</td>
                        </tr>
                      </table>
                    </li>
                    <li class="search_result">
                      <table>
                        <tr>
                          <td class="address_left color_clr2 hilight">06220</td>
                          <td class="zip_code">(143-847)</td>
                        </tr>
                        <tr>
                          <td class="address_left">도로명</td>
                          <td>서울특별시 강남구 테헤란로 212</td>
                        </tr>
                        <tr>
                          <td class="address_left">지번</td>
                          <td>서울특별시 강남구 역삼동 718-5 서울특별시 강남구 역삼동 718-5 서울특별시 강남구 역삼동 718-5</td>
                        </tr>
                      </table>
                    </li>
                    <li class="search_result">
                      <table>
                        <tr>
                          <td class="address_left color_clr2 hilight">06220</td>
                          <td class="zip_code">(143-847)</td>
                        </tr>
                        <tr>
                          <td class="address_left">도로명</td>
                          <td>서울특별시 강남구 테헤란로 212</td>
                        </tr>
                        <tr>
                          <td class="address_left">지번</td>
                          <td>서울특별시 강남구 역삼동 718-5</td>
                        </tr>
                      </table>
                    </li>
                    <li class="search_result">
                      <table>
                        <tr>
                          <td class="address_left color_clr2 hilight">06220</td>
                          <td class="zip_code">(143-847)</td>
                        </tr>
                        <tr>
                          <td class="address_left">도로명</td>
                          <td>서울특별시 강남구 테헤란로 212</td>
                        </tr>
                        <tr>
                          <td class="address_left">지번</td>
                          <td>서울특별시 강남구 역삼동 718-5</td>
                        </tr>
                      </table>
                    </li>
                    <li class="search_result">
                      <table>
                        <tr>
                          <td class="address_left color_clr2 hilight">06220</td>
                          <td class="zip_code">(143-847)</td>
                        </tr>
                        <tr>
                          <td class="address_left">도로명</td>
                          <td>서울특별시 강남구 테헤란로 212</td>
                        </tr>
                        <tr>
                          <td class="address_left">지번</td>
                          <td>서울특별시 강남구 역삼동 718-5</td>
                        </tr>
                      </table>
                    </li>
                    <li class="search_result">
                      <table>
                        <tr>
                          <td class="address_left color_clr2 hilight">06220</td>
                          <td class="zip_code">(143-847)</td>
                        </tr>
                        <tr>
                          <td class="address_left">도로명</td>
                          <td>서울특별시 강남구 테헤란로 212</td>
                        </tr>
                        <tr>
                          <td class="address_left">지번</td>
                          <td>서울특별시 강남구 역삼동 718-5</td>
                        </tr>
                      </table>
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
  name: 'Login_searchpost',
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
