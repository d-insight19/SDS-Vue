<template>
  <div>
    <p class="txt-tit">
      <strong>상품정보</strong>
      <span class="fr guide-btn">오류 유형표</span>
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
        <p class="txt-tit mb16">오류 결과 정보 (총 20건)</p>
        <ul class="multiList type2">
            <li v-for="item in resultList" :key="item.id" style="padding-bottom:36px;">
              <p class="label-tit14" style="margin-bottom:6px;">
                <strong >{{item.Num}}</strong>
              </p>
              <table class="result-table">
                <tr>
                  <td class="l-txt-2 fwb">목차명</td>
                  <td class="r-txt-2 ">{{item.listName}}</td>
                </tr>
                <tr>
                  <td class="l-txt-2 fwb">오류 LO/SO</td>
                  <td class="r-txt-2 ">{{item.error}}</td>
                </tr>
                <tr>
                  <td class="l-txt-2 fwb">오류유형</td>
                  <td class="r-txt-2 ">{{item.type}}</td>
                </tr>
                <tr>
                  <td class="l-txt-2 fwb">오류내용</td>
                  <td class="r-txt-2 ">{{item.sub}}</td>
                </tr>
                <tr>
                  <td class="l-txt-2 fwb">오류여부</td>
                  <td class="r-txt-2 ">{{item.check}}</td>
                </tr>
                <tr>
                  <td class="l-txt-2 fwb">테스터</td>
                  <td class="r-txt-2 ">{{item.name}}</td>
                </tr>
                <tr>
                  <td class="l-txt-2 fwb">오류등록일</td>
                  <td class="r-txt-2 ">{{item.date}}</td>
                </tr>
              </table>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resultList: [
        {Num: 'No. 19', listName: '목차명 입니다', error: '(LO코드/SO코드) e-Test Leaders 실기 출제 경향 및 시험응시 방법', type: '기능/메뉴', sub: 'BGM버튼 클릭 안됨', check: '오류', name: '김경수', date: '2018. 01. 01'},
        {Num: 'No. 20', listName: '목차명 입니다', error: '(LO코드/SO코드) e-Test Leaders 실기 출제 경향 및 시험응시 방법', type: '기능/메뉴', sub: 'BGM버튼 클릭 안됨', check: '오류', name: '김경수', date: '2018. 01. 01'}
      ]
    }
  }
}
</script>

<style>

</style>
