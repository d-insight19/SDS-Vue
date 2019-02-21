<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">
      <!-- container -->
      <div id="container" class="mediaquery findcenter pd70">
        <!-- header -->
        <div id="header">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_18"></p>
        </div>
        <!-- //header -->

        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <!-- 연수원 URL 찾기의 타이틀 margin-bottom 은 36px이라  type2 클래스 추가 -->
                <h1 class="h-tit1 type2">연수원 URL로 찾기</h1>

                <!-- list -->
                <ul class="ulList type2">
                    <li>
                        <strong class="label-tit">연수원 URL</strong>
                        <slp-text-field placeholder="http://" ref="refInput" @focus="focusToggle" class="search-wrapper" clearable ><button class="close-icon" type="button" @click="delTxt"></button></slp-text-field>
                    </li>
                </ul>
                <!-- //list -->
            </div>
          </div>
        </div>

        <!-- fixed Bottom Btn -->
        <div class="fixBtmBtn">
            <ul>
                <li>
                    <button type="button" class="btn ld clr1">다음</button>
                </li>
            </ul>
        </div>
        <!-- //fixed Bottom Btn -->

        <div id="keyboard_wrap">
            <div id="inner_dim" v-show="focusFlag" @click="focusToggle"></div>
            <div class="keyboard_input" v-show="focusFlag">

                <div class="bookmark_wrap" v-if="keyboard_type=='4'">
                    <span class="bookmarktxt">북마크</span>
                    <span class="fr time">01:36</span>
                </div>
                <div class="open_wrap" v-if="keyboard_type=='3' || keyboard_type=='4' ">
                    <span class="opentxt">공개여부</span>
                    <slp-switch :classObject="{'fr': true}"/>
                    <span class="opentxt2">비공개</span>
                </div>

                <div class="rating_wrap" v-if="keyboard_type=='2'">
                    <span class="ratingtxt">평점</span>
                    <fieldset class="fr rating">
                        <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                        <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                        <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                        <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                        <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                    </fieldset>
                </div>

                <div class="inputbox" >
                    <div class="textarea_wrap">
                        <textarea @keydown="onKeydown" placeholder="답글을 입력하세요."></textarea>
                    </div>
                    <div class="inputbottom">
                        <span class="strlenth" >{{keylength}}/300</span>
                        <span class="regiBtn" :class="{active: keylength}">등록</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
      <!-- //container -->


    </div>
    <!-- //wrap -->

</template>

<script>
/* eslint-disable */
export default {
  name: 'Login_findcenter_url',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      keylength: 0,
      focusFlag: false,
      keyboard_type: 2
    }
  },
  /* vue function */
  methods: {
    focusToggle () {
      this.focusFlag = !this.focusFlag
    },
    onKeydown (event) {
      this.keylength = event.target.value.length
      event.target.style.height = '1px'
      event.target.style.height = (event.target.scrollHeight) + 'px'
    },
    delTxt () {
      this.$refs.refInput.value = ''
    }
  }
}
</script>
