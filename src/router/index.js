import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LibraryView from "../views/LibraryView.vue";
import Wishlist from "../views/Wishlist.vue";
import Detail from "../views/Detail.vue";
import Content from "../views/Content.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/library",
    name: "library",
    component: LibraryView,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: Wishlist,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail,
  },
  {
    path: "/content/:id",
    name: "content",
    component: Content,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
