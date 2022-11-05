import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import UserList from '../views/UserList';
import UserProfile from '../views/UserProfile';
import LoginView from '../views/LoginView';
import NotFound from '../views/NotFound';
import RegisterView from '../views/RegisterView';


const routes = [
  {
    path: '/myspace/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/myspace/userlist/',
    name: 'userlist',
    component: UserList
  },

  {
    path: '/myspace/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfile
  },

  {
    path: '/myspace/login/',
    name: 'login',
    component: LoginView
  },
  
  {
    path: '/myspace/register/',
    name: 'register',
    component: RegisterView
  },
  
  {
    path: '/myspace/404/',
    name: '404',
    component: NotFound
  },

  {
    path: '/myspace/:catchAll(.*)',
    redirect: '/myspace/404/'
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
