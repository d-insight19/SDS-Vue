<template>
   <!-- eslint-disable -->
  <div class="Wrap">
	  	<div class="tit">퍼블리싱 현황판</div>
		<div class="tbl-top">
		<div class="fr">
			T : 탭,  L : 레이어 팝업, W : 윈도우 팝업
		</div>
		</div>
	  <table class="table">
		<caption>퍼블리싱 메뉴 구조</caption>
		<colgroup>
      <!-- 
      <col width="120px" />
      <col width="140px" />
      <col width="150px" />
      <col width="140px" />
      <col width="140px" />
      <col width="140px" />
      <col width="40px" />
      <col width="250px" />
      <col width="*" /> 
      -->
      <col width="60px" />
      <col width="140px" />
      <col width="140px" />
      <col width="150px" />
      <col width="140px" />
      <col width="140px" />
      <col width="140px" />
      <col width="120px" />
      <col width="260px" />
      <col width="190px" />
      <col width="*" />
		</colgroup>
	  <thead>
      <!--
      <tr>
        <th scope="col">대구분</th>
        <th scope="col">Depth 1</th>
        <th scope="col">Depth 2</th>
        <th scope="col">Depth 3</th>
        <th scope="col">Depth 4</th>
        <th scope="col">Depth 5</th>
        <th scope="col">화면 ID</th>
        <th scope="col">파일명</th>
        <th scope="col">Comment</th>
      </tr>
      -->
      <tr>    
        <th scope="col">순서</th>
        <th scope="col">대구분</th>
        <th scope="col">Depth 1</th>
        <th scope="col">Depth 2</th>
        <th scope="col">Depth 3</th>
        <th scope="col">Depth 4</th>
        <th scope="col">Depth 5</th>
        <th scope="col">SAAS 대상항목</th>
        <th scope="col">화면ID</th>
        <th scope="col">vue파일명</th>
        <th scope="col">비고</th>
      </tr>
	  </thead>
	  <tbody>
      <!--
      <tr v-for="item in menulist" :key="item.id">
        <td>{{item.d1}}</td>
        <td>{{item.d2}}</td>
        <td>{{item.d3}}</td>
        <td>{{item.d4}}</td>
        <td>{{item.d5}}</td>
        <td>{{item.d6}}</td>
        <td align="center">{{item.d7}}</td>
        <td align="center" class="textL">
          <router-link :to="{ name: item.routeName }">
            {{item.routeName }}
          </router-link>
        <td>{{item.comment }}</td>
      </tr>		  
      -->
      <!-- <tr>
      <td align="center">com-1</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">input</td>
        <td>
          <router-link :to="{ name: 'components_textfield_slp' }">
            components_textfield_slp
          </router-link>
        </td>
        <td></td>
      </tr> -->
      <tr> 
      <td align="center">1</td>
        <td>로그인 / 회원가입</td>
        <td>연수원 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_01.02_findcenter</td>
        <td>
          <router-link :to="{ name: 'Login_findcenter' }">
            Login_findcenter
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">2</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>이메일로 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_01.02_findcenter_email</td>
        <td>
          <router-link :to="{ name: 'Login_findcenter_email' }">
            Login_findcenter_email
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_findcenter_email2' }">
            Login_findcenter_email2
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_findcenter_email_keyboard' }">
            Login_findcenter_email_keyboard
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_findcenter_email_complete' }">
            Login_findcenter_email_complete
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_findcenter_email_error' }">
            Login_findcenter_email_error
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">3</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>연수원 선택</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_01.02_findcenter_select</td>
        <td>
          <router-link :to="{ name: 'Login_findcenter_select' }">
            Login_findcenter_select
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_findcenter_select_02' }">
            Login_findcenter_select_02
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">4</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>연수원 URL로 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_01.02_findcenter_url</td>
        <td>
          <router-link :to="{ name: 'Login_findcenter_url' }">
            Login_findcenter_url
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_findcenter_url2' }">
            Login_findcenter_url2
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_findcenter_url_keyboard' }">
            Login_findcenter_url_keyboard
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_findcenter_url_complete' }">
            Login_findcenter_url_complete
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">5</td>
        <td>로그인 / 회원가입</td>
        <td>로그인</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td width="216">1.    고객사 로고 이미지 or 텍스트 영역<br>
          2. 아이디 저장, 자동로그인, 회원가입 항목 선택설정 <br>
          3. 초기 로그인 안내 노출여부 설정</td>
        <td class="textL">01.login_01.03_login</td>
        <td>
          <router-link :to="{ name: 'Login_login' }">
            Login_login
          </router-link><br/>
          <router-link :to="{ name: 'Login_login_02' }">
            Login_login_02
          </router-link><br/>
          <router-link :to="{ name: 'Login_login_notview' }">
            Login_login_notview
          </router-link><br/>
          <router-link :to="{ name: 'Login_login_write' }">
            Login_login_write
          </router-link><br/>
          <router-link :to="{ name: 'Login_login_error' }">
            Login_login_error
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">6</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>로그인 실패</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_01.03_login_fail</td>
        <td>
          <router-link :to="{ name: 'Login_login_fail' }">
            Login_login_fail
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_fail2' }">
            Login_login_fail2
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_txt1' }">
            Login_login_txt1
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_noguide' }">
            Login_login_noguide
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_noguide_txt1' }">
            Login_login_noguide_txt1
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_noguide_txt2' }">
            Login_login_noguide_txt2
          </router-link>
          <br/>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">7</td>
        <td>로그인 / 회원가입</td>
        <td>관심분야 선택</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>관심분야 항목 추가/삭제</td>
        <td class="textL">01.login_01.04_login_interest</td>
        <td>
          <router-link :to="{ name: 'Login_interest' }">
            Login_interest
          </router-link><br/>
          <router-link :to="{ name: 'Login_interestselect' }">
            Login_interestselect
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">8</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>회원가입</td>
        <td>회원종류 선택</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.01_join_type</td>
        <td>
          <router-link :to="{ name: 'Login_jointype' }">
            Login_jointype
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">9</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>가입인증</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.02_join_certify</td>
        <td>
          <router-link :to="{ name: 'Login_joincertify' }">
            Login_joincertify (국내),
          </router-link>
          <router-link :to="{ name: 'Login_joincertify2' }">
            Login_joincertify (해외)
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">10</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>가입 동의</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.02_join_terms</td>
        <td>
          <router-link :to="{ name: 'Login_jointerms' }">
            Login_jointerms : B2B
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_jointermstoast' }">
            Login_jointerms : B2B_toastpopup
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_jointermsselect' }">
            Login_jointerms : B2B_select
          </router-link>
          <br/>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">11</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>약관상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.02_join_terms_detail</td>
        <td>
          <router-link :to="{ name: 'Login_jointermsdetail' }">
            Login_jointermsdetail
          </router-link><br/>
          <router-link :to="{ name: 'Login_jointermsdetailscroll' }">
            Login_jointermsdetailscroll
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">12</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>아이디/통합 아이디 생성</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.02_join_id</td>
        <td>
          <router-link :to="{ name: 'Login_joinid' }">
            Login_joinid
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">13</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>기본정보 입력</td>
        <td>　</td>
        <td>　</td>
        <td>각 항목별 선택설정</td>
        <td class="textL">01.login_02.02_join_basicinfo</td>
        <td>
          <router-link :to="{ name: 'Login_joinbasicinfo' }">
            Login_joinbasicinfo
          </router-link>
          <br/>
          <router-link :to="{ name: 'login_join_basicinfo_inputon' }">
            login_join_basicinfo_inputon
          </router-link>
          <br/>
          <router-link :to="{ name: 'login_join_basicinfo_error' }">
            login_join_basicinfo_error
          </router-link>
          
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">14</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>우편번호 찾기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.03_search_post</td>
        <td>
          <router-link :to="{ name: 'Login_searchpost' }">
            Login_searchpost
          </router-link><br/>
          <router-link :to="{ name: 'Login_searchposterror' }">
            Login_searchposterror
          </router-link><br/>
          <router-link :to="{ name: 'Login_searchpostresult' }">
            Login_searchpostresult
          </router-link><br/>
          <router-link :to="{ name: 'Login_searchpostkeyboard' }">
            Login_searchpostkeyboard
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">15</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>회사 찾기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.04_search_company</td>
        <td>
          <router-link :to="{ name: 'Login_searchcompany' }">
            Login_searchcompany
          </router-link><br/>
          <router-link :to="{ name: 'Login_searchcompany_control' }">
            Login_searchcompany_control
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">16</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>회사찾기 결과</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.04_search_company_Result</td>
        <td>
          <router-link :to="{ name: 'Login_searchcompanyresult' }">
            Login_searchcompanyresult
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">17</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>관심사 선택</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.02_join_interest</td>
        <td>
          <router-link :to="{ name: 'Login_joininterest' }">
            Login_joininterest
          </router-link><br/>
          <router-link :to="{ name: 'Login_joininterestselect' }">
            Login_joininterestselect
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">18</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>부가정보 입력</td>
        <td>　</td>
        <td>　</td>
        <td>각 항목별 선택설정</td>
        <td class="textL">01.login_02.02_join_extrainfo</td>
        <td>
          <router-link :to="{ name: 'Login_joinextrainfo' }">
            Login_joinextrainfo
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_joinextrainfolanguage' }">
            Login_joinextrainfolanguage
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_joinextrainfolanguagecomplete' }">
            login_joinextrainfolanguagecomplete
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_joinextrainfolanguagedelete' }">
            login_joinextrainfolanguagedelete
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">19</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>회원가입 완료</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.02_join_complete</td>
        <td>
          <router-link :to="{ name: 'Login_joincomplete' }">
            Login_joincomplete
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">20</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>통합회원 전환안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_03.01_login_integration</td>
        <td>
          <router-link :to="{ name: 'Login_loginintegration' }">
            Login_loginintegration
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">21</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>통합 아이디 생성</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_03.01_login_integration_id</td>
        <td>
          <router-link :to="{ name: 'Login_loginintegrationid' }">
            Login_loginintegrationid
          </router-link>
          <br/>
          <router-link :to="{ name: 'login_loginintegrationidwrite' }">
            login_loginintegrationidwrite
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">22</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>재통합 회원 확인안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_03.02_login_reintegration</td>
        <td>
          <router-link :to="{ name: 'Login_loginreintegration' }">
            Login_loginreintegration
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">23</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>임시 아이디 변경안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_04.01_login_changeid</td>
        <td>
          <router-link :to="{ name: 'Login_loginchangeid' }">
            Login_loginchangeid
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">24</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>아이디 변경</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_04.02_login_changeid_main</td>
        <td>
          <router-link :to="{ name: 'Login_loginchangeidmain' }">
            Login_loginchangeidmain
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_changeid_main_confirm' }">
            Login_login_changeid_main_confirm
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_changeid_main_error' }">
            Login_login_changeid_main_error
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">25</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>비밀번호 변경안내 (장기 미변경시)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_05.01_login_changepw</td>
        <td>
          <router-link :to="{ name: 'Login_changepw' }">
            Login_changepw1
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_changepw' }">
            Login_changepw2
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_changepw_error1' }">
            Login_login_changepw_error1
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_changepw_error2' }">
            Login_login_changepw_error2
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_changepw_error3' }">
            Login_login_changepw_error3
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">26</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>계정 잠금 해제</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_06.01_login_unlockid</td>
        <td>
          <router-link :to="{ name: 'Login_lockid' }">
            Login_lockid
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_unlockid2' }">
            Login_login_unlockid2
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_unlockid_email' }">
            Login_login_unlockid_email
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_unlockid_complete' }">
            Login_login_unlockid_complete
          </router-link>          
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">27</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>휴면회원 안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_07.01_login_dormant</td>
        <td>
          <router-link :to="{ name: 'Login_dormant' }">
            Login_dormant
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_dormant_email' }">
            Login_login_dormant_email
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_dormant_complete' }">
            Login_login_dormant_complete
          </router-link>
          <br/>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">28</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>아이디 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_08.01_findid</td>
        <td>
          <router-link :to="{ name: 'Login_findid' }">
            Login_findid
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">29</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>생년월일/성별로 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_08.01_findid_birth</td>
        <td>
          <router-link :to="{ name: 'Login_findidbirth' }">
            Login_findidbirth
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">30</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>핸드폰 번호로 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_08.01_findid_phone</td>
        <td>
          <router-link :to="{ name: 'Login_findidphone' }">
            Login_findidphone
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">31</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>이메일로 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_08.01_findid_email</td>
        <td>
          <router-link :to="{ name: 'Login_findidemail' }">
            Login_findidemail
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">32</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>아이핀으로 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_08.01_findid_ipin</td>
        <td>
          <router-link :to="{ name: 'Login_findid_ipin' }">
            Login_findid_ipin
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">33</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>아이디 찾기 결과</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_08.01_findid_result</td>
        <td>
          <router-link :to="{ name: 'Login_findidresult' }">
            Login_findidresult
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_findid_result_popup' }">
            Login_findid_result_popup
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">34</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>비밀번호 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_08.02_findpw</td>
        <td>
          <router-link :to="{ name: 'Login_findpw' }">
            Login_findpw
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">35</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>핸드폰 번호로 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_08.02_findpw_phone</td>
        <td>
          <router-link :to="{ name: 'Login_findpwphone' }">
            Login_findpwphone
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">36</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>이메일로 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_08.02_findpw_email</td>
        <td>
          <router-link :to="{ name: 'Login_findpwemail' }">
            Login_findpwemail
          </router-link><br/>
          <router-link :to="{ name: 'Login_findpw_email_toastpopup' }">
            Login_findpw_email_toastpopup
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">37</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>본인인증</td>
        <td>휴대폰 인증</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_09.01_certify_phone</td>
        <td>
          <router-link :to="{ name: 'Login_certifyphone' }">
            Login_certifyphone
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">38</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>아이핀인증</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_09.02_certify_ipin</td>
        <td>
          <router-link :to="{ name: 'Login_certifyipin' }">
            Login_certifyipin
          </router-link>
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">39</td>
        <td>로그인 / 회원가입</td>
        <td>　</td>
        <td>　</td>
        <td>이메일 인증</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_09.03_certify_email</td>
        <td>
          <router-link :to="{ name: 'Login_certifyemail' }">
            Login_certifyemail
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_certify_email_certify_error1' }">
            Login_certify_email_certify_error1
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_certify_email_certify_error2' }">
            Login_certify_email_certify_error2
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_certify_email_certify_error3' }">
            Login_certify_email_certify_error3
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_corporationphone1' }">
            Login_login_corporationphone1
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_corporationphone2' }">
            Login_login_corporationphone2
          </router-link>
          <br/>
          <router-link :to="{ name: 'Login_login_corporationphone3' }">
            Login_login_corporationphone3
          </router-link>
          
        </td>
        <td>수정됨</td>
      </tr>
      <tr>
      <td align="center">40</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>고객사별 드로어 내 메뉴 선택설정</td>
        <td class="textL">03.Drawer_01.01</td>
        <td>
          <router-link :to="{ name: 'Main_control' }">
            Main_control
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">41</td>
        <td>Drawer (GNB)</td>
        <td>통합 알리미</td>
        <td>알림 리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_02.01_Alarm</td>
        <td>
          <router-link :to="{ name: 'Drawer_alerm' }">
            Drawer_alerm
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">42</td>
        <td>Drawer (GNB)</td>
        <td>나의 정보</td>
        <td>나의 정보</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>프로필 편집 가능여부 설정</td>
        <td class="textL">03.Drawer_03.01_myinfo</td>
        <td>
          <router-link :to="{ name: 'Drawer_myinfo' }">
            Drawer_myinfo
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">43</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>로그아웃</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_03.02_myinfo_logout</td>
        <td>
          <router-link :to="{ name: 'Drawer_myinfo_logout' }">
            Drawer_myinfo_logout
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">44</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>앨범에서 사진 선택</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_03.03_myinfo_choosepic</td>
        <td>
          <router-link :to="{ name: 'Drawer_myinfo_choosepic' }">
            Drawer_myinfo_choosepic
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">45</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>사진 선택 완료 </td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_03.04_myinfo_choosepic_done</td>
        <td>
          네이티브 영역. 개발필요
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">46</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>기본정보 관리</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_04.01_myinfo_basicinfo</td>
        <td>
          <router-link :to="{ name: 'Drawer_myinfo_basicinfo' }">
            Drawer_myinfo_basicinfo
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">47</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>기본정보 수정</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_04.02_myinfo_basicinfo_edit</td>
        <td>
          <router-link :to="{ name: 'Drawer_myinfo_basicinfo_edit' }">
            Drawer_myinfo_basicinfo_edit
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">48</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>부가정보 관리 (관심분야, 관심키워드)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_05.01_myinfo_extrainfo</td>
        <td>
          <router-link :to="{ name: 'Drawer_myinfo_extrainfo' }">
            Drawer_myinfo_extrainfo
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">49</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>부가정보 수정</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_05.02_myinfo_extrainfo_edit</td>
        <td>
          <router-link :to="{ name: 'Drawer_myinfo_extrainfo_edit' }">
            Drawer_myinfo_extrainfo_edit
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">50</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>계정 관리</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_06.01_myinfo_account</td>
        <td>
          <router-link :to="{ name: 'Drawer_myinfo_account1' }">
            Drawer_myinfo_account1
          </router-link>,
           <router-link :to="{ name: 'Drawer_myinfo_account2' }">
            Drawer_myinfo_account2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">51</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>비밀번호 변경</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_06.02_myinfo_account_password</td>
        <td>
          <router-link :to="{ name: 'Drawer_06_myinfo_account_password' }">
            Drawer_06_myinfo_account_password
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">52</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>설정</td>
        <td>버전정보 및 업데이트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_07.01_settings</td>
        <td>
          <router-link :to="{ name: 'Drawer_settings' }">
            Drawer_settings
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">53</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>PUSH 알림 메시지 수신</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_07.01_settings_Push</td>
        <td>
          <router-link :to="{ name: 'Drawer_settings_push' }">
            Drawer_settings_push
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">54</td>
        <td>Drawer (GNB)</td>
        <td>　</td>
        <td>　</td>
        <td>오픈소스라이선스</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_07.01_settings_opensource</td>
        <td>
          <router-link :to="{ name: 'Drawer_settings_opensource' }">
            Drawer_settings_opensource
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">55</td>
        <td>Drawer - 고객센터</td>
        <td>고객센터</td>
        <td>공지사항</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_01.01_Notice</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Notice' }">
            CustomerCenter_Notice
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">56</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>공지사항 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_01.02_Notice_detail</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Notice_detail' }">
            CustomerCenter_Notice_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">57</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>자료실(통합자료실)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_02.01_library</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_library' }">
            CustomerCenter_library
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">58</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_02.02_library_detail</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_library_detail' }">
            CustomerCenter_library_detail
          </router-link>,
            <router-link :to="{ name: 'CustomerCenter_library_detail_like' }">
            CustomerCenter_library_detail_like
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">59</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>학습가이드</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_03.01_Studyguide</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Studyguide' }">
            CustomerCenter_Studyguide
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">60</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>학습방법 안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_03.02_Studyguide_detail</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Studyguide_detail' }">
            CustomerCenter_Studyguide_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">61</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>FAQ</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_04.01_FAQ</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_FAQ_total' }">
            CustomerCenter_FAQ_total
          </router-link>,
          <router-link :to="{ name: 'CustomerCenter_FAQ' }">
            CustomerCenter_FAQ
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">62</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>FAQ 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_04.02_FAQ_detail</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_FAQ_detail' }">
            CustomerCenter_FAQ_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">63</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>문의</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_05.01_Inquiry</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Inquiry' }">
            CustomerCenter_Inquiry
          </router-link>,
           <router-link :to="{ name: 'CustomerCenter_Inquiry_none' }">
            CustomerCenter_Inquiry_none
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">64</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>1:1 문의내역 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_05.02_Inquiry_detail</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Inquiry_detail' }">
            CustomerCenter_Inquiry_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">65</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>1:1 문의 작성하기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_05.03_Inquiry_write</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Inquiry_write01' }">
            CustomerCenter_Inquiry_write01
          </router-link>,
          <router-link :to="{ name: 'CustomerCenter_Inquiry_write01_error' }">
            CustomerCenter_Inquiry_write01_error
          </router-link>,
          <router-link :to="{ name: 'CustomerCenter_Inquiry_write02' }">
            CustomerCenter_Inquiry_write02
          </router-link>,
          <router-link :to="{ name: 'CustomerCenter_Inquiry_write02_error' }">
            CustomerCenter_Inquiry_write02_error
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">66</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>학습지원</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_06.01_Studysupport</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Studysupport' }">
            CustomerCenter_Studysupport
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">67</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>모바일 환경/프로그램/동영상 재생환경</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_06.02_Studysupport_detail1</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Studysupport_detail' }">
            CustomerCenter_Studysupport_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">68</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>원격지원 서비스</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_06.03_Studysupport_detail2</td>
        <td>
        CustomerCenter_Studysupport_detail과 같음
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">69</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>설문</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_07.01_Request</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Request' }">
            CustomerCenter_Request
          </router-link>,
          <router-link :to="{ name: 'CustomerCenter_Request_popup1' }">
            CustomerCenter_Request_popup1
          </router-link>,
          <router-link :to="{ name: 'CustomerCenter_Request_popup2' }">
            CustomerCenter_Request_popup2
          </router-link>,
          <router-link :to="{ name: 'CustomerCenter_Request_toast01' }">
            CustomerCenter_Request_toast01
          </router-link>,
          <router-link :to="{ name: 'CustomerCenter_Request_resultlist' }">
            CustomerCenter_Request_resultlist
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">70</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>설문결과</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_07.02_Request_result</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Request_result' }">
            CustomerCenter_Request_result
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">71</td>
        <td>Drawer - 고객센터</td>
        <td>　</td>
        <td>개인정보처리방침</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_08.01_PrivacyPolicy</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_PrivacyPolicy' }">
            CustomerCenter_PrivacyPolicy
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">72</td>
        <td>Drawer - ATORM</td>
        <td>ATORM</td>
        <td>설정</td>
        <td>권한변경</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.drawer_09.01_settings</td>
        <td>
          <router-link :to="{ name: 'Drawer_settings01' }">
            Drawer_settings01
          </router-link>,
          <router-link :to="{ name: 'Drawer_settings02' }">
            Drawer_settings02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">73</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>알림</td>
        <td>알림 리스트(승인알림, 운영알림)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.06._Alarm</td>
        <td>
          <router-link :to="{ name: 'Drawer_alerm' }">
            Drawer_alerm
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">74</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.01.    Main_User</td>
        <td>
          <router-link :to="{ name: 'Atorm_control' }">
            Atorm_control
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">75</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>아이템 팩토리</td>
        <td>기존 아이템</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.01._Item    factory_old</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_control' }">
            Atorm_itemfactory_control
          </router-link>
        </td>
        <td>3가지 유형 변수로 확인가능</td>
      </tr>
      <tr>
      <td align="center">76</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>신규 아이템 추가</td>
        <td>추가할 아이템 리스트</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_new list</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_control' }">
            Atorm_itemfactory_control
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">77</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>URL 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_url</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_url1' }">
            Atorm_itemfactory_url1
          </router-link>,
           <router-link :to="{ name: 'Atorm_itemfactory_url2' }">
            Atorm_itemfactory_url2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">78</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>동영상 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_video</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_video1' }">
            Atorm_itemfactory_video1
          </router-link>,
          <router-link :to="{ name: 'Atorm_itemfactory_video2' }">
            Atorm_itemfactory_video2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">79</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>문서 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_document</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_document1' }">
            Atorm_itemfactory_document1
          </router-link>,
          <router-link :to="{ name: 'Atorm_itemfactory_document2' }">
            Atorm_itemfactory_document2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">80</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>이미지 추가</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">81</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>오디오 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_audio</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_audio1' }">
            Atorm_itemfactory_audio1
          </router-link>,
           <router-link :to="{ name: 'Atorm_itemfactory_audio2' }">
            Atorm_itemfactory_audio2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">82</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>유튜브 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_youtube</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_youtube1' }">
            Atorm_itemfactory_youtube1
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">83</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>유튜브 검색</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_youtube_search</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_youtube_search1' }">
            Atorm_itemfactory_youtube_search1
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">84</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>TED 추가</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">85</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>TED 검색</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">86</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>선다형 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_multiple</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_multiple' }">
            Atorm_itemfactory_multiple
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">87</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>OX형 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_ox</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_ox' }">
            Atorm_itemfactory_ox
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">88</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>단답형 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item    factory_short</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_short' }">
            Atorm_itemfactory_short
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">89</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>아이템 검색</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.01._Item    factory_old_filter</td>
        <td>
          <router-link :to="{ name: 'Atorm_itemfactory_old_filter' }">
            Atorm_itemfactory_old_filter
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">90</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>FAQ</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.08._FAQ_main</td>
        <td>
          <router-link :to="{ name: 'Atorm_faq_main' }">
            Atorm_faq_main
          </router-link>
        </td>
        <td>작업중</td>
      </tr>
      <tr>
      <td align="center">91</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>FAQ 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.08.01._FAQ_details</td>
        <td>
          <router-link :to="{ name: 'Atorm_faq_detail' }">
            Atorm_faq_detail
          </router-link>
        </td>
        <td>작업중</td>
      </tr>
      <tr>
      <td align="center">92</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>과정 제작</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.Product_main</td>
        <td>
          <router-link :to="{ name: 'Atorm_control' }">
            Atorm_control
          </router-link>
          ,
          <router-link :to="{ name: 'Atorm_control_designer' }">
            Atorm_control_designer
          </router-link>
        </td>
        <td>텝 선택으로 확인</td>
      </tr>
      <tr>
      <td align="center">93</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>지식영상/사내 동영상</td>
        <td>과정제작</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.03._short    clip</td>
        <td>
          <router-link :to="{ name: 'Atorm_shortclip_1' }">
            Atorm_shortclip_1
          </router-link>
          ,
          <router-link :to="{ name: 'Atorm_shortclip_2' }">
            Atorm_shortclip_2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">94</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>이러닝</td>
        <td>기본정보 (선택정보, 학습목표,    과정소개)</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_basic</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_basic_1' }">
            Atorm_e-learning_basic_1
          </router-link>
          ,
          <router-link :to="{ name: 'Atorm_e-learning_basic_2' }">
            Atorm_e-learning_basic_2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">95</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>썸네일 선택</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_thumbnail</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_thumbnail' }">
            Atorm_e-learning_thumbnail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">96</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>학습 시간 설정</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_learning    time</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">97</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>오픈 요청일 설정</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_opening    date</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">98</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>선택정보</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">99</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>학습목표,과정소개</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">100</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>과정구성</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_material</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_material' }">
            Atorm_e-learning_material
          </router-link>
          ,
          <router-link :to="{ name: 'Atorm_e-learning_material_user' }">
            Atorm_e-learning_material_user
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">101</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>아이템 추가</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_add    item</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_material' }">
            Atorm_e-learning_material
          </router-link>
          ,
          <router-link :to="{ name: 'Atorm_e-learning_material_user' }">
            Atorm_e-learning_material_user
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">102</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>평가 제작</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_evaluation</td>
        <td>
          <router-link :to="{ name: 'ATORM_e-learning_evaluation_1' }">
            ATORM_e-learning_evaluation_1
          </router-link>
          ,
          <router-link :to="{ name: 'ATORM_e-learning_evaluation_2' }">
            ATORM_e-learning_evaluation_2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">103</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>선다형</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_multiple    popup</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_multiplepopup' }">
            Atorm_e-learning_multiplepopup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">104</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>O/X형</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_ox    popup</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_oxpopup' }">
            Atorm_e-learning_oxpopup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">105</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>단답형</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_short    answer popup</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_shortanswerpopup' }">
            Atorm_e-learning_shortanswerpopup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">106</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>수료 기준</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_criteria</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_criteria_1' }">
            Atorm_e-learning_criteria_1
          </router-link>
          ,
          <router-link :to="{ name: 'Atorm_e-learning_criteria_2' }">
            Atorm_e-learning_criteria_2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">107</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td></td>
        <td>설문추가</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_criteria_survey</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_criteria_survey' }">
            Atorm_e-learning_criteria_survey
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">108</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>완료</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_complete</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">109</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>집합/플립러닝</td>
        <td>기본정보</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_basic</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">110</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>과정구성</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_material</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">111</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>아이템 추가</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_add    item</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">112</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>레포트 추가</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_add    work</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">113</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>시험 추가</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_add    test</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">114</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>과정구성 - 사전학습(플립)</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_pre-material</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">115</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>과정구성 - 사후학습(플립)</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_post-material</td>
        <td>
          <router-link :to="{ name: 'Atorm_group_flip_post_material' }">
            Atorm_group_flip_post_material
          </router-link>
          <br/>
          <router-link :to="{ name: 'Atorm_group_flip_post_material_02' }">
            Atorm_group_flip_post_material_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">116</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>수료 기준</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_criteria</td>
        <td>
          <router-link :to="{ name: 'Atorm_group_flip_criteria' }">
            Atorm_group_flip_criteria
          </router-link>
          <br/>
          <router-link :to="{ name: 'Atorm_group_flip_criteria_02' }">
            Atorm_group_flip_criteria_02
          </router-link>
          <br/>
          <router-link :to="{ name: 'Atorm_group_flip_criteria_03' }">
            Atorm_group_flip_criteria_03
          </router-link>
          <br/>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">117</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>완료</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_complete</td>
        <td>
          <router-link :to="{ name: 'Atorm_group_flip_complete' }">
            Atorm_group_flip_complete
          </router-link>
          <br/>
          <router-link :to="{ name: 'Atorm_group_flip_complete_02' }">
            Atorm_group_flip_complete_02
          </router-link>
          <br/>
          <router-link :to="{ name: 'Atorm_group_flip_complete_03' }">
            Atorm_group_flip_complete_03
          </router-link>
          <br/>
          <router-link :to="{ name: 'Atorm_group_flip_complete_04' }">
            Atorm_group_flip_complete_04
          </router-link>
          <br/>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">118</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>제작 과정</td>
        <td>제작/승인 중인 과정 리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.03._process_main</td>
        <td>
          <router-link :to="{ name: 'Atorm_control' }">
            Atorm_control
          </router-link>
          ,
          <router-link :to="{ name: 'Atorm_control_designer' }">
            Atorm_control_designer
          </router-link>
        </td>
        <td>텝 선택으로 확인</td>
      </tr>
      <tr>
      <td align="center">119</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>과정현황</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.04._status_main</td>
        <td>
          <router-link :to="{ name: 'Atorm_control' }">
            Atorm_control
          </router-link>
          ,
          <router-link :to="{ name: 'Atorm_control_designer' }">
            Atorm_control_designer
          </router-link>
        </td>
        <td>텝 선택으로 확인</td>
      </tr>
      <tr>
      <td align="center">120</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>과정상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.04.01._status_details</td>
        <td>
          <router-link :to="{ name: 'Atorm_status_details' }">
            Atorm_status_details
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">121</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>이러닝 과정상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">122</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>평점 및 후기 자세히보기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.04.01._status_details_rate</td>
        <td>
          <router-link :to="{ name: 'Atorm_status_details_rate' }">
            Atorm_status_details_rate
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">123</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>필터</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.04.01._status_details_filter</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          공통필터적용중복처리
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">124</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>공유 하기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.04.02._status_share</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          OS컴포넌트적용중복처리
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">125</td>
        <td>Drawer - ATORM</td>
        <td>Main - Designer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.01.    Main_Designer</td>
        <td>
          <router-link :to="{ name: 'Atorm_control_designer' }">
            Atorm_control_designer
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">126</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>승인대기 (운영관리-디자이너)</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.05._confirm    list_main</td>
        <td>
          <router-link :to="{ name: 'Atorm_control' }">
            Atorm_control
          </router-link>
          ,
          <router-link :to="{ name: 'Atorm_control_designer' }">
            Atorm_control_designer
          </router-link>
        </td>
        <td>텝 선택으로 확인</td>
      </tr>
      <tr>
      <td align="center">127</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>승인대기 리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.05.01._confirm    list_managing details</td>
        <td>
          <router-link :to="{ name: 'Atorm_confirm_list' }">
            Atorm_confirm_list
          </router-link>
        </td>
        <td>선택 터치시 타입 2가지 확인가능</td>
      </tr>
      <tr>
      <td align="center">128</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>　</td>
        <td>승인대기 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.05.02._confirm    list_confirm request details</td>
        <td>
          <router-link :to="{ name: 'Atorm_confirm_list_detail' }">
            Atorm_confirm_list_detail
          </router-link>
        </td>
        <td>작업중 - 디자인요청</td>
      </tr>
      <tr>
      <td align="center">129</td>
        <td>Drawer - ATORM</td>
        <td>　</td>
        <td>매뉴얼</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.01. manual</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">130</td>
        <td>Drawer - 지식 cliping</td>
        <td>지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.01.Main</td>
        <td>
          <router-link :to="{ name: 'CLIPing_main' }">
            CLIPing_main
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">131</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>지식 cliping 가이드</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.02.Guide</td>
        <td>
          <router-link :to="{ name: 'CLIPing_guide' }">
            CLIPing_guide
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">132</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>PaperPro</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.06.PaperPro</td>
        <td>
          <router-link :to="{ name: 'CLIPing_paperPro' }">
            CLIPing_paperPro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">133</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.06.PaperProDetail</td>
        <td>
          <router-link :to="{ name: 'CLIPing_paperProDetail' }">
            CLIPing_paperProDetail
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_paperProDetail_port' }">
            CLIPing_paperProDetail_port
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_paperProDetailComment' }">
            CLIPing_paperProDetailComment
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">134</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>SlideShare</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.04.Column</td>
        <td>
          <router-link :to="{ name: 'CLIPing_column' }">
            CLIPing_column
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">135</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>서평칼럼</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.04.ColumnDetail</td>
        <td>
          <router-link :to="{ name: 'CLIPing_column_detail' }">
            CLIPing_column_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">136</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.03.BookSummary</td>
        <td>
          <router-link :to="{ name: 'CLIPing_bookSummary' }">
            CLIPing_bookSummary
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">137</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>도서요약</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.03.BookSummaryDetail</td>
        <td>
          <router-link :to="{ name: 'CLIPing_bookSummary_detail' }">
            CLIPing_bookSummary_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">138</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClub</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClub' }">
            CLIPing_languageClub
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">139</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>랭기지클럽</td>
        <td>영어</td>
        <td>Conversation</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubList02</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubList02' }">
            CLIPing_languageClubList02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">140</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubDetail01</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubDetail01' }">
            CLIPing_languageClubDetail01
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_languageClubDetail01_scroll' }">
            CLIPing_languageClubDetail01_scroll
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">141</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>Fun English</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubList02</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubList02' }">
            CLIPing_languageClubList02
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">142</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubDetail01</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubDetail01' }">
            CLIPing_languageClubDetail01
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_languageClubDetail01_scroll' }">
            CLIPing_languageClubDetail01_scroll
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">143</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>중국어</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubList01</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubList' }">
            CLIPing_languageClubList
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">144</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubDetail01</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubDetail01' }">
            CLIPing_languageClubDetail01
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_languageClubDetail01_scroll' }">
            CLIPing_languageClubDetail01_scroll
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">145</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>일어</td>
        <td>일어한마디</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubList02</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubList02' }">
            CLIPing_languageClubList02
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">146</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubDetail01</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubDetail01' }">
            CLIPing_languageClubDetail01
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_languageClubDetail01_scroll' }">
            CLIPing_languageClubDetail01_scroll
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">147</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>일본문화 이해</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubList02</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubList02' }">
            CLIPing_languageClubList02
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">148</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.05.LanguageClubDetail01</td>
        <td>
          <router-link :to="{ name: 'CLIPing_languageClubDetail01' }">
            CLIPing_languageClubDetail01
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_languageClubDetail01_scroll' }">
            CLIPing_languageClubDetail01_scroll
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">149</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>지식영상</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.02.VideoAll</td>
        <td>
          <router-link :to="{ name: 'CLIPing_video_all' }">
            CLIPing_video_all
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">150</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>시리즈 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.02.VideoSeriesDetail</td>
        <td>
          <router-link :to="{ name: 'CLIPing_videoSeries_detail' }">
            CLIPing_videoSeries_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">151</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>영상 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.02.VideoDetail</td>
        <td>
          <router-link :to="{ name: 'CLIPing_videodetail' }">
            CLIPing_videodetail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">152</td>
        <td>Drawer - 지식 cliping</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>댓글작성</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.02.VideoComment</td>
        <td>
          <router-link :to="{ name: 'CLIPing_videoComment' }">
            CLIPing_videoComment
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">153</td>
        <td>Main(TABS)</td>
        <td>추천탭</td>
        <td>큐레이션 UI 1번</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>1. App bar 유형선택 <br>
          2. 해당 탭 사용여부 설정<br>
          3. 포틀릿 사용여부 및 순서 설정</td>
        <td class="textL">02.Main_02.01.02. CurateUI01</td>
        <td>
          <router-link :to="{ name: 'Main_control' }">
            Main_control
          </router-link>
          ,
          <router-link :to="{ name: 'Main_curateUI01' }">
            Main_curateUI01
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">154</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>큐레이션 UI 2번</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.01.02.    CurateUI02</td>
        <td>
          <router-link :to="{ name: 'Main_curateUI02' }">
            Main_curateUI02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">155</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>큐레이션 UI 3번</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.01.02.    CurateUI03</td>
        <td>
          <router-link :to="{ name: 'Main_curateUI03' }">
            Main_curateUI03
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">156</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>큐레이션 UI 4번</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.01.02.    CurateUI04</td>
        <td>
          <router-link :to="{ name: 'Main_curateUI04' }">
            Main_curateUI04
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">157</td>
        <td>Main(TABS)</td>
        <td>홈탭</td>
        <td>롤링이미지 배너</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>1. 해당 탭 사용여부 설정<br>
          2. 포틀릿 사용여부 및 순서 설정</td>
        <td class="textL">02.Main_02.02.01.Banner</td>
        <td>
          <router-link :to="{ name: 'Main_banner' }">
            Main_banner
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">158</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>공통게시판 2</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.Board</td>
        <td>
          <router-link :to="{ name: 'Main_board' }">
            Main_board
          </router-link>
          ,
          <router-link :to="{ name: 'Main_board_empty' }">
            Main_board_empty
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">159</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>그래프형 수강목록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.GraphClassList</td>
        <td>
          <router-link :to="{ name: 'Main_graphClassList' }">
            Main_graphClassList
          </router-link>
          ,
          <router-link :to="{ name: 'Main_graphClassList_more' }">
            Main_graphClassList_more
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">160</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>히스토리형 수강목록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.Historylist</td>
        <td>
          <router-link :to="{ name: 'Main_historylist' }">
            Main_historylist
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">161</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>확장통계형</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.Statistics</td>
        <td>
          <router-link :to="{ name: 'Main_statistics_1' }">
            Main_statistics_1
          </router-link>
          ,
          <router-link :to="{ name: 'Main_statistics_2' }">
            Main_statistics_2
          </router-link>
          ,
          <router-link :to="{ name: 'Main_statistics_3' }">
            Main_statistics_3
          </router-link>
          ,
          <router-link :to="{ name: 'Main_statistics_4' }">
            Main_statistics_4
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">162</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>수강신청 기간안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.EnrollNotice</td>
        <td>
          <router-link :to="{ name: 'Main_enrollNotice' }">
            Main_enrollNotice
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">163</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>관심과정 (스크랩)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.Scrap</td>
        <td>
          <router-link :to="{ name: 'Main_scrap' }">
            Main_scrap
          </router-link>
          ,
          <router-link :to="{ name: 'Main_scrap_empty' }">
            Main_scrap_empty
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">164</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>학점이수현황</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.GradeStatus</td>
        <td>
          <router-link :to="{ name: 'Main_gradeStatus' }">
            Main_gradeStatus
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">165</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>상세학점 이수현황</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.GradeStatusDetail</td>
        <td>
          <router-link :to="{ name: 'Main_gradeStatusDetail' }">
            Main_gradeStatusDetail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">166</td>
        <td>Main(TABS)</td>
        <td>탐색 탭</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.04.Browse    main</td>
        <td>
          <router-link :to="{ name: 'Main_04_browse_main' }">
            Main_04_browse_main
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">167</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>카테고리 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.04.Browse    ListDetail01</td>
        <td>
          <router-link :to="{ name: 'Main_04_browse_listDetail01' }">
            Main_04_browse_listDetail01
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">168</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>　</td>
        <td>카테고리 세부 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.04.Browse    ListDetail02</td>
        <td>
          <router-link :to="{ name: 'Main_04_browse_listDetail02' }">
            Main_04_browse_listDetail02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">169</td>
        <td>Main(TABS)</td>
        <td>구독탭</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>1. 해당 탭 사용여부 설정</td>
        <td class="textL">02.Main_02.02.05.Main_subscribed</td>
        <td>
          <router-link :to="{ name: 'Main_subscribed' }">
            Main_subscribed
          </router-link>
          ,
          <router-link :to="{ name: 'Main_subscribed_empty' }">
            Main_subscribed_empty
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">170</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>전체채널 목록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.05.Channel    List_null</td>
        <td>
          <router-link :to="{ name: 'Main_channel_list_null' }">
            Main_channel_list_null
          </router-link>
          ,
          <router-link :to="{ name: 'Main_channel_list' }">
            Main_channel_list
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">171</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>　</td>
        <td>채널상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.05.Channel_Detail</td>
        <td>
          <router-link :to="{ name: 'Main_channel_detail_before' }">
            Main_channel_detail_before
          </router-link>
          ,
          <router-link :to="{ name: 'Main_channel_detail_after' }">
            Main_channel_detail_after
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">172</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>게시글 상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.05.Article_Detail</td>
        <td>
          <router-link :to="{ name: 'Main_article_detail' }">
            Main_article_detail
          </router-link>
          ,
          <router-link :to="{ name: 'Main_article_detail_like' }">
            Main_article_detail_like
          </router-link>
          ,
          <router-link :to="{ name: 'Main_article_detailQnA' }">
            Main_article_detailQnA
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">173</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>선택 키워드 페이지</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.05.Keyword    List</td>
        <td>
          <router-link :to="{ name: 'Main_keyword_list' }">
            Main_keyword_list
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">174</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>작가상세</td>
        <td>채널목록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.05.Writer    Channel</td>
        <td>
          <router-link :to="{ name: 'Main_writer_channel' }">
            Main_writer_channel
          </router-link>
          ,
          <router-link :to="{ name: 'Main_writer_scroll' }">
            Main_writer_scroll
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">175</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>　</td>
        <td>게시글</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.05.Writer    Article</td>
        <td>
          <router-link :to="{ name: 'Main_writer_article' }">
            Main_writer_article
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">176</td>
        <td>Main(TABS)</td>
        <td>　</td>
        <td>　</td>
        <td>작가이력</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.05.Writer    History</td>
        <td>
          <router-link :to="{ name: 'Main_writer_history' }">
            Main_writer_history
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">177</td>
        <td>Main(TABS)</td>
        <td>학습탭</td>
        <td>학습목록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.06. Learning Main</td>
        <td>
          <router-link :to="{ name: 'Main_learning_main' }">
            Main_learning_main
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">178</td>
        <td>검색</td>
        <td>검색 메인</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">08.search_03.01.Enter</td>
        <td>
          <router-link :to="{ name: 'search_enter' }">
            search_enter
          </router-link>
          ,
          <router-link :to="{ name: 'search_enter_recommend' }">
            search_enter_recommend
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">179</td>
        <td>검색</td>
        <td>검색어 입력</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">08.search_03.02.typing</td>
        <td>
          <router-link :to="{ name: 'search_typing' }">
            search_typing
          </router-link>
          ,
          <router-link :to="{ name: 'search_typing_snackbar' }">
            search_typing_snackbar
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">180</td>
        <td>검색</td>
        <td>검색 결과 - 정규과정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">08.search_04.04.result_course</td>
        <td>
          <router-link :to="{ name: 'search_result_course' }">
            search_result_course
          </router-link>
          ,
          <router-link :to="{ name: 'search_result_course_B2C' }">
            search_result_course_B2C
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">181</td>
        <td>검색</td>
        <td>검색 결과 - 도서요약/서평칼럼</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">08.search_04.04.01.result_book</td>
        <td>
          <router-link :to="{ name: 'search_result_book' }">
            search_result_book
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">182</td>
        <td>검색</td>
        <td>검색 결과 - PaperPro</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">08.search_04.04.02.result_paperpro</td>
        <td>
          <router-link :to="{ name: 'search_result_paperpro' }">
            search_result_paperpro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">183</td>
        <td>검색</td>
        <td>검색 결과 - 랭귀지클럽</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">08.search_04.04.03.result_language</td>
        <td>
          <router-link :to="{ name: 'search_result_language' }">
            search_result_language
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">184</td>
        <td>검색</td>
        <td>검색 결과 - 학습노트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">08.search_04.04.04.result_note</td>
        <td>
          <router-link :to="{ name: 'search_result_note' }">
            search_result_note
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">185</td>
        <td>검색</td>
        <td>검색 결과 - 없는경우</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">08.search_04.04.04.result_nodata</td>
        <td>
          <router-link :to="{ name: 'search_result_nodata' }">
            search_result_nodata
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">186</td>
        <td>Floating BTN</td>
        <td>나의 공간</td>
        <td>정규학습(학습목록)</td>
        <td>학습중</td>
        <td>　</td>
        <td>　</td>
        <td>플로팅 버튼 사용여부 설정</td>
        <td class="textL">04.MySpace_04.01.formal_studying</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_studying' }">
            MySpace_formal_studying
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">187</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>학습신청중</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_application</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_application' }">
            MySpace_formal_application
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">188</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>학습완료</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_complete</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_complete' }">
            MySpace_formal_complete
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">189</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>학습취소</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_cancel</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_cancel' }">
            MySpace_formal_cancel
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">190</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>배송현황 조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_tracking</td>
        <td>
          웹 브라우저로 이동
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">191</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>견적서 조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_estimate</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_tempcertificate' }">
            MySpace_formal_tempcertificate
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">192</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>학습확인증 조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_studyconfirmation</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_tempcertificate' }">
            MySpace_formal_tempcertificate
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">193</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>임시 수료확인증 조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_tempcertificate</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_tempcertificate' }">
            MySpace_formal_tempcertificate
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">194</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>입금증 조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_receiptcash</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_tempcertificate' }">
            MySpace_formal_tempcertificate
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">195</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>영수증 조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_receiptcard</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_tempcertificate' }">
            MySpace_formal_tempcertificate
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">196</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>비용신청단계 조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_requeststage</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_requeststage' }">
            MySpace_formal_requeststage
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">197</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>위탁훈련계약서 조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_consignment</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_tempcertificate' }">
            MySpace_formal_tempcertificate
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">198</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>수료증 조회 (국문)</td>
        <td>　</td>
        <td></td>
        <td class="textL">04.MySpace_04.01.formal_certificatekr</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_certificatekr' }">
            MySpace_formal_certificatekr
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">199</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>수료증 조회 (영문)</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_certificateeng</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_certificateeng' }">
            MySpace_formal_certificateeng
          </router-link>
          ,
          <router-link :to="{ name: 'MySpace_formal_certificateeng_pop' }">
            MySpace_formal_certificateeng_pop
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">200</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>환급정보수집동의</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_attendingconfirmation</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_attendingconfirmation' }">
            MySpace_formal_attendingconfirmation
          </router-link>
        </td>
        <td>삭제</td>
      </tr>
      <tr>
      <td align="center">201</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>학습계획변경</td>
        <td>　</td>
        <td></td>
        <td class="textL">04.MySpace_04.01.formal_changeplan</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_changeplan' }">
            MySpace_formal_changeplan
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">202</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>자율학습</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.02.autonomy</td>
        <td>
          <router-link :to="{ name: 'MySpace_autonomy' }">
            MySpace_autonomy
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">203</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>다운로드</td>
        <td>수강중인 과정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.03.download</td>
        <td>
          <router-link :to="{ name: 'MySpace_download' }">
            MySpace_download
          </router-link>
          ,
          <router-link :to="{ name: 'MySpace_download_edit' }">
            MySpace_download_edit
          </router-link>
          ,
          <router-link :to="{ name: 'MySpace_downloading' }">
            MySpace_downloading
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">204</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>다운로드한 과정상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.03.download_detail</td>
        <td>
          <router-link :to="{ name: 'MySpace_download_detail' }">
            MySpace_download_detail
          </router-link>
          ,
          <router-link :to="{ name: 'MySpace_download_detail_edit' }">
            MySpace_download_detail_edit
          </router-link>
        </td>
        <td>20190130 수정</td>
      </tr>
      <tr>
      <td align="center">205</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>완료한 과정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.03.download_done</td>
        <td>
          <router-link :to="{ name: 'MySpace_download' }">
            MySpace_download
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">206</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>다운로드(Offline Mode)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.03.download_offline</td>
        <td>
          <router-link :to="{ name: 'MySpace_download_offline' }">
            MySpace_download_offline
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">207</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>학습계획(Learning    journey)</td>
        <td>나의 학습계획 (월별/분기별)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.04.learningjourney</td>
        <td>
          <router-link :to="{ name: 'MySpace_learningjourney_1' }">
            MySpace_learningjourney_1
          </router-link>
          ,
          <router-link :to="{ name: 'MySpace_learningjourney_2' }">
            MySpace_learningjourney_2
          </router-link>
          ,
          <router-link :to="{ name: 'MySpace_learningjourney_like' }">
            MySpace_learningjourney_like
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">208</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>학습독려 설정</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.04.learningjourney_encourage</td>
        <td>
          <router-link :to="{ name: 'MySpace_learningjourney_encourage' }">
            MySpace_learningjourney_encourage
          </router-link>
          ,
          <router-link :to="{ name: 'MySpace_learningjourney_encourage_off' }">
            MySpace_learningjourney_encourage_off
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">209</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>학습 캘린더 설정</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.04.learningjourney_calendar</td>
        <td>
          <router-link :to="{ name: 'MySpace_learningjourney_calendar_2' }">
            MySpace_learningjourney_calendar_2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">210</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>학습계획 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.04.learningjourney_add</td>
        <td>
          <router-link :to="{ name: 'MySpace_learningjourney_add' }">
            MySpace_learningjourney_add
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">211</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>내가 찜한 학습</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.04.learningjourney_like</td>
        <td>
          <router-link :to="{ name: 'learningjourney_like' }">
            learningjourney_like
          </router-link>
          <router-link :to="{ name: 'MySpace_learningjourney_calendarmanagement_2' }">
            MySpace_learningjourney_calendarmanagement_2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">212</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>나의 지식 cliping </td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.05.cliping</td>
        <td>
          <router-link :to="{ name: 'MySpace_cliping' }">
            MySpace_cliping
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">213</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>내가 본 컨텐츠</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.05.cliping_viewed</td>
        <td>
          <router-link :to="{ name: 'MySpace_cliping_viewed' }">
            MySpace_cliping_viewed
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">214</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>나의 지식 cliping 활동이력</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.05.cliping_analysis</td>
        <td>
          <router-link :to="{ name: 'MySpace_cliping_analysis' }">
            MySpace_cliping_analysis
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">215</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>나의 지식 cliping 컨텐츠 상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.05.cliping_analysis_detail</td>
        <td>
          <router-link :to="{ name: 'CLIPing_videodetail' }">
            CLIPing_videodetail
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_column_detail' }">
            CLIPing_column_detail
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_bookSummary_detail' }">
            CLIPing_bookSummary_detail
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_paperProDetail' }">
            CLIPing_paperProDetail
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_paperProDetail_port' }">
            CLIPing_paperProDetail_port
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_paperProDetailComment' }">
            CLIPing_paperProDetailComment
          </router-link>
          등 지식클리핑의 상세
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">216</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>학습 관리</td>
        <td>학습노트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.06.studymanagement_note</td>
        <td>
          <router-link :to="{ name: 'MySpace_studymanagement_note' }">
            MySpace_studymanagement_note
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">217</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td></td>
        <td>학습노트 상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.06.studymanagement_note_detail</td>
        <td>
          <router-link :to="{ name: 'MySpace_studymanagement_note_detail' }">
            MySpace_studymanagement_note_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">218</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>노트 수정</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.06.studymanagement_note_edit</td>
        <td>
          <router-link :to="{ name: 'MySpace_studymanagement_note_edit' }">
            MySpace_studymanagement_note_edit
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">219</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>리마인더</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.06.studymanagement_reminder</td>
        <td>
          <router-link :to="{ name: 'MySpace_studymanagement_reminder' }">
            MySpace_studymanagement_reminder
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">220</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>리마인더 상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.06.studymanagement_reminder_detail</td>
        <td>
          <router-link :to="{ name: 'MySpace_studymanagement_reminder_detail' }">
            MySpace_studymanagement_reminder_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">221</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>학습통계</td>
        <td>학습현황통계</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.07.studystatistics</td>
        <td>
          <router-link :to="{ name: 'MySpace_studystatistics' }">
            MySpace_studystatistics
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">222</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>나의 성적</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.07.studystatistics_grade</td>
        <td>
          <router-link :to="{ name: 'MySpace_studystatistics_grade' }">
            MySpace_studystatistics_grade
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">223</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>나의 성장</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.07.studystatistics_grown</td>
        <td>
          <router-link :to="{ name: 'MySpace_studystatistics_grown' }">
            MySpace_studystatistics_grown
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">224</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>나의 활동</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.07.studystatistics_activity</td>
        <td>
          <router-link :to="{ name: 'MySpace_studystatistics_activity' }">
            MySpace_studystatistics_activity
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">225</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>검색어 통계</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.07.studystatistics_keyword</td>
        <td>
          <router-link :to="{ name: 'MySpace_studystatistics_keyword' }">
            MySpace_studystatistics_keyword
          </router-link>
          ,
          <router-link :to="{ name: 'MySpace_studystatistics_keyword_nosearch' }">
            MySpace_studystatistics_keyword_nosearch
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">226</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>포인트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.08.point</td>
        <td>
          <router-link :to="{ name: 'MySpace_point' }">
            MySpace_point
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">227</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>포인트 적립 내역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.08.point_log</td>
        <td>
          <router-link :to="{ name: 'MySpace_point' }">
            MySpace_point
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">228</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>학점이수 현황</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.09.credit</td>
        <td>
          <router-link :to="{ name: 'MySpace_credit' }">
            MySpace_credit
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">229</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>쿠폰</td>
        <td>보유내역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.10.coupon</td>
        <td>
          <router-link :to="{ name: 'MySpace_coupon' }">
            MySpace_coupon
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">230</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>쿠폰 등록</td>
        <td>　</td>
        <td></td>
        <td class="textL">04.MySpace_04.10.coupon_register</td>
        <td>
          <router-link :to="{ name: 'MySpace_coupon_register' }">
            MySpace_coupon_register
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">231</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>사용내역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.10.coupon_used</td>
        <td>
          <router-link :to="{ name: 'MySpace_coupon_used' }">
            MySpace_coupon_used
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">232</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>검색필터</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.11.filter</td>
        <td>
          <router-link :to="{ name: 'MySpace_filter' }">
            MySpace_filter
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">233</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>부서장 목록조회</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">234</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>부서장 결재요청 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">235</td>
        <td>Floating BTN</td>
        <td>　</td>
        <td>　</td>
        <td>승인 유의사항 팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">236</td>
        <td>학습홈 영역</td>
        <td>기본 학습홈</td>
        <td>학습홈 (코스웨어형-차시노출형)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.01.home_courseware_module</td>
        <td>
          <router-link :to="{ name: 'Study_home_courseware_module_01' }">
            Study_home_courseware_module_01
          </router-link><br/>
          <router-link :to="{ name: 'Study_home_courseware_module_02' }">
            Study_home_courseware_module_02
          </router-link><br/>
          
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">237</td>
        <td>학습홈 영역</td>
        <td>기본 학습홈</td>
        <td>학습홈 (코스웨어형-LO/SO형)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.01.home_courseware_LO/SO</td>
        <td>
          <router-link :to="{ name: 'Study_home_courseware_loso' }">
            Study_home_courseware_loso
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">238</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (MOOC형)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.02.home_mooc</td>
        <td>
          <router-link :to="{ name: 'Study_home_mooc_open' }">
            Study_home_mooc_open
          </router-link><br/>
          <router-link :to="{ name: 'Study_home_mooc_close' }">
            Study_home_mooc_close
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">239</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (복합형)(2/13)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.03.home_mixed</td>
        <td>
          <router-link :to="{ name: 'Study_home_mixed' }">
            Study_home_mixed
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">240</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (집합)(2/12)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.04.home_set</td>
        <td>
          <router-link :to="{ name: 'Study_home_set' }">
            Study_home_set
          </router-link>
          <br />
          <router-link :to="{ name: 'Study_home_set02' }">
            Study_home_set02(Study_LO_viewer와 화면 동일)
          </router-link>        
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">241</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td></td>
        <td>학습 캘린더</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.05.home_set_calendar</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          대기
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">242</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (독서통신)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.06.home_set_book</td>
        <td>
          <router-link :to="{ name: 'Study_home_set_book' }">
            Study_home_set_book
          </router-link>
          <br/>
          <router-link :to="{ name: 'Study_home_set_book02' }">
            Study_home_set_book02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">243</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (전화외국어)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.07.home_set_phonelangauge</td>
        <td>
          <router-link :to="{ name: 'Study_home_set_phonelanguage' }">
            Study_home_set_phonelanguage
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">244</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (외국어BPO)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.08.home_set_langaugeBPO</td>
        <td>
          <router-link :to="{ name: 'Study_home_set_langaugeBPO' }">
            Study_home_set_langaugeBPO
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">245</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (분기강조형)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.09.home_set_quarter_emphasis</td>
        <td>
          <router-link :to="{ name: 'Study_home_set_quarter_emphasis' }">
            Study_home_set_quarter_emphasis
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">246</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (분기설문형)(2/13)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.10.home_set_quarter_survey</td>
        <td>
          <router-link :to="{ name: 'Study_home_set_quarter_survey' }">
           Study_home_set_quarter_survey
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">247</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>설문응시</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.11.home_set_quarter_survey_do</td>
        <td>
          <router-link :to="{ name: 'Study_home_set_quarter_survey_do' }">
             Study_home_set_quarter_survey_do
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">248</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>역량진단</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.12.home_set_quarter_survey_ability</td>
        <td>
          <router-link :to="{ name: 'Study_home_set_quarter_survey_ability' }">
            Study_home_set_quarter_survey_ability
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">249</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (조합형)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.13.home_union</td>
        <td>
          <router-link :to="{ name: 'Study_home_union' }">
            Study_home_union
          </router-link><br/>         
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">250</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>과정 Map (조합)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.14.home_union_map</td>
        <td>
          <router-link :to="{ name: 'Study_home_union_map' }">
            Study_home_union_map
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">251</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습홈 (퀵맞춤)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.15.home_quickfit</td>
        <td>
          <router-link :to="{ name: 'Study_home_quickfit' }">
            Study_home_quickfit
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">252</td>
        <td>학습홈 영역</td>
        <td>기본메뉴</td>
        <td>학습현황 (차시노출)(2/14</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>각 과정별 메뉴 사용여부 설정</td>
        <td class="textL">05.Study_02.01.studystatus</td>
        <td>
          <router-link :to="{ name: 'Study_02_studystatus' }">
             Study_02_studystatus
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">253</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>과제목록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.02.studystatus_assignment</td>
        <td>
          <router-link :to="{ name: 'Study_02_studystatus_assignment' }">
            Study_02_studystatus_assignment
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">254</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>과제작성</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.03.studystatus_assignment_apply</td>
        <td>
          <router-link :to="{ name: 'Study_02_studystatus_assignment_apply' }">
            Study_02_studystatus_assignment_apply
          </router-link>
        </td>
        <td>컴포넌트화</td>
      </tr>
      <tr>
      <td align="center">255</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>과제제출 결과</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.04.studystatus_assignment_result</td>
        <td>
          <router-link :to="{ name: 'Study_02_studystatus_assignment_result' }">
            Study_02_studystatus_assignment_result
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">256</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>평가목록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.05.studystatus_assessment</td>
        <td>
          <router-link :to="{ name: 'Study_02_studystatus_assessment' }">
            Study_02_studystatus_assessment
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">257</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>과정평가 학습자 안내</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.06.studystatus_assessment_notice</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">258</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>평가 주의사항 안내 (비환급)</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.07.studystatus_assessment_notice_01</td>
        <td>
          <router-link :to="{ name: 'Study_02_studystatus_assessment_notice' }">
            Study_02_studystatus_assessment_notice
          </router-link>
        </td>
        <td>체크버튼 컴포넌트화</td>
      </tr>
      <tr>
      <td align="center">259</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>평가 주의사항 안내 (환급)</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.08.studystatus_assessment_notice_02</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">260</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>과정평가창</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.09.studystatus_assessment_window</td>
        <td>
          <router-link :to="{ name: 'Study_studystatus_assessment_window_01' }">
            Study_studystatus_assessment_window_01
          </router-link><br/>
          <router-link :to="{ name: 'Study_studystatus_assessment_window_02' }">
            Study_studystatus_assessment_window_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">261</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>제출결과</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.10.studystatus_assessment_applyresult</td>
        <td>
          <router-link :to="{ name: 'Study_studystatus_assessment_applyresult' }">
            Study_studystatus_assessment_applyresult
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">262</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>채점결과</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.11.studystatus_assessment_score</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">263</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>평가결과 통계</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.12.studystatus_assessment_resultanalysis</td>
        <td>
          <router-link :to="{ name: 'Study_studystatus_assessment_resultanalysis' }">
            Study_studystatus_assessment_resultanalysis
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">264</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>과정평가 제출메일</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.13.studystatus_assessment_mail</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">265</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>출석율 (집합)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.14.studystatus_attendance_set</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          etc_QR 동일, 네이티브 영역. 개발필요
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">266</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>출결현황(외국어 BPO)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.15.studystatus_attendance_bpo</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">267</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>수료기준</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.16.studystatus_finishstandard</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">268</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습목차(2/14)</td>
        <td>모아보기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.17.studylist</td>
        <td>
          <router-link :to="{ name: 'Study_0217studylist' }">
            Study_0217studylist
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">269</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>다운로드</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.18.studylist_download</td>
        <td>
          <router-link :to="{ name: 'Study_0218studylist_download_01' }">
            Study_0218studylist_download_01
          </router-link> <br />
          <router-link :to="{ name: 'Study_0218studylist_download_02' }">
            Study_0218studylist_download_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">270</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습노트 (학습창으로 이동)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.19.studynote</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">271</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>학습노트 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">272</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>학습노트 등록/수정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.20.studynote_edit</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">273</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>질문방</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.21.studyquestion</td>
        <td>
          <router-link :to="{ name: 'Study_studyquestion' }">
            Study_studyquestion
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">274</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>질문방 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.22.studyquestion_detail</td>
        <td>
          <router-link :to="{ name: 'Study_02_studyquestion_detail' }">
            Study_studyquestion_detail
          </router-link><br/>
          <router-link :to="{ name: 'Study_02_studyquestion_detail_02' }">
            Study_studyquestion_detail_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">275</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>질문방 등록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.23.studyquestion_regi</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">276</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>질문방 수정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.23.studyquestion_edit</td>
        <td>
          <router-link :to="{ name: 'Study_02_studyquestion_edit' }">
            Study_02_studyquestion_edit
          </router-link>
        </td>
        <td>컴포넌트화</td>
      </tr>
      <tr>
      <td align="center">277</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습알림</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.24.studynotice</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">278</td>
        <td>학습홈 영역</td>
        <td>선택메뉴</td>
        <td>공지사항</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.25.notice</td>
        <td>
          <router-link :to="{ name: 'Study_notice' }">
            Study_notice
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">279</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>공지사항 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.26.notice_detail</td>
        <td>
          <router-link :to="{ name: 'Study_02_notice_detail' }">
            Study_02_notice_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">280</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>자료실</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.27.data</td>
        <td>
          <router-link :to="{ name: 'Study_data' }">
            Study_data
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">281</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>자료실 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.28.data_detail</td>
        <td>
          <router-link :to="{ name: 'Study_data_detail' }">
            Study_data_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">282</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>수강후기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.29.studycomment</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">283</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>수강후기 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.30.studycomment_detail</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">284</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>수강후기 수정/등록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">285</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>사전진단</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">286</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>토론방</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.31.discuss</td>
        <td>
          <router-link :to="{ name: 'Study_discuss' }">
            Study_discuss
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">287</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>토론방 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.32.discuss_detail</td>
        <td>
          <router-link :to="{ name: 'Study_02_discuss_detail' }">
            Study_02_discuss_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">288</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>토론방 댓글입력</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.33.discuss_reply</td>
        <td>
          <router-link :to="{ name: 'Study_02_discuss_reply' }">
            Study_discuss_reply
          </router-link><br/>
          <router-link :to="{ name: 'Study_02_discuss_reply_02' }">
            Study_discuss_reply_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">289</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>토론방 수정/등록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.34.discuss_edit</td>
        <td>
          <router-link :to="{ name: 'Study_02_discuss_edit' }">
            Study_discuss_edit
          </router-link><br/>
          <router-link :to="{ name: 'Study_02_discuss_edit_02' }">
            Study_discuss_edit_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">290</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>리플렉션노트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.35.reflectionnote</td>
        <td>
          <router-link :to="{ name: 'Study_reflectionnote' }">
            Study_reflectionnote
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">291</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>리플렉션 노트 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.36.reflectionnote_detail</td>
        <td>
          <router-link :to="{ name: 'Study_02_reflectionnote_detail' }">
            Study_reflectionnote_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">292</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>리플렉션 노트 수정/등록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.37.reflectionnote_edit</td>
        <td>
          <router-link :to="{ name: 'Study_02_reflectionnote_edit' }">
            Study_reflectionnote_edit
          </router-link>
          <br/>
          <router-link :to="{ name: 'Study_02_reflectionnote_edit_02' }">
            Study_reflectionnote_edit_02
          </router-link>
        </td>
        <td>컴포넌트화</td>
      </tr>
      <tr>
      <td align="center">293</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>리마인더</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.38.reminder</td>
        <td>
          <router-link :to="{ name: 'Study_reminder' }">
            Study_reminder
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">294</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>리마인더 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.39.reminder_detail</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">295</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습알림</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">296</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>요약집 (SO) </td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.40.summary</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">297</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>요약집 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.41.summary_detail</td>
        <td>
          <router-link :to="{ name: 'Study_02_summary_detail' }">
            Study_02_summary_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">298</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>설문조사 (만족도 평가)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.43.survey</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">299</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>설문조사 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.44.survey_detail</td>
        <td>
          <router-link :to="{ name: 'Study_02_survey_detail' }">
            Study_02_survey_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">300</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>용어사전</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.45.dictionary</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">301</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>용어사전 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.46.dictionary_detail</td>
        <td>
          <router-link :to="{ name: 'Study_dictionary_detail' }">
            Study_dictionary_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">302</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>Quick Poll/Quick    Answer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.47.qpqa</td>
        <td>
          <router-link :to="{ name: 'Study_qpqa' }">
            Study_qpqa
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">303</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>Quick Poll 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.48.qpqa_detail_01</td>
        <td>
          <router-link :to="{ name: 'Study_02_qpqa_detail' }">
            Study_02_qpqa_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">304</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>Quick Poll 결과조회</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.49.qpqa_result_01</td>
        <td>
          <router-link :to="{ name: 'Study_02_qpqa_result' }">
            Study_02_qpqa_result
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">305</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>Quick Answer 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.50.qpqa_detail_02</td>
        <td>
          <router-link :to="{ name: 'Study_02_qpqa_detail_02' }">
            Study_02_qpqa_detail_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">306</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>Quick Answer 결과조회</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.51.qpqa_result_02</td>
        <td>
          <router-link :to="{ name: 'Study_02_qpqa_result_02' }">
            Study_02_qpqa_result_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">307</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습 캘린더</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">308</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>학습가이드</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.52.guide</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">309</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>사전학습</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">310</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>FAQ</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.53.faq</td>
        <td>
          <router-link :to="{ name: 'Study_faq' }">
            Study_faq
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">311</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>FAQ 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.54.faq_detail</td>
        <td>
          <router-link :to="{ name: 'Study_02_faq_detail' }">
            Study_02_faq_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">312</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>1:1문의</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.55.inquiry</td>
        <td>
          <router-link :to="{ name: 'Study_inquiry' }">
            Study_inquiry
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">313</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>1:1 문의 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.56.inquiry_detail</td>
        <td>
          <router-link :to="{ name: 'Study_02_inquiry_detail' }">
            Study_02_inquiry_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">314</td>
        <td>학습홈 영역</td>
        <td>　</td>
        <td>　</td>
        <td>1:1 문의 등록/수정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_02.57.inquiry_edit</td>
        <td>
          <router-link :to="{ name: 'Study_02_inquiry_edit' }">
            Study_02_inquiry_edit
          </router-link>
        </td>
        <td>컴포넌트화 </td>
      </tr>
      <tr>
      <td align="center">315</td>
        <td>학습창 영역</td>
        <td>LO (플레이어)</td>
        <td>동영상, AR/VR</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.01.LO_mp4</td>
        <td>
          <router-link :to="{ name: 'Study_LO_mp4' }">
            Study_LO_mp4
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">316</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>동영상, AR/VR - Full    screen</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.02.LO_mp4_fs</td>
        <td>
          <router-link :to="{ name: 'Study_LO_mp4_fs' }">
            Study_LO_mp4_fs
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">317</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>동영상, AR/VR (Offline    Mode)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.03.LO_mp4_offline</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          아쿠아 플레이어
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">318</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>스크립트 타입 1(2/13)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.04.01.LO_mp4_script1, <br/>Study_LO_mp4_script2</td>
        <td>
          <router-link :to="{ name: 'Study_LO_mp4_script1' }">
            Study_LO_mp4_script1
          </router-link> <br/>
          <router-link :to="{ name: 'Study_LO_mp4_script2' }">
            Study_LO_mp4_script2
          </router-link>     
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">319</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>스크립트 타입 2(2/13)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">Study_LO_mp4_script1scroll, <br/>Study_LO_mp4_script2scroll</td>
        <td>

          <router-link :to="{ name: 'Study_LO_mp4_script1scroll' }">
            Study_LO_mp4_script1scroll
          </router-link>   <br/>            
          <router-link :to="{ name: 'Study_LO_mp4_script2scroll' }">
            Study_LO_mp4_script2scroll
          </router-link>          
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">320</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>연관 컨텐츠</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.05.LO_mp4_contents</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">321</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>HTML5</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.06.LO_html5</td>
        <td>
          <router-link :to="{ name: 'Study_LO_html5' }">
            Study_LO_html5
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">322</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>HTML5 - Full screen</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.07.LO_html5_fs</td>
        <td>
          <router-link :to="{ name: 'Study_LO_html5_fs' }">
            Study_LO_html5_fs
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">323</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>HTML5 (Offline Mode)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">324</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>오디오</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.09.LO_audio</td>
        <td>
          <router-link :to="{ name: 'Study_LO_audio' }">
            Study_LO_audio
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">325</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>오디오 - Full screen</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.10.LO_audio_fs</td>
        <td>
          <router-link :to="{ name: 'Study_LO_audio_fs' }">
            Study_LO_audio_fs
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">326</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>오디오 (Offline Mode)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td></td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">327</td>
        <td>학습창 영역</td>
        <td>LO (뷰어)</td>
        <td>링크/독서통신/집합</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.12.LO_viewer</td>
        <td>
          <router-link :to="{ name: 'Study_LO_viewer' }">
            Study_LO_viewer
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">328</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>링크/독서통신/집합 - Full    screen</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.13.LO_viewer_fs</td>
        <td>
          <router-link :to="{ name: 'Study_03_LO_viewer_fs' }">
            Study_03_LO_viewer_fs
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">329</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>링크/독서통신/집합 (Offline    Mode)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.10.LO_audio_fs</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">330</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>문서</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.15.LO_docs</td>
        <td>
          <router-link :to="{ name: 'Study_LO_docs' }">
            Study_LO_docs
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">331</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>문서 - Full screen</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.16.LO_docs_fs</td>
        <td>
          <router-link :to="{ name: 'Study_03_LO_docs_fs' }">
            Study_03_LO_docs_fs
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">332</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>문서 (Offline Mode)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.10.LO_audio_fs</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">333</td>
        <td>학습창 영역</td>
        <td>SO</td>
        <td>핵심요약</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.01.SO_mainsummary</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_mainsummary' }">
            Study_04_SO_mainsummary
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">334</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>퀴즈 (intro)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.02.SO_quiz_intro</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_quiz_intro' }">
            Study_04_SO_quiz_intro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">335</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>선다형</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.03.SO_quiz_multichoice</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_quiz_multichoice' }">
            Study_04_SO_quiz_multichoice
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">336</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>선다형 결과조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.04.SO_quiz_multichoice_result</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_quiz_multichoice_result' }">
            Study_04_SO_quiz_multichoice_result
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">337</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>O/X형</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.05.SO_quiz_OX</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_quiz_OX' }">
            Study_04_SO_quiz_OX
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">338</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>O/X형 결과조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.06.SO_quiz_OX_result</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_quiz_OX_result' }">
            Study_04_SO_quiz_OX_result
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">339</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>단답형</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.07.SO_quiz_shortanswer</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_quiz_shortanswer' }">
            Study_04_SO_quiz_shortanswer
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">340</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>단답형 결과조회</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.08.SO_quiz_shortanswer_result</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_quiz_shortanswer_result' }">
            Study_04_SO_quiz_shortanswer_result
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">341</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>퀴즈제출완료</td>
        <td>퀴즈_제출 완료</td>
        <td>　</td>
        <td class="textL">05.Study_04.09.SO_quiz_submission</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_quiz_submission' }">
            Study_04_SO_quiz_submission
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">342</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>설문 (intro)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.10.SO_survey_intro</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_survey_intro' }">
            Study_04_SO_survey_intro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">343</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>척도형</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.11.SO_survey_scale</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_survey_scale' }">
            Study_04_SO_survey_scale
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">344</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>선다형</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.12.SO_survey_multichoice</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_survey_multichoice' }">
            Study_04_SO_survey_multichoice
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">345</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>서술형</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.13.SO_survey_answer</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_survey_answer' }">
            Study_04_SO_survey_answer
          </router-link>
        </td>
        <td>작업완료</td>
      </tr>
      <tr>
      <td align="center">346</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>설문_제출 완료</td>
        <td>　</td>
        <td></td>
        <td class="textL">05.Study_04.14.SO_survey_submission</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_survey_submission' }">
            Study_04_SO_survey_submission
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">347</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>의견공유 (intro)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.15.SO_opinion_intro</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_opinion_intro' }">
            Study_04_SO_opinion_intro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">348</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>작성가이드</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.16.SO_opinion_writtingguide</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_opinion_writtingguide' }">
            Study_04_SO_opinion_writtingguide
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">349</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>서술형</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.17.SO_opinion_answer</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_opinion_answer' }">
            Study_04_SO_opinion_answer
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">350</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>서술형_제출완료</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">351</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>선택형</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.18.SO_opinion_choose</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_opinion_choose' }">
            Study_04_SO_opinion_choose
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">352</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>선택형_제출완료</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>삭제</td>
        <td></td>
      </tr>
      <tr>
      <td align="center">353</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>복수의견 공유</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.19.SO_opinion_multiopinon</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_opinion_multiopinon' }">
            Study_04_SO_opinion_multiopinon
          </router-link>
        </td>
        <td>작업완료</td>
      </tr>
      <tr>
      <td align="center">354</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>의견공유_제출완료</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.20.SO_opinion_submission</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_opinion_submission' }">
            Study_04_SO_opinion_submission
          </router-link><br/>
          <router-link :to="{ name: 'Study_04_SO_opinion_submission_02' }">
            study_submission_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">355</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>댓글 전체보기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.21.SO_opinion_submission_all</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_opinion_submission_all' }">
            Study_04_SO_opinion_submission_all
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">356</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>토론 (intro)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.22.SO_debate_intro</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_debate_intro' }">
            Study_04_SO_debate_intro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">357</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>내용입력</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.23.SO_debate_input</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_debate_input_normal' }">
            Study_04_SO_debate_input_normal
          </router-link><br/>
          <router-link :to="{ name: 'Study_04_SO_debate_input_typing' }">
            Study_04_SO_debate_input_typing
          </router-link><br/>
          <router-link :to="{ name: 'Study_04_SO_debate_input_opposite' }">
            Study_04_SO_debate_input_opposite
          </router-link>
        </td>
        <td>작업완료</td>
      </tr>
      <tr>
      <td align="center">358</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>토론_제출완료</td>
        <td>　</td>
        <td></td>
        <td class="textL">05.Study_04.24.SO_debate_submission</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_debate_submission' }">
            Study_04_SO_debate_submission
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">359</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td></td>
        <td>댓글 전체보기</td>
        <td>토론_댓글입력</td>
        <td>　</td>
        <td class="textL">05.Study_04.25.SO_debate_submission_all</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_debate_submission_all' }">
            Study_04_SO_debate_submission_all
          </router-link>
        </td>
        <td>sort메서드 구현필요</td>
      </tr>
      <tr>
      <td align="center">360</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>과제 (Intro)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.26.SO_assinment_intro</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_assinment_intro' }">
            Study_04_SO_assinment_intro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">361</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>과제 내용입력</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.27.SO_assinment_input</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_assinment_input' }">
            Study_04_SO_assinment_input
          </router-link>
        </td>
        <td>작업완료</td>
      </tr>
      <tr>
      <td align="center">362</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td></td>
        <td>모범답변</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.28.SO_assinment_bestanswer</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_assinment_bestanswer' }">
            Study_04_SO_assinment_bestanswer
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">363</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>과정 OT</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.29.SO_OT</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_OT' }">
            Study_04_SO_OT
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">364</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>학습내용</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.30.SO_studycontents</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td>PU 피드백으로 삭제</td>
      </tr>
      <tr>
      <td align="center">365</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>학습목표</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.31.SO_studygoal</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_studygoal' }">
            Study_04_SO_studygoal
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">366</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>용어사전</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.32.SO_studygoal_dictionary</td>
        <td>
          <router-link :to="{ name: 'Study_dictionary' }">
            Study_dictionary
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">367</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>간지</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.33.SO_middle</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_middle' }">
            Study_04_SO_middle
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">368</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>액션플랜 (Intro)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.34.SO_actionplan_intro</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_actionplan_intro' }">
            Study_04_SO_actionplan_intro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">369</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>액션플랜</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.35.SO_actionplan_input</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_actionplan_input' }">
            Study_04_SO_actionplan_input
          </router-link>
        </td>
        <td>작업완료</td>
      </tr>
      <tr>
      <td align="center">370</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>시뮬레이션</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.36.SO_simulation</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_simulation' }">
            Study_04_SO_simulation
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">371</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>시뮬레이션_제출완료</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.37.SO_simulation_submission</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_simulation_submission' }">
            Study_04_SO_simulation_submission
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">372</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>음성녹음</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.38.SO_voicerecord</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_voicerecord' }">
            Study_04_SO_voicerecord
          </router-link><br/>
          <router-link :to="{ name: 'Study_04_SO_voicerecord_02' }">
            Study_04_SO_voicerecord_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">373</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>녹음기 플레이어</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.39.SO_voicerecord_player</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_voicerecord_player' }">
            Study_04_SO_voicerecord_player
          </router-link><br/>
          <router-link :to="{ name: 'Study_04_SO_voicerecord_player_02' }">
            Study_04_SO_voicerecord_player_02
          </router-link><br/>
          <router-link :to="{ name: 'Study_04_SO_voicerecord_player_03' }">
            Study_04_SO_voicerecord_player_03
          </router-link><br/>
          <router-link :to="{ name: 'Study_04_SO_voicerecord_player_04' }">
            Study_04_SO_voicerecord_player_04
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">374</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>서약서</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.40.SO_pledge</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_pledge' }">
            Study_04_SO_pledge
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">375</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>서약서 제출완료</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.41.SO_pledge_submission</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_pledge_submission' }">
            Study_04_SO_pledge_submission
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">376</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>POLL (Intro)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.42.SO_poll_intro</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_poll_intro' }">
            Study_04_SO_poll_intro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">377</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>POLL</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.43.SO_poll_input</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_poll_input' }">
            Study_04_SO_poll_input
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">378</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>원형 그래프_제출완료</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.44.SO_poll_submission_circle</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_poll_submission_circle' }">
            Study_04_SO_poll_submission_circle
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">379</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>　</td>
        <td></td>
        <td>막대 그래프_제출완료</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_04.45.SO_poll_submission_rod</td>
        <td>
          <router-link :to="{ name: 'Study_04_SO_poll_submission_rod' }">
            Study_04_SO_poll_submission_rod
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">380</td>
        <td>학습창 영역</td>
        <td>학습 전 본인인증</td>
        <td>핸드폰 인증</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.01.etc_authorization_phone</td>
        <td>
          <router-link :to="{ name: 'Login_certifyphone' }">
            Login_certifyphone
          </router-link>
          와 동일
        </td>
        <td>01.login_09.01_certify_phone 동일</td>
      </tr>
      <tr>
      <td align="center">381</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>아이핀 인증</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.02.etc_authorization_ipin</td>
        <td>
          <router-link :to="{ name: 'Login_certifyipin' }">
            Login_certifyipin
          </router-link>
          와 동일
        </td>
        <td>01.login_09.02_certify_ipin 동일</td>
      </tr>
      <tr>
      <td align="center">382</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>고용보험 환급과정 운영기준 안내</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.03.etc_authorization_employment</td>
        <td>
          <router-link :to="{ name: 'Study_05_etc_authorization_employment' }">
            Study_05_etc_authorization_employment
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">383</td>
        <td>학습창 영역</td>
        <td>학습 전 서약서 </td>
        <td>준법실천 서약서</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.04.etc_pledge_law</td>
        <td>
          <router-link :to="{ name: 'Study_05_etc_pledge_law' }">
            Study_05_etc_pledge_law
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">384</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>윤리서약서</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.05.etc_pledge_ethics</td>
        <td>
          <router-link :to="{ name: 'Study_05_etc_pledge_ethics' }">
            Study_05_etc_pledge_ethics
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">385</td>
        <td>학습창 영역</td>
        <td>학습 전 동의서</td>
        <td>최초학습전 확인절차</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.06.etc_agreement_first</td>
        <td>
          <router-link :to="{ name: 'Study_05_etc_agreement_first' }">
            Study_05_etc_agreement_first
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">386</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>학습전 안내동의</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.07.etc_agreement_guidance</td>
        <td>
          <router-link :to="{ name: 'Study_05_etc_agreement_guidance' }">
            Study_05_etc_agreement_guidance
          </router-link><br/>
          <router-link :to="{ name: 'Study_05_etc_agreement_guidance_02' }">
            Study_05_etc_agreement_guidance_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">387</td>
        <td>학습창 영역</td>
        <td>　</td>
        <td>급여공제 동의서</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.08.etc_agreement_salary</td>
        <td>
          <router-link :to="{ name: 'Study_05_etc_agreement_salary' }">
            Study_05_etc_agreement_salary
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">388</td>
        <td>학습창 영역</td>
        <td>학습 전 안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.09.etc_guidance</td>
        <td>
          <router-link :to="{ name: 'Study_05_etc_guidance' }">
            Study_05_etc_guidance
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">389</td>
        <td>학습창 영역</td>
        <td>학습창 파일럿 테스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.10.etc_pilottest</td>
        <td>
          <router-link :to="{ name: 'Study_05_etc_pilottest' }">
            Study_05_etc_pilottest
          </router-link>
        </td>
        <td>작업완료</td>
      </tr>
      <tr>
      <td align="center">390</td>
        <td>학습창 영역</td>
        <td>캡챠 (제대로 수강중인지 확인용도 목적)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.11.etc_captcha</td>
        <td>
          <router-link :to="{ name: 'Study_05_etc_captcha' }">
            Study_05_etc_captcha
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">391</td>
        <td>학습창 영역</td>
        <td>접근제어 (일일 진도량 제한 팝업)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.12.etc_accesscontrol</td>
        <td>
          <router-link :to="{ name: 'Study_etc_accesscontrol' }">
            Study_etc_accesscontrol
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">392</td>
        <td>학습창 영역</td>
        <td>학습독려 설정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_05.13.etc_studycheerAlarm</td>
        <td>
          <router-link :to="{ name: 'Study_etc_studycheerAlarm_calendar01' }">
            Study_etc_studycheerAlarm_calendar01
          </router-link>,
           <router-link :to="{ name: 'Study_etc_studycheerAlarm_calendar03' }">
            Study_etc_studycheerAlarm_calendar03
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <tr>
      <td align="center">393</td>
        <td>수강신청 (일반)</td>
        <td>수강형태 선택 및 실명인증</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_04.01.register_option</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_option' }">
            regiclass_register_option
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_option_add' }">
            regiclass_register_option_add
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_option_add_02' }">
            regiclass_register_option_add_02
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_option_02' }">
            regiclass_register_option_02
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_option_03' }">
            regiclass_register_option_03
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">394</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>사진 등록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_04.03.register_photo</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_photo' }">
            regiclass_register_photo
          </router-link>
          네이티브 영역. 개발필요
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">395</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>사진 촬영</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_04.03.01.register_photo_camera</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          네이티브 영역. 개발필요
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">396</td>
        <td>수강신청 (일반)</td>
        <td>약관동의 - B2B2C</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.02_join_terms</td>
        <td>
          <router-link :to="{ name: 'login_join_terms' }">
            login_join_terms
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">397</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>약관 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.02_join_terms_detail</td>
        <td>
          <router-link :to="{ name: 'Login_jointermsdetail' }">
            Login_jointermsdetail
          </router-link><br/>
          <router-link :to="{ name: 'Login_jointermsdetailscroll' }">
            Login_jointermsdetailscroll
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">398</td>
        <td>수강신청 (일반)</td>
        <td>약관동의 - B2C</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_04.02.01register_terms_add</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_terms_add' }">
            regiclass_register_terms_add
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_terms' }">
            regiclass_register_terms
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">399</td>
        <td>수강신청 (일반)</td>
        <td>수강정보 입력</td>
        <td>(수강생정보, 환급여부, 회사지원)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_05.01.register_basicinfo</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_basicinfo_b2b' }">
            regiclass_register_basicinfo_b2b
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_basicinfo_b2c' }">
            regiclass_register_basicinfo_b2c
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_basicinfo_add' }">
            regiclass_register_basicinfo_add
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_basicinfo_add_02' }">
            regiclass_register_basicinfo_add_02
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_basicinfo_add_bot' }">
            regiclass_register_basicinfo_add_bot
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">400</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>교재배송정보</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_05.02.register_book</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_book' }">
            regiclass_register_book
          </router-link>
        </td>
        <td>20190130 수정</td>
      </tr>
      <tr>
      <td align="center">401</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td></td>
        <td>참고도서 선택 팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_05.02.01.register_book_select</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_book_select' }">
            regiclass_register_book_select
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_book_select_02' }">
            regiclass_register_book_select_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">402</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>직무연관과정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_05.03.register_job</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_job' }">
            regiclass_register_job
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">403</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>전화외국어 정보</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_05.04.register_language</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_language' }">
            regiclass_register_language
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">404</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>　</td>
        <td>수업 유의사항 및 규정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_05.04.01.register_language_guide</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_language_guide' }">
            regiclass_register_language_guide
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">405</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>근로자 직업능력개발훈련</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_05.05.register_training</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_training' }">
            regiclass_register_training
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">406</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>국가기간 전략산업 취업교육 지원</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_05.06.register_nation</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_nation' }">
            regiclass_register_nation
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">407</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>혁신성장 청년인재</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_09.01.register_innovation</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_innovation' }">
            regiclass_register_innovation
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">408</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>4차산업혁명</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_09.01.register_innovation</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_innovation' }">
            regiclass_register_innovation
          </router-link>
        </td>
        <td>확인필요</td>
      </tr>
      <tr>
      <td align="center">409</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>경기빅데이터교육</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_10.01.register_bigdata</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_bigdata' }">
            regiclass_register_bigdata
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_bigdata_02' }">
            regiclass_register_bigdata_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">410</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>경기빅데이터교육 - 특성화/전문가    과정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_11.01.01.register_bigdata_pro</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_bigdata_pro' }">
            regiclass_register_bigdata_pro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">411</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>청년취업 아카데미 과정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_11.01.register_academy</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_academy' }">
            regiclass_register_academy
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">412</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>회사찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_05.07.register_searchcp</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_contorl' }">
            regiclass_register_contorl
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_searchcp_03' }">
            regiclass_register_searchcp_03
          </router-link>
        </td>
        <td>tab page 01,02</td>
      </tr>
      <tr>
      <td align="center">413</td>
        <td>수강신청 (일반)</td>
        <td>　</td>
        <td>우편번호 찾기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_02.03_search_post</td>
        <td>
          <router-link :to="{ name: 'Login_searchpost' }">
            Login_searchpost
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">414</td>
        <td>수강신청 (일반)</td>
        <td>결제 - 신용카드</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_06.01.register_pay_creditcard</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_pay_creditcard' }">
            regiclass_register_pay_creditcard
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_pay_creditcard_02' }">
            regiclass_register_pay_creditcard_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">415</td>
        <td>수강신청 (일반)</td>
        <td>결제 - 가상계좌</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_06.01.register_pay_cyberaccount</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_pay_cyberaccount' }">
            regiclass_register_pay_cyberaccount
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">416</td>
        <td>수강신청 (일반)</td>
        <td>결제 - 무통장 입금</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_06.01.register_pay_deposit</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_pay_deposit' }">
            regiclass_register_pay_deposit
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">417</td>
        <td>수강신청 (일반)</td>
        <td>결제 - ARS 현장결제</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_06.01.register_pay_ARS</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_pay_ars' }">
            regiclass_register_pay_ars
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">418</td>
        <td>수강신청 (일반)</td>
        <td>결제 - 계좌이체</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_06.01.register_pay_accounttransfer</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_pay_accounttransfer' }">
            regiclass_register_pay_accounttransfer
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">419</td>
        <td>수강신청 (일반)</td>
        <td>수강신청 완료(연관과정 추천)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_07.01.register_complete</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_complete' }">
            regiclass_register_complete
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_complete_b2c' }">
            regiclass_register_complete_b2c
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_complete_account' }">
            regiclass_register_complete_account
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">420</td>
        <td>수강신청 (일반)</td>
        <td>수강신청 완료(대기신청)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_07.01.03.register_complete_waiting</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_complete_waiting' }">
            regiclass_register_complete_waiting
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">421</td>
        <td>수강신청 (결재상신)</td>
        <td>결재상신</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_08.01.register_approve</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_approve' }">
            regiclass_register_approve
          </router-link><br/>
          <router-link :to="{ name: 'regiclass_register_approve_02' }">
            regiclass_register_approve_02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">422</td>
        <td>수강신청 (결재상신)</td>
        <td>　</td>
        <td>임직원 검색</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_08.01.01.register_approve_member</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_approve_member' }">
            regiclass_register_approve_member
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">423</td>
        <td>수강신청 (결재상신)</td>
        <td>　</td>
        <td>요청/결재내역 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_08.01.01.register_approve_member_detail</td>
        <td>
          <router-link :to="{ name: 'regiclass_register_approve_member_detail' }">
            regiclass_register_approve_member_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">424</td>
        <td>수강신청 (공통)</td>
        <td>과정상세 (과정요약)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_01.02.detailview_summary</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_summary_1' }">
            regiclass_detailview_summary_1
          </router-link>
          ,
          <router-link :to="{ name: 'regiclass_detailview_summary_2' }">
            regiclass_detailview_summary_2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">425</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>과정소개</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_01.01.detailview_intro</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_intro' }">
            regiclass_detailview_intro
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">426</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>과정목차 - 이러닝</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_01.03.detailview_course</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_course' }">
            regiclass_detailview_course
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">427</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>과정목차 - MOOC</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_01.03.01.detailview_course_mooc</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_course_mooc' }">
            regiclass_detailview_course_mooc
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">428</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>과정목차 - 집합</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_01.03.02.detailview_course_set</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_course_set' }">
            regiclass_detailview_course_set
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">429</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>과정목차 - 복합</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_01.03.03.detailview_course_mixed</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_course_mixed' }">
            regiclass_detailview_course_mixed
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">430</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>과정목차 - 조합</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_01.03.04.detailview_course_union</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_course_union' }">
            regiclass_detailview_course_union
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">431</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>수강후기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_01.04.detailview_review</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_review' }">
            regiclass_detailview_review
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">432</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>맛보기 팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_03.01.LO_mp4</td>
        <td>
           <router-link :to="{ name: 'Study_LO_mp4' }">
            Study_LO_mp4
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">433</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>교재정보 팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_02.01.detailview_books</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_books' }">
            regiclass_detailview_books
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">434</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>사별 급여공제 동의 팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_02.03.detailview_terms</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_terms' }">
            regiclass_detailview_terms
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">435</td>
        <td>수강신청 (공통)</td>
        <td>　</td>
        <td>라이센스 신청 팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">06.regiclass_02.04.detailview_licence</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_licence' }">
            regiclass_detailview_licence
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">436</td>
        <td>B2C - Main(TABS)</td>
        <td>추천탭 - 로그인 전</td>
        <td>롤링 이미지 배너</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.Banner</td>
        <td>
          <router-link :to="{ name: 'Main_banner' }">
            Main_banner
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">437</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>큐레이션 UI 3번</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.01.02. CurateUI03</td>
        <td>
          <router-link :to="{ name: 'Main_curateUI03' }">
            Main_curateUI03
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">438</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>정부무료과정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.01.B2C FreeCourse</td>
        <td>
          <router-link :to="{ name: 'Main_B2C_freeCourse' }">
            Main_B2C_freeCourse
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">439</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>큐레이션 UI 1번</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.01.02. CurateUI01</td>
        <td>
          <router-link :to="{ name: 'Main_curateUI01' }">
            Main_curateUI01
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">440</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>정부무료과정 (2)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.02.B2C FreeCourse(2)</td>
        <td>
          <router-link :to="{ name: 'Main_B2C_freeCourse2' }">
            Main_B2C_freeCourse2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">441</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>앱 설치 유도 페이지</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.03.B2C Appstore</td>
        <td>
          <router-link :to="{ name: 'Main_B2C_appstore' }">
            Main_B2C_appstore
          </router-link>
        </td>
        <td>배경이미지 적용</td>
      </tr>
      <tr>
      <td align="center">442</td>
        <td>B2C - Main(TABS)</td>
        <td>추천탭 - 로그인 후</td>
        <td>큐레이션 UI 2번</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.01.02.    CurateUI02</td>
        <td>
          <router-link :to="{ name: 'Main_curateUI02' }">
            Main_curateUI02
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">443</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>큐레이션 UI 4번</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.01.02.    CurateUI04</td>
        <td>
          <router-link :to="{ name: 'Main_curateUI04' }">
            Main_curateUI04
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">444</td>
        <td>B2C - Main(TABS)</td>
        <td>푸터 안내</td>
        <td>찾아오시는 길, 1:1문의, 고객센터</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.02.02.B2C    Directions</td>
        <td>
          <router-link :to="{ name: 'Main_B2C_directions' }">
            Main_B2C_directions
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">445</td>
        <td>B2C - Main(TABS)</td>
        <td>탐색탭</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.03.03.Browse</td>
        <td>
          <router-link :to="{ name: 'Main_03_browse_main' }">
            Main_03_browse_main
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">446</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>카테고리 상세 1 (일반)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.03.03    Browse ListDetail01</td>
        <td>
          <router-link :to="{ name: 'Main_03_browse_listDetail01' }">
            Main_03_browse_listDetail01
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">447</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td></td>
        <td>카테고리 1 과정 리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.03.03    Browse ListDetail02</td>
        <td>
          <router-link :to="{ name: 'Main_03_browse_listDetail02' }">
            Main_03_browse_listDetail02
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">448</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>카테고리 상세 2 (무료)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.03.03.Freecourse</td>
        <td>
          <router-link :to="{ name: 'Main_freecourse' }">
            Main_freecourse
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">449</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>　</td>
        <td>카테고리 2 과정 리스트 (1)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.03.03.Freecourse_list</td>
        <td>
          <router-link :to="{ name: 'Main_freecourse_list' }">
            Main_freecourse_list
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">450</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>　</td>
        <td>카테고리 2 과정 리스트 (2)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.03.03.Freecourse_img</td>
        <td>
          <router-link :to="{ name: 'Main_freecourse_img' }">
            Main_freecourse_img
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">451</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>카테고리 상세 3 (환급)</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.03.03.Course    refund</td>
        <td>
          <router-link :to="{ name: 'Main_course_refund' }">
            Main_course_refund
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">452</td>
        <td>B2C - Main(TABS)</td>
        <td>　</td>
        <td>　</td>
        <td>카테고리 3 과정 리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">02.Main_02.03.03.Course    refund_list</td>
        <td>
          <router-link :to="{ name: 'Main_course_refund_list' }">
            Main_course_refund_list
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">453</td>
        <td>B2C - Drawer</td>
        <td>통합알리미</td>
        <td>알림 리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_02.01_Alerm</td>
        <td>
          <router-link :to="{ name: 'Drawer_alerm' }">
            Drawer_alerm
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">454</td>
        <td>B2C - Drawer</td>
        <td>나의 정보</td>
        <td>나의 정보 관리</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_03.01_myinfo</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo' }">
            B2C_Drawer_myinfo
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">455</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>로그아웃</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_03.02_myinfo_logout</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_logout' }">
            B2C_Drawer_myinfo_logout
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">456</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>앨범에서 사진 선택</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_03.03_myinfo_choosepic</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_choosepic' }">
            B2C_Drawer_myinfo_choosepic
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">457</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>사진 선택 완료 </td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_03.04_myinfo_choosepic_done</td>
        <td>
          네이티브 영역. 개발필요
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">458</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>기본정보 관리</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_04.01_myinfo_basicinfo</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_basicinfo' }">
            B2C_Drawer_myinfo_basicinfo
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">459</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>기본정보 수정</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_04.02_myinfo_basicinfo_edit</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_basicinfo_edit' }">
            B2C_Drawer_myinfo_basicinfo_edit 
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">460</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>부가정보 관리 </td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_05.01_myinfo_extrainfo</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_extrainfo' }">
            B2C_Drawer_myinfo_extrainfo
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">461</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>부가정보 수정</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_05.02_myinfo_extrainfo_edit</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_extrainfo_edit' }">
            B2C_Drawer_myinfo_extrainfo_edit 
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">462</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>배송지 관리</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_06.01_myinfo_account</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_account' }">
            B2C_Drawer_myinfo_account
          </router-link>
        </td>
        <td>제플린 디자인이 삭제됨</td>
      </tr>
      <tr>
      <td align="center">463</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>배송지 수정</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_06.02_myinfo_tracking</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_tracking' }">
            B2C_Drawer_myinfo_tracking
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">464</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>배송지 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_06.02_myinfo_tracking_edit</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_tracking_edit' }">
            B2C_Drawer_myinfo_tracking_edit
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">464-add</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>배송지 추가</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_06.02_myinfo_tracking_delete</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_tracking_delete' }">
            B2C_Drawer_myinfo_tracking_delete
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">465</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>계정 관리</td>
        <td>비밀번호 변경</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_06.02_myinfo_account_password</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_account_password' }">
            B2C_Drawer_myinfo_account_password
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">466</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>회원 탈퇴</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_06.02_myinfo_account_withdrawal</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_myinfo_account_withdrawal01' }">
            B2C_Drawer_myinfo_account_withdrawal01
          </router-link>
          ,
          <router-link :to="{ name: 'B2C_Drawer_myinfo_account_withdrawal02' }">
            B2C_Drawer_myinfo_account_withdrawal02
          </router-link>
          ,
          <router-link :to="{ name: 'B2C_Drawer_myinfo_account_withdrawal03' }">
            B2C_Drawer_myinfo_account_withdrawal03
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">467</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>설정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_07.01_settings</td>
        <td>
          <router-link :to="{ name: 'B2C_drawer_settings' }">
            B2C_drawer_settings
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">468</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>버전정보 및 업데이트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_07.01_settings</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_settings_push' }">
            B2C_Drawer_settings_push
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">469</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>PUSH 알림 메시지 수신</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_07.01_settings</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          B2C_Drawer_settings_push와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">470</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>오픈소스라이선스</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_07.01_settings_opensource</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_settings_opensource' }">
            B2C_Drawer_settings_opensource
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">471</td>
        <td>B2C - Drawer</td>
        <td>나의 공간</td>
        <td>학습목록</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_studying</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_studying' }">
            MySpace_formal_studying
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">472</td>
        <td>B2C - Drawer</td>
        <td>교육신청</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_10.01_Regiclass</td>
        <td>
          <router-link :to="{ name: 'Main_04_browse_main' }">
            Main_04_browse_main
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">473</td>
        <td>B2C - Drawer</td>
        <td>고객센터</td>
        <td>멀티스퀘어 소개</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_09.01_Multiintroduce</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_Multiintroduce' }">
            B2C_Drawer_Multiintroduce
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">474</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>공지사항</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_01.01_Notice</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Notice' }">
            CustomerCenter_Notice
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">475</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>공지사항 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_01.02_Notice_detail</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Notice_detail' }">
            CustomerCenter_Notice_detail
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">476</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>FAQ</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_04.01_FAQ</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_FAQ' }">
            CustomerCenter_FAQ
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">477</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>FAQ 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_04.02_FAQ_detail</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_FAQ_detail' }">
            CustomerCenter_FAQ_detail
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">478</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>문의</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_05.01_Inquiry</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Inquiry' }">
            CustomerCenter_Inquiry
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">479</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>1:1 문의내역 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_05.02_Inquiry_detail</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Inquiry_detail' }">
            CustomerCenter_Inquiry_detail
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">480</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>1:1 문의 작성하기</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_05.03_Inquiry_write</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Inquiry_write' }">
            CustomerCenter_Inquiry_write
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">481</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>설문</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_07.01_Request</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Request' }">
            CustomerCenter_Request
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">482</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>설문결과</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_07.02_Request_result</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Request_result' }">
            CustomerCenter_Request_result
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">483</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>이벤트</td>
        <td>이벤트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_08.01_Event</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_Event' }">
          B2C_Drawer_Event
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">484</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>　</td>
        <td>당첨자 발표</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_08.02_Event_Winner</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_Event_Winner' }">
            B2C_Drawer_Event_Winner
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">485</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>드로어</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_01.01_Drawer</td>
        <td>
          <router-link :to="{ name: 'Eduperson_login' }">
            Eduperson_login
          </router-link>
          ,
          <router-link :to="{ name: 'Eduperson_drawer_setting' }">
            Eduperson_drawer_setting
          </router-link>
          ,
          <router-link :to="{ name: 'Eduperson_drawer_profile' }">
            Eduperson_drawer_profile
          </router-link>
          ,
          <router-link :to="{ name: 'Eduperson_drawer' }">
            Eduperson_drawer
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">486</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>교육그룹 선택</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_02.01_Edugroup</td>
        <td>
          <router-link :to="{ name: 'Eduperson_edugroup' }">
            Eduperson_edugroup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">487</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>학습현황 탭</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_03.01_Studycurrent</td>
        <td>
          <router-link :to="{ name: 'Eduperson_contorl' }">
            Eduperson_contorl
          </router-link>
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">488</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>이러닝 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_03.01.01_Studycurrent_elearning</td>
        <td>
          <router-link :to="{ name: 'Eduperson_studycurrent_elearning' }">
            Eduperson_studycurrent_elearning
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">489</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>집합교육 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_03.01.02_Studycurrent_set</td>
        <td>
          <router-link :to="{ name: 'Eduperson_studycurrent_set' }">
            Eduperson_studycurrent_set
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">490</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>상시 학습현황 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_03.01.02_Studycurrent_autonomy</td>
        <td>
          <router-link :to="{ name: 'Eduperson_studycurrent_autonomy' }">
            Eduperson_studycurrent_autonomy
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">491</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>VOC 현황 탭</td>
        <td>VOC 현황</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_04.01_VOC</td>
        <td>
          <router-link :to="{ name: 'Eduperson_contorl' }">
            Eduperson_voc
          </router-link>
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">492</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>현황통계 탭</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_05.01_Statement</td>
        <td>
          <router-link :to="{ name: 'Eduperson_contorl' }">
            Eduperson_statement
          </router-link>
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">493</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>운영보고서 탭</td>
        <td>이러닝</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_06.01_Operation</td>
        <td>
          <router-link :to="{ name: 'Eduperson_contorl' }">
            Eduperson_operation
          </router-link><br/>
          <router-link :to="{ name: 'Eduperson_operation_elearning_control' }">
            Eduperson_operation_elearning_control
          </router-link>
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">494</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>집합교육</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_06.01_Operation_set</td>
        <td>
          <router-link :to="{ name: 'Eduperson_contorl' }">
            Eduperson_operation_set
          </router-link><br/>
          <router-link :to="{ name: 'Eduperson_operation_set_control' }">
            Eduperson_operation_set_control
          </router-link>
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">495</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>상시</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_06.01_Operation_autonomy</td>
        <td>
          <router-link :to="{ name: 'Eduperson_contorl' }">
            Eduperson_operation_autonomy
          </router-link>
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">496</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>학습홈 게시판</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_07.01_Studyhomeboard</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">497</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>질문방</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_08.01_Question</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">498</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>　</td>
        <td>질문 상세/답변</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_08.02_Question_detail</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">499</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>커뮤니티 승인 관리</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_09.01_Community</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">500</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>상세/승인</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_09.01_Community_detail</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">501</td>
        <td>BPO 강사</td>
        <td>나의 담당 과정 리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_01</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist01' }">
            BPO_subjectlist01
          </router-link>,
           <router-link :to="{ name: 'BPO_subjectlist02' }">
            BPO_subjectlist02
          </router-link>          
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">502</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>학습일자별</td>
        <td>학습일자별 출결리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_day</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">503</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>출석등록</td>
        <td>보강사유 입력 및 수정</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_day_attendance</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">504</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>학습자별</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_student</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">505</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>출석현황</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_student_attendance</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">506</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>SMS 보내기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_student_attendance_SMS</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">507</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>평가현황</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_test</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_test' }">
            BPO_subjectlist_test
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">508</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>수료 가능여부 입력 및 수정</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_test_completion</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_test_completion' }">
            BPO_subjectlist_test_completion
          </router-link>,
           <router-link :to="{ name: 'BPO_subjectlist_test_completion_popup' }">
            BPO_subjectlist_test_completion_popup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">509</td>
        <td>BPO 강사</td>
        <td>나의 정보</td>
        <td>기본정보/로그아웃</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_02.01.Myinfo</td>
        <td>
          <router-link :to="{ name: 'BPO_Login' }">
            BPO_Login
          </router-link>,
          <router-link :to="{ name: 'BPO_Login_password_view' }">
            BPO_Login_password_view
          </router-link>,
          <router-link :to="{ name: 'BPO_Login_password_notview' }">
            BPO_Login_password_notview
          </router-link>,
          <router-link :to="{ name: 'BPO_Myinfo' }">
            BPO_Myinfo
          </router-link>,
          <router-link :to="{ name: 'BPO_Drawer' }">
            BPO_Drawer
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">510</td>
        <td>BPO 강사</td>
        <td>출강현황</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_03.01.Classstatus</td>
        <td>
          <router-link :to="{ name: 'BPO_Classstatus' }">
            BPO_Classstatus
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">511</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_03.01.Classstatus_detail</td>
        <td>
          <router-link :to="{ name: 'BPO_Classstatus_detail' }">
            BPO_Classstatus_detail
          </router-link>         
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">512</td>
        <td>BPO 강사</td>
        <td>팀프로젝트</td>
        <td>과정 리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_04.01.Teamproject</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">513</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_04.01.Teamproject_deatil</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">514</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>음성파일 게시판</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_04.02.Recoderboard</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">515</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_04.02.Recoderboard_detail</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">516</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>첨삭 및 피드백 입력</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_04.02.Recoderboard_detail_feedback</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">517</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>입력완료</td>
        <td>　</td>
        <td class="textL">14.BPO_04.02.Recoderboard_detail_feedback_finish</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">518</td>
        <td>BPO 강사</td>
        <td>과제</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_05.01.Homework</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">519</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>학습자별 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_05.01.Homework_student</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">520</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>과제 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_05.01.Homework_student_detail</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">521</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>채점 및 점수 입력</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_05.01.Homework_student_scoring</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">522</td>
        <td>BPO 강사</td>
        <td>이용안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">14.BPO_06.01.Manual</td>
        <td>
          <router-link :to="{ name: 'BPO_Manual' }">
            BPO_Manual
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">523</td>
        <td>BPO 강사</td>
        <td>공지사항</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_01.01_Notice</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Notice' }">
            CustomerCenter_Notice
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">524</td>
        <td>BPO 강사</td>
        <td>　</td>
        <td>상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_01.02_Notice_detail</td>
        <td>
          <router-link :to="{ name: 'CustomerCenter_Notice_detail' }">
            CustomerCenter_Notice_detail
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">525</td>
        <td>BPO 강사</td>
        <td>설정</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.Drawer_07.01_settings</td>
        <td>
          <router-link :to="{ name: 'Drawer_settings' }">
            Drawer_settings
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">526</td>
        <td>기타</td>
        <td>HELP DESK</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Helpdesk</td>
        <td>
          <router-link :to="{ name: 'etc_Helpdesk' }">
            etc_Helpdesk
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">527</td>
        <td>기타</td>
        <td>QR Code Reader</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_QR</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          네이티브 영역. 개발필요 
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">528</td>
        <td>기타</td>
        <td>알림 공지</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Notice</td>
        <td>
         <router-link :to="{ name: 'Drawer_alerm' }">
            Drawer_alerm
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">529</td>
        <td>기타</td>
        <td>알림토스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Toast</td>
        <td>
          <router-link :to="{ name: 'components_snackbar' }">
            components_snackbar
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">530</td>
        <td>기타</td>
        <td>오프라인 안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Offlineguide</td>
        <td>
          <router-link :to="{ name: 'etc_Offlineguide' }">
            etc_Offlineguide
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">531</td>
        <td>기타</td>
        <td>버전 업데이트 안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Updateguide</td>
        <td>
          <router-link :to="{ name: 'etc_Updateguide' }">
            etc_Updateguide
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">532</td>
        <td>기타</td>
        <td>이용안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Manual</td>
        <td>
          <router-link :to="{ name: 'etc_Manual' }">
            etc_Manual
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">533</td>
        <td>기타</td>
        <td>이용약관</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Terms</td>
        <td>
          <router-link :to="{ name: 'etc_Terms' }">
            etc_Terms
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">534</td>
        <td>기타</td>
        <td>개인정보 처리방침</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_PrivacyPolicy</td>
        <td>
           <router-link :to="{ name: 'Login_jointermsdetail' }">
            Login_jointermsdetail
          </router-link>, Login_jointermsdetailscroll
           과 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">535</td>
        <td>기타</td>
        <td>이어보기 팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Keepstudy</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">536</td>
        <td>기타</td>
        <td>미니 플레이어</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Miniplayer</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">537</td>
        <td>기타</td>
        <td>Splash(B2B App)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_01,01_splash_B2B</td>
        <td>
          <router-link :to="{ name: '' }">
            login_Splash_B2B
          </router-link>
        </td>
        <td>수정중</td>
      </tr>
      <tr>
      <td align="center">538</td>
        <td>기타</td>
        <td>Splash(B2C App)</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">01.login_01,01_splash_B2C</td>
        <td>
          <router-link :to="{ name: '' }">
            login_Splash_B2C
          </router-link>
        </td>
        <td>수정중</td>
      </tr>
      <tr>
      <td align="center">539</td>
        <td>기타</td>
        <td>오류</td>
        <td>네트워크 안내</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Networkerror</td>
        <td>
          <router-link :to="{ name: 'etc_Networkerror' }">
            etc_Networkerror
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">540</td>
        <td>기타</td>
        <td>　</td>
        <td>토스트 메시지</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Toast</td>
        <td>
         <router-link :to="{ name: 'components_snackbar' }">
            components_snackbar
          </router-link>
          와 동일
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">541</td>
        <td>기타</td>
        <td>　</td>
        <td>앱 권한동의 안내팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_Authority</td>
        <td>
          <router-link :to="{ name: 'etc_Authority1' }">
            etc_Authority1
          </router-link>,
           <router-link :to="{ name: 'etc_Authority' }">
            etc_Authority
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">542</td>
        <td>기타</td>
        <td>　</td>
        <td>오류(YES/NO) 팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">etc_GeneralPoPup</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          제플린 없음
        </td>
        <td></td>
      </tr>
        <tr>
      <td align="center">543</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>운영보고서 탭</td>
        <td>이러닝　</td>
        <td>이러닝 과정상세</td>
        <td>그래프보기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_06.01_Operation_elearning_report_graph</td>
        <td>
          <router-link :to="{ name: 'Eduperson_operation_elearning_control' }">
            Eduperson_operation_elearning_control 
          </router-link>
          와 같음
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">544</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>  </td>
        <td>　</td>
        <td>표보기</td>
        <td>  </td>
        <td>　</td>
        <td class="textL">11.Eduperson_06.01_Operation_elearning_report_table</td>
        <td>
          <router-link :to="{ name: 'Eduperson_operation_elearning_control' }">
            Eduperson_operation_elearning_control 
          </router-link>
          와 같음
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">545</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>운영보고서 탭</td>
        <td>집합</td>
        <td>집합 과정상세</td>
        <td>그래프 보기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_06.01_Operation_set_report_graph</td>
        <td>
          <router-link :to="{ name: 'Eduperson_operation_set_control' }">
            Eduperson_operation_set_control
          </router-link>
          와 같음
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">546</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>　</td>
        <td>  </td>
        <td>　</td>
        <td>표보기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_06.01_Operation_set_report_table</td>
        <td>
          <router-link :to="{ name: 'Eduperson_operation_set_control' }">
            Eduperson_operation_set_control
          </router-link>
          와 같음
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">547</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>과정제작</td>
        <td>이러닝</td>
        <td>과정구성</td>
        <td>과정모드 선택</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.01._e-learning_material_mode</td>
        <td>
          <router-link :to="{ name: 'Atorm_e-learning_material_mode' }">
            Atorm_e-learning_material_mode
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">548</td>
        <td>B2C - Drawer</td>
        <td>고객센터</td>
        <td>이벤트</td>
        <td>이벤트</td>
        <td>이벤트상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_08.01_Event_detail</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_Event_detail' }">
            B2C_Drawer_Event_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">549</td>
        <td>B2C - Drawer</td>
        <td>　</td>
        <td>  </td>
        <td>　</td>
        <td>당첨자 상세</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">B2C_Drawer_08.02_Event_end_detail</td>
        <td>
          <router-link :to="{ name: 'B2C_Drawer_Event_Winner_detail' }">
            B2C_Drawer_Event_Winner_detail
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">550</td>
        <td>학습홈 영역</td>
        <td>기본 학습홈</td>
        <td>학습홈 (조합형)</td>
        <td>학습현황</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.13.home_union_studycondition</td>
        <td>
           <router-link :to="{ name: 'Study_home_union_studycondition' }">
            Study_home_union_studycondition
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">551</td>
        <td>학습홈 영역</td>
        <td>기본 학습홈</td>
        <td>학습홈 (외국어BPO)</td>
        <td>출석부</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">05.Study_01.08.home_set_langaugeBPO_attendance</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
          삭제
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">552</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>현황통계 탭</td>
        <td>통합검색 상세</td>
        <td>검색어 상세</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_05.01_Statement_searchword</td>
        <td>
          <router-link :to="{ name: 'Eduperson_statement_searchword' }">
            Eduperson_statement_searchword
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <tr>
      <td align="center">553</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>운영보고서 탭</td>
        <td>자율</td>
        <td>자율 상세</td>
        <td>그래프 보기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_06.01_Operation_autonomy_report_graph</td>
        <td>
          <router-link :to="{ name: 'Eduperson_operation_autonomy_control' }">
            Eduperson_operation_autonomy_control
          </router-link>
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">554</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>운영보고서 탭</td>
        <td>자율</td>
        <td>자율 상세</td>
        <td>표 보기</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">11.Eduperson_06.01_Operation_autonomy_report_table</td>
        <td>
          <router-link :to="{ name: 'Eduperson_operation_autonomy_control' }">
            Eduperson_operation_autonomy_control
          </router-link>
        </td>
        <td>tab page</td>
      </tr>
      <tr>
      <td align="center">555</td>
        <td>Floating BTN</td>
        <td>나의 공간</td>
        <td>나의 지식 cliping</td>
        <td>관심 CLIPing</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.05.cliping_fav</td>
        <td>
          <router-link :to="{ name: 'MySpace_cliping_fav' }">
            MySpace_cliping_fav
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">556</td>
        <td>Floating BTN</td>
        <td>나의 공간</td>
        <td>정규학습(학습목록)</td>
        <td>학습중</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td class="textL">04.MySpace_04.01.formal_certificate_name</td>
        <td>
          <router-link :to="{ name: 'MySpace_formal_certificate_name_kor' }">
            MySpace_formal_certificate_name_kor
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">557</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>과정제작</td>
        <td>집합/플립</td>
        <td>과정구성</td>
        <td>레포트</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_material_report</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">558</td>
        <td>Drawer - 지식 cliping</td>
        <td>지식 cliping</td>
        <td>지식영상</td>
        <td>시리즈 모아보기</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.02.VideoSeries</td>
        <td>
          <router-link :to="{ name: 'CLIPing_videoSeries' }">
            CLIPing_videoSeries
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">559</td>
        <td>Drawer - 지식 cliping</td>
        <td>지식 cliping</td>
        <td>PaperPro</td>
        <td>상세</td>
        <td>댓글작성</td>
        <td></td>
        <td>　</td>
        <td class="textL">15.CLIPing_15.03.06.PaperProDetail</td>
        <td>
          <router-link :to="{ name: 'CLIPing_paperProDetail' }">
            CLIPing_paperProDetail
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_paperProDetail_port' }">
            CLIPing_paperProDetail_port
          </router-link>
          ,
          <router-link :to="{ name: 'CLIPing_paperProDetailComment' }">
            CLIPing_paperProDetailComment
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">560</td>
        <td>학습홈 영역</td>
        <td>기본 학습홈</td>
        <td>학습홈 (집합)</td>
        <td>학습 캘린더</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">05.Study_01.05.home_set_calendar2</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">561</td>
        <td>BPO 강사</td>
        <td>나의 담당 과정</td>
        <td>상세</td>
        <td>출석현황</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail</td>
        <td>         
          <router-link :to="{ name: 'BPO_subjectlist_detail' }">
            BPO_subjectlist_detail
          </router-link>,
          <router-link :to="{ name: 'BPO_subjectlist_detail_popup' }">
            BPO_subjectlist_detail_popup
          </router-link>,
          <router-link :to="{ name: 'BPO_subjectlist_detail_popup_disable' }">
            BPO_subjectlist_detail_popup_disable
          </router-link>,
          <router-link :to="{ name: 'BPO_subjectlist_detail_popup_save' }">
            BPO_subjectlist_detail_popup_save
          </router-link>,
          <router-link :to="{ name: 'BPO_subjectlist_detail02' }">
            BPO_subjectlist_detail02
          </router-link>,
          <router-link :to="{ name: 'BPO_subjectlist_detail_disable' }">
            BPO_subjectlist_detail_disable
          </router-link>         
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">562</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td>학습자별 상세</td>
        <td></td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_student</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_student' }">
            BPO_subjectlist_detail_student
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">563</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td>휴강 등록</td>
        <td></td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_cancel</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_cancel' }">
            BPO_subjectlist_detail_cancel
          </router-link>,
          <router-link :to="{ name: 'BPO_subjectlist_detail_cancel_popup' }">
            BPO_subjectlist_detail_cancel_popup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">564</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>휴강일 설정</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_cancel_setdate</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_cancel_setdate' }">
            BPO_subjectlist_detail_cancel_setdate
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">565</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td>보강 등록</td>
        <td></td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_supplementary</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_supplementary' }">
            BPO_subjectlist_detail_supplementary
          </router-link>,
           <router-link :to="{ name: 'BPO_subjectlist_detail_supplementary_add' }">
            BPO_subjectlist_detail_supplementary_add
          </router-link>,
           <router-link :to="{ name: 'BPO_subjectlist_detail_supplementary_done' }">
            BPO_subjectlist_detail_supplementary_done
          </router-link>,
           <router-link :to="{ name: 'BPO_subjectlist_detail_supplementary_popup' }">
            BPO_subjectlist_detail_supplementary_popup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">566</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>보강일 설정</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_supplementary_setdate</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_supplementary_setdate' }">
            BPO_subjectlist_detail_supplementary_setdate
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">567</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td>단축 등록</td>
        <td></td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_shorten</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_shorten' }">
            BPO_subjectlist_detail_shorten
          </router-link>,
          <router-link :to="{ name: 'BPO_subjectlist_detail_shorten_popup' }">
            BPO_subjectlist_detail_shorten_popup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">568</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>단축일 설정</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_shorten_setdate</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_shorten_setdate' }">
            BPO_subjectlist_detail_shorten_setdate
          </router-link>         
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">569</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td>연장 등록</td>
        <td></td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_extend</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_extend' }">
            BPO_subjectlist_detail_extend
          </router-link>,
           <router-link :to="{ name: 'BPO_subjectlist_detail_extend_popup' }">
            BPO_subjectlist_detail_extend_popup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">570</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>연장일 설정</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_extend_set</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_extend_setdate' }">
            BPO_subjectlist_detail_extend_setdate
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">571</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td>SMS 보내기</td>
        <td></td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_SMS</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_SMS' }">
            BPO_subjectlist_detail_SMS
          </router-link>,
          <router-link :to="{ name: 'BPO_subjectlist_detail_SMS_popup' }">
            BPO_subjectlist_detail_SMS_popup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">572</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>발송대상 선택</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_SMS_reciever</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_SMS_reciever' }">
            BPO_subjectlist_detail_SMS_reciever
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">573</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td>평가</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_test</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_test' }">
            BPO_subjectlist_test
          </router-link>
          와 같음
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">574</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td>평가 등록/수정</td>
        <td></td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_test_completion</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_test_completion' }">
            BPO_subjectlist_test_completion
          </router-link>
          와 같음
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">575</td>
        <td>BPO 강사</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>일괄 출석체크</td>
        <td>　</td>
        <td class="textL">14.BPO_01.01.subjectlist_detail_check</td>
        <td>
          <router-link :to="{ name: 'BPO_subjectlist_detail_check' }">
            BPO_subjectlist_detail_check
          </router-link>,
          <router-link :to="{ name: 'BPO_subjectlist_detail_check_popup' }">
            BPO_subjectlist_detail_check_popup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">576</td>
        <td>학습창 영역</td>
        <td>학습창 파일럿 테스트2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">05.Study_05.10.etc_pilottest2</td>
        <td>
           <router-link :to="{ name: 'Study_05_etc_pilottest' }">
            Study_05_etc_pilottest
          </router-link>
          와 같음
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">577</td>
        <td>수강신청 (공통)</td>
        <td>과정상세 (과정요약)</td>
        <td>과정목차 - 상시</td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">06.regiclass_01.03.detailview_autonomy</td>
        <td>
          <router-link :to="{ name: 'regiclass_detailview_autonomy' }">
            regiclass_detailview_autonomy
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">578</td>
        <td>회사운영자 - Main(TABS)</td>
        <td>로그인</td>
        <td>OTP</td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">11.Eduperson_01.00_loginOTP</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">579</td>
        <td>로그인 / 회원가입</td>
        <td>로그인</td>
        <td>본인인증</td>
        <td>이메일 인증</td>
        <td>법인폰</td>
        <td></td>
        <td>　</td>
        <td class="textL">01.login_09.03_login_corporationphone</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">580</td>
        <td>학습홈 영역</td>
        <td>기본메뉴</td>
        <td>학습현황 (차시노출)</td>
        <td>포인트 내역 상세</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">05.Study_02.01.studystatus_point</td>
        <td>
           <router-link :to="{ name: 'Study_studystatus_point' }">
            Study_studystatus_point 
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">581</td>
        <td>Drawer - ATORM</td>
        <td>Splash(아톰 모드전환 시)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">07.ATORM_07.01. Splash</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">582</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>과정현황</td>
        <td>과정정보</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">07.ATORM_07.04.00._status_ info</td>
        <td>
          <!--<router-link :to="{ name: 'Atorm_status_info' }">
            Atorm_status_info
          </router-link>-->
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">583</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>과정현황</td>
        <td>과정상세(집합)</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">07.ATORM_07.04.01._status_ details_group</td>
        <td>
          <router-link :to="{ name: 'Atorm_status_details_group' }">
            Atorm_status_details_group
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">584</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>과정현황</td>
        <td>과정상세(플립)</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">07.ATORM_07.04.01._status_ details_flip</td>
        <td>
          <router-link :to="{ name: 'Atorm_status_details_flip' }">
            Atorm_status_details_flip
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">585</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>과정현황</td>
        <td>과정상세(지식영상)</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">07.ATORM_07.04.01._status_ details_basic</td>
        <td>
          <router-link :to="{ name: 'Atorm_status_details_basic' }">
            Atorm_status_details_basic
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">586</td>
        <td>학습창 영역</td>
        <td>구학습창</td>
        <td>movie, audio</td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">05.Study_03.04.03.LO_old_mp4</td>
        <td>
          <router-link :to="{ name: 'Study_LO_old_mp4' }">
            Study_LO_old_mp4
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">587</td>
        <td>학습창 영역</td>
        <td>구학습창</td>
        <td>movie, audio</td>
        <td>교안</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">05.Study_03.04.04.LO_old_mp4_studymaterial</td>
        <td>
          <router-link :to="{ name: 'Study_LO_old_mp4_studymaterial' }">
            Study_LO_old_mp4_studymaterial
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">588</td>
        <td>학습창 영역</td>
        <td>구학습창</td>
        <td>Image+audio</td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">05.Study_03.04.05.LO_old_imageaudio</td>
        <td>
          <router-link :to="{ name: 'Study_LO_old_imageaudio' }">
            Study_LO_old_imageaudio
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">589</td>
        <td>검색</td>
        <td>검색 메인</td>
        <td>추천 키워드</td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">08.search_03.01.Enter_recomm</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">590</td>
        <td>검색</td>
        <td>검색어 입력</td>
        <td>정규과정</td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">08.search_03.02.typing_courses</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">591</td>
        <td>검색</td>
        <td>검색어 입력</td>
        <td>콘텐츠</td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">08.search_03.02.typing_contents</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">592</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>과정 제작</td>
        <td>집합/플립러닝</td>
        <td>수료 기준</td>
        <td>플립</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_criteria_flip</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">593</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>과정 제작</td>
        <td>집합/플립러닝</td>
        <td>완료</td>
        <td>플립</td>
        <td>　</td>
        <td class="textL">07.ATORM_07.02.02._group/flip_complete_flip</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">594</td>
        <td>Drawer - ATORM</td>
        <td>Main - User</td>
        <td>아이템팩토리</td>
        <td>신규아이템추가</td>
        <td>quiz</td>
        <td></td>
        <td>　</td>
        <td class="textL">07.ATORM_07.07.02._Item factory_quiz</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">595</td>
        <td>Drawer - 고객센터</td>
        <td>고객센터</td>
        <td>학습가이드</td>
        <td>학습방법 안내2</td>
        <td></td>
        <td></td>
        <td>　</td>
        <td class="textL">13.CustomerCenter_03.02_Studyguide_detail2</td>
        <td>
          <router-link :to="{ name: '' }">
            
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">추가페이지-add</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL">03.drawer_08.02_myinfo_account_password</td>
        <td>
          <router-link :to="{ name: 'Drawer_08_myinfo_account_password' }">
            Drawer_08_myinfo_account_password
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>아이콘</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_color' }">
            components_color
          </router-link>
        </td>
        <td></td>
      </tr>      
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>아이콘</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_icons' }">
            components_icons
          </router-link>
        </td>
        <td></td>
      </tr>      
      <tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>테이블</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_tables' }">
            components_tables
          </router-link>
        </td>
        <td></td>
      </tr>         
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>버튼</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_buttons' }">
            components_buttons
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>텍스트필드</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_textfield' }">
            components_textfield
          </router-link>
        </td>
        <td>20190107 추가컴포넌트 </td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>체크박스</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_checkbox' }">
            components_checkbox
          </router-link>
        </td>
        <td>20181217 추가 수정</td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>라디오</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_radio' }">
            components_radio
          </router-link>
        </td>
        <td>20181217 추가 수정</td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>라디오버튼</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_radiobutton' }">
            components_radiobutton
          </router-link>
        </td>
        <td>20181204 수정</td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>스위치</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_switch' }">
            components_switch
          </router-link>
        </td>
        <td>20181204 수정</td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>셀렉트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_select' }">
            components_select
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>싱글라인리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_list_singleline' }">
            components_list_singleline
          </router-link>
        </td>
        <td>20181129 수정</td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>멀티라인리스트</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_list_multiline' }">
            components_list_multiline
          </router-link>
        </td>
        <td>20181129 수정</td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>썸네일리스트</td>
        <td>vertical</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_thumblist_vertical' }">
            components_thumblist_vertical
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>썸네일리스트</td>
        <td>horizontal　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_thumblist_horizontal' }">
            components_thumblist_horizontal
          </router-link>
        </td>
        <td></td>
      </tr>

      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>Tab</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_tab' }">
            components_tab
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>Progress Bar</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_progressbar' }">
            components_progressbar
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>Stepper</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_stepper' }">
            components_stepper
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>카드</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_card' }">
            components_card
          </router-link>
        </td>
        <td>type1 display 수정, label2 추가</td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>팝업</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_popup' }">
            components_popup
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>앱바</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_header' }">
            components_header
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>앱바 메인</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_mainheader' }">
            components_mainheader
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td>앱바 템</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_tabheader' }">
            components_tabheader
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통컴포넌트</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_thumblist_horizontal' }">
            components_thumblist_horizontal
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>레이아웃</td>
        <td>리스트형(리스트(메인)):100%</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_layout_type1' }">
            components_layout_type1
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>레이아웃</td>
        <td>일반형(동영상):100%, 620px, 844px</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_layout_type2' }">
            components_layout_type2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>레이아웃</td>
        <td>예외형(로그인):520px</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_layout_type3' }">
            components_layout_type3
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>키보드</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_keyboard' }">
            components_keyboard
          </router-link>
        </td>
        <td>20181221 업데이트</td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>댓글</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_reply' }">
            components_reply
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>Bottom Sheet</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_bottomsheet' }">
            components_bottomsheet
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>Spinner</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_spinner' }">
            components_spinner
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>Spinner</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_flowplayer' }">
            components_flowplayer
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>Spinner</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_dropdown' }">
            components_dropdown
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>chart</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_chart' }">
            components_chart
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>chart</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_chart_lib' }">
            components_chart_lib
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_app_bar_slp' }">
            components_app_bar_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_bottom_sheet_slp' }">
            components_bottom_sheet_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_checkbox_slp' }">
            components_checkbox_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_dropdown_slp' }">
            components_dropdown_slp
          </router-link>
          ,
          <router-link :to="{ name: 'components_dropdown_slp2' }">
            components_dropdown_slp2
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_popup_slp' }">
            components_popup_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_radio_slp' }">
            components_radio_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_select_slp' }">
            components_select_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_radiobutton_slp' }">
            components_radiobutton_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_slider_slp' }">
            components_slider_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_switch_slp' }">
            components_switch_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>New 컨포넌트확인페이지</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_textfield_slp' }">
            components_textfield_slp
          </router-link>
        </td>
        <td></td>
      </tr>
      <tr>
      <td align="center">0</td>
        <td>공통</td>
        <td>SnackBar</td>
        <td></td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td class="textL"></td>
        <td>
          <router-link :to="{ name: 'components_snackbar' }">
            components_snackbar
          </router-link>
        </td>
        <td></td>
      </tr>
      

      </tbody>
    </table>
    <a href="#" class="top">Top</a>
  </div>  	

</template>

<script>
import $ from 'jquery/dist/jquery.min.js'
import '../assets/scss/common.scss'
export default {
  name: 'Worksheet',
  /* vue lifecycle */
  created () {
    $(function () {
      // $('.table colgroup').prepend('<col width="50px" />')
      // $('.table thead tr').prepend('<th scope="col">No</th>')
      // for (let i = 0; i <= $('.table tbody tr').length; i++) {
      //   $('.table tbody tr:nth-child(' + i + ')').prepend('<td class="tac">' + i + '</td>')
      // }
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $('.top').fadeIn()
        } else {
          $('.top').fadeOut()
        }
      })
      $('.top').click(function () {
        $('html, body').animate({scrollTop: 0}, 400)
        return false
      })
    })
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      menulist: [
        { 'd1': '공통컴포넌트',
          'd2': '버튼',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_buttons',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': '텍스트필드',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_textfield',
          'file': '',
          'comment': '20181129 수정됨(타입에따라 x아이콘 적용여부)'},
        { 'd1': '공통컴포넌트',
          'd2': '체크박스',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_checkbox',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': '라디오',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_radio',
          'file': '',
          'comment': '20181204 수정'},
        { 'd1': '공통컴포넌트',
          'd2': '라디오버튼',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_radiobutton',
          'file': '',
          'comment': '20181204 수정'},
        { 'd1': '공통컴포넌트',
          'd2': '스위치',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_switch',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': '셀렉트',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_select',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': '싱글라인리스트',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_list_singleline',
          'file': '',
          'comment': '20181129 수정'},
        { 'd1': '공통컴포넌트',
          'd2': '멀티라인리스트',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_list_multiline',
          'file': '',
          'comment': '20181129 수정'},
        { 'd1': '공통컴포넌트',
          'd2': '썸네일리스트',
          'd3': 'vertical',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_thumblist_vertical',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': '썸네일리스트',
          'd3': 'horizontal',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_thumblist_horizontal',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': 'Tab',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_tab',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': 'Progress Bar',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_progressbar',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': 'Stepper',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_stepper',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': '카드',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_card',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': '팝업',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_popup',
          'file': '',
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': '앱바',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_header',
          'file': '',
          'comment': '20181205 신규'},
        { 'd1': '공통컴포넌트',
          'd2': '앱바 메인',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_mainheader',
          'file': '',
          'comment': '20181205 신규'},
        { 'd1': '공통컴포넌트',
          'd2': '앱바 텝',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_tabheader',
          'file': '',
          'comment': '20181205 신규'},
        { 'd1': '공통',
          'd2': '레이아웃',
          'd3': '리스트형',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_layout_type1',
          'file': '',
          'comment': ''},
        { 'd1': '공통',
          'd2': '레이아웃',
          'd3': '일반형',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_layout_type2',
          'file': '',
          'comment': ''},
        { 'd1': '공통',
          'd2': '레이아웃',
          'd3': '예외형',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_layout_type3',
          'file': '',
          'comment': ''},
        { 'd1': '로그인/회원가입',
          'd2': '연수원 찾기',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Login_findcenter',
          'file': '',
          'comment': ''},
        { 'd1': '로그인/회원가입',
          'd2': '',
          'd3': '이메일로 찾기',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Login_findcenter_email',
          'file': '',
          'comment': ''},
        { 'd1': '로그인/회원가입',
          'd2': '',
          'd3': '',
          'd4': '연수원 선택',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Login_findcenter_select',
          'file': '',
          'comment': ''},
        { 'd1': '로그인/회원가입',
          'd2': '',
          'd3': '연수원 URL로 찾기',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Login_findcenter_url',
          'file': '',
          'comment': ''},
        { 'd1': '로그인/회원가입',
          'd2': '로그인',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Login_login',
          'file': '',
          'comment': ''},
        { 'd1': '로그인/회원가입',
          'd2': '',
          'd3': '로그인 실패',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Login_login_fail',
          'file': '',
          'comment': ''},
        { 'd1': '로그인/회원가입',
          'd2': '관심분야선택',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Login_interest',
          'file': '',
          'comment': ''},
        { 'd1': '학습홈 영역',
          'd2': '',
          'd3': '용어사전',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Study_dictionary',
          'file': '',
          'comment': ''}
      ]
    }
  },
  /* vue function */
  methods: {
   
  }
}
</script>

<style scoped>
/* reset */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button{margin:0; padding:0; border:0 none;}
body,th,td,input,select,textarea,button {font-size:12px; line-height:1.5; font-family:'돋움',dotum,sans-serif; color:#666;}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary, time {display:block;}
h1,h2,h3,h4,h5,h6{font-family:"맑은 고딕", "Malgun Gothic"; font-weight:normal;}
img, fieldset{border:0 none; vertical-align:middle;}
iframe{overflow-x:hidden; overflow-y:hidden; margin:0; padding:0; border:0 none;}
dl,ul,ol,menu,li {list-style:none;}
blockquote, q {quotes:none;}
blockquote:before, blockquote:after ,q:before, q:after {content:''; content:none;}
input, select, textarea, label, button{vertical-align:middle;}
label, button{cursor:pointer;}
button {border:0 none; background-color:transparent; cursor:pointer;}
table{border-collapse:collapse; border-spacing:0;}

caption {visibility:hidden; overflow:hidden; display:none;}
legend{position:absolute; top:0; left:0; width:0; height:0; overflow:hidden; visibility:hidden; font-size:0; line-height:0;}

table {width:100%; border:1px solid #8b8b8b;}
.tit {width:1705px; height:25px; font-size:18px; font-weight:bold; padding:15px 0 10px; text-align:center;}
th {height:23px; background-color:#cdcdcd; border:1px solid #b5b5b5; padding:2px 5px 3px; text-align:center; color:#000;}
td {font-size:11px; word-break:break-all; height:15px; padding:2px 5px 3px; border-bottom:1px solid #c9c9c9; border-right:1px solid #c9c9c9;  }
td.first {border-right:1px solid #c9c9c9; border-bottom:2px solid #c9c9c9; font-weight:bold;}
td.last {border-bottom:2px solid #c9c9c9;}

a{color:#000; text-decoration:none;}
a:hover,a:active,a:focus{color:#000; text-decoration:underline;}
.Wrap{padding:5px; width:1700px; min-width:1024px;}

.textL{text-align:left;}
.font_01 {color:#a1a1a1;}
.font_02 {font-weight:bold;}
.font_03 {color:#00f;}
.font_04 {color:#f00;}
.font_05{color:#909; font-weight:bold;}
.gride{}
.gride table{border:none;}
.del td{text-decoration:line-through; color:#ababab; background: #f1f1f1;}
.del td:last-child{text-decoration: none;}
.del td.txt{color:#666; text-decoration:none;}
.dec{text-align:right; width:1705px;}
.point_bg{background:#FF9;}
.type_guide{padding:10px; background:#ac1846;  text-align:center; font-size:14px; font-weight:bold;}
.type_guide a {color:#fff;}
.red {background:#666;}
.red > td {color:#CCC;}
.yellow {color:yellow}
.new {background:yellow;}
tr.modify { background:#e2f1ff; }
tr.modify td { color:#002446;}
tr.hr td { border-top:5px solid #c9c9c9;}
span.ico {display:inline-block; font-size:10px; font-family:Myriad, Verdana; line-height:1; padding:4px; background:#666; color:#fff; border-radius:3px;}
span.ico.ing { background:#30F;}
span.ico.done { background:#C0C;}
span.ico.modify { background:#C39;}
.tac{text-align: center;}
.tbl-top{padding-bottom: 10px;}
.tbl-top:after{display: block; content: ''; clear: both;}
.tbl-top .fl{float: left;}
.tbl-top .fr{float: right;}
</style>
