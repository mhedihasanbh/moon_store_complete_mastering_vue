import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/Category-product',
    name: 'category-product',

    component: () => import(/* webpackChunkName: "category-product" */ '../views/Category.vue')
  }
  ,
  {
    path: '/productDetails',
    name: 'productDetails',

    component: () => import(/* webpackChunkName: "productDetails" */ '../views/ProductDetails.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
