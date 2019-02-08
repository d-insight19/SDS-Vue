<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery eduperson bpo_subjectlist">

            <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
            <div v-if="headerType == '1'" id="header" class="expand">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text  font_19"> </p>
                </div>  
                <div class="hide_header" style="background:#e6eaf5; padding-top:76px; padding-bottom:26px">                
                    <div class="hide-inner"> 
                        <span class="chip">정규</span>     
                        <p class="h-tit1">
                            <strong class="q-tit">The Complete App Design Course - UX, UI android …</strong> 
                            <span class="fr ico more28"></span>                            
                        </p>
                        <div class="info-rate">
                            <span>평균 출석률</span><span class="rate">80.10%</span>
                        </div>
                       
                    </div>
                </div>
            </div>
            <!-- //header -->     

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">                       
                        <div class="date_wrap">
                            <span class="date">2018.11.30</span><a href="#"><span class="ico down_blue_24"></span> </a>                                               
                        </div>
                        <button type="button" class="btn md clr2 width50">출석현황</button><button type="button" title="title" class="btn md width50">평가</button>
                        <p class="title_line noline mt20">
                            <span class="title_txt">학습자</span><span class="total_txt">총</span><strong class="fwb600 count">14</strong>명  
                            <a href="#"><span class="fr attend_view">평균출석 보기</span><span class="ico check_16 fr"></span></a>                              
                        </p>
                        <div class="type_box">
                            <div class="info type1">
                            <p class="tit">출석률</p>
                            <p><span class="value">81.51</span><span class="value_sub">%</span></p>
                            </div>
                            <dl>
                                <dt>출석</dt> <dd>12</dd>
                            </dl>
                            <dl class="line">
                                <dt>결석</dt><dd>2</dd>
                            </dl>
                            <dl class="line">
                                <dt>지각</dt><dd>0</dd>
                            </dl>
                        </div>

                        <button type="button" class="btn md attend_check">일괄 출석체크</button>

                             <ul class="multiList type3">                             
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend disable">Attend<span class="time disable">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>                                       
                                        <span class="ico arrow fr"></span>                                                   
                                        </div> 
                                    </div>                                                
                                </li>   
                               <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend disable">Attend<span class="time disable">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>                                       
                                        <span class="ico arrow fr"></span>                                                   
                                        </div> 
                                    </div>                                                
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend disable">Attend<span class="time disable">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>                                       
                                        <span class="ico arrow fr"></span>                                                   
                                        </div> 
                                    </div>                                                
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend disable">Attend<span class="time disable">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>                                       
                                        <span class="ico arrow fr"></span>                                                   
                                        </div> 
                                    </div>                                                
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend disable">Attend<span class="time disable">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>                                       
                                        <span class="ico arrow fr"></span>                                                   
                                        </div> 
                                    </div>                                                
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend disable">Attend<span class="time disable">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>                                       
                                        <span class="ico arrow fr"></span>                                                   
                                        </div> 
                                    </div>                                                
                                </li>
                                <li>
                                    <div class="in">
                                        <div class="multiline contents">
                                        <p class="name">홍길동</p>
                                        <p class="attend disable">Attend<span class="time disable">02시간 00분</span> <button type="button" class="check">출석체크</button>
                                        </p>                                       
                                        <span class="ico arrow fr"></span>                                                   
                                        </div> 
                                    </div>                                                
                                </li>                       
                                      
                        </ul>

                    </div>
                    <!-- //inner -->
                </div>  
            </div>
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
