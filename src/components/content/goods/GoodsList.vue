<!-- 这是整个商品列表，goods里面放一个个小的item,其也是一个组件 -->
<template>
  <div class="goods">
    <!--1.先写个字看该组件显示出来了没-->
    <!-- 3.home页先给props一个请求来的死数据。这里再把goods信息展示出来 .
    其子组件绑定了goodsItem属性，传给其每个商品信息item -->
    <goods-list-item v-for="item in goods" :goods-item="item" :key=item.iid></goods-list-item>
    <!-- 4.此时goods是一个包含对象的数组 -->
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    //2.要求home把商品信息传给我，所以定义一个对外接口属性，定为数组
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  /* 不包裹，会换行 */
  justify-content:space-around;
  padding:2px
}
</style>
