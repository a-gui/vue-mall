import Vue from "vue";
import VueRouter from "vue-router";
// 导入懒加载
const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Cart = () => import("../views/cart/Cart");
const Profile = () => import("../views/profile/Profile");

// 1.安装插件
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  }
];
// 2.创建路由
const router = new VueRouter({
  routes,
  mode: "history"
  // 一般习惯把routes放外面，配置对应的映射关系。并使用历史模式
});

// 3.导出路由,到main.js去挂载
export default router;
