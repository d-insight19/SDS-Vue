<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery join basicinfo pd70">

        <!-- header -->
        <div id="header">
        <button type="button" class="btn only prev"><span class="ico">이전</span></button>
        <p class="header_text font_19"></p>
        </div>
        <!-- //header -->

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">      
                
                <!-- 현재는  css로 되어있고,  질의사항으로 이미지가 아닌 css로 한다면 css만 조금 수정하면 됨 -->
                <!-- 위치값 및 패딩값이 고정이라면 absolute로 생각해도될듯 ( inner 밖으로 빼야함 ) -->
                <div id="spinner"></div>
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
  name: 'components_spinner',
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
