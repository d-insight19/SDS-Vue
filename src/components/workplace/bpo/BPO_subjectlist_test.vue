<template>
<!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer bpo_subjectlist">

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
                        <button type="button" class="btn md width50">출석현황</button><button type="button" title="title" class="btn md clr2 width50">평가</button>
                        <p class="title_line noline mt20">
                            <span class="title_txt">학습자</span><span class="total_txt">총</span><strong class="fwb600 count">14</strong>명                                                          
                        </p>                      

                        <p class="hr" style="margin-top:3px"></p>

                             <ul class="multiList type3">
                                <div class="title_line" style="padding-bottom:6px"><span class="label-tit16"><strong>홍길동</strong></span> <button class="color_clr2 fr"><span class="ico pencil_16_blue mr3"></span>등록</button></div>  
                                <li>
                                    <div class="in">                                                                                                                           
                                        <div class="multiline contents"> 
                                        <p>10월 평가</p>
                                        <p class="date">2018.10.12</p>                                                    
                                        </div>  
                                        <p class="total_grade">총점 <span class="grade">90</span>점</p>
                                        
                                    </div>                                                
                                </li>  
                                <li>
                                    <div class="in">                                                                                                                           
                                        <div class="multiline contents"> 
                                        <p>10월 평가</p>
                                        <p class="date">2018.10.12</p>                                                    
                                        </div>  
                                        <p class="total_grade">총점 <span class="grade">90</span>점</p>
                                        
                                    </div>                                                
                                </li>
                                <li>
                                    <div class="in">                                                                                                                           
                                        <div class="multiline contents"> 
                                        <p>10월 평가</p>
                                        <p class="date">2018.10.12</p>                                                    
                                        </div>  
                                        <p class="total_grade">총점 <span class="grade">90</span>점</p>
                                        
                                    </div>                                                
                                </li>
                            </ul>

                        <p class="hr"></p>

                             <ul class="multiList type3">
                                <div class="title_line" style="padding-bottom:6px"><span class="label-tit16"><strong>김수범</strong></span> <button class="color_clr2 fr"><span class="ico pencil_16_blue mr3"></span>등록</button></div>  
                                <li>
                                    <div class="in">                                                                                                                           
                                        <div class="multiline contents"> 
                                        <p>10월 평가</p>
                                        <p class="date">2018.10.12</p>                                                    
                                        </div>  
                                        <p class="total_grade">총점 <span class="grade">90</span>점</p>
                                        
                                    </div>                                                
                                </li>  
                                <li>
                                    <div class="in">                                                                                                                           
                                        <div class="multiline contents"> 
                                        <p>10월 평가</p>
                                        <p class="date">2018.10.12</p>                                                    
                                        </div>  
                                        <p class="total_grade">총점 <span class="grade">90</span>점</p>
                                        
                                    </div>                                                
                                </li>
                                <li>
                                    <div class="in">                                                                                                                           
                                        <div class="multiline contents"> 
                                        <p>10월 평가</p>
                                        <p class="date">2018.10.12</p>                                                    
                                        </div>  
                                        <p class="total_grade">총점 <span class="grade">90</span>점</p>
                                        
                                    </div>                                                
                                </li>
                            </ul>

                        <p class="hr"></p>

                             <ul class="multiList type3">
                                <div class="title_line" style="padding-bottom:6px"><span class="label-tit16"><strong>이수서</strong></span> <button class="color_clr2 fr"><span class="ico pencil_16_blue mr3"></span>등록</button></div>  
                                <li>
                                    <div class="in">                                                                                                                           
                                        <div class="multiline contents"> 
                                        <p>10월 평가</p>
                                        <p class="date">2018.10.12</p>                                                    
                                        </div>  
                                        <p class="total_grade">총점 <span class="grade">90</span>점</p>
                                        
                                    </div>                                                
                                </li>  
                                <li>
                                    <div class="in">                                                                                                                           
                                        <div class="multiline contents"> 
                                        <p>10월 평가</p>
                                        <p class="date">2018.10.12</p>                                                    
                                        </div>  
                                        <p class="total_grade">총점 <span class="grade">90</span>점</p>
                                        
                                    </div>                                                
                                </li>
                                <li>
                                    <div class="in">                                                                                                                           
                                        <div class="multiline contents"> 
                                        <p>10월 평가</p>
                                        <p class="date">2018.10.12</p>                                                    
                                        </div>  
                                        <p class="total_grade">총점 <span class="grade">90</span>점</p>
                                        
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
