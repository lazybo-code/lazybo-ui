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
    path: '/reader-book',
    name: 'reader-book-demo',
    component: () => import('../views/reader-book-demo.vue')
  },
  {
    path: '/button',
    name: 'button-demo',
    component: () => import('../views/button-demo.vue')
  }
];

const router = new VueRouter({
  routes
})

export default router
