<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
        <!-- container -->
        <div id="container" class="mediaquery drawer extrainfo_edit">
            
            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only close"><span class="ico">닫기</span></button>
                <p class="header_text font_18">부가정보 수정</p><button type="button" class="btn14 color_clr2">완료</button>
            </div>
            <!-- //header -->

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">
                        <!-- list -->
                        <ul class="multiList type2">
                            <li class="pt0">
                                <strong class="label-tit14">회사명</strong>
                                <div class="intSchBox">
                                <input type="text" class="input mb20" value="멀티캠퍼스">
                                <a href="#" class="btn"><span class="ico"></span></a>
                            </div>
                            </li>
                            <li>
                                <strong class="label-tit14">부서명</strong>
                                <input type="text" class="input mb20" value="웹기획" >
                            </li>
                            <li>
                                <strong class="label-tit14">직급명</strong>
                                <input type="text" class="input mb20" value="대리" >
                            </li>
                            <li>
                                <strong class="label-tit14">직무명</strong>
                                <input type="text" class="input mb20" value="CX Service & Space Design Consulting">
                            </li>
                            <li class="noline">
                                <strong class="label-tit14">전문분야</strong>
                                <input type="text" class="input" value="IT 기획" ><p class="contents14"></p>                                
                            </li>                                       
                        </ul>
                        <p class="hr"></p>
                        <ul class="multiList type1">
                            <li class="pt0 title_line">
                                <strong class="label-tit14">어학등급</strong><button type="button" class="btn14 color_clr2">편집</button>
                            </li> 
                            <div class="extrainfo mt20">
                            <select class="select subject">
                                <option>영어</option>
                            </select>
                            <select class="select subdivide">
                                <option>TOEIC Speaking and…</option>
                            </select> 
                            <input type="text" class="input mt8" value="120점" >                      
                            </div>  

                            <!-- 추가 리스트 -->
                            <a href="#" class="btn sm add w100p" @click="addList1()" ><span class="ico"></span>어학등급 추가</a>

                            <li class="pt0 title_line mt20">
                                <strong class="label-tit14">자격증</strong><button type="button" class="btn14 color_clr2">편집</button>
                            </li> 
                            <div class="extrainfo mt20">
                            <select class="select subject">
                                <option>IT</option>
                            </select>
                            <select class="select subdivide">
                                <option>정보산업기사</option>
                            </select> 
                            <input type="text" class="input mt8" value="1급" >                           
                            </div> 

                            <!-- 추가 리스트 -->
                            <a href="#" class="btn sm add w100p mb0" @click="addList1()" ><span class="ico"></span>자격증 추가</a>
                            <p class="hr"></p>
                            </ul>
                            
                            <!-- list -->
                            <ul class="ulList type1">
                            <li>
                                <strong class="label-tit">관심 분야</strong>
                                <div class="in-chk">
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">경영 / 리더십</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">금융</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">직무 / 자격</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">OPIC / 외국어</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">인문 / 교양 / 시사</span></label>
                                </div>
                            </li>
                            <li>
                                <strong class="label-tit">선호 과정</strong>
                                <div class="in-chk">
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">이러닝</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">집합</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">지식</span></label>
                                </div>
                            </li>
                            <li>
                                <strong class="label-tit">선호 강의</strong>
                                <div class="in-chk">
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">Instructor-led</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">Self-paced with labs</span></label>
                                    <label class="labelChk2"><input id="" type="checkbox" class="chk" name=""><span class="label">Self-paced</span></label>
                                </div>
                            </li>
                        </ul>
                        <!-- //list -->

                        <p class="hr"></p>
                        <ul class="multiList type1">
                           <li class="pt0 title_line">
                                <strong class="label-tit14">개인정보 마케팅 활용 동의</strong>
                                <label class="labelBtn fr">
                                <input type="checkbox" name="" class="chk">
                                <div class="chk_box"><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                                </label> 
                            </li>
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit-etc">이메일 수신</span>
                            </li>
                            <li>
                                <slp-checkbox value="true" class="mr10"></slp-checkbox>
                                <span class="label-tit-etc">SMS 수신</span>
                            </li>
                            <li>
                                <slp-checkbox></slp-checkbox  class="mr10">
                                <span class="label-tit-etc">전화 수신</span>
                            </li>                                                               
                        </ul>
                        <ul class="guideList mt10">
                        <li>학습진행과 관련된 이메일, SMS서비스는 동의 여부와 상관없이 기본적으로 제공됩니다.</li>
                        <li>멀티캠퍼스 패밀리 사이트에서 보내드리는 각종 서비스 관련 안내를 받아 보실 수 있습니다.</li>
                        <li>메일/SMS/전화수신 수신설정에 “동의“하시면, 회사가 이용자의 개인정보를 뉴스레터, 이벤트, 교육정보, 교육상품 소개 등 마케팅/광고 목적으로 활용하는 것에 동의하는 것으로 간주합니다.</li>
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
