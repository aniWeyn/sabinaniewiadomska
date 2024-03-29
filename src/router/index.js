import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/resume-pl",
    name: "resume-pl",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResumePL.vue")
  },
  {
    path: "/resume-en",
    name: "resume-en",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResumeEN.vue")
  },
  {
    path: "/",
    name: "music",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArtistPage.vue")
  },
  {
    path: "/2",
    name: "music",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArtistPage2.vue")
  },
  {
    path: "/all",
    name: "All Music",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/All.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
