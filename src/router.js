import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/Login.vue'
import register from './views/Register.vue'
import main from './views/Main.vue'
import bookatable from './views/Bookatable.vue'
import addorder from './views/Addorder.vue'
import orderplus from './views/Orderplus.vue'
import menu from './views/Menu.vue'
import slogin from './views/Slogin.vue'
import confirmcustomer from './views/ConfirmCustomer.vue'
import confirm from './views/Confirm.vue'
import takeorder from './views/Takeorder.vue'
import bookingdetails from './views/BookingDetails.vue'
import item from './views/Item.vue'
import items from './views/Items.vue'
import activeOrders from './views/ActiveOrders.vue'
import bill from './views/Bill.vue'
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
      path:'/slogin',
      name:'slogin',
      component:slogin
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
      component:bookingdetails
    },
    {
      path:'/orderplus',
      name:'orderplus',
      component:orderplus
    },
    {
      path:'/menu',
      name:'menu',
      component:menu
    },
    {
      path:'/confirmcostumer',
      name:'confirmcustomer',
      component:confirmcustomer
    },
    {
      path:'/confirm/:id',
      name:'Confirm',
      component:confirm,
      props:true
    },
    {
      path:'/takeorder/:id',
      name:'TakeOrder',
      component:takeorder,
      props:true,
    },
    {
      path:'/placeorder/:id',
      name:'PlaceOrder',
      component:addorder,
      props:true,
    },
    {
      path:'/item/:id',
      name:'Item',
      component:item,
      props:true,
    },
    {
      path:'/items/:id',
      name:'Items',
      component:items,
      props:true,
    },
    {
      path:'/printbill',
      name:'PrintBill',
      component:activeOrders,
    },
    {
      path:'/bill/:id',
      name:'Bill',
      component:bill,
      props:true,
    }
  ]
});
