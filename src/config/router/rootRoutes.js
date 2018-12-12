// fdp 기본 route 정보
import Worksheet from '@/components/Worksheet'
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
import Study02noticedetail from '~workplace/study/Study_02_notice_detail'
import Study02studyquestiondetail from '~workplace/study/Study_02_studyquestion_detail'
import Study02studyquestiondetail02 from '~workplace/study/Study_02_studyquestion_detail_02'
import Study02studyquestionedit from '~workplace/study/Study_02_studyquestion_edit'
import Study02reflectionnoteedit from '~workplace/study/Study_02_reflectionnote_edit'
import Study02reflectionnoteedit02 from '~workplace/study/Study_02_reflectionnote_edit_02'
import Study02studystatusassignment from '~workplace/study/Study_02_studystatus_assignment'
import Study02studystatusassignmentapply from '~workplace/study/Study_02_studystatus_assignment_apply'
import Study02studystatusassessmentnotice from '~workplace/study/Study_02_studystatus_assessment_notice'
import Study03LOviewerfs from '~workplace/study/Study_03_LO_viewer_fs'
import Study03LOdocsfs from '~workplace/study/Study_03_LO_docs_fs'
import Study04SOassinmentbestanswer from '~workplace/study/Study_04_SO_assinment_bestanswer'
import Study04SOsurveysubmission from '~workplace/study/Study_04_SO_survey_submission'
import Study04SOopinionsubmission from '~workplace/study/Study_04_SO_opinion_submission'
import Study04SOopinionwrittingguide from '~workplace/study/Study_04_SO_opinion_writtingguide'
import Study04SOsimulation from '~workplace/study/Study_04_SO_simulation'
import Study04SOsimulationsubmission from '~workplace/study/Study_04_SO_simulation_submission'
import Study04SOactionplaninput from '~workplace/study/Study_04_SO_actionplan_input'
import Study04SOpledge from '~workplace/study/Study_04_SO_pledge'
import Study04SOpledgesubmission from '~workplace/study/Study_04_SO_pledge_submission'

import MainControl from '~workplace/main/Main_control'

// import DrawerMyinfo from '~workplace/drawer/Drawer_myinfo'
// import Drawermyinfologout from '~workplace/drawer/Drawer_myinfo_logout'
// import Drawermyinfochoosepic from '~workplace/drawer/Drawer_myinfo_choosepic'
// import Drawermyinfobasicinfo from '~workplace/drawer/Drawer_myinfo_basicinfo'
// import Drawermyinfobasicinfoedit from '~workplace/drawer/Drawer_myinfo_basicinfo_edit'
// import B2CDrawermyinfoaccount from '~workplace/drawer/B2C_Drawer_myinfo_account'
// import B2CDrawermyinfotracking from '~workplace/drawer/B2C_Drawer_myinfo_tracking'
// import B2CDrawermyinfotrackingdelete from '~workplace/drawer/B2C_Drawer_myinfo_tracking_delete'
// import B2CDrawermyinfotrackingedit from '~workplace/drawer/B2C_Drawer_myinfo_tracking_edit'
// import Drawer06myinfoaccountpassword from '~workplace/drawer/Drawer_06_myinfo_account_password'
// import B2CDrawermyinfoaccountpassword from '~workplace/drawer/B2C_Drawer_myinfo_account_password'
// import Drawer08myinfoaccountpassword from '~workplace/drawer/Drawer_08_myinfo_account_password'
// import Drawersettings from '~workplace/drawer/Drawer_settings'

// 1번 영역
var rootRoutes = [
  {
    path: '*',
    name: 'worksheet',
    component: Worksheet
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
    path: '/Study_04_SO_survey_submission',
    name: 'Study_04_SO_survey_submission',
    component: Study04SOsurveysubmission
  },
  {
    path: '/Study_04_SO_opinion_submission',
    name: 'Study_04_SO_opinion_submission',
    component: Study04SOopinionsubmission
  },
  {
    path: '/Study_04_SO_opinion_writtingguide',
    name: 'Study_04_SO_opinion_writtingguide',
    component: Study04SOopinionwrittingguide
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
    path: '/Main_control',
    name: 'Main_control',
    component: MainControl
  }
  // {
  //   path: '/Drawer_myinfo',
  //   name: 'Drawer_myinfo',
  //   component: DrawerMyinfo
  // },
  // {
  // path: '/Drawer_myinfo_logout',
  // name: 'Drawer_myinfo_logout',
  // component: Drawermyinfologout
  // },
  // {
  //   path: '/Drawer_myinfo_choosepic',
  //   name: 'Drawer_myinfo_choosepic',
  //   component: Drawermyinfochoosepic
  // },
  // {
  //   path: '/Drawer_myinfo_basicinfo',
  //   name: 'Drawer_myinfo_basicinfo',
  //   component: Drawermyinfobasicinfo
  // },
  // {
  //   path: '/Drawer_myinfo_basicinfo_edit',
  //   name: 'Drawer_myinfo_basicinfo_edit',
  //   component: Drawermyinfobasicinfoedit
  // },
  // {
  //   path: '/B2C_Drawer_myinfo_account',
  //   name: 'B2C_Drawer_myinfo_account',
  //   component: B2CDrawermyinfoaccount
  // },
  // {
  //   path: '/B2C_Drawer_myinfo_tracking',
  //   name: 'B2C_Drawer_myinfo_tracking',
  //   component: B2CDrawermyinfotracking
  // },
  // {
  //   path: '/B2C_Drawer_myinfo_tracking_delete',
  //   name: 'B2C_Drawer_myinfo_tracking_delete',
  //   component: B2CDrawermyinfotrackingdelete
  // },
  // {
  //   path: '/B2C_Drawer_myinfo_tracking_edit',
  //   name: 'B2C_Drawer_myinfo_tracking_edit',
  //   component: B2CDrawermyinfotrackingedit
  // },
  // {
  //   path: '/Drawer_06_myinfo_account_password',
  //   name: 'Drawer_06_myinfo_account_password',
  //   component: Drawer06myinfoaccountpassword
  // },
  // {
  //   path: '/Drawer_myinfo_account_password',
  //   name: 'Drawer_myinfo_account_password',
  //   component: Drawermyinfoaccountpassword
  // },
  // {
  //   path: '/B2C_Drawer_myinfo_account_password',
  //   name: 'B2C_Drawer_myinfo_account_password',
  //   component: B2CDrawermyinfoaccountpassword
  // },
  // {
  //   path: '/Drawer_08_myinfo_account_password',
  //   name: 'Drawer_08_myinfo_account_password',
  //   component: Drawer08myinfoaccountpassword
  // },
  // {
  //   path: '/Drawer_settings',
  //   name: 'Drawer_settings',
  //   component: Drawersettings
  // }
]

export default rootRoutes
