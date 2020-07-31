<template>
  <!-- 这是底部的一整个tabBar，由于要插入一整块内容，只要定义1个插槽就可以了。
  插槽位置可以插入任何东西。4个tabBarItem插进来即可。
此组件独立于项目，其他地方也可以用 -->
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /* 固定在底部 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* tabBar顶部搞点小阴影 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
