import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios  from 'axios'

window.axios = axios;



axios.defaults.baseURL = "http://127.0.0.1:8000/";
// axios.defaults.headers.common['Authorization']= "Bearer "+token;
// axios.defaults.headers.post['Content-Type'] = 'application/json';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
