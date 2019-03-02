import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Carte from '@/components/carte/Carte'
import Order from '@/components/order/Order'
import Cart from '@/components/cart/Cart'
import Mine from '@/components/mine/Mine'
import Addr from '@/components/addr/Addr'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'
import Info from '@/components/info/Info'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Carte',
      name: 'Carte',
      component: Carte
    }, {
      path: '/Order',
      name: 'Order',
      component: Order
    }, {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    }, {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }, {
      path: '/Addr',
      name: 'Addr',
      component: Addr
    }, {
      path: '/City',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path: '/Info',
      name: 'Info',
      component: Info
    }
  ]
})
