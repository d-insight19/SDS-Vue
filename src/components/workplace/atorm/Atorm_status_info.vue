<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm pd70">
            
           <!-- header -->
            <div v-if="headerType == '2'" id="header" class="tab fixed">          
                <div class="header_inner line1">
                    <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                    <p class="header_text font_18">처음부터 배우는 데이터 분석</p>
                </div>  
                <div class="header_inner line2 tabMenu scroll-x">
                    <ul class="scrollTab">
                        <li><a href="#tab1">과정정보</a></li>                       
                        <li class="on"><a href="#tab2">학습현황</a></li><!-- selected class "on" --> 
                    </ul>
                </div>  
            </div>
        <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner nopad">                     

                    <ul class="thumList">
                        <li>
                            <div class="in">
                                <a href="#" class="thum">
                                    <div class="thumbnail">
                                        <img src="@/assets/img/thum_no_s.jpg" class="thumImg" alt="">
                                    </div>
                                </a>
                                <a href="#" class="tit">처음부터 배우는 데이터 분석</a>                                                           
                            </div>
                        </li>
                    </ul>
                   
                    <p class="hr" style="margin:26px -24px 21px"></p>      

                    <ul class="multiList type_1">
                        <li>
                            <div class="in">
                                <span class="label-tit14">정해민</span>
                                <div class="study_time">학습시간 <span class="time">00:20:42</span></div>
                            </div>
                        </li>
                        <li>
                            <div class="in">
                                <span class="label-tit14">유희영</span>
                                <div class="study_time">학습시간 <span class="time">00:20:42</span></div>
                            </div>
                        </li>                       
                    </ul>    
                       
                    </div>
                </div>
            </div>           

         <!-- floating button -->
        <div class="fixBtmBtn">
            <button type="button" class="btn clr1 ld">평점 및 후기 자세히보기</button>
        </div>
        <!-- //floating button -->   
        </div>
        <!-- //container -->   

    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */
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
      headerType: 2,
      langFlag: false,     
    }
  },
  /* vue function */
  methods: {
    changeLang () {
      this.langFlag = !this.langFlag
    }
  }
}
</script>
