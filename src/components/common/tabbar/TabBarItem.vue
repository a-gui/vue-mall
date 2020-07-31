<template>
  <!--此为底部tabBar中的一个小图标及其文字，比如首页文字和其图标。
  点击会高亮，不点击是灰色。

  实现方法：定义2类插槽，2个图片和1个文字，和2个属性
  这样插槽的位置就可以插入任何的img和text了
  在2类插槽外包装div,用于设置样式。
  判断是否点击，显示不同图片-->

  <div class="tab-bar-item" @click="itemClick">
    <!-- 上面图标组件定义了一个@click，点击会替换当前路由。其是公用的，当点击图标时，会通过路由跳转到对应view页面
    其path实通过propos父传子传过来的，父级会写path="/home"等具体路径-->
    <!-- 本来应该是下面这样的，但这样会写死，所以需要定义2类插槽，图片和文字 -->
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->

  <!-- 觉得true/false的isActive可以是变量，也可以说是方法名 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 下面定义文字插槽，外面都包了div设置样式。如果样式设置再slot里，则不生效，因为slot会被完全替代 -->
    <!-- 我们还想颜色也是动态，所以取消class绑定，改为动态style,其值是一个属性，用于父组件定义传啥颜色 -->
    <!-- <div :class="{ active: isActive }"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  //定义2个接受的属性（即对外接口）
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
    // 每个图标是不同的颜色，默认是红色
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      // 计算属性，路由地址里是否包含当前地址，以此来判断isActive是否为true，只有true活跃的是那个组件显示红色
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = false
      // /home -> item1(/profile) = false
      return this.$route.path.indexOf(this.path) !== -1;
      //要检索的字符串值没有出现，则该方法返回 -1

      // 也可以写成下面这种，不过没有上面的好
      // return this.$route.path == this.path;
      // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。首次出现返回0，不包含返回-1，第n位置出现返回n
      // indexOf() 方法对大小写敏感！注释：如果要检索的字符串值没有出现，则该方法返回 -1。
      // 路由对象，即$router会被注入每个组件中，可以利用它进行一些信息的获取。如
      // 属性 说明
      // $route.path 当前路由对象的路径，如'/vi
      // $route.query 请求参数，如/foo?user=1获取到query.user = 1
      // $route.router 所属路由器以及所属组件信息
      // $route.matched 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
      // $route.name 当前路径名字
      // 当然，你也可以在自己定义路由规则（map)的时候自定义字段，用以特殊目的。
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
      // 不想返回，直接替换就用replace,想返回就用push
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  /* 父级已设置flex，子级都为1说明均分父级容器 */
  flex: 1;
  text-align: center;
  /* 一般tabBar都是49px */
  height: 49px;
  font-size: 14px;
}

/* 对图标大小处理 */
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
  color: #a00524;
}
/* 这个是写死的文字样式，已改为动态样式，父传给子 */
.active {
  color: red;
}
</style>
