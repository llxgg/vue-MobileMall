<template>
    <div id="home">
      <!-- 标题栏 -->
      <nav-bar class="nav-bar"><div slot="center">首页</div></nav-bar>

      <!-- 轮播图 -->
      <swiper class="swipper">
        <swiper-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link"></a>
          <img :src="item.image" alt="">
        </swiper-item>
      </swiper>

      <!-- 优惠券 -->
      <recommend :recommend="recommends"/>

      <!-- 更多 -->
      <feature-view />

      <!-- tabControl导航栏 -->
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>

      <!-- 商品列表 -->
      <good-list :goodList="goods[currentShow].list"/>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
</template>

<script>
import { getHomeData,getHomeGoods } from '@/network/home.js'

import NavBar from '@/components/navbar/NavBar.vue'

import { Swiper, SwiperItem } from '@/components/swiper/index.js'

import Recommend from './childrenCom/Recommend.vue'

import FeatureView from './childrenCom/featureView.vue'

import TabControl from '@/components/tabControl/tabControl.vue'

import GoodList from '@/components/goodList/GoodList.vue'
export default {
  name: 'home',
  data () {
    return {
      banners:[],
      recommends:[],
      // 划分数据解构，一开始就加载三种不同的数据，每一种都加载一页，把加载的数据放到list中
      goods:{
        'pop':{'page':0,'list':[]},
        'new':{'page':0,'list':[]},
        'sell':{'page':0,'list':[]}
      },
      currentShow:'pop'
    }
  },
  created () {
    getHomeData().then(res => {
      const {data,status} = res;
      if(status === 200){
        this.banners = data.data.banner.list;

        this.recommends = data.data.recommend.list;
      }
    }),

    this.getHomeGoodsList('pop');
    this.getHomeGoodsList('new');
    this.getHomeGoodsList('sell');
  },
  methods: {
    // 获取TabControl 的点击事件：把子组件中的index传递回来
    tabClick(index){
      // console.log(index);
      switch (index){
        case 0:
          this.currentShow = 'pop';
            break;
        case 1:
          this.currentShow = 'new';
          break;
        case 2:
          this.currentShow = 'sell';
          break;
      }
    },

    // 把封装的请求方式放在 methods上请求，created直接调用就行。
    getHomeGoodsList(type){
      const page = this.goods[type].page + 1; // 获取当前的type类型的page页码，加1

      getHomeGoods(type,page).then(res => {
        // 得到的是 一个数组结构的数据，把他里面的内容解构放进list数组中：
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);

        // 请求完毕后，要更新 page
        this.goods[type].page += 1;
      })
    }
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    Recommend,
    TabControl,
    FeatureView,
    GoodList
  }
}
</script>

<style scoped lang="less">
#home {
  .nav-bar {
    width: 100%;
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    z-index: 999;
  }

  .swipper {
    padding-top: 44px;
  }

  .tab-control {
    position: sticky; /*css3新增的属性，只要超出范围，就自动转变为 fixed */
    top: 44px; /* 距离顶部的标题栏 */
    z-index: 999;
  }
}
</style>
