<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass register">
        <div id="header" class="fixed">
            <button type="button" class="btn only close"><span class="ico"></span></button>
            <p class="header_text font_18">회원 검색</p>
          </div>
        <div id="content" class="normal">
          <div class="cell">
            <div class="inner">

                <ul v-show="searchFlag">
                    <li v-for="item in checkList" :key="item.id" class="chip-wrap"><span class="chip">{{item.name}}<span class="ico close_12" style="vertical-align:-1px; margin-left:2px;" @click="delChip"></span></span></li>
                </ul> 

                <strong class="label-tit-14 fwb mt14" style=" display:inline-block; margin-bottom:8px;">성명 검색</strong>
                
                <div class="intSchBox">
                    <div class="search-wrapper">
                        <input type="text" ref="input01"  @input="searchToggle($event)" pattern="^\s+" class="input" placeholder="성명 입력" />
                        <button class="close-icon" type="button"  @click="delTxt"></button>
                        <a href="#" class="btn"><span class="ico"></span></a>
                    </div>
                </div>
                
                <ul class="ulList type1" v-show="searchFlag">
                    <li v-for="item in Resdata" :key="item.id">
                        <label class="labelChk multi">
                            <input type="checkbox" class="chk" @click="checkList.push(item)">
                            <span class="ico">
                                <span class="innerCircle"></span>
                            </span>
                            <span class="label">{{item.name}}</span>
                            <p class="sub_label">{{item.email}}</p>
                        </label>
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
        {name: '홍길동', email: '전략기획팀 (gildong@multicampus.com)'},
        {name: '홍동이', email: '전략기획팀 (gildong@multicampus.com)'},
        {name: '길동이', email: '전략기획팀 (gildong@multicampus.com)'},
        {name: '이이이', email: '전략기획팀 (gildong@multicampus.com)'}
      ],
      checkList: []
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
    },
    delChip (index) {
      this.checkList.splice(index,1)
    }
    // addList1 (e) {
    //   let result = this.Resdata.concat();
    //   console.log(result)
    //   console.log(e.currentTarget)
    //   this.checkList.push(result)
    // }
  },
  computed: {
    searchRes (data) {
        if(searchRes === true) {
              
        }
    }
  }
}
</script>
