<template>
 <!-- eslint-disable -->
  <!-- wrap -->
  <div id="wrap" class="mainType colorCode2">

    <!-- container -->
    <div id="container">
      <div class="content">
        <!-- 댓글 -->
        <p class="label-tit-02 mt26"><strong>댓글</strong></p>
        <ul class="reply_input bd_bt">
            <li class="bd">                   
                <input type="text" class="input reply" placeholder="댓글을 입력하세요." /><button>등록</button>
            </li>
        </ul>
        <ul>
            <li class="reply-list">
                <p class="reply-name">
                    <span>정*민 [작성자]</span>
                    <span class="fr ico more"></span>
                </p>
                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                <p><span class="reply-date">2018.09.14  21:34</span></p>
            </li>
              <li class="reply-list">
                <p class="reply-name">
                    <span>정*민 [작성자]</span>
                    <span class="fr ico more"></span>
                </p>
                <p class="reply-txt">저는 조금 힘들지라도 팀원들과 ‘함수형 자바스크립트’ 책을 짧고 굵게 스터디하고 본격적으로 사용하기 시작했습니다.</p>
                <p><span class="reply-date">2018.09.14  21:34</span></p>
            </li>
        </ul>
        <!-- 댓글 -->
      </div>
    </div>
    <!-- //container -->
  </div>
  <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_reply',
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
