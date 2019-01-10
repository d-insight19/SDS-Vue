<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery Regiclass">

        <!-- header  + 확장형  헤더  ::: hide_header  클래스는 fixed 붙으면 hidden 처리 -->
        <div v-if="headerType == '1'" id="header" class="expand tab clr1">          
            <div class="header_inner line1">
                <p class="tac" style="color:white;">Title</p>
            </div>
        </div>

        <!-- //header -->
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
                
            </div>
          </div>

        </div>

        
      </div>
      <!-- //container -->  
      <!-- layer wrap -->
        <div class="layerWrap">
            <div class="ly-in">
                <div class="ly-hd">사별 급여공제 동의</div>
                <div class="ly-body">
                    <div class="ly-cnt">
                        <p>회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이해제됩니다. 회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이 해제됩니다. 회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이 해제됩니다.회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 송합니다. 메일 내 링크를 클릭해주시면 잠금이해제됩니다. 회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이 해제됩니다. 회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이 해제됩니다.</p>
                    </div>                    
                </div>
                <slp-checkbox style="margin-top:11px">확인하였으며 이에 동의합니다.</slp-checkbox>
                <div class="ly-btn">
                    <button type="button" class="btn">취소</button>
                    <button type="button" class="btn color_clr2">확인</button>
                </div>

            </div>
        </div>
        <!-- //layer wrap -->
        <div id="dim"></div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'regiclass_detailview_terms',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 1
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
