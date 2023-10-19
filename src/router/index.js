import Vue from "vue";
import VueRouter from "vue-router";
import Navigation from "@/components/Navigation.vue";
import Todo from "@/views/Todo.vue";
import Completed from "@/views/Completed.vue";
import Login from "@/views/Login.vue";
import Albo from "@/views/Albo.vue";

Vue.use(VueRouter);

const routes = [
    {
    path: "/",
    redirect: "/login", 
    components: {
      default: Login,
      navigation: Navigation,
    },
  },
  {
    path: "/completed",
    name: "Completed",
    components: {
      default: Completed,
      navigation: Navigation,
    },
  },
  {
    path: "/login",
    name: "Login",
    components: {
      default: Login,
      navigation: Navigation,
    },
  },
  {
    path: "/todo",
    name: "Todo",
    components: {
      default: Todo,
      navigation: Navigation,
    },
  },
  {
    path: "/albo",
    name: "Albo",
    components: {
      default: Albo,
      navigation: Navigation,
    },
  },

];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
