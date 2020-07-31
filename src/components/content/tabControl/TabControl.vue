<template>
	<div class="tab-control">
		<!--1.【选型】如果这里要做tab组件，共用到首页和分类页内。用于点击展示不同的内容
		发现：各处仅仅是文字不一样。
		如果是文字和样式都各不一样，最好的是用插槽。
		但如果只是文字不一样，就不要用插槽了，用数组，传入props，
		所以也可以传入标题属性，-->
		<!-- 分组：上面是大区块，下面div是一个个tab，有几个div取决于数组 -->
		<!-- 2.【点击一个tab显示红色实现思路】再设定一个动态class，选中时active为true，啥时候选中，颜色，传入index确定选的是哪个.
		class是一个对象语法，active是true的那个显示红色-->
		<!-- 3.这个组件是一个个独立组件的业务组件，所以放在业务content内 -->
		<div v-for="(item, index) in titles" :key="index" class="tab-control-item"
		:class="{active: index=== currentIndex}"
		@click="tabClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "TabControl",
	props: {
		//把title传进来，用我只需要传文字即可。
		titles: {
			type: Array,
			default(){
				return []
			}
		}
	},
	data() {
		return {
			//记录当前谁处于被选中,默认第一个
			currentIndex: 0
		};
	},
	methods: {
		tabClick(index) {
			// 1.改变currentIndex的值为当前索引值
			this.currentIndex = index
			//向父级发送tabclick点击事件，判断点击位置，传Index
			this.$emit("tabClick",index)
		}
	},
};
</script>

<style scoped>
.tab-control {
	display: flex;
	text-align: center;
	font-size:15px;
	height: 40px;
	line-height: 40px;
	background-color: #fff;
}
.tab-control-item {
	/* 里面各个div平分。文字默认其实是靠左的,所以需要父级text-align控制文字居中*/
	flex:1;
	/* line-height可以从父级继承，所以可以放上面。 */
	/*height: 40px;
	line-height: 40px;*/
}
.active {
	color: var(--color-high-text);
}
.active span{
	border-bottom: 3px solid var(--color-tint);
	padding: 5px;
}
</style>
