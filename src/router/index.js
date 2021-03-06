import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/video',
    name: 'Video',
    component: () =>
      import(/* webpackChunkName: "view" */ '../views/Video.vue'),
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () =>
      import(/* webpackChunkName: "view" */ '../views/Calendar/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
