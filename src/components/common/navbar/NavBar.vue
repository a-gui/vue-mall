<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navBar"
};
// 只有导出时是default时，别人引用才可以省去大括号.
//import NavBar from "components/common/navbar/NavBar";
//否则只能是
//import { getHomeMultidata } from "network/home";
</script>
<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  /* 如果没有内容，且不设置高度，则会撑不起来。有内容就可以撑起来显示 */
  /* height: 44px; */
  /* 导航栏下面的一条横线，阴影条 */
  box-shadow: 0 1px 1px rgba(100, 100, 100, 1);
}
.left,
.right {
  width: 60px;
  /* background: crimson; */
}
/* 中间占据剩余所有部分，使用flex：1，因为其他有固定宽度 */
.center {
  flex: 1;
  text-align: center;
  /* background-color: darkblue; */
}
</style>
