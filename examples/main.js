import Vue from 'vue'
import App from './App.vue'
// import shyUi from '../packages'
Vue.config.productionTip = false

// Vue.use(shyUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
