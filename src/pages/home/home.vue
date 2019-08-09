<template>
    <div id="home">
      <!-- 标题栏 -->
      <nav-bar class="nav-bar"><div slot="center">首页</div></nav-bar>

      <!-- 轮播图 -->
      <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link"></a>
          <img :src="item.image" alt="">
        </swiper-item>
      </swiper>

      <!-- 优惠券 -->
      <recommend :recommend="recommends"/>
    </div>
</template>

<script>
import { getHomeData } from '@/network/home.js'

import NavBar from '@/components/navbar/NavBar.vue'

import { Swiper, SwiperItem } from '@/components/swiper/index.js'

import Recommend from './childrenCom/Recommend.vue'
export default {
  name: 'home',
  data () {
    return {
      banners:[],
      recommends:[]
    }
  },
  created () {
    getHomeData().then(res => {
      console.log(res);
      const {data,status} = res;
      if(status === 200){
        this.banners = data.data.banner.list;

        this.recommends = data.data.recommend.list;
      }
    })
  },
  methods: {

  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    Recommend
  }
}
</script>

<style scoped lang="less">
#home {
  .nav-bar {
    background-color: var(--color-tint);
    color:#fff;
  }
}
</style>
