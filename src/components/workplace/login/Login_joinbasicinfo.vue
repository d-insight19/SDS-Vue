<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join basicinfo pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit">회원가입</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">기본정보 입력</h2>
                        <div class="num">
                            <strong class="color_clr2">4</strong>/<span>6</span>
                        </div>
                    </div>
                        <div class="progBox">
                        <div class="bar clr2" style="width:66.66%"></div>
                    </div>
                    <p class="txt-desc">이름, 생년월일, 성별은 가입 후 변경이 불가합니다. 추후 본인확인을 위해 정확하게 입력 부탁드립니다.</p>
                </div>

                <!-- list -->
                <ul class="ulList type1">
                    <li class="join-id">
                        <strong class="label-tit">통합 아이디</strong>
                        <span class="label-txt">CRD_abc1234</span>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">성명</strong>
                        <slp-text-field placeholder="성명 입력" message="성명을 입력해주세요."></slp-text-field>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">비밀번호</strong>
                        <!-- 비밀번호 새로운 타입으로 컴포넌트화 필요-->
                        <!-- 2019-01-07 : 기존 Seach 컴포넌트에   버튼 a태그에  eye 클래스 추가되고 x 아이콘 삭제 -->
                        <div class="intSchBox">
                            <div class="search-wrapper">
                                <input type="text"  pattern="^\s+" class="input" placeholder="8~12자의 숫자와 영문자, 특수문자를 조합하세요" />
                                <a href="#" class="btn eye" v-show="password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <a href="#" class="btn eye eye_slash" v-show="!password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <!-- <p class="InfoChK-resultTxt err">8~12자의 영문자, 특수문자 조합만 가능합니다.</p> -->
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">비밀번호 확인</strong>
                        <!-- 2019-01-07 : 기존 Seach 컴포넌트에   버튼 a태그에  eye 클래스 추가되고 x 아이콘 삭제 -->
                        <div class="intSchBox">
                            <div class="search-wrapper">
                                <input type="text"  pattern="^\s+" class="input" placeholder="8~12자의 숫자와 영문자, 특수문자를 조합하세요" />
                                <a href="#" class="btn eye" v-show="password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <a href="#" class="btn eye eye_slash" v-show="!password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <!-- <p class="InfoChK-resultTxt err">비밀번호가 일치하지 않습니다.</p> -->
                            </div>
                        </div>
                    </li>                    
                    <li>
                        <strong class="label-tit">성별</strong>
                        <div class="rdoSelBox ">
                            <label class="labelRdo"><input type="radio" class="rdo" name="gender-rdo" checked><span class="ico"></span><span class="label">남자</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="gender-rdo"><span class="ico"></span><span class="label">여자</span></label>
                        </div>
                    </li>
                    <li>
                        <strong class="label-tit">생년월일</strong>
                        <div class="birthInt">
                            <slp-select required placeholder="년도" class="">
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                            </slp-select>
                            <slp-select required placeholder="월" class="">
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                            </slp-select>
                            <slp-select required placeholder="일" class="">
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                            </slp-select>
                        </div>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">이메일</strong>
                        <slp-text-field placeholder="이메일을 입력하세요" message="이메일 주소를 입력해주세요."></slp-text-field>
                    </li>
                    <li>
                        <strong class="label-tit require_mark">휴대전화</strong>
                        <slp-text-field placeholder="‘-‘ 없이 숫자만 입력하세요" message="‘-’ 또는 띄어쓰기 없이 10자 이상 입력해주세요."></slp-text-field>
                    </li>                    
                    <li>
                        <strong class="label-tit">주소</strong>
                        <div class="">
                            <div class="rdoSelBox ">
                                <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo" checked><span class="ico"></span><span class="label">자택</span></label>
                                <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo"><span class="ico"></span><span class="label">직장</span></label>
                            </div>
                            <ul class="addrInt">
                                <li>
                                    <div class="postCode infoChk">
                                        <slp-text-field placeholder="우편번호를 입력하세요"></slp-text-field>
                                        <button type="button" class="btn sm">우편번호 찾기</button>
                                    </div>
                                </li>
                                <li><slp-text-field placeholder="주소를 입력하세요"></slp-text-field></li>
                                <li><slp-text-field placeholder="나머지 주소를 입력하세요"></slp-text-field></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <!-- //list -->

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">다음</button></li>
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
  name: 'Login_joinbasicinfo',
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
