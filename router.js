import { createRouter, createWebHistory } from 'vue-router';

import Home from './index.html';
import Portfolio from './portfolio.html';
import Experiences from './experiences.html';
import GetInTouch from './getintouch.html';

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/experiences', component: Experiences },
  { path: '/getintouch', component: GetInTouch },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
