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

import StudyDictionary from '~workplace/study/Study_dictionary'
import Studydictionarydetail from '~workplace/study/Study_dictionary_detail'
import StudySOassinmentbestanswer from '~workplace/study/Study_SO_assinment_bestanswer'
import Study02discussedit from '~workplace/study/Study_02_discuss_edit'
import StudySOsimulation from '~workplace/study/Study_SO_simulation'
import Study03LOviewerfs from '~workplace/study/Study_03_LO_viewer_fs'
import Study04SOsurveysubmission from '~workplace/study/Study_04_SO_survey_submission'
import Study04SOopinionsubmission from '~workplace/study/Study_04_SO_opinion_submission'
import Study04SOpledge from '~workplace/study/Study_04_SO_pledge'
import Study04SOpledgesubmission from '~workplace/study/Study_04_SO_pledge_submission'

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
    path: '/Study_SO_assinment_bestanswer',
    name: 'Study_SO_assinment_bestanswer',
    component: StudySOassinmentbestanswer
  },
  {
    path: '/Study_02_discuss_edit',
    name: 'Study_02_discuss_edit',
    component: Study02discussedit
  },
  {
    path: '/Study_SO_simulation',
    name: 'Study_SO_simulation',
    component: StudySOsimulation
  },
  {
    path: '/Study_03_LO_viewer_fs',
    name: 'Study_03_LO_viewer_fs',
    component: Study03LOviewerfs
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
    path: '/Study_04_SO_pledge',
    name: 'Study_04_SO_pledge',
    component: Study04SOpledge
  },
  {
    path: '/Study_04_SO_pledge_submission',
    name: 'Study_04_SO_pledge_submission',
    component: Study04SOpledgesubmission
  }
]

export default rootRoutes
