import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/main.vue';
import LocalPage from '@/pages/local.vue';
import CoachDetailPage from '@/pages/coachDetail.vue';
import RegisterPage from '@/pages/register.vue';
import LoginPage from '@/pages/login.vue';

const routes = [
  { path: '/', name: 'Main', component: MainPage },
  { path: '/local', name: 'Local', component: LocalPage },
  { path: '/coachDetail', name: 'CoachDetail', component: CoachDetailPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/login', name: 'Login', component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
