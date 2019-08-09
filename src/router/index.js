import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home.vue'
import Category from '../pages/category/category.vue'
import ShoppingCart from '../pages/shoppingCart/shoppingCart.vue'
import Profile from '../pages/profile/profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'category',
      path: '/category',
      component: Category
    },
    {
      name: 'shoppingCart',
      path: '/shoppingCart',
      component: ShoppingCart
    },
    {
      name: 'profile',
      path: '/profile',
      component: Profile
    }
  ]
})
