import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transition: "fade" },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/A",
    name: "Artificial Intelligence",
    component: () => import("../views/A.vue"),
  },
  {
    path: "/B",
    name: "Bias",
    component: () => import("../views/B.vue"),
  },
  {
    path: "/C",
    name: "Climate",
    component: () => import("../views/C.vue"),
  },
  {
    path: "/D",
    name: "Data",
    component: () => import("../views/D.vue"),
  },
  {
    path: "/E",
    name: "Ethics",
    component: () => import("../views/E.vue"),
  },
  {
    path: "/F",
    name: "Fakes",
    component: () => import("../views/F.vue"),
  },
  {
    path: "/G",
    name: "GANs",
    component: () => import("../views/G.vue"),
  },
  {
    path: "/H",
    name: "Human-in-the-loop",
    component: () => import("../views/H.vue"),
  },
  {
    path: "/I",
    name: "Image Recognition",
    component: () => import("../views/I.vue"),
  },
  {
    path: "/J",
    name: "Journalism",
    component: () => import("../views/J.vue"),
  },
  {
    path: "/K",
    name: "Knowledge",
    component: () => import("../views/K.vue"),
  },
  {
    path: "/L",
    name: "Learning",
    component: () => import("../views/L.vue"),
  },
  {
    path: "/M",
    name: "Machine Learning",
    component: () => import("../views/M.vue"),
  },
  {
    path: "/N",
    name: "Neural Networks",
    component: () => import("../views/N.vue"),
  },
  {
    path: "/O",
    name: "Open Source",
    component: () => import("../views/O.vue"),
  },
  {
    path: "/P",
    name: "Predictions",
    component: () => import("../views/P.vue"),
  },
  {
    path: "/Q",
    name: "Quantum Computing",
    component: () => import("../views/Q.vue"),
  },
  {
    path: "/R",
    name: "Robotics",
    component: () => import("../views/R.vue"),
  },
  {
    path: "/S",
    name: "Speech Recognition",
    component: () => import("../views/S.vue"),
  },
  {
    path: "/T",
    name: "Turing Test",
    component: () => import("../views/T.vue"),
  },
  {
    path: "/U",
    name: "Uses",
    component: () => import("../views/U.vue"),
  },
  {
    path: "/V",
    name: "Virtual Assistants",
    component: () => import("../views/V.vue"),
  },
  {
    path: "/W",
    name: "Watson",
    component: () => import("../views/W.vue"),
  },
  {
    path: "/X",
    name: "X-Ray",
    component: () => import("../views/X.vue"),
  },
  {
    path: "/Y",
    name: "You",
    component: () => import("../views/Y.vue"),
  },
  {
    path: "/Z",
    name: "Zeroes & Ones",
    component: () => import("../views/Z.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
