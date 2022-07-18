import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "@/views/Login.vue";
import SignInView from "@/views/SignInView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/BlankLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: Login,
        },
        {
          path: "/signin",
          name: "signin",
          component: SignInView,
        },
      ],
    },
    {
      path: "",
      component: () => import("@/layouts/FullLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/cachorrada",
          name: "cachorros",

          component: () => import("../views/CachorrosView.vue"),
        },
      ],
    },
  ],
});

export default router;
