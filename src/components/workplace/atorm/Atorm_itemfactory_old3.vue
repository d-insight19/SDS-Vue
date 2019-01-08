<template>
    <div>
        <slp-text-field placeholder="검색어를 입력해 주세요" value="경제" icon="search" clearable></slp-text-field>
        <p class="itemListTotal">
            <span class="total">총</span>
            <span class="total_num">10<span class="total_txt">건</span></span>
            <span class="fr ico filter_24"></span>
        </p>
        <ul class="itemList type2">
            <li>
                <label class="labelRdo multi">
                    <input type="radio" class="rdo" name="test-rdo">
                    <span class="ico">
                        <span class="innerCircle"></span>
                    </span>
                    <span class="ico item_left ebook_20"></span>
                    <span class="label multiline line1">알뜰하게 쓸모있는 <span class="color_clr2">경제</span>학 강의</span>
                    <p class="sub_label">홍길동</p>
                </label>
            </li>
            <li>
                <label class="labelRdo multi">
                    <input type="radio" class="rdo" name="test-rdo">
                    <span class="ico">
                        <span class="innerCircle"></span>
                    </span>
                    <span class="ico item_left url_20"></span>
                    <span class="label  multiline line1"><span class="color_clr2">경제</span>학 용어 설명</span>
                    <p class="sub_label">홍길동</p>
                </label>
            </li>
            <li>
                <label class="labelRdo multi">
                    <input type="radio" class="rdo" name="test-rdo">
                    <span class="ico">
                        <span class="innerCircle"></span>
                    </span>
                    <span class="ico item_left play_20"></span>
                    <span class="label  multiline line1">장하준의 <span class="color_clr2">경제</span>학 우리가 <span class="color_clr2">경제</span>에 대하여 어떠한</span>
                    <p class="sub_label">홍길동</p>
                </label>
            </li>
            <li>
                <label class="labelRdo multi">
                    <input type="radio" class="rdo" name="test-rdo">
                    <span class="ico">
                        <span class="innerCircle"></span>
                    </span>
                    <span class="ico item_left ebook_20"></span>
                    <span class="label  multiline line1">엘론 머스크의 기초 <span class="color_clr2">경제</span>관</span>
                    <p class="sub_label">홍길동</p>
                </label>
            </li>
        </ul>
   </div>
</template>

<script>
export default {
  name: 'Atorm_itemfactory_old3',
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
