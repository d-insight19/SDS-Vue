<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery board request">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> 스크롤시  header 에 fixed 클래스 추가</p>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="hide-inner"> 
                        <p class="type">마감</p>                           
                        <p class="h-tit1">
                            <strong class="q-tit">단계형 다이어그램 (자전거 길) 단계형 다이어그램 단계형 다이어그램</strong>                                                        
                        </p>                       
                        <div class="info">
                            <p class="article">참여자수<span class="val">3명</span></p>
                            <p class="article">설문기간<span class="val">2018.10.10 ~ 2018.11.12</span></p>
                            <p class="desc">본 설문은 다이어그램에 관해 임직원들의 의견을 듣는 목적으로 시행하는 설문으로 많은 관심과 참여 부탁드립니다.</p>
                        </div> 
                    </div>
                </div>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner" style="padding-top:0">       

                        <ul class="progBox_wrap">
                            <h2 class="label-tit16">Q. 질문 1 입니다.</h2>
                            <li>
                                <strong>영어<span class="fr">50%(50/100명)</span></strong>  
                                <div class="progBox">
                                    <div class="bar1" style="width: 50%; height:8px; border-radius: 100px;"></div>                            
                                </div>
                            </li>
                            <li>
                                <p>중국어<span class="fr">40%(40/100명)</span> </p>  
                                <div class="progBox">
                                    <div class="bar5" style="width: 40%; height:8px; border-radius: 100px;"></div>                            
                                </div>
                            </li>
                            <li>
                                <p>일본어<span class="fr">5%(5/100명)</span> </p>  
                                <div class="progBox">
                                    <div class="bar5" style="width: 5%; height:8px; border-radius: 100px;"></div>                            
                                </div>
                            </li>
                             <li>
                                <p>기타<span class="fr">5%(5/100명)</span> </p>  
                                <div class="progBox">
                                    <div class="bar5" style="width: 5%; height:8px; border-radius: 100px;"></div>                            
                                </div>
                                <p class="desc">기타의견 : 프랑스어(10), 러시아어(4), 스페인어(8)</p>
                            </li>
                        </ul>    
                        <p class="divide_line"></p>

                        <ul class="progBox_wrap">
                            <h2 class="label-tit16">Q. 질문 1 입니다.</h2>
                            <li>
                                <strong>응답<span class="fr">85%(85/100명)</span></strong>  
                                <div class="progBox">
                                    <div class="bar1" style="width: 85%; height:8px; border-radius: 100px;"></div>                            
                                </div>
                            </li>                           
                        </ul>    
                        <p class="divide_line"></p> 

                        <h2 class="label-tit16">Q. 질문 1 입니다.</h2>
                        <ul class="diagram_wrap">                            
                            <div class="diagram"></div>
                            <li>
                                <p>직무과정<span class="percent fr"><span class="num">36</span>%(52명)</span></p>  
                            </li>
                            <li class="type4">
                                <p>경영 리더십<span class="percent fr"><span class="num">25</span>%(12명)</span></p>  
                            </li>
                            <li class="type5">
                                <p>외국어 과정<span class="percent fr"><span class="num">28</span>%(36명)</span></p>  
                            </li>
                            <li class="type2">
                                <p>금융과정<span class="percent fr"><span class="num">14</span>%(8명)</span></p>  
                            </li>
                            <li class="type3">
                                <p>교육과정<span class="percent fr"><span class="num">5</span>%(6명)</span></p>  
                            </li>                           
                        </ul>    
                        <p class="divide_line"></p> 

                        <h2 class="label-tit16">Q. 해당과정에 만족하십니까?</h2>  
                            <a class="respondent_num" href="#"><span class="ico arr up"></span> 응답자수 55</a>

                            <ul class="singleList type_1">
                                <li><a> A. 그냥 그랬음 </a></li>
                                <li><a> A. 만족스럽지 못했습니다. </a></li>
                                <li><a> A. 의견없음 </a></li>
                                <li><a> A. 매우 만족스러운 경험이었습니다. </a></li>
                                <li><a> A. 기회가 된다면 재수강을 하고 싶습니다. 기회가 된다면 재수강을 하고 싶습니다. </a></li>
                                <li><a> A. 잘 모르겠다. </a></li>
                                <li><a> A. 만족스럽지 못했습니다. </a></li>
                                <li><a> A. 의견없음 </a></li>
                                <li><a> A. 매우 만족스러운 경험이었습니다. </a></li>
                                <li><a> A. 매우 만족스러운 경험이었습니다. </a></li> 
                            </ul>                                          
                       
                        <!-- 더보기 -->
                        <a href="#" class="btn sm add w100p mt8" @click="addList1()" ><span class="ico"></span>더보기 (45)</a>


                    </div>
                </div>
            </div>
            <!-- //contents -->

            



        </div>
        <!-- //container --> 
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'Study_02_studyquestion_detail',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
