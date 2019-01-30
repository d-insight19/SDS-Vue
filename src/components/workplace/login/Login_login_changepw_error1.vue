<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery changepw pd70">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only close"><span class="ico">이전</span></button>
          <p class="header_text font_18"></p>
        </div>
        <!-- //header -->
        
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                
                <!-- title -->
                <div class="titleWrap">
                    <h1 class="h-tit1 type2">비밀번호 변경</h1>
                    <ul class="txt-desc2">
                        <li>홍길동님은 장기간 비밀번호를 변경하지 않으셨습니다. 개인정보 보호를 위해 지금 비밀번호를 변경해주세요.</li>
                        <li class="color_clr2">비밀번호 변경문의  1544-9001</li>
                    </ul>
                </div>
                <!-- //title -->

                
                <!-- list -->
                <ul class="ulList type2">
                    <li>
                        <strong class="label-tit">현재 비밀번호</strong>
                        <!-- 추가되는 새로운 비밀번호 컴포넌트로 교체해야함-->
                        <!-- 2019-01-07 : 기존 Seach 컴포넌트에   버튼 a태그에  eye 클래스 추가되고 x 아이콘 삭제 -->
                        <div class="intSchBox">
                            <div class="search-wrapper">
                                <input type="password" ref="refInput" pattern="^\s+" class="input error" placeholder="Error password" />
                                <a href="#" class="btn eye" v-show="password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <a href="#" class="btn eye eye_slash" v-show="!password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <p class="InfoChK-resultTxt err">비밀번호를 입력해 주세요</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong class="label-tit">새 비밀번호</strong>
                        <!-- 추가되는 새로운 비밀번호 컴포넌트로 교체해야함-->
                        <!-- 2019-01-07 : 기존 Seach 컴포넌트에   버튼 a태그에  eye 클래스 추가되고 x 아이콘 삭제 -->
                        <div class="intSchBox">
                            <div class="search-wrapper">
                                <input type="password"  ref="refInput2"  pattern="^\s+" class="input" placeholder="6~12자의 영소문자, 숫자, 특수문자를 조합하세요" />
                                <a href="#" class="btn eye" v-show="password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <a href="#" class="btn eye eye_slash" v-show="!password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <!-- <p class="InfoChK-resultTxt err">8~12자의 영문자, 특수문자 조합만 가능합니다.</p> -->
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong class="label-tit">새 비밀번호 확인</strong>
                        <!-- 추가되는 새로운 비밀번호 컴포넌트로 교체해야함-->
                        <!-- 2019-01-07 : 기존 Seach 컴포넌트에   버튼 a태그에  eye 클래스 추가되고 x 아이콘 삭제 -->
                        <div class="intSchBox">
                            <div class="search-wrapper">
                                <input type="password"  ref="refInput3" pattern="^\s+" class="input" placeholder="6~12자의 영소문자, 숫자, 특수문자를 조합하세요" />
                                <a href="#" class="btn eye" v-show="password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <a href="#" class="btn eye eye_slash" v-show="!password_show" @click="passwordtoggle"><span class="ico"></span></a>
                                <!-- <p class="InfoChK-resultTxt err">비밀번호가 일치하지 않습니다.</p> -->
                            </div>
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
                <!-- 비활성화시 :  disabled 추가 -->
                <li><button type="button" class="btn md">나중에 변경</button></li>
                <li><button type="button" class="btn md clr1">확인</button></li>
            </ul>
        </div>
        <!-- //floating button -->
        
      </div>
      <!-- //container --> 
        
      
    </div>
    <!-- //wrap -->

</template>

<script>
/* eslint-disable */
export default {
  name: 'Login_changepw',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      password_show: ''
    }
  },
  /* vue function */
  methods: {
    passwordtoggle () {
        this.password_show = !this.password_show
        if (this.password_show === false) {
            this.$refs.refInput.setAttribute('type', 'password')
            this.$refs.refInput2.setAttribute('type', 'password')
            this.$refs.refInput3.setAttribute('type', 'password')
        } else if (this.password_show === true) {
            this.$refs.refInput.setAttribute('type', 'text')
            this.$refs.refInput2.setAttribute('type', 'text')
            this.$refs.refInput3.setAttribute('type', 'text')
        }
      }
  }
}
</script>
