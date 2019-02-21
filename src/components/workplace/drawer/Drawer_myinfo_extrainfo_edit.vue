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

            <div id="content" class="normal">
                <div class="cell">
                    <div class="inner">
                        <!-- list -->
                        <ul class="multiList type2">
                            <li class="pt0 mb20">
                                <strong class="label-tit14">회사명</strong>
                                <div class="intSchBox">
                                    <div class="search-wrapper">
                                        <input type="text" ref="input01"  pattern="^\s+" class="input" placeholder="회사명을 입력하세요" value="멀티캠퍼스" />
                                        <button class="close-icon" type="button" @click="delTxt"></button>
                                        <a href="#" class="btn"><span class="ico"></span></a>
                                    </div>
                                </div>
                            </li>
                            <li class="mb20">
                                <strong class="label-tit14">부서명</strong>
                                <input type="text" class="input" value="웹기획" >
                            </li>
                            <li class="mb20">
                                <strong class="label-tit14">직급명</strong>
                                <slp-select placeholder="대리" width="100%">
                                    <option>대리</option>
                                </slp-select>
                            </li>
                            <li class="mb20">
                                <strong class="label-tit14">직무명</strong>
                                <slp-select placeholder="CX Service & Space Design Consulting" width="100%" >
                                    <option>CX Service & Space Design Consulting</option>
                                </slp-select>
                            </li>
                            <li class="noline">
                                <strong class="label-tit14">전문분야</strong>
                                <input type="text" class="input" value="IT 기획" ><p class="contents14"></p>
                            </li>
                        </ul>
                        <p class="hr"></p>
                        <ul class="multiList type1">
                            <li class="pt0 title_line mb20">
                                <!-- <strong class="label-tit14">어학등급</strong><button type="button" class="btn14 color_clr2">편집</button> -->
                                <div class="label-tit block mb8">
                                    <strong >어학등급</strong>
                                    <div class="fr">
                                    <strong class="color_clr2" @click="editLanguage()" >{{languageTxt}}</strong>
                                    </div>
                                </div>

                                <!-- 추가 리스트 -->
                                <ul class="li-addList">
                                    <li v-for="(item, index) in list1" :key="index">
                                    <div v-if="languageEditFlag" @click="deleteLanguage(index)" class="tar"><a href="#" class="btn only del"><span class="ico"></span></a></div>
                                    <div class="up">
                                        <slp-select  placeholder="영어" >
                                            <option>영어</option>
                                        </slp-select>
                                        <slp-select  placeholder="TOEIC Speaking and…">
                                            <option>TOEIC Speaking and…</option>
                                        </slp-select>
                                    </div>
                                    <input type="text" class="input w100p" placeholder="점수 혹은 레벨 입력" value="120점">
                                    </li>
                                </ul>
                                <!-- 추가 리스트 -->
                                <a href="#" class="btn sm add w100p" @click="addList1()" ><span class="ico"></span>어학등급 추가</a>
                            </li>
                            <!-- <div class="extrainfo">
                            <select class="select subject">
                                <option>영어</option>
                            </select>
                            <select class="select subdivide">
                                <option>TOEIC Speaking and…</option>
                            </select>
                            <input type="text" class="input mt8" value="120점" >
                            </div>

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

                            <a href="#" class="btn sm add w100p mb0" @click="addList1()" ><span class="ico"></span>자격증 추가</a>
                            <p class="hr"></p> -->
                                <div class="label-tit block mb8">
                                    <strong >자격증</strong>
                                    <div class="fr">
                                    <strong class="color_clr2" @click="editLicence()">{{licenceTxt}}</strong>
                                    </div>
                                </div>

                                <!-- 추가 리스트 -->
                                <ul class="li-addList">
                                    <li v-for="(item, index) in list2" :key="index">
                                    <div v-if="licenceEditFlag" @click="deleteLicence(index)" class="tar"><a href="#" class="btn only del"><span class="ico"></span></a></div>
                                    <div class="up">
                                        <slp-select  placeholder="IT">
                                            <option>IT</option>
                                        </slp-select>
                                        <slp-select  placeholder="정보산업기사">
                                            <option>정보산업기사</option>
                                        </slp-select>
                                    </div>
                                    <input type="text" class="input w100p" placeholder="점수, 등급" value="1급">
                                    </li>
                                </ul>
                                <!-- 추가 리스트 -->
                                <a href="#" class="btn sm add w100p" @click="addList2()" ><span class="ico"></span>자격증 추가</a>
                            </ul>
                            <p class="hr"></p>
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
                        <!-- <ul class="multiList type1">
                            <li class="pt0 title_line">
                                <strong class="label-tit14">개인정보 마케팅 활용 동의</strong>
                                <label class="labelBtn fr">
                                <input type="checkbox" name="" class="chk">
                                <div class="chk_box" @click="toggleMarketing()" ><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
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
                                <slp-checkbox class="mr10"></slp-checkbox  >
                                <span class="label-tit-etc">전화 수신</span>
                            </li>
                        </ul>
                        <ul class="guideList mt10">
                        <li>학습진행과 관련된 이메일, SMS서비스는 동의 여부와 상관없이 기본적으로 제공됩니다.</li>
                        <li>멀티캠퍼스 패밀리 사이트에서 보내드리는 각종 서비스 관련 안내를 받아 보실 수 있습니다.</li>
                        <li>메일/SMS/전화수신 수신설정에 “동의“하시면, 회사가 이용자의 개인정보를 뉴스레터, 이벤트, 교육정보, 교육상품 소개 등 마케팅/광고 목적으로 활용하는 것에 동의하는 것으로 간주합니다.</li>
                        </ul> -->
                        <div class="cTitWrap">
                            <strong class="label-tit15">개인정보 마케팅 활용 동의</strong>
                            <!-- 클릭이벤트 컴포넌트에 추가 해야할듯 아래 참고;-->
                            <slp-switch :classObject="{'fr': true}" @click="toggleMarketing()"  style="display:none;"/>
                            <label class="labelBtn fr">
                            <input type="checkbox" name="" class="chk">
                            <div class="chk_box" @click="toggleMarketing()" ><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                            </label>
                        </div>

                        <!-- list -->
                        <ul class="ulList type4" v-show="marketingFlag">
                            <li><slp-checkbox><span class="label-tit16">이메일 수신</span></slp-checkbox></li>
                            <li><slp-checkbox><span class="label-tit16">SMS 수신</span></slp-checkbox></li>
                            <li><slp-checkbox><span class="label-tit16">전화 수신</span></slp-checkbox></li>
                        </ul>
                        <!-- //list -->
                        <p class="txt-desc in10_12" v-show="!marketingFlag">・학습진행과 관련된 이메일, SMS 서비스는<br>동의여부와 상관없이 기본적으로 제공됩니다.</p>
                        <p class="txt-desc in10_12" v-show="marketingFlag">・학습진행과 관련된 이메일, SMS서비스는 동의 여부와 상관없이 기본적으로 제공됩니다.</p>
                        <p class="txt-desc in10_12" v-show="marketingFlag">・멀티캠퍼스 패밀리 사이트에서 보내드리는 각종 서비스 관련 안내를 받아 보실 수 있습니다.</p>
                        <p class="txt-desc in10_12" v-show="marketingFlag">・메일/SMS/전화수신 수신설정에 “동의“하시면, 회사가 이용자의 개인정보를 뉴스레터, 이벤트, 교육정보, 교육상품 소개 등 마케팅/광고 목적으로 활용하는 것에 동의하는 것으로 간주합니다.</p>


                    </div>
                </div>
            </div>

        </div>
        <!-- //container -->

    </div>
    <!-- //wrap -->

</template>

<script>
/*eslint-disable */

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
      marketingFlag: false,
      list1: [],
      list2: [],
      languageEditFlag: false,
      licenceEditFlag: false,
      languageTxt: '편집',
      licenceTxt: '편집'
    }
  },
  /* vue function */
  methods: {
      toggleMarketing () {
      this.marketingFlag = !this.marketingFlag
    },
    addList1 () {
      this.list1.push('tmp 어학등급 아이템')
    },
    addList2 () {
      this.list2.push('tmp 자격증 아이템')
    },
    editLanguage () {
      this.languageEditFlag = !this.languageEditFlag
      if (this.languageEditFlag) {
        this.languageTxt = '완료'
      } else {
        this.languageTxt = '편집'
      }
    },
    editLicence () {
      this.licenceEditFlag = !this.licenceEditFlag
      if (this.licenceEditFlag) {
        this.licenceTxt = '완료'
      } else {
        this.licenceTxt = '편집'
      }
    },
    deleteLanguage (index) {
      console.log(index, '제거')
      this.list1.splice(index, 1)
    },
    deleteLicence (index) {
      console.log(index, '제거')
      this.list2.splice(index, 1)
    },
    delTxt () {
        this.$refs.input01.value = ''
    }

  }
}
</script>
