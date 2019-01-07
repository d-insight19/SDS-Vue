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
            <div class="intSchBox">
                <!-- X 아이콘이 필요한 input -->
                <div class="search-wrapper">
                    <input type="text"  pattern="^\s+" class="input" placeholder="회사명 검색" />
                    <button class="close-icon" type="button"></button>
                </div>
                <a href="#" class="btn"><span class="ico"></span></a>
            </div>
            

            
            <ul class="loginList">
                <li>
                    <!-- X 아이콘이 필요없는 input -->
                    <input type="text" class="input underline" placeholder="아이디" />
                </li>
				<li>
                    <!-- X 아이콘이 필요한 input -->
                    <div class="search-wrapper">
                        <input type="password"  pattern="^\s+" class="input underline" placeholder="비밀번호" />
                        <button class="close-icon" type="button"></button>
                    </div>
                </li>
			</ul>

            <ul class="loginList">
                <li>
                    <!-- X 아이콘이 필요없는 input -->
                    <input type="text" class="input underline error" placeholder="아이디" />
                    <p class="InfoChK-resultTxt err">이름을 입력해주세요.</p>
                </li>
				<li>
                     <!-- X 아이콘이 필요한 input -->
                    <div class="search-wrapper">
                        <input type="password"  pattern="^\s+" class="input underline error" placeholder="비밀번호" />
                        <button class="close-icon" type="button"></button>
                    </div>
                    <p class="InfoChK-resultTxt err">이름을 입력해주세요.</p>
                </li>
			</ul>

            <ul class="loginList">
				<li>
                    <!-- X 아이콘이 필요없는 input -->
                    <input type="text"  class="input" placeholder="아이디" />
                </li>
				<li>
                     <!-- X 아이콘이 필요한 input -->
                    <div class="search-wrapper">
                        <input type="password"  pattern="^\s+" class="input" placeholder="비밀번호" />
                        <button class="close-icon" type="button"></button>
                    </div>
                </li>
			</ul>

            <ul class="loginList">
				<li>
                     <!-- X 아이콘이 필요없는 input -->
                    <input type="text"  class="input error" placeholder="아이디" />
                    <p class="InfoChK-resultTxt err">이름을 입력해주세요.</p>
                </li>
				<li>
                     <!-- X 아이콘이 필요한 input -->
                    <div class="search-wrapper">
                        <input type="password"  pattern="^\s+" class="input error" placeholder="비밀번호" />
                        <button class="close-icon" type="button"></button>
                    </div>
                    <p class="InfoChK-resultTxt err">비밀번호를 입력해주세요.</p>
                </li>
			</ul>
            
            <ul class="loginList">
				<li>
                     <!-- X 아이콘이 필요없는 input -->
                    <input type="text" class="input succ" placeholder="아이디" />
                    <p class="InfoChK-resultTxt succ">사용가능한 아이디 입니다</p>
                </li>
			</ul>


            <!-- 기존 Seach 컴포넌트에   버튼 a태그에  eye 클래스 추가됨 -->
            <div class="intSchBox">
                <!-- X 아이콘이 필요한 input -->
                <div class="search-wrapper">
                    <input type="text"  pattern="^\s+" class="input underline" placeholder="비밀번호" />
                    <button class="close-icon" type="button"></button>
                </div>
                <a href="#" class="btn eye" v-show="password_show" @click="passwordtoggle"><span class="ico"></span></a>
                <a href="#" class="btn eye eye_slash" v-show="!password_show" @click="passwordtoggle"><span class="ico"></span></a>
            </div>


            

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
      password_show: false
    }
  },
  /* vue function */
  methods: {
    passwordtoggle (event) {
      var inputTag = event.target.parentElement.parentElement.getElementsByTagName('input')[0]
      if (this.password_show) {
        inputTag.setAttribute('type', 'password')
      } else {
        inputTag.setAttribute('type', 'text')
      }
      this.password_show = !this.password_show
    }
  }
}
</script>

<style>
    .sample_page li{margin-bottom:10px;}
</style>
