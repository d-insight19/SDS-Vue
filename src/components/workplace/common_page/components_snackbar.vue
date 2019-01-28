
<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container">

            <!-- SnackBar Type1 : Text Label -->
            <div class="toast" style="display:none;">
                <div class="in">
                    <p>필수 항목에 동의해주세요.</p>
                </div>
            </div>

            <!-- SnackBar Type2 : Action Button  ( 버튼 1개일시 하나 삭제 ) -->
            <div class="toast" style="display:none;">
                <div class="in">
                    <p>해당 콘텐츠는 오프라인으로 학습이 이루어 집니다.</p>
                    <div class="toastBtnWrap">
                        <a href="#">실행취소</a>
                        <a href="#">전체보기</a>
                    </div>
                </div>
            </div>

            <!-- SnackBar Type3 : 다운로드 -->
            <div class="toast" style="display:none;">
                <div class="in">
                    <div class="download_wrap">
                        <span class="">다운로드 중</span>
                        <span class=""><span class="download_hilight">42%</span>(5개/총 12개)</span>
                    </div>                    
                    <div class="progBox">
                        <div class="bar clr2" style="width:20%;"></div>
                    </div>
                    <div class="toastBtnWrap">
                        <a href="#">전체보기</a>
                    </div>
                </div>
            </div>

            <!-- SnackBar Type4 : Title 본문 ActionBar -->
            <div class="toast" style="display:none;">
                <div class="in">
                    <div class="title_conents">
                        <p class="toast_title">진행중인 학습</p>
                        <p class="toast_contents">SPRINT - 구글 벤처스의 5일만에 기획부터 실행</p>
                    </div>  
                    <div class="toastBtnWrap">
                        <a href="#">이어학습</a>
                    </div>
                </div>
            </div>



            <!-- 통합 :::  각 유형에 맞게 show/ hide 해주면 됨 -->
            <div class="toast" style="display:none1;">
                <div class="in">
                    <p>해당 콘텐츠는 오프라인으로 학습이 이루어 집니다.</p>

                    <!-- type3 -->
                    <div class="download_wrap">
                        <span class="">다운로드 중</span>
                        <span class=""><span class="download_hilight">42%</span>(5개/총 12개)</span>
                    </div>                    
                    <div class="progBox">
                        <div class="bar clr2" style="width:20%;"></div>
                    </div>
                    <!--  type4 -->
                    <div class="title_conents">
                        <p class="toast_title">진행중인 학습</p>
                        <p class="toast_contents">SPRINT - 구글 벤처스의 5일만에 기획부터 실행</p>
                    </div>  

                    <!-- type 2,3,4 -->
                    <div class="toastBtnWrap">
                        <a href="#">이어학습</a>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_snackbar',
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
