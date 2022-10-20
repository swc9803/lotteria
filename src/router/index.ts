import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../pages/Home.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import(/* webpackChunkName: "test" */ "../pages/Test.vue"),
  },
  {
    path: "/test2",
    name: "test2",
    component: () =>
      import(/* webpackChunkName: "test2" */ "../pages/Test2.vue"),
  },
  {
    path: "/test3",
    name: "test3",
    component: () =>
      import(/* webpackChunkName: "test3" */ "../pages/Test3.vue"),
  },
  {
    path: "/test4",
    name: "test4",
    component: () =>
      import(/* webpackChunkName: "test4" */ "../pages/Test4.vue"),
  },
  {
    path: "/test5",
    name: "test5",
    component: () =>
      import(/* webpackChunkName: "test5" */ "../pages/Test5.vue"),
  },
  {
    path: "/test6",
    name: "test6",
    component: () =>
      import(/* webpackChunkName: "test6" */ "../pages/Test6.vue"),
  },
  {
    path: "/test7",
    name: "test7",
    component: () =>
      import(/* webpackChunkName: "test7" */ "../pages/Test7.vue"),
  },
  {
    path: "/test8",
    name: "test8",
    component: () =>
      import(/* webpackChunkName: "test8" */ "../pages/Test8.vue"),
  },
  {
    path: "/test9",
    name: "test9",
    component: () =>
      import(/* webpackChunkName: "test9" */ "../pages/Test9.vue"),
  },
  {
    path: "/test10",
    name: "test10",
    component: () =>
      import(/* webpackChunkName: "test10" */ "../pages/Test10.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
