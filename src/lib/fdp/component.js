import * as components from './components'
/* VeeValidate */
import VeeValidate from 'vee-validate'
import Rules from './components/fdpValidator/rules'
import VeeValidateI18nKo from './components/fdpValidator/i18n/ko'

const flatui = {
  install (Vue, options) {
    Object.keys(Rules).forEach(rule => {
      VeeValidate.Validator.extend(rule, Rules[rule])
    })

    Object.values(components).forEach(function (component) {
      Vue.use(component)
    })

    Vue.use(VeeValidate, {
      events: 'input|valid',
      locale: 'ko',
      dictionary: {
        ko: VeeValidateI18nKo
      }
    })
  }
}

export default flatui
