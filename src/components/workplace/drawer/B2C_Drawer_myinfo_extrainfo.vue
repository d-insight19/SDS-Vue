<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
        <!-- container -->
        <div id="container" class="mediaquery drawer">

            <!-- header -->
            <div id="header" class="fixed">
                <button type="button" class="btn only prev"><span class="ico">이전</span></button>
                <p class="header_text font_18">부가정보 관리</p><button type="button" class="btn14 color_clr2">수정</button>
            </div>
            <!-- //header -->

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                        <!-- list -->
                        <ul class="multiList type1">
                            <li class="pt0">
                                <strong class="label-tit15">회사명</strong>
                                <p class="contents14">멀티캠퍼스</p>
                            </li>
                            <li>
                                <strong class="label-tit15">부서명</strong>
                                <p class="contents14">웹기획</p>
                            </li>
                            <li>
                                <strong class="label-tit15">직급명</strong>
                                <p class="contents14">대리</p>
                            </li>
                            <li>
                                <strong class="label-tit15">직무명</strong>
                                <p class="contents14">CX Service & Space Design Consulting </p>
                            </li>
                            <li class="noline pdb0">
                                <strong class="label-tit15">전문분야</strong>
                                <p class="contents14">IT 기획</p>
                            </li>
                        </ul>
                        <p class="hr"></p>
                        <ul class="multiList type1">
                            <li class="pt0 title_line">
                                <strong class="label-tit15">어학등급</strong>
                            </li>
                            <li>
                                <strong class="label-tit13">영어</strong>
                                <p class="contents13">TOEIC Speaking and Writing Tests <span class="bar"></span> 120점</p>
                            </li>
                            <li>
                                <strong class="label-tit13">프랑스어</strong>
                                <p class="contents13">DALF <span class="bar"></span> C2</p>
                            </li>
                            <li class="title_line pt0 mt26">
                                <strong class="label-tit15">자격증</strong>
                            </li>
                            <li>
                                <strong class="label-tit13">IT</strong>
                                <p class="contents13">정보산업기사 <span class="bar"></span> 1급</p>
                            </li>
                            <li>
                                <strong class="label-tit13">정보기술</strong>
                                <p class="contents13">멀티미디어콘텐츠제작 <span class="bar"></span> 전문가</p>
                            </li>
                        </ul>
                        <p class="hr"></p>
                        <ul class="multiList type1">
                            <li class="pt0">
                                <strong class="label-tit15">관심 분야</strong>
                                <p class="contents14">경영/리더십, 금융, 직무/자격, OPIC/외국어, 인문/교양/시사</p>
                            </li>
                            <li>
                                <strong class="label-tit15">선호 과정</strong>
                                <p class="contents14">이러닝, 집합,  지식</p>
                            </li>
                            <li class="noline pdb0">
                                <strong class="label-tit15">선호 강의</strong>
                                <p class="contents14">Instructor-led, Self-paced with labs, Self-paced</p>
                            </li>
                        </ul>
                        <p class="hr"></p>
                        <ul class="multiList type1">
                            <li class="pt0 title_line">
                                <strong class="label-tit15">개인정보 마케팅 활용 동의</strong>
                            </li>
                            <li>
                                <span class="label-tit-etc">이메일 수신</span><span class="fr contents14_2">동의함</span>
                            </li>
                            <li>
                                <span class="label-tit-etc">SMS 수신</span><span class="fr contents14_2">동의함</span>
                            </li>
                            <li>
                                <span class="label-tit-etc">전화 수신</span><span class="fr contents14_2">동의함</span>
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
