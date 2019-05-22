import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/Login.vue'
import register from './views/Register.vue'
import main from './views/Main.vue'
import bookatable from './views/Bookatable.vue'
import addorder from './views/Addorder.vue'
import orderplus from './views/Orderplus.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/main',
      name:'main',
      component:main
    },
    {
    path:'/bookatable',
    name:'bookatable',
    component:bookatable
    },
    {
      path:'/addorder',
      name:'addorder',
      component:addorder
    },
    {
      path:'/orderplus',
      name:'orderplus',
      component:orderplus
    }
  ]
});
