<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery atorm atorm_itemfactory">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">URL</p><button type="button" class="btn16 color_clr2">저장</button>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner mt22">  
                    <div class="oh">
                        <h2 class="label-tit20 fl"><strong>공개여부</strong></h2>
                                <label class="labelBtn fr">
                                    <input type="checkbox" name="" class="chk">
                                    <div class="chk_box"><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                                </label>  
                    </div>   
                    <p class="tit_desc">공개하시면  다른 사람이 내 아이템을 활용하여 과정을 만들 수 있습니다.</p> 

                    <p class="hr" style="margin:26px -24px 18px"></p>                     
                    <!-- list -->
                    <ul class="singleList type1"> 
                        <li class="mb20">
                            <strong class="label-tit14 tit_essential">아이템 명</strong>
                            <slp-text-field placeholder="아이템 명을 입력해 주세요." class="mt6"></slp-text-field>
                        </li>
                        <li>
                            <strong class="label-tit14 tit_essential">URL 붙이기</strong>
                            <slp-text-field placeholder="URL을 입력하세요" class="mt6"></slp-text-field>
                        </li>                        
                        
                    </ul>                    
                    <!-- //list -->   
                    <div class="imgbox_wrap mt12">
                        <img class="thumnail" src="@/assets/img/itemfactory_url_img.jpg" alt="">
                        <div class="imgbox">[혁신성장청년인재] 자율주행을 위한 스마트카 시스템 개...</div>
                    </div>                
                    
                       

                       
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
  name: 'Drawer_myinfo',
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
