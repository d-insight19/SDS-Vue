<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">회원탈퇴</p>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        <!-- list -->
                        <ul class="multiList type1">                           
                            </li>
                            <li class="title_line pt0 pb12">
                                <strong class="label-tit20">나의 정보</strong>
                            </li>     
                            <ul class="withdrawal oh mb35">
                                <li class="fl">
                                    <p class="subject">학습중인 과정수</p>
                                    <p class="desc"><span class="num">2</span>개</p>
                                </li>
                                <li class="fl bl">
                                    <p class="subject">포인트 등급</p>
                                    <p class="desc"><span class="num">GOLD</span></p>
                                </li>
                                <li class="fl">
                                    <p class="subject">보유 포인트</p>
                                    <p class="desc"><span class="num">1,829P</span></p>
                                </li>
                                <li class="fl bl">
                                    <p class="subject">포인트 순위</p>
                                    <p class="desc"><span class="num">36/582</span>위</p>
                                </li>
                            </ul>                                                         
                        </ul>
                        <p class="divide_line"></p>
                        <ul class="multiList type2">
                            <li>
                                <strong class="label-tit20">회원 정보 확인</strong>
                                <p class="contents14_2 mt6 mb20">회원님의 정보보호를 위해 다시 한번<br> 비밀번호를 확인합니다.</p>
                            </li>
                            <li>
                                <strong class="label-tit14">아이디</strong>
                                <input type="text" class="input mb20" value="haemin.jung" >
                            </li>
                            <li>
                                <strong class="label-tit14">비밀번호</strong>
                                <input type="text" class="input mb20" value="*********" >
                            </li>    
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="agree">위 내용을 모두 확인했으며, 탈퇴에 동의합니다.</span>
                            </li>                                                          
                        </ul>                       
                        <!-- // list -->

                        <div class="withdrawal_btn mt70">
                        <li>
                            <button type="button" class="btn md">취소</button>
                        </li>
                        <li>
                            <button type="button" class="btn md clr1">회원탈퇴</button>
                        </li>
                    </div>
                       
                    </div>
                </div>
            </div>           
            
        </div>
        <!-- //container -->   
  

    </div>

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
