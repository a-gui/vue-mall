<template>
  <div id="app">
    <router-view></router-view>
    <!-- 3.组件使用 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// 1.组件导入
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    // 2.组件注册
    MainTabBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
