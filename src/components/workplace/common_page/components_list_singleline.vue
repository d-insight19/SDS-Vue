<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container" class="sample_page">

            <p>20181129 변경내용 : ulList -> singleList 로 클래스명 변경 </p>

            <h2> L.1.1. Single Line Lists</h2>
            <br/>

            <p> List + Button </p>
            <ul class="singleList type_1">
                <li>
                    <a href="#">삼성SDS
                        <span class="ico"></span>
                    </a>
                </li>
                <li>
                    <a href="#">삼성생명
                        <span class="ico"></span>
                    </a>
                </li>
            </ul>
            <br/>

            <p> List + Switch button </p>
            <ul class="singleList type_2">
                <li>
                    <a href="#">리스트 텍스트</a>
                    <label class="labelBtn">
                        <input type="checkbox" name="" class="chk">
                        <div class="chk_box"><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                    </label>
                </li>
                
            </ul>
            <br/>

            <p> List + Text </p>
            <ul class="singleList type_3">
                <li>
                    <a href="#">
                        리스트 텍스트
                        <div class="subTxt">                                
                            <span class="subTxt1">최신버전</span>
                            <span class="subTxt2">1.0.1</span>
                        </div>
                    </a>
                    
                </li>
                
            </ul>
            <br/>

            <p> Checkbox + List </p>
            <ul class="singleList type_4">
                <li>
                    <label class="labelChk">
                        <input id="" type="checkbox" class="chk" name="">
                        <span class="ico"></span>
                        <span class="label">이메일 수신</span>
                    </label>
                </li>
                <li>
                    <label class="labelChk">
                        <input id="" type="checkbox" class="chk" name="">
                        <span class="ico"></span>
                        <span class="label">전화 수신</span>
                    </label>
                </li>
            </ul>

            <h2> Study &gt 05.Study_02.01.studystatus</h2>
            <ul class="singleLineGroup">
                <li class="singleLineGroup_item">
                    <a href="" class="singleLineGroup_link d_flex align_items_center">
                        <div class="flex_1"> <span class="ico ic_pen_line_24"></span>과제</div> 
                        <div>1/3</div>
                        <div><span class="ico next_16"></span></div>
                    </a>
                </li>
                <li class="singleLineGroup_item">
                    <a href="" class="singleLineGroup_link d_flex align_items_center">
                        <div class="flex_1"><span class="ico mark_line"></span>중간평가</div> 
                        <div>제출완료</div> 
                        <div><span class="ico next_16 ml_auto"></span></div>
                    </a>
                </li>  
                <li class="singleLineGroup_item">
                    <a href="" class="singleLineGroup_link d_flex align_items_center">
                        <div class="flex_1"><span class="ico mark_line"></span>최종평가</div> 
                        <div>제출완료</div> 
                        <div><span class="ico next_16 ml_auto"></span></div>
                    </a>
                </li>  
                <li class="singleLineGroup_item">
                    <a href="" class="singleLineGroup_link d_flex align_items_center">
                        <div class="flex_1"><span class="ico ic_attendace_line_24"></span>출석율</div> 
                        <div>제출완료</div> 
                        <div><span class="ico next_16 ml_auto"></span></div>
                    </a>
                </li> 
                <li class="singleLineGroup_item">
                    <a href="" class="singleLineGroup_link d_flex align_items_center">
                        <div class="flex_1"><span class="ico ic_badge_line_bk_24"></span> 스코어</div> 
                        <div>제출완료</div> 
                        <div><span class="ico next_16 ml_auto"></span></div>
                    </a>
                </li>                                                        
            </ul>

            <h2>Study &gt 05.Study_02.01.studystatus</h2>  
            <ul>
                <li>
                <ul class="guideList">
                    <li>
                    이름, 생년월일, 성별은 가입 후에 변경이 불가합니다. 이름, 생년월일, 성별은 가입 후에 변경이 불가합니다. 추후 본인확인을 위해 정확하게 가입 부탁드립니다.이름, 생년월일, 성별은 가입 후에 변경이 불가합니다. 추후 본인확인을 위해 정확하게 가입 부탁드립니다.이름, 생년월일, 성별은 가입 후에 변경이 불가합니다. 추후 본인확인을 위해 정확하게 가입 부탁드립니다.이름, 생년월일, 성별은 가입 후에 변경이 불가합니다. 추후 본인확인을 위해 정확하게 가입 부탁드립니다.이름, 생년월일, 성별은 가입 후에 변경이 불가합니다. 추후 본인확인을 위해 정확하게 가입 부탁드립니다.ㄴ추후 본인확인을 위해 정확하게 가입 부탁드립니다.
                    </li>
                    <li>
                    이름, 생년월일, 성별은 가입 후에 변경이 불가합니다. 추후 본인확인을 위해 정확하게 가입 부탁드립니다.
                    </li>          
                </ul>
                </li>
                <li><p class="mono_80">진도율 80% 이상, 모든 평가항목 참여, 총점 80점 이상되어야 수료 가능합니다.</p></li>
            </ul>         
        </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_list_singleline',
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

<style scoped>
h2 { margin-top:40px;}
</style>
