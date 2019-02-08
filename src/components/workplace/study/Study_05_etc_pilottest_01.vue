<template>
  <div>
    <p class="txt-tit">
      <strong>상품정보</strong>
      <span class="fr btn-md">오류 유형표</span>
    </p>
    <div class="full-box pd">
      <table >
        <tr>
          <td class="l-txt fwb">상품명</td>
          <td class="r-txt pdb14">구글 벤처스의 5일만에 기획부터 수행까지 끝내는 법 (참고도서제공)</td>
        </tr>
        <tr>
          <td class="l-txt fwb">상품코드</td>
          <td class="r-txt pdb14">CE0681</td>
        </tr>
        <tr>
          <td class="l-txt fwb">접수기간</td>
          <td class="r-txt pdb14">2018.12.01 ~ 2018.12.31</td>
        </tr>
        <tr>
          <td class="l-txt fwb">접수자</td>
          <td class="r-txt">정해민</td>
        </tr>
      </table>
    </div>
    <div class="tabCnt dpb pt0 mt26" id="tab1"><!-- class "dpb"으로 컨텐츠 영역 노출 / 비노출 제어 -->
    <!-- list -->
        <ul class="multiList type2">
            <li>
              <p class="txt-tit">
                <strong>오류정보</strong>
              </p>
              <table>
                <tr>
                  <td class="l-txt-2 fwb">오류 LO/SO</td>
                  <td class="r-txt-2 ">(LO코드/SO코드) e-Test Leaders 실기 출제 경향 및 시험응시 방법</td>
                </tr>
              </table>
            </li>
            <li class="pdt16">
                <p class="label-tit14 mb8">오류 유형</p>
                <slp-select placeholder="동영상 속도 (끊김현상)" width="100%">
                    <option>동영상 속도 (끊김현상)</option>
                    <option>체크</option>
                </slp-select>
            </li>
            <li style="padding-top:20px;">
              <p class="label-tit14 mb8">오류 내용</p>
              <textarea class="gr-box" name="" cols="30" rows="5">[정해민 테스터] [2차시] (5분 26초~)‘전격에 의한 재해 - 방지대책’에 대하여 설명하던 중‘전격의 재해 주요 원인’으로 내용이 넘어갑니다.</textarea>
            </li>
        </ul>
        <p class="label-tit16 mt36 mb10" > 첨부파일 추가</p>
        <ul v-show="list1.length" class="ulList type4 bot-btn">
            <li v-for="(item, index) in list1" :key="index">
            <div>
                <span class="ico img-a"></span>
                <span class="at-tit">Solution listup.jpg</span>
                <div class="fr">
                <span class="at-num">500KB</span>
                <span class="ico deletemode_20_black" @click="deleteFileList(index)"></span>
                </div>
            </div>
            </li>
        </ul>
        <a href="#" class="btn sm add w100p" @click="addList1()" ><span class="ico plus"></span>파일 추가</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Study_05_etc_pilottest_01',
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
