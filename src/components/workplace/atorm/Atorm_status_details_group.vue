<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery atorm pd70">

           <!-- header -->
            <div v-if="headerType == '2'" id="header" class="tab fixed">
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text font_18">5분 안에 중국어 발음하기</p>
                </div>
                <div class="header_inner line2 tabMenu scroll-x">
                    <ul class="scrollTab">
                        <li><a href="#tab1">과정정보</a></li>
                        <li class="on"><a href="#tab2">학습현황</a></li><!-- selected class "on" -->
                    </ul>
                </div>
            </div>
        <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner nopad">

                    <ul class="thumList">
                        <li>
                            <div class="in">
                                <a href="#" class="thum">
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">5분 안에 중국어 발음하기</a>
                                <ul class="info">
                                    <li class="color_clr3 fwb">집합</li>
                                    <li>K0111</li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <p class="hr" style="margin:26px -24px 21px"></p>


                    <ul class="multiList type_2">
                        <li class="border_bottom">
                            <div class="in">
                                <span class="label-tit13">총 학습자 수</span>
                                <div class="num">415</div>
                            </div>
                        </li>
                        <li class="border_bottom">
                            <div class="in">
                                <span class="label-tit13">평균 출석률</span>
                                <div class="num">82.5</div>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <span class="label-tit13">평균점수</span>
                                <div class="num">62</div>
                            </div>
                        </li>
                    </ul>

                    <ul class="pager_list mt10">
                        <li class="active">
                            <span class="dot"></span>
                        </li>
                        <li>
                            <span class="dot"></span>
                        </li>
                    </ul>

                    <p class="hr" style="margin:0 -24px 22px"></p>

                    <p class="mb7">총 <span class="fwb ml2"><b>18</b></span>
                    <span class="tar fr mono_80">전체 차수 <span class="ico ico_dropdown16 gr"></span>
                    </span>
                    </p>

                    <div class="status_table_wrap">
                        <table class="status_table">
                        <thead>
                            <tr>
                                <td class="color_clr3 fwb600" style="width:50%;">정해민</td>
                                <td class="tar fwb">학습한 차수 <span class="num">5</span></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="detail_list_wrap border_right">
                                        <table class="detail_list">
                                            <tr>
                                                <td class="pdb5">평가결과</td>
                                                <td class="pdb5 mono_100 tar">95점</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">레포트</td>
                                                <td class="pdb5 mono_100 tar">제출</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">설문</td>
                                                <td class="pdb5 mono_100 tar">응답</td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                                <td>
                                    <div class="detail_list_wrap">
                                        <table class="detail_list">
                                            <tr>
                                                <td class="pdb5">평가결과</td>
                                                <td class="pdb5 mono_100 tar">95점</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">레포트</td>
                                                <td class="pdb5 mono_100 tar">제출</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">설문</td>
                                                <td class="pdb5 mono_100 tar">응답</td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>

                    <div class="status_table_wrap">
                        <table class="status_table">
                        <thead>
                            <tr>
                                <td class="color_clr3 fwb600" style="width:50%;">유희영</td>
                                <td class="tar fwb">학습한 차수 <span class="num">5</span></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="detail_list_wrap border_right">
                                        <table class="detail_list">
                                            <tr>
                                                <td class="pdb5">평가결과</td>
                                                <td class="pdb5 mono_100 tar">95점</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">레포트</td>
                                                <td class="pdb5 mono_100 tar">제출</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">설문</td>
                                                <td class="pdb5 mono_100 tar">응답</td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                                <td>
                                    <div class="detail_list_wrap">
                                        <table class="detail_list">
                                            <tr>
                                                <td class="pdb5">평가결과</td>
                                                <td class="pdb5 mono_100 tar">95점</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">레포트</td>
                                                <td class="pdb5 mono_100 tar">제출</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">설문</td>
                                                <td class="pdb5 mono_100 tar">응답</td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>

                    <div class="status_table_wrap">
                        <table class="status_table">
                        <thead>
                            <tr>
                                <td class="color_clr3 fwb600" style="width:50%;">김정한</td>
                                <td class="tar fwb">학습한 차수 <span class="num">5</span></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="detail_list_wrap border_right">
                                        <table class="detail_list">
                                            <tr>
                                                <td class="pdb5">평가결과</td>
                                                <td class="pdb5 mono_100 tar">95점</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">레포트</td>
                                                <td class="pdb5 mono_100 tar">제출</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">설문</td>
                                                <td class="pdb5 mono_100 tar">응답</td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                                <td>
                                    <div class="detail_list_wrap">
                                        <table class="detail_list">
                                            <tr>
                                                <td class="pdb5">평가결과</td>
                                                <td class="pdb5 mono_100 tar">95점</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">레포트</td>
                                                <td class="pdb5 mono_100 tar">제출</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">설문</td>
                                                <td class="pdb5 mono_100 tar">응답</td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>

                    <div class="status_table_wrap last">
                        <table class="status_table">
                        <thead>
                            <tr>
                                <td class="color_clr3 fwb600" style="width:50%;">김민정</td>
                                <td class="tar fwb">학습한 차수 <span class="num">5</span></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="detail_list_wrap border_right">
                                        <table class="detail_list">
                                            <tr>
                                                <td class="pdb5">평가결과</td>
                                                <td class="pdb5 mono_100 tar">95점</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">레포트</td>
                                                <td class="pdb5 mono_100 tar">제출</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">설문</td>
                                                <td class="pdb5 mono_100 tar">응답</td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                                <td>
                                    <div class="detail_list_wrap">
                                        <table class="detail_list">
                                            <tr>
                                                <td class="pdb5">평가결과</td>
                                                <td class="pdb5 mono_100 tar">95점</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">레포트</td>
                                                <td class="pdb5 mono_100 tar">제출</td>
                                            </tr>
                                            <tr>
                                                <td class="pdb5">설문</td>
                                                <td class="pdb5 mono_100 tar">응답</td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>



                    </div>
                </div>
            </div>

         <!-- floating button -->
        <div class="fixBtmBtn">
            <button type="button" class="btn clr1 ld">평점 및 후기 자세히보기</button>
        </div>
        <!-- //floating button -->
        </div>
        <!-- //container -->

    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */
export default {
  name: 'components_tabheader',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
   data () {
    return {
      headerType: 2,
      langFlag: false,
    }
  },
  /* vue function */
  methods: {
    changeLang () {
      this.langFlag = !this.langFlag
    }
  }
}
</script>
