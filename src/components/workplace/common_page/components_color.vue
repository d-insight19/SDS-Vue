<template>
<!-- eslint-disable -->
    <div id="wrap" class="colorCode2">
        <ul class="color_list">            
            <li>
                <h1>text-color</h1>
                <p class="color_clr1">color_clr1</p>
                <p class="color_clr2">color_clr2</p>
                <p class="color_clr3">color_clr3</p>
                <p class="color_clr4">color_clr4</p>
                <p class="color_clr5">color_clr5</p>
                <p class="color_clr6">color_clr6</p>
            </li>
            <li>
                <h1>bg-color</h1>
                <p class="clr1">clr1</p>
                <p class="clr2">clr2</p>
                <p class="clr3">clr3</p>
                <p class="clr4">clr4</p>
                <p class="clr5">clr5</p>
            </li>
            <li>
                <h1>mask-color</h1>
                <p class="mask_clr1">mask_clr1</p>
                <p class="mask_clr2">mask_clr2</p>
                <p class="mask_clr3">mask_clr3</p>
                <p class="mask_clr4">mask_clr4</p>
                <p class="mask_clr5">mask_clr5</p>
            </li>
            <li>
                <h1>static_colors</h1>
                <p class="danger">danger</p>
                <p class="primary">primary</p>
                <p class="star">star</p>
                <p class="alert">alert</p>
            </li>
            <li>
                <h1>contents_colors</h1>
                <p class="type_1">type_1</p>
                <p class="type_2">type_2</p>
                <p class="type_3">type_3</p>
                <p class="type_4">type_4</p>
                <p class="type_5">type_5</p>
            </li>
            <li class="sizeUp_box">
                <h1>mono_colors</h1>
                <p class="mono_0" style="background-color:black;">mono_0</p>
                <p class="mono_25">mono_25</p>
                <p class="mono_40">mono_40</p>
                <p class="mono_50">mono_50</p>
                <p class="mono_65">mono_65</p>
                <p class="mono_80">mono_80</p>
                <p class="mono_100">mono_100</p>
            </li>
            <li class="border_box">
                <h1>line_colors</h1>
                <p class="B92">B92 #EAEAEA</p>
                <p class="B89">B89 #E3E3E3</p>
                <p class="B85">B85 #D9D9D9</p>
                <p class="B80">B80 #CCCCCC</p>
                <p class="B60">B60 #999999</p>
                <p class="B10">B10 #1A1A1A</p>
                <p class="B95">B95 #F2F2F2</p>
            </li>
        </ul>

        <div class="attach">
                        
            // 고정컬러 
            // ( 기능단위로 표현하며 고정컬러로 제공하는 것들 )
            $static_colors: (<br/>
            danger:   #ff4141,  // 알림,에러,미진행 아이콘등 상태를 표현하는 컬러<br/>
            primary:  #007fff,  // 학습창의 정답, 찬성등 콘텐츠를 표현하는 컬러<br/>
            star:     #ff9c14,  // 별점 아이콘<br/>
            alert:    #e5f3ff   // 알림 : 새알림 영역 BG 상태를 표현하는 컬러<br/>
            );<br/>

            // Contents Color
            $contents_colors: (<br/>
            type_1: #ff726D,<br/>
            type_2: #00b6e8,<br/>
            type_3: #32667d,<br/>
            type_4: #ffba00,<br/>
            type_5: #00b3c4<br/>
            );<br/>


            // 모노 컬러 
            // ( 텍스트와 배경, 라인 등 컨텐츠 및 UI 전반에 활용되는 고정 컬러(모바일 기준)
            $mono_colors: (<br/>
            mono_100: #000000,<br/>
            mono_80: rgba(#000000, 0.8),<br/>
            mono_65: rgba(#000000, 0.65),<br/>
            mono_50: rgba(#000000, 0.5),<br/>
            mono_40: rgba(#000000, 0.4),<br/>
            mono_25: rgba(#000000, 0.25),<br/>
            mono_0: #ffffff
            );<br/>

            // 라인컬러 
            // ( 단독리스트일땐 B89 사용, 계층관계가있는 리스트일땐 B92/B85 세트로사용 , 콘텐츠 내 Index 아래 라인은 B60사용 )
            // Section을 구분할 때 8dp, B95사용
            $line_colors: (<br/>
            B92: #EAEAEA,<br/>
            B89: #E3E3E3,<br/>
            B85: #D9D9D9,<br/>
            B80: #CCCCCC,<br/>
            B60: #999999,<br/>
            B10: #1A1A1A,<br/>
            B95: #F2F2F2<br/>
            );
        </div>
    </div>

    

    
</template>

<script>
export default {

}
</script>

<style>

</style>
