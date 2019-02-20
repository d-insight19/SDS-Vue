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
          <div class="hide_header pl18 pr18" style="padding-top:36px;">
            <p class="label-tit30 pdb12">플립러닝 제작</p>
            <div class="stepper mb30">
                <div class="clearfix">
                    <h2 class="tit">과정구성</h2>
                    <div class="num">
                        <strong class="color_clr2">2</strong>/<span>4</span>
                    </div>
                </div>
                    <div class="progBox">
                    <div class="bar clr2" style="width:50%"></div>
                </div>
                <p class="txt-desc">제작하는 학습과정에 원하는 아이템을 추가하여 과정을 구성합니다.</p>
            </div>
            <p class="hr mb0"></p>
          </div>
        </div>
        <!-- //header -->
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner pdb20">

                <ul class="confirm_item_detail">
                    <li class="open" @click="toggleMenu($event)">
                        <span>사전학습</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner pdb27 pt0">
                            <!-- list -->                            
                            <div class="cell">
                                <div class="inner atorm_material"> 
                                    <div class="underline_parents">
                                    <slp-text-field classObject="underline" placeholder="사전학습명을 입력하세요"></slp-text-field>  
                                    </div>                      
                                </div>
                            </div>
                            <!-- //list -->

                            <div class="cell">
                                <div class="atorm_material">                                   
                                    
                                    <!-- list -->
                                    <ul>
                                        <li class="open">
                                            <div class="download_detail mt26">                                                
                                                <h2 class="label-tit16 color_clr1 fwb600">아이템학습</h2>
                                            </div>
                                            <div class="sub_content">
                                                <!-- list add item -->
                                                <ul class="multiList type2">
                                                    <li class="border_none">
                                                        <div class="download_detail">
                                                            <div class="icon_wrap">
                                                                <span class="ico play_28"></span>
                                                            </div>
                                                            <div class="txt_wrap">
                                                                <p class="title">데이터와 배열 활용하기</p>
                                                            </div>
                                                            <span class="fr ico deletemode_20"></span>
                                                        </div>
                                                    </li>
                                                    <li class="border_none">
                                                        <div class="download_detail">
                                                            <div class="icon_wrap">
                                                                <span class="ico play_28"></span>
                                                            </div>
                                                            <div class="txt_wrap">
                                                                <p class="title">실행 순서 제어하기</p>
                                                            </div>
                                                            <span class="fr ico deletemode_20"></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <!-- //list add item -->
                                            <div class="sub_content_add">
                                                <span class="chip clr2 font_14">+ 아이템 추가</span>
                                            </div>
                                        </div>
                                        </li>
                                        <li class="open">
                                            <div class="download_detail">
                                                <h2 class="label-tit16 color_clr1 fwb600">레포트</h2>
                                            </div>
                                            <div class="sub_content">
                                                <!-- list add work -->
                                                <ul class="multiList type2">
                                                    <li class="border_none">
                                                        <div class="download_detail">
                                                            <div class="icon_wrap">
                                                                <span class="ico poll_line_28"></span>
                                                            </div>
                                                            <div class="txt_wrap">
                                                                <p class="title">데이터와 배열 활용하기</p>
                                                            </div>
                                                            <span class="fr ico deletemode_20"></span>
                                                        </div>
                                                    </li>
                                                    <li class="border_none">
                                                        <div class="download_detail">
                                                            <div class="icon_wrap">
                                                                <span class="ico poll_line_28"></span>
                                                            </div>
                                                            <div class="txt_wrap">
                                                                <p class="title">실행 순서 제어하기</p>
                                                            </div>
                                                            <span class="fr ico deletemode_20"></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <!-- //list add work -->
                                                <div class="sub_content_add">
                                                    <span class="chip clr2 font_14">+ 레포트 추가</span>
                                                </div>
                                            </div>
                                        </li>
                                       <li class="open">
                                            <div class="download_detail">
                                                <h2 class="label-tit16 color_clr1 fwb600">평가</h2>  
                                            </div> 
                                            <div class="sub_content"> 
                                                <div class="sub_content_type2"> 
                                                    <ul class="score_list">
                                                        <li class="label-tit16">문항배점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                        </li>
                                                         <li class="label-tit16">총점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                        </li>
                                                    </ul>
                                                    <ul class="w64List tac pdb32">
                                                        <li class="mr40">
                                                            <p class="mono_50 font_14 mb5">선다형</p>
                                                            <p class="mb15"><span class="ico multiplechoice_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                                            <slp-button class="xxxs mono_80">추가</slp-button>
                                                        </li>
                                                        <li class="mr40">
                                                            <p class="mono_50 font_14 mb5">OX형</p>
                                                            <p class="mb15"><span class="ico ox_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                                            <slp-button class="xxxs mono_80">추가</slp-button>
                                                        </li>
                                                        <li>
                                                            <p class="mono_50 font_14 mb5">단답형</p>
                                                            <p class="mb15"><span class="ico shortanswer_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                                            <slp-button class="xxxs mono_80">추가</slp-button>
                                                        </li>
                                                    </ul>

                                                    <div class="evaluationList_box">
                                                        <!-- list -->
                                                        <ul class="evaluationList">
                                                            <li>
                                                                <p class="multiline font_16 mono_80">
                                                                    <span class="ico multiplechoice_32"></span>
                                                                    방해요소에 대한 설명이다. 틀린 것을 고르시오.
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p class="multiline line2 font_16 mono_80">
                                                                    <span class="ico shortanswer_32"></span>
                                                                    의사소통의 기본 요소 5가지를 적으시오.
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p class="multiline line2 font_16 mono_80">
                                                                    <span class="ico ox_32"></span>
                                                                    위기관리는 처음 위기 상황을 감지했을 때 미리 밝히고 해결하는게 좋다. 
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p class="multiline line2 font_16 mono_80">
                                                                    <span class="ico multiplechoice_32"></span>
                                                                    위기관리는 처음 위기 상황을 감지했을 때 미리 밝히고 해결하는게 좋다. 
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p class="multiline line2 font_16 mono_80">
                                                                    <span class="ico shortanswer_32"></span>
                                                                    리스크 분석 프로세스에 대한 설명이다. 다음 중 옳은 것을 고르시오. 
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                        </ul>
                                                        <!-- //list -->                                                           
                                                    </div>                    
                                                </div>                    

                                            </div>                                        
                                        </li>                                       
                                       
                                    </ul>
                                    <!-- //list -->                                    
                                </div>
                            </div>

                        </div>
                    </li>
                    
                    <li @click="toggleMenu($event)">
                        <span>집합강의</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner pdb27 pt0">
                            <!-- list -->                           
                            <div class="cell">
                                <div class="inner atorm_material"> 
                                    <div class="underline_parents">
                                    <slp-text-field classObject="underline" placeholder="집합강의명을 입력하세요"></slp-text-field>  
                                    </div>                      
                                </div>
                            </div>
                            <!-- //list -->

                            <div class="cell">
                                <div class="atorm_material">                                   
                                    
                                    <!-- list -->
                                    <ul>
                                        <li class="open">
                                            <div class="download_detail mt26">                                                
                                                <h2 class="label-tit16 color_clr1 fwb600">아이템학습</h2>
                                            </div>
                                            <div class="sub_content">
                                                <div class="sub_content_add">
                                                    <span class="chip clr2 font_14">+ 아이템 추가</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="open">
                                            <div class="download_detail">
                                                <h2 class="label-tit16 color_clr1 fwb600">레포트</h2>
                                            </div>
                                            <div class="sub_content">
                                                <div class="sub_content_add">
                                                    <span class="chip clr2 font_14">+ 레포트 추가</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="open">
                                            <div class="download_detail">
                                                <h2 class="label-tit16 color_clr1 fwb600">평가</h2>  
                                            </div> 
                                            <div class="sub_content"> 
                                                <div class="sub_content_type2"> 
                                                    <ul class="score_list">
                                                        <li class="label-tit16">문항배점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                        </li>
                                                         <li class="label-tit16">총점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                        </li>
                                                    </ul>
                                                    <ul class="w64List tac pdb32">
                                                        <li class="mr40">
                                                            <p class="mono_50 font_14 mb5">선다형</p>
                                                            <p class="mb15"><span class="ico multiplechoice_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                                            <slp-button class="xxxs mono_80">추가</slp-button>
                                                        </li>
                                                        <li class="mr40">
                                                            <p class="mono_50 font_14 mb5">OX형</p>
                                                            <p class="mb15"><span class="ico ox_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                                            <slp-button class="xxxs mono_80">추가</slp-button>
                                                        </li>
                                                        <li>
                                                            <p class="mono_50 font_14 mb5">단답형</p>
                                                            <p class="mb15"><span class="ico shortanswer_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                                            <slp-button class="xxxs mono_80">추가</slp-button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>                                        
                                        </li>                                       
                                       
                                    </ul>
                                    <!-- //list -->                                    
                                </div>
                            </div>

                        </div>
                    </li>

                    <li @click="toggleMenu($event)">
                        <span>사후학습</span>
                        <span class="accordion_arrow"></span>
                        <div class="confirm_item_detail_inner pdb27 pt0">
                            <!-- list -->                            
                            <div class="cell">
                                <div class="inner atorm_material"> 
                                    <div class="underline_parents">
                                    <slp-text-field classObject="underline" value="데이터 특성 알아보기"></slp-text-field>  
                                    </div>                      
                                </div>
                            </div>
                            <!-- //list -->

                            <div class="cell">
                                <div class="atorm_material">                                   
                                    
                                    <!-- list -->
                                    <ul>
                                        <li class="open">
                                            <div class="download_detail mt26">                                                
                                                <h2 class="label-tit16 color_clr1 fwb600">아이템학습</h2>
                                            </div>
                                            <div class="sub_content">
                                                <!-- list add item -->
                                                <ul class="multiList type2">
                                                    <li class="border_none">
                                                        <div class="download_detail">
                                                            <div class="icon_wrap">
                                                                <span class="ico play_28"></span>
                                                            </div>
                                                            <div class="txt_wrap">
                                                                <p class="title">데이터와 배열 활용하기</p>
                                                            </div>
                                                            <span class="fr ico deletemode_20"></span>
                                                        </div>
                                                    </li>
                                                    <li class="border_none">
                                                        <div class="download_detail">
                                                            <div class="icon_wrap">
                                                                <span class="ico play_28"></span>
                                                            </div>
                                                            <div class="txt_wrap">
                                                                <p class="title">실행 순서 제어하기</p>
                                                            </div>
                                                            <span class="fr ico deletemode_20"></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <!-- //list add item -->
                                                <div class="sub_content_add">
                                                    <span class="chip clr2 font_14">+ 아이템 추가</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="open">
                                            <div class="download_detail">
                                                <h2 class="label-tit16 color_clr1 fwb600">레포트</h2>
                                            </div>
                                            <div class="sub_content">
                                                <!-- list add work -->
                                                <ul class="multiList type2">
                                                    <li class="border_none">
                                                        <div class="download_detail">
                                                            <div class="icon_wrap">
                                                                <span class="ico poll_line_28"></span>
                                                            </div>
                                                            <div class="txt_wrap">
                                                                <p class="title">데이터와 배열 활용하기</p>
                                                            </div>
                                                            <span class="fr ico deletemode_20"></span>
                                                        </div>
                                                    </li>
                                                    <li class="border_none">
                                                        <div class="download_detail">
                                                            <div class="icon_wrap">
                                                                <span class="ico poll_line_28"></span>
                                                            </div>
                                                            <div class="txt_wrap">
                                                                <p class="title">실행 순서 제어하기</p>
                                                            </div>
                                                            <span class="fr ico deletemode_20"></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <!-- //list add work -->
                                                <div class="sub_content_add">
                                                    <span class="chip clr2 font_14">+ 레포트 추가</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="open">
                                            <div class="download_detail">
                                                <h2 class="label-tit16 color_clr1 fwb600">평가</h2>  
                                            </div> 
                                            <div class="sub_content"> 
                                                <div class="sub_content_type2"> 
                                                    <ul class="score_list">
                                                        <li class="label-tit16">문항배점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                        </li>
                                                         <li class="label-tit16">총점 <span class="fr"><span class="score">0</span> <span class="label-tit15 mono_80">점</span></span>
                                                        </li>
                                                    </ul>
                                                    <ul class="w64List tac pdb32">
                                                        <li class="mr40">
                                                            <p class="mono_50 font_14 mb5">선다형</p>
                                                            <p class="mb15"><span class="ico multiplechoice_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                                            <slp-button class="xxxs mono_80">추가</slp-button>
                                                        </li>
                                                        <li class="mr40">
                                                            <p class="mono_50 font_14 mb5">OX형</p>
                                                            <p class="mb15"><span class="ico ox_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                                            <slp-button class="xxxs mono_80">추가</slp-button>
                                                        </li>
                                                        <li>
                                                            <p class="mono_50 font_14 mb5">단답형</p>
                                                            <p class="mb15"><span class="ico shortanswer_32"></span> <span class="fwb600 mono_100 font_30">0</span></p>
                                                            <slp-button class="xxxs mono_80">추가</slp-button>
                                                        </li>
                                                    </ul>

                                                    <div class="evaluationList_box">
                                                        <!-- list -->
                                                        <ul class="evaluationList">
                                                            <li>
                                                                <p class="multiline font_16 mono_80">
                                                                    <span class="ico multiplechoice_32"></span>
                                                                    방해요소에 대한 설명이다. 틀린 것을 고르시오.
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p class="multiline line2 font_16 mono_80">
                                                                    <span class="ico shortanswer_32"></span>
                                                                    의사소통의 기본 요소 5가지를 적으시오.
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p class="multiline line2 font_16 mono_80">
                                                                    <span class="ico ox_32"></span>
                                                                    위기관리는 처음 위기 상황을 감지했을 때 미리 밝히고 해결하는게 좋다. 
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p class="multiline line2 font_16 mono_80">
                                                                    <span class="ico multiplechoice_32"></span>
                                                                    위기관리는 처음 위기 상황을 감지했을 때 미리 밝히고 해결하는게 좋다. 
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p class="multiline line2 font_16 mono_80">
                                                                    <span class="ico shortanswer_32"></span>
                                                                    리스크 분석 프로세스에 대한 설명이다. 다음 중 옳은 것을 고르시오. 
                                                                    <span class="ico del"></span>
                                                                </p>
                                                            </li>
                                                        </ul>
                                                        <!-- //list -->                                                           
                                                    </div>                    
                                                </div>                    

                                            </div>                                        
                                        </li>                                       
                                       
                                    </ul>
                                    <!-- //list -->                                    
                                </div>
                            </div>

                        </div>
                    </li>
                </ul>

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
              <li><button type="button" class="btn ld">이전</button></li>
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
  name: 'Atorm_e-learning_basic_1',
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
