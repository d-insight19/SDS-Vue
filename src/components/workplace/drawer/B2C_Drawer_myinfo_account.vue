<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="font_18">배송지관리</p>
            </div>
            <!-- //header -->

            <div id="content" class="drawer etc">
                <div class="cell">
                    <div class="inner">
                        <!-- list -->
                        <ul class="multiList type1">
                            <li class="id_info">
                                <strong class="label-tit">자택</strong><span class="default clr2">기본</span><button type="button" class="btn14 color_clr2">완료</button>
                                <p class="address">(06152) 서울특별시 강남구 언주로 508<br> 10~17층(역삼동, 서울상록빌딩)</p>
                                <p class="name_line">정해민 <span class="bar">010-1234-1234</span></p>                                
                                
                            </li>
                            <li>
                                <strong class="label-tit">이름</strong>
                                <p class="contents">정해민</p>
                            </li>
                            <li>
                                <strong class="label-tit">성별</strong>
                                <p class="contents">남</p>
                            </li>
                            <li>
                                <strong class="label-tit">생년월일</strong>
                                <p class="contents">1990.01.01</p>
                            </li>
                            <li>
                                <strong class="label-tit">이메일</strong>
                                <p class="contents">hamin.jung@multicampus.com</p>
                            </li>
                            <li>
                                <strong class="label-tit">휴대전화</strong>
                                <p class="contents">010-1234-1234</p>
                            </li>
                            <li>
                                <strong class="label-tit">주소</strong>
                                <p class="contents">직장<br>(06220) 서울특별시 강남구 테헤란로 212 (역삼동 1202호) 멀티캠퍼스 1202호</p>
                            </li>                    
                        </ul>
                        <!-- // list -->

                       
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
