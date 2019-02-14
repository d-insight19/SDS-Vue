<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery atorm atorm_confirmlist_detail">

        <!-- header  -->
        <div id="header" class="fixed">          
          <div class="header_inner line1">
            <button type="button" class="btn only prev"><span class="ico">이전</span></button>
            <p class="header_text  font_18">지식영상 과정제작</p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner pdb20">

                <ul class="confirm_item_detail">
                    <li class="open" @click="toggleMenu($event)">
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
                                                        <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                                    </div>
                                                    <div class="circle">
                                                        <span class="ico atorm_photo_edit_solid_16"></span>
                                                    </div>
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
                                    <ul class="fixTab w100p">
                                        <li>
                                            <slp-select placeholder="시간" width="100%" class="mt8 mr8">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                        <li>
                                            <slp-select placeholder="분" width="100%" class="mt8 mr8">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                        <li>
                                            <slp-select placeholder="초" width="100%" class="mt8">
                                                <option>전체</option>
                                            </slp-select>
                                        </li>
                                    </ul>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14 tit_essential">학습기간</strong>
                                    <ul class="fixTab mt10">
                                        <li>
                                            <slp-radio name="difficulty" innerCircle="true" class="mr20">학습기간 제한 없음</slp-radio>
                                        </li>
                                        <li>
                                            <slp-radio name="difficulty" innerCircle="true">기간 설정</slp-radio>
                                        </li>
                                    </ul>
                                    <slp-select placeholder="1개월" width="100%" class="mt10">
                                        <option>전체</option>
                                    </slp-select>
                                </li>
                                <li>
                                    <strong class="label-tit14 tit_essential">학습 아이템</strong>
                                    <slp-button class="sm add w100p mt8" @click="addList1()" ><span class="ico"></span>파일 추가</slp-button>
                                    <p class="tit_desc font_13 mono_50 mt10 fwr">첨부파일 유형: mp4, mp3, ppt, pptx, doc, docx, pdf</p> 
                                </li>
                            </ul>
                            <!-- //list -->
                        </div>
                    </li>
                    <li @click="toggleMenu($event)">
                        <span>선택정보</span>
                        <span class="accordion_arrow"></span>
                        
                        <div class="confirm_item_detail_inner pt0">
                            <!-- list -->
                            <ul class="singleList type1">
                                <li class="mb20">
                                    <p class="label-tit14">학습대상</p>
                                    <slp-select placeholder="전체" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
                                </li>
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
                                    <strong class="label-tit14">난이도</strong>
                                    <slp-select placeholder="선택안함" width="100%" class="mt8">
                                        <option>전체</option>
                                    </slp-select>
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
                                    <strong class="label-tit14">강사명</strong>
                                    <slp-text-field placeholder="강사명을 입력하세요" class="mt6"></slp-text-field>
                                </li>
                                <li class="mb20">
                                    <strong class="label-tit14">강사 소개</strong>
                                    <slp-text-field placeholder="강사 소개를 입력하세요" class="mt6"></slp-text-field>
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
            <button type="button" class="btn clr1 ld">완료</button>
        </div>
        <!-- //floating button --> 
      </div>
      <!-- //container -->    

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Atorm_shortclip_1',
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
