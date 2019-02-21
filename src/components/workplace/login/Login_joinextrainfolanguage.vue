<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery join pd70">

            <div id="content" class="etc">
                <div class="cell">
                    <div class="inner">

                        <h1 class="h-tit">회원가입</h1>

                        <div class="stepper">
                            <div class="clearfix">
                                <h2 class="tit">부가정보 입력</h2>
                                <div class="num">
                                    <strong class="color_clr2">6</strong>/<span>6</span>
                                </div>
                            </div>
                                <div class="progBox">
                                <div class="bar clr2" style="width:100%"></div>
                            </div>
                            <p class="txt-desc">부가 정보를 입력 하시면 회원님의 맞춤 정보를 받을 수 있습니다.</p>
                        </div>


                        <!-- list -->
                        <ul class="ulList type1 mt42">
                          <li>
                            <strong class="label-tit">회사명</strong>
                            <div class="intSchBox">
                              <input type="text" class="input" placeholder="회사를 검색하세요" value="멀티캠퍼스">
                            </div>
                          </li>
                          <li>
                            <strong class="label-tit">부서명</strong>
                            <input type="text" class="input" placeholder="부서를 입력하세요" value="웹기획">
                          </li>
                          <li>
                            <strong class="label-tit">직급명</strong>
                            <slp-select required placeholder="과장"  width="100%">
                                <option>과장</option>
                                <option>차장</option>
                            </slp-select>
                          </li>
                          <li>
                            <strong class="label-tit">직무명</strong>
                            <div class="jobselect">
                              <slp-select required placeholder="사업관리" class="fl"  width="48.7%">
                                  <option>사업관리1</option>
                                  <option>사업관리2</option>
                              </slp-select>
                              <slp-select required placeholder="프로젝트 관리" class="fr" width="48.7%">
                                  <option>프로젝트 관리1</option>
                                  <option>프로젝트 관리2</option>
                              </slp-select>
                            </div>
                          </li>
                          <li>
                            <strong class="label-tit">전문분야</strong>
                            <input type="text" class="input" placeholder="전문분야를 입력하세요">
                          </li>
                        </ul>
                        <!-- //list -->

                        <div class="hr"></div>

                         <!-- list -->
                        <ul class="ulList type1">
                          <li>
                            <div class="label-tit block">
                              <strong>어학등급</strong>
                              <div class="fr">
                                <strong class="color_clr2" @click="editLanguage()" >{{languageTxt}}</strong>
                              </div>
                            </div>

                            <!-- 추가 리스트 -->
                            <ul class="li-addList">
                              <li v-for="(item, index) in list1" :key="index">
                                <div v-if="languageEditFlag" @click="deleteLanguage(index)" class="tar"><a href="#" class="btn only del"><span class="ico"></span></a></div>
                                <div class="up">
                                  <slp-select required placeholder="언어">
                                      <option>스페인어</option>
                                      <option>2018</option>
                                      <option>2019</option>
                                      <option>2020</option>
                                  </slp-select>
                                  <slp-select required placeholder="공인시험 선택">
                                      <option>TOEIC (Speaking&Wri..)</option>
                                      <option>2018</option>
                                      <option>2019</option>
                                      <option>2020</option>
                                  </slp-select>
                                </div>
                                <input type="text" class="input w100p" placeholder="점수 혹은 레벨 입력" value="850점">
                              </li>
                            </ul>
                            <!-- 추가 리스트 -->
                            <a href="#" class="btn sm add w100p" @click="addList1()" ><span class="ico"></span>어학등급 추가</a>
                          </li>
                          <li>
                            <div class="label-tit block">
                              <strong>자격증</strong>
                              <div class="fr">
                                <strong class="color_clr2" @click="editLicence()">{{licenceTxt}}</strong>
                              </div>
                            </div>

                            <!-- 추가 리스트 -->
                            <ul class="li-addList" style="border-top:1px solid rgba(0,0,0,0.5) !important">
                              <li v-for="(item, index) in list2" :key="index">
                                <div v-if="licenceEditFlag" @click="deleteLicence(index)" class="tar"><a href="#" class="btn only del"><span class="ico"></span></a></div>
                                <div class="up">
                                  <slp-select required placeholder="언어">
                                      <option>스페인어</option>
                                      <option>2018</option>
                                      <option>2019</option>
                                      <option>2020</option>
                                  </slp-select>
                                  <slp-select required placeholder="공인시험 선택">
                                      <option>TOEIC (Speaking&Wri..)</option>
                                      <option>2018</option>
                                      <option>2019</option>
                                      <option>2020</option>
                                  </slp-select>
                                </div>
                                <input type="text" class="input w100p" placeholder="점수, 등급" value="850점">
                              </li>
                            </ul>
                            <!-- 추가 리스트 -->
                            <a href="#" class="btn sm add w100p" @click="addList2()" ><span class="ico"></span>자격증 추가</a>
                          </li>
                        </ul>
                        <!-- //list -->

                        <div class="hr"></div>

                        <div class="cTitWrap">
                          <p class="label-tit18 fwb600 mb18">수신 설정</p>
                          <strong class="c-tit">수신 설정</strong>
                          <!-- 클릭이벤트 컴포넌트에 추가 해야할듯 아래 참고;-->
                          <!-- <slp-switch :classObject="{'fr': true}" @click="toggleMarketing()" :value="value" /> -->
                          <label class="labelBtn fr">
                            <input type="checkbox" name="" class="chk" checked>
                            <div class="chk_box" @click="toggleMarketing()" ><span class="ball"></span><ul class="txt"><li class="m1"></li><li class="m2"></li></ul></div>
                          </label>
                        </div>

                        <!-- list -->
                        <ul class="ulList type4" v-show="!marketingFlag">
                          <li><slp-checkbox :value="value">이메일 수신</slp-checkbox></li>
                          <li><slp-checkbox :value="value">SMS 수신</slp-checkbox></li>
                          <li><slp-checkbox>전화 수신</slp-checkbox></li>
                        </ul>
                        <!-- //list -->
                        <p class="txt-desc" v-show="!marketingFlag">학습진행과 관련된 이메일, SMS 서비스는<br>동의여부와 상관없이 기본적으로 제공됩니다.</p>
                        <p class="txt-desc" v-show="marketingFlag">수신설정에 동의하시면 회사가 이용자의 개인정보를 마케팅/광고 목적으로 활용하는 것에 동의하는 것으로 간주합니다.</p>

                        <div class="hr"></div>

                        <p class="label-tit18 fwb600 mb18">기타 설정</p>
                        <!-- list -->
                        <ul class="ulList type1">
                          <li>
                            <strong class="label-tit">다국어 설정</strong>
                            <slp-select required placeholder="선택" width="100%">
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                            </slp-select>
                          </li>
                          <li>
                            <strong class="label-tit">타임존</strong>
                            <slp-select required placeholder="선택" width="100%">
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                            </slp-select>
                          </li>
                        </ul>
                        <!-- //list -->

                    </div>
                </div>
            </div>

            <!-- floating button -->
            <div class="fixBtmBtn">
                <!-- disable 해제시 활성화 -->
                <ul>
                    <li><button type="button" class="btn md">이전</button></li>
                    <li><button type="button" class="btn md clr1">가입완료</button></li>
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
  name: 'Login_joinextrainfo',
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
      licenceTxt: '편집',
      value: true
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
    }
  }
}
</script>
