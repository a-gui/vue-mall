import Swiper from "./Swiper";
import SwiperItem from "./SwiperItem";

export { Swiper, SwiperItem };

// 此js文件作用是将这2个公共组件用一个对象统一导出。
// 好处是在引用的父组件内，可以直接导入一个对象，而不是一个个导入，就是是因为swiper封装了一个js，统一导出该对象
// import { Swiper, SwiperItem } from "components/common/swiper";

// 对比未封装前导入是这样的，好处可见减少了父组件代码量
// import Swiper from "components/common/swiper/Swiper";
// import SwiperItem from "components/common/swiper/SwiperItem";
