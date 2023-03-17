// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/ArticlesList.vue')
  },
  {
    path: '/article/:articleId(\\d+)',
    props: true,
    component: () => import('@/components/Article.vue')
  },
  {
    path: '/analytics',
    props: true,
    component: () => import('@/components/DateRangedComments.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
