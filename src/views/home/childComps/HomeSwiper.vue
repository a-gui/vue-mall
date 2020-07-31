<template>
	<swiper>
		<!-- 这里是单独抽离出来的home页的轮播图组件
		swiper是大的轮播图外框，里面需要创建小的item。本次是4个，用于4个banner，
		可以使用v-for 。每个item已定义包含一个插槽-->
		<swiper-item v-for="item in banners" :key="item.index">
			<a :href="item.link">
			<img :src="item.image" alt="" />
			<!-- 要动态绑定图像，所以src要加: -->
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
//这里把原先导入到home页的整体剥离过来
// 直接导入一个对象，而不是一个个导入，是因为swiper封装了一个index.js，统一导出该对象
import { Swiper,SwiperItem } from "components/common/swiper";
	export default {
		name:"HomeSwiper",
		//从home页拿过来后没有数据，怎么办，需要父级把banners数据传过来,所以定义对外接口props。
		props: {
			banners: {
				type:Array,
				default() {
					return []
				}
			}
		},
		components: {
			Swiper,
			SwiperItem
		}
	}
</script>