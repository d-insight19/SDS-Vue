<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="font_18">기본정보관리</p><button type="button" class="btn14 color_clr2">완료</button>
            </div>
            <!-- //header -->

            <div id="content" class="drawer etc">
                <div class="cell">
                    <div class="inner">
                    <!-- list -->
                    <ul class="multiList type2">                   
                        <li>
                            <strong class="label-tit">이메일</strong>
                            <input type="text" class="input mb20" value="CRD_abc1234@multicapus.co.kr" >
                        </li>
                        <li>
                            <strong class="label-tit">휴대전화</strong>
                            <input type="text" class="input mb20" value="01012341234">
                        </li>                                        
                        <li>
                            <strong class="label-tit">주소</strong>
                        <div class="rdoSelBox mt8">
                            <label class="labelRdo"><input type="radio" class="rdo" name="gender-rdo" checked="checked"><span class="ico"></span><span class="label">자택</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="gender-rdo"><span class="ico"></span><span class="label">직장</span></label>
                        </div>
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
                    <label for="login_auto" class="labelChk mt12">
                    <input id="login_auto" type="checkbox" class="chk" name="login_auto" checked>
                    <span class="ico"></span>
                    <span class="label">OPIc/SERIPro의 이메일과 휴대전화를 동시에 수정합니다.</span>
                    </label>
                    <!-- //list -->

                       
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
