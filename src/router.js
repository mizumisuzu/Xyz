import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HelloWorld.vue';
import Projects from './components/projects.vue';
import Blog from './components/blog.vue';
import Contact from './components/contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact }
  ]
});

export default router;
