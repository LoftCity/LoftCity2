import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import( "../views/About.vue")
  },
  {
    path: '/All_apartments',
    name: 'All_apartments',
    component: () => import('../views/All_apartments.vue')
  },
  {
    path:'/One_kv/:id',
    name: 'One_kv',
    component: () => import('../views/One_kv.vue'),
    props: true
  },
  {
    path: '/Documents',
    name: 'Documents',
    component: () => import('../views/Documents.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



export default router;