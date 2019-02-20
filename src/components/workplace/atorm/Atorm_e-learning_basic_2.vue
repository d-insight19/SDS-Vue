<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm atorm_confirmlist_detail">

        <!-- header  -->
        <div id="header" class="expand">          
          <!--<div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">이러닝 제작</p>
          </div>-->
          <div class="hide_header pl18 pr18" style="padding-top:30px;">
            <p class="font_30 fwb">이러닝 제작</p>
            <div class="stepper mb30">
                <div class="clearfix">
                    <h2 class="tit">기본정보</h2>
                    <div class="num">
                        <strong class="color_clr2">1</strong>/<span>5</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:20%"></div>
                </div>
                <p class="txt-desc">학습과정의 기본정보를 입력합니다.</p>
            </div>
            <p class="hr mb0"></p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner pdb20">

                <ul class="confirm_item_detail">
                    <li @click="toggleMenu($event)">
                        <span>필수정보</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner pt0">
                            <!-- list -->
                            <ul class="singleList type1">
                                <li class="mb20">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>
                                                    <div class="thum">
                                                        <div class="thumbnail">
                                                            <!--<img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">-->
                                                        </div>
                                                        <!--<div class="circle">
                                                            <span class="ico atorm_photo_edit_solid_16"></span>
                                                        </div>-->
                                                    </div>
                                                </td>
                                                <td class="txt-desc">
                                                    <strong class="label-tit14 tit_essential">과정명</strong>
                                                    <slp-text-field placeholder="과정명을 입력하세요" class="mt8"></slp-text-field>
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14 tit_essential">학습시간 설정</strong>
                                    <ul class="fixTab w100p mt10">
                                        <li>
                                            <slp-select placeholder="시간" width="100%" class="mr8">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                        <li>
                                            <slp-select placeholder="분" width="100%" class="mr8">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                        <li>
                                            <slp-select placeholder="초" width="100%">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                    </ul>
                                </li>
                                <li class="mb20">
                                    <ul class="fixTab w100p">
                                        <li>
                                            <strong class="label-tit14 tit_essential">학습 기간 시작일</strong>
                                            <slp-select placeholder="2018.10.10" width="100%" class="mt8 mr8">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                        <li>
                                            <strong class="label-tit14 tit_essential">학습 기간 종료일</strong>
                                            <slp-select placeholder="2018.12.10" width="100%" class="mt8">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                    </ul>
                                </li>

                                <li class="mb20">
                                    <strong class="label-tit14 tit_essential">학습순서</strong>
                                    <div class="rdoSelBox mt8">    
                                        <slp-radio name="question">순차학습</slp-radio>
                                        <slp-radio name="question">랜덤학습</slp-radio>
                                    </div>
                                </li>
                            </ul>
                            <!-- //list -->
                        </div>
                    </li>
                    <li class="open" @click="toggleMenu($event)">
                        <span>선택정보</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            <!-- list -->
                            <ul class="singleList type1">
                                <li class="mb20">
                                    <strong class="label-tit14">학습분류</strong>
                                    <slp-select placeholder="대분류" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                    <slp-select placeholder="중분류" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                    <slp-select placeholder="소분류" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">문의방법</strong>
                                    <div class="rdoSelBox mt8">    
                                        <slp-radio name="question">연락처</slp-radio>
                                        <slp-radio name="question">이메일</slp-radio>
                                    </div>
                                    <slp-text-field placeholder="연락처, 이메일 선택 후 정보를 입력하세요" class="mt8"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <p class="label-tit14">학습대상</p>
                                    <slp-select placeholder="전체" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">난이도</strong>
                                    <slp-select placeholder="선택안함" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">강사명</strong>
                                    <slp-text-field placeholder="강사명을 입력하세요" class="mt6"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">TAG</strong>
                                    <slp-text-field placeholder="예시) 의사소통, 커뮤니케이션" class="mt8"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">역량</strong>
                                    
                                    <ul class="fixTab mt10">
                                        <li>
                                            <slp-select placeholder="선택" width="100%" class="mr8">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                        <li>
                                            <slp-select placeholder="선택" width="100%">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                    </ul>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">학습목표</strong>
                                    <slp-text-field placeholder="학습 목표를 입력하세요" class="mt6"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">과정 소개</strong>
                                    <slp-text-field placeholder="과정 소개를 입력하세요" class="mt6"></slp-text-field>
                                </li>
                            </ul>
                            <!-- //list -->
                        </div>
                    </li>
                </ul>

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
              <li><button type="button" class="btn ld">취소</button></li>
              <li><button type="button" class="btn ld clr1">다음</button></li>
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
  name: 'Atorm_e-learning_basic_2',
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
