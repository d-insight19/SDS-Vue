<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass">


        <!-- header -->
        <div id="header" class="fixed clr1">
            <div class="header_inner line1">
                <p class="header_text font_14 mono_0 tac fwl">Title</p>
            </div>
        </div>
        <!-- //header -->
        <div id="content" class="normal">
        
        </div>

      </div>
      <!-- //container -->
      
      <!-- layer wrap -->
      <slp-popup title="사별 급여공제 동의" cancelInput="취소" confirmInput="확인"  @cancelClick="cancel" @confirmClick="confirm">
        <div class="ly-cnt">
            <p>회원정보에 등록된 이메일로 잠금을 
해제할 수 있는 링크를 발송합니다. 
메일 내 링크를 클릭해주시면 잠금이
해제됩니다. 회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이 해제됩니다. 회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이 해제됩니다.
회원정보에 등록된 이메일로 잠금을 
해제할 수 있는 링크를 발송합니다. 
메일 내 링크를 클릭해주시면 잠금이
해제됩니다. 회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이 해제됩니다. 회원정보에 등록된 이메일로 잠금을 해제할 수 있는 링크를 발송합니다. 메일 내 링크를 클릭해주시면 잠금이 해제됩니다.</p>
        </div>
        <slp-checkbox>확인하였으며 이에 동의합니다.</slp-checkbox>
      </slp-popup>
      <!-- //layer wrap -->
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
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
