<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass basicinfo register">
        <div id="header" class="tab">
          <div class="header_inner"><button type="button" class="btn only close"><span class="ico">이전</span></button>
            <p class="header_text font_18" style="display:block; padding-left:70px;">회사 검색</p>
          </div> 
          <div class="header_inner line2 tabMenu">
            <ul class="fixTab">
              <li class="on"><a href="#">회사명</a></li>
              <li><a href="#">사업자 등록번호</a></li>
            </ul>
          </div>
        </div>       
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">
                <strong class="label-tit-14 fwb" style=" display:inline-block; margin-bottom:8px;">회사명 검색</strong>
                <div class="intSchBox">
                    <div class="search-wrapper">
                        <input type="text" ref="input01" @input="searchToggle($event)" pattern="^\s+" class="input" placeholder="회사명 입력" />
                        <button class="close-icon" type="button" @click="delTxt"></button>
                        <a href="#" class="btn"><span class="ico"></span></a>
                    </div>
                </div>
                <ul class="ulList type2" v-show="searchFlag">
                  <li v-for="data in Resdata" :key="data.id">
                    <p class="label-tit-15 cus">{{data.title}}</p>
                    <dl class="pipe-group">
                        <dd>사업자번호</dd>
                        <dd>{{data.num}}</dd>
                        <dd>홍길동</dd>
                    </dl>
                  </li>
                </ul>
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
  name: 'regiclass_register_contorl',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      headerType: 2,
      searchFlag: false,
      Resdata: [
        {title: '(주) 멀티캠퍼스', num: 12345677},
        {title: '(주) 멀티캠퍼스', num: 12345677},
        {title: '(주) 멀티캠퍼스', num: 12345677},
        {title: '(주) 멀티캠퍼스', num: 12345677}
      ]
    }
  },
  /* vue function */
  methods: {
    searchToggle (e) {
      if(e.target.value.length > 0 ) {
        this.searchFlag = !this.searchFlag
      } else {
        this.searchFlag = false
      }      
    },
    delTxt () {
        this.$refs.input01.value = ''
    }
    
  },
  computed: {
  }
}
</script>
