<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">배송지 수정</p>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">                        
                        <!-- list -->
                        <ul class="multiList type2">                   
                        <li>
                            <strong class="label-tit14">주소 별칭</strong>
                            <input type="text" class="input mb20" value="회사" >
                        </li>
                        <li>
                            <strong class="label-tit14">받으시는 분 성함</strong>
                            <input type="text" class="input mb20" value="정해민">
                        </li> 
                        <li>
                            <strong class="label-tit14">휴대전화</strong>
                            <input type="text" class="input mb20" value="01012341234">
                        </li>                                       
                        <li>
                            <strong class="label-tit14">주소</strong>                        
                            <div>                                
                                <ul>
                                    <li>
                                        <div class="postCode infoChk">
                                            <input type="text" class="input" value="44949">
                                            <button type="button" class="btn sm">우편번호</button>
                                        </div>
                                    </li>
                                    <li><input type="text" class="input" value="서울시 잠원구 신사동 33길 15"></li>
                                    <li><input type="text" class="input" value="한양아파트 1403호"></li>
                                </ul>                            
                            </div>
                        </li>
                    </ul>                   
                    <!-- //list -->

                       
                    </div>
                </div>
            </div>  

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">배송지 삭제</button></li>
                <li><button type="button" class="btn md clr1">배송지 수정</button></li>
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
