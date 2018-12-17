<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">배송지관리</p>
            </div>
            <!-- //header -->

            <div id="content" class="drawer etc">
                <div class="cell">
                    <div class="inner">
                        <!-- list -->
                        <ul class="multiList type1">
                            <li class="id_info">
                                <strong class="label-tit14">자택</strong><span class="default clr2">기본</span><button type="button" class="btn14 first color_clr2">수정</button>
                                <p class="address">(06152) 서울특별시 강남구 언주로 508<br> 10~17층(역삼동, 서울상록빌딩)</p>
                                <p class="name_line">정해민 <span class="bar"></span>010-1234-1234</p> 
                            </li>
                            <li>
                                <strong class="label-tit14">직장</strong><button type="button" class="btn14 color_clr2">수정</button>
                                <p class="address">(06152) 서울특별시 강남구 언주로 508<br> 10~17층(역삼동, 서울상록빌딩)</p>
                                <p class="name_line">정해민 <span class="bar"></span>010-1234-1234</p> 
                            </li>
                            <li>
                                <strong class="label-tit14">직장2</strong><button type="button" class="btn14 color_clr2">수정</button>
                                <p class="address">(06152) 서울특별시 강남구 언주로 508<br> 10~17층(역삼동, 서울상록빌딩)</p>
                                <p class="name_line">정해민 <span class="bar"></span>010-1234-1234</p> 
                            </li>                
                        </ul>
                        <!-- // list -->

                       
                    </div>
                </div>
            </div>  

        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md clr1">새로운 배송지 추가</button></li>
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
