<template>
<!-- eslint-disable-->
    <div>
        <p class="label-tit-18 mt19 ">데이터 특성 알아보기</p>

        <!-- list -->
        <ul class="studyList">
            <li>
                <div class="download_details">
                    <div class="edit_parents">
                        <div class="edit_child edit_child_frst">
                            <label for="id_save" class="labelChk">
                                <input id="id_save" type="checkbox" name="id_save" class="chk"> <span class="ico"></span>
                            </label>
                        </div>
                        <div class="edit_child edit_child_snd">
                            <div class="text_wrap position_relative">
                                <p class="icon_txt">3차시</p>
                                <p class="title text">차시명 타이틀 입니다. : 16 Medium 두 줄 이상일 경우 행간 22</p>
                                <ul class="info">
                                    <li>
                                        <span class="ico check_14 white"></span>
                                        <span class="text">학습완료</span>
                                        <span class="mono_65 text">1/4</span>
                                    </li>
                                    <li>
                                        <span class="ico time white"></span>
                                        <span class="text">12:45</span><span class="text">/</span><span class="mono_65 text">23:43</span>
                                    </li>
                                </ul>
                                <a href="#" class="icon accordion_arrow"></a>
                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <li :class="compClasses">
                <div class="download_details">
                    <div class="text_wrap position_relative">
                        <p class="icon_txt">4차시</p>
                        <p class="title text">차시명 타이틀 입니다. : 16 Medium 두 줄 이상일 경우 행간 22</p>
                        <ul class="info">
                            <li>
                                <span class="ico check_14 white"></span>
                                <span class="text">학습완료</span>
                                <span class="mono_65 text">1/4</span>
                            </li>
                            <li>
                                <span class="ico time white"></span>
                                <span class="text">12:45</span><span class="text">/</span><span class="mono_65 text">23:43</span>
                            </li>
                        </ul>
                        <a href="#" class="icon accordion_arrow"  @click="collapse"></a>
                    </div>
                    <div v-show="defaultFlag">
                        <div class="edit_parents">
                            <div class="edit_child edit_child_frst sub_content_title_col"></div>
                            <div class="edit_child edit_child_snd"><p class="sub_content_title border_clr1 color_clr1 clr4">11변수와 데이터 타입</p></div>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    <!-- list -->
                                    <ul class="sub_content color_clr1">
                                        <li>
                                            <div class="edit_parents">
                                                <div class="edit_child edit_child_frst">
                                                    <label for="id_save" class="labelChk">
                                                        <input id="id_save" type="checkbox" name="id_save" class="chk"> <span class="ico"></span>
                                                    </label>
                                                </div>
                                                <div class="edit_child edit_child_snd">
                                                    <div class="sub_download_details clr4 d_flex align_items_top">
                                                        <div class="icon_wrap">
                                                            <span class="ico play_28"></span>
                                                        </div>
                                                        <div class="txt_wrap border_clr1 flex_1">
                                                            <p class="title">4차시 1 LO/SO 타이틀 입니다 : 15 Medium 두 줄 이상일 경우 행간 22 동영상 VR/AR</p>
                                                            <ul class="info">
                                                                <li class="">
                                                                    <span class="ico check_14"></span>
                                                                    <span>학습완료</span>
                                                                </li>
                                                                <li class="">
                                                                    <span class="ico time"></span>
                                                                    <span class="mono_65">23:43</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="edit_parents">
                                                <div class="edit_child edit_child_frst">
                                                    <label for="id_save" class="labelChk">
                                                        <input id="id_save" type="checkbox" name="id_save" class="chk"> <span class="ico"></span>
                                                    </label>
                                                </div>
                                                <div class="edit_child edit_child_snd">
                                                    <div class="sub_download_details clr3 d_flex align_items_top">
                                                        <div class="icon_wrap">
                                                            <span class="ico play_28"></span>
                                                        </div>
                                                        <div class="txt_wrap border_clr1 flex_1">
                                                            <p class="title">5차시 2 LO/SO 타이틀 입니다 : 15 Medium 두 줄 이상일 경우 행간 22 동영상 VR/AR</p>
                                                            <ul class="info">
                                                                <li class="">
                                                                    <span class="ico ongoing_16"></span>
                                                                    <span>진행중</span>
                                                                </li>
                                                                <li class="">
                                                                    <span class="ico time"></span>
                                                                    <span class="mono_65">23:43</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="edit_parents">
                                                <div class="edit_child edit_child_frst">
                                                    <label for="id_save" class="labelChk">
                                                        <input id="id_save" type="checkbox" name="id_save" class="chk"> <span class="ico"></span>
                                                    </label>
                                                </div>
                                                <div class="edit_child edit_child_snd">
                                                    <div class="sub_download_details clr4 d_flex align_items_top">
                                                        <div class="icon_wrap">
                                                            <span class="ico ebook_20"></span>
                                                        </div>
                                                        <div class="txt_wrap border_clr1 flex_1">
                                                            <p class="title">6차시 3 LO/SO 타이틀 입니다 : 15 Medium 두 줄 이상일 경우 행간 22 E-book / HTML5</p>
                                                            <ul class="info">
                                                                <li class="">
                                                                    <span class="ico ongoing_16"></span>
                                                                    <span>진행중</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    </ul>
                                    <!-- //list -->

                                </div>
                            </li>
                        </ul>
                    </div>
                </div><!-- //download_details -->
            </li>
        </ul>
        <!-- //list -->
    </div>
</template>

<script>
/* eslint-disable */

// 1. jquery
import $ from 'jquery'
window.$ = $
window.jQuery = $


export default {
    name: 'studyList',

    data () {
        return {
            defaultFlag: true,
        }
    },

    methods: {
        collapse: function(){
            this.defaultFlag = !this.defaultFlag
        }
    },

    computed: {
        compClasses: function(){
            return{
                open: this.defaultFlag,
                type1: this.defaultFlag,
            }
        }
    }
}
</script>