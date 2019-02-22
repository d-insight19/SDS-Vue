<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass pd70">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit">수강신청</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">수강형태 선택</h2>
                        <div class="num">
                            <strong class="color_clr2">1</strong>/<span>4</span>
                        </div>
                    </div>
                        <div class="progBox" style="height:4px !important;">
                        <div class="bar clr2" style="width:50%; height:4px;"></div>
                    </div>
                    <p class="txt-desc" style="display:none1;">수강형태를 선택하세요.</p>
                </div>
                <p class="hr_2" style="margin-top:28px; margin-bottom:22px;"></p>
                <p class="label-tit-18">신청강좌</p>
                <ul class="thumList">
                    <li class="bottom-bd-x pdb0">
                        <div class="in">
                            <a href="#" class="thum">                     
                                <div class="thumbnail">
                                    <img class="thumnail" src="@/assets/img/itemfactory_url_img.jpg" alt="">
                                </div>
                            </a>
                            <a href="#" class="tit">초보자를 위한 업무에 바로 쓰는 자바 스크립트 입문 과정</a>
                            <a href="#" class="date">18.12.01 ~ 19.05.31</a>
                            <ul class="info">
                                <li class="fwb info-num">2,235,000원 </li>
                                <li class="info-txt">(VAT포함)</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <p class="hr_2" style="margin-top:26px; margin-bottom:22px;"></p>
                <!-- list -->
                <ul class="ulList type1">                    
                    <li>
                        <strong class="label-tit-18" >수강형태</strong>
                        <div class="rdoSelBox mb20">
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo" checked><span class="ico"></span><span class="label">개인수강</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo"><span class="ico"></span><span class="label">회사지원</span></label>
                        </div>
                        <strong class="label-tit-18">대학생 프로모션 대상여부</strong>
                        <div class="rdoSelBox ">
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo2"  @click="active_el(1)" checked><span class="ico"></span><span class="label">대상</span></label>
                            <label class="labelRdo"><input type="radio" class="rdo" name="place-rdo2"  @click="active_el(2)"><span class="ico"></span><span class="label">비대상</span></label>
                        </div>                        
                    </li>
                    <li v-if="active" class="mt16">
                        <p class="label-tit-14 mb8" >학생증 등록</p>
                        <div v-show="list1.length" v-for="(item, index) in list1" :key="index">                            
                            <div class="img-box">
                                <img src="" alt="">
                                <span class="ico close_20"  @click="deleteFileList(index)"></span>
                            </div>
                        </div>
                        <a href="#" class="btn sm w100p add"  @click="addList1()" ><span class="ico"></span>사진추가</a>
                        <div>
                        <slp-checkbox  style="width:80%"><span class="label-tit-14 mono_80 mb0">개인정보 수집/활용에 동의합니다.</span></slp-checkbox><div style="width:20%; display:inline-block" class="tar"><span class="label-tit-14 mt20 color_clr2" style="vertical-align: -12%; ">약관보기</span></div>
                        </div>
                    </li>
                </ul>
                <!-- //list -->

            </div>
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn zin1">
            <ul>
                <li><button type="button" class="btn md">수강신청 취소</button></li>
                <li><button type="button" class="btn md clr1">다음</button></li>
            </ul>
        </div>
        <!-- //floating button -->
      </div>
      <!-- //container -->     
    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'regiclass_register_option_add',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      active: true,
      list1: []
    }
  },
  /* vue function */
  methods: {
    active_el (el) {
      if (el === 1) {
        this.active = true
      } else if (el === 2) {
        this.active = false
      }
    },
    addList1 () {
      this.list1.push('tmp 어학등급 아이템')
    },
    deleteFileList (index) {
      console.log(index, '제거')
      this.list1.splice(index, 1)
    }
  }
}
</script>
