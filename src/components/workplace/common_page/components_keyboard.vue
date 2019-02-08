<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery">
        <!-- header -->
        <div id="header" class="fixed" style="display:none1;">
          <button type="button" class="btn only prev"><span class="ico">이전</span></button>
          <p class="header_text font_19"> </p>
        </div>
        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">

                <input type="text" class="input underline" placeholder="focus 시 toggle 됨" @focus="focusToggle"/>

                
               
                <!-- 
                    keyboard_type 변수로 v-if 를 통해  타입 결정
                    keyboard_type : 1  = 기본형 ( TextArea )
                    keyboard_type : 2  = 평점 ( 평점 + TextArea )
                    keyboard_type : 3  = 공개여부 ( 공개여부 + TextArea )
                    keyboard_type : 4  = 북마크 + 공개여부 ( 북마크 + 공개여부 + TextArea )
                 -->
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
                

















                <!--
                    ************ 참고 ::::::  각 타입 예시     *************
                -->

                 <!-- Default :: input 박스만 존재 -->
                <div class="keyboard_input" style="display:none;">
                    <div class="inputbox" >
                        <div class="textarea_wrap">
                            <textarea  @keydown="onKeydown" placeholder="의견을 입력하세요."></textarea>
                        </div>
                        <div class="inputbottom">
                            <span class="strlenth" >{{keylength}}/300</span>
                            <span class="regiBtn" >등록</span>
                        </div>
                    </div>
                </div>

                <!-- type1 :: 공개여부 + input 박스  -->
                <div class="keyboard_input" style="display:none">
                    <div class="open_wrap">
                        <span class="opentxt">공개여부</span>
                        <slp-switch :classObject="{'fr': true}"/>
                    </div>
                    <div class="inputbox" >                        
                        <div class="textarea_wrap">
                            <textarea  @keydown="onKeydown" placeholder="답글을 입력하세요."></textarea>
                        </div>
                        <div class="inputbottom">
                            <span class="strlenth" >{{keylength}}/300</span>
                            <span class="regiBtn" >등록</span>
                        </div>
                    </div>
                </div>


                <!-- type2 :: 북마크 + 공개여부 + input 박스   -->
                <div class="keyboard_input" style="display:none">
                    <div class="bookmark_wrap">
                        <span class="bookmarktxt">북마크</span>
                        <span class="fr time">01:36</span>
                    </div>
                    <div class="open_wrap">
                        <span class="opentxt">공개여부</span>
                        <slp-switch :classObject="{'fr': true}"/>
                        <span class="opentxt2">비공개</span>
                    </div>
                    <div class="inputbox" >                        
                        <div class="textarea_wrap">
                            <textarea  @keydown="onKeydown" placeholder="답글을 입력하세요."></textarea>
                        </div>
                        <div class="inputbottom">
                            <span class="strlenth" >{{keylength}}/300</span>
                            <span class="regiBtn" >등록</span>
                        </div>
                    </div>
                </div>


                <!-- type3 :: 평점 + input 박스   -->
                <div class="keyboard_input" style="display:none">
                    
                    <div class="rating_wrap">
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
                            <span class="regiBtn" >등록</span>
                        </div>
                    </div>
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
export default {
  name: 'components_keyboard',
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
    }
  }
}
</script>
