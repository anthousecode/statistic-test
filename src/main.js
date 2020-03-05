import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss';
import VueRouter from 'vue-router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import VueVirtualScroller from 'vue-virtual-scroller'


Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
Vue.use(VueVirtualScroller)


Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
