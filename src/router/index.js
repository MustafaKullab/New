import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("@/views/HomePage.vue"),
      meta: {
        title: "Home Page",
      },
    },
  ],
});

router.beforeEach((to) => {
  document.title = to.meta.title;
});

export default router;
