import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/HelloWorld.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("./components/projects.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("./components/blog.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("./components/contact.vue")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
