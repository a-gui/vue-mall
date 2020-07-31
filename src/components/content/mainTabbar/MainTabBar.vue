<template>
  <tab-bar>
    <!-- tab-bar里只定义了一个slot，里面可以放任何东西。
    这样有几个图标我们就放入几个<tab-bar-item></tab-bar-item>.
    每个<tab-bar-item>里有3个插槽，我们放入2个img,1个div。 -->
    <!-- 这是4个小组件组成，每个小组件包含2类插槽共3个-->
    <!-- 在dom里使用别名路径需要加波浪符号~,已经有红色背景，下面activeColor去掉 -->
    <!-- <tab-bar-item path="/home" activeColor="pink"> -->
    <!-- 因为子组件定义了2个属性，path，activeColor，所以父组件这里可以直接用上 -->
    <tab-bar-item path="/home">
      <!-- 这里的path是子组件定义好的propos属性，父传子，用于路由跳转 -->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped></style>
