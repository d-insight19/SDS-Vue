<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery MySpace">

        <!-- header -->
        <div id="header" class="fixed tab">
            <div class="header_inner line1">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">나의 공간</p>
            </div>
            <div class="header_inner line2 tabMenu scroll-x">
                <ul class="scrollTab">
                    <li><a href="#tab1">정규 학습</a></li><!-- selected class "on" -->
                    <li><a href="#tab2">자율 학습</a></li>
                    <li><a href="#tab3">학습 계획</a></li>
                    <li><a href="#tab4">다운로드</a></li>
                    <li><a href="#tab5">나의 지식 CLIPing</a></li>
                    <li><a href="#tab6">학습 관리</a></li>
                    <li class="on"><a href="#tab7">학습 통계</a></li>
                    <li><a href="#tab8">학점 현황</a></li>
                    <li><a href="#tab9">포인트 현황</a></li>
                    <li><a href="#tab10">쿠폰 관리</a></li>
                </ul>
            </div>
            <div class="blur_wrap">
                <div class="left blur"></div>
                <div class="right blur"></div>
            </div>
        </div>
        <!-- //header -->

        <div id="content" class="list">

          <div class="cell">
            <div class="filterArea ml-18 mr-18">
                <p class="font_15 mono_80 fwb">
                    나의 활동 <span class="ico down"></span>
                    <span class="ico filter"></span>
                </p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb14"> 나의 참여 활동 </h2>
                <!-- activity -->
                <table class="activity">
                    <tbody>
                        <tr>
                            <td>
                                <p class="title">게시글 작성 수</p>
                                <p class="contents"><span class="ico test_32"></span><span class="number">105</span> 개</p>
                            </td>
                            <td>
                                <p class="title">댓글 작성 수</p>
                                <p class="contents"><span class="ico bubble_32"></span><span class="number">1,203</span> 개</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="title">좋아요 클릭 수</p>
                                <p class="contents"><span class="ico thumb2_32"></span><span class="number">50</span> 회</p>
                            </td>
                            <td>
                                <p class="title">평가 콘텐츠 별점</p>
                                <p class="contents"><span class="ico rate_32"></span><span class="number">4.5</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="title">공유한 콘텐츠 수</p>
                                <p class="contents"><span class="ico share_32"></span><span class="number">75</span> 개</p>
                            </td>
                            <td>
                                <p class="title">설문 참여 횟수</p>
                                <p class="contents"><span class="ico graph_32"></span><span class="number">12</span> 회</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- //activity -->
                <p class="hr mb0"></p>
            </div>
          </div>

          <div class="cell">
            <div class="inner">
                <h2 class="h-tit2 fwb600 mb14"> 나의 ATORM </h2>
                <!-- activity -->
                <table class="activity mb30">
                    <tbody>
                        <tr>
                            <td>
                                <p class="title">제작 과정 수</p>
                                <p class="contents"><span class="ico newfolder_32"></span><span class="number">105</span> 개</p>
                            </td>
                            <td>
                                <p class="title">운영 과정 수</p>
                                <p class="contents"><span class="ico repair_32"></span><span class="number">1,203</span> 개</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="title">평균 별점</p>
                                <p class="contents"><span class="ico rate_32"></span><span class="number">3.2</span></p>
                            </td>
                            <td>
                                <p class="title">공유 수</p>
                                <p class="contents"><span class="ico share_32"></span><span class="number">50</span> 회</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="title">제작과정 수강자 수</p>
                                <p class="contents"><span class="ico people_32"></span><span class="number">275</span> 명</p>
                            </td>
                            <td>
                                <p class="title">평균 수료율</p>
                                <p class="contents"><span class="ico chart_32"></span><span class="number">60</span> %</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- //activity -->

                <!-- basic bar4 -->
                <h2 class="label-tit16 fwb w100p mb10">분야별 제작 현황</h2>
                <ul class="progBox_wrap2 mb20">
                    <li>
                        <div class="progText">
                            Business
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 8%; height:8px;"></div>
                                <div class="progMent">8%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Biz.Professional
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 19%; height:8px;"></div>
                                <div class="progMent">19%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Leadership
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 4%; height:8px;"></div>
                                <div class="progMent">4%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Work Smart
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 17%; height:8px;"></div>
                                <div class="progMent">17%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Global
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 50%; height:8px;"></div>
                                <div class="progMent">27%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Family / Life
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 20%; height:8px;"></div>
                                <div class="progMent">20%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            Humanities
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar1" style="width: 6%; height:8px;"></div>
                                <div class="progMent">6%</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- //basic bar4 -->
                <!-- basic bar4 -->
                <h2 class="label-tit16 fwb w100p mb10">유형별 제작 현황</h2>
                <ul class="progBox_wrap2 mb20">
                    <li>
                        <div class="progText">
                            이러닝
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar2" style="width: 50%; height:8px;"></div>
                                <div class="progMent">40%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            집합
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar2" style="width: 9%; height:8px;"></div>
                                <div class="progMent">9%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            플립러닝
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar2" style="width: 21%; height:8px;"></div>
                                <div class="progMent">21%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            사내영상
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar2" style="width: 30%; height:8px;"></div>
                                <div class="progMent">30%</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- //basic bar4 -->
                <!-- basic bar4 -->
                <h2 class="label-tit16 fwb w100p mb10">학습 아이템별 제작 현황</h2>
                <ul class="progBox_wrap2">
                    <li>
                        <div class="progText">
                            동영상
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar4" style="width: 6%; height:8px;"></div>
                                <div class="progMent">6%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            링크
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar4" style="width: 9%; height:8px;"></div>
                                <div class="progMent">9%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            문서
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar4" style="width: 3%; height:8px;"></div>
                                <div class="progMent">3%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            이미지
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar4" style="width: 50%; height:8px;"></div>
                                <div class="progMent">50%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            오디오
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar4" style="width: 12%; height:8px;"></div>
                                <div class="progMent">12%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            유튜브
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar4" style="width: 6%; height:8px;"></div>
                                <div class="progMent">6%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            TED
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar4" style="width: 4%; height:8px;"></div>
                                <div class="progMent">4%</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="progText">
                            퀴즈
                        </div>
                        <div class="progBoxArea">
                            <div class="progBox bg-x">
                                <div class="bar4" style="width: 5%; height:8px;"></div>
                                <div class="progMent">5%</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- //basic bar4 -->
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
  name: 'MySpace_studystatistics_activity',
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
