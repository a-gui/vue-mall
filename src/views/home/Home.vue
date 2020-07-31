<template>
  <!-- <h2>首页</h2> -->
  <!-- 当组件中template及props等使用驼峰式命名，在html中对应的改成短横线命名方式。 -->
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 导入了子组件轮播图，将banners数据传给子 -->

    <scroll class="content">
    <home-swiper :banners=banners></home-swiper>
    <recommend-view :recommends=recommends></recommend-view>
    <feature-view/>
    <tab-control
      :titles="['流行','精选','新款']"
      @tabClick=tabClick
      class="tab-control"></tab-control>
    <!--上面是存储这3个tab的数据，为了较少延迟，一次性取到首页所有数据，存到一个变量里。
    每个tab下存数据的都是数组，但是每tab下页码都不同，所以考虑，
    goods:{
      'pop':{page:5,list:[150]},
      'news':{page:3,list:[60]},
      'sell':{page:1,list:[30]}
    }，然后去network里请求数据-->
    <!-- @tabClick=tabClick是监听子级发送的tabClick，使用本父级的tabClick方法 -->
    <!--下面是商品列表，我在good-list线定义一个属性goods，数组，接收home页传来的商品信息，
    其应该获取的是哪个tab类型下的list。goods被自定义为一个对象，所以应该是-->
    <!--<good-list :goods="goods['pop'].list"></good-list>-->
    <!--<good-list :goods="goods[currentType].list"></good-list>-->
    <!-- :goods绑定的值太长了，也可以放入计算属性里 -->
    <good-list :goods=showGoodsList></good-list>
  </scroll>
 </div>
</template>

<script>
//导入公共和业务组件
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll';

//导入本页面子组件:轮播图、推荐区块
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

// 导入接口请求方法,（只有导出时是default才可以省去大括号.）
import { getHomeMultidata, getHomeGoods } from 'network/home';

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      //默认取第一页
      goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        //默认当前选取的goods类型时pop
      currentType:'pop'
    };
  },

  computed: {
      showGoodsList() {
        return this.goods[this.currentType].list
      }
    },
  // 首页组件创建完成之后，开始请求轮播图数据
  created() {
    // 1.created组件创建完就开始执行函数.
    //created一般只做主要逻辑。具体方法实现逻辑放入methods里,所以下面挪到methods里了
    //如果不带this，指的是导入的方法，这样是错误的。此时加this取的是methods里的方法，名称可以一样
    this.getHomeMultidata()
    //this.getHomeGoods(type)
    //每个tab都请求一次
    this.getHomeTabGoods('pop')
    this.getHomeTabGoods('new')
    this.getHomeTabGoods('sell')
  },
  methods: {
    /*事件监听相关的方法*/
    //8.自定义这个tabClick点击事件，接受父级传递的tabClick方法
    tabClick(index){
      //查看点击是否有效console.log(index)
      switch(index){
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
        //无其他情况，所以不用写default了
      }
    },
    /*网络请求相关的方法 */
    //res是自己取的局部变量，赋值后会自动消失
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);{"data":{"banner":{"list":}},{"recommend":{"list"}}}
        //数据结构{"data":{"banner":{"context":{"currentTime":1538014774},"isEnd":true,"list":[{"acm":...这里是轮播图数据
        // 获取轮播图数据
        this.banners = res.data.banner.list;
        // 获取轮播图下面的推荐数据
        this.recommends = res.data.recommend.list;
        // 获取到数据后，开始在模板内写DOM组件
      })
    },
    getHomeTabGoods(type){
    //  getHomeGoods(type,1).then(res => {
    //  console.log(res)
    //})
    //为了page不要写死1，改为每次自动加1.取goods对象下的类型中的page
    //把数据塞进该类型的数组里面
      const page = this.goods[type].page + 1

      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
  }}
}
</script>

<style scoped>
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
</style>
