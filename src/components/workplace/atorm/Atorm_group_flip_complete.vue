<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm flip pd70">
        <!-- header  -->
        <div id="header" class="expand">          
          <!--<div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">이러닝 제작</p>
          </div>-->
          <div class="hide_header pl18 pr18" style="padding-top:30px;">
            <p class="font_30 fwb">집합 제작</p>
            <div class="stepper mb30">
                <div class="clearfix">
                    <h2 class="tit">완료</h2>
                    <div class="num">
                        <strong class="color_clr2">4</strong>/<span>4</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:100%"></div>
                </div>
                <p class="txt-desc">학습과정의 기본정보를 입력합니다.</p>
            </div>
            <p class="hr_2 mb0"></p>
          </div>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner pdb20" style="padding-top:0;">

                <ul class="confirm_item_detail">
                    <li class="open" @click="toggleMenu($event)">
                        <span>필수정보</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner pt0">
                            <!-- list -->
                            <ul class="singleList type1">
                                <li class="mb20">
                                    <table>
                                            <tr>
                                                <td>
                                                    <div class="thum">
                                                        <div class="thumbnail">
                                                            <!--<img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">-->
                                                        </div>
                                                        <!--<div class="circle">
                                                            <span class="ico photo_16"></span>
                                                        </div>-->
                                                    </div>
                                                </td>
                                                <td class="txt-desc">
                                                    <strong class="label-tit14">과정명</strong>
                                                    <p>1%의 핵심인재를 내사람으로 만들어 보템이 되기</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>과정코드</td>
                                                <td class="fwr">K1111</td>
                                            </tr>
                                            <tr>
                                                <td>학습시간</td>
                                                <td class="fwr">3시간</td>
                                            </tr>
                                            <tr>
                                                <td>학습기간</td>
                                                <td class="fwr">3일(Days)</td>
                                            </tr>
                                    </table>
                                </li>
                            </ul>
                            <!-- //list -->
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>선택정보</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>학습목차 및 구성컨텐츠</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>수료기준</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            
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
                <li><button type="button" class="btn md clr1">완료</button></li>
            </ul>
        </div>
        
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */
export default {
  name: 'Login_jointerms',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
     toggleFlag: true
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
