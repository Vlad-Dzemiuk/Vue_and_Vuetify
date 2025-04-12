import Group from '../views/Group.vue'
import About from '../views/About.vue'
import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/List.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: List,
    },
    {
      path: '/group',
      name: 'group',
      component: Group,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
