import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../pages/Home.vue"),
  },
  {
    path: "/star",
    name: "star",
    component: () => import(/* webpackChunkName: "star" */ "../pages/Star.vue"),
  },
  {
    path: "/sticker",
    name: "sticker",
    component: () =>
      import(/* webpackChunkName: "sticker" */ "../pages/Sticker.vue"),
  },
  {
    path: "/newyear",
    name: "newyear",
    component: () =>
      import(/* webpackChunkName: "newyear" */ "../pages/NewYear.vue"),
  },
  {
    path: "/count",
    name: "count",
    component: () =>
      import(/* webpackChunkName: "count" */ "../pages/Count.vue"),
  },
  {
    path: "/dragtest",
    name: "dragtest",
    component: () =>
      import(/* webpackChunkName: "dragtest" */ "../pages/DragTest.vue"),
  },
  {
    path: "/speech",
    name: "speech",
    component: () =>
      import(/* webpackChunkName: "speech" */ "../pages/Speech.vue"),
  },
  {
    path: "/squigglytext",
    name: "squigglytext",
    component: () =>
      import(
        /* webpackChunkName: "squigglytext" */ "../pages/SquigglyText.vue"
      ),
  },
  {
    path: "/test1",
    name: "test1",
    component: () =>
      import(/* webpackChunkName: "test1" */ "../pages/Test1.vue"),
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
    path: "/test11",
    name: "test11",
    component: () =>
      import(/* webpackChunkName: "test11" */ "../pages/Test11.vue"),
  },
  {
    path: "/test12",
    name: "test12",
    component: () =>
      import(/* webpackChunkName: "test12" */ "../pages/Test12.vue"),
  },
  {
    path: "/test13",
    name: "test13",
    component: () =>
      import(/* webpackChunkName: "test13" */ "../pages/Test13.vue"),
  },
  {
    path: "/test14",
    name: "test14",
    component: () =>
      import(/* webpackChunkName: "test14" */ "../pages/Test14.vue"),
  },
  {
    path: "/test17",
    name: "test17",
    component: () =>
      import(/* webpackChunkName: "test17" */ "../pages/Test17.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
