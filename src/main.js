// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

if (process.env.NODE_ENV === 'development') {
  // 换接口
  Vue.prototype.$host = process.env.testUrl
}

// else if (process.env.NODE_ENV === 'test') {
//   Vue.prototype.$host = process.env.testUrl
// }

console.log(process.env.testUrl + '现在是' + process.env.NODE_ENV + '环境')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
