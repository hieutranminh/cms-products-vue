//import sb admin 2
import './bootstrap'

import './assets/sass/app.scss'
// Element UI
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue'
import App from './App.vue'
//import router
import router from './router'

//import element ui
import ElementUI from 'element-ui'
import el_en from 'element-ui/lib/locale/lang/en'

//import vue sweetalert
import VueSweetalert2 from 'vue-sweetalert2';

//import vee validate
import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

//import vue upload multiple
import VueLazyload from 'vue-lazyload'

// loop over all rules
for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: en.messages[rule] // add its message
  });
}

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(ElementUI, { locale: el_en })

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

Vue.use(VueLazyload)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
