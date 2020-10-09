import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",
    component: index
  },
  {
    path: "/essay",
    name: "Essay",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "essay" */ "../views/Essay.vue")
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () => import(/* webpackChunkName: "timeline" */ "../views/Timeline.vue")
  },
  {
    path: "/message",
    name: "Message",
    component: () => import(/* webpackChunkName: "message" */ "../views/Message.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
