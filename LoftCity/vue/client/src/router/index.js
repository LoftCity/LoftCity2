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
    path: "/about",
    name: "about",
    component: () =>
      import( "../views/About.vue")
  },
  {
    path: '/apartments',
    name: 'apartments',
    component: () => import('../views/All_apartments.vue'),
    props(route) {
      return  route.query || {}
    }
  },
  
  {
    path:'/kv/:id',
    name: 'kv',
    component: () => import('../views/One_kv.vue'),
    props: true
  },
  {
    path: '/documents',
    name: 'documents',
    component: () => import('../views/Documents.vue')
  },


  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue'),
    props(route) {
      return  route.query || {}
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



export default router;