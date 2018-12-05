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
		<col width="120px" />
		<col width="140px" />
		<col width="150px" />
		<col width="140px" />
		<col width="140px" />
		<col width="140px" />
		<col width="40px" />
		<col width="250px" />
		<col width="*" />
		</colgroup>
	  <thead>
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
	  </thead>
	  <tbody>
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
      </tbody>
    </table>
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
      $('.table colgroup').prepend('<col width="50px" />')
      $('.table thead tr').prepend('<th scope="col">No</th>')
      for (let i = 0; i <= $('.table tbody tr').length; i++) {
        $('.table tbody tr:nth-child(' + i + ')').prepend('<td class="tac">' + i + '</td>')
      }
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
          'comment': ''},
        { 'd1': '공통컴포넌트',
          'd2': '라디오버튼',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'components_radiobutton',
          'file': '',
          'comment': ''},
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
          'comment': ''},
        { 'd1': '학습홈 영역',
          'd2': '',
          'd3': '',
          'd4': '용어사전 상세',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Study_dictionary_detail',
          'file': '',
          'comment': ''},
        { 'd1': '학습홈 영역',
          'd2': '선택메뉴',
          'd3': '토론방',
          'd4': '토론방 수정/등록',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Study_02_discuss_edit',
          'file': '',
          'comment': ''},
        { 'd1': '학습창 영역',
          'd2': '과제 (Intro)',
          'd3': '과제 내용입력',
          'd4': '모범답변',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Study_SO_assinment_bestanswer',
          'file': '',
          'comment': ''},
        { 'd1': '학습창 영역',
          'd2': '시뮬레이션',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Study_SO_simulation',
          'file': '',
          'comment': ''},
        { 'd1': '학습창 영역',
          'd2': '링크/독서통신/집합 - Full screen',
          'd3': '',
          'd4': '',
          'd5': '',
          'd6': '',
          'd7': '',
          'routeName': 'Study_03_LO_viewer_fs',
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
