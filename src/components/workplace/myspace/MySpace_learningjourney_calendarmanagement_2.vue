<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="fixed">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">2018년 9월 16일</p>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">

          <div class="cell">
            <div class="inner ml-18 mr-18 pt0">
                <table class="calendarmanagement">
                    <thead>
                        <tr>
                            <th scope="col"><span>일</span></th>
                            <th scope="col"><span>월</span></th>
                            <th scope="col"><span>화</span></th>
                            <th scope="col"><span>수</span></th>
                            <th scope="col"><span>목</span></th>
                            <th scope="col"><span>금</span></th>
                            <th scope="col"><span>토</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>13</span></td>
                            <td><span>14</span></td>
                            <td><span>15</span></td>
                            <td><span class="clr1 mono_0">16</span></td>
                            <td><span>17</span></td>
                            <td><span>18</span></td>
                            <td><span>19</span></td>
                        </tr>
                    </tbody>
                </table>
                <p class="hr mt0 mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb0">
                    학습 계획 <span class="color_clr2 fwl ml5">3</span> <span class="mono_50 font_18 fwl">개</span>
                    <slp-checkbox type="button" value="true" class="fr fwl"><span class="o6 mr6">+</span> 계획 추가</slp-checkbox>
                </h2>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb0">데이터 특성 알아보기</h2>
                
                <!-- list -->
                <ul class="multiList type2">
                    <li>
                        <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">1차시</p>
                                <p class="title">학습 소개 Orientation </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">2차시</p>
                                <p class="title">제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’ 제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’ 제이크 냅 직강: 기획부터 실행까지 5일만에 끝내는 ‘SPRINT’</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
          </div>

          <div class="cell">
            <div class="inner pdb25">
                <h2 class="h-tit2 fwb600 mb0">업무에 적용해보기</h2>
                
                <!-- list -->
                <ul class="multiList type2">
                    <li class="open">
                        <div class="download_detail">
                            <div class="txt_wrap">
                                <p class="icon_txt color_clr3">1차시</p>
                                <p class="title">HCI 개론 언어 특성 활용하여 실제 업무에서 사용하는 방법 접하기</p>
                            </div>
                        </div>
                    </li>
                    <li class="open">
                        <div class="sub_content">
                            <p class="sub_content_title color_clr1 clr4">변수와 데이터 타입</p>
                            <!-- list -->
                            <ul class="multiList type2">
                                <li>
                                    <div class="download_detail">
                                        <div class="icon_wrap">
                                            <span class="ico play_28"></span>
                                        </div>
                                        <div class="txt_wrap">
                                            <p class="title">데이터와 배열 활용하기</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="download_detail">
                                        <div class="icon_wrap">
                                            <span class="ico ebook_28"></span>
                                        </div>
                                        <div class="txt_wrap">
                                            <p class="title">실행 순서 제어하기</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="download_detail">
                                        <div class="icon_wrap">
                                            <span class="ico headphone_28"></span>
                                        </div>
                                        <div class="txt_wrap">
                                            <p class="title">자바의 개념에 대하여</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- //list -->
                            <p class="sub_content_title color_clr1 clr4">특성 활용하기</p>
                            <!-- list -->
                            <ul class="multiList type2">
                                <li>
                                    <div class="download_detail">
                                        <div class="icon_wrap">
                                            <span class="ico play_28"></span>
                                        </div>
                                        <div class="txt_wrap">
                                            <p class="title">자바의 특징을 알아보기</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- //list -->
                        </div>
                    </li>
                </ul>
                <!-- //list -->
            </div>
          </div>

        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><slp-button class="lg clr1">완료</slp-button></li>
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
  name: 'MySpace_learningjourney_calendarmanagement_2',
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
