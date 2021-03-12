import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/users',
    name: 'UsersPage',
    component: () => import('../views/user/UsersPage.vue'),
  },
  {
    path: '/user/:id',
    name: 'UserPage',
    component: () => import('../views/user/UserPage.vue'),
  },
  {
    path: '/useradd',
    name: 'UserAddPage',
    component: () => import('../views/user/UserAddPage.vue'),
  },
  {
    path: '/user/edit/:id',
    name: 'UserEditPage',
    component: () => import('../views/user/UserAddPage.vue'),
    // component: () => import('../views/user/UserEditPage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
