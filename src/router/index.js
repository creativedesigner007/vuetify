import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home-2',
    name: 'home-2',
    component: () => import('../pages/HomeTwo.vue')
  },
  {
    path: '/home-3',
    name: 'home-3',
    component: () => import('../pages/HomeThree.vue')
  },
  {
    path: '/home-4',
    name: 'home-4',
    component: () => import('../pages/HomeFour.vue')
  },
  {
    path: '/home-5',
    name: 'home-5',
    component: () => import('../pages/HomeFive.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/BlogGrid.vue')
  },
  {
    path: '/blog-list',
    name: 'blog-list',
    component: () => import('../pages/BlogList.vue')
  },
  {
    path: '/blog-detail/:id',
    name: 'blog-detail',
    component: () => import('../pages/BlogDetail.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../pages/Faq.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../pages/404.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/contact.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(function (to, from, next) {
  console.log(to)
  if (!!to.hash === false) {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }
  // window.location.reload()
  next()
})
export default router
