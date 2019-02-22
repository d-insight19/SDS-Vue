<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container" class="sample_page">
            <h3> 정규식 +  css로 작업한 Input  ( 입력시 x 아이콘 ) </h3>
            <h3> 로그인 password , 검색 input 만 아이콘 노출  </h3>
            <br/>
            <br/>
            <!-- X 아이콘이 필요한 input -->
            <slp-text-field placeholder="회사명 검색" icon="search" clearable></slp-text-field>

            <!-- 2019-01-07 : 기존 Seach 컴포넌트에   버튼 a태그에  eye 클래스 추가되고 x 아이콘 삭제 -->
            <slp-text-field classObject="underline" type="password" placeholder="비밀번호" error message="비밀번호를 입력해주세요."></slp-text-field>

            <!-- 2019-01-13 : underline형태가 아닌 비밀번호의 경우 eye 버튼의 위치가 달라 클래스 추가 -->
            <slp-text-field type="password" placeholder="8~12자 영문 대소문자,숫자,특수문자 조합" error message="8~12자의 영문자, 특수문자 조합만 가능합니다."></slp-text-field>

            <ul class="loginList">
                <li>
                    <!-- X 아이콘이 필요없는 input -->
                    <slp-text-field classObject="underline" placeholder="아이디"></slp-text-field>
                    <slp-text-field classObject="underline" value='test' placeholder="아이디" clearable></slp-text-field>
                </li>
				<li>
                    <!-- X 아이콘이 필요한 input -->
                    <slp-text-field classObject="underline" type="password" placeholder="비밀번호" clearable></slp-text-field>
                    <slp-text-field classObject="underline" type="password" value='1234' placeholder="비밀번호" clearable></slp-text-field>
                </li>
			</ul>

            <ul class="loginList">
                <li>
                    <!-- X 아이콘이 필요없는 input -->
                    <slp-text-field classObject="underline" placeholder="아이디" :error="true" message="이름을 입력해주세요."></slp-text-field>
                    <slp-text-field classObject="underline" placeholder="아이디" :error="false" message="이름을 입력해주세요."></slp-text-field>
                </li>
				<li>
                     <!-- X 아이콘이 필요한 input -->
                    <slp-text-field classObject="underline" type="password" placeholder="비밀번호" error message="비밀번호를 입력해주세요." clearable></slp-text-field>
                </li>
			</ul>

            <ul class="loginList">
				<li>
                    <!-- X 아이콘이 필요없는 input -->
                    <slp-text-field placeholder="아이디"></slp-text-field>
                </li>
				<li>
                     <!-- X 아이콘이 필요한 input -->
                    <slp-text-field type="password" placeholder="비밀번호" clearable></slp-text-field>
                </li>
			</ul>

            <ul class="loginList">
				<li>
                     <!-- X 아이콘이 필요없는 input -->
                    <slp-text-field placeholder="아이디" error message="이름을 입력해주세요."></slp-text-field>
                </li>
				<li>
                     <!-- X 아이콘이 필요한 input -->
                    <slp-text-field type="password" placeholder="비밀번호" error message="비밀번호를 입력해주세요." clearable></slp-text-field>
                </li>
			</ul>

            <ul class="loginList">
				<li>
                     <!-- X 아이콘이 필요없는 input -->
                    <slp-text-field placeholder="아이디" success message="사용가능한 아이디 입니다."></slp-text-field>
                </li>
			</ul>

        </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_textfield',
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

<style>
    .sample_page li{margin-bottom:10px;}
</style>
