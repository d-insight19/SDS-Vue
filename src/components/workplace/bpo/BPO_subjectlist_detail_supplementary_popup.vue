<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo_subjectlist">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">보강 등록</p><button type="button" class="btn14 color_clr2">저장</button>                
            </div>
            <!-- //header -->
       
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <div class="tabCnt dpb pt0"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->   
                        
                        <!-- list -->
                        <ul class="multiList type2">
                            <li>
                                <strong class="label-tit14">학습 계획일시</strong>                                
                                <slp-select width="100%" class="mt8">
                                    <option selected>2018.11.30</option>
                                    <option>2018.12.19</option>
                                    <option>2018.12.30</option>
                                </slp-select>
                                <p class="contents mt8">20시 00분 ~ 22시 30분 (총 02시간 00분) </p>
                            </li>
                            <li>
                                <div class="makeup_lesson mt20">
                                    <p class="title_line mb20" style="padding-bottom:12px">
                                    <strong class="label-tit14">보강 일시1</strong>                                                                 
                                    </p>
                                    <div class="calender mt0">2018.12.29 <a href="#"><span class="ico calender_24 fr"></span></a></div>                           
                                    <slp-select width="100%" class="mt8">
                                        <option selected>20시 00분 ~ 21시 00분 (총01시간 00분)</option>
                                    </slp-select>
                                </div>                                
                                <slp-button class="md attend_check mt9 disable"><span class="ico plus done"></span>보강 일시 추가</slp-button>
                            </li>
                            <li>
                                <ul class="time_schedule">
                                    <li>
                                        <dl>
                                            <dt>총 수업시간</dt>
                                            <dd><span class="num">02</span>시간 <span class="num">00</span>분</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>보강시간</dt>
                                            <dd><span class="num">01</span>시간 <span class="num">00</span>분</dd>
                                        </dl>                                    
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong class="label-tit14">보강 사유</strong>
                                <slp-text-field placeholder="보강사유 입력"></slp-text-field>
                            </li>                                                                                                        
                        </ul>
                       
                        <!-- //list -->
                </div>   

            </div>
          </div>
        </div>

      </div>
      <!-- //container -->  

      <!-- layer wrap -->
        <slp-popup confirmInput="닫기">
            <div class="ly-body">
                <p><span class="ly-info">[현재]</span> 2018.08.01(월)<br>
                   <span class="ly-info">[변경]</span> 2018.08.15(월) <br>
                   <span class="time">20:00~21:00(1h)</span>
                </p>
            </div>
        </slp-popup>
        <!-- //layer wrap -->    
    </div>
    <!-- //wrap -->

</template>

<script>
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
      headerType: 2
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
