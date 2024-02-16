import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import Login from "@/views/Login";
import Home from "@/views/Home";

const routes = [
  {
    path: "/",
    redirect: () => (store.state.accessToken ? "/home" : "/login"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.accessToken) {
    next("/login");
  } else {
    next();
  }
});

export default router;
