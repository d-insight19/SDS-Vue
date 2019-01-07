<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">배송지 추가</p>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                    <!-- list -->
                    <ul class="multiList type2">                   
                        <li class="mb20">
                            <strong class="label-tit14">주소 별칭</strong>
                            <input type="text" class="input" placeholder="집,회사" >
                        </li>
                        <li class="mb20">
                            <strong class="label-tit14">받으시는 분 성함</strong>
                            <input type="text" class="input" placeholder="이름 입력">
                        </li> 
                        <li class="mb20">
                            <strong class="label-tit14">휴대전화</strong>
                            <input type="text" class="input" placeholder="‘-’없이 숫자만 입력">
                        </li>                                       
                        <li>
                            <strong class="label-tit14">주소</strong>                        
                            <div>                                
                                <ul>
                                    <li>
                                        <div class="postCode infoChk">
                                            <input type="text" class="input" placeholder="우편번호">
                                            <button type="button" class="btn sm">우편번호</button>
                                        </div>
                                    </li>
                                    <li><input type="text" class="input" placeholder="주소 입력"></li>
                                    <li><input type="text" class="input" placeholder="나머지 주소 입력"></li>
                                </ul>                            
                            </div>
                        </li>
                    </ul>                    
                    <!-- //list -->
                    <div class="logoutBtn mt70">
                        <button type="button" class="btn md">배송지 등록</button>
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
