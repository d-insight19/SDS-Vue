// fdp 기본 route 정보
import Worksheet from '@/components/Worksheet'
import test from '~workplace/common_page/test'
import ComponentsButtons from '~workplace/common_page/components_buttons'
import ComponentsTextfield from '~workplace/common_page/components_textfield'
import ComponentsCheckbox from '~workplace/common_page/components_checkbox'
import ComponentsRadio from '~workplace/common_page/components_radio'
import ComponentsRadioButton from '~workplace/common_page/components_radiobutton'
import ComponentsSwitch from '~workplace/common_page/components_switch'
import ComponentsSelect from '~workplace/common_page/components_select'
import ComponentsListSingleLine from '~workplace/common_page/components_list_singleline'
import ComponentsListMultiLine from '~workplace/common_page/components_list_multiline'
import ComponentsThumblistVertical from '~workplace/common_page/components_thumblist_vertical'
import ComponentsThumblistHorizontal from '~workplace/common_page/components_thumblist_horizontal'
import ComponentsTab from '~workplace/common_page/components_tab'
import ComponentsProgressbar from '~workplace/common_page/components_progressbar'
import ComponentsStepper from '~workplace/common_page/components_stepper'
import ComponentsCard from '~workplace/common_page/components_card'
import ComponentsPopup from '~workplace/common_page/components_popup'
import ComponentsHeader from '~workplace/common_page/components_header'
import ComponentsMainheader from '~workplace/common_page/components_mainheader'
import ComponentsTabheader from '~workplace/common_page/components_tabheader'
import ComponentsLayoutType1 from '~workplace/common_page/components_layout_type1'
import ComponentsLayoutType2 from '~workplace/common_page/components_layout_type2'
import ComponentsLayoutType3 from '~workplace/common_page/components_layout_type3'
import ComponentsKeyboard from '~workplace/common_page/components_keyboard'
import ComponentsReply from '~workplace/common_page/components_reply'
import ComponentsBottomsheet from '~workplace/common_page/components_bottomsheet'

import LoginFindcenter from '~workplace/login/Login_findcenter'
import LoginFindcenterEmail from '~workplace/login/Login_findcenter_email'
import LoginFindcenterSelect from '~workplace/login/Login_findcenter_select'
import LoginFindcenterUrl from '~workplace/login/Login_findcenter_url'
import LoginLogin from '~workplace/login/Login_login'
import LoginLoginFail from '~workplace/login/Login_login_fail'
import LoginInterest from '~workplace/login/Login_interest'
import LoginJoinType from '~workplace/login/Login_jointype'
import LoginJoinCertify from '~workplace/login/Login_joincertify'
import LoginJoinTerms from '~workplace/login/Login_jointerms'
import LoginJoinTermsdetail from '~workplace/login/Login_jointermsdetail'
import LoginJoinId from '~workplace/login/Login_joinid'
import LoginJoinBasicInfo from '~workplace/login/Login_joinbasicinfo'
import LoginSearchPost from '~workplace/login/Login_searchpost'
import LoginSearchCompany from '~workplace/login/Login_searchcompany'
import LoginSearchCompanyResult from '~workplace/login/Login_searchcompanyresult'
import LoginJoinInterest from '~workplace/login/Login_joininterest'
import LoginJoinInExtrainfo from '~workplace/login/Login_joinextrainfo'
import LoginJoinComplete from '~workplace/login/Login_joincomplete'
import LoginLoginIntegration from '~workplace/login/Login_loginintegration'
import LoginLoginIntegrationId from '~workplace/login/Login_loginintegrationid'
import LoginLoginReIntegration from '~workplace/login/Login_loginreintegration'
import LoginLoginChangeId from '~workplace/login/Login_loginchangeid'
import LoginLoginChangeIdMain from '~workplace/login/Login_loginchangeidmain'
import LoginChangepw from '~workplace/login/Login_changepw'
import LoginLockid from '~workplace/login/Login_lockid'
import LoginDormant from '~workplace/login/Login_dormant'
import LoginFindid from '~workplace/login/Login_findid'
import LoginFindidBirth from '~workplace/login/Login_findidbirth'
import LoginFindidPhone from '~workplace/login/Login_findidphone'
import LoginFindidEmail from '~workplace/login/Login_findidemail'
import LoginFindidResult from '~workplace/login/Login_findidresult'
import LoginFindpw from '~workplace/login/Login_findpw'
import LoginFindpwPhone from '~workplace/login/Login_findpwphone'
import LoginFindpwEmail from '~workplace/login/Login_findpwemail'
import LoginCertifyPhone from '~workplace/login/Login_certifyphone'
import LoginCertifyIpin from '~workplace/login/Login_certifyipin'
import LoginCertifyEmail from '~workplace/login/Login_certifyemail'

import StudyDictionary from '~workplace/study/Study_dictionary'
import Studydictionarydetail from '~workplace/study/Study_dictionary_detail'
import Study02discussedit from '~workplace/study/Study_02_discuss_edit'
import Study02discussedit02 from '~workplace/study/Study_02_discuss_edit_02'
import Study02noticedetail from '~workplace/study/Study_02_notice_detail'
import Study02studyquestiondetail from '~workplace/study/Study_02_studyquestion_detail'
import Study02studyquestiondetail02 from '~workplace/study/Study_02_studyquestion_detail_02'
import Study02studyquestionedit from '~workplace/study/Study_02_studyquestion_edit'
import Study02reflectionnotedetail from '~workplace/study/Study_02_reflectionnote_detail'
import Study02reflectionnoteedit from '~workplace/study/Study_02_reflectionnote_edit'
import Study02reflectionnoteedit02 from '~workplace/study/Study_02_reflectionnote_edit_02'
import Study02studystatusassignment from '~workplace/study/Study_02_studystatus_assignment'
import Study02studystatusassignmentapply from '~workplace/study/Study_02_studystatus_assignment_apply'
import Study02studystatusassessmentnotice from '~workplace/study/Study_02_studystatus_assessment_notice'
import Study02faqdetail from '~workplace/study/Study_02_faq_detail'
import Study03LOviewerfs from '~workplace/study/Study_03_LO_viewer_fs'
import Study03LOdocsfs from '~workplace/study/Study_03_LO_docs_fs'
import Study04SOassinmentbestanswer from '~workplace/study/Study_04_SO_assinment_bestanswer'
import Study04SOquizsubmission from '~workplace/study/Study_04_SO_quiz_submission'
import Study04SOsurveysubmission from '~workplace/study/Study_04_SO_survey_submission'
import Study04SOsurveyintro from '~workplace/study/Study_04_SO_survey_intro'
import Study04SOsurveyscale from '~workplace/study/Study_04_SO_survey_scale'
import Study04SOsurveymultichoice from '~workplace/study/Study_04_SO_survey_multichoice'
import Study04SOsurveyanswer from '~workplace/study/Study_04_SO_survey_answer'
import Study04SOopinionintro from '~workplace/study/Study_04_SO_opinion_intro'
import Study04SOopinionsubmission from '~workplace/study/Study_04_SO_opinion_submission'
import Study04SOopinionsubmission02 from '~workplace/study/Study_04_SO_opinion_submission_02'
import Study04SOopinionsubmissionall from '~workplace/study/Study_04_SO_opinion_submission_all'
import Study04SOopinionwrittingguide from '~workplace/study/Study_04_SO_opinion_writtingguide'
import Study04SOopinionanswer from '~workplace/study/Study_04_SO_opinion_answer'
import Study04SOopinionchoose from '~workplace/study/Study_04_SO_opinion_choose'
import Study04SOopinionmultiopinon from '~workplace/study/Study_04_SO_opinion_multiopinon'
import Study04SOsimulation from '~workplace/study/Study_04_SO_simulation'
import Study04SOsimulationsubmission from '~workplace/study/Study_04_SO_simulation_submission'
import Study04SOactionplaninput from '~workplace/study/Study_04_SO_actionplan_input'
import Study04SOmainsummary from '~workplace/study/Study_04_SO_mainsummary'
import Study04SOquizintro from '~workplace/study/Study_04_SO_quiz_intro'
import Study04SOquizOX from '~workplace/study/Study_04_SO_quiz_OX'
import Study04SOquizOXresult from '~workplace/study/Study_04_SO_quiz_OX_result'
import Study04SOquizshortanswer from '~workplace/study/Study_04_SO_quiz_shortanswer'
import Study04SOquizshortanswerresult from '~workplace/study/Study_04_SO_quiz_shortanswer_result'
import Study04SOquizmultichoice from '~workplace/study/Study_04_SO_quiz_multichoice'
import Study04SOquizmultichoiceresult from '~workplace/study/Study_04_SO_quiz_multichoice_result'
import Study04SOpledge from '~workplace/study/Study_04_SO_pledge'
import Study04SOpledgesubmission from '~workplace/study/Study_04_SO_pledge_submission'
import Study04SOpollinput from '~workplace/study/Study_04_SO_poll_input'
import Study04SOpollsubmissionrod from '~workplace/study/Study_04_SO_poll_submission_rod'
import Study04SOmiddle from '~workplace/study/Study_04_SO_middle'
import Study04SOstudygoal from '~workplace/study/Study_04_SO_studygoal'
import Study04SOdebatesubmission from '~workplace/study/Study_04_SO_debate_submission'
import Study04SOdebatesubmissionall from '~workplace/study/Study_04_SO_debate_submission_all'

import MainControl from '~workplace/main/Main_control'
import MainCurateUI01 from '~workplace/main/Main_curateUI01'
import MainCurateUI02 from '~workplace/main/Main_curateUI02'
import MainCurateUI03 from '~workplace/main/Main_curateUI03'
import MainCurateUI04 from '~workplace/main/Main_curateUI04'
import MainBanner from '~workplace/main/Main_banner'
import MainBoard from '~workplace/main/Main_board'
import MainBoardEmpty from '~workplace/main/Main_board_empty'
import MainHistorylist from '~workplace/main/Main_historylist'
import MainEnrollNotice from '~workplace/main/Main_enrollNotice'
import MainScrap from '~workplace/main/Main_scrap'
import MainScrapEmpty from '~workplace/main/Main_scrap_empty'
import MainGraphClassList from '~workplace/main/Main_graphClassList'
import MainGraphClassListMore from '~workplace/main/Main_graphClassList_more'
import MainGradeStatus from '~workplace/main/Main_gradeStatus'
import MainGradeStatusDetail from '~workplace/main/Main_gradeStatusDetail'
import MainStatistics1 from '~workplace/main/Main_statistics_1'
import MainStatistics2 from '~workplace/main/Main_statistics_2'
import MainStatistics3 from '~workplace/main/Main_statistics_3'
import MainStatistics4 from '~workplace/main/Main_statistics_4'
import MainBrowseMain from '~workplace/main/Main_browse_main'
import MainBrowseListDetail01 from '~workplace/main/Main_browse_listDetail01'
import MainBrowseListDetail02 from '~workplace/main/Main_browse_listDetail02'
import MainSubscribed from '~workplace/main/Main_subscribed'
import MainSubscribedEmpty from '~workplace/main/Main_subscribed_empty'
import MainChannelListNull from '~workplace/main/Main_channel_list_null'
import MainChannelList from '~workplace/main/Main_channel_list'
import MainChannelDetailBefore from '~workplace/main/Main_channel_detail_before'
import MainChannelDetailAfter from '~workplace/main/Main_channel_detail_after'
import MainKeywordList from '~workplace/main/Main_keyword_list'
import MainArticleDetail from '~workplace/main/Main_article_detail'
import MainArticleDetailLike from '~workplace/main/Main_article_detail_like'
import MainWriterChannel from '~workplace/main/Main_writer_channel'
import MainWriterArticle from '~workplace/main/Main_writer_article'
import MainWriterHistory from '~workplace/main/Main_writer_history'
import MainWriterScroll from '~workplace/main/Main_writer_scroll'
import MainLearningMain from '~workplace/main/Main_learning_main'

import DrawerAlerm from '~workplace/drawer/Drawer_alerm'
import DrawerMyinfo from '~workplace/drawer/Drawer_myinfo'
import Drawermyinfologout from '~workplace/drawer/Drawer_myinfo_logout'
import Drawermyinfochoosepic from '~workplace/drawer/Drawer_myinfo_choosepic'
import Drawermyinfobasicinfo from '~workplace/drawer/Drawer_myinfo_basicinfo'
import Drawermyinfobasicinfoedit from '~workplace/drawer/Drawer_myinfo_basicinfo_edit'
import Drawer06myinfoaccountpassword from '~workplace/drawer/Drawer_06_myinfo_account_password'
import Drawer08myinfoaccountpassword from '~workplace/drawer/Drawer_08_myinfo_account_password'
import Drawersettings from '~workplace/drawer/Drawer_settings'
import B2CDrawermyinfo from '~workplace/drawer/B2C_Drawer_myinfo'
import B2CDrawermyinfoaccount from '~workplace/drawer/B2C_Drawer_myinfo_account'
import B2CDrawermyinfotracking from '~workplace/drawer/B2C_Drawer_myinfo_tracking'
import B2CDrawermyinfotrackingdelete from '~workplace/drawer/B2C_Drawer_myinfo_tracking_delete'
import B2CDrawermyinfotrackingedit from '~workplace/drawer/B2C_Drawer_myinfo_tracking_edit'
import B2CDrawermyinfoaccountpassword from '~workplace/drawer/B2C_Drawer_myinfo_account_password'
import B2CDrawerSettings from '~workplace/drawer/B2C_drawer_settings'
import Drawersettingspush from '~workplace/drawer/Drawer_settings_push'
import Drawersettingsopensource from '~workplace/drawer/Drawer_settings_opensource'
import Drawermyinfoextrainfo from '~workplace/drawer/Drawer_myinfo_extrainfo'
import Drawermyinfoextrainfoedit from '~workplace/drawer/Drawer_myinfo_extrainfo_edit'
import B2CDrawermyinfoaccountwithdrawal01 from '~workplace/drawer/B2C_Drawer_myinfo_account_withdrawal01'
import B2CDrawermyinfoaccountwithdrawal02 from '~workplace/drawer/B2C_Drawer_myinfo_account_withdrawal02'
import B2CDrawermyinfoaccountwithdrawal03 from '~workplace/drawer/B2C_Drawer_myinfo_account_withdrawal03'
import B2CDrawerEvent from '~workplace/drawer/B2C_Drawer_Event'
import B2CDrawerEventWinner from '~workplace/drawer/B2C_Drawer_Event_Winner'
import B2CDrawerEventdetail from '~workplace/drawer/B2C_Drawer_Event_detail'
import B2CDrawerEventWinnerdetail from '~workplace/drawer/B2C_Drawer_Event_Winner_detail'
import B2CDrawerMultiintroduce from '~workplace/drawer/B2C_Drawer_Multiintroduce'
import Drawermyinfoaccount from '~workplace/drawer/Drawer_myinfo_account'
import B2CDrawermyinfologout from '~workplace/drawer/B2C_Drawer_myinfo_logout'
import B2CDrawermyinfobasicinfo from '~workplace/drawer/B2C_Drawer_myinfo_basicinfo'
import B2CDrawermyinfobasicinfoedit from '~workplace/drawer/B2C_Drawer_myinfo_basicinfo_edit'
import B2CDrawermyinfochoosepic from '~workplace/drawer/B2C_Drawer_myinfo_choosepic'
import B2CDrawermyinfoextrainfo from '~workplace/drawer/B2C_Drawer_myinfo_extrainfo'
import B2CDrawermyinfoextrainfoedit from '~workplace/drawer/B2C_Drawer_myinfo_extrainfo_edit'
import B2CDrawersettingsopensource from '~workplace/drawer/B2C_Drawer_settings_opensource'
import Drawersettings01 from '~workplace/drawer/Drawer_settings01'
import Drawersettings02 from '~workplace/drawer/Drawer_settings02'
import B2CDrawersettingspush from '~workplace/drawer/B2C_Drawer_settings_push'

import CustomerCenterNotice from '~workplace/customercenter/CustomerCenter_Notice'
import CustomerCenterNoticedetail from '~workplace/customercenter/CustomerCenter_Notice_detail'
import CustomerCenterlibrary from '~workplace/customercenter/CustomerCenter_library'
import CustomerCenterlibrarydetail from '~workplace/customercenter/CustomerCenter_library_detail'
import CustomerCenterlibrarydetaillike from '~workplace/customercenter/CustomerCenter_library_detail_like'
import CustomerCenterFAQtotal from '~workplace/customercenter/CustomerCenter_FAQ_total'
import CustomerCenterFAQ from '~workplace/customercenter/CustomerCenter_FAQ'
import CustomerCenterStudyguide from '~workplace/customercenter/CustomerCenter_Studyguide'
import CustomerCenterStudyguidedetail from '~workplace/customercenter/CustomerCenter_Studyguide_detail'
import CustomerCenterFAQdetail from '~workplace/customercenter/CustomerCenter_FAQ_detail'
import CustomerCenterInquiry from '~workplace/customercenter/CustomerCenter_Inquiry'
import CustomerCenterInquirynone from '~workplace/customercenter/CustomerCenter_Inquiry_none'
import CustomerCenterInquirywrite01 from '~workplace/customercenter/CustomerCenter_Inquiry_write01'
import CustomerCenterInquirywrite01inputon from '~workplace/customercenter/CustomerCenter_Inquiry_write01_inputon'
import CustomerCenterInquirywrite01error from '~workplace/customercenter/CustomerCenter_Inquiry_write01_error'
import CustomerCenterRequest from '~workplace/customercenter/CustomerCenter_Request'
import CustomerCenterRequestpopup1 from '~workplace/customercenter/CustomerCenter_Request_popup1'
import CustomerCenterRequestpopup2 from '~workplace/customercenter/CustomerCenter_Request_popup2'
import CustomerCenterRequesttoast01 from '~workplace/customercenter/CustomerCenter_Request_toast01'
import CustomerCenterRequestresultlist from '~workplace/customercenter/CustomerCenter_Request_resultlist'
import CustomerCenterPrivacyPolicy from '~workplace/customercenter/CustomerCenter_PrivacyPolicy'
import CustomerCenterInquirydetail from '~workplace/customercenter/CustomerCenter_Inquiry_detail'
import CustomerCenterStudysupport from '~workplace/customercenter/CustomerCenter_Studysupport'
import CustomerCenterStudysupportdetail from '~workplace/customercenter/CustomerCenter_Studysupport_detail'
import CustomerCenterRequestresult from '~workplace/customercenter/CustomerCenter_Request_result'

// 1번 영역
var rootRoutes = [
  {
    path: '*',
    name: 'worksheet',
    component: Worksheet
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/components_buttons',
    name: 'components_buttons',
    component: ComponentsButtons
  },
  {
    path: '/components_textfield',
    name: 'components_textfield',
    component: ComponentsTextfield
  },
  {
    path: '/components_checkbox',
    name: 'components_checkbox',
    component: ComponentsCheckbox
  },
  {
    path: '/components_radio',
    name: 'components_radio',
    component: ComponentsRadio
  },
  {
    path: '/components_radiobutton',
    name: 'components_radiobutton',
    component: ComponentsRadioButton
  },
  {
    path: '/components_switch',
    name: 'components_switch',
    component: ComponentsSwitch
  },
  {
    path: '/components_select',
    name: 'components_select',
    component: ComponentsSelect
  },
  {
    path: '/components_list_singleline',
    name: 'components_list_singleline',
    component: ComponentsListSingleLine
  },
  {
    path: '/components_list_multiline',
    name: 'components_list_multiline',
    component: ComponentsListMultiLine
  },
  {
    path: '/components_thumblist_vertical',
    name: 'components_thumblist_vertical',
    component: ComponentsThumblistVertical
  },
  {
    path: '/components_thumblist_horizontal',
    name: 'components_thumblist_horizontal',
    component: ComponentsThumblistHorizontal
  },
  {
    path: '/components_tab',
    name: 'components_tab',
    component: ComponentsTab
  },
  {
    path: '/components_progressbar',
    name: 'components_progressbar',
    component: ComponentsProgressbar
  },
  {
    path: '/components_stepper',
    name: 'components_stepper',
    component: ComponentsStepper
  },
  {
    path: '/components_card',
    name: 'components_card',
    component: ComponentsCard
  },
  {
    path: '/components_popup',
    name: 'components_popup',
    component: ComponentsPopup
  },
  {
    path: '/components_header',
    name: 'components_header',
    component: ComponentsHeader
  },
  {
    path: '/components_mainheader',
    name: 'components_mainheader',
    component: ComponentsMainheader
  },
  {
    path: '/components_tabheader',
    name: 'components_tabheader',
    component: ComponentsTabheader
  },
  {
    path: '/components_layout_type1',
    name: 'components_layout_type1',
    component: ComponentsLayoutType1
  },
  {
    path: '/components_layout_type2',
    name: 'components_layout_type2',
    component: ComponentsLayoutType2
  },
  {
    path: '/components_layout_type3',
    name: 'components_layout_type3',
    component: ComponentsLayoutType3
  },
  {
    path: '/components_keyboard',
    name: 'components_keyboard',
    component: ComponentsKeyboard
  },
  {
    path: '/components_reply',
    name: 'components_reply',
    component: ComponentsReply
  },
  {
    path: '/components_bottomsheet',
    name: 'components_bottomsheet',
    component: ComponentsBottomsheet
  },
  {
    path: '/Login_findcenter',
    name: 'Login_findcenter',
    component: LoginFindcenter
  },
  {
    path: '/Login_findcenter_email',
    name: 'Login_findcenter_email',
    component: LoginFindcenterEmail
  },
  {
    path: '/Login_findcenter_select',
    name: 'Login_findcenter_select',
    component: LoginFindcenterSelect
  },
  {
    path: '/Login_findcenter_url',
    name: 'Login_findcenter_url',
    component: LoginFindcenterUrl
  },
  {
    path: '/Login_login',
    name: 'Login_login',
    component: LoginLogin
  },
  {
    path: '/Login_login_fail',
    name: 'Login_login_fail',
    component: LoginLoginFail
  },
  {
    path: '/Login_interest',
    name: 'Login_interest',
    component: LoginInterest
  },
  {
    path: '/Login_joinextrainfo',
    name: 'Login_joinextrainfo',
    component: LoginJoinInExtrainfo
  },
  {
    path: '/Login_joincomplete',
    name: 'Login_joincomplete',
    component: LoginJoinComplete
  },
  {
    path: '/Login_loginintegration',
    name: 'Login_loginintegration',
    component: LoginLoginIntegration
  },
  {
    path: '/Login_loginintegrationid',
    name: 'Login_loginintegrationid',
    component: LoginLoginIntegrationId
  },
  {
    path: '/Login_loginreintegration',
    name: 'Login_loginreintegration',
    component: LoginLoginReIntegration
  },
  {
    path: '/Login_loginchangeid',
    name: 'Login_loginchangeid',
    component: LoginLoginChangeId
  },
  {
    path: '/Login_loginchangeidmain',
    name: 'Login_loginchangeidmain',
    component: LoginLoginChangeIdMain
  },
  {
    path: '/Login_jointype',
    name: 'Login_jointype',
    component: LoginJoinType
  },
  {
    path: '/Login_joincertify',
    name: 'Login_joincertify',
    component: LoginJoinCertify
  },
  {
    path: '/Login_jointerms',
    name: 'Login_jointerms',
    component: LoginJoinTerms
  },
  {
    path: '/Login_jointermsdetail',
    name: 'Login_jointermsdetail',
    component: LoginJoinTermsdetail
  },
  {
    path: '/Login_joinid',
    name: 'Login_joinid',
    component: LoginJoinId
  },
  {
    path: '/Login_joinbasicinfo',
    name: 'Login_joinbasicinfo',
    component: LoginJoinBasicInfo
  },
  {
    path: '/Login_searchpost',
    name: 'Login_searchpost',
    component: LoginSearchPost
  },
  {
    path: '/Login_searchcompany',
    name: 'Login_searchcompany',
    component: LoginSearchCompany
  },
  {
    path: '/Login_searchcompanyresult',
    name: 'Login_searchcompanyresult',
    component: LoginSearchCompanyResult
  },
  {
    path: '/Login_joininterest',
    name: 'Login_joininterest',
    component: LoginJoinInterest
  },
  {
    path: '/Login_changepw',
    name: 'Login_changepw',
    component: LoginChangepw
  },
  {
    path: '/Login_lockid',
    name: 'Login_lockid',
    component: LoginLockid
  },
  {
    path: '/Login_dormant',
    name: 'Login_dormant',
    component: LoginDormant
  },
  {
    path: '/Login_findid',
    name: 'Login_findid',
    component: LoginFindid
  },
  {
    path: '/Login_findidbirth',
    name: 'Login_findidbirth',
    component: LoginFindidBirth
  },
  {
    path: '/Login_findidphone',
    name: 'Login_findidphone',
    component: LoginFindidPhone
  },
  {
    path: '/Login_findidemail',
    name: 'Login_findidemail',
    component: LoginFindidEmail
  },
  {
    path: '/Login_findidresult',
    name: 'Login_findidresult',
    component: LoginFindidResult
  },
  {
    path: '/Login_findpw',
    name: 'Login_findpw',
    component: LoginFindpw
  },
  {
    path: '/Login_findpwphone',
    name: 'Login_findpwphone',
    component: LoginFindpwPhone
  },
  {
    path: '/Login_findpwemail',
    name: 'Login_findpwemail',
    component: LoginFindpwEmail
  },
  {
    path: '/Login_certifyphone',
    name: 'Login_certifyphone',
    component: LoginCertifyPhone
  },
  {
    path: '/Login_certifyipin',
    name: 'Login_certifyipin',
    component: LoginCertifyIpin
  },
  {
    path: '/Login_certifyemail',
    name: 'Login_certifyemail',
    component: LoginCertifyEmail
  },
  {
    path: '/Study_dictionary',
    name: 'Study_dictionary',
    component: StudyDictionary
  },
  {
    path: '/Study_dictionary_detail',
    name: 'Study_dictionary_detail',
    component: Studydictionarydetail
  },
  {
    path: '/Study_02_discuss_edit',
    name: 'Study_02_discuss_edit',
    component: Study02discussedit
  },
  {
    path: '/Study_02_discuss_edit_02',
    name: 'Study_02_discuss_edit_02',
    component: Study02discussedit02
  },
  {
    path: '/Study_02_studyquestion_detail',
    name: 'Study_02_studyquestion_detail',
    component: Study02studyquestiondetail
  },
  {
    path: '/Study_02_studyquestion_detail_02',
    name: 'Study_02_studyquestion_detail_02',
    component: Study02studyquestiondetail02
  },
  {
    path: '/Study_02_studyquestion_edit',
    name: 'Study_02_studyquestion_edit',
    component: Study02studyquestionedit
  },
  {
    path: '/Study_02_reflectionnote_detail',
    name: 'Study_02_reflectionnote_detail',
    component: Study02reflectionnotedetail
  },
  {
    path: '/Study_02_reflectionnote_edit',
    name: 'Study_02_reflectionnote_edit',
    component: Study02reflectionnoteedit
  },
  {
    path: '/Study_02_reflectionnote_edit_02',
    name: 'Study_02_reflectionnote_edit_02',
    component: Study02reflectionnoteedit02
  },
  {
    path: '/Study_02_notice_detail',
    name: 'Study_02_notice_detail',
    component: Study02noticedetail
  },
  {
    path: '/Study_02_studystatus_assignment',
    name: 'Study_02_studystatus_assignment',
    component: Study02studystatusassignment
  },
  {
    path: '/Study_02_studystatus_assignment_apply',
    name: 'Study_02_studystatus_assignment_apply',
    component: Study02studystatusassignmentapply
  },
  {
    path: '/Study_02_studystatus_assessment_notice',
    name: 'Study_02_studystatus_assessment_notice',
    component: Study02studystatusassessmentnotice
  },
  {
    path: '/Study_02_faq_detail',
    name: 'Study_02_faq_detail',
    component: Study02faqdetail
  },
  {
    path: '/Study_03_LO_viewer_fs',
    name: 'Study_03_LO_viewer_fs',
    component: Study03LOviewerfs
  },
  {
    path: '/Study_03_LO_docs_fs',
    name: 'Study_03_LO_docs_fs',
    component: Study03LOdocsfs
  },
  {
    path: '/Study_04_SO_simulation',
    name: 'Study_04_SO_simulation',
    component: Study04SOsimulation
  },
  {
    path: '/Study_04_SO_simulation_submission',
    name: 'Study_04_SO_simulation_submission',
    component: Study04SOsimulationsubmission
  },
  {
    path: '/Study_04_SO_assinment_bestanswer',
    name: 'Study_04_SO_assinment_bestanswer',
    component: Study04SOassinmentbestanswer
  },
  {
    path: '/Study_04_SO_actionplan_input',
    name: 'Study_04_SO_actionplan_input',
    component: Study04SOactionplaninput
  },
  {
    path: '/Study_04_SO_quiz_submission',
    name: 'Study_04_SO_quiz_submission',
    component: Study04SOquizsubmission
  },
  {
    path: '/Study_04_SO_survey_submission',
    name: 'Study_04_SO_survey_submission',
    component: Study04SOsurveysubmission
  },
  {
    path: '/Study_04_SO_survey_intro',
    name: 'Study_04_SO_survey_intro',
    component: Study04SOsurveyintro
  },
  {
    path: '/Study_04_SO_survey_scale',
    name: 'Study_04_SO_survey_scale',
    component: Study04SOsurveyscale
  },
  {
    path: '/Study_04_SO_survey_multichoice',
    name: 'Study_04_SO_survey_multichoice',
    component: Study04SOsurveymultichoice
  },
  {
    path: '/Study_04_SO_survey_answer',
    name: 'Study_04_SO_survey_answer',
    component: Study04SOsurveyanswer
  },
  {
    path: '/Study_04_SO_opinion_intro',
    name: 'Study_04_SO_opinion_intro',
    component: Study04SOopinionintro
  },
  {
    path: '/Study_04_SO_opinion_submission',
    name: 'Study_04_SO_opinion_submission',
    component: Study04SOopinionsubmission
  },
  {
    path: '/Study_04_SO_opinion_submission_02',
    name: 'Study_04_SO_opinion_submission_02',
    component: Study04SOopinionsubmission02
  },
  {
    path: '/Study_04_SO_opinion_submission_all',
    name: 'Study_04_SO_opinion_submission_all',
    component: Study04SOopinionsubmissionall
  },
  {
    path: '/Study_04_SO_opinion_writtingguide',
    name: 'Study_04_SO_opinion_writtingguide',
    component: Study04SOopinionwrittingguide
  },
  {
    path: '/Study_04_SO_opinion_answer',
    name: 'Study_04_SO_opinion_answer',
    component: Study04SOopinionanswer
  },
  {
    path: '/Study_04_SO_opinion_choose',
    name: 'Study_04_SO_opinion_choose',
    component: Study04SOopinionchoose
  },
  {
    path: '/Study_04_SO_opinion_multiopinon',
    name: 'Study_04_SO_opinion_multiopinon',
    component: Study04SOopinionmultiopinon
  },
  {
    path: '/Study_04_SO_mainsummary',
    name: 'Study_04_SO_mainsummary',
    component: Study04SOmainsummary
  },
  {
    path: '/Study_04_SO_quiz_intro',
    name: 'Study_04_SO_quiz_intro',
    component: Study04SOquizintro
  },
  {
    path: '/Study_04_SO_quiz_OX',
    name: 'Study_04_SO_quiz_OX',
    component: Study04SOquizOX
  },
  {
    path: '/Study_04_SO_quiz_OX_result',
    name: 'Study_04_SO_quiz_OX_result',
    component: Study04SOquizOXresult
  },
  {
    path: '/Study_04_SO_quiz_shortanswer',
    name: 'Study_04_SO_quiz_shortanswer',
    component: Study04SOquizshortanswer
  },
  {
    path: '/Study_04_SO_quiz_multichoice',
    name: 'Study_04_SO_quiz_multichoice',
    component: Study04SOquizmultichoice
  },
  {
    path: '/Study_04_SO_quiz_multichoice_result',
    name: 'Study_04_SO_quiz_multichoice_result',
    component: Study04SOquizmultichoiceresult
  },
  {
    path: '/Study_04_SO_pledge',
    name: 'Study_04_SO_pledge',
    component: Study04SOpledge
  },
  {
    path: '/Study_04_SO_pledge_submission',
    name: 'Study_04_SO_pledge_submission',
    component: Study04SOpledgesubmission
  },
  {
    path: '/Study_04_SO_quiz_shortanswer_result',
    name: 'Study_04_SO_quiz_shortanswer_result',
    component: Study04SOquizshortanswerresult
  },
  {
    path: '/Study_04_SO_poll_input',
    name: 'Study_04_SO_poll_input',
    component: Study04SOpollinput
  },
  {
    path: '/Study_04_SO_poll_submission_rod',
    name: 'Study_04_SO_poll_submission_rod',
    component: Study04SOpollsubmissionrod
  },
  {
    path: '/Study_04_SO_middle',
    name: 'Study_04_SO_middle',
    component: Study04SOmiddle
  },
  {
    path: '/Study_04_SO_studygoal',
    name: 'Study_04_SO_studygoal',
    component: Study04SOstudygoal
  },
  {
    path: '/Study_04_SO_debate_submission',
    name: 'Study_04_SO_debate_submission',
    component: Study04SOdebatesubmission
  },
  {
    path: '/Study_04_SO_debate_submission_all',
    name: 'Study_04_SO_debate_submission_all',
    component: Study04SOdebatesubmissionall
  },
  {
    path: '/Main_control',
    name: 'Main_control',
    component: MainControl
  },
  {
    path: '/Main_curateUI01',
    name: 'Main_curateUI01',
    component: MainCurateUI01
  },
  {
    path: '/Main_curateUI02',
    name: 'Main_curateUI02',
    component: MainCurateUI02
  },
  {
    path: '/Main_curateUI03',
    name: 'Main_curateUI03',
    component: MainCurateUI03
  },
  {
    path: '/Main_curateUI04',
    name: 'Main_curateUI04',
    component: MainCurateUI04
  },
  {
    path: '/Main_banner',
    name: 'Main_banner',
    component: MainBanner
  },
  {
    path: '/Main_board',
    name: 'Main_board',
    component: MainBoard
  },
  {
    path: '/Main_board_empty',
    name: 'Main_board_empty',
    component: MainBoardEmpty
  },
  {
    path: '/Main_historylist',
    name: 'Main_historylist',
    component: MainHistorylist
  },
  {
    path: '/Main_enrollNotice',
    name: 'Main_enrollNotice',
    component: MainEnrollNotice
  },
  {
    path: '/Main_scrap',
    name: 'Main_scrap',
    component: MainScrap
  },
  {
    path: '/Main_scrap_empty',
    name: 'Main_scrap_empty',
    component: MainScrapEmpty
  },
  {
    path: '/Main_graphClassList',
    name: 'Main_graphClassList',
    component: MainGraphClassList
  },
  {
    path: '/Main_graphClassList_more',
    name: 'Main_graphClassList_more',
    component: MainGraphClassListMore
  }, {
    path: '/Main_gradeStatus',
    name: 'Main_gradeStatus',
    component: MainGradeStatus
  },
  {
    path: '/Main_gradeStatusDetail',
    name: 'Main_gradeStatusDetail',
    component: MainGradeStatusDetail
  },
  {
    path: '/Main_statistics_1',
    name: 'Main_statistics_1',
    component: MainStatistics1
  },
  {
    path: '/Main_statistics_2',
    name: 'Main_statistics_2',
    component: MainStatistics2
  },
  {
    path: '/Main_statistics_3',
    name: 'Main_statistics_3',
    component: MainStatistics3
  },
  {
    path: '/Main_statistics_4',
    name: 'Main_statistics_4',
    component: MainStatistics4
  },
  {
    path: '/Main_browse_main',
    name: 'Main_browse_main',
    component: MainBrowseMain
  },
  {
    path: '/Main_browse_listDetail01',
    name: 'Main_browse_listDetail01',
    component: MainBrowseListDetail01
  },
  {
    path: '/Main_browse_listDetail02',
    name: 'Main_browse_listDetail02',
    component: MainBrowseListDetail02
  },
  {
    path: '/Main_subscribed',
    name: 'Main_subscribed',
    component: MainSubscribed
  },
  {
    path: '/Main_subscribed_empty',
    name: 'Main_subscribed_empty',
    component: MainSubscribedEmpty
  },
  {
    path: '/Main_channel_list_null',
    name: 'Main_channel_list_null',
    component: MainChannelListNull
  },
  {
    path: '/Main_channel_list',
    name: 'Main_channel_list',
    component: MainChannelList
  },
  {
    path: '/Main_channel_detail_before',
    name: 'Main_channel_detail_before',
    component: MainChannelDetailBefore
  },
  {
    path: '/Main_channel_detail_after',
    name: 'Main_channel_detail_after',
    component: MainChannelDetailAfter
  },
  {
    path: '/Main_keyword_list',
    name: 'Main_keyword_list',
    component: MainKeywordList
  },
  {
    path: '/Main_article_detail',
    name: 'Main_article_detail',
    component: MainArticleDetail
  },
  {
    path: '/Main_article_detail_like',
    name: 'Main_article_detail_like',
    component: MainArticleDetailLike
  },
  {
    path: '/Main_writer_channel',
    name: 'Main_writer_channel',
    component: MainWriterChannel
  },
  {
    path: '/Main_writer_article',
    name: 'Main_writer_article',
    component: MainWriterArticle
  },
  {
    path: '/Main_writer_history',
    name: 'Main_writer_history',
    component: MainWriterHistory
  },
  {
    path: '/Main_writer_scroll',
    name: 'Main_writer_scroll',
    component: MainWriterScroll
  },
  {
    path: '/Main_learning_main',
    name: 'Main_learning_main',
    component: MainLearningMain
  },
  {
    path: '/Drawer_alerm',
    name: 'Drawer_alerm',
    component: DrawerAlerm
  },
  {
    path: '/Drawer_myinfo',
    name: 'Drawer_myinfo',
    component: DrawerMyinfo
  },
  {
    path: '/B2C_Drawer_myinfo',
    name: 'B2C_Drawer_myinfo',
    component: B2CDrawermyinfo
  },
  {
    path: '/Drawer_myinfo_logout',
    name: 'Drawer_myinfo_logout',
    component: Drawermyinfologout
  },
  {
    path: '/Drawer_myinfo_choosepic',
    name: 'Drawer_myinfo_choosepic',
    component: Drawermyinfochoosepic
  },
  {
    path: '/Drawer_myinfo_basicinfo',
    name: 'Drawer_myinfo_basicinfo',
    component: Drawermyinfobasicinfo
  },
  {
    path: '/Drawer_myinfo_basicinfo_edit',
    name: 'Drawer_myinfo_basicinfo_edit',
    component: Drawermyinfobasicinfoedit
  },
  {
    path: '/B2C_Drawer_myinfo_account',
    name: 'B2C_Drawer_myinfo_account',
    component: B2CDrawermyinfoaccount
  },
  {
    path: '/B2C_Drawer_myinfo_tracking',
    name: 'B2C_Drawer_myinfo_tracking',
    component: B2CDrawermyinfotracking
  },
  {
    path: '/B2C_Drawer_myinfo_tracking_delete',
    name: 'B2C_Drawer_myinfo_tracking_delete',
    component: B2CDrawermyinfotrackingdelete
  },
  {
    path: '/B2C_Drawer_myinfo_tracking_edit',
    name: 'B2C_Drawer_myinfo_tracking_edit',
    component: B2CDrawermyinfotrackingedit
  },
  {
    path: '/Drawer_06_myinfo_account_password',
    name: 'Drawer_06_myinfo_account_password',
    component: Drawer06myinfoaccountpassword
  },
  {
    path: '/B2C_Drawer_myinfo_account_password',
    name: 'B2C_Drawer_myinfo_account_password',
    component: B2CDrawermyinfoaccountpassword
  },
  {
    path: '/B2C_drawer_settings',
    name: 'B2C_drawer_settings',
    component: B2CDrawerSettings
  },
  {
    path: '/Drawer_08_myinfo_account_password',
    name: 'Drawer_08_myinfo_account_password',
    component: Drawer08myinfoaccountpassword
  },
  {
    path: '/Drawer_settings',
    name: 'Drawer_settings',
    component: Drawersettings
  },
  {
    path: '/Drawer_settings_push',
    name: 'Drawer_settings_push',
    component: Drawersettingspush
  },
  {
    path: '/Drawer_settings_opensource',
    name: 'Drawer_settings_opensource',
    component: Drawersettingsopensource
  },
  {
    path: '/Drawer_myinfo_extrainfo',
    name: 'Drawer_myinfo_extrainfo',
    component: Drawermyinfoextrainfo
  },
  {
    path: '/Drawer_myinfo_extrainfo_edit',
    name: 'Drawer_myinfo_extrainfo_edit',
    component: Drawermyinfoextrainfoedit
  },
  {
    path: '/B2C_Drawer_myinfo_account_withdrawal01',
    name: 'B2C_Drawer_myinfo_account_withdrawal01',
    component: B2CDrawermyinfoaccountwithdrawal01
  },
  {
    path: '/B2C_Drawer_myinfo_account_withdrawal02',
    name: 'B2C_Drawer_myinfo_account_withdrawal02',
    component: B2CDrawermyinfoaccountwithdrawal02
  },
  {
    path: '/B2C_Drawer_myinfo_account_withdrawal03',
    name: 'B2C_Drawer_myinfo_account_withdrawal03',
    component: B2CDrawermyinfoaccountwithdrawal03
  },
  {
    path: '/B2C_Drawer_Event',
    name: 'B2C_Drawer_Event',
    component: B2CDrawerEvent
  },
  {
    path: '/B2C_Drawer_Event_Winner',
    name: 'B2C_Drawer_Event_Winner',
    component: B2CDrawerEventWinner
  },
  {
    path: '/B2C_Drawer_Event_detail',
    name: 'B2C_Drawer_Event_detail',
    component: B2CDrawerEventdetail
  },
  {
    path: '/B2C_Drawer_Event_Winner_detail',
    name: 'B2C_Drawer_Event_Winner_detail',
    component: B2CDrawerEventWinnerdetail
  },
  {
    path: '/B2C_Drawer_Multiintroduce',
    name: 'B2C_Drawer_Multiintroduce',
    component: B2CDrawerMultiintroduce
  },
  {
    path: '/Drawer_myinfo_account',
    name: 'Drawer_myinfo_account',
    component: Drawermyinfoaccount
  },
  {
    path: '/B2C_Drawer_myinfo_logout',
    name: 'B2C_Drawer_myinfo_logout',
    component: B2CDrawermyinfologout
  },
  {
    path: '/B2C_Drawer_myinfo_basicinfo',
    name: 'B2C_Drawer_myinfo_basicinfo',
    component: B2CDrawermyinfobasicinfo
  },
  {
    path: '/B2C_Drawer_myinfo_basicinfo_edit',
    name: 'B2C_Drawer_myinfo_basicinfo_edit',
    component: B2CDrawermyinfobasicinfoedit
  },
  {
    path: '/B2C_Drawer_myinfo_choosepic',
    name: 'B2C_Drawer_myinfo_choosepic',
    component: B2CDrawermyinfochoosepic
  },
  {
    path: '/B2C_Drawer_myinfo_extrainfo',
    name: 'B2C_Drawer_myinfo_extrainfo',
    component: B2CDrawermyinfoextrainfo
  },
  {
    path: '/B2C_Drawer_myinfo_extrainfo_edit',
    name: 'B2C_Drawer_myinfo_extrainfo_edit',
    component: B2CDrawermyinfoextrainfoedit
  },
  {
    path: '/B2C_Drawer_settings_opensource',
    name: 'B2C_Drawer_settings_opensource',
    component: B2CDrawersettingsopensource
  },
  {
    path: '/Drawer_settings01',
    name: 'Drawer_settings01',
    component: Drawersettings01
  },
  {
    path: '/Drawer_settings02',
    name: 'Drawer_settings02',
    component: Drawersettings02
  },
  {
    path: '/B2C_Drawer_settings_push',
    name: 'B2C_Drawer_settings_push',
    component: B2CDrawersettingspush
  },
  {
    path: '/CustomerCenter_Notice',
    name: 'CustomerCenter_Notice',
    component: CustomerCenterNotice
  },
  {
    path: '/CustomerCenter_Notice_detail',
    name: 'CustomerCenter_Notice_detail',
    component: CustomerCenterNoticedetail
  },
  {
    path: '/CustomerCenter_library',
    name: 'CustomerCenter_library',
    component: CustomerCenterlibrary
  },
  {
    path: '/CustomerCenter_library_detail',
    name: 'CustomerCenter_library_detail',
    component: CustomerCenterlibrarydetail
  },
  {
    path: '/CustomerCenter_library_detail_like',
    name: 'CustomerCenter_library_detail_like',
    component: CustomerCenterlibrarydetaillike
  },
  {
    path: '/CustomerCenter_FAQ_total',
    name: 'CustomerCenter_FAQ_total',
    component: CustomerCenterFAQtotal
  },
  {
    path: '/CustomerCenter_FAQ',
    name: 'CustomerCenter_FAQ',
    component: CustomerCenterFAQ
  },
  {
    path: '/CustomerCenter_Studyguide',
    name: 'CustomerCenter_Studyguide',
    component: CustomerCenterStudyguide
  },
  {
    path: '/CustomerCenter_Studyguide',
    name: 'CustomerCenter_Studyguide_detail',
    component: CustomerCenterStudyguidedetail
  },
  {
    path: '/CustomerCenter_FAQ_detail',
    name: 'CustomerCenter_FAQ_detail',
    component: CustomerCenterFAQdetail
  },
  {
    path: '/CustomerCenter_Inquiry',
    name: 'CustomerCenter_Inquiry',
    component: CustomerCenterInquiry
  },
  {
    path: '/CustomerCenter_Inquiry_none',
    name: 'CustomerCenter_Inquiry_none',
    component: CustomerCenterInquirynone
  },
  {
    path: '/CustomerCenter_Inquiry_write01',
    name: 'CustomerCenter_Inquiry_write01',
    component: CustomerCenterInquirywrite01
  },
  {
    path: '/CustomerCenter_Inquiry_write01_inputon',
    name: 'CustomerCenter_Inquiry_write01_inputon',
    component: CustomerCenterInquirywrite01inputon
  },
  {
    path: '/CustomerCenter_Inquiry_write01_error',
    name: 'CustomerCenter_Inquiry_write01_error',
    component: CustomerCenterInquirywrite01error
  },
  {
    path: '/CustomerCenter_Request',
    name: 'CustomerCenter_Request',
    component: CustomerCenterRequest
  },
  {
    path: '/CustomerCenter_Request_popup1',
    name: 'CustomerCenter_Request_popup1',
    component: CustomerCenterRequestpopup1
  },
  {
    path: '/CustomerCenter_Request_popup2',
    name: 'CustomerCenter_Request_popup2',
    component: CustomerCenterRequestpopup2
  },
  {
    path: '/CustomerCenter_Request_toast01',
    name: 'CustomerCenter_Request_toast01',
    component: CustomerCenterRequesttoast01
  },
  {
    path: '/CustomerCenter_Request_resultlist',
    name: 'CustomerCenter_Request_resultlist',
    component: CustomerCenterRequestresultlist
  },
  {
    path: '/CustomerCenter_PrivacyPolicy',
    name: 'CustomerCenter_PrivacyPolicy',
    component: CustomerCenterPrivacyPolicy
  },
  {
    path: '/CustomerCenter_Inquiry_detail',
    name: 'CustomerCenter_Inquiry_detail',
    component: CustomerCenterInquirydetail
  },
  {
    path: '/CustomerCenter_Studysupport',
    name: 'CustomerCenter_Studysupport',
    component: CustomerCenterStudysupport
  },
  {
    path: '/CustomerCenter_Studysupport_detail',
    name: 'CustomerCenter_Studysupport_detail',
    component: CustomerCenterStudysupportdetail
  },
  {
    path: '/CustomerCenter_Request_result',
    name: 'CustomerCenter_Request_result',
    component: CustomerCenterRequestresult
  }
]

export default rootRoutes
