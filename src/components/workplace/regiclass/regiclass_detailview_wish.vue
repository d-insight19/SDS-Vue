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
        <div id="content" class="normal">
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
                <div class="ly-hd">희망과정 등록</div>
                <p>희망 학습기간을 선택해주세요. 선택하신 학습기간 15일 전에 수강신청 안내 메일을 받아보실 수 있습니다.</p>
                <div class="ly-body">
                    <div class="ly-cnt">
                        <ul class="ul-block com-rdo">
                            <li >
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[0]" checked>
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label" >2018.02.01 ~ 2018.02.28</span>                    
                                </label>
                            </li>
                            <li  >
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[1]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">2018.03.01 ~ 2018.03.31</span>                    
                                </label>
                            </li>
                            <li  >
                                <label class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[2]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">2018.04.01 ~ 2018.04.30</span>                    
                                </label>
                            </li>
                            <li >
                                <label  class="labelRdo" >
                                    <input type="radio" class="rdo" v-model="rdo" :value="rdos[3]">
                                    <span class="ico">
                                        <span class="ico chk-blue"></span>
                                    </span>
                                    <span class="label">2018.05.01 ~ 2018.05.31</span>                    
                                </label>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div class="ly-btn">
                    <button type="button" class="btn">취소</button>
                    <button type="button" class="btn color_clr2">등록</button>
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
      headerType: 1,
      rdo: undefined,
      rdos: [1, 2, 3, 4]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
