<!--  -->
<template>
<!-- 如果想明确的拿到某个元素的话，使用ref.ref/children绑定到子组件上 -->
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from  'better-scroll'
	export default {
		name: 'Scroll',
		data() {
			return {
				scroll:null
			};
		},
		mounted() {
			//this.scroll = new BScroll(document.querySelector('wrapper'),{
				//使用ref注册到组件或普通元素上，使用$refs,拿到组件
			this.scroll = new BScroll(this.$refs.wrapper,{

			})
		},
	};
</script>

<style scoped>

</style>
