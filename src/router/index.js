import { createRouter, createWebHistory } from 'vue-router';
import VideoPage from '../views/VideoPage.vue'; // Adjust the path as necessary
import MainLayout from '../views/MainLayout.vue';
import HeaderPage from '../components/HeaderPage.vue';

const routes = [
  {
    path: '/',
    name: "MainLayout",
    component: MainLayout,
    children: [
      {
        path: '/headerpage',
        component: HeaderPage
      },
      {
        path: '/video',
        component: VideoPage
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;
