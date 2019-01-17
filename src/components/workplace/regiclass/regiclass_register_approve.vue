<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery regiclass register ">

        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">
              
                <h1 class="h-tit">수강신청</h1>

                <div class="stepper">
                    <div class="clearfix">
                        <h2 class="tit">결재상신</h2>
                        <div class="num">
                            <strong class="color_clr2">4</strong>/<span>4</span>
                        </div>
                    </div>
                        <div class="progBox" style="height:4px !important;">
                        <div class="bar clr2" style="width:50%; height:4px;"></div>
                    </div>
                    <p class="txt-desc" style="display:none1;">결재정보를 선택해주세요.</p>
                </div>
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
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
                <p class="hr" style="margin-top:28px; margin-bottom:22px;"></p>
                <p class="label-tit-18">결재상신 입력</p>
                <ul class="ulList type1">
                    <li>
                        <strong class="label-tit mb8">제목</strong>
                        <slp-text-field placeholder="기본값 자동세팅, 수정가능" ></slp-text-field>
                    </li>   
                    <li class="mt20">
                        <strong class="label-tit mb8">의견</strong>
                        <slp-text-field placeholder="상신의견 입력" ></slp-text-field>
                    </li>              
                </ul>
                <p class="label-tit-14" style="margin-top:20px; margin-bottom:10px; width: 100%;">
                    <strong class="fwb">결재선</strong>
                    <span class="fr fwb color_clr2">편집</span>
                </p>
                <p class="line01" style="border-bottom:1px solid #999"></p>
                <ul class="ulList type2">                    
                    <li v-for="item in list1" :key="item.id" >
                        <p class="label-tit-15 dpb">홍길동</p>
                        <p class="label-tit-14 mono_65 mb0 dpb">전략기획팀 (gildong@multicampus.com)</p>
                        <span class="ico list-btn"></span>
                    </li>
                </ul>
                <a href="#" class="btn sm w100p add mt9"  @click="addList1()" ><span class="ico"></span>결재자 추가</a>
                <!-- //list -->                
            </div>
            <!-- //inner -->
          </div>
        </div>
        <!-- floating button -->
        <div class="fixBtmBtn">
            <ul>
                <li><button type="button" class="btn md">이전</button></li>
                <li><button type="button" class="btn md clr1">결재상신</button></li>
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
  name: 'regiclass_register_approve',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      list1: []
    }
  },
  /* vue function */
  methods: {
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
